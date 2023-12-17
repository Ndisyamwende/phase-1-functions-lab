// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    
    const hqLocation = 42;
  
    const distance = Math.abs(pickupLocation - hqLocation);
  
    return distance;
  }
  
const feetPerBlock = 264;

function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;

  const distance = Math.abs(pickupLocation - hqLocation);

  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);

  const distanceInFeet = distanceInBlocks * feetPerBlock;

  return distanceInFeet;
}

const feetPerBloc= 264;

function distanceTravelledInFeet(start, destination) {
  
  const distance = Math.abs(destination - start) * feetPerBlock;

  return distance;
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
  
    const distance = Math.abs(destination - start) * feetPerBlock;
  
    if (distance <= 400) {
    
      return 0;
    } else if (distance <= 2000) {
       
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      
      return 25;
    } else {
    
      return 'cannot travel that far';
    }
  }
    