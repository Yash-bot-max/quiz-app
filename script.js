const range = document.querySelector(".range")
const value = document.querySelector(".value")
const upper = document.querySelector(".uppercase")
const lower = document.querySelector(".lowercase");
const num = document.querySelector(".numbers");
const sym = document.querySelector(".symbol");
const Generate = document.querySelector(".generate");
const Password = document.querySelector(".password");
const Copy = document.querySelector(".copy");
const Strength = document.querySelector(".strength")
const empty = document.querySelector(".empty")
const copied = document.querySelector(".copied")
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()"

range.addEventListener("input", () => {
    value.innerHTML = range.value

})
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard successfully!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }

}

function generateCharacters() {
    let characters = ""
    // let password = ""
    if (upper.checked) {

        characters = characters + uppercase
    }
    if (lower.checked) {

        characters = characters + lowercase
    }
    if (num.checked) {

        characters = characters + numbers
    }
    if (sym.checked) {

        characters = characters + symbols
    }
    if (characters === "") {
        alert("Please Checked these Checkbox")
        return null
    }
    return characters

}

function generatePassword() {
    let password = ""
    if (upper.checked) {
        // password="A"
        let randomIndex = Math.floor(Math.random() * uppercase.length)
        password += uppercase[randomIndex]
    }
    if (lower.checked) {
        // password="Aa"
        let randomIndex = Math.floor(Math.random() * lowercase.length)
        password += lowercase[randomIndex]
    }
    if (num.checked) {
        // password="Aa0"
        let randomIndex = Math.floor(Math.random() * numbers.length)
        password += numbers[randomIndex]
    }
    if (sym.checked) {
        // password="Aa0#"
        let randomIndex = Math.floor(Math.random() * symbols.length)
        password += symbols[randomIndex]
    }
    const characterSet = generateCharacters();
    if (!characterSet) {
        return
    }
    const remainingLength = range.value - password.length;
    for (let index = 0; index < remainingLength; index++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length)
        password += characterSet[randomIndex];
    }
    return password
}
function checkStrength(password) {
    let score = 0;
    if (upper.checked) {
        score++
    }
    if (lower.checked) {
        score++
    }
    if (num.checked) {
        score++;
    }
    if (sym.checked) {
        score++;
    }
    if (password.length >= 12) {
        score += 2;
    }
    else if (password.length >= 8) {
        score++;
    }
    return score
}

function emptyPassword() {
    empty.style.display = "block"
    setTimeout(() => {
        empty.style.display = "none"
    }, 1000);
}

function copiedText() {
    copied.style.display = "block"
    setTimeout(() => {
        copied.style.display = "none"
    }, 1000);


}

Generate.addEventListener("click", () => {
    const Finalpassword = generatePassword()
    if (!Finalpassword) {
        return;
    }
    const securePass = Finalpassword.split("");
    for (let index = 0; index < securePass.length; index++) {
        let randomIndex = Math.floor(Math.random() * securePass.length);

        [securePass[index], securePass[randomIndex]] =
            [securePass[randomIndex], securePass[index]];
    }
    const shuffledPassword = securePass.join("");
    Password.value = shuffledPassword;


    const strengthCal = checkStrength(shuffledPassword);
    if (strengthCal <= 2) {
        Strength.innerHTML = "Weak🟥⬜⬜";
        Strength.style.color = "red";
    } else if (strengthCal <= 4) {
        Strength.innerHTML = "Medium🟨🟨⬜"
        Strength.style.color = "#3f00ff"
    } else if (strengthCal <= 6) {
        Strength.innerHTML = "Strong🟩🟩🟩"
        Strength.style.color = "Green"
    }


})
Copy.addEventListener("click", () => {
    if (Password.value === "") {
        emptyPassword()
        return;
    }
    copiedText()
    copyToClipboard(Password.value)


})


























































// const generateBtn = document.querySelector(".generate")
// const passwordCharacter = document.querySelector(".character")
// function generatePassword(length = 16){
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password = ""
//     for (let index = 0; index <= length; index++) {
//         let random = Math.floor(Math.random()*charset.length)
//         let s = charset[random]
//         password=password + s
//     }
//    return password
// }
// generateBtn.addEventListener("click",()=>{
//     let call = generatePassword()
//     passwordCharacter.innerHTML = call
// })