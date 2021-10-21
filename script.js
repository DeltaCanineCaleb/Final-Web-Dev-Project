$(document).ready(function() {
  happiness = 3;
  
  number = 1;
  $("p").slideUp(0)
  $("button").hide()
  $("#dialogue1").slideDown(0)
  $("#main_button").show()

  var dict = {
    "1" : "neutral",
    "2" : "happy",
    "3" : "bashful",
    "4" : "happy",
    "5" : "neutral",
    "6a": "happy",
    "6b": "bashful",
    "7" : "happy",
    "8" : "neutral",
    "9a": "happy",
    "9b": "bashful",
    "10": "bashful",
    "11a":"happy",
    "11b":"neutral",
    "11c":"sad"
  };
  
  $("#main_button").click(function(){
    $("#dialogue" + number).slideUp(600)
    $("#dialogue" + number + "a").slideUp(600)
    $("#dialogue" + number + "b").slideUp(600)
    number += 1;
    setTimeout(function(){
      if (number != 9) {
        $("#sprite").src = "bowie " + dict[String(number)] + ".png"
        $("#sprite").prop("alt", "bowie " + dict[String(number)]);
        $("#dialogue" + number).slideDown(600)
        if (number == 5) {
          $("#choice_button_1").html("I think it's cool");
          $("#choice_button_2").html("I think it's lame");
          $("#main_button").hide()
          $("#choice_button_1").show()
          $("#choice_button_2").show()
        } else if (number == 10) {
          if (happiness > 3) {
            $("#choice_button_1").html("Oh, I've heard of them. They're nice.");
          } else {
            $("#choice_button_1").html("Oh, I've heard of them. They suck.");
          }
          $("#choice_button_2").html("I haven't, actually.");
          $("#main_button").hide()
          $("#choice_button_1").show()
          $("#choice_button_2").show()
        }
      } else {
        if (happiness > 3) {
          $("#sprite").src = "bowie " + dict[String(number) + "a"] + ".png"
          $("#sprite").prop("alt", "bowie " + dict[String(number) + "a"]);
          $("#dialogue" + number + "a").slideDown(600)
        } else {
          $("#sprite").src = "bowie " + dict[String(number) + "b"] + ".png"
          $("#sprite").prop("alt", "bowie " + dict[String(number) + "b"]);
          $("#dialogue" + number + "b").slideDown(600)
        }
      }
    }, 600);
  });

  $("#choice_button_1").click(function(){
    $("#dialogue" + number).slideUp(600)
    number += 1;
    if ([number == 6], [number == 11]) {
      happiness += 1;
    }
    setTimeout(function(){
      if ([number == 11] && [happiness < 4]) {
        $("#sprite").src = "bowie " + dict[String(number) + "c"] + ".png"
        $("#sprite").prop("alt", "bowie " + dict[String(number) + "c"]);
        $("#dialogue" + number + "c").slideDown(600)
        happiness -= 2;
      } else {
        $("#sprite").src = "bowie " + dict[String(number) + "a"] + ".png"
        $("#sprite").prop("alt", "bowie " + dict[String(number) + "a"]);
        $("#dialogue" + number + "a").slideDown(600)
      }
      $("#main_button").show()
      $("#choice_button_1").hide()
      $("#choice_button_2").hide()
    }, 600);
  });

  $("#choice_button_2").click(function(){
    $("#dialogue" + number).slideUp(600)
    number += 1;
    if ([number == 6]) {
      happiness -= 1;
    }
    setTimeout(function(){
      $("#sprite").src = "bowie " + dict[String(number) + "b"] + ".png"
      $("#sprite").prop("alt", "bowie " + dict[String(number) + "b"]);
      $("#dialogue" + number + "b").slideDown(600)
      $("#main_button").show()
      $("#choice_button_1").hide()
      $("#choice_button_2").hide()
    }, 600);
  });
});