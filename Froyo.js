const flavors = prompt(
  "Enter the flavors of froyo you want, seperated with spaces."
);
const splitFlavors = flavors.split(" ");

const flavorCounts = {};

for (let i = 0; i < splitFlavors.length; i++) {
  const flavor = splitFlavors[i];
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}
console.log("Flavor Counts:");
for (const flavor in flavorCounts) {
  console.log(`${flavor}: ${flavorCounts[flavor]}`);
}
