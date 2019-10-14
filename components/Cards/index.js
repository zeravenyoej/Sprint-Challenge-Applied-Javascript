// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsCont = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res=>{
        // console.log(res);
        let listOfKeyValuePairs = res.data.articles;

        listOfKeyValuePairs.bootstrap.map((event)=> {
            return cardsCont.appendChild(cardCreator(event));
        })

        listOfKeyValuePairs.javascript.map((event)=> {
            return cardsCont.appendChild(cardCreator(event));
        })

        listOfKeyValuePairs.technology.map((event)=> {
            return cardsCont.appendChild(cardCreator(event));
        })

        listOfKeyValuePairs.jquery.map((event)=> {
            return cardsCont.appendChild(cardCreator(event));
        })

        listOfKeyValuePairs.node.map((event)=> {
            return cardsCont.appendChild(cardCreator(event));
        })
        
    })
    .catch(err=>{
        console.log(err);
    });


function cardCreator(ob){
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        authorID = document.createElement('span');
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline, author);
    author.append(imgContainer, authorID);
    imgContainer.appendChild(img);

    //TEXT CONTENT
    headline.textContent=ob.headline;
    img.src=ob.authorPhoto;
    authorID.textContent=`By: ${ob.authorName}`;


    return card
}