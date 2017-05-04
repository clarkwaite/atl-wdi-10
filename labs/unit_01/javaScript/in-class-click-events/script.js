window.onload = function() {
    var buttonOne = document.getElementById('buttonOne');
      buttonOne.addEventListener('click', function() {
          alert('You have clicked button one!');
 });

var buttonTwo = document.getElementById('buttonTwo');
  buttonTwo.addEventListener('click', function() {
    var createNewParagraph = document.createElement('p');
    createNewParagraph.innerHTML ='A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).';
    document.getElementById('information').appendChild(createNewParagraph);
  });

var buttonThree = document.getElementById('buttonThree');
  buttonThree.addEventListener('click', function() {
    var newParagraph = document.getElementsByTagName('p')[0];
    document.getElementById('information').removeChild(newParagraph);
  });
}
