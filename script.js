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

  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("62479915");