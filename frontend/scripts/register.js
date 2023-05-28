document.getElementById("register").addEventListener("click", () => {

    let contt = {}
    if (document.getElementById("login").value){
        contt.login = document.getElementById("login").value
    }
    if (document.getElementById("pass").value){
        contt.password = document.getElementById("pass").value
    }
    if (document.getElementById("pass_confirm").value){
        contt.password_confirm = document.getElementById("pass_confirm").value
    }


    axios.post('https://michel.temss.tech/auth/register', contt)
    .then(function (response) {
        console.log(response)
        if (response.data.success){
            popup(response.data.success)
            setTimeout(window.location.href = "/login", 1000)
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
    }, 2000)
}