/**
 * Created by Ryan Jones on 10/14/2015.
 */

var HurrData1 = [];
var HurrData2 = [];
var dataSet = [];

d3.csv('data/AtlHurricane2005-2014.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }


    data.forEach(function(d) {
        d.YEAR = parseInt(d.YEAR);
        d.MONTH = parseInt(d.MONTH);
        d.DAY = parseInt(d.DAY);
        d.HOURS = parseInt(d.HOURS);
        d.LAT = parseFloat(d.LAT);
        d.LOG = parseFloat(d.LOG);
        d.MaxWind = parseInt(d.MaxWind);
        d.MinPress = parseInt(d.MinPress);
    });

     dataSet = d3.nest()
        .key(function(d) {
            return d.YEAR;
        })
        .entries(data)

            //console.log(dataSet);

    //load data to global variable usaData
    HurrData1 = dataSet;

    createline1();
    createbar1(HurrData1,graphs[0].bar);

});

d3.csv('data/PacHurricane2005-2014.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }


    data.forEach(function(d) {
        d.YEAR = parseInt(d.YEAR);
        d.MONTH = parseInt(d.MONTH);
        d.DAY = parseInt(d.DAY);
        d.HOURS = parseInt(d.HOURS);
        d.LAT = parseFloat(d.LAT);
        d.LOG = parseFloat(d.LOG);
        d.MaxWind = parseInt(d.MaxWind);
        d.MinPress = parseInt(d.MinPress);
    });

    dataSet = d3.nest()
        .key(function(d) {
            return d.YEAR;
        })
        .entries(data)

    //console.log(dataSet);

    //load data to global variable usaData
    HurrData2 = dataSet;

    createbar1(HurrData2,graphs[1].bar);
    createbar2(HurrData1,HurrData2,graphs[2].bar);


});


