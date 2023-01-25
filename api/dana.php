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
        $query = "SELECT * FROM dana";
        $result = mysqli_query($connect, $query);
        while ($value = mysqli_fetch_array($result)) {
            $dana[] = array(
                'id' => $value['id'],
                'kategori' => $value['kategori'],
                'jumlah' => $value['jumlah'],
                'keterangan' => $value['keterangan'],
                'tanggal' => $value['tanggal']
            );  
        }

        $data['data']['result'] = $dana;
        echo json_encode($data);
    }

    function create(){
        global $connect;
        
        $kategori = $_POST['kategori'];
        $jumlah = $_POST['jumlah'];
        $keterangan = $_POST['keterangan'];
        $tanggal = $_POST['tanggal'];

        $message = "Gagal membuat data baru"; 

        if ($kategori && $jumlah && $keterangan && $tanggal) {
            $query = "INSERT INTO dana(kategori, jumlah, keterangan, tanggal) 
                        value ('$kategori', '$jumlah', '$keterangan', '$tanggal')";
            $store = mysqli_query($connect, $query);
            if ($store) {
                $message = "Berhasil menambah data agenda";
            }
        }

        $data['data']['result'] = $message;
        echo json_encode($data);
    }

    function edit(){
        global $connect;
        $id = $_GET['id'];
        $query = "SELECT * FROM dana WHERE id='$id'";
        $getData = mysqli_query($connect, $query);

        while ($value = mysqli_fetch_array($getData)) {
            $result[] = array(
                'id' => $value['id'],
                'kategori' => $value['kategori'],
                'jumlah' => $value['jumlah'],
                'keterangan' => $value['keterangan'],
                'tanggal' => $value['tanggal']
            );
        }

        $data['data']['result'] = $result;
        echo json_encode($data);
    }

    function update(){
        global $connect;
        $id = $_GET['id'];
        $kategori = $_POST['kategori'];
        $jumlah = $_POST['jumlah'];
        $keterangan = $_POST['keterangan'];
        $tanggal = $_POST['tanggal'];

        $query = "UPDATE dana SET kategori='$kategori', jumlah='$jumlah', keterangan='$keterangan', tanggal='$tanggal' WHERE id='$id'";
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

        $query = "DELETE FROM dana WHERE id='$id'";
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

        $query = "SELECT * FROM dana WHERE tanggal LIKE'%$tanggal%'";
        $result = mysqli_query($connect, $query);
        if (mysqli_num_rows($result) == 0) {
            $dana = null;
        }
        else{
            while ($value = mysqli_fetch_array($result)) {
                $dana[] = array(
                    'id' => $value['id'],
                    'kategori' => $value['kategori'],
                    'jumlah' => $value['jumlah'],
                    'keterangan' => $value['keterangan'],
                    'tanggal' => $value['tanggal']
                );  
            }
        }

        $data['data']['result'] = $dana;
        echo json_encode($data);
    }

?>