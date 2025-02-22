// card inner html
function getJokeCardHTML(jc) {
  return `
      <div id="" class="group relative h-96 w-72 [perspective:1000px] rounded-xl cursor-pointer">
        <div class="card-inner absolute duration-1000 w-full h-full [transform-style:preserve-3d]">
          <div class="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
            <div class="flex flex-col h-full">
              <div class="flex justify-between items-start">
                <div class="text-3xl font-bold">${jc.type}</div>
                <div class="text-3xl">🌟</div>
              </div>
              <div class="mt-4">
                <p class="text-lg">
                  ${jc.setup}
                </p>
              </div>
              <div class="mt-auto">
                <p class="text-sm opacity-75">Click to flip!</p>
              </div>
            </div>
          </div>
  
          <div class="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <div class="flex flex-col h-full">
              <div class="text-2xl font-bold mb-4">Answer</div>
              <div class="flex-grow">
                <p class="text-lg">
                  ${jc.punchline}
                </p>
              </div>
              <div class="flex justify-between items-center mt-auto">
                <button id="fav-${jc.id}"
                  class="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Favorite
                </button>
                <button id="del-${jc.id}"
                  class="px-4 py-2 bg-white text-red-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Delete
                </button>
                <span class="text-3xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.closest(".group")) {
      event.target
        .closest(".group")
        .querySelector(".card-inner")
        .classList.toggle("[transform:rotateX(180deg)]");
    }
  });
});
