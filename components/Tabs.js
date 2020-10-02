// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// import cardMaker from './Cards'



axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        //Get topics section in HTML and topics to render from server
        let topicsSection = document.querySelector('.topics');
        let topics = res.data.topics;

        //Append each tab to the DOM
        topics.forEach(topic => {
            let tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = topic;

            //On click, console.log tabs textContent
            tab.addEventListener('click', e => {
                console.log(e.target.textContent);
            });
            topicsSection.appendChild(tab);
        });        
    })
    .catch(err => {
        return `Oh no we didn't receive a response! ${err}`
    })


