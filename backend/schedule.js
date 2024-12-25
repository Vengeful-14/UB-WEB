let data = [];


document.addEventListener("DOMContentLoaded", async function() {
    const visitorID = localStorage.getItem('visitor_id');

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.get("/api/get_schedule/" + visitorID)
        console.log(response.data)
        data = response.data
        console.log()


        data.forEach(item => {
            const scheduleContainer = document.getElementById('schedule-container');
            // scheduleContainer.innerHTML = '';

            const scheduleHeader = document.getElementById('schedule-header');

            const scheduleItem = document.createElement('div');
            scheduleItem.classList.add('schedule-item');

            scheduleItem.setAttribute('onclick', 
                `showScheduleDetails('${item.visitor_purpose}', 
                '${item.email}', '${item.fname} ${item.lname}', 
                '${item.role}', '${item.visit_date}', 
                '${item.visit_time}', '${item.createdAt}', 
                '${item.schedule_status}')`);
           
            // Step 5: Build the inner HTML structure
                scheduleItem.innerHTML = `
                <div class="schedule-details">
                    <div class="schedule-title">${item.visitor_purpose}</div>
                    <div class="schedule-email">${item.email}</div>
                </div>
                <div class="schedule-datetime">
                    <div class="schedule-date">${item.visit_date}</div>
                    <div class="schedule-time">${item.visit_time}</div>
                </div>
                `;
                
                // Step 6: Append the created item to the container
                scheduleContainer.append(scheduleItem);
        })
    }catch(e){
        console.error(e)
    }
},



async function fetchSchedule(){

 

      })


function showScheduleDetails(title, email, name, role, scheduledDate, scheduledTime, submissionDate, status) {
            
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-email').textContent = email;
        document.getElementById('modal-name').textContent = name;
        // document.getElementById('modal-role').textContent = role;
        // document.getElementById('modal-submission-date').textContent = submissionDate;
        document.getElementById('modal-scheduled-date').textContent = scheduledDate;
        document.getElementById('modal-scheduled-time').textContent = scheduledTime;
        document.getElementById('modal-status').textContent = status;

        
        document.getElementById('schedule-modal').style.display = 'flex';
        document.getElementById('backButton').style.display = 'block';
    }

    
    function closeModal() {
        document.getElementById('schedule-modal').style.display = 'none';
    }

    function goBack() {
        window.location.href = 'homepage.html';
    }