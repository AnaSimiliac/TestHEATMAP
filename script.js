 // Initialize heatmap instance
  var heatmapInstance = h337.create({
      container: document.querySelector('#heatmapContainer'),
  });

  // Generate initial random data for the heatmap (optional)
  var points = [];
  var max = 0;
  var width = 360; // Adjusted to container width
  var height = 640; // Adjusted to container height
  var len = 200; // Initial number of data points

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

  // Set initial data and display
  heatmapInstance.setData(data);

  // Function to handle touch events
  function handleTouch(e) {
    var touch = e.touches[0]; // Get the first touch
    var x = touch.clientX;
    var y = touch.clientY;

    // Optionally, you can add the touch point to the heatmap
    heatmapInstance.addData({ x: x, y: y, value: 1 });

    // Track touch event with Heap Analytics
    heap.track('Touch Interaction', { x: x, y: y });
  }

  // Add event listener for touch events on the heatmap container
  document.getElementById('heatmapContainer').addEventListener('touchstart', handleTouch);
