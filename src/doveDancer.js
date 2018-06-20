var makeDoveDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="Dove dancers" src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_408,w_408,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_640/sweiler_TD_25gif2_lmutyv.gif" />');
};

makeDoveDancer.prototype = Object.create(makeDancer.prototype);
makeDoveDancer.prototype.constructor = makeDoveDancer;

makeDoveDancer.prototype.step = function() {
  this.oldStep();
  this.$node.show();
  this.$node.animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)'); 
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'slow'
    },'linear');
  // this.$node.flip();
  // this.$node.fadeIn(700);
  // // this.$node.css({'transform': 'rotate(-180deg)'});
  // this.$node.fadeIn(700);
  // this.$node.css({top: ($("body").width() * Math.abs(Math.random() - 0.20)), left: ($("body").width() * Math.abs(Math.random() - 0.1)), position:'absolute'});
  // this.$node.fadeOut(700);
};
