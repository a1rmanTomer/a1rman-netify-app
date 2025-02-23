// card inner html
function getJokeCardHTML(jc) {
  return `
    <div id="joke-card-${jc.id}" class="group relative h-96 w-72 [perspective:1000px] rounded-xl">
      <div
        class="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div
          class="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
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
              <p class="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

        <div
          class="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <div class="flex flex-col h-full">
            <div class="text-2xl font-bold mb-4">Answer</div>
            <div class="flex-grow">
              <p class="text-lg">
                ${jc.punchline}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <div>
                <label id="sel-${jc.id}" class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div
                    class="w-8 h-8 rounded-lg bg-white border-2 border-orange-300 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-pink-500 to-yellow-400 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  </div>
                  <span class="ml-3 text-sm font-semibold text-yellow-300">Select</span>
                </label>
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
    </div>
    `;
}
