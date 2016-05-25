App.provider("api", function(){

    ///////////////////////////////////////////////////////////////////////////
    // PROVIDER
    ///////////////////////////////////////////////////////////////////////////
    var provider = {};
    var config = {
        base_url: "http://localhost:3000",//default
        endpoints: {
            comments: {
                index: '/comments.json',
                reprove: '',
                publish: ''
            }
        }
    };

    provider.setBaseUrl = function(base_url) {
        config.base_url = base_url;
    };
    provider.setEndpoints = function(endpoints) {
        config.endpoints = endpoints;
    };

    ///////////////////////////////////////////////////////////////////////////
    // API
    ///////////////////////////////////////////////////////////////////////////
    provider.$get = function($http) {
        var Api = function(config) {
            this.config = config;

            this.getEndpoints = function() { return this.config.endpoints; };
            this.getBaseUrl = function() { return this.config.base_url; };
            this.logRequestError = function(response, url) {
                console.log("OOOPS... We have a problem with the request. ");
                //console.log(response);
            };

            this.getComments = function(params, success_callback, error_callback) {
                var url = this.getBaseUrl() + this.getEndpoints()['comments']['index'];
                $http.get( url, {
                    params: params
                }).success( function (response) {
                    if(typeof(success_callback) == "function") success_callback(response);
                }).error( function(response) {
                    this.logRequestError(response, url);
                    if(typeof(error_callback) == "function") error_callback(response, url)
                }.bind(this));
            };
        };

        return (new Api(config));
    };

    return provider;
});