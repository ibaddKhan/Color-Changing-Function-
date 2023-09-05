let bg = document.querySelector("body");
let div = document.querySelector("div");
let Cname = document.querySelector(".name");
let color = ["Yellow", "Blue", "Green", "Red", "Pink", "Lime"];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
  div.innerHTML += `<button style="background-color: ${color[i]};" onclick="colors(${i});" >${color[i]}</button>`;
}
function colors(i) {
  bg.style.backgroundColor = `${color[i]}`;
  Cname.innerHTML = `<h1 style="font-size: 100px; position:relative; top:100px;">${color[i]}</h1>`;
}
