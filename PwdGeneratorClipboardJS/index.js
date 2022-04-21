
let label1 = document.getElementById("label1").value
let label2 = document.getElementById("label2").value
let label3 = document.getElementById("label3").value
let label4 = document.getElementById("label4").value
let passwordOpt =[]

function generatePassword(){
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','(',')','_']
    let passwordLength = document.getElementById("pwdlen").value    
    
    
    for (let opt = 0; opt < 4; opt++){
        let passWord =""
        for (let i = 0; i < passwordLength; i++){            
            randomNum = Math.floor(Math.random() * chars.length)
            passWord += chars[randomNum]               
        }
        passwordOpt[opt] = passWord        
    }
           
    label1 = passwordOpt[0]   
    document.getElementById("label1").value = label1
    
    label2 = passwordOpt[1]
    document.getElementById("label2").value = label2
    
    label3 = passwordOpt[2]
    document.getElementById("label3").value = label3
    
    label4 = passwordOpt[3]
    document.getElementById("label4").value = label4
 }
 
 function copyPwd(elem) {
    let passwordX = passwordOpt[elem.id]
    console.log(passwordX)
   
    navigator.clipboard.writeText(passwordX)
    
    alert("Copied " + passwordX)
 }