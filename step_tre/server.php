
<?php
  // ZONA DI PRESA DEI DATI
    header('Content-Type: application/json');

      include "database.php";



      // GRAFICO UNO --------------------------------------------------
      $fatturatoType = $graphs[fatturato]["type"]; // tipo grafico OK !!!!!!

      $fatturatoTotale = $graphs[fatturato]["data"]; // fatturato OK!!!


      // GRAFICO DUE --------------------------------------------------
      $fatturatoAgentType = $graphs["fatturato_by_agent"]["type"]; // tipo grafico OK !!!!!!

      $arrayDataAgent = $graphs["fatturato_by_agent"]["data"]; //grabbo il data array

      $nomiAgenti = array_keys($arrayDataAgent); // nomi agenti OK!!!

      $fatturatoAgent = []; // fatturato agenti OK!!!

      foreach ($arrayDataAgent as $fatturato ){
        $fatturatoAgent[] = $fatturato;
      }

      // GRAFICO TRE --------------------------------------------------

      $efficenzaType = $graphs[team_efficiency][type]; // tipo grafico OK !!!!!!

      $arrayDataEfficenza = $graphs["team_efficiency"]["data"];

      $nomiTeam =  array_keys($arrayDataEfficenza); // nomi team OK!!!!

      $andamentoTeam = array_values($arrayDataEfficenza); // Aandamento team OK!!!


      $livello = $_GET["level"];


      function getNumeroByLevel($livello){
        if ($livello === "guest"){
          $numero = 0;
        } elseif ($livello === "employ"){
          $numero = 1;
        } elseif ($livello === "clevel"){
          $numero = 2;
        }
        return $numero;
      }



      $livelloNum = getNumeroByLevel($livello);


      $res = [];

      if ($livelloNum >= 0) {

        $res[] = $fatturatoType;
        $res[] = $fatturatoTotale;
      }

      if ($livelloNum >= 1) {

        $res[] = $fatturatoAgentType;
        $res[] = $nomiAgenti;
        $res[] = $fatturatoAgent;
      }

      if ($livelloNum >= 2) {

        $res[] = $efficenzaType;
        $res[] = $nomiTeam;
        $res[] = $andamentoTeam;
      }



      // $res = [$fatturatoType, $fatturatoTotale, $fatturatoAgentType, $nomiAgenti, $fatturatoAgent, $efficenzaType, $nomiTeam, $andamentoTeam];




    echo json_encode($res);



?>
