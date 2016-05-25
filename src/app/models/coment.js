function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

var Comment = function(api) {
    this.api = api;
    this.items = [];
    this.busy = false;
    this.after = '';
    this.page = 1;
};

Comment.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    var params = UrlHelper.parseQueryString();
    params['page'] = this.page;

    this.api.getComments(params,
        function(items){
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after = "t3_" + this.items[this.items.length - 1];
            this.busy = false;
            this.page += 1;
        }.bind(this),
        function(response){}.bind(this)
    );
};