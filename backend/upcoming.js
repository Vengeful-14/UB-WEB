
let data = [];
document.addEventListener("DOMContentLoaded", async function() {
    const contact_id = localStorage.getItem('contact_id');

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;

        const response = await axios.get("/api/schedule_accepted/" + contact_id)
        console.log(response.data)
        data = response.data
        console.log()

        const content = document.getElementById('content')

        data.forEach(item =>{
            const notificationItem = document.createElement('div');
            notificationItem.classList.add('notification-item');
    
            let fname = item.fname+" "+item.lname;
            notificationItem.setAttribute('onclick', 
                `showDetails(
                '${fname}',
                '${item.email}',
                '${item.visitor_purpose}',
                '${item.visit_date}',
                '${item.visit_time}',
                )`);


            notificationItem.innerHTML = `
                <div class="details">
                    <div class="details-title">${item.visitor_purpose}</div>
                    <div class="details-email">${item.email}</div>
                </div>
            `;

            const header = document.getElementById('text_header')
            content.insertBefore(notificationItem,header.nextSibling )
  
        })

    }catch(e){
        
    }

})


function showDetails(name, email, purpose, date,time) {
    
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-email').textContent = email;
    document.getElementById('modal-purpose').textContent = purpose;
    document.getElementById('modal-schedule').textContent = date+ " //"+time;
    // document.getElementById('modal-schedule').textContent = schedule;
    // document.getElementById('modal-reason').textContent = reason;
    document.getElementById('details-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

function approveRequest() {
    alert("Request approved!");
    closeModal();
}

function showReasonInput() {
    const input = document.getElementById('reason-input');
    input.style.display = 'block';
    input.focus();
}
