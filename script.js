const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const messageOverlay = document.getElementById('message');


function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    
    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

noButton.addEventListener('click', moveNoButton);

noButton.addEventListener('mouseover', moveNoButton);

yesButton.addEventListener('click', () => {
    messageOverlay.classList.add('show');
    setTimeout(() => {
        messageOverlay.classList.remove('show');
    }, 3000);
});

yesButton.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.classList.add('heart-burst');
    
    
    setTimeout(() => {
        container.classList.remove('heart-burst');
    }, 2000);
    
    setTimeout(() => {
        messageOverlay.classList.add('show');
        setTimeout(() => {
            messageOverlay.classList.remove('show');
        }, 3000);
    }, 500); 
});
