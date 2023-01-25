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
        $query = "SELECT * FROM agenda";
        $result = mysqli_query($connect, $query);
        while ($value = mysqli_fetch_array($result)) {
            $agenda[] = array(
                'id' => $value['id'],
                'nama' => $value['nama'],
                'deskripsi' => $value['deskripsi'],
                'tempat' => $value['tempat'],
                'tanggal' => $value['tanggal'],
                'waktu' => $value['waktu']
            );  
        }

        $data['data']['result'] = $agenda;
        echo json_encode($data);
    }

    function create(){
        global $connect;
        
        $nama = $_POST['nama'];
        $deskripsi = $_POST['deskripsi'];
        $tempat = $_POST['tempat'];
        $tanggal = $_POST['tanggal'];
        $waktu = $_POST['waktu'];

        $message = "Gagal membuat data baru"; 

        if ($nama && $deskripsi && $tempat && $tanggal && $waktu) {
            $query = "INSERT INTO agenda(nama, deskripsi, tempat, tanggal, waktu) 
                        value ('$nama', '$deskripsi', '$tempat', '$tanggal', '$waktu')";
            $store = mysqli_query($connect, $query);
            if ($store) {
                $message = "Berhasil menambah data dana";
            }
        }

        $data['data']['result'] = $message;
        echo json_encode($data);
    }

    function update(){
        global $connect;
        $id = $_GET['id'];
        $nama = $_POST['nama'];
        $deskripsi = $_POST['deskripsi'];
        $tempat = $_POST['tempat'];
        $tanggal = $_POST['tanggal'];
        $waktu = $_POST['waktu'];

        $query = "UPDATE agenda SET nama='$nama', deskripsi='$deskripsi', tempat='$tempat', 
                    tanggal='$tanggal', waktu='$waktu' WHERE id='$id'";
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

        $query = "DELETE FROM agenda WHERE id='$id'";
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
        $tanggal = $_GET['tanggal'];

        $query = "SELECT * FROM agenda WHERE tanggal LIKE'%$tanggal%'";
        $result = mysqli_query($connect, $query);
        if (mysqli_num_rows($result) == 0) {
            $dana = null;
        }
        else{
            while ($value = mysqli_fetch_array($result)) {
                $dana[] = array(
                    'id' => $value['id'],
                    'nama' => $value['nama'],
                    'deskripsi' => $value['deskripsi'],
                    'tempat' => $value['tempat'],
                    'tanggal' => $value['tanggal'],
                    'waktu' => $value['waktu']
                );  
            }
        }

        $data['data']['result'] = $dana;
        echo json_encode($data);
    }

?>