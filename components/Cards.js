// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        //Get individual article objects
        let bootstrapArticles = res.data.articles.bootstrap;
        let javascriptArticles = res.data.articles.javascript;
        let jqueryArticles = res.data.articles.jquery;
        let nodeArticles = res.data.articles.node;
        let techArticles = res.data.articles.technology;
         
        //Get container to append cards to
        let cardsContainer = document.querySelector('.cards-container');

        //Add objects to array to iterate over
        let articlesArray = [bootstrapArticles, javascriptArticles, jqueryArticles, nodeArticles, techArticles];
        
        //Build card and append to DOM
        articlesArray.forEach(arr => {
           arr.forEach(item => {
                cardsContainer.appendChild(cardMaker(item))}
            );
        })
    })
    .catch(err => {
        return `Oops we're sorry we had an error: ${err}`
    })


function cardMaker(object) {
    //Create Elements
    let cardContainer = document.createElement('div');
    let headline = document.createElement('div');
    let authorContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    //Add Classes
    cardContainer.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //Add data
    headline.textContent = object["headline"];
    img.textContent = object["authorPhoto"];
    authorName.textContent = object["authorName"];
   
    //Build Component
    cardContainer.appendChild(headline);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(img);

    //Add event listener to the card
    cardContainer.addEventListener('click', e => {
        console.log(headline.textContent);
    });

    return cardContainer
}
