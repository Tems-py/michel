document.getElementById("login").addEventListener("click", () => {

    let contt = {}
    if (document.getElementById("email").value){
        contt.login = document.getElementById("email").value
    }
    if (document.getElementById("pass").value){
        contt.password = document.getElementById("pass").value
    }

    axios.post('https://michel.temss.tech/auth/login', contt)
    .then(function (response) {
        console.log(response);
        if (response.data.success){
            popup(response.data.success)
            localStorage.setItem("token", response.data.token)
            setTimeout(window.location.href = "/course", 1000)
        } else {
            popup(response.data.error)
        }
 
    })
    .catch(function (error) {
        console.log(error.response.data);
        messages = ""
        for(let i in error.response.data.message){
            messages += error.response.data.message[i] + "<br>"
        }
        popup(messages)
    });
})

function popup(text){
    document.getElementById("popup").innerHTML = text
    document.getElementById("popup").style.transform = "translateX(0%)"
    setTimeout(() => {
        document.getElementById("popup").style.transform = "translateX(300%)"
    }, 4000)
}