// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const list = document.querySelector('.links');
const toggleListBtn = document.querySelector('.nav-toggle');

// let isListToggled = false;
// toggleListBtn.addEventListener('click', () => {
//   if (!isListToggled) {
//     list.className += ' show-links';
//     isListToggled = true;
//   } else {
//     list.className = 'links';
//     isListToggled = false;
//   }
// });

toggleListBtn.addEventListener('click', () => {
  // console.log(list.classList);
  // console.log(list.classList.contains('random'));
  // console.log(list.classList.contains('links'));

  // if(list.classList.contains('show-links')) {
  //   list.classList.remove('show-links')
  // } else {
  //   list.classList.add('show-links');
  // }

  list.classList.toggle('show-links');
});
