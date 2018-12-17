/*

What are you doing here?  There's nothing to see here, move along.
This is tacky code for a tacky website strung together in one coffee fueled evening ¯\_(ツ)_/¯

*/

document.addEventListener("DOMContentLoaded", () => {
  // Lights
  const lightsUL = document.querySelector(".lightrope");
  const LIGHT_WIDTH = 12;
  const numLights = Math.ceil(window.innerWidth / LIGHT_WIDTH);
  for (let i = 0; i <= numLights; i++) {
    lightsUL.appendChild(document.createElement("li"));
  }

  //Snowflakes
  const snowFlakesContainer = document.querySelector(".snowflakes");
  const numSnowflakes = 10;
  for (let i = 0; i <= numSnowflakes; i++) {
    let foo = `<div class="snowflake">❄</div>`;
    snowFlakesContainer.innerHTML += foo;
  }

  // Event Listeners for present boxes
  const presents = document.querySelectorAll(".present");
  presents.forEach(present => {
    present.onmouseover = () => {
      if (!present.classList.contains("is-open")) {
        present.classList.add("is-open");
      }
    };
    present.onmouseout = () => {
      if (present.classList.contains("is-open")) {
        present.classList.remove("is-open");
      }
    };
  });

  const presentImages = document.querySelectorAll(".present img");
  const Present = {
    cat: "cat",
    cake: "cake",
    elf: "elf",
    naughtyOrNice: "naughtyOrNice"
  };
  presentImages.forEach(present => {
    present.addEventListener("click", function() {
      switch (this.dataset.present) {
        case Present.cat:
          window.open(
            "https://www.pinterest.com/licatskittens/christmas-kitties/",
            "_blank"
          );
          break;
        case Present.cake:
          window.open(
            "https://www.foodnetwork.com/recipes/alton-brown/free-range-fruitcake-recipe-1926833",
            "_blank"
          );
          break;
        case Present.elf:
          window.open(
            "https://en.wikipedia.org/wiki/Elf_(Middle-earth)",
            "_blank"
          );
          break;
        case Present.naughtyOrNice:
          const rnd = Math.floor(Math.random() * 10) + 1;
          const answer = rnd === 1 ? "Nice" : "Naughty";
          alert(answer);
          break;
      }
    });
  });

  // Anchor tag event listener
  document.querySelector("#lies").addEventListener("click", () => {
    alert(
      `Stopping music requires a subscription to our Holiday Plus Plan.  Please upgrade your plan to unlock this feature.`
    );
  });
});
