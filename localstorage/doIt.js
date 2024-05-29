const user_input = document.getElementById("name-input");
const username = document.getElementById("name");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    localStorage.setItem("name",user_input.value);

    username.innerText=localStorage.getItem("name");
});