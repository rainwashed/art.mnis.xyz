let link = process.argv[2];

if (link === undefined) {
  console.log("No link was provided.");
  process.exit(1);
}

link = link.split("/");

console.log(link[5]);

console.log(`https://drive.google.com/uc?id=${link[5]}`);
