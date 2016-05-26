App.service('uri', function(){
    this.getQueryString = function(){
        return window.location.search;
    };

    this.parseQueryString = function(){
        var qstr = this.getQueryString();
        var query = {};
        var a = qstr.substr(1).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        delete query[""];
        return query;
    };

    this.getRamdomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    this.getRandomParam = function() {
        return 'r=' + (this.getRamdomInt(1, 999999)).toString();
    };
});