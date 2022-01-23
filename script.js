  //decalring all the elements by DOM selector
  const generatePassword = document.getElementById("passbtn");
  const lengthOfThePassword = document.getElementById("rangelength");
  const upperCase = document.getElementById("switch");
  const lowerCase = document.getElementById("switch2");
  const number  =document.getElementById("switch3");
  const symbol = document.getElementById("switch4");
  const generatePassBtn = document.getElementById("passbtn");
  const rangeLength= document.getElementById("rangelength");
  const currentLength = document.getElementById("currentLength");
// function for generating uppercase charecters
  function makeidUpperCase(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
  }
 // function for generating lowerCase
  function makeidLowerCase(length) {
      var result           = '';
      var characters       = 'abcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    
    return result;
    
  }
  // function for generating Numbers 
  function makeidNumber(length) {
      var result           = '';
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    
    return result;
  }
  //function for generating symbols
  function makeidSymbol(length) {
      var result           = '';
      var characters       = '@#$&~';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    
    return result;
  }

//Event click function for generating final password.
  function generateFinalPassword(){
    let len= parseInt(lengthOfThePassword.value);
    let currentLen = document.getElementById("currentLength");
    if(upperCase.checked==false && lowerCase.checked==false && number.checked==false && symbol.checked==false){
      generatePassword.textContent="select your password choices!!"
      currentLen.textContent = "Current-length-withoutchoices -"+len;
      console.log( currentLen.textContent);
      return;
    }
 
   
       
       currentLen.textContent = "Current-length -"+len;
    let totalChoices = upperCase.checked+lowerCase.checked+number.checked+symbol.checked;
    if(len<1 ){
      return;
    }
    if(totalChoices>len){
      generatePassword.textContent="oops! max choices selected! ";
      return;
    }
    let password = "";
    // ierating till the length selected by user.
  while(len>0){
    // checking the condition of the user  setting by true or false.
   if(upperCase.checked===true){
    password+= makeidUpperCase(1);
    len--;
    if(len==0){
      break;
    }
   }
   if(lowerCase.checked===true){
    password+= makeidLowerCase(1);
    len--;
    if(len==0){
      break;
    }
   }
   if(number.checked===true){
     password+= makeidNumber(1);
     len--;
     if(len==0){
      break;
    }
   }
   if(symbol.checked===true){
     password += makeidSymbol(1);
     len--;
     if(len==0){
      break;
    }
     
   }
  
    
  }
// replacing DOM text With  new Password
  generatePassword.textContent=password;
}

