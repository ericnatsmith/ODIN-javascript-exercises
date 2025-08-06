const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redParagraph = document.createElement("p");
redParagraph.classList.add("red");
redParagraph.textContent = "Hey I'm red!";


const blackBox = document.createElement("div");
blackBox.classList = "style1";

const divWording = document.createElement("h1");
divWording.textContent = "I'm in a div";

const pWording = document.createElement("p");
pWording.textContent = "ME TOO";

//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”



container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blackBox);
blackBox.appendChild(divWording);
blackBox.appendChild(pWording);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";

});




/* 
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/