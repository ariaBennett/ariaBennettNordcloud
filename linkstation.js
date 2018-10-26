/* 
Problem solving

Create a function that solves the most suitable (with most power) link 
station for a device at given point [x,y]. Use JavaScript runnable in modern 
browser or Node.js. 

This problem can be solved in 2-dimensional space. Link stations have reach and
power.

A link station’s power can be calculated:
power = (reach - device's distance from link station)^2
if distance > reach, power = 0

Function receives list of link stations and the point where the device is
located.

Function should output following line:

“Best link station for point x,y is x,y with power z”

Or:

“No link station within reach for point x,y”

Link stations are located at points (x, y) and have reach (r) ([x, y, r]):
[[0, 0, 10],
[20, 20, 5],
[10, 0, 12]]
Print out function output from points (x, y): (0,0), (100, 100), (15,10) and (18, 18).
*/

var linkStations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 20, 12]
];

var testCoordinates = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
];


var getPower = function(reach, distance) {
  if (distance > reach) {
    return 0;
  } else {
    return ( Math.pow((reach - distance), 2) );
  };
};
exports.getPower = getPower;

var getDistance = function(coordinatesA, coordinatesB) {
  var x1 = coordinatesA[0];
  var y1 = coordinatesA[1];
  var x2 = coordinatesB[0];
  var y2 = coordinatesB[1];

  return ( Math.hypot(x2-x1, y2-y1) );
};
exports.getDistance = getDistance;

var printOptimalLinkStations = function(linkStations, testCoordinates) {
  testCoordinates.forEach(function(coordinates) {
    var bestStation;
    var bestPower = 0;

    linkStations.forEach(function(linkStation) {
      var x1 = linkStation[0];
      var y1 = linkStation[1];
      var x2 = coordinates[0];
      var y2 = coordinates[1];
      var reach = linkStation[2];
      var stationPower = getPower( reach, getDistance([x1, y1], [x2, y2]) );

	    if (stationPower > bestPower) {
        bestStation = linkStation;
        bestPower = stationPower;
      };
    });

    if (bestPower === 0) {
      console.log("No link station within reach for point " + 
                    coordinates[0] + "," + 
                    coordinates[1]);
    } else {
      console.log("Best link station for point " + 
                    coordinates[0] + "," + 
                    coordinates[1] + " is " + 
                    bestStation[0] + "," + 
                    bestStation[1] + " with power " + 
                    bestPower);
    };
  });
};
exports.printOptimalLinkStations = printOptimalLinkStations;

printOptimalLinkStations(linkStations, testCoordinates);
