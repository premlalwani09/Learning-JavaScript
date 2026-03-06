// // This will be used in chrome console, becuase document is not defined in node environment

// // document.getElementById("title")
// // document.getElementById("title").id;
// // document.getElementById("title").className;
// // document.getElementById("title").getAttribute;
// // document.getElementById("title").getAttribute("id");
// // document.getElementById("title").getAttribute("class");
// // document.getElementById("title").setAttribute("class", "test");  // This will change the class of the element with id "title" to "test"

// const title = document.getElementById("title");
// title.style.backgroundColor = "yellow";
// title.style.padding = "10px";
// title.style.borderRadius = "5px";
// title.style.color = "black";


// title.textContent
// title.innerHTML
// title.innerText

// // All the three properties are used to get the text content of an element, but they have some differences:

// // Text content vs innerHTML vs innerText
// // textContent: It returns the text content of the element and its descendants. It does not parse the HTML tags and returns them as plain text.
// // innerHTML: It returns the HTML content of the element and its descendants. It parses the HTML tags and returns them as they are.
// // innerText: It returns the visible text content of the element and its descendants. It does not return the hidden text content and it also does not parse the HTML tags.



// document.getElementsByClassName("heading") 

// document.querySelector("h1") // This will return the first h1 element in the document

// document.querySelector(".paragraph") // This will return the first element with class "paragraph"

// document.querySelector("#title") // This will return the element with id "title"


// document.querySelector("input[type='password']") // This will return the first input element with type "password"

// document.querySelector("p:first-child") // This will return the first p element that is a child of its parent


// const myUnorderedList = document.querySelector("ul");
// const turnGreen = myUnorderedList.querySelector("li") 
// turnGreen.style.backgroundColor = "green"; 
// turnGreen.style.padding = "5px";
// turnGreen.innerText = "I am green now!";


// const tempLiList = document.querySelectorAll("li") // This will return a NodeList of all the li elements in the document.
//                                                     // It looks like an array but it is not an array, it is a NodeList, which is a collection of nodes. We can use forEach to iterate over the NodeList, but we cannot use array methods like map, filter, etc.

// tempLiList[0].style.color = "green";
// tempLiList[1].style.color = "blue";
// tempLiList[2].style.color = "red";

// tempLiList.forEach( function(li) {
//     li.style.backgroundColor = "yellow";
// });

// tempLiList.forEach(li => {
//     li.style.backgroundColor = "yellow";
// });


// const myH1 = document.querySelectorAll("h1");
// myH1[0].style.color = "purple";



// const tempClassList = document.getElementsByClassName("list-item");

// tempClassList.forEach(li => {
//     li.style.backgroundColor = "orange";
// }); // This will give an error because getElementsByClassName returns an HTMLCollection, which is not an array and does not have the forEach method. We can convert it to an array using Array.from() or we can use a for loop to iterate over it.


// const tempClassListArray = Array.from(tempClassList);

// tempClassListArray.forEach(li => {
//     li.style.backgroundColor = "orange";
// }); // This will work because we have converted the HTMLCollection to an array using Array.from() method. Now we can use the forEach method to iterate over the array and change the background color of each li element to orange.



const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children)
console.log(parent.children[1].innerHTML);

for(let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "red";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);


console.log("NODES : ", parent.childNodes); // This will return a NodeList of all the child nodes of the parent element, including text nodes and comment nodes. We can use forEach to iterate over the NodeList, but we cannot use array methods like map, filter, etc.
