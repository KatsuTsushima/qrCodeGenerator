const qrTextInput = document.getElementById("qrTextInput");
const qrImg = document.getElementById("qrImg");
const qrImage = document.getElementById("qrImage");
const qrBtn = document.getElementById("qrBtn");
const errorMessage = document.getElementById("errorMessage");

const createQrCodeByClick = () => {
	let qrCode = qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= + ${qrTextInput.value}`;
	if(qrTextInput.value !== ""){
		qrCode;
		qrImg.style.display = "block";
	} else {
		qrTextInput.classList.add("error");
		errorMessage.style.display = "block";
		setTimeout(()=>{
			qrTextInput.classList.remove("error");
			errorMessage.style.display = "none";
		},1325)
	}
}

qrBtn.addEventListener("click", createQrCodeByClick);


// qrBtn.addEventListener("click", createQrCodeAfterClick);

