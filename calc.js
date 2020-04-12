var switched;/* parametre pour verifier si le cal est allumé */
var newEntry; /* parametre pour verifier si on vas entrer un nouveau entier */
var operMath; /* parametre pour savoir quel operation à effectuer */
var oldVal=""; /* parametre pour enregistrer le premier facteur de l' operation math.*/
var newVal="";
/* fonction pour switch on le calc */
document.getElementById("switch").addEventListener('click',switchOn);
function switchOn(){
    document.getElementById("afficheur").value="0";
    switched = true;
    oldVal="";
}
 
// fonction lors de clique d ' un entier 0--9
function getNbr(clicked_id)
{
        if (switched) {
            var x;
            if(clicked_id=="dot")
            {
                clicked_id=".";
            }
            
            if(newEntry==false) {
                x=document.getElementById("afficheur").value + clicked_id;
            }
            else {
                x= clicked_id;
                newEntry=false;
            }
            if (x[0]=="0" && x[1]!="." && x.length>1) {
               x=x.substr(1);
            }
            if (parseFloat(x)==0) {
                x="0";
             }
            document.getElementById("afficheur").value =x;
        }  
}
// racine carré
document.getElementById("racine").addEventListener('click',racine);
function racine(){

    var racineCarre = parseFloat(document.getElementById("afficheur").value);
    if (switched&&racineCarre>0)
         {
    racineCarre = Math.sqrt(racineCarre);
    document.getElementById("afficheur").value=racineCarre;
    newEntry=true;
          }
}
/* supprime des carateres */
document.getElementById("del").addEventListener('click',supprimer);
function supprimer(){
  
    var supp = document.getElementById("afficheur").value;
    
    supp=supp.substr(0,supp.length-1);
    document.getElementById("afficheur").value = supp ;
   
}
/*operations mathematiques standards*/

function operation(clicked_id){
       var resultat;
       if (oldVal!="") {
            newVal = document.getElementById("afficheur").value ;
                  if (operMath=="add") {
                     resultat =parseFloat(oldVal)  + parseFloat(newVal);
                  }
                  if (operMath=="subs") {
                    resultat =parseFloat(oldVal)  - parseFloat(newVal);
                  }
                  if (operMath=="mult") {
                    resultat =parseFloat(oldVal)  * parseFloat(newVal);
                  }
                  if (operMath=="divi") {
                    resultat =parseFloat(oldVal)  / parseFloat(newVal);
                  }
            
            document.getElementById("afficheur").value = resultat.toString();
            operMath = clicked_id;
            oldVal = document.getElementById("afficheur").value;
            newEntry= true;
          
       }
       else {
            oldVal = document.getElementById("afficheur").value;
            operMath = clicked_id;
            newEntry= true;
       } 
     
}
/*valeur oposetif */
document.getElementById("oposetif").addEventListener('click',moins);
function moins(){
    if (switched) {
        var m =0-parseFloat(document.getElementById("afficheur").value);
        document.getElementById("afficheur").value = m.toString() ;
    }
    
   
}