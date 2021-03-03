//Data for the posts table
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      const userId = element.userId;
      const postId = element.id;
      const postTitle = element.title;
      const postText = element.body;

      const tableBody = document.getElementById("table-body");
      const tableRow = `<tr><th scope="row">${userId}</th><td>${postId}</td><td>${postTitle}</td><td>${postText}</td></tr>`;
      tableBody.innerHTML += tableRow;
    });
  })
  .catch((err) => {
    alert(err);
  });

//Fazer as outras páginas com as tabelas e dar uma embelezada na parada, só isso mermo

