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

// const cardsCont = document.querySelector('.cards-container');

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response);
//         response.forEach(item => {

//         })
//     })


// function card (object) {
//     const 
//         card = document.createElement('div'),
//         headline = document.createElement('div'),
//         headlineText = document.createElement('p');
//         author = document.createElement('div'),
//         imgCont = document.createElement('div'),
//         img = document.createElement('img'),
//         authorName = document.createElement('span');

//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imgCont.classList.add('img-container');

//     card.appendChild(headline);
//     card.appendChild(author);
//     headline.appendChild(headlineText);
//     author.appendChild(imgCont);
//     author.appendChild(authorName);
//     imgCont.appendChild(img);

//     headlineText.textContent = object.data.articles[i].headline[i];
//     img.setAttribute('src', object.data.articles[i].authorPhoto[i]);
//     authorName.textContent = `By ${object.data.articles[i].authorName[i]}`;

//     return card
// }