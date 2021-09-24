function inicializa() {
       var bt = document.getElementById("botao");
       bt.onclick = abreURL;
   }
   function abreURL() {
       var pais = document.getElementById("pais");

  switch (pais.value) {
case 'alemanha':
case 'Alemanha':    
 pais.value = "german";
 console.log("alemanha");
 break;
                
case 'França':
case 'frança':    
 pais.value = "République française";
 console.log("frança");
 break;


 case'japão':
  case'japao':
  case'Japao':
  case'Japão':
 pais.value = "japan";
 console.log("japan");
 break;



 case 'romenia':
 pais.value = "romania";
 console.log("romenia");
 break;
 case'afeganistão':
 pais.value="Afghanistan";
 break;
 case'Turquia':
 pais.value="turkey";
 break;
 case 'Inglaterra':
 pais.value= "United Kingdom";
 break;
 case 'iraque':
 case'Iraque':
 pais.value="iraq";
 break; 
 

/*default:
 alert(`Desculpe!pais não encontrado,por favor reporte este erro .`);*/
}


       if (pais.value == "") {
           alert("Preencha um pais corretamente na caixa de texto!");
           return;
       }
       var XHR = new XMLHttpRequest();
       XHR.onreadystatechange = function () {
           if (XHR.readyState == 4) {


               let table = document.getElementById("myTable");


              
               let bands = document.getElementById('band');
                let nomePais = document.getElementById('oPais');
                let idioma = document.getElementById('idioma');
                let capital = document.getElementById('capital');
                let traducao = document.getElementById('traducao');
                let regiao = document.getElementById('regiao');




               if (XHR.status == 200) {
                  

                   var obj = JSON.parse(XHR.responseText);
                   console.log(obj);
                   document.getElementById("myTable").style.display = "block";
                  
                 //Se o Pais nao tiver na base de dados retorna a mensagem de erro abaixo 
                      
                 if (obj.status == 404) {   
               alert("Este Pais: " + pais.value + " Nâo foi encontrado, Digite um pais valido! ");
               //base de dados nao reconhece escocia, e outros como paises, esta tudo  dentro de reino unido 
                         document.getElementById("myTable").style.display = "none"

           }
                  
                  
                  

              /* codigo bd v2 
                    bands.src = obj[0].flags[0];                   
                   nomePais.innerHTML ="Nome: "+ obj[0].name; //obj[0].altSpellings[3];
                   capital.innerHTML ="Capital: "+ obj[0].capital;
                   idioma.innerHTML ="Idioma: "+ obj[0].languages[0].nativeName;
                   traducao.innerHTML ="Tradução: "+ obj[0].translations.br;
                   regiao.innerHTML ="Região: "+ obj[0].subregion;
                   */
                      
                      /*Codigo bd v3*/
                       bands.src = obj[0].flags[0];
                        nomePais.innerHTML ="Nome: "+ obj[0].name.common;
                        capital.innerHTML ="Capital: "+ obj[0].capital;
                        idioma.innerHTML ="Idioma: "+JSON.stringify(obj[0].languages);
                        traducao.innerHTML ="tradução: "+ obj[0].translations.por.common;
                      regiao.innerHTML = "Região: " + obj[0].subregion;
                   
                   
                   
                   document.getElementById('pais').value = ""; //limpado os campo apos receber os dados
               }
             
          

           } 
       }



       var url = 'https://restcountries.com/v3/translation/'+ pais.value;

       XHR.open("GET", url);

       XHR.send();


   }
