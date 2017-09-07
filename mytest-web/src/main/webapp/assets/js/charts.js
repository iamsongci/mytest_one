var Charts = function () {
    //function to initiate jQRangeSlider
    //There are plenty of options you can set to control the precise looks of your plot. 
    //You can control the ticks on the axes, the legend, the graph type, etc.
    //For more information, please visit http://www.flotcharts.org/
    var runCharts = function () {
        // Basic Chart 
        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25) {
            d1.push([i, Math.sin(i)]);
        }
        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25) {
            d2.push([i, Math.cos(i)]);
        }
        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1) {
            d3.push([i, Math.tan(i)]);
        }
        $.plot("#placeholder", [{
            label: "sin(x)",
            data: d1
        }, {
            label: "cos(x)",
            data: d2
        }, {
            label: "tan(x)",
            data: d3
        }], {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                ticks: [0, [Math.PI / 2, "\u03c0/2"],
                    [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"],
                    [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                ticks: 10,
                min: -2,
                max: 2,
                tickDecimals: 3
            },
            grid: {
                backgroundColor: {
                    colors: ["#fff", "#eee"]
                },
                borderWidth: {
                    top: 1,
                    right: 1,
                    bottom: 2,
                    left: 2
                }
            }
        });
        // Toggling Series 
        var datasets = {
            "usa": {
                label: "USA",
                data: [
                    [1988, 483994],
                    [1989, 479060],
                    [1990, 457648],
                    [1991, 401949],
                    [1992, 424705],
                    [1993, 402375],
                    [1994, 377867],
                    [1995, 357382],
                    [1996, 337946],
                    [1997, 336185],
                    [1998, 328611],
                    [1999, 329421],
                    [2000, 342172],
                    [2001, 344932],
                    [2002, 387303],
                    [2003, 440813],
                    [2004, 480451],
                    [2005, 504638],
                    [2006, 528692]
                ]
            },
            "russia": {
                label: "Russia",
                data: [
                    [1988, 218000],
                    [1989, 203000],
                    [1990, 171000],
                    [1992, 42500],
                    [1993, 37600],
                    [1994, 36600],
                    [1995, 21700],
                    [1996, 19200],
                    [1997, 21300],
                    [1998, 13600],
                    [1999, 14000],
                    [2000, 19100],
                    [2001, 21300],
                    [2002, 23600],
                    [2003, 25100],
                    [2004, 26100],
                    [2005, 31100],
                    [2006, 34700]
                ]
            },
            "uk": {
                label: "UK",
                data: [
                    [1988, 62982],
                    [1989, 62027],
                    [1990, 60696],
                    [1991, 62348],
                    [1992, 58560],
                    [1993, 56393],
                    [1994, 54579],
                    [1995, 50818],
                    [1996, 50554],
                    [1997, 48276],
                    [1998, 47691],
                    [1999, 47529],
                    [2000, 47778],
                    [2001, 48760],
                    [2002, 50949],
                    [2003, 57452],
                    [2004, 60234],
                    [2005, 60076],
                    [2006, 59213]
                ]
            },
            "germany": {
                label: "Germany",
                data: [
                    [1988, 55627],
                    [1989, 55475],
                    [1990, 58464],
                    [1991, 55134],
                    [1992, 52436],
                    [1993, 47139],
                    [1994, 43962],
                    [1995, 43238],
                    [1996, 42395],
                    [1997, 40854],
                    [1998, 40993],
                    [1999, 41822],
                    [2000, 41147],
                    [2001, 40474],
                    [2002, 40604],
                    [2003, 40044],
                    [2004, 38816],
                    [2005, 38060],
                    [2006, 36984]
                ]
            },
            "denmark": {
                label: "Denmark",
                data: [
                    [1988, 3813],
                    [1989, 3719],
                    [1990, 3722],
                    [1991, 3789],
                    [1992, 3720],
                    [1993, 3730],
                    [1994, 3636],
                    [1995, 3598],
                    [1996, 3610],
                    [1997, 3655],
                    [1998, 3695],
                    [1999, 3673],
                    [2000, 3553],
                    [2001, 3774],
                    [2002, 3728],
                    [2003, 3618],
                    [2004, 3638],
                    [2005, 3467],
                    [2006, 3770]
                ]
            },
            "sweden": {
                label: "Sweden",
                data: [
                    [1988, 6402],
                    [1989, 6474],
                    [1990, 6605],
                    [1991, 6209],
                    [1992, 6035],
                    [1993, 6020],
                    [1994, 6000],
                    [1995, 6018],
                    [1996, 3958],
                    [1997, 5780],
                    [1998, 5954],
                    [1999, 6178],
                    [2000, 6411],
                    [2001, 5993],
                    [2002, 5833],
                    [2003, 5791],
                    [2004, 5450],
                    [2005, 5521],
                    [2006, 5271]
                ]
            },
            "norway": {
                label: "Norway",
                data: [
                    [1988, 4382],
                    [1989, 4498],
                    [1990, 4535],
                    [1991, 4398],
                    [1992, 4766],
                    [1993, 4441],
                    [1994, 4670],
                    [1995, 4217],
                    [1996, 4275],
                    [1997, 4203],
                    [1998, 4482],
                    [1999, 4506],
                    [2000, 4358],
                    [2001, 4385],
                    [2002, 5269],
                    [2003, 5066],
                    [2004, 5194],
                    [2005, 4887],
                    [2006, 4891]
                ]
            }
        };
        // hard-code color indices to prevent them from shifting as
        // countries are turned on/off
        var i = 0;
        $.each(datasets, function (key, val) {
            val.color = i;
            ++i;
        });
        // insert checkboxes
        var choiceContainer = $("#choices");
        $.each(datasets, function (key, val) {
            choiceContainer.append("<label for='id" + key + "' class='checkbox'><input type='checkbox' name='" + key + "' checked='checked' id='id" + key + "'>" + val.label + "</label>");
        });
        choiceContainer.find("input").iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            radioClass: 'iradio_minimal-grey',
            increaseArea: '10%' // optional
        }).on('ifClicked', function (event) {
            $(this).iCheck('toggle');
            plotAccordingToChoices();
        });

        function plotAccordingToChoices() {
            var data = [];
            choiceContainer.find("input:checked").each(function () {
                var key = $(this).attr("name");
                if (key && datasets[key]) {
                    data.push(datasets[key]);
                }
            });
            if (data.length > 0) {
                $.plot("#placeholder2", data, {
                    yaxis: {
                        min: 0
                    },
                    xaxis: {
                        tickDecimals: 0
                    }
                });
            }
        }
        plotAccordingToChoices();
        // Interactivity 
        function randValue() {
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        }
        var pageviews = [
            [1, randValue()],
            [2, randValue()],
            [3, 2 + randValue()],
            [4, 3 + randValue()],
            [5, 5 + randValue()],
            [6, 10 + randValue()],
            [7, 15 + randValue()],
            [8, 20 + randValue()],
            [9, 25 + randValue()],
            [10, 30 + randValue()],
            [11, 35 + randValue()],
            [12, 25 + randValue()],
            [13, 15 + randValue()],
            [14, 20 + randValue()],
            [15, 45 + randValue()],
            [16, 50 + randValue()],
            [17, 65 + randValue()],
            [18, 70 + randValue()],
            [19, 85 + randValue()],
            [20, 80 + randValue()],
            [21, 75 + randValue()],
            [22, 80 + randValue()],
            [23, 75 + randValue()],
            [24, 70 + randValue()],
            [25, 65 + randValue()],
            [26, 75 + randValue()],
            [27, 80 + randValue()],
            [28, 85 + randValue()],
            [29, 90 + randValue()],
            [30, 95 + randValue()]
        ];
        var visitors = [
            [1, randValue() - 5],
            [2, randValue() - 5],
            [3, randValue() - 5],
            [4, 6 + randValue()],
            [5, 5 + randValue()],
            [6, 20 + randValue()],
            [7, 25 + randValue()],
            [8, 36 + randValue()],
            [9, 26 + randValue()],
            [10, 38 + randValue()],
            [11, 39 + randValue()],
            [12, 50 + randValue()],
            [13, 51 + randValue()],
            [14, 12 + randValue()],
            [15, 13 + randValue()],
            [16, 14 + randValue()],
            [17, 15 + randValue()],
            [18, 15 + randValue()],
            [19, 16 + randValue()],
            [20, 17 + randValue()],
            [21, 18 + randValue()],
            [22, 19 + randValue()],
            [23, 20 + randValue()],
            [24, 21 + randValue()],
            [25, 14 + randValue()],
            [26, 24 + randValue()],
            [27, 25 + randValue()],
            [28, 26 + randValue()],
            [29, 27 + randValue()],
            [30, 31 + randValue()]
        ];
        var plot = $.plot($("#placeholder3"), [{
            data: pageviews,
            label: "Unique Visits"
        }, {
            data: visitors,
            label: "Page Views"
        }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.05
                        }, {
                            opacity: 0.01
                        }]
                    }
                },
                points: {
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#eee",
                borderWidth: 0
            },
            colors: ["#d12610", "#37b7f3", "#52e136"],
            xaxis: {
                ticks: 11,
                tickDecimals: 0
            },
            yaxis: {
                ticks: 11,
                tickDecimals: 0
            }
        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 15,
                border: '1px solid #333',
                padding: '4px',
                color: '#fff',
                'border-radius': '3px',
                'background-color': '#333',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }
        var previousPoint = null;
        $("#placeholder3").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });
        //Real Time 
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });
        var plot = $.plot("#placeholder4", [getRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
        //Categories 
        var data_category = [
            ["January", 10],
            ["February", 8],
            ["March", 4],
            ["April", 13],
            ["May", 17],
            ["June", 9]
        ];
        $.plot("#placeholder5", [data_category], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.6,
                    align: "center",
                    fillColor: "#4DBEF4",
                    lineWidth: 0,
                }
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            }
        });
        // Annotations
        var d_1 = [];
        for (var i = 0; i < 20; ++i) {
            d_1.push([i, Math.sin(i)]);
        }
        var data_annotation = [{
            data: d_1,
            label: "Pressure",
            color: "#333"
        }];
        var markings = [{
            color: "#f6f6f6",
            yaxis: {
                from: 1
            }
        }, {
            color: "#f6f6f6",
            yaxis: {
                to: -1
            }
        }, {
            color: "#000",
            lineWidth: 1,
            xaxis: {
                from: 2,
                to: 2
            }
        }, {
            color: "#000",
            lineWidth: 1,
            xaxis: {
                from: 8,
                to: 8
            }
        }];
        var placeholder = $("#placeholder6");
        var plot_annotation = $.plot(placeholder, data_annotation, {
            bars: {
                show: true,
                barWidth: 0.5,
                fill: 0.9
            },
            xaxis: {
                ticks: [],
                autoscaleMargin: 0.02
            },
            yaxis: {
                min: -2,
                max: 2
            },
            grid: {
                markings: markings
            }
        });
        var o = plot_annotation.pointOffset({
            x: 2,
            y: -1.2
        });
        // Append it to the placeholder that Flot already uses for positioning
        placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Warming up</div>");
        o = plot_annotation.pointOffset({
            x: 8,
            y: -1.2
        });
        placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Actual measurements</div>");
        // Draw a little arrow on top of the last label to demonstrate canvas
        // drawing
        var ctx = plot_annotation.getCanvas().getContext("2d");
        ctx.beginPath();
        o.left += 4;
        ctx.moveTo(o.left, o.top);
        ctx.lineTo(o.left, o.top - 10);
        ctx.lineTo(o.left + 10, o.top - 5);
        ctx.lineTo(o.left, o.top);
        ctx.fillStyle = "#000";
        ctx.fill();
        // Default Pie 
        var data_pie = [],
            series = Math.floor(Math.random() * 6) + 3;
        for (var i = 0; i < series; i++) {
            data_pie[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            };
        }
        $.plot('#placeholder7', data_pie, {
            series: {
                pie: {
                    show: true
                }
            }
        });
        // Label Formatter 
        $.plot('#placeholder8', data_pie, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.8
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });
        // Label Style 
        $.plot('#placeholder9', data_pie, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });
        // Rectangular Pie
        $.plot('#placeholder10', data_pie, {
            series: {
                pie: {
                    show: true,
                    radius: 500,
                    label: {
                        show: true,
                        formatter: labelFormatter,
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: false
            }
        });
        // Tilted Pie 
        $.plot('#placeholder11', data_pie, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    tilt: 0.5,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.8
                        }
                    },
                    combine: {
                        color: '#999',
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: false
            }
        });
        // Interactivity Pie
        $.plot('#placeholder12', data_pie, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            }
        });
        $("#placeholder12").bind("plotclick", function (event, pos, obj) {
            if (!obj) {
                return;
            }
            percent = parseFloat(obj.series.percent).toFixed(2);
            alert("" + obj.series.label + ": " + percent + "%");
        });

        function labelFormatter(label, series) {
            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
        }
    };
    return {
        //main function to initiate template pages
        init: function () {
            runCharts();
        }
    };
}();