document.getElementById("calculate-btn").addEventListener("click", showPopUp)

function showPopUp() {
    document.getElementById("pop-up-div").style.display = "block";
    let value = Math.floor(Math.random() * 100)
    document.getElementById("generated-value").innerText = value + "%";
    console.log(value);
    console.log("clicked btn");
}

document.getElementById("check-again-btn").addEventListener("click", hidePopUp)
document.getElementById("closeIcon").addEventListener("click", hidePopUp)

function hidePopUp() {
    document.getElementById("pop-up-div").style.display = "none";
    console.log("clicked btn");
}