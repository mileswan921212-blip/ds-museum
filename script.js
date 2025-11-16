// Effects and animations will be added later.
console.log("DS Museum Loaded.");
let linkedList = [];

function addNode() {
    const value = "N" + (linkedList.length + 1);
    linkedList.push(value);
    renderLinkedList();
}

function removeNode() {
    if (linkedList.length > 0) {
        linkedList.pop();
        renderLinkedList();
    }
}

function renderLinkedList() {
    const container = document.getElementById("llContainer");
    container.innerHTML = "";

    linkedList.forEach((value, index) => {
        const node = document.createElement("div");
        node.className = "ll-node";
        node.innerText = value;
        container.appendChild(node);

        if (index < linkedList.length - 1) {
            const arrow = document.createElement("span");
            arrow.className = "ll-arrow";
            arrow.innerHTML = "→";
            container.appendChild(arrow);
        }
    });
}
