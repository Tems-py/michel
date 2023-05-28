if (localStorage.getItem("token") === null){
    window.location = "/"
}

let mod = document.getElementById("modal")

function load(){
    document.getElementById("tabl").innerHTML = `                <tr>
    <td>Id</td>
    <td>Treść</td>
    <td>ODP A</td>
    <td>ODP B</td>
    <td>ODP C</td>
    <td>ODP D</td>
    <td>Poprawna odpowiedź</td>
    <td>Opcje</td>
</tr>`
    axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": "SELECT `id`, `question`, `answer_A`, `answer_B`, `answer_C`, `answer_D`, `correct_answer` FROM `questions`"})
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
                    imme.innerHTML = r.data[i][1]
                    
                    mod.appendChild(imme)

                    // EDYCJA TREŚCI TEXT AREA
                    let ed = document.createElement("textarea")
                    ed.style.height = "10em"
                    ed.value = r.data[i][1]

                    


                    // EDYCJA ODPOWIEDZI A
                    let edA = document.createElement("input")
                    edA.type = "text"

                    edA.value = r.data[i][2]

                    // EDYCJA ODPOWIEDZI B
                    let edB = document.createElement("input")
                    edB.type = "text"

                    edB.value = r.data[i][3]

                    // EDYCJA ODPOWIEDZI C
                    let edC = document.createElement("input")
                    edC.type = "text"
                    edC.value = r.data[i][4]

                    // EDYCJA ODPOWIEDZI D
                    let edD = document.createElement("input")
                    edD.type = "text"
                    edD.value = r.data[i][5]

                    // EDYCJA ODPOWIEDZI POPRAWNEJ
                    let edCor = document.createElement("input")
                    edCor.type = "text"
                    edCor.value = r.data[i][6]

                    // BUTTON EDYCJI
                    let edit = document.createElement("input")
                    edit.type = "button"
                    edit.value = "Zatwierdź zmiany"

                    edit.addEventListener("click", () => {
                        axios.post("https://michel.temss.tech/admin", {"token": localStorage.getItem("token"), "query": `UPDATE questions SET question='${ed.value}', answer_A='${edA.value}', answer_B='${edB.value}', answer_C='${edC.value}', answer_D='${edD.value}', correct_answer='${edCor.value}' WHERE id=${r.data[i][0]}`})
                        .then((r) => {
                            load()
                            mod.classList.remove("modal_show")
                        })
                    })

                    mod.appendChild(ed)
                    mod.appendChild(edA)
                    mod.appendChild(edB)
                    mod.appendChild(edC)
                    mod.appendChild(edD)
                    mod.appendChild(edCor)
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