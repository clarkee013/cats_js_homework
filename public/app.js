var cattArray = [
{name: "Topsy", favFood: "Beer", picture: "http://bit.ly/2vlGqX0"},
{name: "Tigger", favFood: "Bats!", picture: "tinternet is doon"},
{name: "Tom", favFood: "Cooking Oil", picture: "tinternet is doon"}
];


var createCat = function(cat){
// 1. create the parent article container, and give it a class.
// var quoteArticle = document.createElement("article");
// quoteArticle.classList.add("quote");
  var catsContainer = document.createElement("ul");
    catsContainer.classList.add("cat");
// // 2. create its first child which is blockquote, amend the inner text of the blockquote.
// var blockquote = document.createElement("blockquote");
// blockquote.innerText = "It's a trap! "
var name = document.createElement("li");
name.innerText = cat.name;
// // 3. create the cite element.
// var cite = document.createElement("cite");
// cite.innerText = "Sir David of Clarkson";
var favFood = document.createElement("li");
favFood.innerText = cat.favFood;

var picture = document.createElement("img");
picture.src = cat.picture;
picture.width = "500";
picture.height = "350";

// // 4. append the cite to the blockquote.
// blockquote.appendChild(cite);
// // 5. attached the blockquote to the article.
// quoteArticle.appendChild(blockquote);
// // 6. attach the article to the quotes list on the page.
// var quotes = document.querySelector("#quotes");
// quotes.appendChild(quoteArticle);
catsContainer.appendChild(name);
catsContainer.appendChild(favFood);
catsContainer.appendChild(picture);


var cats = document.getElementById("cat");
cats.appendChild(catsContainer);
};


var app = function(){
  cattArray.forEach(createCat);
}


window.onload = app;