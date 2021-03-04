//Data for the albums table
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach((element) => {
      const userId = element.userId;
      const albumId = element.id;
      const albumTitle = element.title;
      const tableBody = document.getElementById("table-body");
      const tableRow = `<tr><th scope="row">${userId}</th><td>${albumId}</td><td>${albumTitle}</td></tr>`;
      tableBody.innerHTML += tableRow;
    });
    loadingOff();
  })
  .catch((err) => {
    console.log(err);
  });

//Getting of the loading animation
function loadingOff() {
  const loadingAnimationHidden = `<div class="spinner-grow" role="status" hidden><span class="visually-hidden">Loading...</span></div>`
  const loadingDiv = document.getElementById("loading-animation");
  loadingDiv.innerHTML = loadingAnimationHidden;
}