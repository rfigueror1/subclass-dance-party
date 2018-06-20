var makeChickenDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="Chicken" src="http://oi771.photobucket.com/albums/xx352/LuvH8/Happy%20Dance/Chicken-dancing.gif" />');
};

makeChickenDancer.prototype = Object.create(makeDancer.prototype);
makeChickenDancer.prototype.constructor = makeChickenDancer;

makeChickenDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.css({'transform': 'rotate(-180deg)'});
  // this.$node.fadeIn(700);
  // // this.$node.animate({ 
  // //       left: "+=500px",
  // //     }, 1000);
  // this.$node.fadeOut(700);
  

};
