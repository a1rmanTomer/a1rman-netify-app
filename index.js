document.addEventListener("DOMContentLoaded", function () {
  init();
});

// main runtime
function init() {
  if (typeof jokes !== "undefined") {
    try {
      drawStats(jokes);
    } catch (error) {}
    drawJokes(jokes);
    clearTempSel();
  } else {
    // the favorites page loop
    let favPageArr = JSON.parse(localStorage.getItem("favJokes"));

    if (favPageArr.length > 0) {
      try {
        drawStats(favPageArr);
      } catch (error) {}
      drawJokes(favPageArr);
      clearTempSel();
    } else {
      return;
    }
  }
}

// global key defs
const GLOBAL = {
  masterContainer: document.getElementById("master-container"),
  masterStats: document.getElementById("master-stats"),
  favSelectedBtn: document.getElementById("add-selected-to-favorites"),
};

// clear on DOM load
function clearTempSel() {
  tempSelected.splice(0, tempSelected.length);
}

let favs = [];
if (localStorage?.getItem("favJokes")) {
  favs = JSON.parse(localStorage.getItem("favJokes"));
}

let tempSelected = [];
try {
  GLOBAL.favSelectedBtn.addEventListener("click", function () {
    let tempFavLs = JSON.parse(localStorage?.getItem("favJokes")) || [];
    tempSelected.forEach((selJoke) => {
      const currentFavLs = JSON.parse(localStorage.getItem("favJokes")) || [];
      // checking if is already int favs
      if (!currentFavLs.some((favJoke) => favJoke.id === selJoke.id)) {
        tempFavLs.push(selJoke);
        console.log(`Joke [${selJoke.id}] has been mas-added to favorites`);
      } else {
        console.log(
          `Joke [${selJoke.id}] is already in the favorites so it wasn't added.`
        );
      }
    });
    if (tempSelected.length > 0) {
      localStorage.setItem("favJokes", JSON.stringify(tempFavLs));
      tempSelected.splice(0, tempSelected.length);
      drawJokes(jokes);
      Swal.fire({
        title: "Selected Jokes Have Been Added To Favorites!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No jokes have been selected!",
      });
    }
  });
} catch (error) {}

function clearJokes() {
  GLOBAL.masterContainer.innerHTML = "";
}

function clearStats() {
  GLOBAL.masterStats.innerHTML = "";
}

function drawJokes(arr) {
  clearJokes();

  if (!Array.isArray(arr)) return;

  for (let i = 0; i < arr.length; i++) {
    const joke = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getJokeCardHTML(joke);

    const favButton = card.querySelector(`#fav-${joke.id}`);
    favButton.addEventListener("click", function () {
      let isDuplicate = false;
      favs.forEach((item) => {
        if (item.id === joke.id) {
          isDuplicate = true;
        }
      });

      try {
        if (isDuplicate) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This joke is already in the favorites!",
          });
        } else {
          favs.push(joke);
          localStorage.setItem("favJokes", JSON.stringify(favs));

          const newArr = arr;
          newArr.splice(i, 1);
          // drawJokes(newArr);
          Swal.fire({
            title: "Added to favorites!",
            icon: "success",
          });
        }
      } catch (error) {}
    });

    const selectBox = card.querySelector(`#sel-${joke.id}`);
    selectBox.addEventListener("click", function () {
      if (!tempSelected.find((j) => j.id === joke.id)) {
        tempSelected.push(joke);
        console.log(`Joke [${joke.id}] has been selected`);
      }
    });

    const delButton = card.querySelector(`#del-${joke.id}`);
    delButton.addEventListener("click", function () {
      arr.splice(i, 1);
      drawJokes(arr);
      const strFavs = JSON.stringify(localStorage.getItem("favJokes"));
      try {
        if (strFavs.includes(`${joke.id}`)) {
          localStorage.setItem("favJokes", JSON.stringify(arr));
        }
        clearStats();
        drawStats(arr);
        Swal.fire({
          title: "Joke removed successfully!",
          icon: "success",
        });
      } catch (error) {}
    });

    GLOBAL.masterContainer.appendChild(card);
  }
}
