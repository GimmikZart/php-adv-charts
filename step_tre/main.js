
$(document).ready(function(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data){

      var mesi = getMonths();

      // GRAFICO UNO--------------------------------------------

      var fatturatoType = data[0];

      var fatturatoTotale = data[1];

      // stampo grafico linea fatturato totale
      stampaChart("chartFatturato", fatturatoType, mesi, fatturatoTotale);

      //GRAFICO DUE----------------------------------------------

      var fatturatoAgentType = data[2];

      var nomeAgenti = data[3];

      var fatturatoAgenti = data[4];

      // stampo grafico torta fatturato per agente
      stampaChart("chartAgenti", fatturatoAgentType, nomeAgenti, fatturatoAgenti);

      // GRAFICO TRE ---------------------------------------------

      var efficenzaType = data[5];
        console.log(efficenzaType);

      var nomiTeam = data[6];
      console.log(nomiTeam);

      var andamentoTeam = data[7];
      console.log(andamentoTeam[1]);

      stampaCrossChart("chartAndamento", efficenzaType, mesi, andamentoTeam, nomiTeam);






    }, // fine success
    error: function(error){
      alert("ERRORE" + error);
    },
  }); // fine chiamata ajax
}); //fine document ready


// FUNZIONI GENERICHE -----------------------------------------------------------------------------------------

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


// FUNZIONE PER STAMPARE I MESI
function getMonths(){
  moment.locale("it");
  var mesi = moment.months();
  return mesi;
}



function stampaCrossChart(id, tipoGrafico, labels, data, etichette){
  var ctx = $("#" + id );
  var id = new Chart(ctx, {
    type: tipoGrafico,
    data: {
        labels: labels,
        datasets: [{
            label: etichette[0],
            data: data[0],
            backgroundColor: [
                'rgba(126, 126, 126, 0.6)',
            ],
            borderColor: [
                'rgba(0, 48, 255, 0.6)',
            ]
          }, //fine prima label
          {
              label: etichette[1],
              data: data[1],
              backgroundColor: [
                  'rgba(126, 126, 126, 0.6)',
              ],
              borderColor: [
                  'rgba(3, 115, 15, 0.7)',
              ]
          }, //fine seconda label
          {
              label: etichette[2],
              data: data[2],
              backgroundColor: [
                  'rgba(126, 126, 126, 0.6)',
              ],
              borderColor: [
                  'rgba(189, 241, 16, 0.7)',
              ]
            } //fine terza label
          ],
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
