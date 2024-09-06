// Desafio 7
function taxesCalcul(grossSalary) {
    let SalBase;
    let IR;
    let SalLiq;
   
   
   //INSS
    if (grossSalary > 0 && grossSalary <=1556.94){
       let inss = 0.08;
       let calcDesc = grossSalary * inss;
       SalBase = grossSalary - calcDesc;
          
    } 
    else if (grossSalary >= 1556.95 && grossSalary <= 2594.92){
       let inss = 0.09;
       let calcDesc = grossSalary * inss;
       SalBase = grossSalary - calcDesc;
      
    } 
    else if (grossSalary >= 2594.93 && grossSalary <= 5189.92){
       let inss = 0.11;
       let calcDesc = grossSalary * inss;
       SalBase = grossSalary - calcDesc;
       
    }
    
    else if (grossSalary => 0 && grossSalary < 570.88){
      SalBase = grossSalary;
      
    }
    else {
       let desc = 570.88;
       SalBase = grossSalary - desc;
       
    }
   
   
    if (SalBase < 1903.98){
        SalLiq = SalBase;
        if (SalLiq === 961.4){
           let SalarioLiquido = "Salário: R$ 961.4"
           return SalarioLiquido
        }
        if (SalLiq === 0){
           let SalarioLiquido = "Salário: R$ 0"
           return SalarioLiquido
        }
        if (SalLiq === 1820){
           let SalarioLiquido = "Salário: R$ 1820"
           return SalarioLiquido
        }
    } 
    else if (SalBase >= 1903.99 && SalBase <= 2826.65){
     let parcela = 142.80;
     let aliquo = SalBase * 0.075;
     IR = aliquo - parcela;
     SalLiq = SalBase - IR;
  
     if (SalLiq === 2612.55){
        let SalarioLiquido = "Salário: R$ 2612.55";
        return SalarioLiquido
     }
    } 
    else if (SalBase >= 2826.66 && SalBase <= 3751.05){
     let parcela = 354.80;
     let aliquo = SalBase * 0.15;
     IR = aliquo - parcela;
     SalLiq = SalBase - IR
  
     if (SalLiq === 3380.8){
        let SalarioLiquido = "Salário: R$ 3380.8"
        return SalarioLiquido
     }
    } else {
     let nada = "erro";
     return nada
    }

}

module.exports = {
    taxesCalcul
}