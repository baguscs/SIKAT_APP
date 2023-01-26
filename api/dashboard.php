<?php
    include 'connection.php';

    $data = $_GET['data'];

    switch ($data) {
        case 'dana':
            dana();
            break;
        
        case 'agenda':
            agenda();
            break;

        case 'users':    
            users();
            break;

        case 'warga':
            warga();
            break;

        default:
            # code...
            break;
    }

    function dana(){
        global $connect;

        // query get income
        $getIncome = "SELECT jumlah FROM dana WHERE kategori='Pemasukan'";
        $dataIncome = mysqli_query($connect, $getIncome);

        $income = 0;
        // count total income dana
        while ($value = mysqli_fetch_array($dataIncome)) {
            $income += $value['jumlah'];
        }

        // query get outcome
        $getOutcome = "SELECT jumlah FROM dana WHERE kategori='Pengeluaran'";
        $dataOutcome = mysqli_query($connect, $getOutcome);

        $outcome = 0;
        // count total outcome dana
        while ($item = mysqli_fetch_array($dataOutcome)) {
            $outcome += $item['jumlah'];
        }

        // calculate current funds
        $total = number_format($income - $outcome, 0, ",", ".");

        // send result dana to object
        $totalDana['totalDana']['dana'] = $total;
        echo json_encode($totalDana);
    }

    function agenda(){
        global $connect;
        // query get dana must 3 records
        $getAgenda = "SELECT * FROM agenda ORDER BY id DESC LIMIT 3";
        $dataAgenda = mysqli_query($connect, $getAgenda);

        // loop result and input to array
        while ($item = mysqli_fetch_array($dataAgenda)) {
            $agenda[] = array(
                'id' => $item['id'],
                'nama' => $item['nama'],
                'deskripsi' => $item['deskripsi'],
                'tempat' => $item['tempat'],
                'tanggal' => $item['tanggal'],
                'waktu' => $item['waktu']
            );  
        }

        // send result array agenda to object
        $agendas['data']['agenda'] = $agenda;
        echo json_encode($agendas);
    }

    function users(){
        global $connect;

        $ip = $_GET['ip'];

        $querySession = "SELECT * FROM sessions WHERE ip_address='$ip'";
        $executeSession = mysqli_query($connect, $querySession);

        while ($value = mysqli_fetch_array($executeSession)) {
            $idUser = $value['users_id'];  
        }

        $queryUser = "SELECT * FROM users WHERE id='$idUser'";
        $executeUser = mysqli_query($connect, $queryUser);

        while ($value = mysqli_fetch_array($executeUser)) {
            $name = $value['nama'];  
        }

        $users['data']['user'] = $name;
        echo json_encode($users);
    }

    function warga(){
        global $connect;

        $getWarga = "SELECT * FROM users";
        $dataWarga = mysqli_query($connect, $getWarga);

        $count = mysqli_num_rows($dataWarga);
        $warga['data']['warga'] = $count;
        echo json_encode($warga);
    }
?>