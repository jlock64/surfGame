/* Surfing Racing Game
This game will consist of surfers of different skill
levels and power racing on waves at different
locations, with different threats, around the world.
*/
$(document).ready(function() {
  // clicking on any surfer will jump to board selection page
  $('.surfer').on('click', function() {
      $('.surfer').parent().hide();
      $('.boards').removeClass('hidden');
      $('.textBox p').text('Now what will you be carving with?');
  })

  $('.board').on('click', function() {
      $('.board').parent().hide();
      $('.location').removeClass('hidden');
      $('.textBox p').text("Choose your surf destination and let's go!");
  })

  $('.jbayThumb').on('click', function() {
    $(this).parent().hide();
    $('.surf, .jBay').removeClass('hidden')
  })

  $('.pipelineThumb').on('click', function() {
    $(this).parent().hide();
    $('.surf, .pipeline').removeClass('hidden')
  })

  $('.teahupooThumb').on('click', function() {
    $(this).parent().hide();
    $('.surf, .teahupoo').removeClass('hidden')
  })


});

// CONSTRUCTORS //
function Surfer(options) {
  var options = options || {};
  this.name = options.name || "Silver Surfer";
  this.skill = options.skill || "Amateur";
  this.health = options.health || 1 // 1-10
  // this.fight = function(enemySurfer) {
  //   enemySurfer.damage(this);
  // }
}

function Board(options) {
  var options = options || {};
  this.boardName = options.boardName || "Boogie Board"; // long board, short board
  this.speed = options.speed || 1; // 1-10
  // this.agility = options.agility || "1" // 1-10
}

function Location(options) {
  var options = options || {};
  var hazardsArr = ["sharks", "rocks", "monster wave"];
  var randoHaz = Math.floor(Math.random() * 3);
  this.surfingSpot = options.surfingSpot || "Banzai Pipeline"; //  J Bay(sharky), Mavericks,Teahupoo,
  this.difficulty = options.difficulty || 1; // 1-10
  this.hazards = options.hazards /*|| hazardsArr[randoHaz]*/ || "Sharks"; // rocks, monster waves, man o wars
  // this.weather = options.weather|| "Clear and calm"
}


// PROTOTYPES //
// Lets Surf!
Surfer.prototype.surf = function(location, board) {
  console.log("in dot surf");
  if(this.health < 1) {
    console.log('Sorry dude, you cannot take anymore beatings. Game over.');
  }
  if(charSelect.surfingSpot.hazards === "Sharks" && charSelect.boardName.speed >= 7) {
    this.health = this.health + 1;
    console.log('Lucky you have a fast board brah! You escaped a shark attack and got stronger by 1 point!');
    $('.textBox').html('<p> Lucky you have a fast board brah! You escaped a shark attack and got stronger by 1 point! </p>');
  } else if (charSelect.surfingSpot.hazards === "Sharks" && charSelect.boardName.speed < 7){
      this.health = this.health - 4;
      $('.textBox').html('<p> You have been bitten by a shark! Get a faster board dude! You just lost 4 health points!</p>');
    } else if (charSelect.surfingSpot.hazards === "Rocks" && charSelect.boardName.speed < 7) {
    this.health = this.health + 2;
    $('.textBox').html('<p> Your board may be slower but it saved you from a rocky demise plus you gained 2 health points!</p>');
  } else if (charSelect.surfingSpot.hazards === "Rocks" && charSelect.boardName.speed >= 7) {
      this.health = this.health - 2;
      $('.textBox').html('<p> Ouch! Narly wipeout on the rocks dude! You were going to fast! You just lost 2 health points!</p>');
    } else if (charSelect.surfingSpot.hazards === "Monster Wave" && charSelect.boardName.speed > 8) {
    this.health = this.health + 1;
    $('.textBox').html('<p> Luckily you have a fast board! That moster wave could not catch you! You are stronger than ever! You gained 1 health point.</p>');
  } else if (charSelect.surfingSpot.hazards === "Monster Wave" && charSelect.boardName.speed < 8){
      this.health = this.health - 3;
      $('.textBox').html('<p> Nasty wipeout! That will leave a mark. You just lost 3 health points!</p>');
  }
  else {
    $('.textBox').html('<p> Keep on surfing brah! Looking good!</p>');
  }
}
// Choose Surfboard
Surfer.prototype.equip = function (name, speed) {
  if(typeof name !== 'string') {
    this.board = name;
  } else {
    this.board = new Board({name: name, speed: speed});
  }
}
// Choose Surf Spot
Surfer.prototype.surfSpot = function (name, difficulty, hazards) {
  this.location = name;
}

