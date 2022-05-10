const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil() {
    return randomize(this.civilImages);
  }

  getRandomMilitary() {
    return randomize(this.militaryImages);
  }

  getAll() {
    return [...this.civilImages, ...this.militaryImages];
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    this.gallery = document.createElement("section");
    document.body.appendChild(this.gallery);
  }

  createImageTag(imageUrl) {
    const newPicture = document.createElement("pic");
    const newImage = document.createElement("img");
    newImage.src = imageUrl;
    newPicture.appendChild(newImage);
    return newPicture;
  }

  paintSingleImage(imageUrl) {
    this.gallery.appendChild(this.createImageTag(imageUrl));
  }

  paintMultipleImages(arrayOfImages) {
    arrayOfImages.forEach((image) => {
      this.paintSingleImage(image);
    });
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

const randomize = function (param) {
  return param[Math.floor(Math.random() * param.length)];
};

console.log(aircrafts);
