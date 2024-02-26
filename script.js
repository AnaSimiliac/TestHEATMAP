// Initialize heatmap instance
var heatmapInstance = h337.create({
    container: document.querySelector('#heatmapContainer'),
  });
  
  // Generate some random data
  var points = [];
  var max = 0;
  var width = 640; // Adjusted to container width
  var height = 360; // Adjusted to container height
  var len = 200; // Number of data points
  
  while (len--) {
    var val = Math.floor(Math.random()*100);
    max = Math.max(max, val);
    var point = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height),
      value: val
    };
    points.push(point);
  }
  
  // Heatmap data format
  var data = { 
    max: max, 
    data: points 
  };
  
  // Set data

