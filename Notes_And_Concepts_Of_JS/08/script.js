/* 
 Dada a lista de pacientes, descubra o IMC de cada paciente e
 imprima
 
 "Paciente X possui o IMC de: Y"
  
 Onde X é o nome do paciente e Y é o IMC desse paciente 
 
 Crie uma função para fazer o cálculo de IMC */ 

// peso / (altura * altura) 

const patients = [
    { name: "Bastião",
      age: 40,
      weight: 100,
      height: 190, },

    { name: "Sandra",
      age: 33,
      weight: 67,
      height: 159, },

    { name: "Caio",
      age: 27,
      weight: 95,
      height: 186, } ] 

function IMC(weight, height) { 
    return (weight / ((height /100) ** 2)).toFixed(2) } 

function printPatientIMC(patient) { 
 return `
 Paciente ${patient.name} possui o IMC de 
 ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}` } 

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage) }  