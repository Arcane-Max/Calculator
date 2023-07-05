let result = document.getElementById("result");
let results = document.getElementById("results");

const remove = document.getElementById("delete");
const equal = document.getElementById("equal");
const AC = document.getElementById("delall");

const allbtn = document.querySelectorAll("button");

allbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        result.innerText += btn.innerText
    })
})

remove.addEventListener("click", () => {
    result.innerText = result.innerText.slice(0, result.innerText.length - 1);
})
equal.addEventListener("click", () => {
    try {
        let value = eval(result.innerText);
        results.innerText += result.innerText + " = " + value + "\n";
        result.innerText = "";
    } catch (error) {
        results.innerText = "Error\n";
        result.innerText = "";

    }
})
AC.addEventListener("click", () => {
    result.innerText = "";
})