
// var input = './85.csv'
// console.log(input)
// var result = $.csv.toArrays(input);
//
$(function () {
	$.get('./85.csv').done(function(response){

		var result = $.csv.toArrays(response);

		var players = []

		result.forEach(function(player,index){

			var name = player[1]

			var winPercentage = player[22]/player[8]
			var winPercentage = Math.round(100*winPercentage)/100;   
			var gamesPlayed = player[8]
			players.push({x:parseInt(gamesPlayed),y:winPercentage,idiot:name})


		})
		console.log(players[0].name)
		$('#container').highcharts({
			chart: {
				type: 'scatter',
				zoomType: 'xy',
				backgroundColor:'transparent'
			},
			title: {
				text: 'Win Percentage vs Games Played of Quarterbacks with At Least 85 Starts'
			},
			xAxis: {
				title: {
					enabled: true,
					text: 'Games Played'
				},
				startOnTick: true,
				endOnTick: true,
				showLastLabel: true
			},
			yAxis: {
				title: {
					text: 'Win Percentage'
				}
			},
			series: [{name:'Quarterbacks > 85 Games',
			color: 'rgba(46, 169, 223, .9)',
			data: players
		}],
		plotOptions: {
			scatter: {
				marker: {
					radius: 6,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: true
						}
					}
				},
				tooltip: {
					headerFormat: '',
					pointFormat: '<b>{point.idiot}</b><br>Wins:{point.x} Win Pct:{point.y}'
				}
			}
		}
	});






	})
});

//name = result[0][1] etc...
//wins 22
//losses 23
//ties 24
//games started 8
