/**
 * Created by Ryan Jones on 10/18/2015.
 */
var x, y, xAxis,yAxis,
    barGraph,height,width;
var color1;


function createGraph1(HurrData) {
    var x0 =0;
    var margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = 800 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    x = d3.scale.ordinal().rangeRoundBands([0, width],.3);
    y = d3.scale.linear().range([height, 0]);
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    barGraph = d3.select("#graph1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    var HurrPerYear = [];
    console.log(HurrData);
    //this create key for the data and groups the keys by HURID
    /*var dataSet = d3.nest()
        .key(function(d) {
            d3.nest()
                .key(function(d)
            {
                return d.HURID;
            })
            .entries(d.values);
        })
        .entries(HurrData.values)

    console.log(dataSet);*/

    HurrData.forEach(function(d){
        var temp = [];
        var name = " ";
        console.log(d);
        temp.YEAR = d.values[0].YEAR;
        temp.perYear = 0;
       d.values.forEach(function(d){
           if(name!= d.HURID) {
               temp.perYear = temp.perYear + 1;
               name = d.HURID;
           }

        })

        HurrPerYear.push(temp);
    })

    console.log(HurrPerYear);

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

    barGraph.append("g")
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
    barGraph.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y",6)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("POP(EST)");
    barGraph.selectAll("bar")
        .data(HurrPerYear)
        .enter().append("rect")
        .attr("x", function(d) { return x(d.YEAR); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.perYear); })
        .attr("height", function(d) { return height - y(d.perYear); })
        .style("fill",  function (d) {
            return color1(d.YEAR);});
    barGraph.append("text")
        .attr("x",(width/2))
        .attr("y",10-(margin.top/2))
        .attr("text-anchor","middle")
        .style("font-size","16px");
        //.text(mapLoc1)

}
