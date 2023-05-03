const show = document.querySelector("#show");

show.addEventListener("click", ()=> {
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName")
    const fullName = document.createElement("h1");
    fullName.textContent = firstName.value +  " " + lastName.value;

    show.insertAdjacentElement("afterend", fullName);
})