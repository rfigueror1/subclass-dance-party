describe('doveDancer', function() {

  var doveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    doveDancer = new makeDoveDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(doveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(doveDancer.$node, 'show');
    doveDancer.step();//
    expect(doveDancer.$node.show.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(doveDancer, 'step');
      expect(doveDancer.step.callCount).to.be.equal(0);
      console.log('Ticked zero.');
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      console.log('Ticked twice.');

      expect(doveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(doveDancer.step.callCount).to.be.equal(2);
    });
  });
});
