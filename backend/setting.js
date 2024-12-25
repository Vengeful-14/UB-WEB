
document.addEventListener("DOMContentLoaded", async function() {
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');

    const i_id = document.getElementById('name');
    i_id.value = fname+ " "+lname;
})