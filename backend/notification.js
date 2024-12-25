let data = [];

document.addEventListener("DOMContentLoaded", async function() {
    const visitorID = localStorage.getItem('visitor_id');

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;
        const response = await axios.get("/api/get_schedule/" + visitorID)
        console.table(response.data)
        data = response.data
        let notificationContainer = document.getElementById('notification-container');

        data.forEach(item => {

            const notificationItem = document.createElement('div');
            notificationItem.classList.add('notification-item');
            // notificationItem.id = `notification-${item.id}`;

            // Build the inner HTML
            let statusClass = '';
            if (item.schedule_status === 'Accepted') {
                statusClass = 'approved';
            } else if (item.schedule_status === 'Pending') {
                statusClass = 'pending';
            } else if (item.schedule_status === 'Rejected') {
                statusClass = 'rejected';
            }

            notificationItem.innerHTML = `
                <div class="notification-details">
                    <div class="notification-email">${item.email}</div>
                    <div class="notification-info">${item.visitor_purpose}<br>${item.visit_date} // ${item.visit_time}</div>
                </div>
                <div class="button-container">
                 <button id="approve-${item.id}" class="button ${statusClass}" 
                            onclick="approveSchedule('${item.id}', 'Approved: ${item.info} on ${item.date} ${item.time}')">
                        ${item.schedule_status}
                    </button>
                </div>
                <div id="qr-code-${item.id}" class="qr-code-container">
                    <canvas id="qr-${item.id}" class="qr-code"></canvas>
                </div>
            `;

            // Append the notification item to the container
            notificationContainer.appendChild(notificationItem);
        })

    }catch(e){
        console.error(e)
    }

})