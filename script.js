var respJgd1 = []
var respJgd2 = []
var Jgd1 = "Jogador 1";
var Jgd2 = "Jogador 2";
var pont1 = 0;
var pont2 = 0;
var jogo = []

window.addEventListener("onload",começo())
window.addEventListener("onload",jogadores())

function jogadores(){
  document.getElementById("jgd1").addEventListener("click",function(){
    let nome1 = document.getElementById("nome1").value
    document.getElementById("jgd1").style.backgroundColor = "red"
    document.getElementById("nome1").value = nome1
    document.getElementById("nome1").readOnly = true
    Jgd1 = nome1
  })
  document.getElementById("jgd2").addEventListener("click",function(){
    let nome2 = document.getElementById("nome2").value
    document.getElementById("jgd2").style.backgroundColor = "red"
    document.getElementById("nome2").value = nome2
    document.getElementById("nome2").readOnly = true
    Jgd2 = nome2
  })
}
function começo(){
  jogo = []
  respJgd1 = []
  respJgd2 = []
  let x = (Math.random()) * 10;
  for(let i=0;i<=8;i++){
    document.getElementsByClassName("jogo")[i].innerHTML = " ";
  }
  if(x >= 5){
    vez = "Jogador1";
    document.getElementById("nome1").style.backgroundColor = "white"
    eventos();
  }else{
    vez = "Jogador2";
    document.getElementById("nome2").style.backgroundColor = "white"
    eventos();
  }
}

function eventos(){
  let div = document.getElementsByClassName("jogo")
  for(let i=0;i<=8;i++){
  div[i].addEventListener("click",function(){
    if(jogo.includes(i + 1) == true){
      this.removeEventListener("click")
    }
    if(vez == "Jogador1"){
      respJgd1.push(i + 1);
      jogo.push(i + 1)
      this.innerHTML = "0";
      this.style.color = "rgba(0, 0, 250, 0.959)"
      document.getElementById("nome1").style.backgroundColor = "blue"
      document.getElementById("nome2").style.backgroundColor = "white"
      vez = "Jogador2";
      resultado(respJgd1);
    }else{
      respJgd2.push(i + 1);  
      jogo.push(i + 1)    
      this.innerHTML = "X";
      this.style.color = "rgba(246, 6, 6, 0.972)"
      document.getElementById("nome1").style.backgroundColor = "white"
      document.getElementById("nome2").style.backgroundColor = "red"
      vez = "Jogador1"
      resultado(respJgd2);
      }
    }
  )}
}

function resultado(Jgd){
  if(Jgd.includes(1) == true && Jgd.includes(2) == true && Jgd.includes(3) == true){
    ganhou(vez)
  }
  if(Jgd.includes(4) == true && Jgd.includes(5) == true && Jgd.includes(6) == true){
    ganhou(vez)
  }
  if(Jgd.includes(7) == true && Jgd.includes(8) == true && Jgd.includes(9) == true){
     ganhou(vez)
  }
  if(Jgd.includes(1) == true && Jgd.includes(4) == true && Jgd.includes(7) == true){
    ganhou(vez)
  }
  if(Jgd.includes(3) == true && Jgd.includes(5) == true && Jgd.includes(7) == true){
    ganhou(vez)
  }
  if(Jgd.includes(1) == true && Jgd.includes(5) == true && Jgd.includes(9) == true){
    ganhou(vez)
  }
  if(Jgd.includes(2) == true && Jgd.includes(5) == true && Jgd.includes(8) == true){
    ganhou(vez)
  }
  if(Jgd.includes(3) == true && Jgd.includes(6) == true && Jgd.includes(9) == true){
    ganhou(vez)
  }
  if(jogo.length == 9){
    alert("velha")
  }
}

function ganhou(jogador){
  if(jogador == "Jogador2"){
    pont1 ++
    alert("Parabéns" + " " + Jgd1 + " " + "Você ganhou!!!")
    document.getElementById("pont1").innerHTML = pont1 
  }else{
    pont2 ++
    alert("Parabéns" + " " + Jgd2 + " " + "Você ganhou!!!")
    document.getElementById("pont2").innerHTML = pont2 
  }
  document.getElementById("nome1").style.backgroundColor = "blue"
  document.getElementById("nome2").style.backgroundColor = "red"
}
