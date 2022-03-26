function download_image(){
    var canvas = document.getElementById("canvas");
    image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "happyvibes.png";
    link.href = image;
    link.click();
  }