
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === "") {
      
        return alert(`Please fill out all the fields`);
        // return;
    }
           const loginObj = {
        email: email.value,
        password: password.value,
    }
    console.log(loginObj);
    event.currentTarget.reset();
};