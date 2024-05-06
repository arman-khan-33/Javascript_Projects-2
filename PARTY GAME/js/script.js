let selectPlayerBox = document.getElementById("selectPlayer")
let nextBtn = document.getElementById("nextBtn")
let enterButton = document.getElementById("enterButton")
let enteredName = document.getElementById("enteredName")
let playersBox = document.querySelector(".playersBox")

let value = 0;
let playerNoCount = 1;
let isChecked = false
let names = []


function showSelectPlayerBox() {
    selectPlayerBox.style.top = "-250px"
}

nextBtn.addEventListener("click", () => {
    document.getElementsByName("select_name").forEach((radioBtn) => {
        if (radioBtn.checked) {
            isChecked = true
            enterButton.addEventListener("click", () => {
                playerNoCount = playerNoCount + 1;
                if (enteredName.value !== "") {
                    document.getElementById("playerCount").innerHTML = `Enter Player ${playerNoCount}'s Name.`
                    value = value + 1
                    names.push(enteredName.value)
                    if (value < radioBtn.value) {
                        enteredName.value = ""
                    } else {
                        playersBox.style.display = "none";

                        document.getElementById("load").style.display = "block"
                        let randomName = Math.floor(Math.random() * names.length)

                        setTimeout(() => {
                            document.getElementById("load").style.display = "none"
                            document.getElementById("winner").innerHTML = names[randomName]

                        }, 3000)
                        console.log(names[randomName]);
                    }
                }
            })


            if (radioBtn.checked) {
                setTimeout(() => {
                    playersBox.style.display = "flex"
                }, 800)
            }
        }
    })
    if (isChecked === false) {
        document.querySelectorAll(".select").forEach((selectBtn) => selectBtn.classList.add("error"))
        setTimeout(() => {
            document.querySelectorAll(".select").forEach((selectBtn) => selectBtn.classList.remove("error"))
        }, 1000)
    } else {
        selectPlayerBox.style.top = "-1000px"
    }
})



// ! Confetti Effect ------------------------------------------------------------------------------------------
