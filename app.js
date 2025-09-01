document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome");
    const configScreen = document.getElementById("config");
    const kidsScreen = document.getElementById("kids");

    const enterBtn = document.getElementById("enterBtn");
    const startBtn = document.getElementById("startBtn");

    const videoContainer = document.getElementById("videoContainer");
    const icons = document.querySelectorAll(".icon");
    
    enterBtn.addEventListener("click", () => {
        welcomeScreen.classList.remove("active")
        configScreen.classList.add("active")
    });

    startBtn.addEventListener("click", () => {
        const nome = document.getElementById("childName").value;
        const idade = document.getElementById("childAge").value;
        const tempo = document.getElementById("tempoTela").value;

        if(!idade || !tempo || !nome) {
            alert("Preencha todos os campos!")
            return;
        }

        
       configScreen.classList.remove("active");
       kidsScreen.classList.add("active");
    });

    icons.forEach((icon) => {
        icon.addEventListener("click", () => {
           const action = icon.getAttribute("data-action");

           if(action === "desenhos") {
            videoContainer.classList.remove("hidden");
            kidsScreen.classList.remove("active");
           }else{
            alert(`Sessão ${action} ainda em construção!`)
           }
        });
    });
})