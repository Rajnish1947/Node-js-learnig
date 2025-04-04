let myPromise = new Promise(function(resolve, reject) {
    // some code that takes time, like loading data
    let success = true; // change this to false to check error
  
    if (success) {
      resolve("The data has loaded successfully!");
    } else {
      reject("There was an error loading the data.");
    }
  });
  