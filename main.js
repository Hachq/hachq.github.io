var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tseluyu-tebua.jpg') {
      myImage.setAttribute ('src','images/Perspekt4u.jpg');
    } else {
      myImage.setAttribute ('src','images/tseluyu-tebua.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Картинка о люпви, ' + myName;
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Картинка о люпви, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }  