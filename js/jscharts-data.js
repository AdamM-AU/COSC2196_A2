/* Tools - GitHub Commits */
var ctx = document.getElementById("tools-gitcommit");
ctx.height = 150;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Adam', 'Channon', 'Daniel', 'Jorge', 'Madeleine', 'Samuel'],
        datasets: [{
            label: '# of Commits',
			barPercentage: 1,
			minBarLength: 2,
            data: [103, 4, 9, 0, 1, 3],
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