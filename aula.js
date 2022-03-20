// let idade = 19;
// console.log(idade);
// let alturaGutin = 187;


// let = nome = 'Augusto';

// console.log(nome);


// let valorIngressoAdulto = 20;


// valorIngressoAdulto = 30;
// console.log(valorIngressoAdulto);

// Tipos primitivos JS

// Referência

//  let nome = 'Augusto'; //String literal
// let idada = 19; //Numer literal
//  let estaAprovado = true; //boolean (true or false)
//  let sobrenome ; //undefined = não definida
//  let corSelecionada = null; // Redefinir valor para escolha do usuário

// Objetos,Arreys, Functions

// let pessoa = {
//         nome: 'Augusto',
//         idade: 25,
//         estaAprovado: true,
//         altura: 1.87

//         };
// console.log(pessoa);

// Arreys

// let familia = [46,19,70];

// console.log(familia[2]);

// console.log(familia.length);

// let nomeDoColega = ['Zynih', 17, 'Paraná'];

// Função
// Verbo + Substantivo (nomear função)
// let corSite = "Azul";
// function resetaCor(){
//         corSite = "";
// };
// resetaCor();
// console.log(corSite);


// let corSite = "Azul";

// function resetaCor(cor,tonalidade){
//     corSite = cor + " " + tonalidade;
// };
// resetaCor("Verde", "claro")
// console.log(corSite);
//     function dizerNome(){
//         console.log('Jhonathan');
// };
// dizerNome();


// function MutiplicarPorDois(valor){
//     return valor*2;

// };
// let Numero = 5;
// let resultado = MutiplicarPorDois(Numero);
// console.log(resultado);

//     Operadores aritméticos (Matematicos)
//     Operadores de Atribuição
//     Operadores de Comparação
//     Operadores Lógicos
//     Operadores BitWise

//         Aritméticos


//         let salario = 100;

//             //+, -, *, /, **

//         console.log(salario + salario);
//         console.log(5**5);

//             //++ e -- (encremento, decremento)

//                 let idade = 19;
//                 idade++;
//                 console.log(++idade);
//                 console.log(idade++);
//                 console.log(idade);



//         Atribuição
//     let valorTecladoGamer = 100;
//     valorTecladoGamer += valorTecladoGamer; // Short for valorTecladoGamer = ValorTecladoGamer + ValorTecladoGAmer;
//     console.log(valorTecladoGamer);


//         Operadores de igualdade
//         Igualdade restrita

//             console.log( 1 === 1);//Compara valor e tipo - Retorna True or False
//             console.log( 1 === '1') //Retorna False

//             //Igualdade solta

//                 console.log( 1==1 );
//                 console.log (1 == '1'); // Retorna true pois ignora o tipo só compara o valor
                

//             Tem um cliente, 100 pontos = premium, se não = comum


//             let pontos = 101;
//             let tipo = pontos > 100 ? 'Premium' : 'Comum';
//             console.log(tipo);


                //    let i = 5;
                   
                //    while (i >= 1){
                //         if(i % 2 !==0){
                //             console.log(i);
                //         }
                //             i--;
                //    }\



                    //Do.. While

                    // let i = 0;
                    // do {
                    //         console.log("Digitando!", i);
                    //         i++;
                    // } while(i < 10);

                        //For... in

                        // const pessoa = {
                        //             nome: 'Augusto',
                        //             idade: 19
                        //     };
                        
                        //     //chave vem de "key-value" key = nome value = idade
                        //     for(let chave in pessoa){
                        //         console.log(chave,pessoa['nome']);

                        //     }

                            //   const cores = ['Vermelho', 'Azul', 'Verde'];

                        //         for(let indice in cores){
                        //             console.log(indice, cores[indice]);
                        //         }\\
            

                            //const serve para atribuir objetos
                        //     const aluno = {nome: "Augusto", sobrenome: "Azevedo"}
                        //     const notas = {n1:10, n2:9, n3:3.4, n4:6}
                        //     const info = {aluno, notas}
                        //     for(let dado in info){
                        //             console.log(info[dado])
                        //     }

                    //    let notas=[100,23,12,76,54,98,54]
                         
                        //  let aprovados=0;
                        //  let reprovados=0;
                        //  let i = 0; 

                        //     for(let n of notas){
                        //     //    n >= 60?aprovados++: reprovados++
                        //     console.log(notas[i])
                        //     i++
                        //     }
                        //     console.log("Aprovados " + aprovados)
                        //     console.log("Reprovados " + reprovados)

                        //     for of pega os valores sem necessitar de indices

                        //     for(let cor of cores){
                        //         console.log(cor)
                        //     }

                        //     Escreva uma funcao que usa 2 números e retorna o maior entre eles

                        //  function maiorNumero(n1, n2){
                        //            return n1 >n2? n1: n2; 
                        //         }
                        //     console.log(maiorNumero(1,5))
                        // Divisível por 3 => Fizz
                        // Divisível por 5 =>Buzz
                        // Divisível por ambos => FizzBuzz
                        // Não divisível por 3 ou 5 => Retorna a entrada(número)
                        // Se não for um número retorne a mensagem ("Não é um número")
                        // const resultado = fizzBuzz();
                        // console.log(resultado);

                        // function fizzBuzz(entrada){
                        //     if(typeof entrada !== number)
                        //         return 'Não é um número'
                        //     if(entrada % 3 ===0 && entrada % 5 ===0)
                        //         return 'FizzBuzz'
                        //     if(entrada % 5 ===0)
                        //         return "Buzz"
                        //     if(entrada % 3 === 0)
                        //         return "Fizz"
                        //             return entrada;
                        // }
                        // Parou em 1:46:27 https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=5134s


                        //Função radar pra determinar valor da multa
         //Velocidade máxima de até 70
     //A cada 5km acima do limite você ganha 1 ponto
