let i_fname = document.getElementById('firstName');
let i_lname = document.getElementById('lastName');
let email  = document.getElementById('email')
let hostStatus = document.getElementById('hostStatus')
let purposeOfVisit = document.getElementById('purposeOfVisit')
let visitDate = document.getElementById('visitDate')
let visitTime= document.getElementById('visitTime')
let data= 0;
let visitor_id = localStorage.getItem('visitor_id')
  document.addEventListener("DOMContentLoaded", function() {

    const fname =localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')



    i_fname.value = fname;
    i_lname.value =lname;
    
  })

  async function submit_data(){
    if(
        email.value.trim() =="" ||
        hostStatus.value.trim() =="" ||
        purposeOfVisit.value.trim() =="" ||
        visitDate.value.trim() =="" ||
        visitTime.value.trim() =="" 
    ){

    }

    const data = {
        fname:i_fname.value,
        lname:i_lname.value,
        email:email.value,
        position_id:hostStatus.value,
        schedule_status_id:1,
        visitor_purpose:purposeOfVisit.value,
        visitor_id: visitor_id,
        visit_date: visitDate.value,
        visit_time :visitTime.value,
    }

    try{
        axios.defaults.baseURL = "http://127.0.0.1:5501";
        // axios.defaults.baseURL = "http://localhost:5173";
        axios.defaults.withXSRFToken = true;
        axios.defaults.withCredentials = true;

        await axios.post("/api/schedule", data)
            .then(response =>{

                if(response.status == 200){
                    console.log(response.data)
                }else if(response.status == 401){
         
                }

                window.location.href = "approval.html";
            })

            .catch(error =>{
                if (error.response.status == 401){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email does not exits",
                        // footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })
        // const response = await axios.post("/api/schedule", data);

        // console.log("status",response.status)
        // if (response.data.status == 200) {
        //     console.log(response.data)
        // }
        // else if( response.data.status == 401){
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Email does not exits",
        //         // footer: '<a href="#">Why do I have this issue?</a>'
        //       });
        // }

    }catch(e){
        console.log(e)
 
    }

    

    console.log(data)
  }