$(document).ready(function() {
   
    var ctx = $("#line-chartcanvas");

    var data = {
        labels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
        datasets: [
            {
                label: "Саня",
                data: [10, 15, 20, 25, 30, 44, -112, -15, -15, -15, -15, -15],
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                pointRadius: 5
            },
            {
                label: "Лёха",
                data: [22, 44, 15, -66, 11, 4, -20, -90, -84, -1, -5, 56],
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                pointRadius: 5
            },
        ],
    };

    var options = {
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#111"
        }, 
        legend: {
            display: true,
            position: "bottom"
        },
    }

    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
    });

});