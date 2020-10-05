const ball = document.getElementById("ball");
const bar = document.getElementById("bar");
const brick1 = document.getElementById("brick1");
let ballSpecif = {
    ballX: 0.1,
    ballY: 0.1,
    ballDX: 5,
    ballDY: 5
}
let barSpecif = {
    barX: 0
}

let start = setInterval(ballMove, 40);
document.onkeydown = barMove;
function ballMove() {
    if (ballSpecif.ballX <= 0 || ballSpecif.ballX >= 770) ballSpecif.ballDX *= -1;
    if (ballSpecif.ballY <= 0 || ballSpecif.ballY >= 550 && ballSpecif.ballX + 20 > barSpecif.barX && ballSpecif.ballX < barSpecif.barX + 120) {
        ballSpecif.ballDY *= -1;
        bootsMoveUp();
        setTimeout(bootsMoveDown, 120);
        let kick = document.getElementById('kick');
        kick.play();
    }
    else if (ballSpecif.ballY >= 570) {
        gameOver();
    }
    ballSpecif.ballX += ballSpecif.ballDX;
    ballSpecif.ballY += ballSpecif.ballDY;
    ball.style.left = ballSpecif.ballX + "px";
    ball.style.top = ballSpecif.ballY + "px";
    document.getElementById('x').innerHTML = ballSpecif.ballX;
    document.getElementById('y').innerHTML = ballSpecif.ballY;
    let music = document.getElementById('music');
    music.play();
    music.volume = 0.3;

}
function barMove(e) {
    if (e.keyCode == 37 && barSpecif.barX > 0) barSpecif.barX -= 30;
    else if (e.keyCode == 39 && barSpecif.barX < 700) barSpecif.barX += 30;
    bar.style.left = barSpecif.barX;
}
function gameOver() {
    clearInterval(start);
    let lose = document.getElementById('lose');
    lose.play();
}
function bootsMoveUp() {
    bar.style.transform = "rotate(-45deg)";
    bar.style.transition = "0.3s";
}
function bootsMoveDown() {
    bar.style.transform = "rotate(0deg)";
    bar.style.transition = "0.3s";
}