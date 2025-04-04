//const Any name = require('SameName');
// chahe to direct likh sakte but yaha variable bna kar use kar rahe hai
// const app = express();
//eso rout banake liye jaida use karte hai
// Define routes and middleware here
// ...
// it is port number by variable
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


//that type also can be use
// const express = require('express');

// // Define routes and middleware here
// // ...


// express().listen(4000);
//best ideal 
const express = require('express');
const app = express();

// Define routes and middleware here
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
