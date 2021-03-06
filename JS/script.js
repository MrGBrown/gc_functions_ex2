(function tightRope(){
const player = {
    position: 0,
    direction: 'positive',

    moveForward(space){
        //if direction is positive, add to position; if negative, subtract
        if (this.direction === 'positive') {
            this.position = this.position + space;
        } else {
            this.position = this.position - space;
        }
    },

    moveBackward(space){
        if (this.direction === 'positive') {
            this.position = this.position - space;
        } else {
            this.position = this.position + space;
        }
    },

    turnAround(){
        if (this.direction === 'positive'){
            this.direction = 'negative';
        } else {
            this.direction = 'positive';
        }
    },
    
    printLocation(){
        console.log(this.position);
    },
};

player.moveForward(5);
player.moveBackward(3);
printLocation();
player.turnAround();
player.moveForward(10);
player.moveBackward(5);
printLocation();
}());




