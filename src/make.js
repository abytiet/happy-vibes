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
    var fontsize = 100;
    var width = canvas.width

    // Lower the font size until the text fits the canvas
    do {
        fontsize--;
        context.font = fontsize + "px " + "arial";
    } while (context.measureText(caption).width > canvas.width)

    // Draw Image function
    img = new Image();
    img.src = image_url;
    img.onload = function () {  
        context.drawImage(img, 0, 0);
        context.fillStyle = "white";
        context.textAlign = "center"; 
        context.fillText(caption, width/2, fontsize);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.strokeText(caption, width/2, fontsize);
    };/**
 * On-click event for Update button
 * Updates the canvas based on provided caption / image URL
 */
document.getElementById('updatebtn').addEventListener('click', function() {
    if (document.getElementById("ImageURL").value != null && document.getElementById("ImageURL").value.length != 0) {
        updateImage(document.getElementById("ImageURL").value);
    } 
    if (document.getElementById("Caption").value && document.getElementById("Caption").value.length != 0) {
        updateCaption(document.getElementById("Caption").value);
    }
  });
}

    async function getRandomImage() {
    fetch('https://affi-happy-vibes.herokuapp.com/pictures/random')
    .then(response => response.json())
    .then(data => updateImage(data[0].url))
  }

function updateImage(url) {
    console.log(url);
    img.src = url;
    image_url = url;

    context.clearRect(0, 0, canvas.width, canvas.height);
    addTextToImage();
}


function getRandomCaption() {
    fetch('https://affi-happy-vibes.herokuapp.com/captions/random')
    .then(response => response.json())
    .then(data => updateCaption(data[0].text))
}

function updateCaption(text) {
    caption = text;
    context.clearRect(0, 0, canvas.width, canvas.height);
    addTextToImage();
}