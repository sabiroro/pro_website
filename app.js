let dash = document.getElementById("dash");
console.log(dash);
console.log("oui");
let links = document.getElementById("choices");

// Ajoute un événement de clic sur le menu burger
dash.addEventListener("click", () => {
    if (links) {
        // Bascule entre afficher/cacher le menu des liens
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
        console.log("click");
    }
});
