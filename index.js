// Code your solution in this file!


// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Scuber's headquarters
    return Math.abs(hq - someValue); // Absolute difference to handle both uptown and downtown cases
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Each block is 264 feet long
  }
  
  // Calculates the number of feet a passenger travels given a starting block and an ending block
  // Only calculates distance North and South (uptown/downtown).
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); // Absolute difference to handle both uptown and downtown cases
    return blocksTravelled * 264; // Each block is 264 feet long
  }
  
  // Given the same starting and ending block as the previous test,
  // return the fare for the customer based on distance travelled.
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      fare = 2.56; // 2 cents per foot after the first 400 feet
    } else if (distance >= 2000 && distance < 2500) {
      fare = 25; // Flat fare of $25 for a distance over 2000 feet and under 2500 feet
    } else if (distance >= 2500) {
      return 'cannot travel that far'; // Scuber does not allow any rides over 2500 feet
    }
  
    return fare.toFixed(2); // Return fare rounded to 2 decimal places
  }
  