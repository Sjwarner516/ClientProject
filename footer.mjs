export function footer() {

    const footerEl = document.querySelector("footer");

    const social = document.createElement('section');
    social.className = "flex justify-evenly py-4 bg-gray-20";

    // Facebook
    const face = document.createElement('a');
    face.href = "#";
    face.target = "_blank";
    face.className = "w-10 h-10 p-2 rounded-full bg-pink-200 shadow-md border-2 hover:bg-gray";
    const faceImg = document.createElement('img');
    faceImg.src = "facebook.svg";
    faceImg.alt = "facebook icon";
    faceImg.className = "size-full";
    face.appendChild(faceImg);
    social.appendChild(face);

    // Instagram
    const insta = document.createElement('a');
    insta.href = "#";
    insta.target = "_blank";
    insta.className = "w-10 h-10 p-2 rounded-full bg-pink-200 shadow-md border-2 hover:bg-mygray-500";
    const instaImg = document.createElement('img');
    instaImg.src = "instagram-logo-thin.svg";
    instaImg.alt = "Instagram icon";
    instaImg.className = "size-full";
    insta.appendChild(instaImg);
    social.appendChild(insta);

    // YouTube
    const tube = document.createElement('a');
    tube.href = "#";
    tube.target = "_blank";
    tube.className = "w-10 h-10 p-2 rounded-full bg-pink-200 shadow-md border-2 hover:bg-gray";
    const tubeImg = document.createElement('img');
    tubeImg.src = "youtube.svg";
    tubeImg.alt = "YouTube icon";
    tubeImg.className = "size-full";
    tube.appendChild(tubeImg);
    social.appendChild(tube);

    // Yelp
    const yelp = document.createElement('a');
    yelp.href = "#";
    yelp.target = "_blank";
    yelp.className = "w-10 h-10 p-2 rounded-full bg-pink-200 shadow-md border-2 hover:bg-gray";
    const yelpImg = document.createElement('img');
    yelpImg.src = "yelp.webp";
    yelpImg.alt = "Yelp icon";
    yelpImg.className = "size-full";
    yelp.appendChild(yelpImg);
    social.appendChild(yelp);

    const copyright = document.createElement('section');
    copyright.innerHTML =
        `<p class='text-center text-myhotpink p-2'>
            &copy; ${new Date().getFullYear()}
        </p>`;

    footerEl.appendChild(social);
    footerEl.appendChild(copyright);
}