//Caso pontos sejam maior que 12  a carteira é suspendida

// //Constantes  Velocidade    
// const velocidadeMaxima = 70
// const kmPorPonto = 5
// const pontoMaximo = 12


// //Codigo       
// verificarVelocidade()


// function verificarVelocidade(velocidade){
//             if(velocidade <= velocidadeMaxima)
//                 console.log("Ok");
//             else{
//                 const pontos = Math.floor((velocidade - velocidadeMaxima)/kmPorPonto);
//                 if(pontos >= pontoMaximo)
//                     console.log("Carteira suspensa!!")
//                     else
//                         console.log('Pontos', pontos);

// }
// }
    // function exibirTipo(limite){
    //     for (let i =0; i <= limite; i++){
    //         if (i % 2 === 0)
    //             console.log(i, 'Par');
    //         else
    //             console.log(i, 'Impar');
    //     }
    // }
    // exibirTipo()

            
    
    // const filme = {
    //     titulo: 'Vingadores',
    //     ano: 2018,
    //     direto: 'Augusto',
    //     personagem: 'Miranha'
    // }
    // function exibirPropriedades(obj){
    //     for(prop in obj){
    //         if(typeof obj[prop] === 'string')
    //             console.log(prop, obj[prop])
    //     }
    //  }
    //  exibirPropriedades(filme)
        
        // function somar(limite){
        //     let multiplosDe3 = 0;
        //     let multiplosDe5 = 0; 
        //     let resultadoFinal
        //         for(i =0; i<= limite; i++){
        //             if(i % 3 === 0)
        //                 multiplosDe3 += i;
        //                 if(i % 5 === 0)
        //                     multiplosDe5 += i;
        //         }
                
        //         resultadoFinal = multiplosDe3 + multiplosDe5;
        //         console.log(resultadoFinal);
        // }
        //     somar(30)

//         const array = [100];

//        console.log(mediaDoAluno(array));

//        function mediaDoAluno(notas){
//         const media = calcularMedia(array);
//             if(media < 59) return 'F';
//                 if(media < 69) return 'D';
//                     if(media < 79) return 'C';
// //                         if(media < 89) return 'B';
//                          return 'A'
// }
//         function calcularMedia(array){
//             let soma = 0;
//             for(let valor of array){
//                 soma += valor;
//             }
//             return soma/(array.length);
//         }

