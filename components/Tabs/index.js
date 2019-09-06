// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        const newTopics = response.data.topics;
        const newTabs = tabs(newTopics);
        topics.appendChild(newTabs);
    })
    .catch( error => {
        console.log('this is wrong, Joey', error);
    });


function tabs (topic) {
    const tab = document.createElement('div');
    const links = document.createElement('a');

    tab.classList.add('tab');

    links.textContent = topic;

    tab.appendChild(links);

    return tab
}