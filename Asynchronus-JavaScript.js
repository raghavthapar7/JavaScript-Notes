/* 
    API URL - https://countries-api-836d.onrender.com/countries/
*/

// Callback Hell // Pyramid of Doom

// So we make call to an API -
setTimeout(() => {
  console.log("This API has responed in 1 second");
  /* Based on the response of the API call, we make another API 
  call */
  setTimeout(() => {
    console.log("This API response executes after the first call ends");
    /* The behaviour repeats as we make some other call based on
    the 2nd response */
    setTimeout(() => {
      console.log("This API response executes after the second call ends");
      /* Again the behaviour repeats */
      setTimeout(() => {
        console.log("This API response executes after the second call ends");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
