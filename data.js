/**
 * Created by Ryan Jones on 10/14/2015.
 */

HurrData = [];

d3.csv('data/2005.csv',function(error,data){
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

    //load data to global variable usaData
    HurrData = data;

    lineChart();

});