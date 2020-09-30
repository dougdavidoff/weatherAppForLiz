var APIkey = "19b22e37df934e70771da35a71911b27";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Bridgeport,Connecticut&appid=" + APIkey;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
});

// api.openweathermap.org/data/2.5/weather?q={Bridgeport}&appid={19b22e37df934e70771da35a71911b27};
