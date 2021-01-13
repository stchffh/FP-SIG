      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }

      mapboxgl.accessToken = 'pk.eyJ1Ijoic2l0dGljaG9maWZhaCIsImEiOiJja2o5eXB4dWs1cXliMzBscjE3azBwa3dzIn0.ZI0YW6h-rODGTTPoyjx_cQ';

      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [112.768845, -7.250445],
        zoom: 13,
        scrollZoom: true
      });

      var stores = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.729536, -7.279086]
            },
            'properties': {
              'phoneFormatted': '+621500000',
              'phone': '+621500000',
              'address': 'Jl. Diponegoro No.221, Darmo, Kec. Wonokromo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.737849, -7.266048]
            },
            'properties': {
              'phoneFormatted': '+62315323531',
              'phone': '+62315323531',
              'address': 'Jl. Tegalsari No.43-45, Tegalsari, Kec. Tegalsari, Surabaya',
              'city': 'Jawa Timur',

            }
           },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.742404, -7.296731]
            },
            'properties': {
              'phoneFormatted': '+62211500000',
              'phone': '+62211500000',
              'address': 'Jl. Ngagel No.185, Ngagel, Kec. Wonokromo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.729406, -7.245478]
            },
            'properties': {
              'phoneFormatted': '+62315491589',
              'phone': '+62315491589',
              'address': 'Jl. Dupak No.15, Gundih, Kec. Bubutan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.733901, -7.284628]
            },
            'properties': {
              'phoneFormatted': '+62315160177',
              'phone': '+62315160177',
              'address': 'Jl. Diponegoro, DR. Soetomo, Kec. Tegalsari, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.796737,-7.271224]
            },
            'properties': {
              'phoneFormatted': '+62315921363',
              'phone': '+62315921363',
              'address': 'Jl. Raya Mulyosari No.366, Dukuh Sutorejo, Kec. Mulyorejo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.764738, -7.249997]
            },
            'properties': {
              'phoneFormatted': '+62313714097',
              'phone': '+62313714097',
              'address': 'Jl. Kapas Krampung No.99, Rangkah, Kec. Tambaksari, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.676503, -7.229308]
            },
            'properties': {
              'phoneFormatted': '+62317490395',
              'phone': '+62317490395',
              'address': 'JL. Tambaklangon No. 2-4, Sariosowilangun, Asemrowo, Tambak Langon, Kec. Asemrowo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.791765, -7.251477]
            },
            'properties': {
              'phoneFormatted': '+62313893075',
              'phone': '+62313893075',
              'address': 'Jl. Kenjeran No.661, Dukuh Sutorejo, Kec. Mulyorejo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.731826, -7.222926]
            },
            'properties': {
              'phoneFormatted': '+6281333909121',
              'phone': '+6281333909121',
              'address': 'Jl. Alun-Alun Priok No.02, Perak Bar., Kec. Krembangan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.720953, -7.232498]
            },
            'properties': {
              'phoneFormatted': '+6221500000',
              'phone': '+6221500000',
              'address': 'Morokrembangan, Kec. Krembangan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.72995503544902, -7.250881322238867]
            },
            'properties': {
              'phoneFormatted': '+62315311141',
              'phone': '+62315311141',
              'address': 'Jl. Semarang No.94, Bubutan, Kec. Bubutan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.75926859882459, -7.242916745182092]
            },
            'properties': {
              'phoneFormatted': '+62313763299',
              'phone': '+62313763299',
              'address': 'Jl. Kenjeran No.118, Tambakrejo, Kec. Simokerto, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.7543269913846, -7.260465196451]
            },
            'properties': {
              'phoneFormatted': '+6262211500000',
              'phone': '+6262211500000',
              'address': 'Jl. Tapak Siring, Pacar Keling, Kec. Tambaksari, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.78428768830206, -7.290046859151963]
            },
            'properties': {
              'phoneFormatted': '+6281336698016',
              'phone': '+6281336698016',
              'address': 'Jl. Arief Rahman Hakim No.150, Keputih, Kec. Sukolilo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.74231101959982, -7.224974604875369]
            },
            'properties': {
              'phoneFormatted': '+62313293066',
              'phone': '+62313293066',
              'address': 'Jl. Sultan Iskandar Muda No.42, Ujung, Kec. Semampir, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.72942295041531, -7.333917957639904]
            },
            'properties': {
              'phoneFormatted': '+62211500000',
              'phone': '+62211500000',
              'address': 'Jl. Ahmad Yani, Gayungan, Kec. Gayungan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.72122163852768, -7.24833785553497]
            },
            'properties': {
              'phoneFormatted': '+62315466103',
              'phone': '+62315466103',
              'address': 'Jl. Demak No.158, Gundih, Kec. Bubutan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.78535729422643, -7.321876520587233]
            },
            'properties': {
              'phoneFormatted': '+62211500000',
              'phone': '+62211500000',
              'address': 'Jl. Raya Pandugo No.84, Penjaringan Sari, Kec. Rungkut, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.74617168613268, -7.277066654361323]
            },
            'properties': {
              'phoneFormatted': '+62211500000',
              'phone': '+62211500000',
              'address': 'Jl. Sulawesi No.8, Ngagel, Kec. Wonokromo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.7352311484968, -7.235358425610683]
            },
            'properties': {
              'phoneFormatted': '+62313041234',
              'phone': '+62313041234',
              'address': 'Jl. Rajawali, Krembangan Sel., Kec. Krembangan, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.68190295081511, -7.24373992959041]
            },
            'properties': {
              'phoneFormatted': '+62317490433',
              'phone': '+62317490433',
              'address': 'Jl. Margomulyo No.33, Greges, Kec. Asemrowo, Surabaya',
              'city': 'Jawa Timur',
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [112.681086, -7.257872]
            },
            'properties': {
              'phoneFormatted': '+6221500000',
              'phone': '+6221500000',
              'address': 'Jl. Margomulyo, Karangpoh, Kec. Tandes, Surabaya',
              'city': 'Jawa Timur',
            }
          }
        ]
      };


      stores.features.forEach(function (store, i) {
        store.properties.id = i;
      });

      map.on('load', function (e) {
        map.addSource('places', {
          'type': 'geojson',
          'data': stores
        });

        var geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          marker: true,
          placeholder: 'Search for places in Surabaya', 
          bbox: [112.238402, -7.536064, 112.768845, -7.250445]
        });

        buildLocationList(stores);
        addMarkers();
        map.addControl(geocoder, 'top-left');
      });
      
      map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-right'
        );


      function addMarkers() {
        stores.features.forEach(function (marker) {
          var el = document.createElement('div');
          el.id = 'marker-' + marker.properties.id;
          el.className = 'marker';

          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          el.addEventListener('click', function (e) {
            flyToStore(marker);
            createPopUp(marker);
            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById(
              'listing-' + marker.properties.id
            );
            listing.classList.add('active');
          });
        });
      }


      function buildLocationList(data) {
        data.features.forEach(function (store, i) {

          var prop = store.properties;

          var listings = document.getElementById('listings');
          var listing = listings.appendChild(document.createElement('div'));
          listing.id = 'listing-' + prop.id;
          listing.className = 'item';

          var link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = 'link-' + prop.id;
          link.innerHTML = prop.address;

          var details = listing.appendChild(document.createElement('div'));
          details.innerHTML = prop.city;
          if (prop.phone) {
            details.innerHTML += ' &middot; ' + prop.phoneFormatted;
          }

          link.addEventListener('click', function (e) {
            for (var i = 0; i < data.features.length; i++) {
              if (this.id === 'link-' + data.features[i].properties.id) {
                var clickedListing = data.features[i];
                flyToStore(clickedListing);
                createPopUp(clickedListing);
              }
            }
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        });
      }


      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15
        });
      }

      function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        var popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            '<h3>SPBU</h3>' +
              '<h4>' +
              currentFeature.properties.address +
              '</h4>'
          )
          .addTo(map);
      }