
let count = 0

function giveDrink() {
  document.getElementById("miguel").src="img/MiguelNotOK.jpg";
  let node = document.getElementById("beer");
  let n = parseInt(node.innerText, 10)
  n++
  
  if(count++ == 5){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  console.log(count)
  node.innerText = n
  alert('Merci petolle !');
}