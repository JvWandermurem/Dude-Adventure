window.onload = function(){
    const config = {
        // Phaser.AUTO = Essa opção permite que o Phaser escolha automaticamente o melhor renderizador disponível no navegador do usuário 
        //Phaser.CANVAS = O renderizador de Canvas é mais simples e geralmente mais lento do que o WebGL, mas pode ser útil se você precisar de compatibilidade máxima com navegadores mais antigos que não suportam WebGL.
        // Phaser.WebGL = O WebGL é uma tecnologia avançada que permite gráficos 3D acelerados por hardware, proporcionando melhor desempenho e recursos gráficos do que o renderizador de Canvas. 
        type: Phaser.AUTO,
        whidth: 800,// Largura tela
        height: 600, // Altura tela
        scene:[preload,startScene,fase1], // inicia as cenas 
        // física do jogo
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 1000}
            }
        },
        pixelArt:false
    }
    var game = new Phaser.Game(config)
}