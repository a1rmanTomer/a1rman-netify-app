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
  // display the types

  // need to draw it
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

  const container = GLOBAL.masterContainer;

  const statsDiv = document.createElement("div");
  statsDiv.className = "flex align-center justify-center";
  statsDiv.innerHTML = `
    <div>
      <h1>Total jokes: ${tjokes}</h1>
      <h1>Categories: ${tCategories}</h1>
      <h1>Frequency: ${JSON.stringify(tFrequency)}</h1>
    </div>
  `;

  container.appendChild(statsDiv);
}
