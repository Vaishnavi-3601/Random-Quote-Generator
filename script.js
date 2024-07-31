const quotes = [
    "The ocean covers more than 70% of the Earth's surface.",
    "The Mariana Trench is the deepest part of the ocean, reaching a depth of about 36,000 feet.",
    "More than 80% of the ocean is unexplored and unmapped.",
    "The Great Barrier Reef is the largest living structure on Earth, visible from space.",
    "There are more artifacts and remnants of history in the ocean than in all of the world’s museums combined.",
    "Oceans produce over half of the world's oxygen and absorb 50 times more carbon dioxide than our atmosphere.",
    "The ocean contains nearly 200,000 different known species, but the actual number could be in the millions.",
    "The ocean regulates the Earth’s climate by absorbing solar radiation and distributing heat.",
    "Phytoplankton, tiny ocean plants, are responsible for producing 70% of the Earth’s oxygen.",
    "There are underwater lakes and rivers in the ocean, formed by saline brine.",
    "The ocean's currents and tides are influenced by the gravitational pull of the moon and sun.",
    "The ocean is home to the world’s largest animal, the blue whale, which can grow up to 100 feet long.",
    "More than 90% of the trade between countries is carried by ships across the ocean.",
    "The ocean is becoming more acidic due to increased levels of carbon dioxide, affecting marine life.",
    "Plastic pollution is a major issue, with millions of tons of plastic waste entering the ocean each year."
];

const generateBtn = document.getElementById("buttonGenerate");
const quote = document.querySelector(".quotesss");

generateRandomNumber = () => {
    return Math.floor(Math.random()*quotes.length);
}
generateBtn.addEventListener("click", () =>{
    quote.textContent = quotes[generateRandomNumber()];
})