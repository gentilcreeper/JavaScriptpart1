function calcul(event) {
    event.preventDefault()

    let shoes = document.getElementById("shoeSize").value.replace(",", ".")
    let year = document.getElementById("yearOfBirth").value.replace(",", ".")
    multiplication = shoes *= 2;
    addition = multiplication + 5;
    multiplication2 = addition *= 50;
    soustraction = multiplication2 - year;
    adition2 = soustraction + 1766;

    let resultat = adition2

    alert(resultat)
}

document.querySelector("form").addEventListener("submit", calcul)