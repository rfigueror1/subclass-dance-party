describe('ninjaDancer', function() {

  var ninjaDancer, clock;
  var timeBetweenSteps = 2400;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ninjaDancer = new makeNinjaDancer(10, 20, 2400);
  });

  it('should have a jQuery $node object', function() {
    expect(ninjaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in', function() {
    sinon.spy(ninjaDancer.$node, 'fadeIn');
    ninjaDancer.step();//
    expect(ninjaDancer.$node.fadeIn.called).to.be.true;
  });

  it('should have a step function that makes its node fade out', function() {
    sinon.spy(ninjaDancer.$node, 'fadeOut');
    ninjaDancer.step();//
    expect(ninjaDancer.$node.fadeOut.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(ninjaDancer, 'step');
      expect(ninjaDancer.step.callCount).to.be.equal(0);
      console.log('Ticked zero.');
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      console.log('Ticked twice.');

      expect(ninjaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ninjaDancer.step.callCount).to.be.equal(2);
    });
  });
});
