

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype


// // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// let val;
// console.log( document.querySelector('#task-title'))

// Change Styling

// document.querySelector('li').style.color = 'red'
// document.querySelector('li:last-child').style.color = 'green'


// const items = document.getElementsByClassName('collection-item')

// console.log(items[3])

// const myLi = document.getElementsByTagName('li')
// console.log(myLi)

// let newLi = Array.from(myLi)
// newLi.reverse()

// newLi.forEach(function(li, index){
//       console.log(li.className);
//       li.textContent = `${index}: Hello`
// })

// console.log(myLi)

// const items = document.querySelectorAll('ul.collection li.collection-item')

// console.log(items)

// Creating New Elements in the DOM
// const li = document.createElement('li');
// li.className = 'collection-item'

// li.id = 'my-l'

// li.appendChild(document.createTextNode('Hello There'))

// // Create New Link
//    const link = document.createElement('a');
// //    Add Classes
//    link.className = 'delete-item secondary-content'
// //    Add icon html
// link.innerHTML = '<i class = "fas = fa-remove"></i>'

// li.appendChild(link)

// // Append li as child to ul

// document.querySelector('ul.collection').appendChild(li);
// console.log(li);

// Removing and replacing Elements
// const  newHeading = document.createElement('h2')
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// // Getting old elements
// const oldHeading =  document.getElementById('task-title');

// // Getting the parent because we will use replace Child 

// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading)

// console.log(newHeading)

// // Remove Element
// const lis = document.querySelectorAll('li')
// const list = document.querySelector('ul')

// lis[0].remove();
// list.removeChild(lis[2])
 
// // Classwes AND Attributes

// const firstLi = document.querySelector('li:first-child')
// const link = firstLi.children[0]

// let val 
// val = link.className;
// val = link.classList;

// console.log(val)

// Event Listeners

// document.querySelector('.clear-tasks').addEventListener('mouseover' , onClick)

// function onClick(e){
//   let val ; 
//  val = e;

//  e.preventDefault();
 
//  // Event target element
// //  val = e.target.classList
// //  e.target.innerText = 'Hello';

// //  val = e.type
// //  console.log(val)


// // Mouse Events

// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card')
// const heading = document.querySelector('h5')

// clearBtn.addEventListener('click', runEvent )
// clearBtn.addEventListener('mouseover', runEvent )
// clearBtn.addEventListener('dblclick', runEvent )
// clearBtn.addEventListener('mousedown', runEvent )
// clearBtn.addEventListener('mouseup', runEvent )
// clearBtn.addEventListener('mouseenter', runEvent )
// clearBtn.addEventListener('mouseleave', runEvent )



// // Event Handler
// function runEvent(e){
//       e.preventDefault()

//       console.log(`Event Type: ${e.type}`)

//       heading.textContent = ` MouseX: ${e.offsetX}  MouseY:  ${e.offsetY}`;     

//       document.body.style.backgroundColor = `rgb(${e.offsetX}  , ${e.offsetY}, 40 )`
// }
// }


// const form = document.querySelector('form') 
// const taskInput = document.getElementById('task');
// taskInput.value = '';

// form.addEventListener('keydown', runEvent);

// function runEvent(e){
//       console.log(`Event Type:  ${e.type}`);

      // console.log(taskInput.value);

      // e.preventDefault()
// }


// LOCAL STORAGE
localStorage.setItem('name', 'Gbenga');
sessionStorage.setItem('CourseMate', 'Dammy');

// remove from Storage 
localStorage.removeItem('name')



