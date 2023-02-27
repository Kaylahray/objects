// QUESTION 1:
function InstagramPost(
  handleOfAuthor,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

//  QUESTION 2:
// FIRST USER :
let url = "https://bit.ly/3EED5EB";
const post1 = new InstagramPost(
  "_c.h.ioma",
  "What a great Day to be alive",
  url,
  1025,
  500
);
// console.log({ post1 });

// SECOND USER:
let url2 = "https://bit.ly/3KJLuut";
const post2 = new InstagramPost(
  "_c.h.i.chi",
  "Happy Sunday to you all",
  url2,
  1011,
  57
);
// console.log({ post2 });

// QUESTION 3a:
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const musa = createPerson("Musa", 19, "Lekki, Lagos State.");
// console.log(musa);

// QUESTION 3b:
function createJambScore(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}
const musaJambScore = createJambScore(70, 85, 82, 94);
// console.log(musaJambScore);

musa.jambScore = musaJambScore;
// console.log(musa);

// QUESTION 4:
// There are three ways to clone an object.
const objectClone = {
  name: "chioma",
  location: "Nigeria",
  address: {
    zip: 10113,
  },
};

// FIRST APPROACH: CLONING USING THE Object.assign({}, objectClone) :
const objectOne = Object.assign({}, objectClone);
objectOne.location = "Abuja";
// console.log({ objectOne });
// console.log({ objectClone });

// SECOND APPROACH: CLONING USING THE SPREAD OPERATOR {...objectClone} :
const objectTwo = { ...objectClone };
objectTwo.name = "Faith";
// console.log({ objectTwo });
// console.log({ objectClone });

// THIRD APPROACH : CLONING USING THE JSON.parse(JSON.stringify(objectClone));
const objectThree = JSON.parse(JSON.stringify(objectClone));
objectThree.address.zip = 23456;
// console.log({ objectThree });
// console.log({ objectClone });

// QUESTION 5:
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (let key in presidentialCandidates) {
  console.log(
    presidentialCandidates[key] +
      " is the presidential candidate of " +
      key +
      "."
  );
}
