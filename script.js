// Script.js 
// Create a new QRCode instance 
let qrcode = new QRCode(document.querySelector(".qrcode")); 

// Initial QR code generation with a default message 
qrcode.makeCode("Why did you scan me?"); 

// Function to generate QR code based on user input 
function generateQr() { 
    const input = document.querySelector("#multi-line-input").value.trim();
    if (input === "") { 
        alert("Input Field Cannot be blank!"); 
    } else { 
        qrcode.makeCode(input); 
    }
}
