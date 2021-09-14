function aleatoryNum(menor, maior) {
  menor = Math.ceil(menor);
  maior = Math.floor(maior);
  return Math.floor(Math.random() * (maior - menor)) + menor;
}

function rolarCorretamente1Dado() {
  return aleatoryNum(1, 7)
}

function rolarCorretamente2Dados() {
      let rolar_1 = rolarCorretamente1Dado()
      let rolar_2 = rolarCorretamente1Dado()
      console.log(rolar_1, rolar_2)
  }

function rolarDado1000Vezes() {
  for (let i = 0; i < 1000; i++) {
      let rolar_1 = rolarCorretamente1Dado()
      console.log(rolar_1)
  }
}

let armazena = []

function arr() {
  for (let i = 0; i <= 10; i++) {
      armazena[i] = 0
  }
}

function contagemFrequencia() {
  arr();
  for (let i = 0; i < 1000; i++) {
      let rolar_1 = rolarCorretamente1Dado()
      let rolar_2 = rolarCorretamente1Dado()
      let somando = rolar_1 + rolar_2
      armazena[somando - 2] += 1
  }
}
contagemFrequencia()

function contagemTexto() {
  const body = document.querySelector("body")
  const ul = document.createElement("ul")
  for (let i = 0; i < armazena.length; i++) {
      let li = document.createElement("li")
      ul.style.color="blue"
      ul.style.fontSize="28px"
      li.innerText = armazena[i]
      ul.appendChild(li)
  }
  body.appendChild(ul)
}
contagemTexto()

function grafico() {
  const body = document.querySelector("body")
  const div_1 = document.createElement("div")
      div_1.style.marginLeft = "40px"
  for (let i = 0; i < armazena.length; i++) {
      let div_2 = document.createElement("div")
      div_2.style.height = "30px"
      div_2.style.width = `${armazena[i]}px`
      div_2.style.backgroundColor = "darkblue"
      div_2.style.marginTop = "5px"
      div_2.style.alignContent ="rigth"
      div_2.style.color = "white"
      div_2.style.fontSize = "25px"
      div_2.innerText = armazena[i]
      div_1.appendChild(div_2) 
  }
  body.appendChild(div_1)
}
grafico()