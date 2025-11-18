import { footer } from "./footer.mjs";
footer();

const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    pn.classList.toggle('hidden');
});

import { reviews } from "./reviews.js";

// Correct variable name
const htmlEL = document.querySelector('#reviewsHere');

// Loop through each review and create a box
reviews.forEach((r) => {

  const rSection = document.createElement('section');
  rSection.className = "p-4 border border-mygray-40 rounded bg-mygray-0 mb-4 shadow-sm";

  // Correct names
  const theName = document.createElement('h2');
  theName.className = "text-2xl font-handwrite mb-2";
  theName.textContent = r.name;

  const theStars = document.createElement('div');
  theStars.className = "flex mb-2";

  for (let i = 0; i < 5; i++) {
    const starImage = document.createElement('img');
    starImage.src = i < r.stars ? "starColor.jpg" : "starGray.svg";
    starImage.alt = i < r.stars ? "filled star" : "empty star";
    starImage.className = "w-4 mr-1";
    theStars.appendChild(starImage);
  }

  const theComment = document.createElement('p');
  theComment.textContent = r.review;
  theComment.className = "text-mygray-80 font-handwrite";

  rSection.appendChild(theName);
  rSection.appendChild(theStars);
  rSection.appendChild(theComment);

  // FIXED typo (htmlEL instead of htmlEl)
  htmlEL.appendChild(rSection);
});
