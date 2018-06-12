var images = new Array()
images[0] = "./images/250X110668568400.jpg";
images[1] = "./images/paz_250x110103131473.jpg";
setInterval("changeImage()", 1000);
var x=0;

function changeImage()
{
           document.getElementById("changeImg").src=images[x]
           x++;
           if (images.length == x) 
           {
               x = 0;
           }
}