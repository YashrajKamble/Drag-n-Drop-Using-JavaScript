let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        // for left to right drag and drop
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selected);
            selected = null;
        })

        // for right to left drag and drop
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}