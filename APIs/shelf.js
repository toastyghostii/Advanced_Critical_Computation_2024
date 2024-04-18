document.addEventListener('DOMContentLoaded', function(){
  let retString = localStorage.getItem("inventoryItems") 
  let inventoryItems = JSON.parse(retString) 
  console.log(inventoryItems);   

  if (inventoryItems && inventoryItems.length > 0){
    let itemCount=0;
  inventoryItems.forEach(function(inventoryItem,index){
        fetch("https://www.amiiboapi.com/api/amiibo/?id="+inventoryItem)
        .then(response => {
         console.log("Response status:", response.status); // Log the response status
         return response.json();
       })
       .then(data =>{
         displayShelfItem(data,itemCount,inventoryItems.length);
         itemCount++;
       })
       .catch(error => {
         console.error('Error:', error);
       });
    })
  }
    console.log("working");
})

const shelfDisplay = document.getElementById("shelfItems");
function displayShelfItem(data,itemCount,totalItems){
    const shelfAmiibo = document.createElement("div");
    let amiiboURL = data.amiibo.image;

    shelfAmiibo.innerHTML = `<img src="${amiiboURL}"></img>`;
    shelfDisplay.appendChild(shelfAmiibo);
    console.log(amiiboURL);
    if((itemCount + 1) % 4 === 0||itemCount === totalItems - 1){
      var singleShelf = document.createElement("img");
      singleShelf.src="assets/single-shelf.png";
      singleShelf.id="shelfImg";
      shelfDisplay.insertBefore(singleShelf,shelfAmiibo.nextSibling);
    }
}