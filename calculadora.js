n1 = -1;
n2 = -1;

function cero(){
  document.getElementById("pantalla").innerHTML = 0;
  if(n1 == -1){
    n1 = 0;
  }else{
    n2 = 0;
  }
}

function uno(){
  document.getElementById("pantalla").innerHTML = 1;
  if(n1 == -1){
    n1 = 1;
  }else{
    n2 = 1;
  }
}

function suma(){
  document.getElementById("pantalla").innerHTML = "+";
}

function igual(operacion){
  if (n1==-1 && n2!=-1){
    document.getElementById("pantalla").innerHTML = n2;
  }else if(n1 !=-1 && n2==-1){
    document.getElementById("pantalla").innerHTML = n1;
  }else if(n1 ==-1 && n2==-1){
    document.getElementById("pantalla").innerHTML = 0;
  }else{
    document.getElementById("pantalla").innerHTML = n1 ^ n2;
  }
  n1 = -1;
  n2 = -1;
}

function nuevo(){
  document.getElementById("pantalla").innerHTML = 0;
  n1 = -1;
  n2 = -1;
}