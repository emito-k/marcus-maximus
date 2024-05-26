const fs = require("fs");
const path = require("path");

// Get the directory from the command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: node createEnv.js <directory>");
  process.exit(1);
}

const dir = args[0];

// Ensure the directory exists, create it if it does not
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Directory created: ${dir}`);
} else {
  console.log(`Directory already exists: ${dir}`);
}

// Define the content of the environment.ts file
const content = `export const environment = {
  apiUrl: 'http://localhost:3000/',
};`;

// Define the file paths
const filePath = path.join(dir, "environment.ts");
const devFilePath = path.join(dir, "environment.development.ts");

// Write the content to environment.ts file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(`Error writing to file: ${filePath} - ${err}`);
    process.exit(1);
  }
  console.log(`environment.ts file has been created successfully in ${dir}`);
});

// Write the content to environment.development.ts file
fs.writeFile(devFilePath, content, (err) => {
  if (err) {
    console.error(`Error writing to file: ${devFilePath} - ${err}`);
    process.exit(1);
  }
  console.log(
    `environment.development.ts file has been created successfully in ${dir}`
  );
});
