//Data for the todos table
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach((element) => {
      const userId = element.userId;
      const taskId = element.id;
      const taskTitle = element.title;
      const taskStatus = element.completed;
      var taskCompleted;
      if (taskStatus) {
          taskCompleted = `<i class="fas fa-check"></i>`
      } else {
          taskCompleted = `<i class="fas fa-times"></i>`
      }

      const tableBody = document.getElementById("table-body");
      const tableRow = `<tr><th scope="row">${userId}</th><td>${taskId}</td><td>${taskTitle}</td><td>${taskCompleted}</td></tr>`;
      tableBody.innerHTML += tableRow;
    });
  })
  .catch((err) => {
    console.log(err);
  });
