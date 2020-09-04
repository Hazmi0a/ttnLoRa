// ##############################
// // // Chart variables
// #############################


// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample5 = {
    data: (canvas) => {
        let ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(72,72,176,0.4)");
        gradientStroke.addColorStop(0.8, "rgba(72,72,176,0.2)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); // purple colors
        return {
            labels: [
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
            ],
            datasets: [
                {
                    label: "Data",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#ba54f5",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#be55ed",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#be55ed",
                    // pointHoverBorderColor:'rgba(35,46,55,1)',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [
                        80,
                        100,
                        70,
                        80,
                        120,
                        80
                    ]
                },
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(186,84,245,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ],
            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(186,84,245,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ]
        }
    }
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample6 = {
    data: (canvas) => {
        let ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(0,135,191,0.2)");
        gradientStroke.addColorStop(0.8, "rgba(0,135,191,0.1)");
        gradientStroke.addColorStop(0, "rgba(0,84,119,0)"); // blue colors
        return {
            labels: [
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
            ],
            datasets: [
                {
                    label: "Data",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#2380f7",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#2380f7",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#2380f7",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [
                        80,
                        100,
                        70,
                        80,
                        120,
                        80
                    ]
                },
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.0)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ],
            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ]
        }
    }
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample7 = {
    data: (canvas) => {
        let ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(253,93,147,0.8)");
        gradientStroke.addColorStop(0, "rgba(253,93,147,0)"); // blue colors
        return {
            labels: [
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
            ],
            datasets: [
                {
                    label: "Data",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: "#ff5991",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [
                        80,
                        100,
                        70,
                        80,
                        120,
                        80
                    ]
                },
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(253,93,147,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(253,93,147,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ]
        }
    }
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample8 = {
    data: {
        labels: [
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ],
        datasets: [
            {
                label: "Data",
                fill: true,
                backgroundColor: "#ff8a76",
                hoverBackgroundColor: " #ff8a76",
                borderColor: "#ff8a76",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: [
                    80,
                    100,
                    70,
                    80,
                    120,
                    80,
                    130
                ]
            }, {
                label: "Data",
                fill: true,
                backgroundColor: "#2782f0",
                hoverBackgroundColor: " #2782f0",
                borderColor: "#2782f0",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: [
                    60,
                    110,
                    90,
                    70,
                    90,
                    100
                ]
            },
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 120,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ]
        }
    }
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample9 = {
    data: {
        labels: [
            1, 2
        ],
        datasets: [
            {
                label: "Emails",
                pointRadius: 0,
                pointHoverRadius: 0,
                backgroundColor: [
                    "#00c09d", "#e2e2e2"
                ],
                borderWidth: 0,
                data: [60, 40]
            },
        ]
    },
    options: {
        cutoutPercentage: 70,
        legend: {
            display: false
        },

        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },

        scales: {
            yAxes: [
                {
                    display: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "transparent",
                        color: "rgba(255,255,255,0.05)"
                    }
                },
            ],

            xAxes: [
                {
                    display: 0,
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        display: false
                    }
                },
            ]
        }
    }
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const chartExample10 = {
    data: {
        labels: [
            1, 2, 3
        ],
        datasets: [
            {
                label: "Emails",
                pointRadius: 0,
                pointHoverRadius: 0,
                backgroundColor: [
                    "#ff8779", "#2a84e9", "#e2e2e2"
                ],
                borderWidth: 0,
                data: [60, 40, 20]
            },
        ]
    },
    options: {
        cutoutPercentage: 70,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        scales: {
            yAxes: [
                {
                    display: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "transparent",
                        color: "rgba(255,255,255,0.05)"
                    }
                },
            ],
            xAxes: [
                {
                    display: 0,
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        display: false
                    }
                },
            ]
        }
    }
};
let qberData = {
    data: (canvas) => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); // blue colors

        return {
            datasets: [
                {
                    label: "Qunatum Bit Error Rate",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#1f8ef1",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#1f8ef1",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#1f8ef1",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: []
                },
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.0)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 12,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    },
                    afterTickToLabelConversion: function (q) {
                        for (var tick in q.ticks) {
                            q.ticks[tick] += "%";
                        }
                    }
                },
            ],
            xAxes: [
                {
                    type: "realtime",
                    realtime: {
                        duration: 20000,
                        refresh: 5000, // onRefresh callback will be called every 1000 ms
                        delay: 10000,
                        onRefresh: function (chart) { // request data so that it can be received in a callback function
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", "http://localhost:80/qber");
                            var context = this;
                            xhr.onload = function () {
                                if (xhr.readyState === 4 && xhr.status === 200) { // assume the response is an array of {x: timestamp, y: value} objects

                                    var data = JSON.parse(xhr.responseText);

                                    // append the new data array to the existing chart data

                                    Array.prototype.push.apply(chart.data.datasets[0].data, data);

                                    // update chart datasets keeping the current animation
                                    chart.update({preservation: true});
                                }
                            };
                            xhr.send();
                        }
                    },
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                },
            ]
        }
    }
};

let keyRateData = {
    data: (canvas) => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
        gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); // purple colors

        return {
            datasets: [
                {
                    label: "Key Rate",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: "#d048b6",
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: []
                },
            ]
        };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(225,78,202,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1500,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ],
            xAxes: [
                {
                    type: "realtime",
                    realtime: {
                        duration: 20000,
                        refresh: 5000, // onRefresh callback will be called every 1000 ms
                        delay: 10000,
                        onRefresh: function (chart) { // request data so that it can be received in a callback function
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", "http://localhost:80/key_rate");
                            xhr.onload = function () {
                                if (xhr.readyState === 4 && xhr.status === 200) { // assume the response is an array of {x: timestamp, y: value} objects

                                    var data = JSON.parse(xhr.responseText);
                                    console.log(data);

                                    // append the new data array to the existing chart data
                                    Array.prototype.push.apply(chart.data.datasets[0].data, data);

                                    // update chart datasets keeping the current animation
                                    chart.update({preservation: true});
                                }
                            };
                            xhr.send();
                        }
                    },
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(225,78,202,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                },
            ]
        }
    }
};

module.exports = {
    chartExample5, // in src/views/Charts.js
    chartExample6, // in src/views/Charts.js
    chartExample7, // in src/views/Charts.js
    chartExample8, // in src/views/Charts.js
    chartExample9, // in src/views/Charts.js
    chartExample10, // in src/views/Charts.js
    keyRateData,
    qberData
};
