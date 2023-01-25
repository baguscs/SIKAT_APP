<?php
    error_reporting(0);
    include 'connection.php';

    $operation = $_GET['operation'];

    switch ($operation) {
        case '':
            getProfile();
            break;
        
        case 'update-email':
            updateEmail();
            break;

        default:
            getProfile();
            break;
    }

    function getProfile(){
        global $connect;

        $ip = $_GET['ip'];

        $querySession = "SELECT * FROM sessions WHERE ip_address='$ip' AND status=1";
        $executeSession = mysqli_query($connect, $querySession);

        while ($value = mysqli_fetch_array($executeSession)) {
            $idUser = $value['users_id'];  
        }

        $queryUser = "SELECT * FROM users WHERE id='$idUser'";
        $executeUser = mysqli_query($connect, $queryUser);

        while ($value = mysqli_fetch_array($executeUser)) {
            $user[] = array(
                'id' => $value['id'],
                'nama' => $value['nama'],
                'email' => $value['email'],
                'password' => $value['pass'],
                'jabatan' => $value['jabatan'],
                'no_telp' => $value['no_telp'],
                'tgl_lahir' => $value['tgl_lahir'],
                'gender' => $value['gender'],
                'agama' => $value['agama'], 
                'alamat' => $value['alamat'],
                'nik' => $value['nik'],
                'no_kk' => $value['no_kk'],
                'status' => $value['status'],
            );  
        }

        $users['user'] = $user;
        echo json_encode($users);
    }

    function updateEmail(){
        global $connect;

        $id = $_GET['id'];
        $email = $_POST['email'];

        $queryUpdate = "UPDATE users SET email='$email' WHERE id='$id'";
        $execute = mysqli_query($connect, $queryUpdate);
        
        $message = "Berhasil mengedit email";

        $data['data']['result'] = $message;
        echo json_encode($data);
    }
    
?>