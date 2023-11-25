const container = document.querySelector('#container');

const content = document.createElement('div');
const paragraph = document.createElement('p');
const p2 = document.createElement('p');
const h3 = document.createElement('h3');
const subcontent = document.createElement('div');
const h1 = document.createElement('h1');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
paragraph.textContent = 'this is a test';
h3.textContent = 'I\'m a blue h3!';
paragraph.style.color = 'red';
h3.style.color = 'blue'
subcontent.style.backgroundColor = 'pink';
subcontent.style.border = 'black';
h1.textContent = 'I\'m in a div';
p2.textContent = 'me too!';
subcontent.appendChild(h1)
subcontent.appendChild(p2)
container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3)
container.appendChild(subcontent)