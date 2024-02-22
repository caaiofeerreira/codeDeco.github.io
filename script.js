const input = document.getElementById("input");
const output = document.getElementById("output");
const btnCodificar = document.getElementById("codificador");
const btnDecodificar = document.getElementById("decodificador");
const btnCopiar = document.getElementById("copiar");
const btnLimpar = document.getElementById("limpar");


const codifica = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
const decodifica = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};


function codificar() {
  const novoTexto = input.value.replace(/a|e|i|o|u/g,function(ocorrencia){
    return codifica[ocorrencia];
  });
  output.value = novoTexto;
}

function decodificar() {
  const novoTexto = input.value.replace(/ai|enter|imes|ober|ufat/g,function(ocorrencia){
    return decodifica[ocorrencia];
  });
  output.value = novoTexto;
}

function copiar() {
  const tempInput = document.createElement('input');
  tempInput.value = output.value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function limpar() {
  input.value = "";
  output.value = "";
}

btnCodificar.addEventListener('click',codificar);
btnDecodificar.addEventListener('click',decodificar);
btnCopiar.addEventListener('click',copiar);
btnLimpar.addEventListener('click',limpar);


input.addEventListener('input', function(event) {
  const valorLimpo = inputLimpo(event.target.value);
  if (valorLimpo !== event.target.value) {
    event.target.value = valorLimpo;
  }
});

function inputLimpo(value) {
  const semAcentos = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return semAcentos.toLowerCase();
}