document.addEventListener('DOMContentLoaded', function(){
    inventoryItems.forEach(inventoryItem => {
        fetch("https://www.amiiboapi.com/api/amiibo/?id="+inventoryItem)
        .then(response => {
         console.log("Response status:", response.status); // Log the response status
         return response.json();
       })
       .then(data =>{
         displayShelfItem(data);
       })
       .catch(error => {
         console.error('Error:', error);
       });
    })
    console.log("working");
})

const shelfDisplay = document.getElementById("shelfItems");
function displayShelfItem(data){
    const shelfAmiibo = document.createElement("div");
    let amiiboURL = data.amiibo[0].image;

    shelfAmiibo.innerHTML = `<img src="${amiiboURL}"></img>`;
    shelfDisplay.appendChild(shelfAmiibo);
    console.log(amiiboURL);
}