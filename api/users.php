<?php
    error_reporting(0);
    include 'connection.php';

    $operation = $_GET['operation'];
    switch ($operation) {
        case '':
            normal();
            break;
        
        case 'create':
            create();
            break;

        case 'edit':
            edit();
            break;
        
        case 'update':
            update();
            break;

        case 'delete':
            delete();
            break;

        case 'search':
            search();
            break;

        default:
            normal();
            break;
    }
    
    function normal(){
        global $connect;
        $query = "SELECT * FROM users";
        $result = mysqli_query($connect, $query);
        while ($value = mysqli_fetch_array($result)) {
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

        $data['data']['result'] = $user;
        echo json_encode($data);
    }

    function create(){
        global $connect;
        
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $jabatan = $_POST['jabatan'];
        $no_telp = $_POST['no_telp'];
        $tgl_lahir = $_POST['tgl_lahir'];
        $gender = $_POST['gender'];
        $agama = $_POST['agama'];
        $alamat = $_POST['alamat'];
        $nik = $_POST['nik'];
        $no_kk = $_POST['no_kk'];
        $status = $_POST['status'];

        $message = "Gagal membuat data baru"; 

        $query = "INSERT INTO users(nama, email, pass, jabatan, no_telp, tgl_lahir, gender, agama, alamat, nik, no_kk, status) 
                    value ('$nama', '$email', '$password', '$jabatan', '$no_telp', '$tgl_lahir', '$gender', '$agama', '$alamat', '$nik', '$no_kk', '$status')";
        $store = mysqli_query($connect, $query);
        if ($store) {
            $message = "Berhasil menambah data user";
        }

        $data['data']['result'] = $message;
        echo json_encode($data);
    }

    function update(){
        global $connect;
        $id = $_GET['id'];
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $jabatan = $_POST['jabatan'];
        $no_telp = $_POST['no_telp'];
        $tgl_lahir = $_POST['tgl_lahir'];
        $gender = $_POST['gender'];
        $agama = $_POST['agama'];
        $alamat = $_POST['alamat'];
        $nik = $_POST['nik'];
        $no_kk = $_POST['no_kk'];
        $status = $_POST['status'];

        $query = "UPDATE users SET nama='$nama', email='$email', pass='$password', jabatan='$jabatan', 
                    no_telp='$no_telp', tgl_lahir='$tgl_lahir', gender='$gender', agama='$agama', alamat='$alamat', 
                    nik='$nik', no_kk='$no_kk', status='$status' WHERE id='$id'";
        $update = mysqli_query($connect, $query);
        if ($update) {
            $message = "Data berhasil di update";
        }

        $data['data']['result'] = $message;
        echo json_encode($data);
    }

    function delete(){
        global $connect;
        $id = $_GET['id'];

        $query = "DELETE FROM users WHERE id='$id'";
        $destroy = mysqli_query($connect, $query);

        if ($destroy) {
            $message = "Berhaasil Menghapus Data";
        }
        else{
            $message = "Gagal Menghapus Data";
        }

        $data['data']['result'] = $message;
        echo json_encode($data);
    }

    function search(){
        global $connect;
        $nama = $_GET['nama'];

        $query = "SELECT * FROM users WHERE nama LIKE'%$nama%'";
        $result = mysqli_query($connect, $query);
        if (mysqli_num_rows($result) == 0) {
            $user = null;
        }
        else{
            while ($value = mysqli_fetch_array($result)) {
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
        }

        $data['data']['result'] = $user;
        echo json_encode($data);
    }

?>