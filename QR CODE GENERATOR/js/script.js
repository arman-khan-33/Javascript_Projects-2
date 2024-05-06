let imageBox = document.getElementById("imageBox")
let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("image")


document.getElementById("generate_btn").addEventListener("click", () => {
    if (qrText.value !== "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        imageBox.classList.add("showImage")
    } else {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000)
    }
})