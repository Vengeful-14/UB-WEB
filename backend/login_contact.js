
async function login_contact(){
    console.log("hello")
    // Axios


    // Get email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    // Check if email contains "@" and if both fields are filled out
    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.style.display = "block";
    } else if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
    } else {
        
        errorMessage.style.display = "none";
        // window.location.href = "homepage.html"; // Redirect to home page after successful login
    }


    const data = {
        email: email,
        password: password,
    };

    try {
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.get("/sanctum/csrf-cookie", {
          withCredentials: true,
        });
  
        console.log(response);
        console.log(response.data); // or handle the response data
      } catch (error) {
        console.error("Error fetching CSRF cookie:", error);
      }

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.post("/api/contact_login", data);
        if (response.status == 200) {
            
            console.log("Login")
   
            console.log(response.data)

            // localStorage.setItem('data', JSON.stringify(response.data.data));
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('fname', response.data.data.fname);
            localStorage.setItem('lname', response.data.data.lname);
            localStorage.setItem('contact_id', response.data.data.contact_id);
            localStorage.setItem('position_id', response.data.data.position_id);
            window.location.href = "homepage.html";

        }else{
            errorMessage.textContent = "Invalid email or password.";
            errorMessage.style.display = "block";
        }

    }catch(e){
        errorMessage.textContent = "Invalid email or password.";
        errorMessage.style.display = "block";
        console.log("error")
    }

}