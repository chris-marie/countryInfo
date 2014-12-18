$(function () {
    var cs = $.getJSON('http://restcountries.eu/rest/v1/all', function (data) {
        var countries = data.filter(function (country) {
            return country.population < 3000000;
            console.log('searching for countries');
        });
        $('<div>').html('There are ' + countries.length + ' many countries with a pop less than 3000000').appendTo(document.body);
        countries.forEach( function(country) {
            console.log(country.name);
            $('<div>').html(country.name).appendTo(document.body);
        });
        var worldPop = 0;
        var countryPop = [];

        countries.forEach( function (country) {
            console.log(country.name + ': ' + country.population);
            countryPop.push(country.population);
        });

        console.log(countryPop);
        var initialValue = worldPop;
        worldPop = countryPop.reduce( function (previousValue, currentValue, initialValue) {
            console.log("this is current pop talley: " + currentValue);
            return previousValue + currentValue;

        });
        console.log('finished, countryPop = ' + worldPop);

    });
    console.log('returning countries object: cs=' + Function.prototype.toString.call(cs));
    return cs;
});