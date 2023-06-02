let d ;
let x = true;
axios.get('https://michel.temss.tech/course')
.then(function (response) {
  a = response.data.length;
  d = response.data;
  z = "topic_";
  for(b=0; b<a; b++){
    c = z + String(b+1);
    document.getElementById("topic").innerHTML += "<li>" + d[b]["subcategory"] + "</li>";
  }
    document.getElementById("title").innerHTML = response.data[0]["subcategory"];
    document.getElementById("content").innerHTML = response.data[0]["category"];
  })

x = true;
function side_menu(){
  if(x == true){
    x = false;
    document.getElementById("menu_content").style.transform = "translateX(300px)";
  }
  else{
    x = true;
    document.getElementById("menu_content").style.transform = "translateX(-300px)";
  }
}
  