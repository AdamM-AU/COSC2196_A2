/* Function for JSFetch Patch */
/* Adam - Generate Graph on fetched data */
function JSFetchGraph(GRAPH) {
	if (GRAPH) {
		var ctx = document.getElementById(GRAPH);
		ctx.height = 150;

		if (GRAPH == "GRAPH-IJ") {
			/* Industry Data - Radar Graph  */
			var data = {
				labels: ["SQL", "Programming Languages", "MS Windows", "Business Management", "Graphic Design", "Building Relationships", "Linux" , "Tech Support","Costumer Service"],
				datasets: [
					{
						label: "Adam",
						backgroundColor: "rgba(179,181,198,0.2)",
						borderColor: "rgba(179,181,198,1)",
						pointBackgroundColor: "rgba(179,181,198,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(179,181,198,1)",
						data: [10, 10, 10, 4, 4, 5, 10, 4, 4]
					},
					{
						label: "Channon",
						backgroundColor: "rgba(255,99,132,0.2)",
						borderColor: "rgba(255,99,132,1)",
						pointBackgroundColor: "rgba(255,99,132,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(255,99,132,1)",
						data: [9, 10, 7, 2, 1, 3, 7, 8, 5]
					},
					{
						label: "Maddie",
						backgroundColor: "rgba(106,13,173,0.2)",
						borderColor: "rgba(106,13,173,1)",
						pointBackgroundColor: "rgba(106,13,173,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(106,13,173,1)",
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					{
						label: "Samuel",
						backgroundColor: "rgba(65,105,225,0.2)",
						borderColor: "rgba(65,105,225,1)",
						pointBackgroundColor: "rgba(65,105,225,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(65,105,225,1)",
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					{
						label: "Jorge",
						backgroundColor: "rgba(255,255,0,0.2)",
						borderColor: "rgba(255,255,0,1)",
						pointBackgroundColor: "rgba(255,255,0,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(255,255,0,1)",
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					{
						label: "Daniel",
						backgroundColor: "rgba(124,252,0,0.2)",
						borderColor: "rgba(124,252,0,1)",
						pointBackgroundColor: "rgba(124,252,0,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(124,252,0,1)",
						data: [10, 1, 10, 5, 1, 8, 1, 9, 8]
					}
				]
			};
			var options = {
					tooltips: {
						mode: 'label'
					},
				};
			var myChart = new Chart(ctx, {
				type: 'radar',
				data: data,
				options: options
			});
		} else if (GRAPH =="GRAPH-IJ2"){
		var data = {
			labels: ["Communication", "Problem Solving", "Organizational skills", "Writing inc Coding", "Teamwork", "Troubleshooting", "Planning" , "Detail-Orientated","Creativity"],
			datasets: [
				{
					label: "Adam",
					backgroundColor: "rgba(179,181,198,0.2)",
					borderColor: "rgba(179,181,198,1)",
					pointBackgroundColor: "rgba(179,181,198,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(179,181,198,1)",
					data: [8, 10, 10, 10, 10, 10, 10, 10, 5]
				},
				{
					label: "Channon",
					backgroundColor: "rgba(255,99,132,0.2)",
					borderColor: "rgba(255,99,132,1)",
					pointBackgroundColor: "rgba(255,99,132,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(255,99,132,1)",
					data: [8, 10, 9, 10, 5, 8, 6, 8, 10]
				},
				{
					label: "Maddie",
					backgroundColor: "rgba(106,13,173,0.2)",
					borderColor: "rgba(106,13,173,1)",
					pointBackgroundColor: "rgba(106,13,173,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(106,13,173,1)",
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					label: "Samuel",
					backgroundColor: "rgba(65,105,225,0.2)",
					borderColor: "rgba(65,105,225,1)",
					pointBackgroundColor: "rgba(65,105,225,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(65,105,225,1)",
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					label: "Jorge",
					backgroundColor: "rgba(255,255,0,0.2)",
					borderColor: "rgba(255,255,0,1)",
					pointBackgroundColor: "rgba(255,255,0,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(255,255,0,1)",
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					label: "Daniel",
					backgroundColor: "rgba(124,252,0,0.2)",
					borderColor: "rgba(124,252,0,1)",
					pointBackgroundColor: "rgba(124,252,0,1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(124,252,0,1)",
					data: [10, 8, 9, 8, 8, 9, 10, 5, 6]
				}
			]
		};
		var options = {
				tooltips: {
					mode: 'label'
				},
			};
		var myChart = new Chart(ctx, {
			type: 'radar',
			data: data,
			options: options
		});
	}
		else if (GRAPH == "GRAPH-TL") {
			/* Tools - GitHub Commits - Bar Graph */
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Adam', 'Channon', 'Daniel', 'Jorge', 'Madeleine', 'Samuel'],
					datasets: [{
						label: '# of Commits',
						barPercentage: 1,
						minBarLength: 2,
						data: [119, 19, 9, 0, 1, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
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
			});
		} else {
			// Do Nothing
		}
	}
	return false;
}
