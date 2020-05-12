
<?php
  // ZONA DI PRESA DEI DATI
    header('Content-Type: application/json');

      include "database.php";

      // GRAFICO UNO --------------------------------------------------
      $fatturatoType = $graphs[fatturato]["type"]; // TIPO DI GRAFICO

      $fatturatoTotale = $graphs[fatturato]["data"]; // VALORI PER GRAFICO


      // GRAFICO DUE --------------------------------------------------
      $fatturatoAgentType = $graphs["fatturato_by_agent"]["type"]; // TIPO DI GRAFICO

      $arrayDataAgent = $graphs["fatturato_by_agent"]["data"]; //grabbo il data array

      $nomiAgenti = array_keys($arrayDataAgent); // NOMI AGENTI

      $fatturatoAgent = []; // VALORI PER GRAFICO

      foreach ($arrayDataAgent as $fatturato ){
        $fatturatoAgent[] = $fatturato;
      }

      // GRAFICO TRE --------------------------------------------------

      $efficenzaType = $graphs[team_efficiency][type]; // tipo grafico OK !!!!!!

      $arrayDataEfficenza = $graphs["team_efficiency"]["data"];

      $nomiTeam =  array_keys($arrayDataEfficenza); // nomi team OK!!!!

      $andamentoTeam = array_values($arrayDataEfficenza); // Aandamento team OK!!!




      $res = [$fatturatoType, $fatturatoTotale, $fatturatoAgentType, $nomiAgenti, $fatturatoAgent, $efficenzaType, $nomiTeam, $andamentoTeam];



    echo json_encode($res);


?>
