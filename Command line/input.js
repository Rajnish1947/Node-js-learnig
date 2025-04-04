const fs = require('fs');
const input = process.argv;

// Check the operation type
if (input[2] === 'add') {
    // Add a new file with the specified content
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] === 'remove') {
    // Remove the specified file
    fs.unlinkSync(input[3]);
} else {
    // Handle invalid input
    console.log("invalid input");
}

// run karne liye bari jo opertion perform kar hai use run kare 
// like nodemon .\index.js 'add',nodemon .\index.js 'remove, etc