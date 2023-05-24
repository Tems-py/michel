if (localStorage.getItem("token") === null){
    window.location = "/"
}

let submitted = []

axios.get('https://michel.temss.tech/quiz')
    .then(function (response) {
        data = response.data;
        console.log(data)
        for (let i=0; i<data.length; i++){
            let question = document.createElement("div");
            let content = document.createElement("div");
            let answers = document.createElement("ol");
            answers.style.listStyle = 'upper-alpha'
            
            content.innerHTML = data[i]['question'];
            let a = document.createElement("li");
            let b = document.createElement("li");
            let c = document.createElement("li");
            let d = document.createElement("li");
            a.innerHTML = data[i]['a'];
            answers.appendChild(a);
            b.innerHTML = data[i]['b'];
            answers.appendChild(b);
            c.innerHTML = data[i]['c'];
            answers.appendChild(c);
            d.innerHTML = data[i]['d'];
            answers.appendChild(d);
            question.appendChild(content);
            question.appendChild(answers);
            document.getElementById("test").appendChild(question);
            a.addEventListener("click", () => {
                add_answer(0, data[i]['id'], answers.childNodes);
                console.log("ł")
            })
            b.addEventListener("click", () => {
                add_answer(1, data[i]['id'], answers.childNodes);
                console.log("ł")
            })
            c.addEventListener("click", () => {
                add_answer(2, data[i]['id'], answers.childNodes);
                console.log("ł")
            })
            d.addEventListener("click", () => {
                add_answer(3, data[i]['id'], answers.childNodes);
                console.log("ł")
            })
        }
    });

function add_answer(answer, id, ob){
    for (let i=0; i<submitted.length; i++){
        if (submitted[i]['id'] == id){
            submitted.splice(i)
        }
    }
    submitted.push({'id': id, 'answer': answer})
    for (let i=0; i<ob.length; i++){
        ob[i].classList.remove("hightlight")
    }
    ob[answer].classList.add("hightlight")
}

document.getElementById("subm").addEventListener("click", () => {
    axios.post("https://michel.temss.tech/quiz", {'answers': JSON.stringify(submitted), 'token': localStorage.getItem("token")})
    .then((r) => {
        data = r.data;
        console.log(data)
        document.getElementById("container").innerHTML = ""
        let h1 = document.createElement("h1")
        h1.innerHTML = `Ukończyłeś kurs z wynikiem ${data['result']}/10`
        document.getElementById("container").appendChild(h1)
    })
})