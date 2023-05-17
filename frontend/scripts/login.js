document.getElementById("login").addEventListener("click", () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        console.log(response);
        popup(response.data['title'])
        localStorage.setItem("token", response.data['title'])
    })
})

function popup(text){
    document.getElementById("popup").innerHTML = text
    document.getElementById("popup").style.transform = "translateX(0%)"
    setTimeout(() => {
        document.getElementById("popup").style.transform = "translateX(300%)"
    }, 2000)
}