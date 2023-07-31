let btnAdd = $("#btnAdd");
let btnClear = $("#btnClear");
let ulTasks = $("#ulTasks");
let inpNewTask = $("#inpNewTask");

btnAdd.click(() => {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });

  ulTasks.append(listItem);
  console.log(inpNewTask.val());
  inpNewTask.val("");
});
