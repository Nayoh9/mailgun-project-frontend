document.addEventListener('DOMContentLoaded', () => {  // Chargement du dom 
    console.log('Document Loaded');

    document.querySelector('#contactForm')
        .addEventListener("submit", async (e) => {
            e.preventDefault() // suppression du comportement par defaut de l'evenement submit
            console.log('clicks')
            const data = {
                firstname: document.querySelector("#firstname").value,
                lastname: document.querySelector("#lastname").value,
                email: document.querySelector("#email").value,
                subject: document.querySelector("#subject").value,
                message: document.querySelector("#message").value,
            };

            // console.log(data)

            const response = await axios.post('http://localhost:3000/form', data) // ici je définis la route sur laquelle je veux envoyer mon formulaire et en deuxième argument je dis ce que je veux envoyer
            console.log(response)
        })
})