const firebaseConfig = {
    apiKey: "AIzaSyBMwlcI8HuQURnCJ6c4_A312QVgiti0P48",
    authDomain: "form-e35a5.firebaseapp.com",
    databaseURL: "https://form-e35a5-default-rtdb.firebaseio.com",
    projectId: "form-e35a5",
    storageBucket: "form-e35a5.appspot.com",
    messagingSenderId: "505159820843",
    appId: "1:505159820843:web:9a7c1e864f7c8522066c6e"
  };


  firebase.initializeApp(firebaseConfig);
 

  var contactFormDB =  firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var passid = getElementVal("pass");
  var firstname = getElementVal("firstname");
  var lastname = getElementVal("lastname");
  var num =getElementVal("num");
  var frequency = getElementVal("frequency");
  var carduid = getElementVal("carduid");
  saveMessages (passid,firstname , lastname, num,frequency,carduid);




 document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form

  document.getElementById("contactForm").reset();
}



/*
const saveMessages = ( passid,firstname,lastname,num,frequency,carduid) => {
  //var newContactForm = set(db, "contactForm/" + firstname, data);
/*
   newContactForm.set(db, "contactForm/" + firstname, data,{
    passid: passid,
   firstname: firstname,
     lastname: lastname,
    num: num,
    frequency: frequency,
  carduid: carduid,
  });
};
*/
/*
const saveMessages = (passid, firstname, lastname,num,frequency,carduid) => {
  var newContactForm = contactFormDB.push();
 function InsetData(){
 // set(ref(db,"guestInfo/"+firstname),{
 //   passid: passid,
  //  firstname: firstname,
    // lastname: lastname,
   // num: num,
    //frequency: frequency,
  //carduid: carduid,
  //})
 //};
  //newContactForm.set({
    //passid: passid,
   //firstname: firstname,
   // lastname: lastname,
   //num: num,
  // frequency: frequency,
   //carduid: carduid,

 // });
//};
  
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  */

  const saveMessages = (passid, firstname, lastname,num,frequency,carduid) => {
    var newContactForm =  contactFormDB;
    
    newContactForm.set({
      passid:passid,
      firstname: firstname,
      lastname: lastname,
      num:num,
      frequency:frequency,
      carduid:carduid,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };