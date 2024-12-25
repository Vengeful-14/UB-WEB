
let data = [];
document.addEventListener("DOMContentLoaded", async function() {
    const contact_id = localStorage.getItem('contact_id');

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;

        const response = await axios.get("/api/get_all_schedule_contact/" + contact_id)
        console.log(response.data)
        data = response.data
        console.log()

       
        const tableBody = document.querySelector('#visitRequestTable tbody');

        data.forEach(item =>{
            
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.fname+" "+item.lname
            row.appendChild(nameCell)

            const emailCell = document.createElement('td');
            emailCell.textContent = item.email
            row.appendChild(emailCell)

            const visitorPurposeCell = document.createElement('td');
            visitorPurposeCell.textContent = item.visitor_purpose
            row.appendChild(visitorPurposeCell)

            const visitDateCell = document.createElement('td');
            visitDateCell.textContent = item.visit_date+" // "+item.visit_time
            row.appendChild(visitDateCell)

            const scheduleStatusCell = document.createElement('td');
            scheduleStatusCell.textContent = item.schedule_status
            row.appendChild(scheduleStatusCell)

            tableBody.appendChild(row)

  
        })

    }catch(e){
        
    }

})