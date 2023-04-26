(function(elid, width, height, speed, strength){
    let canvas = document.querySelector(elid),
            ctx = canvas.getContext("2d"),
            pos = 0, blocks = [];
    canvas.width = width; canvas.height = height;
    let img = new Image();
    img.src = "./tree2.png";
    img.onload = function() {
        let game = setInterval(function(){
            if( Math.random() < strength) blocks.push([Math.random()*(width-10),-10]);
            ctx.clearRect(0,0,width,height);
            ctx.fillRect(pos,height-30,10,40);
            for(let i = 0; i < blocks.length; i++){
                ctx.drawImage(img, blocks[i][0], blocks[i][1], 10, 10);
                if( blocks[i][1] > height - 60 && blocks[i][1] < height - 10 && Math.abs( pos - blocks[i][0]) < 10 ){
                    clearInterval(game);
                    alert("Game over. You have " + Math.floor(1000 * strength) + " points.");
                }
                if( blocks[i][1] > height - 5 ){
                    blocks.splice( i, 1);
                    i--;
                } else {
                    blocks[i][1] += 5;
                }
            }
            strength += 0.001;
        },speed);
    };
    document.addEventListener('mousemove', function (e) {
        pos = (e.pageX > 0) ? ((e.pageX < width) ? e.pageX : width-10) : 0;
    }, false);
})("#canvas",600,300,33,0.45);