var charSelect = [
  {
    name: "Kelly Slater",
    skill: "Surf God",
    power: 10,
    health: 7
  },
  {
    name: "Mick Fanning",
    skill: "Surf Pro",
    power: 8,
    health: 9
  },
  {
    name: "Laird Hamilton",
    skill: "Surf God",
    power: 10,
    health: 10
  },
]

// surfer selections
$('.kelly').on('click', function() {
    charSelect = charSelect[0];
    console.log(charSelect);
});
$('.mick').on('click', function() {
    charSelect = charSelect[1];
    console.log(charSelect);
});
$('.laird').on('click', function() {
    charSelect = charSelect[2];
    console.log(charSelect);
});

// board selections
$('.short').on('click', function() {
    charSelect.boardName = shortBoard;
    console.log(charSelect);
});
$('.long').on('click', function() {
    charSelect.boardName = longBoard;
    console.log(charSelect);
});
$('.boogie').on('click', function() {
    charSelect.boardName = boogieBoard;
    console.log(charSelect);
});

// surf spot location
$('.pipelineThumb').on('click', function() {
    charSelect.surfingSpot = banzaiPipeline;
    console.log(charSelect);
    var htmlStr = '<p> You have chosen ' + charSelect.name + ' to surf ' + charSelect.surfingSpot.surfingSpot +' with a ' + charSelect.boardName.boardName +' . Good luck!</p>';
    $('.textBox').html(htmlStr);
    $('button').css('opacity', '1');
    // Surfer.prototype.surf(charSelect.surfingSpot.surfingSpot, charSelect.boardName.boardName);
});
$('button').on('click', function() {
  console.log('click click');
  Surfer.prototype.surf(charSelect.surfingSpot.surfingSpot, charSelect.boardName.boardName);
})

$('.teahupooThumb').on('click', function() {
    charSelect.surfingSpot = teahupoo;
    console.log(charSelect);
    var htmlStr = '<p> You have chosen ' + charSelect.name + ' to surf ' + charSelect.surfingSpot.surfingSpot +' with a ' + charSelect.boardName.boardName +' . Good luck!</p>';
    $('.textBox').html(htmlStr);
    $('button').css('opacity', '1');
    // Surfer.prototype.surf(charSelect.surfingSpot.surfingSpot, charSelect.boardName.boardName);
});
$('.jbayThumb').on('click', function() {
    charSelect.surfingSpot = jBay;
    console.log(charSelect);
    var htmlStr = '<p> You have chosen ' + charSelect.name + ' to surf ' + charSelect.surfingSpot.surfingSpot +' with a ' + charSelect.boardName.boardName +' . Good luck!</p>';
    $('.textBox').html(htmlStr);
    $('button').css('opacity', '1');
    // Surfer.prototype.surf(charSelect.surfingSpot.surfingSpot, charSelect.boardName.boardName);
});


// Surfers
var slater = new Surfer({ name: "Kelly Slater", skill: "Surf God", power: 10, health: 7});
var justin = new Surfer({ name: "Mick Fanning", skill: "Surf Pro", power: 8, health: 9});
var laird = new Surfer({ name: "Laird Hamilton", skill: "Surf God", power: 10, health: 10});
// Surf Boards
var boogieBoard = new Board({boardName: "Boogie Board", speed: 7});
var shortBoard = new Board({boardName: "Short Board", speed: 9});
var longBoard = new Board({boardName: "Long Board", speed: 5});

// Surf Spots
var banzaiPipeline = new Location({surfingSpot: "Banzai Pipeline", difficulty: 8, hazards: "Rocks" });
var teahupoo = new Location({surfingSpot: "Teahupoo", difficulty: 10, hazards: "Monster Wave" });
var jBay = new Location({surfingSpot: "J Bay", difficulty: 9, hazards: "Sharks"});
// } // end of page object literal
