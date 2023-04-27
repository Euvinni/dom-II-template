const input = document.getElementsByTagName(`input`)[0]

const paragrafo = document.getElementsByTagName(`p`)[0]

const verificaTecla = (event) => {

    if(event.shiftKey){
      paragrafo.innerHTML = "ATENÇÃO, SEGURANDO SHIFT"
    }else {
        paragrafo.innerHTML = ``
    }
  }