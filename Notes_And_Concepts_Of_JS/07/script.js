/* faça um programa que tenha um menu e apresente a seguinte menssagem:

 Olá usuário! Digite o número da opção dsejada
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados 
  3. Sair do programa. 

----

 o programa deverá capturar o número digitado pelo usuário
 e mostrar os seguintes cenários:

 Caso o usuário digite 1, poderá cadastrar um item e uma lista
 Caso o usuário digite 2, poderé ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensagem:
   "Não existem itens cadastrados" 
 Caso o usuário digite 2, a aplicação deverá ser encerrada. */

let option;
let items = [];  
let index = 0;

while(option != 3) {

 option = Number(prompt(`
 Olá usuário! Digite o número da opção dsejada

 1. Cadastrar um item na lista

 2. Mostrar itens cadastrados 

 3. Sair do programa.`))

 switch(option) { 
  case 1:
    let item = prompt("Digite o nome do item")
    items.push(item) 
    break;
  
  case 2:
    if(items.length == 0) { 
      alert("Não existem itens cadastrados") }
      else { alert(items) }
    break;

  case 3:
    alert("Tchau")
    break;
   default:
    alert("Opção inválida. Tente novamente") } } 