let d ;
axios.get('https://michel.temss.tech/course')
.then(function (response) {
  a = response.data.length;
  d = response.data;
  z = "topic_";
  for(b=0; b<a; b++){
    c = z + String(b+1);
    document.getElementById("topic").innerHTML += "<li>" + d[b]["subcategory"] + "</li>";
  }
    console.log(j);
    document.getElementById("title").innerHTML = response.data[j]["subcategory"];
    // for(i=0; i<8; i++){
    //   y = z + String(i+1);
    //   console.log(y)
    //   document.getElementById(y).innerHTML = response.data[i]["subcategory"];
    //   y = "";
    // }
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
  