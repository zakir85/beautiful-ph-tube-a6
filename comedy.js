
const loadButtonData = async () => {
    // Call API
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const cardButtons = data.data;
    displayCardButton(cardButtons);
  };
  
  const displayCardButton = (cardButtons) => {
    const btnCategoryContainer = document.getElementById('btn-category-container');
  
    // Create a container div for the buttons
    const buttonContainer = document.createElement('div');
    // Add text and style to each button----------------
    buttonContainer.innerHTML= `
    <button id="handleBtnAll" class="btn text-white bg-gray-400 hover:bg-[#FF1F3D]">All</button>
    <button id="handleBtnMusic" class="btn text-white bg-gray-400 hover:bg-[#FF1F3D]">Music</button>
    <button id="handleBtnComedy" class="btn text-white bg-gray-400 hover:bg-[#FF1F3D]">Comedy</button>
    <button id="handleBtnDrawing" class="btn text-white bg-gray-400 hover:bg-[#FF1F3D]">Drawing</button>    
    `;
  
    // Loop through the cardButtons and create buttons
    cardButtons.forEach((cardButton) => {
      const button = document.createElement('button');
        button.textContent = cardButton.data; 
  

// Append the button to the buttonContainer
      buttonContainer.appendChild(button);
    });
  
    // Append the buttonContainer to the btnCategoryContainer
    btnCategoryContainer.appendChild(buttonContainer);
     
  };


  //    calling comedy card API --------------------------------------
  const loadComedyData = async () => {
    // Call API
    const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1003');
    const data = await response.json();
    const comedyCardItems = data.data;
    // console.log(musicCardItems);
    displayComedyCardItems(comedyCardItems);

  };

    const displayComedyCardItems = comedyCardItems =>{
    const comedyCardContainer = document.getElementById('comedy-card-container');
    comedyCardItems.forEach((comedyCardItem) => {
    const comedyCardDiv = document.createElement('div');
    comedyCardDiv.className = 'card p-5 bg-[#ECF2FF] shadow-3xl mb-5';

    // Create the card content using cardItem properties
    comedyCardDiv.innerHTML = `
      <figure><img src="${comedyCardItem.thumbnail}" /> </figure>
      <div id="time-badge" class="badge bg-[#171717] text-slate-200 -mt-8 ml-64">${comedyCardItem.others.posted_date}</div>
      <div class="card-body flex flex-row">
        <div class="w-1/4">
          <img class="rounded-full" src="${comedyCardItem.authors[0].profile_picture}" />
        </div>
        <div class="w-3/4">
          <h4 class="card-title">${comedyCardItem.title}</h4>
          <div class="flex">
            <p>${comedyCardItem.authors[0].profile_name}</p>
            ${comedyCardItem.authors[0].verified ? '<img id="tikmark" class="rounded-full" src="./images/fi_tikmark.png"/>' : ''}
          </div>
          <p>${comedyCardItem.others?.views} views</p>
        </div>
      </div>
    `;
    // Append the card to the container
    comedyCardContainer.appendChild(comedyCardDiv);
  });


  }

  // Add a click event listener to each button
  const addEventListenersToButtons = () => {
    // Get references to the buttons
    const allButton = document.getElementById('handleBtnAll');
    const musicButton = document.getElementById('handleBtnMusic');
    const comedyButton = document.getElementById('handleBtnComedy');
    const drawingButton = document.getElementById('handleBtnDrawing');
  console.log(allButton);
    // Add click event listeners to the buttons
    
    allButton.addEventListener('click', () => {     
    //    loadCardData(); 
    });
    musicButton.addEventListener('click', () => {     
        // loadMusicData();
     });
     comedyButton.addEventListener('click', () => {     
        loadComedyData(); 
     });
     drawingButton.addEventListener('click', () => {     
        // loadDrawingData(); 
     });
   
     
  };
  
    // addEventListenersToButtons();


  loadComedyData();
  loadButtonData();
