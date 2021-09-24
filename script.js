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

 case'japão':
  case'japao':
  case'Japao':
  case'Japão':
 pais.value = "japan";
 console.log("japan");
 break;

 case 'holanda':
 case "Holanda":    
 pais.value = "Netherlands";
 console.log("alemanha");
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
 break 
 

default:
 console.log(`Sorry, we are out of .`);
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
                  
                  
                  

                   bands.src = obj[0].flag;
                   
                   nomePais.innerHTML ="Nome: "+ obj[0].name; //obj[0].altSpellings[3];
                   capital.innerHTML ="Capital: "+ obj[0].capital;
                   idioma.innerHTML ="Idioma: "+ obj[0].languages[0].nativeName;
                   traducao.innerHTML ="Tradução: "+ obj[0].translations.br;
                   regiao.innerHTML ="Região: "+ obj[0].subregion;
                   
                   
                   
                   document.getElementById('pais').value = ""; //limpado os campo apos receber os dados
               }
               if (XHR.status == 404) {   //Se o Pais nao tiver na base de dados retorna a mensagem de erro abaixo    
               alert("Este Pais: " + pais.value + " Nâo foi encontrado,digite um pais valido! ");
               //base de dados nao reconhece escocia,irlanda e outros como paises, esta tudo  dentro de reino unido 
           }
          

           } 
       }



       var url = 'https://restcountries.eu/rest/v2/name/'+ pais.value;

       XHR.open("GET", url);

       XHR.send();


   }
