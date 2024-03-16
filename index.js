function Validateform(){
    const mail = document.getElementById("mail");
    const mainWrapper =document.getElementById("mainwrapper");
    const secWrapper = document.getElementById('secwrapper');

    
    const errorMessage = document.getElementById("errormessage");
    const correctemail = document.getElementById("useremail");
    
      const correct = mail.value 


    if (correct === "") {
        errorMessage.style.display = "block";

    } else {
        mainWrapper.style.display = "none";
        secWrapper.style.display = "block";
        userEmail.innerHTML = correct 
    }
}

   function returnButton(){
    const mainWrapper =document.getElementById("mainwrapper");
    const secWrapper = document.getElementById('secwrapper');
    const mail = document.getElementById("mail");

    mainWrapper.style.display = "block";
    secWrapper.style.display = "none";

    mail.value = ""

   }