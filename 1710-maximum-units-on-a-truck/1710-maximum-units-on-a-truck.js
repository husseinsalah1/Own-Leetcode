/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => a[1] - b[1]).reverse();

  var numberOfBoxesInTruck = 0;
  var numberOfUnitsTrukWillPut = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    numberOfBoxesInTruck = numberOfBoxesInTruck + boxTypes[i][0]; // 5 8 12

    while (numberOfBoxesInTruck > truckSize) {
      numberOfBoxesInTruck = numberOfBoxesInTruck - boxTypes[i][0]; // 8
      boxTypes[i][0] -= 1;
      numberOfBoxesInTruck = numberOfBoxesInTruck + boxTypes[i][0]; // 11
    }
    numberOfUnitsTrukWillPut += boxTypes[i][1] * boxTypes[i][0]; // 50 77
  }
  return numberOfUnitsTrukWillPut;
};