var UrlHelper = function(){};

UrlHelper.getQueryString = function(){
    return window.location.search;
};

UrlHelper.parseQueryString = function(qstr){
    var self = UrlHelper;
    if(!qstr){
        qstr = self.getQueryString();
    }
    var query = {};
    var a = qstr.substr(1).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    delete query[""];
    return query;
};

UrlHelper.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

UrlHelper.getRandomParam = function() {
    var self = UrlHelper;
    return 'r=' + (self.getRandomInt(1, 999999)).toString();
};
