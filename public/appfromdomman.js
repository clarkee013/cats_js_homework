// var app = function() {
//// the below are differing ways to get elements from the webpage on localhost:3000 --->>>
/////////
//// var element = document.getElementById("tagline");
//// var elements = document.getElementsByClassName("quote");
//// var elements = document.getElementsByTagName("p");
//// var cites = document.getElementsByTagName("cite");
//// var qotd = document.getElementById("quote-of-the-day");
//// var element = document.querySelector(".quote");
//// var elements = document.querySelectorAll(".quote");
//// var qotd = document.querySelectorAll("#quote-of-the-day");
////////
// var signUp = document.querySelector("#sign-up");
// var children = signUp.children; 
// for(var i=0; i < children.length; i++){
//   console.log(children[i]);
// }
////////
// var tagline = document.getElementById("tagline");
// tagline.innerHTML = "<span>YOLO!</span>";
////////

/// how to update the class name of an element --->>>
// var articles = document.getElementsByClassName("quote");
//   articles[0].className = "red-quote";
///////

// HTML is What is the content
// CSS - is How it should look
// JS - is How is should be have

// to hide the quote of the day --->
// var qotd = document.getElementById("quote-of-the-day");
//   qotd.style.backgroundColor = "white";
//   qotd.style.color = "white";
////////
//// var qotd = document.querySelector("#quote-of-the-day");
//// qotd.style.display = "none";
////////

// to give all the articles a sweet saddlebrown background --->
// var articles = document.getElementsByClassName("quote");
// for (var article of articles){
//   article.style.backgroundColor = "saddleBrown";
//// article.classList.add("highlighted");
//// use the last above way with a change in the style.css sheet as well
/////////

///////////////
// how to add an element --->
//////////////
// 1. create the parent article container, and give it a class.
// var quoteArticle = document.createElement("article");
// quoteArticle.classList.add("quote");
// // 2. create its first child which is blockquote, amend the inner text of the blockquote.
// var blockquote = document.createElement("blockquote");
// blockquote.innerText = "It's a trap! "
// // 3. create the cite element.
// var cite = document.createElement("cite");
// cite.innerText = "Sir David of Clarkson";
// // 4. append the cite to the blockquote.
// blockquote.appendChild(cite);
// // 5. attached the blockquote to the article.
// quoteArticle.appendChild(blockquote);
// // 6. attach the article to the quotes list on the page.
// var quotes = document.querySelector("#quotes");
// quotes.appendChild(quoteArticle);
/////////////