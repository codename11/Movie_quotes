var tas = 0;
var state = true;
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).resize(function() {
  if ($(window).width() < 900) {
    $("body").addClass("bounceInRight");
  }

  if ($(window).width() > 900) {
    $("body").addClass("bounceInLeft");
  }
});

function rquote() {
  var obj = {
    //An JS object for stringification.
    quote: [
      "Frankly, my dear, I don't give a damn.",
      "I'm gonna make him an offer he can't refuse.",
      "You talking to me?",
      "What we've got here is failure to communicate.",
      "I love the smell of napalm in the morning.",
      "Made it, Ma! Top of the world!",
      "You can't handle the truth!",
      "I'll be back.",
      "Say hello to my little friend!",
      "Mrs. Robinson, you're trying to seduce me. Aren't you?",
      "Soylent Green is people!",
      "Forget it, Jake, its Chinatown."
    ],
    movie: [
      "GONE WITH THE WIND",
      "THE GODFATHER",
      "TAXI DRIVER",
      "COOL HAND LUKE",
      "APOCALYPSE NOW",
      "WHITE HEAT",
      "A FEW GOOD MEN",
      "THE TERMINATOR",
      "SCARFACE",
      "THE GRADUATE",
      "SOYLENT GREEN",
      "CHINATOWN"
    ],
    color: [
      "#4d4dff",
      "#0099cc",
      "#00cc66",
      "#669900",
      "#cc9900",
      "#cc0000",
      "#cc3399",
      "#6600ff",
      "#0099ff",
      "#19b366",
      "#86b300",
      "#cc4400"
    ]
  };

  var qrand = Math.floor(Math.random() * 11);

  $("body").animate(
    {
      backgroundColor: "" + obj.color[qrand]
    },
    500
  );

  $("#quote").animate(
    {
      color: "" + obj.color[qrand]
    },
    500
  );
  $("#tw").animate(
    {
      backgroundColor: "" + obj.color[qrand]
    },
    500
  );
  $("#btn").animate(
    {
      backgroundColor: "" + obj.color[qrand]
    },
    500
  );
  $("#movie").animate(
    {
      color: "" + obj.color[qrand]
    },
    500
  );

  document.getElementById("quote").innerHTML =
    "<i class='fa fa-quote-left'></i> " +
    obj.quote[qrand] +
    " <i class='fa fa-quote-right'></i>";
  document.getElementById("movie").innerHTML = " - " + obj.movie[qrand];

  document.getElementById("ank1").href =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    obj.quote[qrand] +
    " - " +
    obj.movie[qrand];
  tas++;
  if (tas == 1) {
    $("#quote").removeClass("bounceInRight");
    $("#quote").addClass("bounceInLeft");

    $("#movie").removeClass("bounceInLeft");
    $("#movie").addClass("bounceInRight");
  }

  if (tas > 1) {
    tas = 0;
    $("#quote").removeClass("bounceInLeft");
    $("#quote").addClass("bounceInRight");

    $("#movie").removeClass("bounceInRight");
    $("#movie").addClass("bounceInLeft");
  }
}