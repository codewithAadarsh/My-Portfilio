function startNumberChange(currentNumber, maxNumber, elementId) {
    let intervalId;

    function changeNumber() {
      const numberElement = document.getElementById(elementId);
      numberElement.innerHTML = currentNumber;
      currentNumber++;

      if (currentNumber > maxNumber) {
        clearInterval(intervalId);
      }
    }

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        intervalId = setInterval(changeNumber, 20); // Adjust the interval for a smoother transition
        observer.disconnect();
      }
    });

    observer.observe(document.getElementById(elementId));
  }

  // Start number change for each container
  startNumberChange(0, 2, 'changingNumber1');
  startNumberChange(0, 68, 'changingNumber2');
  startNumberChange(0, 85, 'changingNumber3');
  startNumberChange(0, 75, 'changingNumber4');


  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('header nav ul');

    hamburgerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
