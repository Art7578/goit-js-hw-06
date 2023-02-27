const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    const userDetails = { email: email.value, password: password.value }

    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!")
    } else {
        console.log(userDetails);
        form.reset();
    }
};