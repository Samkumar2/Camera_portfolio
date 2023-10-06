function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("mail").value,
      message: document.getElementById("message").value,
      contact: document.getElementById("contact").value,

      
    };
  
    const serviceID = "service_9se84tm";
    const templateID = "template_e7l3hv5D";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("message").value = "";
          document.getElementById("contact").value = "";

          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }