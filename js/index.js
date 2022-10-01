
    


  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  const userpass= document.getElementById("userpass");
  const firstname= document.getElementById("firstname");
  const secondname= document.getElementById("secondname");
  const allowance=document.getElementById("num");
  const carduid=document.getElementById("carduid");
  const frequency=document.getElementById("frequency");
  const addbtn=document.getElementById("addbtn");
  
  

  const database = firebase.database();

  addbtn.addEventListener('click', (e) =>{
     e.preventdefault();
     database.ref('/Users/'+userpass.value).set({
      first_name: firstname.value,
      second_name: secondname.value,
      allowance: allowance.value,
      carduid: carduid.value,
      frequency: frequency.value,

     })
  })