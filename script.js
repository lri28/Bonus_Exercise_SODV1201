
var num = 0;

imgArray = [
  ['http://tinyurl.com/yekt2raa'],
  ['http://tinyurl.com/bdh5kspu'],
  ['http://tinyurl.com/4ad4entx']
];

function slideshow(slide_num) {
document.getElementById('img').src=imgArray[slide_num][0];
document.getElementById('img').alt=imgArray[slide_num][1];
document.getElementById('img').alt=imgArray[slide_num][2];
}

function btnNext() {
  num++;
  num = num % imgArray.length;
  slideshow(num);
}

function btnPrevious() {
    num--;
    if (num < 0) {num=imgArray.length-1;}
    num = num % imgArray.length;
    slideshow(num);
}