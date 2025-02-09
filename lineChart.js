/**
 * Created by Ryan Jones on 10/14/2015.
 */

var x, y, xAxis,yAxis,
    graph1,graph2,graph3,graph4,bar1,bar2,bar3,margin,height,width;


var color1 = d3.scale.category20();

//parse the date
var format = d3.time.format("%d-%b-%y");



var graphs = [];
var line = d3.svg.line()
    .x(function (d) {
        return x(d.DATE);
    })
    .y(function (d) {
        return y(d.MaxWind);
    })
    .interpolate("basis");

var line2 = d3.svg.line()
    .x(function (d) {
        return x(d.DATE);
    })
    .y(function (d) {
        return y(d.MinPress);
    })
    .interpolate("basis");



//Function to create a line chart
function createline1() {

    //set the dimensions of the canvas/graph
    margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = parseInt(d3.select('#chart').style('width'),10),
        width = (width - margin.left - margin.right),
        height = ((window.innerHeight) *.30)-margin.bottom - margin.top;
    console.log(width);
        //height = 270 - margin.top - margin.bottom;

   // console.log(height);


    //creates a SVG witht apporiate width and height
    graph1 = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    //creates a SVG witht apporiate width and height
    graph2 = d3.select("#chart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    //creates a SVG witht apporiate width and height
    graph3 = d3.select("#chart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    //creates a SVG witht apporiate width and height
    graph4 = d3.select("#chart3").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    bar1 = d3.select("#graph1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    bar2 = d3.select("#graph2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    bar3 = d3.select("#graph3").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    graphs.push({max:graph1,min:graph2,bar:bar1,title:"Atlantic Hurricanes"});
    graphs.push({max:graph3,min:graph4,bar:bar2,title:"Pacific Hurricanes"});
    graphs.push({bar:bar3});

}



function createbar1(HurrData,graph) {
    var tickF;
    x = d3.scale.ordinal().rangeRoundBands([0, width],.3);
    y = d3.scale.linear().range([height, 0]);


    if(width< 400)
        tickF = d3.time.format("%y");
    else
        tickF = d3.time.format("%Y");

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(5)
        .tickFormat(tickF);

    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");



    var HurrPerYear = [];
    //console.log(HurrData);


    HurrData.forEach(function(d){
        var temp = [];
        var name = " ";
        temp.perYear = 0;
        var date = format(new Date(d.values[0].YEAR, (d.values[0].MONTH - 1), d.values[0].DAY));

        temp.YEAR = format.parse(date);
        d.values.forEach(function(d){
            if(name!= d.HURID) {
                temp.perYear = temp.perYear + 1;
                name = d.HURID;
            }

        });

        HurrPerYear.push(temp);
    });


    /* color1 = d3.scale.linear()
     .domain([0,10])
     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);*/
    color1 = d3.scale.category20();

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/


    x.domain(HurrPerYear.map(function(d) { return d.YEAR; }));
    y.domain([0, d3.max(HurrPerYear,function(d){return d.perYear;})]);

    graph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        //.attr("font-size","12px")
        //.attr("y",0)
        .attr("x",-15);
        //.attr("dy", ".35em");
        //.attr("transform", "rotate(90)" )*/;
    graph.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end");
    graph.selectAll("bar")
        .data(HurrPerYear)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.YEAR); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.perYear); })
        .attr("height", function(d) { return height - y(d.perYear); })
        .style("fill",  function (d) {
            return color1(d.YEAR);});
    graph.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text("By Year");

}

function createbar2(HurrData,HurrData2,graph) {
    var tickF;

    x = d3.scale.ordinal().rangeRoundBands([0, width],.3);
    y = d3.scale.linear().range([height, 0]);

    tickF = d3.time.format("%m");
    if(width> 400)
        tickF = d3.time.format("%b");

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(5).tickFormat(tickF);

    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");



    var HurrPerMonth = [];
    var temp = [];
    var i;
    //console.log(HurrData);
    for(i=0;i<12;i++){
        var date = tickF(new Date(1999,i,12));
        date = tickF.parse(date);
        temp ={perMonth:0,MONTH:date};
        console.log(temp.MONTH);
        HurrPerMonth.push(temp);
    }
    console.log(HurrPerMonth);
    HurrData.forEach(function(d){
        var name = " ";
        var index;
        d.values.forEach(function(d){
            if(name!= d.HURID) {
                //date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
                index = d.MONTH-1;
                console.log(index);
                HurrPerMonth[index].perMonth= (HurrPerMonth[index].perMonth)+1;
                //HurrPerMonth[d.MONTH-1].MONTH = date;
                name = d.HURID;
            }

        })

    });

    HurrData2.forEach(function(d){
        var name = " ";
        var index;
        d.values.forEach(function(d){
            if(name!= d.HURID) {
                index = d.MONTH-1;
                console.log(index);
                HurrPerMonth[index].perMonth= (HurrPerMonth[index].perMonth)+1;
                name = d.HURID;
            }

        })

    });



    /* color1 = d3.scale.linear()
     .domain([0,10])
     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);*/
    color1 = d3.scale.category20();

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/


    x.domain(HurrPerMonth.map(function(d) { return d.MONTH; }));
    y.domain([0, d3.max(HurrPerMonth,function(d){return d.perMonth;})]);

    graph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        //.attr("font-size","12px")
        //.attr("y",0)
        .attr("x",-15);
    //.attr("dy", ".35em");
    //.attr("transform", "rotate(90)" )*/;
    graph.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
    graph.selectAll("bar")
        .data(HurrPerMonth)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.MONTH); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.perMonth); })
        .attr("height", function(d) { return height - y(d.perMonth); })
        .style("fill",  function (d) {
            return color1(d.MONTH);});
    graph.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text("Total # Occurances per Month");

}




