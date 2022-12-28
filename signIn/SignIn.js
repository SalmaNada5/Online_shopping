//save references for the form, and the input fields email and password.
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

//helper function to set the error state of the input control.
const setError = (element, message) => {
    //getting the input element in the specific input-control so we get the input element parent div 
    const inputControl = element.parentElement;
    //we here gather the error div and save it in errorDisplay var by quering the input control with the error class.
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
//helper function to set the success state of the input control.
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
//helper function to validate email using the string.test() function to test the string against regex
const isValidEmail = email => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}
//the validator
const validateInputs = () => {
    //getting the value of input fields.
    const validPass = false;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue == '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email address.');
    } else {
        setSuccess(email);
    }

    if(passwordValue == '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
        validPass = true;
    }
    if(isValidEmail && validPass){
        return true;
    }else{
        return false;
    }
};
//To prevent the form for automatically submit we have to attach and event listener to our form's submit event.
form.addEventListener("submit", e => {
    const formValid = validateInputs();
    if(!formValid){
        e.preventDefault();
    }
});

//validation in seperated functions

// function validateEmail()  
// {  
// var x=document.myform.email.value.trim();  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastindexOf(".");  
// if (atposition<3 || dotposition<atposition+2 || dotposition+2>=x.length){
//     alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//     return false;  
//   } 
// } 

// function validatePassword()
// {
// var y=document.myform.password.value.trim();  
// var passlength=y.length;
// if(passlength<8){
//     alert("please enter a password contains more than 8 characters ");
//     return false;
//     }
// }
