const userName = document.querySelector('.nameInput');
const gameName = document.querySelector('.gameInput');
const continueBtn = document.querySelector('.continueBtn');
const mara = document.querySelector('.mara');

continueBtn.addEventListener('click', function(){
  const userValue = userName.value.trim();
  const gameValue = gameName.value.trim();
  if(gameValue === '' || userValue === ''){
    alert('Please input necessary information.');
    return;
  }
  mara.style.opacity = 0; // Hide the element with opacity
  setTimeout(() => {
    mara.textContent = `Hey, ${userValue} ! Your favorite game is ${gameValue}. Now do a smart work. Take a white A4 size paper, write "${gameValue}" in the paper. Then roll the paper. And put the rolled paper inside your ass.`;
    mara.style.opacity = 1; // Show the element with opacity
  }, 500); // Delay before updating content
  userName.value = '';
  gameName.value = '';
});
