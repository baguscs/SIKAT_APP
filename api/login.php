<?php
    error_reporting(0);
    include 'connection.php';
    global $connect;

    $email = $_GET['email'];
    $password = $_GET['password'];
    $ip = $_GET['ip'];

    $queryLogin = "SELECT * FROM users WHERE email='$email' and pass='$password'";
    $getData = mysqli_query($connect, $queryLogin);

    while ($value = mysqli_fetch_array($getData)) {
        $idUser = $value['id'];
    }

    $countData = mysqli_num_rows($getData);

    if ($countData) {
        $queryChekSession = "SELECT * FROM sessions WHERE ip_address='$ip' AND users_id='$idUser'";
        $executeSession = mysqli_query($connect, $queryChekSession);
        $count = mysqli_num_rows($executeSession);

        if ($count == 1) {
            $queryUpdateSession = "UPDATE sessions SET status='1' WHERE users_id='$idUser'";
            $executeUpdateSession = mysqli_query($connect, $queryUpdateSession);

            $message = "berhasil update session";
        } else {
            $queryCreateSession = "INSERT INTO sessions(ip_address, users_id, status) VALUE ('$ip', '$idUser', 1)";
            $executeCreateSession = mysqli_query($connect, $queryCreateSession);

            $message = "berhasil create sessions";
        }
        
    }
    else{
        $message = null;
    }


    $data['data']['sessions'] = $message;
    echo json_encode($data);
?>