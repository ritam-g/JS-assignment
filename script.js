/**============================================
 *!               HANDALLING EXCEPTION WITH PROMPT
 *=============================================**/
let age=prompt("Enter your age: ");
if(age===null){
    console.log("your canceled");
}
else{
    if(age.trim().length ===0){
        console.log("please enter something dont enter with out writing anything");
    }
    else{
        if(isNaN(age)){
            console.log("pleae enter number not String ");
        }
        else{
            if(age.trim()>=18&& age.trim()<=80){
                console.log("lyour are eligible fo vote");
                
            }
            else{
                console.log("you are not eligible for vote");
                
            }
        }
    }
    
}