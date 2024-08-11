const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    buttons.forEach(function (button) {
      console.log(button);
      button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
          body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
          body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
          body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
          body.style.backgroundColor = e.target.id;
        }
    
    
      });
    });



//     const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// const colors = {
//   grey: 'grey',
//   white: 'white',
//   blue: 'blue',
//   yellow: 'yellow'
// };

// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     body.style.backgroundColor = colors[button.id];
//   });
// });

    