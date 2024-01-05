let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');

let colores = function (id) {
  let numeroColor = [];

  for (let i = 1; i <= 3; i++) {
    let random = Math.floor(Math.random() * 255) + 1;
    random.push;
    numeroColor.push(random);
  }

  id.style.backgroundColor = `rgb(${numeroColor[0]},${numeroColor[1]},${numeroColor[2]})`;

  id.innerText = `RGB: ${numeroColor}`;
};

for (let i = 0; i <= 6; i++) {
  colores(uno);
  colores(dos);
  colores(tres);
  colores(cuatro);
  colores(cinco);
}

let divs = document.querySelectorAll('.color');

divs.forEach(div => {
  div.addEventListener('click', function (event) {
    let divPresionado = event.target;

    colores(divPresionado);
  });
});
