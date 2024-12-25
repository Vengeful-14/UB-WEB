
let data = []
 async function signup() {

        
        const lname = document.getElementById("lname").value;
        const fname = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const errorMessage = document.getElementById("signup-error-message");

        if (fname === "" || lname ===""|| email === "" || password === "" || confirmPassword === "") {
            errorMessage.textContent = "Please fill out all fields.";
            errorMessage.style.display = "block";
        } else if (!email.includes("@")) {
            errorMessage.textContent = "Please enter a valid email address.";
            errorMessage.style.display = "block";
        } else if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            console.log("else")
            let username=fname+lname;
            data = {
                fname:fname,
                lname:lname,
                email:email,
                username:username,
                password:password
            }

            try{
                axios.defaults.baseURL = "http://127.0.0.1:5501";
                // axios.defaults.baseURL = "http://localhost:5173";
                axios.defaults.withXSRFToken = true;
                axios.defaults.withCredentials = true;
        
                const response = await axios.post("/api/visitor/signup",{
                    fname:fname,
                    lname:lname,
                    email:email,
                    username:username,
                    password:password
                })
                Swal.fire("Sign up is successfull");
                const delay = 3000;
                    setTimeout(function() {
                    window.location.href = "log_in.html";
                    }, delay);
            }catch(e){
                Swal.fire({
                    icon: "error",
                    title: "Failed to sign up...",
                    text: "Please review your credentials or try again.",
               
                  });
                }


  
        }
 

}

async function postData(){

}