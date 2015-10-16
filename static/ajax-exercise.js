"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    var newfortune = evt;
    $('#fortune-text').html(newfortune);
    console.log("Finished showFortune");

}
function getFortune(){
    $.get('/fortune', showFortune);
    console.log("Finished getting getfortune");
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
}
function getWeather(){
    var formInput = {
        "zipcode": $("zipcode-field").val()
    };
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


