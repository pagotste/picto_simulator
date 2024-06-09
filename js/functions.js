// Test function to move the player on skill(button) click
function MyMove() {
  let id = null;
  const elem = document.getElementById("player");
  const palette = document.getElementById("paletteMeter");
  const palettevalue = document.getElementById("paletteValue");
  $(".skillButton").prop("disabled", true);
  // Disable the buttons for x seconds
  setTimeout(function () {
    $(".skillButton").prop("disabled", false);
  }, 1000);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);

  // move the player img until it reaches 200px
  function frame() {
    if (pos > 200) {
      elem.style.left = pos - 200 + "px";
      // Increases the palette gauge until it reaches 100

      palette.value = myPlayer.palette;
      palettevalue.innerHTML = myPlayer.palette;

      console.log("gcd end");
      clearInterval(id);
    } else {
      pos = pos + 5;
      elem.style.left = pos + "px";
    }
  }
}

// jquery check
$(document).ready(function () {
  console.log("Hello Jquery loaded in js file");
});
