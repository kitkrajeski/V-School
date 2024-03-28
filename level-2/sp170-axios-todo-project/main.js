const form = document.form;
function getData() {
    axios
        .get("https://api.vschool.io/kitkrajeski/todo")
        .then((response) => listData(response.data))
        .catch((err) => console.log(err))
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
    }

    axios
        .post("https://api.vschool.io/kitkrajeski/todo", newToDo)
        .then((response) => getData())
    form.title.value = ''
    form.description.value = ''
    form.price.value = ''
    form.imgUrl.value = ''
        .catch((err) => console.log(err));
})



function listData(data) {

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((toDo) => {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'todo-item';

        const title = document.createElement("h2");
        title.textContent = toDo.title;
        title.className = 'todo-item-title';
        itemContainer.appendChild(title);
        const desc = document.createElement("p");
        desc.textContent = toDo.description;
        desc.className = "todo-item-details";
        itemContainer.appendChild(desc);
        const price = document.createElement("p");
        price.textContent = toDo.price;
        price.className = "todo-item-details"
        itemContainer.appendChild(price);
        const img = document.createElement("img");
        img.src = toDo.imgUrl;
        img.className = "todo-item-img";
        itemContainer.appendChild(img);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-div";
        itemContainer.appendChild(buttonContainer);
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "todo-item-buttons";
        buttonContainer.appendChild(button);

        button.addEventListener("click", (e) => {
            axios
                .delete(`https://api.vschool.io/kitkrajeski/todo/${toDo._id}`)
                .then((response) => itemContainer.remove())
                .catch((err) => console.log(err));
        })

        const button2 = document.createElement("button");
        button2.textContent = "Edit";
        button2.className = "todo-item-buttons";
        buttonContainer.appendChild(button2);

        button2.addEventListener("click", (e) => {
            title.remove();
            desc.remove();
            price.remove()
            img.remove();
            buttonContainer.remove();
            label.remove();
            checkbox.remove();


            const createEditField = (value, placeholder, type, parent) => {
                const input = document.createElement("input");
                input.value = value;
                input.setAttribute("placeholder", placeholder);
                input.setAttribute("type", type)
                parent.appendChild(input);
                return input
            }

            const titleEdit = createEditField(toDo.title, 'Title', 'text', itemContainer);
            const descEdit = createEditField(toDo.description, 'Description', 'text', itemContainer);
            const priceEdit = createEditField(toDo.price, 'Price', 'number', itemContainer);
            const editImgUrl = createEditField(toDo.imgUrl, 'Image Url', 'url', itemContainer);

            // const titleEdit = document.createElement("input");
            // titleEdit.value = title.textContent;
            // titleEdit.setAttribute("placeholder", title.textContent);
            // titleEdit.setAttribute("type", "text")
            // itemContainer.appendChild(titleEdit);

            // const descEdit = document.createElement("input");
            // descEdit.value = desc.textContent;
            // descEdit.setAttribute("placeholder", desc.textContent);
            // descEdit.setAttribute("type", "text");
            // itemContainer.appendChild(descEdit);

            // const priceEdit = document.createElement("input");
            // priceEdit.value = price.textContent
            // priceEdit.setAttribute("placeholder", price.textContent);
            // priceEdit.setAttribute("type", "number");
            // itemContainer.appendChild(priceEdit);

            // const editImgUrl = document.createElement("input");
            // editImgUrl.value = toDo.imgUrl;
            // editImgUrl.setAttribute("placeholder", "This is a placeholder");
            // editImgUrl.setAttribute("type", "url");
            // itemContainer.appendChild(editImgUrl);

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            itemContainer.appendChild(saveButton);

            saveButton.addEventListener("click", (e) => {
                const updatedInfo = {
                    title: titleEdit.value,
                    description: descEdit.value,
                    price: priceEdit.value,
                    imgUrl: editImgUrl.value,
                }
                axios
                    .put(`https://api.vschool.io/kitkrajeski/todo/${toDo._id}`, updatedInfo)
                    .then((response) => getData())
                    .catch((err) => console.log(err));
            })
        })

        const label = document.createElement("label");
        label.textContent = "Completed";
        itemContainer.appendChild(label);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.checked = toDo.completed;
        itemContainer.appendChild(checkbox);

        const updateStyles = (completed, elements) => {
            elements.forEach(el => {
                if (completed) {
                    el.style.textDecoration = "line-through";
                    el.style.textDecorationColor = "black";
                } else {
                    el.style.textDecoration = "none";
                }
            })
        }

        updateStyles(toDo.completed, [title, desc, price]);

        checkbox.addEventListener("change", (e) => {
            axios
                .put(`https://api.vschool.io/kitkrajeski/todo/${toDo._id}`, { completed: checkbox.checked })
                .then((res) => updateStyles(checkbox.checked, [title, desc, price]))
                .catch((err) => console.log(err))
        })

        list.appendChild(itemContainer);

    });
}

getData();
