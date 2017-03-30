
/* global google */

app.factory('GeocodeFactory', function ($q) {


    return {
        geocoder: null,
        create: function () {
            this.geocoder = new google.maps.Geocoder();
            console.log(this.geocoder);
        },
        query: function (address) {

            var defer = $q.defer();

            this.geocoder.geocode(
                    {address: address},
            function (results, status) {
                switch (status) {
                    case google.maps.GeocoderStatus.OK :
                        defer.resolve(results);
                        break;
                    case google.maps.GeocoderStatus.ZERO_RESULTS :
                        defer.resolve([]);
                        break;
                    case google.maps.GeocoderStatus.OVER_QUERY_LIMIT :
                        defer.reject('Limite de requêtes atteinte');
                        break;
                    case google.maps.GeocoderStatus.REQUEST_DENIED :
                        defer.reject('Requête refusée');
                        break;
                    default:
                        defer.reject('Erreur Inconnue');
                        break;
                }
            });
            
            return defer.promise;
        }
    };
});


