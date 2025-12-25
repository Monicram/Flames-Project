function calculateFlames() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, "");

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common letters
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
                i--;
                break;
            }
        }
    }

    let count = arr1.length + arr2.length;

    let flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    document.getElementById("result").innerText = "Result: " + flames[0];
}
