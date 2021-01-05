class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Fruits Catcher ");
        this.title.position(465, 75);
        this.title.style('font-size', '70px');
        this.title.style('color', 'orange');
        this.input.position(575,350);
        this.input.style('width', '200px');
        this.input.style('height', '25px');
        this.input.style('background', 'white');
        this.button.position(640,400);
        this.button.style('width', '75px');
        this.button.style('height', '25px');
        this.button.style('background', 'lightgreen');
        this.reset.position(1050, 120);
        this.reset.style('width', '100px');
        this.reset.style('height', '25px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hi " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size','40px');
            
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}