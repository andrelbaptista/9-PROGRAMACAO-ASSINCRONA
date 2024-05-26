// timeOut
console.log("Executando o código ANTES da função (timeOut)");

setTimeout(function () {
  console.log("Executou a função ASSÍNCRONA com timeOut agora !!!!!!!");
}, 2000);

console.log("Executando o código DEPOIS da função (timeOut)");

// interval
console.log("Executando o código ANTES da função (interval)");

setInterval(() => {
  console.log("Executou a função ASSÍNCRONA com interval agora !!!!!!!");
}, 3000);

console.log("Executando o código DEPOIS da função (interval");

// promise
const promessa = Promise.resolve(5 + 5);
console.log("Executando o código ANTES da função (promise)");

promessa
  .then((value) => {
    console.log("Executou a função ASSÍNCRONA com promise agora !!!!!!!");
    console.log(`O valor da soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`O valor agora é ${value}`));

console.log("Executando o código DEPOIS da função (promise");

// validando uma PROMISE;
console.log("Executando o código ANTES da função (promise COM ERRO)");

Promise.resolve(5 * "asd")
  .then((n) => {
    if (Number.isNaN) {
      throw new Error("Valor inválido - promise com erro");
    }
  })
  .catch((err) => console.log(`Função ASSÍNCRONA - Um erro ocorreu: ${err}`));

console.log("Executando o código DEPOIS da função (promise com ERRO");

//rejeitando uma promise
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`o número ${n} que é maior que 10`);
    } else {
      reject(new Error(`O número ${n} é menor que 10`));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(5);
console.log(a, b);

a.then((v) => console.log(`O resultadoda promise é ${v} e está correto`)).catch(
  (falha) => console.log(`Um erro na promise ocorreu ${falha}`)
);

b.then((v) => console.log(`O resultadoda promise é ${v} e está correto`)).catch(
  (falha) => console.log(`Um erro na promise ocorreu ${falha}`)
);

//  resolvendo várias promises
