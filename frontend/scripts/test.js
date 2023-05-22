if (localStorage.getItem("token") === null){
    window.location = "/"
}

axios.get('https://michel.temss.tech/course')
    .then(function (response) {
        data = response.data;
        console.log(data.length)
        for (let i=0; i<data.length; i++){
            let question = document.createElement("div");
            let content = document.createElement("div");
            let answers = document.createElement("div");
            
            content.innerHTML = data[i]['category'];
            answers.innerHTML = data[i]['subcategory'];
            question.appendChild(content);
            question.appendChild(answers);
            document.getElementById("test").appendChild(question);
        }
    });