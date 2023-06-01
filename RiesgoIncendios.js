
// THIS BLOCK SHOULD APPEAR ON EACH EXCLUSION ZONE CALCULATION .js
//--------------------------------------------------------------------------------------

// Obtains the checkbox object related to the population exclusion
let wildfires = document.getElementById('wildfires');

// If the box is checked at the program start, then draw
if (!wildfires.checked){
      draw_exclusion_wildfires('rgba(190, 95, 0, 0.3)');
}

// Detects changes in the checkbox related to the population exclusion and "erase" by reloading or draws it
wildfires.addEventListener('change', (event) => {

  if (wildfires.checked){
    window.location.reload();
  } else {
      draw_exclusion_wildfires('rgba(190, 95, 0, 0.3)');
  }
})

// // If the box is checked draw all exclusions by the same color
all_same_color.addEventListener('change', (event) => {

  if (all_same_color.checked){
      draw_exclusion_wildfires('rgba(255, 0, 0, 0.9)');
  } else {
    window.location.reload();
  }
})

//--------------------------------------------------------------------------------------


function draw_exclusion_wildfires(color){

      addOverlayToMapWildfires(map);

}


function addOverlayToMapWildfires(map) {
      
      let overlayImage = new Image();
      overlayImage.src = 'incendios.png';

      // create an overlay that will use a weather map as a bitmap
      var overlay = new H.map.Overlay(
            new H.geo.Rect(
            20, -80,
            -10, -60
            ),
            overlayImage,
            {
              volatility: true,
              opacity: 0.7
            }
      );

      // add overlay to the map
      map.addObject(overlay);
}


    











