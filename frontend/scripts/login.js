document.getElementById("login").addEventListener("click", () => {
    axios.post('https://michel.temss.tech/auth/login', {
        login: document.getElementById("email").value,
        password: document.getElementById("pass").value
    })
    .then(function (response) {
        console.log(response);
        if (response.data.success){
            popup(response.data.success)
            localStorage.setItem("token", response.data.token)
        } else {
            popup(response.data.error)
        }
 
    })
})

function popup(text){
    document.getElementById("popup").innerHTML = text
    document.getElementById("popup").style.transform = "translateX(0%)"
    setTimeout(() => {
        document.getElementById("popup").style.transform = "translateX(300%)"
    }, 2000)
}