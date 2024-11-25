// Get the button and surprise element
const surpriseBtn = document.getElementById('surprise-btn');
const surprise = document.getElementById('surprise');

// Add a click event listener to the button
surpriseBtn.addEventListener('click', () => {
  // Show the surprise and hide the button
  surprise.classList.remove('hidden');
  surpriseBtn.style.display = 'none';
});
