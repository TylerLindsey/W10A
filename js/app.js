var titleTag = document.querySelector('h1');
titleTag.innerText = `I am an h1 tag and "overwrote" the  HTML text using JS`
// I made the js variable name = to the function (finding h1) and on the line below that made it so that the innerText of that variable would say a new string. 




var allLiTags = document.querySelectorAll('li');
for(var index=0; index<allLiTags.length; index++){
  allLiTags[index].innerText = 'changed in js';
}
// The var allLiTags is the js variable that houses the query selector that looks for anything called li, and contains the for loop which makes the code run through and edits all of the li tags  




var paragraphIDTag = document.getElementById('paragraphID');
paragraphIDTag.innerText = `I am an ID now written in JS`;
// paragraphClassTag is the var at the top of the function and also what we tie the innerText to. In () we put the ID name from the HTML that we are looking for




var paragraphClassTag = document.getElementsByClassName('paragraphClass');
for(var index=0; index<paragraphClassTag.length; index++){
  paragraphClassTag[index].innerText = `I am a class that is now written in JS`
}
// I made it so the for loop would run through the code and look for any thing with the class name paragraphClass and overwrite the previous HTML with a new script from JS. 




function liTagCounter(){
  var numberOfElements = document.getElementsByTagName('li');
  alert(`The number of Li points are : `+numberOfElements.length)
}
// The var liTagCounter is the js variable that houses the query selector that looks for anything called li, and contains the popup alert whih has a string with a plus to the number of counted Li points




const para = document.createElement(`p`);
para.innerText = `I'm added in under count by using the appendChild function in JS`;
document.body.appendChild(para);
// use the const to reserve para, and then declared the variable would create a p, and below that I referenced the variable name to type in what it would say, and finally on the 3d line I appended the edit to the code.




// var element = document.getElementById(`classDelete`);
// classDelete.remove();
// originally I used this to delete classDelete in html line 15, but noticed it isnt classList




// I completed everything up until this point, but past here I am unsure if I did the add class correct, I don't think I did. Then the commented out section below the addClass function (line 69) is attempts I have made to figure it out.

function addClass(){
  var addThis = document.getElementById(`btn`);
  addThis.classList.add(`testClass`);
}


// function removeClass(){
//   var addThis = document.getElementById(`btn`);
//   addThis.classList.remove(`testClass`);
// }

// function toggleOptions(){
//   var addThis = document.getElementById(`btn`);
//   addThis.classList.toggleOptions(`testClass`);
// }
// function addClass(){
//   let dropdown = document.getElementById(`dropdown`);
//   dropdown.classList.add(`newClass`);
// }

// styleP();
// let dropdown = document.getElementById('dropdown');
// dropdown.style.display='block';












