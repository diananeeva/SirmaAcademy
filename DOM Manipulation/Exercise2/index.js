function getFormvalue(event){
event.preventDefault();
const firstElement = document.querySelector('input[name=fname]');
const secondElement = document.querySelector('input[name=lname');

console.log(firstElement.value);
console.log(secondElement.value);
}