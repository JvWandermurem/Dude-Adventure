class fase1 extends Phaser.Scene{
    
    
    constructor(){
        super('fase1')
    }

    
    create(){
        // Configura o cenário
      var ceu = this.add.image(0,0,"ceu").setOrigin(0);
      ceu.setDisplaySize(2000, 600)
      
       // Cria o player
      this.player = this.physics.add.sprite(50,400,"player")
      .setCollideWorldBounds(true)
      .setScale(1.5,1.5);
      
      // Cria animações do dude para todas as direções e parado
     this.anims.create({
        key: "andar esquerda",
        frames: this.anims.generateFrameNumbers('player', {
            start: 3,
            end: 0
          }),
          frameRate: 8,
          repeat: -1
     })

     this.anims.create({
        key: "andar direita",
        frames: this.anims.generateFrameNumbers('player', {
            start: 5,
            end: 8
          }),
          frameRate: 8,
          repeat: -1
     })

     this.anims.create({
        key: "parado",
        frames: this.anims.generateFrameNumbers('player', {
            start: 4
          }),
        
          //cria a animação de girar da moeda
     })
     this.anims.create({
        key: "girar",
        frames: this.anims.generateFrameNumbers('moedas', {
            start: 0,
            end: 2
          }),
          frameRate: 3,
          repeat: -1
     })

     
// variável de controle de pulo do jogador
     this.player.canJump = true
        
     // Configura as teclas de controle
     this.teclado = this.input.keyboard.createCursorKeys()


     // Cria as plataformas estáticas com escala e sua localização
     this.plataformass = this.physics.add.staticGroup();
        this.plataformass.create(0,600,'plataforma').setScale(3.5,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(275,600,'plataforma').setScale(3.1,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(520,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(770,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(770,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(990,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(1240,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(1490,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(1740,600,'plataforma').setScale(3.2,2).setOrigin(0,1).refreshBody();

        this.plataformass.create(400,250,'plataforma1')
        .setScale(3,2)
        .setOrigin(0,1)
        .refreshBody();
        

        this.plataformass.create(250,360,'plataforma1')
        .setScale(3,2)
        .setOrigin(0,1)
        .refreshBody();

        this.plataformass.create(120,480,'plataforma1')
        .setScale(3,2)
        .setOrigin(0,1)
        .refreshBody();

        // Cria grupo das moedas
     this.moedas = this.physics.add.group({
    key: "moedas",
    setScale: { x: 0.5, y: 0.5 },
    repeat: 20,
    setXY: {
        x: 12,
        y: -50,
        stepX: 120,
    }
})

this.moedas.children.iterate((c) => {
    c.anims.play("girar")
})


//pontuação e o texto da pontuação
this.score = 0
this.txtScore = this.add.text(15,15,`MOEDAS: ${this.score}`,{fontSize: "32px"})
.setShadow(1,2,"#000",1)
.setScrollFactor(-0,4)
this.setScore()

// Adiciona colisões
     this.physics.add.collider(this.player, this.plataformass)
     this.physics.add.collider(this.moedas, this.plataformass)
     this.physics.add.overlap(this.player, this.moedas, this.coletaMoeda,null,this)

     // Define os limites do mundo e configura a câmera
     this.physics.world.setBounds(0,0,2000,600)
     this.cameras.main.setBounds(0,0,2000,600)
     this.cameras.main.startFollow(this.player)
    }
// Atualiza a pontuação exibida
setScore(){
    this.txtScore.setText(this.score > 9 ? `MOEDAS: ${this.score}` : `MOEDAS: 0${this.score}`)
}
//  atualiza o placar ao coletar uma moeda
coletaMoeda(player,moedas){
    moedas.destroy()
    this.score ++
    this.setScore()
}
    update(){

        // movimento do player para esquerda
        if(this.teclado.left.isDown){
            this.player.anims.play("andar esquerda",true)
            this.player.setVelocityX(-150)
        }
     // movimento do player para esquerda
        else if(this.teclado.right.isDown){
            this.player.anims.play("andar direita",true)
            this.player.setVelocityX(150)
        }
     // player parado e sua animação
        else{
            this.player.anims.play("parado")
            this.player.setVelocityX(0)
        }
        
      // pulo do player
        if(this.teclado.up.isDown && this.player.canJump && this.player.body.touching.down){
            this.player.setVelocityY(-500)
            this.player.canJump = false
        }
     // impede o jogador de pular no ar
        if(!this.teclado.up.isDown && !this.player.canJump){
            this.player.canJump = true}

    }
}

