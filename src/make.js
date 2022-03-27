var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var image_url = "https://i.pinimg.com/originals/4c/bc/43/4cbc4377ef4095828bf7374f04074c57.jpg";
var caption = "I Love You";
var img = new Image();

/**
 * Add provided text to given image
 * @param {*} imagePath Image Path
 * @param {*} text Text to add to image
 */
function addTextToImage() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var fontsize = 100;
    var width = canvas.width

    // Lower the font size until the text fits the canvas
    do {
        fontsize--;
        context.font = fontsize + "px " + "arial";
    } while (context.measureText(caption).width > canvas.width)

    // Draw Image function
    img = new Image();
    img.src = image_url + '?' + new Date().getTime();
    img.onload = function () {  
        context.drawImage(img, 0, 0);
        context.fillStyle = "white";
        context.textAlign = "center"; 
        context.fillText(caption, width/2, fontsize);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.strokeText(caption, width/2, fontsize);
    };
}

/**
 * On-click event for Update button
 * Updates the canvas based on provided caption / image URL
 */
document.getElementById('updatebtn').addEventListener('click', function() {
    console.log("clicked");
    console.log(document.getElementById("ImageURL").value + "img")
    console.log(document.getElementById("Caption").value + "caption")
    document.getElementById("Caption").value
    if (document.getElementById("ImageURL").value != null) {
        console.log(img.src);
        img.src = document.getElementById("ImageURL").value + '?' + new Date().getTime();
        image_url = document.getElementById("ImageURL").value;
    } 
    if (document.getElementById("Caption").value) {
        caption = document.getElementById("Caption").value;
    }
    addTextToImage();
  });
