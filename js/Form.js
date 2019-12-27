class Form {
constructor(){
    this.input = createInput("Your Name");
    this.button = createButton("Press Me");
    this.Greeting = createElement('h2');
}
hide(){
    this.Greeting.hide();
    this.input.hide();
    this.button.hide();
}

display(){
    var title = createElement('h2');
    title.html("Speeding Cars");
   title.position(50,50);

    this.input.position(300,250);

    this.button.position(400,300);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount += 1;
        player.update();
        player.updateCount(playerCount);
        
       this.Greeting.html("Hello" + player.name);
        this.Greeting.position(250,250);

    })
}
}