const h1 = document.querySelector('h1');
// const firstParagraph = document.getElementsByClassName('paragraphClass');
const firstParagraph = document.querySelector('p');
const secondParagraph = document.getElementById('paragraphID');
const input = document.querySelector('input');
const div = document.querySelector('div');

console.log(firstParagraph.textContent);
console.log(secondParagraph.textContent);
console.log(h1.textContent);


// we can write HTML inside an element with innerHTML
h1.innerHTML = 'Changing HTML <br> from JS'

// we can access the attributes values with getAttribute('attribute name')
console.log(h1.getAttribute('attribute'));

// we can set an attribute value with setAttribute('attribute name')
firstParagraph.setAttribute('class','changedAttribute');

// we can access an element's classes with classList
h1.classList.add('red');
firstParagraph.classList.remove('changedAttribute');
console.log('contains:',h1.classList.contains('red'));
console.log('contains:',h1.classList.contains('green'));

// we can access an element's value with value
console.log(input.value)
input.value = 'changed value'
console.log(input.value)

// we can create a new HTML element with document.createElement('h2');
const img = document.createElement('img');
const h2 = document.createElement('h2');
h2.innerHTML = 'This is an h2';
img.setAttribute('src', 'https://www.collinsdictionary.com/images/full/dog_230497594.jpg');
console.log(img);
div.append(img);
div.append(h2);