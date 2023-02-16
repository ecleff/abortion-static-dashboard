// The svg
const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
const projection = d3.geoMercator()
    .center([-99.9018, 31.9686 ])                // GPS of location to zoom on
    .scale(1300)                       // This is like the zoom
    .translate([ width/2, height/2 ])

// Load external data and boot
d3.json("Texas_County_Boundaries.geojson").then( function(data){

 // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "none")
})