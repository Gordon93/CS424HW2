/**
 * Created by Ryan Jones on 10/14/2015.
 */

var HurrData = [];
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
    HurrData = dataSet[0];
    console.log(HurrData);


    maxWindChart();
    //minPressChart();

});