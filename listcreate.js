const container = document.querySelector("div");
const btn = document.querySelector('button');
const text = document.querySelector('input');

const list = document.createElement('ul');
container.appendChild(list);

function addItem() {
    const listItem = document.createElement('li');
    const textfield = document.createElement('span');
    list.appendChild(listItem);
    listItem.appendChild(textfield);
    listItem.style.margin = "5px 0px";
    textfield.textContent = text.value;
    text.value = '';

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "check");
    listItem.appendChild(checkbox);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.style.cssText = "margin-left: 10px;"
    listItem.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    checkbox.addEventListener('click', () => {
        textfield.classList.toggle('change');
    })
}

btn.addEventListener('click', addItem);