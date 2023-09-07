let qrcode = select("img");
let qrtext = document.getElementById("result") ;
let generateBtn = select("button");
let downloadBtn = select("a");


generateBtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
  downloadBtn.href = url;
  qrtext.value = "";
}

function select(el) {
  return document.querySelector(el);
}


function clearScreen() {
 document.getElementById("result").value = "";
}

//function display values
function display(value ) {

document.getElementById("result").value += value ;

}

//function get user input
function fn1()
{
	
var name = document.getElementById("text1").value ;
var phone = document.getElementById("text2").value ;
var time = document.getElementById("text3").value ;
var hour = document.getElementById("text4").value ;
var full = ' ' + name + ' ' + phone + ' ' + time + ' ' + hour ;

display(full);


}


