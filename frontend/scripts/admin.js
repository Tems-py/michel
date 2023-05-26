if (localStorage.getItem("token") === null){
    window.location = "/"
}

let mod = document.getElementById("modal")

function load(){
    let m = document.createElement("tr")
    let n = document.createElement("td")
    let o = document.createElement("td")
    let p = document.createElement("td")

    n.innerHTML = "Id"
    o.innerHTML = "Email"
    p.innerHTML = "Edycja"

    m.appendChild(n)
    m.appendChild(o)
    m.appendChild(p)
    document.getElementById("tabl").innerHTML = ""
    document.getElementById("tabl").appendChild(m)
    axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": "SELECT id, login FROM accounts"})
        .then((r) => {
            console.log(r.data)
            for (let i=0; i<r.data.length; i++){
                let user = document.createElement("tr")
                for (let j=0; j<r.data[i].length; j++){
                    let k = document.createElement("td")
                    k.innerHTML = r.data[i][j]
                    user.appendChild(k)
                }
                let k = document.createElement("td")
                k.innerHTML = "Opcje 🔽"
                user.appendChild(k)

                user.addEventListener("click", () => {
                    mod.innerHTML = ""
                    let imme = document.createElement("h1")
                    imme.innerHTML = r.data[i][1]
                    
                    mod.appendChild(imme)

                    let del = document.createElement("input")
                    del.type = "button"
                    del.value = "Usuń"

                    del.addEventListener("click", () => {
                        axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": `DELETE FROM accounts WHERE id=${r.data[i][0]}`})
                        .then((r) => {
                            load()
                            mod.classList.remove("modal_show")
                        })
                    })

                    mod.appendChild(del)

                    mod.classList.add("modal_show")
                    
                })

                document.getElementById("tabl").appendChild(user)
            }
        })
}
document.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        mod.classList.remove("modal_show")
    }
})

load()