/**
 * Created by Ryan Jones on 10/14/2015.
 */

var x, y, xAxis,yAxis,
    graph1,height,width;

var color1 = d3.scale.category20();

//parse the date
var format = d3.time.format("%d-%b-%y");


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
function createChart1() {

    //set the dimensions of the canvas/graph
    var margin = {top: 30, right: 20, bottom: 35, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;
    console.log(height);




    //creates the x and y scales for the graph
    x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(15);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(5);

  /*  var line = d3.svg.line()
        .x(function (d) {
            return x(d.DATE);
        })
        .y(function (d) {
            return y(d.MaxWind);
        })
        .interpolate("basis");*/


    //creates a SVG witht apporiate width and height
    graph1 = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");




    /*color1 = d3.scale.linear()
        .domain([0, 10])
        .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fb9a99", "#e31a1c","#fdbf6f","ff7f00","#cab2d6",
            "#6a3d9a"]);*/



/*
    HurrData.values.forEach(function (d) {
       // d.values.forEach(function (d) {
            date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
            //console.log(date);
            d.DATE = format.parse(date);
            //console.log(d.DATE);
        //});

    });

    //this create key for the data and groups the keys by HURID
    var dataSet = d3.nest()
     .key(function(d) {
     return d.HURID;
     })
     .entries(HurrData.values)


    //creates the x and y domain for the graphs
        x.domain(d3.extent(HurrData.values, function (d) {return d.DATE;}));

        y.domain([d3.min(HurrData.values,function(d){return d.MaxWind;}), d3.max(HurrData.values,function(d){
        return d.MaxWind;})]);





    /*graph1.append("path")
        .attr("class","line")
        .attr("d",line(HurrData));*/
/*
    //Add the x axis
    graph1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","8px")
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

    var point = graph1.append("g")
        .attr("class","line-point");
    //goes through each HURID and create line graph
    dataSet.forEach(function(d)
    {


        console.log(d);
        graph1.append('path')
            .attr("class","line")
            .attr('stroke',function(){return d.color = color1(d.key);})
            //.attr('stroke-width',2)
            .attr('d',line(d.values))
            .attr('fill','none');*/
        
     //   console.log(d.values);
        /*graph1.selectAll('.point')
            .data(d.values)
            .enter().append('circle')
            .attr("class","point")
            .attr("cx",function(d){ return x(d.DATE)})
            .attr("cy",function(d){return y(d.MaxWind)})
            .attr("r",1.5)
            .attr('fill',function(d){return d.color = color1(d.key);});*/
   // });
    /*
    graph1.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px")
        .text(mapLoc1)*/


}



function createChart2() {

    //set the dimensions of the canvas/graph
    var margin = {top: 30, right: 20, bottom: 35, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    //parse the date
    var format = d3.time.format("%d-%b-%y");


    //creates the x and y scales for the graph
    x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(15);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(5);

   /* var line = d3.svg.line()
        .x(function (d) {
            return x(d.DATE);
        })
        .y(function (d) {
            return y(d.MinPress);
        })
        .interpolate("basis");*/

    //creates a SVG witht apporiate width and height
    graph2 = d3.select("#chart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    /*color1 = d3.scale.linear()
     .domain([0, 10])
     .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fb9a99", "#e31a1c","#fdbf6f","ff7f00","#cab2d6",
     "#6a3d9a"]);*/
    //var color2 = d3.scale.category20();

    /*    color.domain(d3.keys(stateData_Array[0]).filter(function(key) { return key !== "STATE" && key !=="POP" }));


     stateData_Array.forEach(function(d) {

     x0 = x0+1;
     d.name = color.range().map(function(name) { return {name: name, x0: x0-1, x1: x0 = +d[name]}; });

     //console.log(d);
     });*/


   /* HurrData.values.forEach(function (d) {
        // d.values.forEach(function (d) {
        date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
        d.DATE = format.parse(date);
        //});

    });

    //this create key for the data and groups the keys by HURID
   /* var dataSet = d3.nest()
        .key(function(d) {
            return d.HURID;
        })
        .entries(HurrData.values)*/
    //console.log(dataSet);

    //creates the x and y domain for the graphs

/*
    x.domain(d3.extent(HurrData.values, function (d) {return d.DATE;}));

    y.domain([d3.min(HurrData.values,function(d){return d.MinPress;}), d3.max(HurrData.values,function(d){
        return d.MinPress;})]);*/


   /* //goes through each HURID and create line graph
    dataSet.forEach(function(d)
    {
        //console.log(d);
        graph2.append('path')
            .attr("class","line")
            /*.attr('stroke',function(d, j){return "hsl("+Math.random() *360 + ",100%,50%)";
             })*/
         //  .attr('stroke',function(){return d.color = color2(d.key);})
            //.attr('stroke-width',2)
  /*          .attr('d',line(d.values))
            .attr('fill','none');
    });*/


    /*graph1.append("path")
     .attr("class","line")
     .attr("d",line(HurrData));*/

    //Add the x axis
   /* graph2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","8px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );

    //Add the Y axist
    graph2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end");*/

    /*
     graph1.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     .style("font-size","16px")
     .text(mapLoc1)*/
}



function updateChart1(HurrData) {

    //set the dimensions of the canvas/graph
    graph1.selectAll("*").remove();
    var margin = {top: 30, right: 20, bottom: 35, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    //creates the x and y scales for the graph
    x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(15);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(5);

    /*color1 = d3.scale.linear()
     .domain([0, 10])
     .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fb9a99", "#e31a1c","#fdbf6f","ff7f00","#cab2d6",
     "#6a3d9a"]);*/
    color1 = d3.scale.category20();



    HurrData.values.forEach(function (d) {
        // d.values.forEach(function (d) {
        date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
        //console.log(date);
        d.DATE = format.parse(date);
        //console.log(d.DATE);
        //});

    });

    //this create key for the data and groups the keys by HURID
    var dataSet = d3.nest()
        .key(function(d) {
            return d.HURID;
        })
        .entries(HurrData.values)


    //creates the x and y domain for the graphs
    x.domain(d3.extent(HurrData.values, function (d) {return d.DATE;}));
    y.domain([d3.min(HurrData.values,function(d){return d.MaxWind;}), d3.max(HurrData.values,function(d){
        return d.MaxWind;})]);

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
        .attr("font-size","8px")
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

    var point = graph1.append("g")
        .attr("class","line-point");
    //goes through each HURID and create line graph
    dataSet.forEach(function(d)
    {


        console.log(d);
        graph1.append('path')
            .attr("class","line")
            .attr('stroke',function(){return d.color = color1(d.key);})
            //.attr('stroke-width',2)*/
            .attr('d',line(d.values))
            .attr('fill','none');

        console.log(d.values);
        /*graph1.selectAll('.point')
         .data(d.values)
         .enter().append('circle')
         .attr("class","point")
         .attr("cx",function(d){ return x(d.DATE)})
         .attr("cy",function(d){return y(d.MaxWind)})
         .attr("r",1.5)
         .attr('fill',function(d){return d.color = color1(d.key);});*/
    });
    /*
     graph1.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     .style("font-size","16px")
     .text(mapLoc1)*/

}


function updateChart2(HurrData) {

    //set the dimensions of the canvas/graph
    graph2.selectAll("*").remove();
    var margin = {top: 30, right: 20, bottom: 35, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    //creates the x and y scales for the graph
    x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);

    //places the x axis at the bottom of the graph
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(15);

    //places the y axis at the left of the graph
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(5);

    /*color1 = d3.scale.linear()
     .domain([0, 10])
     .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fb9a99", "#e31a1c","#fdbf6f","ff7f00","#cab2d6",
     "#6a3d9a"]);*/
    color1 = d3.scale.category20();



    HurrData.values.forEach(function (d) {
        // d.values.forEach(function (d) {
        date = format(new Date(d.YEAR, (d.MONTH - 1), d.DAY));
        //console.log(date);
        d.DATE = format.parse(date);
        //console.log(d.DATE);
        //});

    });

    //this create key for the data and groups the keys by HURID
    var dataSet = d3.nest()
        .key(function(d) {
            return d.HURID;
        })
        .entries(HurrData.values)


    //creates the x and y domain for the graphs
    x.domain(d3.extent(HurrData.values, function (d) {return d.DATE;}));
    y.domain([d3.min(HurrData.values,function(d){return d.MinPress;}), d3.max(HurrData.values,function(d){
        return d.MinPress;})]);

    /*graph1.append("path")
     .attr("class","line")
     .attr("d",line(HurrData));*/

    //Add the x axis
    graph2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("font-size","8px")
        .attr("y",0)
        .attr("x",9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)" );

    //Add the Y axist
    graph2.append("g")
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


        console.log(d);
        graph2.append('path')
            .attr("class","line")
            .attr('stroke',function(){return d.color = color1(d.key);})
            //.attr('stroke-width',2)*/
            .attr('d',line2(d.values))
            .attr('fill','none');

        console.log(d.values);
        /*graph1.selectAll('.point')
         .data(d.values)
         .enter().append('circle')
         .attr("class","point")
         .attr("cx",function(d){ return x(d.DATE)})
         .attr("cy",function(d){return y(d.MaxWind)})
         .attr("r",1.5)
         .attr('fill',function(d){return d.color = color1(d.key);});*/
    });
    /*
     graph1.append("text")
     .attr("x",(width/2))
     .attr("y",10-(margin.top/2))
     .attr("text-anchor","middle")
     .style("font-size","16px")
     .text(mapLoc1)*/

}

