
axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    console.log(response.data["title"]);
    document.getElementById("topic_1").innerHTML = response.data[0]["title"];
    document.getElementById("topic_2").innerHTML = response.data[1]["title"];
    document.getElementById("topic_3").innerHTML = response.data[2]["title"];
    document.getElementById("topic_4").innerHTML = response.data[3]["title"];
    document.getElementById("topic_5").innerHTML = response.data[4]["title"];
    document.getElementById("topic_6").innerHTML = response.data[5]["title"];
    document.getElementById("topic_7").innerHTML = response.data[6]["title"];
    document.getElementById("topic_8").innerHTML = response.data[7]["title"];
  })
x = true;
function side_menu(){
    if(x){
        x = false;
        document.getElementById("menu_content").style.transform = "translateX(300px)";
    }
    else{
        x = true;
        document.getElementById("menu_content").style.transform = "translateX(-300px)";
    }
}
  