
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);



function handleSubmit(event) {
    event.preventDefault();

    // let login = {
    //     email: email.value,
    //     password: password.value,
    // }

    const {elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert(`Please fill out all the required fields`);
    }
    // console.log(login);
    event.currentTarget.reset();
};


// const form = document.querySelector(".form");
// form.addEventListener("submit", handleSubmit);


// function handleSubmit(event) {
//     event.preventDefault();
//     const {elements: {login, password}
//     } = event.currentTarget;
//     if (login.value === "" || password.value === "") {
//       return console.log("Please fill in all the fields!");
//     } 
//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
  
//   };
