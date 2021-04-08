function updateTimer() {
    past = Date.parse("Feb 19, 2021 18:00:00");
    now = new Date();
    diff = now - past;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("time")
        .innerHTML = d + '<span> jours </span>' + h + '<span> heures </span>' + m + '<span> minutes </span>' + s + '<span> secondes </span>';
}
setInterval('updateTimer()', 1000);

function randombg(){
  var random= Math.floor(Math.random() * 9) + 0;
  var bigSize = ["url('src/background2/bg1.jpg')",
                 "url('src/background2/bg2.jpg')",
                 "url('src/background2/bg3.jpg')",
                 "url('src/background2/bg4.jpg')",
                 "url('src/background2/bg5.jpg')",
                 "url('src/background2/bg6.jpg')",
                 "url('src/background2/bg7.jpg')",
                 "url('src/background2/bg8.jpg')",
                 "url('src/background2/bg9.jpg')"];
  document.getElementById("background").style.backgroundImage=bigSize[random];
}
