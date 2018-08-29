$( function() {
    // Init Datepicker
    $( "#datepicker" ).datepicker();

    // Match Height for Panels
    $('.panel').matchHeight({
        byRow: false
    });

    $(window).on('resize', function(){
        // Update Match Height on Resize (Remove the previous binding then re bind, probably a better way of doing this)
        $('.panel').matchHeight({
            remove: true
        });
        $('.panel').matchHeight({
            byRow: false
        });
  });

} );

// Map
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
    
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // Disable UI
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-27.455091,153.048838), // New York
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-27.455091,153.048838),
        map: map,
        title: 'Suite 9A Level 1/30 Florence St, Teneriffe QLD 4005'
    });
}