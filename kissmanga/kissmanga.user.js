var imgs = document.querySelectorAll('#divImage p img');
var imgArray = Array.prototype.slice.call(imgs, 0);
imgArray.forEach(function(img) {
    img.style.maxWidth = '100%';
});
