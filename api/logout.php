<?php
    include 'connection.php';
    global $connect;

    $ip = $_GET['ip'];
    $idUser = $_GET['users_id'];

    $queryUpdateSession = "UPDATE sessions SET status='0' WHERE ip_address='$ip' AND users_id='$idUser'";
    $executeSession = mysqli_query($connect, $queryUpdateSession);

    $message = "berhasil update session";
    $data['data']['sessions'] = $message;
    echo json_encode($data);
?>