/* Title Banner Hover */
anime({ 
  targets: '#title',
});

var titleHover = document.querySelector('#title');

function animateButton(scale, duration, elasticity) { 
  anime.remove(titleHover);
  anime({ 
    targets: titleHover,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  }); 
}; 

function enterButton() { 
  animateButton(1.05, 800, 400) 
};
function leaveButton() { 
  animateButton(1.0, 600, 300) 
};

titleHover.addEventListener('mouseenter', enterButton, false);
titleHover.addEventListener('mouseleave', leaveButton, false);