const id = "1547BR487"
const id2 = "547BACKROOMS547154"

let id_password = prompt("enter password :    " )

if (id_password === id) {
    console.log(true);
    alert("Your login was successful. Logging in...⭕⚜")
    window.location.href="enter not erorr.html"
}
else if (id_password === id2){

    console.log(true)
    alert("Your login was successful. Logging in...⭕⚜")
    window.location.href="file.html"
}
else{
    console.log(false)
    alert("The password was entered incorrectly. Please go back and try again.")
    window.location.href="index.html"
}
