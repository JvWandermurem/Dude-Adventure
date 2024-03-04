class preload extends Phaser.Scene{
    constructor(){
        super("preload")
    }
    preload(){
        //coloca todas as imagens no jogo
        this.load.image('start','assets/Game start.png');
        this.load.image('ceu','assets/céu.jpg');
        this.load.image('plataforma','assets/chão.png');
        this.load.image('plataforma1','assets/chão1.png');
        this.load.spritesheet("player","assets/dude.png",{frameWidth: 32, frameHeight: 48}),
        this.load.spritesheet("moedas","assets/moeda.png",{frameWidth: 73, frameHeight: 168})
    }
    create(){
        //inicia a cena Start do jogo
        this.scene.start("startScene")
    }
}