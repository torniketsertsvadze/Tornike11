let Player = document.getElementById('player');
let Score = document.getElementById('score');
let Timer = document.getElementById('timer');
let RealTimer = 20;
let RealScore = 0;
let IntervalCounter = 600;
let TimeLineSound = new Audio();
TimeLineSound.src = 'sounds/music.mp3';

let TochCubeSound = new Audio();
TochCubeSound.src = 'sounds/take.wav';

document.body.addEventListener('click' , function() {
    TimeLineSound.play();
})


let interval = setInterval(StartTimer  , IntervalCounter);

Player.addEventListener('click' , function() {
    TochCubeSound.play();
    RealScore++;
    Score.textContent = 'Score' + ' '  + RealScore;
    RealTimer += 1;
    Timer.textContent = 'Timer' + ' '  + RealTimer;
    let RandomPosX = Math.floor(Math.random() * 500);
    let RandomPosY = Math.floor(Math.random() * 550);
    let RandomScale = Math.floor(Math.random() * 100);


    if(RandomScale < 10) {
        RandomScale = 20;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px' ;


    }

    Player.style.marginLeft = RandomPosX + 'px';
    Player.style.marginTop = RandomPosY + 'px' ;
    Player.style.width = RandomScale + 'px';
    Player.style.height = RandomScale + 'px' ;

});
function StartTimer() {
    RealTimer--;
    Timer.textContent = 'Timer' + ' ' + RealTimer;
    if(RealTimer < 1) {
        EndGame();
    }
}
function StopTimer(){
   

}
function EndGame(){
    Swal.fire('sorry , you lose' + ' ' + 'your score is' + ' ' + RealScore);
   clearInterval(interval);
}






