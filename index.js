const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        userResult.src = cpuResult.src = "images/Rock.png";
        result.textContent = "Wait.."
        optionImages.forEach((image2,index2) => {
            index !==index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/Rock.png","images/Paper.png","images/Scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];
            let outcomes = {
                RR: "Draw",
                PP: "Draw",
                SS: "Draw",
                RP: "User",
                RS: "Cpu",
                PR: "Cpu",
                PS: "User",
                SR: "User",
                SP: "Cpu",
            };
            let outComeValue = outcomes[cpuValue + userValue];
            result.textContent = userValue === cpuValue ? "Draw" :`${outComeValue}Won!!`;
        },2500)
    });
});