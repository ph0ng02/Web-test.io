
var audio = document.getElementById('background-audio');
audio.volume = 0.3;

function playAudio() {
    audio.play(); // Ensure the audio is played after user interaction
}
function pauseAudio(){
    audio.pause();
}
//test
/*function PlayMusic() {

    var play=document.getElementById("music");
    play.play();
  }
  
  $(document).ready(function(){
    setTimeout(PlayMusic,3000);
  })
*/

//click auto
function autoplaymusic(){

}
window.addEventListener('click', function() {
    document.getElementById('background-audio').play();
 });