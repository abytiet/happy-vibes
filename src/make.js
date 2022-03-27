let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let image_url = getRandomImage();
let caption = getRandomCaption();
let img = new Image();

/**
 * Add provided text to given image
 * @param {*} imagePath Image Path
 * @param {*} text Text to add to image
 */
function addTextToImage() {
    let fontsize = 100;
    let width = canvas.width

    // Lower the font size until the text fits the canvas
    do {
        fontsize--;
        context.font = fontsize + "px " + "arial";
    } while (context.measureText(caption).width > canvas.width)

    // Draw Image function
    img = new Image();
    img.src = image_url;
    context.fillStyle = "#000";
    context.fillRect(0,0,canvas.width,canvas.height);
    img.onload = function () { 
        context.lineWidth = 2;
        context.drawImage(img, (canvas.width / 2) - (img.width / 2), 0, img.width, canvas.height);
        
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.strokeText(caption, canvas.width / 2, fontsize);
        context.fillText(caption, canvas.width / 2, fontsize);
        context.textAlign = "center"; 
    };
    
/**
 * On-click event for Update button
 * Updates the canvas based on provided caption / image URL
 */
document.getElementById('updatebtn').addEventListener('click', function() {
    let data;
    if (document.getElementById("ImageURL").value != null && document.getElementById("ImageURL").value.length != 0) {
        updateImage(document.getElementById("ImageURL").value);
        // post image url to database
        data = {url: document.getElementById("ImageURL").value};
        fetch("https://affi-happy-vibes.herokuapp.com/pictures", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
    });
    }
    if (document.getElementById("Caption").value && document.getElementById("Caption").value.length != 0) {
        updateCaption(document.getElementById("Caption").value);
        postCaption();
    }  
  });
}


async function getRandomImage() {
    fetch('https://affi-happy-vibes.herokuapp.com/pictures/random')
    .then(response => response.json())
    .then(data => updateImage(data[0].url))
  }

function updateImage(url) {
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

function postCaption() {
    data = {text: document.getElementById("Caption").value};
    fetch("https://affi-happy-vibes.herokuapp.com/captions", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(res => {
    console.log("Request complete! response:", res);
    });
}