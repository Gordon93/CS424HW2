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
    else{
        //if error is null than fille loaded as expected
        console.log(data);
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

            console.log(dataSet);

    //load data to global variable usaData
    HurrData1 = dataSet;
    //console.log(HurrData);


    createline1();
    //createline2();
    createbar1(HurrData1,graphs[0].bar);
    //createbar1(HurrData,graphs[1].bar)
   // updateline1(HurrData[0],graphs[0]);
    //updateline1(HurrData[0],graphs[1]);
    //updateline2(HurrData[0]);

});

d3.csv('data/PacHurricane2005-2014.csv',function(error,data){
    if(error) {
        //if error is not null then something went wrong
        console.log(error);
    }
    else{
        //if error is null than fille loaded as expected
        console.log(data);
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

    console.log(dataSet);

    //load data to global variable usaData
    HurrData2 = dataSet;
    //console.log(HurrData);


    //createline1();
    //createline2();
    createbar1(HurrData2,graphs[1].bar)
    //updateline1(HurrData[0],graphs[1]);
    //updateline2(HurrData[0]);

});