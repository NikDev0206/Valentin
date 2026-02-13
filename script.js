// 1. On garde la fonction de mouvement
const moveButton = (e) => {
    e.preventDefault(); // Bloque le clic fantôme
    e.stopPropagation(); // Empêche l'événement de se propager
    
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// 2. ÉCOUTEURS POUR LE BOUTON NON
// On utilise 'touchstart' pour mobile et 'mouseover' pour PC
noBtn.addEventListener('touchstart', moveButton, {passive: false});
noBtn.addEventListener('mouseover', moveButton);

// TRÈS IMPORTANT : On bloque explicitement le clic sur le bouton "Non"
// pour éviter qu'il ne déclenche le succès par erreur
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

// 3. ÉCOUTEUR POUR LE BOUTON OUI
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Génial ! Je t'aime ! 😘";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.5)';
    createHearts();
});
