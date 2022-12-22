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
//       }
// }


const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return e.test(String(email).toLowerCase());
}
const validateInputs = () => {
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
        return false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }
   
};
