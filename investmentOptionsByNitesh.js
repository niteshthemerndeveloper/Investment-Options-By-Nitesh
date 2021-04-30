const panels = document.querySelectorAll('.panel');

panels.forEach((panel) =>{
  panel.addEventListener('click', () =>{
    removeActiveClasses();
    panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
      panel.classList.remove('active');
  })
}

const nextButton = document.querySelector('button');

nextButton.addEventListener('click', () =>{
  console.log('Hi');
})



// Array Properties and Methods Revise:
