
<?php
  // ZONA DI PRESA DEI DATI
    header('Content-Type: application/json');

      include "database.php";

    echo json_encode($data);

 ?>
