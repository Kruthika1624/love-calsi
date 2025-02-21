function calculateLoveScore() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML = "Please enter both names!";
        return;
    }

    var loveScore = Math.floor(Math.random() * 100) + 1; // Random 1-100
    var hearts = "❤️".repeat(Math.floor(loveScore / 100)); // 1 heart per 10%

    document.getElementById("result").innerHTML = `
        ${hearts} <br>
        ${name1} ❤️ ${name2} <br>
        Love Score: <strong>${loveScore}%</strong>
      `;
}