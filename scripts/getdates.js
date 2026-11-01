const yearContainer = document.getElementById('currentyear');
document.getElementById('lastModified').textContent = `Last Modified: ${ document.lastModified }`

const today = new Date();
let year = today.getFullYear();
yearContainer.innerText = `\u00A9 ${year}`;