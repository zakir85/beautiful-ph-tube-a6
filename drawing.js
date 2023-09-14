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
  //    calling drawing card API --------------------------------------
  const loadDrawingData = async () => {
    // Call API
    const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
    const data = await response.json();
    const drawingCardItems = data.data;
    // console.log(musicCardItems);
    displayDrawingCardItems(drawingCardItems);

  };

    const displayDrawingCardItems = drawingCardItems =>{
    const drawingCardContainer = document.getElementById('drawing-card-container');
    drawingCardItems.forEach((drawingCardItem) => {
    const drawingCardDiv = document.createElement('div');
    drawingCardDiv.className = 'card p-5 bg-[#ECF2FF] shadow-3xl mb-5';

    // Create the card content using cardItem properties
    drawingCardDiv.innerHTML = `
      <figure><img src="${drawingCardItem.thumbnail}" /> </figure>
    
          <h4 class="card-title">${drawingCardItem.message}</h4>
          
    `;
    // Append the card to the container
    drawingCardContainer.appendChild(drawingCardDiv);
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
        loadDrawingData();
     });
     comedyButton.addEventListener('click', () => {     
        // loadCardData(); 
     });
     drawingButton.addEventListener('click', () => {     
        loadDrawingData(); 
     });
   
     
  };
  
    // addEventListenersToButtons();


  loadDrawingData();
  loadButtonData()
