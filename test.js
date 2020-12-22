var loadFile = function(event) {
    var image = document.getElementById('output');
    var imageSRC= URL.createObjectURL(event.target.files[0]);
    image.src = imageSRC;
    console.log(imageSRC);
};