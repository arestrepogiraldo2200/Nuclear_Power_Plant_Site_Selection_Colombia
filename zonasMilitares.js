let ZonasMilitares = [
      {
            "lat": 5.53598,
            "lng": -73.34987
      },
      {
            "lat": 5.60998,
            "lng": -73.82092
      },
      {
            "lat": 5.53598,
            "lng": -73.34987
      },
      {
            "lat": 5.67953,
            "lng": -72.95654
      },
      {
            "lat": 5.92906,
            "lng": -73.61982
      },
      {
            "lat": 11.010175,
            "lng": -74.80385
      },
      {
            "lat": 11.01173,
            "lng": -74.80377
      },
      {
            "lat": 11.22908,
            "lng": -74.2151
      },
      {
            "lat": 10.39298,
            "lng": -75.52593
      },
      {
            "lat": 10.46271,
            "lng": -73.27619
      },
      {
            "lat": 11.01168,
            "lng": -74.80352
      },
      {
            "lat": 11.51341,
            "lng": -72.8672
      },
      {
            "lat": 3.38623,
            "lng": -76.54507
      },
      {
            "lat": 3.38623,
            "lng": -76.54507
      },
      {
            "lat": 3.38623,
            "lng": -76.54507
      },
      {
            "lat": 3.52827,
            "lng": -76.27456
      },
      {
            "lat": 3.89311,
            "lng": -76.28954
      },
      {
            "lat": 2.45711,
            "lng": -76.60656
      },
      {
            "lat": 4.94415,
            "lng": -77.383564
      },
      {
            "lat": 1.20674,
            "lng": -77.27268
      },
      {
            "lat": 3.89126,
            "lng": -77.07608
      },
      {
            "lat": 6.26406,
            "lng": -75.59307
      },
      {
            "lat": 6.2641,
            "lng": -75.59301
      },
      {
            "lat": 7.778828,
            "lng": -76.655211
      },
      {
            "lat": 6.26012,
            "lng": -75.551266
      },
      {
            "lat": 6.234471,
            "lng": -75.548507
      },
      {
            "lat": 6.48883,
            "lng": -74.40154
      },
      {
            "lat": 5.68401,
            "lng": -76.63129
      },
      {
            "lat": 6.263922,
            "lng": -75.593032
      },
      {
            "lat": 7.11392,
            "lng": -73.1198
      },
      {
            "lat": 7.11392,
            "lng": -73.1198
      },
      {
            "lat": 6.467,
            "lng": -73.267
      },
      {
            "lat": 7.067,
            "lng": -73.867
      },
      {
            "lat": 7.89391,
            "lng": -72.50782
      },
      {
            "lat": 7.37806,
            "lng": -72.6525
      },
      {
            "lat": 8.233,
            "lng": -73.356
      },
      {
            "lat": 7.083,
            "lng": -70.75
      },
      {
            "lat": 4.448528923660595,
            "lng": -75.23805837310121
      },
      {
            "lat": 4.448528923660595,
            "lng": -75.23805837310121
      },
      {
            "lat": 5.194378824629884,
            "lng": -74.75012289923147
      },
      {
            "lat": 4.301434162315393,
            "lng": -74.79581380138319
      },
      {
            "lat": 3.7249527378364595,
            "lng": -75.49431314854871
      },
      {
            "lat": 4.119678,
            "lng": -73.614848
      },
      {
            "lat": 4.119678,
            "lng": -73.614848
      },
      {
            "lat": 5.348982,
            "lng": -72.402815
      },
      {
            "lat": 3.53277,
            "lng": -73.70079
      },
      {
            "lat": 4.561948,
            "lng": -75.652965
      },
      {
            "lat": 4.808512,
            "lng": -75.730033
      },
      {
            "lat": 4.75934,
            "lng": -75.94463
      },
      {
            "lat": 5.04743,
            "lng": -75.4839
      },
      {
            "lat": 4.561948,
            "lng": -75.652965
      },
      {
            "lat": 2.938574,
            "lng": -75.280149
      },
      {
            "lat": 2.938574,
            "lng": -75.280149
      },
      {
            "lat": 1.615864,
            "lng": -75.616014
      },
      {
            "lat": 1.842732,
            "lng": -75.52517
      },
      {
            "lat": 1.140399,
            "lng": -76.648031
      },
      {
            "lat": 8.740782,
            "lng": -75.902352
      },
      {
            "lat": 9.283433,
            "lng": -75.39907
      },
      {
            "lat": 8.740782,
            "lng": -75.902352
      },
      {
            "lat": 7.912555,
            "lng": -75.215673
      },
      {
            "lat": 4.81367,
            "lng": -74.35453
      },
      {
            "lat": 5.02208,
            "lng": -74.00481
      },
      {
            "lat": 4.60971,
            "lng": -74.08175
      },
      {
            "lat": 4.81367,
            "lng": -74.35453
      },
      {
            "lat": 4.477,
            "lng": -74.103
      },
      {
            "lat": 4.33646,
            "lng": -74.36378
      },
      {
            "lat": 4.582381167835652,
            "lng": -74.2140401128479
      },
      {
            "lat": 4.7109886,
            "lng": -74.072092
      },
      {
            "lat": 4.7109886,
            "lng": -74.072092
      },
      {
            "lat": 4.7109886,
            "lng": -74.072092
      },
      {
            "lat": 4.7109886,
            "lng": -74.072092
      },
      {
            "lat": 4.7109886,
            "lng": -74.072092
      }
]


// THIS BLOCK SHOULD APPEAR ON EACH EXCLUSION ZONE CALCULATION .js
//--------------------------------------------------------------------------------------

// Obtains the checkbox object related to the military zones
let army = document.getElementById('army');

// If the box is checked at the program start, then draw
if (!army.checked){
  draw_exclusion_army('rgba(0, 41, 16, 0.8)');
}

// Detects changes in the checkbox related to the population exclusion and "erase" by reloading or draws it
army.addEventListener('change', (event) => {

  if (army.checked){
    window.location.reload();
  } else {
    draw_exclusion_army('rgba(0, 41, 16, 0.8)');
  }
})

// If the box is checked draw all exclusions by the same color
all_same_color.addEventListener('change', (event) => {

  if (all_same_color.checked){
    draw_exclusion_army('rgba(255, 0, 0, 0.8)');
  } else {
    window.location.reload();
  }
})

//--------------------------------------------------------------------------------------

// Takes the data above and draws the exclusion circle zones
function draw_exclusion_army(colors){

  for (let i = 0; i < ZonasMilitares.length; i++){
  
    let circle = new H.map.Circle({ lat: ZonasMilitares[i].lat, lng: ZonasMilitares[i].lng}, 1000, {
        style: {
            fillColor: colors,
            strokeColor: colors,
            lineWidth: 1,
            opacity: 0.1
        }
    });

    map.addObject(circle);
  }
}

