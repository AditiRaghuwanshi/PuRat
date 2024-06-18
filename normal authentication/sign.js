
$(document).ready(function(){
  var images = [
      'images/image5.jpg',
      'images/image2.jpg',
      'images/image3.jpg',
      'images/image8.jpg',
      'images/image7.jpg'
  ];

  var randomNumber = Math.floor(Math.random() * images.length);
  var bgImg = 'url(' + images[randomNumber] + ')';

  $('body').css({
      'background': bgImg,
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'center center'
  });
});
