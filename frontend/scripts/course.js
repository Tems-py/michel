let d ;
let x = true;
let course_lenght = 0;
axios.get('https://michel.temss.tech/course')
.then(function (response) {
  a = response.data;
  course_lenght = a.length;
  for (let i=0; i<a.length; i++){
    let li = document.createElement("li");
    li.classList.add("sidebar")
    li.innerHTML = a[i]['subcategory'];

    li.addEventListener("click", () => {
      axios.get(`https://michel.temss.tech/course/${a[i]['id']}`)
        .then(function (response) {
          data = response.data;
          console.log(a[i])
          document.getElementById("content").innerHTML = data['content']
          document.getElementById("title").innerHTML = data['subcategory']
          side_menu()
          let buttons = document.getElementsByClassName("sidebar")
          for (let i=0; i<buttons.length; i++){
            buttons[i].classList.remove('highlight')
          }
          li.classList.add("highlight")
          current_page = i
          update_bar()
      })
    })

    document.getElementById("topic").appendChild(li);
  }
  change()
  update_bar()
})

function update_bar(){
  let progr = document.getElementById("progress2")
  document.getElementById("progr").innerHTML = `${Math.round(current_page/(course_lenght-1) * 100)}%`
  progr.style.transform =  `scaleX(${(current_page/(course_lenght-1))})`
}

let current_page = 0
function change(){
  let buttons = document.getElementsByClassName("sidebar")
  update_bar()
  buttons[current_page].click()
  side_menu()
}

document.getElementById("prev").addEventListener("click", () => {
  if (current_page > 0){
    current_page -= 1;
    change()
  }
})

document.getElementById("next").addEventListener("click", () => {
  if (current_page < course_lenght - 1){
    current_page += 1;
    change()
  }
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
  