// Contador de arteriscos
            // exibirAsteriscos(10);
            // function exibirAsteriscos(linhas){
            //     let padrao = ''
            // for(let linha = 1; linha <= linhas; linha++){
            //     padrao += '*'
            //     console.log(padrao);
            //      }
                 //Um jeito de fazer com for
                
                
                
                //Outra maneira de fazer a mesma coisa
                // for(let linha = 1; linha <= linhas; linha++){
                //     let padrao = '';
                //     for(let i = 0; i < linha; i++){
                //         padrao += '*';
                //     }
                //     console.log(padrao);

                // } ***** Nested Loop// For Loop dentro de outro loop
            // }
            
    //             exibiNumerosPrimos(15)
    //             function exibiNumerosPrimos(limite){
    //                 for(let numero = 2; numero <= limite; numero++){
                      
                        
    //                     if(NumeroPrimo(numero)) console.log(numero);
    //                 }
    //             }
        
    // function NumeroPrimo(numero){
    //              for  (let divisor = 2; divisor < numero; divisor++){
    //                         if(numero % divisor === 0){

    //                             return false;
    //                         }
    //              }
    //              return true
    // }

        
    
    // exibiNumerosPrimos(14)
    //     function exibiNumerosPrimos(A_Number){
    //         for(let numero = 2; numero <= A_Number; numero++){
    //             if(ehPrimoF(numero)) console.log(numero);
    //         }
    //     }
    //     function ehPrimoF(numero){
    //         for(let div = 2; div < numero; div++){
    //             if(numero % div === 0){
    //                 return false;
    //             }
    //         }return true
    //     }
     
//Factory Functions//Funções de Fábrica

//JS aula 34
        

        // function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
        //      return{
        //         marcaCelular,
        //         tamanhoTela,
        //         capacidadeBateria,
        //         ligar() {
        //             console.log("Fazendo ligação...")
        //         }
        //     }
        // }  

        // const celular1 = criarCelular('Samsung', 4.9, 4600);
        // console.log(celular1.marcaCelular)
        // console.log("Capacidade de bateria: " + celular1.capacidadeBateria + "mah")

//Pascal Case - On UmDoisTresQuatro

        //     function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
        //         this.marcaCelular= marcaCelular,
        //         this.tamanhoTela = tamanhoTela,
        //         this.capacidadeBateria = capacidadeBateria,
        //         this.ligar = function(){
        //             console.log("Fazendo ligação...")
        //         }
        //     }

        // const celular1 = new Celular('Samsung', 4.9, 4600)
        // console.log(celular1.marcaCelular)
        // console.log("Capacidade de bateria: " + celular1.capacidadeBateria + "mah")



 //Testezin pra ver se eu entendi

        // function pessoa(nome, idade, altura, estadoCivil){
        //     return{
        //         nome,
        //         idade,
        //         altura,
        //         estadoCivil,
        //     }
        // }
        // const estagiario = new pessoa('Augusto', 19, 1.87, 'Solteiro');
        // console.log(estagiario.nome)
        // console.log(estagiario.altura)

            //Aula 36 Js - Natureza dinamica de objetos

//                 const mouse = {
//                     cor : 'white',
//                     marca : 'Logitech'
//                 }
//                 console.log(mouse);
// mouse.velocidade = 5000;
// mouse.trocarDPI = function(){
//     console.log("Mudando DPI")
// }
// delete mouse.velocidade;

//Exemplos de que os objetos tem natureza dinâmica no JS, ou seja, podem ser modificados facilmente

// const celular = {
//     marcaCelular : 'Samsung',
//     tamanhoTela: {
//         vertical: 155,
//         horizontal : 75
//     },
//     ligar: function(){
//         console.log("Fazendo ligação...")
//     }
// }
// const novoObjeto = Object.assign({
//     bateria: 5000
// },celular);


// console.log(novoObjeto);

// //Outra forma de fazer a mesma coisa

// const objeto2 = {...celular};//Spread ou 3 pontos
// console.log(objeto2)

//Math methods (pesquisar google JavaScript math)

// let numeroAleatorio = Math.randon()
// console.log(Math.round (numeroAleatorio))

// Math.max(1,3,4,5)//Retorna o maior valor
//Math.min(1,4,4,2)//Retorna o menor número

//Tipo primitivo
    // const mensagem = 'Blablabla mensagem';

//Tipo objeto

    // const outraMensagem = new String('Bom dia!');

// mensagem = string

// outraMensagem = objeto

//objeto.length - retorna o tamanho da string
// const outraMensagem = new String('Bom dia!');
// console.log(outraMensagem[2])// Retorna 'm' pois é a letra que está nessa posição
// console.log(outraMensagem.includes('Bom'))//Retorna True pois existe o termo 'bom' no objeto
// console.log(outraMensagem.includes('Ababa'))//Retorna false pois não existe esse termo no objeto
// console.log(outraMensagem.startsWith('b'))
