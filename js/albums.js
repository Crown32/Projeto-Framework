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
  })
  .catch((err) => {
    console.log(err);
  });
