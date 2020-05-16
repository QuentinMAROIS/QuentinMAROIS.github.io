function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('src/background1/bg1.jpg')",
                 "url('src/background1/bg2.jpg')",
                 "url('src/background1/bg3.jpg')",
                 "url('src/background1/bg4.jpg')",
                 "url('src/background1/bg5.jpg')",
                 "url('src/background1/bg6.jpg')"];
  document.getElementById("background404").style.backgroundImage=bigSize[random];
}