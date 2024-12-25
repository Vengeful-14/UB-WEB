
let data = [];
const contact_id = localStorage.getItem('contact_id');
document.addEventListener("DOMContentLoaded", async function() {


    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;

        const response = await axios.get("/api/get_schedule_contact/" + contact_id)
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


            const modal = document.getElementById('details-modal');
            modal.innerHTML =
                `
                    <div class="modal-content">
                            <div class="modal-header" id="modal-title"></div>
                            <div class="modal-body">
                                <p><strong>Name:</strong> <span id="modal-name"></span></p>
                                <p><strong>Email:</strong> <span id="modal-email"></span></p>
                                <p><strong>Visit Purpose:</strong> <span id="modal-purpose"></span></p>
                                <p><strong>Schedule Date:</strong> <span id="modal-date"></span></p>
                                <!-- <p><strong>Schedule:</strong> <span id="modal-schedule"></span></p> -->
                                <!-- <p><strong>Purpose:</strong> <span id="modal-reason"></span></p> -->
                                <textarea id="reason-input" class="reason-input" placeholder="Reason for denial (required if denying)..."></textarea>
                            </div>
                            <div class="modal-footer">
                                <button class="approve-btn" onclick="approveRequest(${item.schedule_id})">Approve</button>
                                <button class="deny-btn" onclick="rejectRequest(${item.schedule_id})">Deny</button>
                                <button class="close-modal-btn" onclick="closeModal()">Close</button>
                            </div>
                    </div>
                `
            const header = document.getElementById('text_header')
            content.insertBefore(notificationItem,header.nextSibling )
            content.appendChild(content)
  
        })

    }catch(e){
        
    }

})


function showDetails(name, email, purpose, date,time, reason) {
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-email').textContent = email;
    document.getElementById('modal-purpose').textContent = purpose;
    document.getElementById('modal-date').textContent = date+ " //"+time;
    // document.getElementById('modal-schedule').textContent = schedule;
    // document.getElementById('modal-reason').textContent = reason;
    document.getElementById('details-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

async function approveRequest(id) {
  
    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.post("/api/accept_schedule",{
            schedule_id:id
        } )
        Swal.fire("Updated Successfully. Please Reload the page");
        
    }catch(e){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        
          });
    }
 
    closeModal();
}

async function rejectRequest(id) {
  
    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.post("/api/deny_schedule",{
            schedule_id:id
        } )
        Swal.fire("Updated Successfully. Please Reload the page");
        
    }catch(e){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        
          });
    }
 
    closeModal();
}


function showReasonInput() {
    const input = document.getElementById('reason-input');
    input.style.display = 'block';
    input.focus();
}
