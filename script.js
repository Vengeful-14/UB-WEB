
    const form = document.getElementById("visitorForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", (e) => {
        if (!validateEmail(emailInput.value)) {
            e.preventDefault();
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    

   

