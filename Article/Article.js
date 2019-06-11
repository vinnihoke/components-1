// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(articleElement) {
    // assign this.articleElement to the passed in articleElement
    this.articleElement = articleElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = articleElement.querySelector(".expandButton");



    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";


    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    this.expandButton.addEventListener("click", this.changeButtonText.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the articleElement, toggle a class to expand or hide the article.
    this.articleElement.classList.toggle("article-open");
  }

  changeButtonText(){
    if(this.expandButton.textContent === "expand"){
      this.expandButton.textContent = "close";
    } else {
      this.expandButton.textContent = "expand";
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach((articleElement) => {
  return new Article(articleElement);
});
