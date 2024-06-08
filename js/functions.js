var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.3.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

function resizeImage(img) {
  if ((img.style.width = "500px")) {
    console.log("ok");
    img.style.width = "800px";
    img.style.height = "400px";
  } else {
    console.log("zer ok");
    img.style.width = "500px";
    img.style.height = "500px";
  }
}

function MyMove() {
  let id = null;
  const elem = document.getElementById("player");
  const palette = document.getElementById("paletteMeter");
  const palettevalue = document.getElementById("paletteValue");
  document.getElementsByClassName("skillButton").disabled = true;
  document.getElementsByClassName("skillButton").innerHTML = "true";
  setTimeout(function () {
    document.getElementsByClassName("skillButton").disabled = false;
  }, 5000);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos > 200) {
      elem.style.left = pos - 200 + "px";
      if (palette.value < 100) {
        palette.value = palette.value + 25;
        palettevalue.innerHTML = palette.value;
      } else {
        palette.value = 0;
        palettevalue.innerHTML = "0";
      }
      console.log("gcd end");
      clearInterval(id);
    } else {
      pos = pos + 5;
      elem.style.left = pos + "px";
    }
  }
}
