App.factory('comments', function(api, uri){
    var Comment = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.page = 1;
        this.limit = 30;
        this.end = false;
    };

    Comment.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        var params = uri.parseQueryString();
        params['page'] = this.page;
        params['limit'] = (params['limit']) ? params['limit'] : this.limit;

        api.getComments(params,
            function(items){
                var length = items.length;
                if(length > 0){
                    for (var i = 0; i < length; i++) {
                        this.items.push(items[i]);
                    }
                    this.after = this.items[this.items.length - 1];
                    this.busy = false;
                    this.page += 1;
                } else {
                    this.end = true;
                }
            }.bind(this),
            function(response){}.bind(this)
        );
    };

    Comment.prototype.removeItem = function(i) {
        //todo: implement logic to remove item from items
    };

    return new Comment();
});