const contactForm = document.getElementById("contact-form");


if (contactForm){
    contactForm.addEventListener("submit", validateContactForm);
}

function validateContactForm(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("contact-success").textContent = "";

    if (name.length < 2){
        document.getElementById("name-error").textContent = "Ingresa un nombre válido.";
        valid = false;
    }
    // validar nombre hasta 100 caracteres
    if (name.length > 100){
        document.getElementById("name-error").textContent = "El nombre debe tener menos de 100 caracteres.";
        valid = false;
    }

    if (!emailPattern.test(email)){
        document.getElementById("email-error").textContent = "Ingresa un correo electrónico válido.";
        valid = false;
    }

    if (message.length < 10){
        document.getElementById("message-error").textContent = "El mensaje debe tener al menos 10 caracteres.";
        valid = false;
    }
    // validar mensaje hasta 500 caracteres
    if (message.length > 500){
        document.getElementById("message-error").textContent = "El mensaje debe tener menos de 500 caracteres.";
        valid = false;
    }

    if (!valid){
        return;
    }

    document.getElementById("contact-success").textContent = "Nos pondremos brevemente en contacto contigo.";
    contactForm.reset();
}
