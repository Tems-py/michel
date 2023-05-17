function checkLogin(){
    if (localStorage.getItem("token")){
        let hide = document.getElementsByClassName("hide_when_logged");
        console.log(hide.length)
        for (let x=0;x < hide.length; x++){
            console.log(hide[x])
            hide[x].classList.add("hide")
        }
        let show = document.getElementsByClassName("show_when_logged");
        for (let x=0; x < show.length; x++){
            show[x].classList.remove("hide")
        }
    }
}

checkLogin()