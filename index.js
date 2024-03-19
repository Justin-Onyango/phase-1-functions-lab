// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hqLocation = 42; 
    return Math.abs(hqLocation - location);
}

function distanceFromHqInFeet(location) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(location) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }

    return fare;
}
      
