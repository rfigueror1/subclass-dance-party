var makeNinjaDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, 2400);
  this.$node.prepend('<img id="Ninja" src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/a691094067f4b12fe349f02b2f201093/a2b0456b303f45be249369c3_rw_600.gif?h=367154706ee923b17878a4f89049b24c" />');
};

makeNinjaDancer.prototype = Object.create(makeDancer.prototype);
makeNinjaDancer.prototype.constructor = makeNinjaDancer;

makeNinjaDancer.prototype.step = function() {
  this.oldStep();

  this.$node.fadeIn(700);
  // this.$node.css({'transform': 'rotate(-180deg)'});
  this.$node.fadeIn(700);
  this.$node.css({top: ($('body').width() * Math.abs(Math.random() - 0.20)), left: ($('body').width() * Math.abs(Math.random() - 0.1)), position: 'absolute'});
  this.$node.fadeOut(700);
};

