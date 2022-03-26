/**
 * Add provided text to given image
 * @param {*} imagePath Image Path
 * @param {*} text Text to add to image
 */
function addTextToImage(imagePath, text) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var fontsize = 100;
    var width = canvas.width

    // Lower the font size until the text fits the canvas
    do {
        fontsize--;
        context.font = fontsize + "px " + "arial";
    } while (context.measureText(text).width > canvas.width)

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.fillStyle = "white";
        context.textAlign = "center"; 
        context.fillText(text, width/2, fontsize);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.strokeText(text, width/2, fontsize);
    };
}

addTextToImage("https://i.pinimg.com/originals/4c/bc/43/4cbc4377ef4095828bf7374f04074c57.jpg", "damm");