function updateline1(HurrData,graph) {
    var tickF,numTicks;
    //set the dimensions of the canvas/graph
    graph.max.selectAll("*").remove();

    HurrData.values.forEach(function (d) {
        // d.values.forEach(function (d) {
        var date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
        //console.log(date);
        d.DATE = format.parse(date);
        //console.log(d.DATE);
        //});
    });

    //creates the x and y scales for the graph
    x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);

    if(width< 1000)
        tickF = d3.time.format("%b");
    else
        tickF = d3.time.format("%B");

    if(width<1000)
        numTicks = 5;

    else {
        numTicks = 20;
        tickF = d3.time.format("%b-%d")
    }

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(numTicks)
        .tickFormat(tickF);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(numTicks);

    /*color1 = d3.scale.linear()
     .domain([0, 10])
     .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fb9a99", "#e31a1c","#fdbf6f","ff7f00","#cab2d6",
     "#6a3d9a"]);*/
    color1 = d3.scale.category20();


    //this create key for the data and groups the keys by HURID
    var dataSet = d3.nest()
        .key(function(d) {
            return d.HURID;
        })
        .entries(HurrData.values);


    console.log(dataSet);

    //creates the x and y domain for the graphs
    x.domain(d3.extent(HurrData.values, function (d) {return d.DATE;}));
    y.domain([d3.min(HurrData.values,function(d){return d.MaxWind;}), d3.max(HurrData.values,function(d){
        return d.MaxWind;})]);

    /*graph1.append("path")
     .attr("class","line")
     .attr("d",line(HurrData));*/

    //Add the x axis
    graph.max.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        //.attr("font-size","8px")
        //.attr("y",0)
        .attr("x",-15);
        //.attr("dy", ".35em")
        //.attr("transform", "rotate(90)" );

    //Add the Y axist
    graph.max.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("MaxWind");

    var point = graph1.append("g")
        .attr("class","line-point");
    //goes through each HURID and create line graph
    dataSet.forEach(function(d)
    {



        graph.max.append('path')
            .attr("class","line")
            .attr('stroke',function(){return d.color = color1(d.key);})
            //.attr('stroke-width',2)*/
            .attr('d',line(d.values))
            .attr('fill','none');

        /*graph1.selectAll('.point')
         .data(d.values)
         .enter().append('circle')
         .attr("class","point")
         .attr("cx",function(d){ return x(d.DATE)})
         .attr("cy",function(d){return y(d.MaxWind)})
         .attr("r",1.5)
         .attr('fill',function(d){return d.color = color1(d.key);});*/
    });
     graph.max.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     //.style("font-size","16px")
     .text("MaxWind for "+HurrData.values[0].YEAR);

    updateline2(HurrData,dataSet,graph.min)

}


function updateline2(HurrData,dataSet,graph) {

    //set the dimensions of the canvas/graph
    graph.selectAll("*").remove();

    //creates the x and y domain for the graphs
    y.domain([d3.min(HurrData.values,function(d){return d.MinPress;}), d3.max(HurrData.values,function(d){
        return d.MinPress;})]);

    /*graph1.append("path")
     .attr("class","line")
     .attr("d",line(HurrData));*/

    //Add the x axis
    graph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        //.attr("font-size","8px")
        //.attr("y",0)
        .attr("x",-15);
    //.attr("dy", ".35em")
    //.attr("transform", "rotate(90)" );

    //Add the Y axist
    graph.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("MinPress");

    var point = graph2.append("g")
        .attr("class","line-point");
    //goes through each HURID and create line graph
    dataSet.forEach(function(d)
    {



        graph.append('path')
            .attr("class","line")
            .attr('stroke',function(){return d.color = color1(d.key);})
            //.attr('stroke-width',2)*/
            .attr('d',line2(d.values))
            .attr('fill','none');


        /*graph1.selectAll('.point')
         .data(d.values)
         .enter().append('circle')
         .attr("class","point")
         .attr("cx",function(d){ return x(d.DATE)})
         .attr("cy",function(d){return y(d.MaxWind)})
         .attr("r",1.5)
         .attr('fill',function(d){return d.color = color1(d.key);});*/
    });

     graph.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     //.style("font-size","16px")
     .text("MinPress for "+HurrData.values[0].YEAR)

}


d3.select(window).on('resize',resize);

function resize(){
    //update width
    margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = parseInt(d3.select('#chart').style('width'),10),
        width = width - margin.left - margin.right,
        height = ((window.innerHeight) *.30)-margin.bottom - margin.top;


}