let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnCLeanup = $("#btnCleanup");
let ulTasks = $("#ulTasks");
let inpNewTask = $("#inpNewTask");
let btnSort = $("#btnSort");

function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });

  listItem.click(() => {
    // console.log("clicked");
    listItem.toggleClass("done");
  });

  ulTasks.append(listItem);
  // console.log(inpNewTask.val());
  inpNewTask.val("");
}

function clearDone() {
  $("#ulTasks .done").remove();
}

function sortTasks() {
  $("#ulTasks .done").appendTo(ulTasks);
}

inpNewTask.keypress((e) => {
  if (e.which == 13) {
    addItem();
  }
});

btnCLeanup.click(clearDone);

btnAdd.click(addItem);

btnReset.click(() => inpNewTask.val(""));

btnSort.click(sortTasks);
