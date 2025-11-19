const list = document.querySelector("ol");


    const newItem = document.createElement("li");
    newItem.textContent = "Pineapple";


    list.insertBefore(newItem, list.children[2]);

const button = document.getElementById("btn");
    const listItems = document.querySelectorAll("ol");

    button.addEventListener("click", function () {
        listItems.forEach(li => {
            li.style.color = "red";     // Change color here
        });
    });