// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Stduy the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// // This won't be as easy as just iterating over an array though.
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
// //
// // Create a card for each of the articles and add the card to the DOM.


const cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let keys = Object.keys(response.data.articles)
        console.log(keys);

        keys.forEach(key => {
            cardsCont.appendChild(card(response))
        })

        // const key = response.data.article
        
        // for(let key in response) {
        //     //cardsCont.appendChild(card())
        //     console.log(response[key]);
        //     const articles = response[key];
        //     return articles
        // }
        
    });


    // for(let prop in response){
    //     console.log(prop);
    //     console.log(response[prop]);
        
    // };


function card (object) {
    const 
        card = document.createElement('div'),
        headlineCont = document.createElement('div'),
        headlineText = document.createElement('p'),
        authorCont = document.createElement('div'),
        imgCont = document.createElement('div'),
        img = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add('card');
    headlineCont.classList.add('headline');
    authorCont.classList.add('author');
    imgCont.classList.add('img-container');

    card.appendChild(headlineCont);
    card.appendChild(authorCont);
    headlineCont.appendChild(headlineText);
    authorCont.appendChild(imgCont);
    authorCont.appendChild(authorName);
    imgCont.appendChild(img);

    headlineText.textContent = headline;
    img.setAttribute('src', object.data.articles.authorPhoto);
    authorName.textContent = `By ${object.data.articles.authorName}`;

    return card
}

// cardsCont.appendChild(card(object));