document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("envoi du formulaire")

    const nom =document.getElementById("lastname").value
    const prenom =document.getElementById("firstname").value
    const ville =document.getElementById("city").value

    alert( "Bonjour " + nom + " " + prenom + " de " + ville)
})