
function Moth(x,y){
    this.pos = createVector(x, y);

    this.previous = createVector(x,y);

    //how particle moves
    this.vel = p5.Vector.random2D();

    //speed particle moves, how fast
    this.acc = createVector(0,0);

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    this.show = function(){
        mothFly(this.pos.x, this.pos.y);

        line(this.pos.x, this.pos.y, this.previous.x, this.previous.y)

        this.previous.x = this.pos.x;
        this.previous.y = this.pos.y;
    }

    this.attracted = function(target) {
        //var force = target - this.pos
        var force = p5.Vector.sub(target, this.pos);
        var squared = force.magSq();
        squared = constrain(squared, 25, 500);
        var G = 6.67408;
        var strength = G/ squared;
        force.setMag(strength);
        this.acc = force;

    }

}