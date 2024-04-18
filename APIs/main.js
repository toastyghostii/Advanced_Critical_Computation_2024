document.getElementById("searchForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent the form from submitting traditionally

  const searchTerm = document.getElementById("searchInput").value;
  const searchURL = "https://www.amiiboapi.com/api/amiibo/?character=" + searchTerm;
  console.log("Fetching data from:", searchURL);

  fetch(searchURL)
   .then(response => {
    console.log("Response status:", response.status); // Log the response status
    return response.json();
  })
  .then(data =>{
    console.log("wtf");
    displayResults(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

const resultsContainer = document.getElementById("searchResults");
const checkboxStates = {};

document.getElementById("searchResults").addEventListener("input", function(event){
  if (event.target.tagName.toLowerCase() === 'input'){
  var input = event.target;
    if(input.checked){
      if(!checkboxStates[input.id] || checkboxStates[input.id]==='unchecked'){
        inventoryItems.push(input.id);
        checkboxStates[input.id] = 'checked';
      }
      
    }

    else{
      if(checkboxStates[input.id]==='checked'){
        inventoryItems = inventoryItems.filter(item => item != input.id);
        checkboxStates[input.id] = 'unchecked';
      }
    }
    console.log("inventory:",inventoryItems);

    let string = JSON.stringify(inventoryItems) 
    localStorage.setItem("inventoryItems", string) 
}
})

function displayResults(data){
  console.log("working");
  console.log(data);
    resultsContainer.innerHTML = ""; // Clear previous results

    if (data.amiibo.length === 0) {
      resultsContainer.textContent = "No results found.";
      return;
    }

    const objectIDs = [];
    for(i=0; i < data.amiibo.length; i ++){
        objectIDs.push(data.amiibo[i].head + data.amiibo[i].tail);
        let name = data.amiibo[i].name;
        let imgURL = data.amiibo[i].image;
        
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `
            <img src="${imgURL}" alt="${name}">
            <br>
            <input type="checkbox" id="${objectIDs[i]}" name="${name}" value="${name}">
            <label for="amiibo${objectIDs[i]}"><strong>${name}</strong></label>
          `;

      resultsContainer.appendChild(resultItem);
    }
  }

    // objectIDs.forEach(objectID => {
    //   const objectURL = 'https://www.amiiboapi.com/api/amiibo/?id='+objectID;
    //     console.log(data.amiibo[i].name);
    //     console.log(data.amiibo[i].image);
    //     let name = data.amiibo[i].name;
    //     let imgURL = data.amiibo[i].image;
        
    //     const resultItem = document.createElement("div");
    //     resultItem.innerHTML = `
    //         <img src="${imgURL}" alt="${name}">
    //         <p><strong>${name}</strong></p>
    //       `;

    //   resultsContainer.appendChild(resultItem);


    // for(i=0; i < (objectIDs.length - 1); i++){
    //   const objectURL = 'https://www.amiiboapi.com/api/amiibo/?id='+objectIDs[i];

    //   // console.log(data.amiibo.length);

    //   fetch(objectURL)
    //     .then(response => response.json())
    //     .then(objectData => {
    //       console.log(data.amiibo[i].name);
    //       console.log(data.amiibo[i].image);
    //       let name = data.amiibo[i].name;
    //       let imgURL = data.amiibo[i].image;
          
    //       const resultItem = document.createElement("div");
    //       resultItem.innerHTML = `
    //           <img src="${imgURL}" alt="${name}">
    //           <p><strong>${name}</strong></p>
    //         `;

    //     resultsContainer.appendChild(resultItem);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching object data:', error);
    //     console.log(i);
    //   });
    // }
//     objectIDs.foreach(objectID => {
//       const objectURL = 'https://www.amiiboapi.com/api/amiibo/?id='+objectID;

//       fetch(objectURL)
//         .then(response => response.json())
//         .then(objectData => {
//           const name = data.amiibo[index].name;
//           const imgURL = data.amiibo[index].image;

//           const resultItem = document.createElement("div");
//           resultItem.innerHTML = `
//               <img src="${imageUrl}" alt="${name}">
//               <p><strong>${name}</strong></p>
//             `;

//         resultsContainer.appendChild(resultItem);
//       })
//       .catch(error => {
//         console.error('Error fetching object data:', error);
//       });

// });

