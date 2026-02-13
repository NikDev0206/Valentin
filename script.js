const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const heartContainer = document.getElementById('heart-container');

// 1. Faire fuir le bouton "Non" (marche aussi au toucher sur iPhone)
const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // Pour mobile

// 2. Action quand elle clique sur "Oui"
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Je savais que tu allais dire, ouiiii ! Je t'aime mi toala ! 🐨🤩";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.5)';
    createHearts(); // Lance la pluie de cœurs
});

// 3. Création de la pluie de cœurs
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartContainer.appendChild(heart);
        
        // Supprimer le cœur après l'animation pour ne pas ralentir le téléphone
        setTimeout(() => { heart.remove(); }, 5000);
    }, 300);
}