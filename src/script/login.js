function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if(login=="adm" && senha=="1234"){
        alert("usuario autenticado");
        location.href ="cadastrar_adm.html"
        
    }else{
        alert("login ou senha invalida!");
    }
}