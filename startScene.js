class startScene extends Phaser.Scene{
    constructor(){
        super("startScene")
    }

    create(){
        // Adiciona a imagem da cena start
this.add.image(0,0, "start").setOrigin(0,0).setScale(0.56)

// Define um temporizador para exibir o texto após 1 segundo
setTimeout( () => {
    // Adiciona o texto "Press Enter to Start" 
this.add.text(this.game.config.width/2,this.game.config.height/2,"Press Enter to Start",{fontSize: "32px"}
).setOrigin(0.4,-3)
//um evento para verificar quando a tecla Enter é pressionada
this.input.keyboard.addKey('enter').on("down",()=>{this.scene.start('fase1')})
},1000)
    }
}