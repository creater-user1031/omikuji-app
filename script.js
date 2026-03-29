const button = document.getElementById("drawButton");
const fortune = document.getElementById("fortune");
const wishInput = document.getElementById("wishInput");

button.addEventListener("click", function () {
    const wish = wishInput.value;

    fortune.textContent = "あなたの願い：「" + wish + "」";

    if (wish === "") {
        fortune.textContent = "願い事が記載されていないため、おみくじを引くことができませんでした。";
        return;
    }
})