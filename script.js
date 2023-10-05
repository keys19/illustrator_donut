document.addEventListener("DOMContentLoaded", function () {
    sprinklesGroup = document.getElementById("sprinkles");
  
    sprinklesGroup.style.visibility = "hidden"; // initially hide the sprinkles
  
    document.addEventListener("click", function () {
      if (sprinklesGroup.style.visibility === "hidden") {
        sprinklesGroup.style.visibility = "visible";
      } else {
        sprinklesGroup.style.visibility = "hidden";
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    textLayer = document.getElementById("text");
  
    textLayer.style.visibility = "hidden"; // initially hide the text
  
    document.addEventListener("click", function () {
      if (textLayer.style.visibility === "hidden") {
        textLayer.style.visibility = "visible";
      } else {
        textLayer.style.visibility = "hidden";
      }
    });
  });
  