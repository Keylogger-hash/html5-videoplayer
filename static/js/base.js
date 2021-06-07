$(document)ready(function({
  var controls={
    video:$("#myvideo"),
    playpause:$("#playpause"),
    togglePlayback:function(){
      (video.paused) ? video.play() :video.pause()
    },
    total: $("#total"),
    buffered: $("#buffered"),
    progress: $("#current"),
    duration: $("#duration"),
    currentTime: $("#currenttime"),
    hasHours: false,
  }
  var video = controls.video[0];
  controls.playpause.click(function(){
    if (video.paused){
      video.play();
      $(this).text("Pause")
    } else {
      video.pause()
      $(this).text("Play")
    }
    $(this).toggleClass("pause")
  })
  video.addEventListener("ended", function() {
    video.pause();
    controls.playpause.text("Play");
    controls.playpause.toggleClass("paused");
  });
  video.addEventListener("play",function(){
    controls.playpause.text("Pause");
    controls.playpause.toggleClass("paused")
  })
  video.addEventListener("pause",function(){
    controls.playpause.text("Play")
    controls.playpause.toggleClass("paused")
  })
  controls.playpause.click(function(){
    controls.togglePlayback();
  })
}))
