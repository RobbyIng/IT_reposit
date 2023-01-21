let moods = [
    "cloud-sun-rain",
    "smog",
    "sun",
    "bolt",
    "poo-storm",
    "tornado",
    "moon",
    "cloud-moon",
    "icicles",
]
const getNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);
const getColor = () => {
    let r = getNumber(256);
    let g = getNumber(256);
    let b = getNumber(256);
    return `rgb(${r},${g},${b})`;
}

let wrapper = document.createElement("div");
wrapper.className = "wrapper";

document.body.innerText = "";
document.body.append(wrapper);

for (let mood of moods) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<i class="fa-solid fa-${mood}"></i>`;
    card.style.backgroundColor = getColor();
    wrapper.append(card);
}


console.log("Привет! Как дела?".substring(8));

console.log("Привет! Как дела?".substring(-9));
console.log("Привет! Как дела?".slice(8));
console.log("Привет! Как дела?".slice(-9));

console.log([4, 10, 1, "text"].sort());