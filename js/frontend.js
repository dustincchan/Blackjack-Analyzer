var s = new Shoe(8, 7); //8 decks, 7 deck penetration
playNHands(s, 20000, 5);
console.log("Bankroll: $" + bankRoll);
console.log(lowestBankRollValue);
console.log(highestBankRollValue);
chartHeight = Math.round(Math.max(Math.abs(lowestBankRollValue), highestBankRollValue));
chartDivision = Math.round(chartHeight / 10);

zingchart.THEME="classic";
var myConfig =
        {
            "type": "line",
            "background-color": "#003849",
            "utc": true,
            "title": {
                "y": "7px",
                "text": "Basic Strategy, Flat Betting $5",
                "background-color": "#003849",
                "font-size": "24px",
                "font-color": "white",
                "height": "25px"
            },
            "plotarea": {
                "margin": "20% 8% 14% 12%",
                "background-color": "#003849"
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "width":"75%",
                "text-align":"middle",
                "x":"25%",
                "y":"10%",
                "item": {
                    "font-color": "#f6f7f8",
                    "font-size": "14px"
                }
            },
            "scale-x": {
                "min-value": 1383292800000,
                "shadow": 0,
                "step": 3600000,
                "line-color": "#f6f7f8",
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8"
                },
                "item": {
                    "font-color": "#f6f7f8"
                },
                "transform": {
                    "type": "date",
                    "all": "%D, %d %M<br />%h:%i %A",
                    "guide": {
                        "visible": false
                    },
                    "item": {
                        "visible": false
                    }
                },
                "label": {
                    "visible": false
                },
                "minor-ticks": 0
            },
            "scale-y": {
                "values": -chartHeight + ":" + chartHeight + ":" + chartDivision,
                "line-color": "#f6f7f8",
                "shadow": 0,
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8",
                    "line-style": "dashed"
                },
                "item": {
                    "font-color": "#f6f7f8"
                },
                "label": {
                    "text": "Page Views",
                    "font-color": "#f6f7f8"
                },
                "minor-ticks": 0,
                "thousands-separator": ","
            },
            "crosshair-x": {
                "line-color": "#f6f7f8",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#00baf0",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
            "tooltip": {
                "visible": false
            },
            "plot": {
                "tooltip-text": "%t views: %v<br>%k",
                "shadow": 0,
                "line-width": "3px",
                "marker": {
                    "type": "circle",
                    "size": 3
                },
                "hover-marker": {
                    "type": "circle",
                    "size": 4,
                    "border-width": "1px"
                }
            },
            "series": [
                {
                    "values": bankRollHistory,
                    "text": "Bankroll",
                    "line-color": "#009872",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    }
                }
            ]
        };

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: 500,
	width: 725
});
