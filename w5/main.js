// const cfpData = [];

// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if(size === "large") {
//     houseSizePoints = 10;
//   } else if(size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//     return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//    return houseHoldPoints;
// }

// function displayOutObj(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
//   output.appendChild(newH2)
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     houseM: houseHoldMembers,
//     houseS: houseSize, 
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total
//   });
// }


// function displayOutput() {
//   if (cfpData.length === 0) {
//     console.log();
//     return;
//   }
//   for (obj of cfpData) {
//     console.log(obj)
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = "Based on Number in Size of Home";
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of members of the household of ${obj.houseM} (score: ${obj.houseMPTS}) `;
//     newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;

//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

// function displayOutput() {
//     for(let i = 0; i < cfpData.length; i++) {
//         console.log(i);
//         const output = document.getElementById("output");
//         // const newP = document.createElement("p");
//         const newH2 = document.createElement("h2");
//         newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
//         // const newH3 = document.createElement("h3");
//         // newH3.textContent = `Based on Number in Household and Size of Home`;
//         // newP.textContent = `This number is based on the number of members in the home of ${arr[0]} (score: ${arr[3]}) `;
//         // newP.textContent += `and a ${arr[1]} size of home (score: ${arr[2]})`
//         output.appendChild(newH2);
//         // output.appendChild(newH3);
//         // output.appendChild(newP);
//     }
// }

// start(1, "apt");
// start(2, "apt");
// start(3, "apt");
// start(4, "apt");
// start(5, "apt");
// start(6, "apt");
// start(7, "apt");
// start(1, "small");
// start(2, "small");
// start(3, "small");
// start(4, "small");
// start(5, "small");
// start(6, "small");
// start(7, "small");
// start(1, "medium");
// start(2, "medium");
// start(3, "medium");
// start(4, "medium");
// start(5, "medium");
// start(6, "medium");
// start(7, "medium");
// start(1, "large");
// start(2, "large");
// start(3, "large");
// start(4, "large");
// start(5, "large");
// start(6, "large");
// start(7, "large");

// displayOutput()

const movies = [
  { title: "The Matrix", year: "1999", rating: "10/10", watched: 7},
  { title: "Wall-E", year: "2008", rating: "10/10", watched: 21},
  { title: "Pan's Labyrinth", year: "2006", rating: "10/10", watched: 5},
  { title: "Ghost in the Shell", year: "1995", rating: "10/10", watched: 5},
  { title: "Moonlight", year: "2016", rating: "10/10", watched: 2}
];

function displayMovies() {
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  newP.textContent = "My Movie Ratings:";
  output.appendChild(newP);

  movies.forEach((obj) => {
    console.log(obj);
    const newH2 = document.createElement("h2");
    newH2.textContent = `I rated "${obj.title}" a ${obj.rating},`;
    newH2.textContent += ` which was released in ${obj.year}.`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Watched ${obj.watched} time.`;
    output.appendChild(newH2);
    output.appendChild(newH3);
  })
}

displayMovies();