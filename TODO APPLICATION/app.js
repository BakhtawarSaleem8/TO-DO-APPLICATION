
// to target the input to get its value
var task = document.getElementById("input");
// to target the div whic coantains all elements and will appen new elements created by user inputs
var container = document.getElementById("div");
console.log(task);
// function that will be trigerred on clicking add button and will add elements created by user actions.
function addTask(){
var plist = document.createElement("ul");
console.log(plist);
var clist = document.createElement("li");
  clist.innerText=task.value;
plist.appendChild(clist);
container.appendChild(plist);
// creating botton for each list element
delBtn = document.createElement("button");
text = document.createTextNode("Delete");
// add text to button
delBtn.appendChild(text);
// button will be rendered for each list element
clist.appendChild(delBtn);
//targetin each button at child index of 0  i.e delete button and assigning event to that
clist.children[0].addEventListener("click",function(){
    // removeChild will remove the list ement from ul
     plist.removeChild(clist);
});
//creating second button 
var ed = document.createElement("button");
var text2 = document.createTextNode("Done");
ed.appendChild(text2);
clist.appendChild(ed);
// done button at index[2] of li will strike a line on li text when trigered
clist.children[1].addEventListener("click", function(){
    clist.children[1].parentElement.style.textDecoration="line-through";
});
};
