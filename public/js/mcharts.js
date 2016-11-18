function createData(l1, l2, l3, l4, l5, l6) {
    var data = {
        labels: ["Hear The Wind Sing", "Pinball, 1973", "A Wild Sheep Chase", "Hard-Boiled Wonderland And The End of The World", "Norwegian Wood", "The Wind-Up Bird Chronicle"],
        datasets: [{
                label: "Word counts",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [l1, l2, l3, l4, l5, l6]
            }
        ]
    };
    return data;
}

function radarData() {
    var data = {
        labels: ["Sex", "Cooking", "Death", "Sleep", "Music", "Water"],
        datasets: [{
            label: "Hear the Wind Sing",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [5, 3, 25, 8, 18, 40]
        }, {
            label: "Pinball, 1973",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [2, 4, 15, 9, 35, 47]
        }, {
            label: "A Wild Sheep Chase",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [31, 10, 57, 13, 55, 51]
        }, {
            label: "Hard-Boiled Wonderland and the End of the World",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [25, 18, 91, 46, 89, 129]
        }, {
            label: "Norwegian Wood",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [35, 29, 105, 51, 151, 42]
        }, {
            label: "The Wind-Up Bird Chronicle",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [51, 27, 340, 48, 211, 227]
        }]
    };
    return data;
}
