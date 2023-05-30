const textarea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar() {
  const textoEncriptado = encriptar(textarea.value)
  mensaje.value = textoEncriptado
  textarea.value = ""
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufa"],
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptada
}
//

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textarea.value)
  mensaje.value = textoDesencriptado
  textarea.value = ""
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufa"],
  ]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return stringDesencriptada
}

function copiarEncriptador() {
  var contenido = document.getElementById("textarea")
  contenido.select()
  document.execCommand("copy")
}
