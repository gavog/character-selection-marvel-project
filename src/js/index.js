alert('welcome!');

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {
        const selectedId = character.attributes.id.value;

        if(selectedId === 'ultron') return;

        const selectedCharacter = document.querySelector(".selected");
        selectedCharacter.classList.remove("selected");

        character.classList.add("selected");

        const player1Image = document.getElementById('player-1');
        player1Image.src = `./src/images/${selectedId}.png`;

        const player1Name = document.getElementById('player-1-name');
        const selectedName = character.getAttribute('data-name');

        player1Name.innerHTML = selectedName
    });
});