document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome");
    const configScreen = document.getElementById("config");
    const kidsScreen = document.getElementById("kids");

    const enterBtn = document.getElementById("enterBtn");
    const startBtn = document.getElementById("startBtn");

    const videoContainer = document.getElementById("videoContainer");
    const icons = document.querySelectorAll(".icon");

    const childAge = document.getElementById("childAge");
    const ageDisplay = document.getElementById("ageDisplay")

    childAge.addEventListener("input", () => {
        const months = parseInt(childAge.value);
        let displayText = "";

        if(months < 12){
            displayText = `${months} meses.`
        }else{
            const years = Math.floor(months / 12);
            displayText = `${years} ano(s).`;
        }
          ageDisplay.innerHTML = `<span class="number">${displayText.split(' ')[0]}</span> ${displayText.split(' ')[1]}`;
    })

    screenTime.addEventListener("input", () => {
        const totalHours = parseFloat(screenTime.value);
        const hours = Math.floor(totalHours);
        const minutes = Math.round((totalHours - hours) * 60); // arredonda pra evitar decimais

        let display = "";
        if(hours > 0) display += `${hours}h `;
        if(minutes > 0) display += `${minutes} minutos`;
        if(hours === 0 && minutes === 0) display = "0 minutos";

        timeDisplay.textContent = display;
    });
    
    enterBtn.addEventListener("click", () => {
        welcomeScreen.classList.remove("active")
        configScreen.classList.add("active")
    });

    startBtn.addEventListener("click", () => {
        const nome = document.getElementById("childName").value;
        const idade = document.getElementById("childAge").value;
        const tempo = document.getElementById("screenTime").value;

        if(!nome) {
            alert("Preencha o nome!")
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

    const thumbnails = document.querySelectorAll(".videoThumbnails img");
    const mainVideo = document.getElementById("mainVideo");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            mainVideo.src = thumb.dataset.video;
        })
    })

    const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    document.getElementById("kids").classList.add("active");
    document.getElementById("videoContainer").classList.add("hidden");
});
})