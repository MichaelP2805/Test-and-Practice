# Sintaxe e boas práticas
 * ponto e vírgula é facultativo (dependendo do contexto)
  - const myConst = "constante"

 * escrever com camelCase
  - const myConst2 = "constante2" 

 * procurar escrever código em inglês

 * para treinar e auementar as oportunidades futuras 
  - function doSomething(myArgument) {} 

# Variáveis 
 * const - o valor da variável não vai mudar

 * let - o valor da variável vai mudar (let it change) 

 * var - 

# Tipos de dados 
 * String - sequência de caracteres "" '' ``

 * Number - números 

 * Boolean - true / false 

 * undefined - indefinido 

 * null - deveria existir mas não existe ali 

# Estrutura de dados 
 * Array 
  - const myArray = [1, 2, "a", "b", true] 

 * Object 
  - const myObject = { property: "value" } 

# Funções 
 * 1- Criação e tipos de funções 
 * named 
  - function myFunction() {} 

 * Anonymous 
  - const myFunction = function() {} 

 * Arrow 
  - const myFunction = () => {} 

 * arguments & return 
  - function sum(a, b) { 
    return a + b } 
  - const sum =(a,b) => a + b 

 * 2- Execução 
  - myFunction() 
    mySum(1, 2) 

# Fluxo de aplicação 
 * if, else if, else 
  - const isRaining = true 
    if (isRaining) { 
       alert("Está chovendo, pega o guarda chuva") }
    else { alert("Dia limpo") } 

 * switch
  - const water = "com gás"
    switch(water) { 
      case "com gás":
        alert("Essa água é com gás")
        break;
      case "sem gás":
        alert("Água fresquinha da fonte")
        break;
      default: 
        alert("cadê minha água?") } 

# Estrutura de repetição 
 * while 
  - let play = true 
    while(play) {
 * fazer algo até o play ser falso 
 * criar uma lógica para o play se tornar falso
 * se não, loop eterno }

 * for (tradicional) 
  - let text = "abc"
    for (let i = 0; i < text.length; i++) {
     alert(text[i]) } 

 * for..of 
  - for (let char of text) { 
     alert(char) } 

# Operadores 
 * () group operator - agrupamento 

 * matemáticos:
  - * multiplicação 
  - ** exponenciação 
  - / divisão 
  - % resto da divisão 
  - + soma 
  - - subtração 

 * lógicos: 
  - && E lógico (AND) tem que ter os dois
  - || OU lógico (OR) pode ter um ou outro 
  - ! Não lógico (NO) negação 

 * comparação - relacional 
  - > maior 
  - < menor  
  - >= maior igual 
  - <= menor igual 
  - == igualdade
  - === igual no valor e do mesmo tipo (estritamente igual) 
  - != desigualdade 
  - !== diferente do valor e do tipo (estritamente diferente) 

 * atribuição 
  - = atribuição de valor 
  - *= multiplicação e atribuição de valor 
  - /= divisão e atribuição de valor
  - += doma e atribui valor 

 * outros operadores/expressões 
  - typeof tipo de dado 
  - ++ incremento 
  - -- decremento 
  - {} objeto vazio ou bloco de código 
  - [] array vazio 
  - , separa elementos de um array, objetos 
