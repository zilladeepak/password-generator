const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdOne = document.getElementById("pswd-one")
let pswdTwo = document.getElementById("pswd-two")

function pswdBtn(){
    pswdOne.textContent = pswdGen()
    pswdTwo.textContent = pswdGen()
}

function pswdGen(){
    let pswdlengthEl = Number(document.getElementById("pswd-length").value)
    let password = ""
    for(let i=0; i<pswdlengthEl; i++){
        let char =  characters[Math.floor(Math.random()*characters.length)]
        password += char
    }
    return password
}




    



