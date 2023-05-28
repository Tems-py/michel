if (localStorage.getItem("token") === null){
    window.location = "/"
}

let mod = document.getElementById("modal")

function load(){
    document.getElementById("tabl").innerHTML = `                <tr>
    <td>Id</td>
    <td>Treść</td>
    <td>Tytuł</td>
    <td>Opcje</td>
</tr>`
    axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": "SELECT ID, CONTENT, subcategory FROM `course` WHERE 1"})
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
                    // TYTUŁ
                    mod.innerHTML = ""
                    let imme = document.createElement("h1")
                    imme.innerHTML = r.data[i][2]
                    
                    mod.appendChild(imme)

                    // edycja kategorii
                    let edCat = document.createElement("input")
                    edCat.type = "text"
                    edCat.value = r.data[i][2]

                    // EDYCJA TREŚCI TEXT AREA
                    let ed = document.createElement("textarea")
                    ed.style.height = "10em"
                    ed.value = r.data[i][1]

                    // BUTTON EDYCJI
                    let edit = document.createElement("input")
                    edit.type = "button"
                    edit.value = "Zatwierdź zmiany"

                    edit.addEventListener("click", () => {
                        axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": `UPDATE course SET CONTENT='${ed.value}', subcategory='${edCat.value}' WHERE ID=${r.data[i][0]}`})
                        .then((r) => {
                            load()
                            mod.classList.remove("modal_show")
                        })
                    })


                    mod.appendChild(edCat)
                    mod.appendChild(ed)

                    // add breakline
                    mod.appendChild(document.createElement("br"))
                    mod.appendChild(edit)
                    mod.appendChild(document.createElement("br"))



                    // BUTTON USUWANIA
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