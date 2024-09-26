// *DESAFIO CLASSIFICADOR DE NIVEL DE HEROI*

//O que deve ser ulitizado: Variaveis, operadores, lacos de repeticao e estruturas de decisoes;

// Objetivo: Cria uma varivel para armazenar o nome e a quantidade de experiencia (XP) de um heroi, depois utilize uma estrutura de decisao para apresentar alguma das mensagens abaixo;

//Se a XP for menor do que 1.000 = Ferro
//Se a XP for entre 1.001 e 2.000 = Bronze
//Se a XP for entre 2.001 e 5.000 = Prata
//Se a XP for entre 6.001 e 7.000 = Ouro
//Se a XP for entre 7.001 e 8.000 = Platina
//Se a XP entre 8.001 e 9.000 = Ascendente
//Se a XP entre 9.001 e 10.000 = Imortal
//Se a XP for maior ou igual a 10.001 = Radiante

// *SAIDA* 
// Ao final deve se exibir uma mensagem:
//"O heroi de nome **{nome}** esta no nivel de **@**"

let herois = [
      {nomeHeroi: "Exu",
       quantidadeDeExperiencia: 1.000},

      {nomeHeroi: "Pomba-Gira",
       quantidadeDeExperiencia: [1.001, 2.000]},
      
      {nomeHeroi: "Lucifer",
       quantidadeDeExperiencia: [2.001, 5.000]},
       
      {nomeHeroi: "Zé Pelintra",
       quantidadeDeExperiencia: [6.001, 7.000]},

      {nomeHeroi: "Caboclo",
       quantidadeDeExperiencia: [7.001, 8.000]},
       
      {nomeHeroi: "Marinheiro",
       quantidadeDeExperiencia: [8.001, 9.000]},  

      {nomeHeroi: "Baiano",
       quantidadeDeExperiencia: [9.001, 10.000]},
      
      {nomeHeroi: "Boiadeiro",
       quantidadeDeExperiencia: 10.000 },     
    
];

herois.forEach(heroi =>{
    if (heroi.quantidadeDeExperiencia <= 1.000)
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Ferro");}

    else if (heroi.quantidadeDeExperiencia >= [1.001 || 2.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Bronze");}

    else if (heroi.quantidadeDeExperiencia >= [2.001 || 5.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Prata");}

    else if (heroi.quantidadeDeExperiencia >= [6.001 || 7.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Ouro");}

    else if (heroi.quantidadeDeExperiencia >= [7.001 || 8.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Platina");}
    
    else if (heroi.quantidadeDeExperiencia >= [8.001 || 9.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Ascendente");}

    else if (heroi.quantidadeDeExperiencia >= [9.001 || 10.000])
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Imortal");}

    else (heroi.quantidadeDeExperiencia >= 10.001)
        {console.log ("O heroi de nome", heroi.nomeHeroi + " esta no nivel de", heroi.quantidadeDeExperiencia + " e é de Radiante");}

    });

