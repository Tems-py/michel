function checkLogin(){
    if (localStorage.getItem("token")){
        let hide = document.getElementsByClassName("hide_when_logged");
        for (let x in hide.length){
            hide[x].classList.add("hide")
        }
        let show = document.getElementsByClassName("show_when_logged");
        for (let x in show.length){
            hide[x].classList.remove("hide")
        }
    }
}

checkLogin()