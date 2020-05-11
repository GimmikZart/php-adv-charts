
$(document).ready(function(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){

      var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

      // GRAFICO UNO
      var fatturatoType = data.fatturato["type"]; // TIPO DI GRAFICO
      var fatturato = data.fatturato["data"]; // VALORI PER GRAFICO

      // GRAFICO DUE
      var fatturatoAgentType = data.fatturato_by_agent["type"]; // TIPO DI GRAFICO

      var arrayDataAgent = data.fatturato_by_agent["data"]; //grabbo il data array

      var nomiAgenti = []; // NOMI AGENTI
      var fatturatoAgent = []; // VALORI PER GRAFICO

      for (var nomi in arrayDataAgent ){
        nomiAgenti.push(nomi);                         // ciclo l'array per estrapolare i dati che mi servono
        fatturatoAgent.push(arrayDataAgent[nomi]);
      };


      stampaChart("chartFatturato", fatturatoType, mesi, fatturato);

      stampaChart("chartAgenti", fatturatoAgentType, nomiAgenti, fatturatoAgent);




    }, // fine success
    error: function(error){
      alert("ERRORE" + error);
    },

  }); // fine chiamata ajax


}); //fine document ready


// FUNZIONI GENERICHE

function stampaChart(id, tipoGrafico, labels, data){
  var ctx = $("#" + id );
  var id = new Chart(ctx, {
    type: tipoGrafico,
    data: {
        labels: labels,
        datasets: [{
            label: 'VENDITE',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(213, 42, 24, 0.7)',
                'rgba(164, 74, 28, 0.7)',
                'rgba(231, 28, 75, 0.7)',
                'rgba(185, 85, 36, 0.7)',
                'rgba(153, 217, 225, 0.7)',
                'rgba(217, 185, 185, 0.7)',
                'rgba(53, 194, 153, 0.7)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(213, 42, 24, 1)',
                'rgba(164, 74, 28, 1)',
                'rgba(231, 28, 75, 1)',
                'rgba(185, 85, 36, 1)',
                'rgba(153, 217, 225, 1)',
                'rgba(217, 185, 185, 1)',
                'rgba(53, 194, 153, 1)',
            ],
            borderWidth: 2
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    }); //fine mychart

} //FINE FUNZIONE STAMPACHART
