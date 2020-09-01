var ul = document.getElementById("myList");
var li;
var itemId;
var item;
add_item = function () {

    if (document.getElementById("item").value != "") {

        item = document.getElementById("item");

        itemId = ul.childElementCount;

        li = criaItem(item.value, itemId);
        li.appendChild(removeItemCriado(itemId));
        ul.appendChild(li);
        item.value = "";
    }

}

removeItem = function (itemId) {

    for (i = 0; i < ul.children.length; i++) {

        if (ul.children[i].getAttribute("index") == itemId) {

            ul.children[i].remove();

        }
    }
}

criaItem = function (itemValue, itemId) {

    let li = document.createElement("li");

    li.setAttribute("index", itemId);

    li.appendChild(document.createTextNode(itemValue));

    return li;
}

removeItemCriado = function (itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeItem(" + itemId + ")");
    btn.innerHTML = "X";
    return btn;
}