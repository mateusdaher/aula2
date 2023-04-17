import readline from 'readline-sync';
import fs from 'node:fs';

fs.unlinkSync("dados.json");

const arquivo_escrita = fs.openSync("dados.json", "a");
fs.writeSync(arquivo_escrita, JSON.stringify({
  nome: readline.question("Digite seu nome: "),
  email: readline.questionEMail("Digite seu e-mail: "),
  telefone: readline.question("Digite aqui seu telefone: "),
  rg: readline.question("Digite aqui seu RG: ")
}));
fs.closeSync(arquivo_escrita);

const arquivo_leitura = fs.readFileSync("dados.json", { encoding: "utf-8" });

console.log(`conteúdo do arquivo:`);
console.log(JSON.parse(arquivo_leitura));