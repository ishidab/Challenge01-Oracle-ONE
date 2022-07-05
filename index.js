window.addEventListener("load", function () {



    let textoEntrada = document.querySelector(".caja-texto");
    let textoSalida = document.querySelector(".texto-salida");


    let btnEncriptar = document.querySelector("#encriptar");
    let btnDesencriptar = document.querySelector("#desencriptar");
    let btnCopiar = document.querySelector("#copiar");

    let desactivar = document.querySelector(".sin-texto");
    let activar = document.querySelector(".con-texto");



    btnEncriptar.addEventListener("click", function () {

        desactivar.style.display = "none";
        activar.style.display = "flex";

        let texto = encriptarTexto();
        textoSalida.value = texto;

    });

    btnDesencriptar.addEventListener("click",function (){
        let texto = desencriptarTexto();
        textoSalida.value = texto;

    })

    btnCopiar.addEventListener("click", copiarClipBoard);

    // funcion para encriptar texto
    function encriptarTexto() {

        let textoEncriptar = limpiarTexto(textoEntrada.value);
        let textoEncriptado = textoEncriptar.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat")
        ;
        return textoEncriptado;
    }

    // funcion para desencriptar texto
    function desencriptarTexto(){

        let textoDesencriptar = textoEntrada.value;

        let textoDesencriptado = textoDesencriptar.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u")
        ;
        return textoDesencriptado;


    }

    // funcion para copiar en el clipBoard
    function copiarClipBoard(){



        textoSalida.select();
        document.execCommand("copy");
        textoEntrada.value = textoSalida.value;

    }

    function limpiarTexto(texto){
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

    }

});