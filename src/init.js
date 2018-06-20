$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */


    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    
    var previousDancer = undefined;
    dancer.$node.on('click', function(event) {
      var middleTop = $('body').height()*0.5;
      var middleLeft = $('body').width() * 0.5;
      dancer.setPosition(middleTop, middleLeft);
      setTimeout(function() {dancer.setPreviousPosition(this.prevTop, this.prevLeft)}, 1000);
    });
    
    dancer.$node.on('mousedown', function(){
      $(this).addClass('flipped');
    }).mouseup(function(){
      $(this).removeClass('flipped');
    });
    
  });
  $('.makeDancerLineUpH').on('click', function(event) {
    var base = $('body').width() * 0.05;
    var distance = ($('body').width() * 0.9) / window.dancers.length;
    var height;
    for (var i = 0; i < window.dancers.length; i++) {
      height = $('body').height() * 0.7;
      var alignment = base + distance * i;
      if(i % 2 === 0){
        height = $('body').height() * 0.2;
      }
      window.dancers[i].setPosition(height, alignment);
    }
  });
  
  $('.makeDancerLineUpV').on('click', function(event) {
    var base = $('body').width() * 0.05;
    var distance = ($('body').width() * 0.9) / window.dancers.length;
    var width;
    for (var i = 0; i < window.dancers.length; i++) {
      width = $('body').width() * 0.8;
      var alignment = base + distance * i;
      if(i % 2 === 0){
        width = $('body').width() * 0.2;
      }
      window.dancers[i].setPosition(alignment, width);
    }
  });

  $('.makeGroups').on('click', function(event) {
    var firstElement = window.dancers[0];
    var firstElementTop = firstElement.top;
    var firstElementLeft = firstElement.left;
    var distance;
    var firstGroup = [];
    var secondGroup = [];
    firstGroup.push(firstElement);
    for(var i = 1; i < window.dancers.length; i++){
      distance = Math.sqrt((firstElementTop-window.dancers[i].top)** 2 - (firstElementLeft - window.dancers[i].left)**2);
      if(distance < 1100){
        firstGroup.push(window.dancers[i]);
      } else{
        secondGroup.push(window.dancers[i]);
      }
    }
    for (var i = 0; i < firstGroup.length; i++) {
      firstGroup[i].setPosition($('body').height() * 0.5 + i * 50, $('body').width() * 0.2);
    }
    for (var i = 0; i < secondGroup.length; i++) {
      secondGroup[i].setPosition($('body').height() * 0.5 + i * 50, $('body').width() * 0.8);
    }
    console.log(firstGroup);
    console.log(secondGroup);
    
  });
  


});

