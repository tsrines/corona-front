import React from 'react'
import {Map, Polygon, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import StateBorders from './StateBorders'

 
export class MapContainer extends React.Component {
  state = {
    selectedPlace: {
      lat: 0,
      lng: 0
    }
  } 
  createPoly(stateCode) {
		var polygon = new this.props.google.maps.Polygon({
			paths: StateBorders[stateCode],
			strokeColor: '#FF0000',
			strokeOpacity: 0,
			strokeWeight: -0,
			fillColor: '#FF0000',
			fillOpacity: 0
		});
		return polygon;
	}

  mouseOutOfRegion = (e) => {
    // reset the hover state, returning the border to normal
    e.feature.setProperty('state', 'normal');
  }


  render() {
    // const mapStyle = [{
    //   'stylers': [{'visibility': 'on'}]
    // }, {
    //   'featureType': 'landscape',
    //   'elementType': 'geometry',
    //   'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
    // }, {
    //   'featureType': 'water',
    //   'elementType': 'geometry',
    //   'stylers': [{'visibility': 'on'}, {'color': '#bfd4ff'}]
    // }];
    
  const points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
  ]
  



  const bounds = new this.props.google.maps.LatLngBounds();
  for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }


    return (
      <Map 
        google={this.props.google}
        // styles={mapStyle}
        zoom={14}
        bounds={bounds}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <Polygon></Polygon>
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCuEOeSzUNgNIoiSLtWMZdIUPkl0S3DTDI"
})(MapContainer)



  
    
      
    //   // var map;
    //   // var censusMin = Number.MAX_VALUE, censusMax = -Number.MAX_VALUE;

    //   // function initMap() {

    //     // // load the map
    //     // map = new google.maps.Map(document.getElementById('map'), {
    //     //   center: {lat: 40, lng: -100},
    //     //   zoom: 4,
    //     //   styles: mapStyle
    //     // });


    //     // set up the style rules and events for google.maps.Data
    //     // map.data.setStyle(styleFeature);
    //     // map.data.addListener('mouseover', mouseInToRegion);
    //     // map.data.addListener('mouseout', mouseOutOfRegion);

    //     // wire up the button
    //     // var selectBox = document.getElementById('census-variable');
    //     // google.maps.event.addDomListener(selectBox, 'change', function() {
    //     //   clearCensusData();
    //     //   loadCensusData(selectBox.options[selectBox.selectedIndex].value);
    //     // });

    //     // state polygons only need to be loaded once, do them now
    //     loadMapShapes();

    //   }

    //   /** Loads the state boundary polygons from a GeoJSON source. */
    //   function loadMapShapes() {
    //     // load US state outline polygons from a GeoJson file
    //     map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/states.js', { idPropertyName: 'STATE' });

    //     // wait for the request to complete by listening for the first feature to be
    //     // added
    //     // google.maps.event.addListenerOnce(map.data, 'addfeature', function() {
    //     //   google.maps.event.trigger(document.getElementById('census-variable'),
    //     //       'change');
    //     // });
    //   }

    //   /**
    //    * Loads the census data from a simulated API call to the US Census API.
    //    *
    //    * @param {string} variable
    //    */
    //   function loadCensusData(variable) {
    //     // load the requested variable from the census API (using local copies)
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', variable + '.json');
    //     xhr.onload = function() {
    //       var censusData = JSON.parse(xhr.responseText);
    //       censusData.shift(); // the first row contains column names
    //       censusData.forEach(function(row) {
    //         var censusVariable = parseFloat(row[0]);
    //         var stateId = row[1];

    //         // keep track of min and max values
    //         if (censusVariable < censusMin) {
    //           censusMin = censusVariable;
    //         }
    //         if (censusVariable > censusMax) {
    //           censusMax = censusVariable;
    //         }

    //         // update the existing row with the new data
    //         map.data
    //           .getFeatureById(stateId)
    //           .setProperty('census_variable', censusVariable);
    //       });

    //       // update and display the legend
    //       document.getElementById('census-min').textContent =
    //           censusMin.toLocaleString();
    //       document.getElementById('census-max').textContent =
    //           censusMax.toLocaleString();
    //     };
    //     xhr.send();
    //   }

    //   /** Removes census data from each shape on the map and resets the UI. */
    //   function clearCensusData() {
    //     censusMin = Number.MAX_VALUE;
    //     censusMax = -Number.MAX_VALUE;
    //     map.data.forEach(function(row) {
    //       row.setProperty('census_variable', undefined);
    //     });
    //     document.getElementById('data-box').style.display = 'none';
    //     document.getElementById('data-caret').style.display = 'none';
    //   }

    //   /**
    //    * Applies a gradient style based on the 'census_variable' column.
    //    * This is the callback passed to data.setStyle() and is called for each row in
    //    * the data set.  Check out the docs for Data.StylingFunction.
    //    *
    //    * @param {google.maps.Data.Feature} feature
    //    */
    //   function styleFeature(feature) {
    //     var low = [5, 69, 54];  // color of smallest datum
    //     var high = [151, 83, 34];   // color of largest datum

    //     // delta represents where the value sits between the min and max
    //     var delta = (feature.getProperty('census_variable') - censusMin) /
    //         (censusMax - censusMin);

    //     var color = [];
    //     for (var i = 0; i < 3; i++) {
    //       // calculate an integer color based on the delta
    //       color[i] = (high[i] - low[i]) * delta + low[i];
    //     }

    //     // determine whether to show this shape or not
    //     var showRow = true;
    //     if (feature.getProperty('census_variable') == null ||
    //         isNaN(feature.getProperty('census_variable'))) {
    //       showRow = false;
    //     }

    //     var outlineWeight = 0.5, zIndex = 1;
    //     if (feature.getProperty('state') === 'hover') {
    //       outlineWeight = zIndex = 2;
    //     }

    //     return {
    //       strokeWeight: outlineWeight,
    //       strokeColor: '#fff',
    //       zIndex: zIndex,
    //       fillColor: 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)',
    //       fillOpacity: 0.75,
    //       visible: showRow
    //     };
    //   }

    //   /**
    //    * Responds to the mouse-in event on a map shape (state).
    //    *
    //    * @param {?google.maps.MouseEvent} e
    //    */
    //   function mouseInToRegion(e) {
    //     // set the hover state so the setStyle function can change the border
    //     e.feature.setProperty('state', 'hover');

    //     var percent = (e.feature.getProperty('census_variable') - censusMin) /
    //         (censusMax - censusMin) * 100;

    //     // update the label
    //     document.getElementById('data-label').textContent =
    //         e.feature.getProperty('NAME');
    //     document.getElementById('data-value').textContent =
    //         e.feature.getProperty('census_variable').toLocaleString();
    //     document.getElementById('data-box').style.display = 'block';
    //     document.getElementById('data-caret').style.display = 'block';
    //     document.getElementById('data-caret').style.paddingLeft = percent + '%';
    //   }

    //   /**
    //    * Responds to the mouse-out event on a map shape (state).
    //    *
    //    * @param {?google.maps.MouseEvent} e
    //    */
    //   function mouseOutOfRegion(e) {
    //     // reset the hover state, returning the border to normal
    //     e.feature.setProperty('state', 'normal');
    //   }

    // </script>





