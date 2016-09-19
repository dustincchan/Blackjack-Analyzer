var myConfig =
    {
        "type":"bar",
        "plot":{ //global changes to all series
            "alpha":0.7,
            "border-width":2,
            "border-color":"black",
            "border-radius-top-left":5,
            "border-radius-top-right":5,
            "hoverState":{
              "backgroundColor":"#909090"
            }
        },
        "series":[
            {
                "values":[28,19,30,35,46,36],
            },
            {
                "values":[11,7,14,11,24,22],
            },
            {
                "values":[18,25,35,16,31,18],
            }
        ]
    };

zingchart.render({
	id : 'histogram',
	data : myConfig,
	height: 400,
	width: 1000
});
