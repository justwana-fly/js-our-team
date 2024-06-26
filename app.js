// DATI PER ESERCIZIO
// 1 Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// 2 Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
// 3 Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// 4 Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
// 5 Scott Estrada	        Developer	                 scott-estrada-developer.jpg
// 6 Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const membri = [
    {name: `Wayne Barnett`, ruolo: `Founder & CEO`, foto: `wayne-barnett-founder-ceo.jpg`},
    {name: `Angela Caroll`, ruolo: `Chief Editor`, foto: `angela-caroll-chief-editor.jpg`},
    {name: `Walter Gordon`, ruolo: `Office Manager`, foto: `walter-gordon-office-manager.jpg`},
    {name: `Angela Lopez`, ruolo: `Social Media Manager`, foto: `angela-lopez-social-media-manager.jpg`},
    {name: `Scott Estrada`, ruolo: `Developer`, foto: `scott-estrada-developer.jpg`},
    {name: `Barbara Ramos`, ruolo: `Graphic Designer`, foto: `barbara-ramos-graphic-designer.jpg`},
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const container = document.getElementById("container");

membri.forEach(membro => {
    // Genera una stringa HTML per ogni card
    const cardHTML = `
        <div class="card">
            <img src="img/${membro.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text text-center gray fw-bold m-0">${membro.name}</p>
                <p class="text-center gray m-0">${membro.ruolo}</p>
            </div>
        </div>
    `;
    // Aggiungi la stringa HTML generata al contenitore DOM
    container.innerHTML += cardHTML;
});


membri.forEach(membro => {
    console.log(`${membro.name}, ${membro.ruolo}, ${membro.foto}`);
    
    const container = document.getElementById("container");});


