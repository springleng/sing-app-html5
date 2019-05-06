$(function(){
    function initVMap(){
        $('#vmap').vectorMap({
            map: 'world_mill',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            focusOn:{
                x: 0.1359,
                y: 0.4,
                scale: 1.5
            },
            zoomMin:0.85,
            hoverColor: false,
            regionStyle:{
                initial: {
                    fill: '#bdbdbd',
                    "fill-opacity": 1,
                    stroke: '#bdbdbd',
                    "stroke-width": 0.25,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 0.8
                }
            },
            markerStyle: {
                initial: {
                    fill: '#62bd19',
                    stroke: '#ffffff',
                    "fill-opacity": 1,
                    "stroke-width": 4,
                    "stroke-opacity": 0.2,
                    r: 5
                },
                hover: {
                    stroke: '#ffffff',
                    "stroke-width": 5
                }
            },
            onRegionClick: function(e, code){
                window.location.href = "../dashboard/visits.html";
            },
            onMarkerClick: function(e, code){
                if(code =="25")
                {
                    window.location.href = "../dashboard/widgets.html";
                }
              },
            backgroundColor: '#eee',
            markers: [
                /** North America **/
                {latLng: [34.05, -118.24], name: 'Los Angeles'},
                {latLng: [41.87, -87.62], name: 'Chicago'},
                {latLng: [33.74, -84.38], name: 'Atlanta'},
                {latLng: [42.36, -71.05], name: 'Boston'},
                {latLng: [40.71, -74.00], name: 'New York'},

                /** Europe**/
                {latLng: [42.5, 1.51], name: 'Andorra'},                                
                {latLng: [43.73, 7.41], name: 'Monaco'},
                {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                {latLng: [43.93, 12.46], name: 'San Marino'},
                {latLng: [35.88, 14.5], name: 'Malta'},

                /** Middle East **/
                {latLng: [26.02, 50.55], name: 'Bahrain'},

                /** Asia **/
                {latLng: [1.3, 103.8], name: 'Singapore'},
                {latLng: [28.61, 77.20], name: 'New Delhi'},
                {latLng: [39.90, 116.40], name: 'Beijing'},
                {latLng: [47.88, 106.90], name: 'Ulaanbaatar'},

                /** South America **/
                {latLng: [-15.82, -47.92], name: 'Brasilia'},
                {latLng: [-25.26, -57.57], name: 'Asuncion'},
                {latLng: [-34.60, -58.38], name: 'Buenos Aires'},

                /** Africa **/
                {latLng: [6.52, 3.37], name: 'Lagos'},
                {latLng: [30.04, 31.23], name: 'Cairo'},
                {latLng: [-4.44, 15.26], name: 'Buenos Aires'},
                {latLng: [-8.81, 13.23], name: 'Luanda'},

                /** Russia **/
                {latLng: [48.70, 44.51], name: 'Volgograd'},
                {latLng: [62.03, 129.67], name: 'Yakutsk'},

                /** Australia **/
                {latLng: [-33.86, 151.20], name: 'Sydney'},
                {latLng: [-31.95, 115.86], name: 'Perth'},
                
            ]
        });
    }

    function pageLoad(){
        initVMap();
    }

    pageLoad();
    SingApp.onPageLoad(pageLoad);
});

