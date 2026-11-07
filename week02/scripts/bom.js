// const button = document.querySelector('button');
// const userInput = document.querySelector('#favchap');
// const list = document.querySelector('#list');
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// li.textContent = input.value;
// deleteButton.textContent = "❌";
// deleteButton.setAttribute("arial-label", "close");
// li.append(deleteButton);
const button = document.querySelector('button');
const userInput = document.querySelector('#favchap');
const list = document.querySelector('#list');
button.setAttribute("arial-label", "Submit choice to list.");


button.addEventListener('click', function () {
    if (userInput.value.trim() !== '') {
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = userInput.value;
        list.append(li);
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("arial-label", "close");
        deleteButton.addEventListener('click', function () {
            list.removeChild(li)
            userInput.focus();
        });
        li.appendChild(deleteButton);
        userInput.value = '';
        userInput.focus();
    }
    
});
