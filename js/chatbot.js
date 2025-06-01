document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.querySelector(".chat");
    const chatBot = document.querySelector(".chat_bot");

    chatBtn.addEventListener("click", function () {
        chatBot.classList.toggle("on");
    });

});