let myImagesArray = ["../images/about-us-page images/beach.png","../images/about-us-page images/balloon.png","../images/about-us-page images/man-on-mountain.png","../images/about-us-page images/silhouette.png","../images/about-us-page images/surf-boarding.png","../images/about-us-page images/surf-hawaii.png","../images/about-us-page images/relax.png","../images/about-us-page images/sand.png","../images/about-us-page images/under.png","../images/about-us-page images/boat.png"];
let ImageNumber = 0;
let difference = myImagesArray.length -1;

let delay = 2000; 

setInterval('ChangeImages(1)', delay);
   
function ChangeImages(direction)
{
ImageNumber = ImageNumber + direction;

if(ImageNumber > difference)
{
  ImageNumber = 0;
}

if(ImageNumber < 0)
{
  ImageNumber = difference;
}
document.getElementById('slideshow').src = myImagesArray[ImageNumber]; 
}