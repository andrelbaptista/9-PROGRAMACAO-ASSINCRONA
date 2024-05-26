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
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 5000);
});
console.log(p1);
p1.then((y) => console.log(`o valor em p1 é ${y}`)).catch(() =>
  console.log("Erro")
);

const p2 = Promise.resolve(3 + 300);
console.log(p2);
p2.then((y) => console.log(`o valor em p2 é ${y}`)).catch(() =>
  console.log("Erro")
);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(`30 é maior que 10`);
  } else {
    reject(new Error("Erro"));
  }
});
console.log(p3);
p3.then((y) => console.log(`p3: ${y}`)).catch(() =>
  console.log("Erro")
);

Promise.all([p1,p2,p3]).then((values) => console.log(values));

// async functions
async function somaAtrasada (a,b) { return a + b};
console.log("Executando a função de somaAtrasada");

console.log(somaAtrasada(10,200));

somaAtrasada(10,200).then((value)=> console.log(`O valor da soma é ${value}`));
console.log("Conferindo que somaAtrasada é async");

// async await
function resolveAtrasado() {
  return new Promise((resolve) => {
    setTimeout(() => {}, resolve("Resolveu a promise"), 2000);
  });
}
const aAwait = resolveAtrasado();
console.log(`Criando a função de promise  ${aAwait}`)

async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado");
  const result = await resolveAtrasado();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();
console.log("Aguardando.....");

// generator
function* geracao() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = geracao();

console.log(`No primeiro next o valor é: ${gen.next().value}`);
console.log(`No segundo next o valor é: ${gen.next().value}`);
console.log(`No terceiro next o valor é: ${gen.next().value}`);