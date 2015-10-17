/**
 * Created by Ryan Jones on 10/14/2015.
 */

var x, y, xAxis,yAxis,
    graph1,height,width;

var stateData_Array;
var color1;

//Function to create a line chart
function maxWindChart() {

    //set the dimensions of the canvas/graph
    var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    //parse the date
    var format = d3.time.format("%d-%b-%y");


    //creates the x and y scales for the graph
    x = d3.time.scale().range([0,width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(20);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(20);

    var line = d3.svg.line()
        .x(function(d){return x(d.DATE);})
        .y(function(d){return y(d.MaxWind);})
        .interpolate("basis");

    //creates a SVG witht apporiate width and height
    graph1 = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    color1 = d3.scale.linear()
        .domain([0,10])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/

    HurrData.forEach(function(d){
        date = format(new Date( d.YEAR, (d.MONTH-1), d.DAY));
        console.log(date);
        d.DATE = format.parse(date);
    })

    //this create key for the data and groups the keys by HURID
    /*var dataSet = d3.nest()
        .key(function(d) {
        return d.HURID;
    })
        .entries(HurrData)*/


    console.log(dataSet);

    //creates the x and y domain for the graphs
    x.domain(d3.extent(HurrData,function(d){return d.DATE}));
    y.domain([d3.min(HurrData,function(d){return d.MaxWind;}), d3.max(HurrData,function(d){return d.MaxWind;})]);

    //goes through each HURID and create line graph
    dataSet.forEach(function(d,i)
    {
        graph1.append('path')
            //.attr("class","line")
            .attr('d',line(d.values))
            .attr('stroke',function(d, j){
                return "hsl("+Math.random() *360 + ",100%,50%)";
            })
            .attr('stroke-width',2)
            .attr('fill','none');
    });


    /*graph1.append("path")
        .attr("class","line")
        .attr("d",line(HurrData));*/

    //Add the x axis
    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );

    //Add the Y axist
    graph1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("MaxWind");
    /*
    graph1.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(mapLoc1)*/

}



function minPressChart() {

    //set the dimensions of the canvas/graph
    var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    //parse the date
    var format = d3.time.format("%d-%b-%y");


    //creates the x and y scales for the graph
    x = d3.time.scale().range([0,width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(20);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(20);

    var line = d3.svg.line()
        .x(function(d){return x(d.DATE);})
        .y(function(d){return y(d.MinPress);})
        .interpolate("basis");

    //creates a SVG witht apporiate width and height
    graph1 = d3.select("#chart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    color1 = d3.scale.linear()
        .domain([0,10])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/

    HurrData.forEach(function(d){
        date = format(new Date( d.YEAR, (d.MONTH-1), d.DAY));
       // console.log(date);
        d.DATE = format.parse(date);
    })

    //this create key for the data and groups the keys by HURID
    var dataSet = d3.nest()
        .key(function(d) {
            return d.HURID;
        })
        .entries(HurrData);


    console.log(dataSet);

    //creates the x and y domain for the graphs
    x.domain(d3.extent(HurrData,function(d){return d.DATE}));
    y.domain([d3.min(HurrData,function(d){return d.MinPress;}), d3.max(HurrData,function(d){return d.MinPress;})]);

    //goes through each HURID and create line graph
    dataSet.forEach(function(d,i)
    {
        graph1.append('path')
            //.attr("class","line")
            .attr('d',line(d.values))
            .attr('stroke',function(d, j){
                return "hsl("+Math.random() *360 + ",100%,50%)";
            })
            .attr('stroke-width',2)
            .attr('fill','none');
    });


    /*graph1.append("path")
     .attr("class","line")
     .attr("d",line(HurrData));*/

    //Add the x axis
    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","12px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );

    //Add the Y axist
    graph1.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end");
    /*
     graph1.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     .style("font-size","16px")
     .text(mapLoc1)*/

}