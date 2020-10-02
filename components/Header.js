// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerContainer = document.createElement('div');
    let headerDate = document.createElement('span');
    let headerH1 = document.createElement('h1');
    let headerTemp = document.createElement('span')

    //Add Classes
    headerContainer.classList.add('header');
    headerDate.classList.add('date');   
    headerTemp.classList.add('temp');
    
    //Add Text
    headerDate.textContent = 'MARCH 28, 2020'
    headerH1.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'

    //Add elements to headerContainer
    headerContainer.appendChild(headerDate);
    headerContainer.appendChild(headerH1);
    headerContainer.appendChild(headerTemp); 

    return headerContainer 
}


const headerSection = document.querySelector('.header-container');
headerSection.appendChild(Header())
