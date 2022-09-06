const h1 = document.querySelector('h1');
const firstParagraph = document.getElementsByClassName('paragraphClass');
const secondParagraph = document.getElementById('paragraphID');

console.log(firstParagraph[0].textContent);
console.log(secondParagraph.textContent);
console.log(h1.textContent);