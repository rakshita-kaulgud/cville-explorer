window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});

    var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [38, 95],
       shadowSize:   [50, 64],
       iconAnchor:   [22, 94],
       shadowAnchor: [4, 62],
       popupAnchor:  [-3, -76]
    }
});
	var greenIcon = new LeafIcon({
    	iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
    	shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
	});

/*
$.getJSON("https://opendata.arcgis.com/datasets/5d79c6a3e6d44a758063c59c8e00b2dc_18.geojson", function(data) {


    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.NAME + "<br>" + feature.properties.TYPE)
      }
    });

    var map = L.map('my-map')
    .fitBounds(geojson.getBounds());

    basemap.addTo(map);
    geojson.addTo(map);
  });

};

*/


	$.getJSON("https://opendata.arcgis.com/datasets/a13bdf43fff04168b724a64f7dca234d_19.geojson", function(data) {

		/*
    	var geojson = L.geoJson(data, {
      		onEachFeature: function (feature, layer) {
        	layer.bindPopup(feature.properties.PARKNAME + "<br>" + feature.properties.PARK_TYPE)
      	}
    	});

    	var map = L.map('my-map')
    		.fitBounds(geojson.getBounds());
    	console.log(geojson.getBounds());
		//L.marker([38.10078192264657,-78.58926940760139], {icon: greenIcon}).addTo(map);

    	basemap.addTo(map);
    	geojson.addTo(map);
    	*/
    	var geojson = L.geoJson(data, {

//EDIT HERE
      	pointToLayer: function (feature, latlng) {
       				var smallIcon = L.icon({
                          iconSize: [27, 27],
                          iconAnchor: [13, 27],
                          popupAnchor:  [1, -24],
                          iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
                          shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
                  	});

         			return L.marker(latlng, {icon: smallIcon});
        },

      	onEachFeature: function (feature, layer) {
        	layer.bindPopup(feature.properties.PARKNAME + '<p><b> ' + feature.properties.PARK_TYPE + '</b></p>');
      	}


    	});

    	var map = L.map('my-map')
    		.fitBounds(geojson.getBounds());
      	basemap.addTo(map);
    	geojson.addTo(map);
  	});



};