function statsFilter(arr) {
  // types
  let categories = []; //check the types
  let typeCounts = [];
  let typeFrequency = {};

  // total count
  const totalJokes = arr.length;

  arr.forEach((joke) => {
    const type = joke.type;
    typeCounts.push(type);
    if (!categories.includes(type)) {
      categories.push(type);
    }
  });

  arr.forEach((joke) => {
    typeFrequency[joke.type] = (typeFrequency[joke.type] || 0) + 1;
  });
  let types = Object.keys(typeFrequency);

  console.log(totalJokes);
  console.log(categories);
  console.log(typeFrequency);

  localStorage.setItem("totalJokes", JSON.stringify(totalJokes));
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("typeFrequency", JSON.stringify(typeFrequency));
}

function drawStats(arr) {
  statsFilter(arr);

  const tjokes = JSON.parse(localStorage.getItem("totalJokes"));
  const tCategories = JSON.parse(localStorage.getItem("categories"));
  const tFrequency = JSON.parse(localStorage.getItem("typeFrequency"));

  const statsCon = GLOBAL.masterStats;

  const statsDiv = document.createElement("div");
  statsDiv.className = "flex align-center justify-center";
  statsDiv.innerHTML = `
    <div class="bg-gray-700 p-4 rounded-lg shadow-md text-white max-w-7xl mx-auto mt-2">
      <h1 class="text-2xl font-bold mb-2 text-yellow-400">Total jokes: ${tjokes}</h1>
      <p class="text-lg mb-1">Categories: <span class="font-semibold">${tCategories.join(
        ", "
      )}</span></p>
      <p class="text-lg">Types: ${Object.entries(tFrequency)
        .map(
          ([key, value]) =>
            `<span class="font-semibold">${key}</span>: ${value}`
        )
        .join(", ")}</p>
    </div>
    `;

  statsCon.appendChild(statsDiv);
}
