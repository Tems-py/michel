document.getElementById("register").addEventListener("click", () => {
    axios.post('https://michel.temss.tech/auth/register', {
        login: document.getElementById('email'),
        password: document.getElementById("pass"),
        password_confirm: document.getElementById('pass_confirm')
    })
    .then(function (response) {
        console.log(response);
        popup(response.data['title'])
    })
})

function popup(text){
    document.getElementById("popup").innerHTML = text
    document.getElementById("popup").style.transform = "translateX(0%)"
    setTimeout(() => {
        document.getElementById("popup").style.transform = "translateX(300%)"
    }, 2000)
}