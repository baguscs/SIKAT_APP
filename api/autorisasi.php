<?php
    include 'connection.php';
    global $connect;

    $ip = $_GET['ip'];

    $query = "SELECT * FROM sessions WHERE ip_address='$ip'";
    $execute = mysqli_query($connect, $query);

    while ($value = mysqli_fetch_array($execute)) {
        $idUser = $value['users_id'];  
    }

    $queryUser = "SELECT * FROM users WHERE id='$idUser'";
    $executeUser = mysqli_query($connect, $queryUser);
    while ($value = mysqli_fetch_array($executeUser)) {
        $post = $value['jabatan'];  
    }

    $users['data']['user'] = $post;
    echo json_encode($users);
?>