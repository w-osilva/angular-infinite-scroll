App.config(function(apiProvider){
    apiProvider.setBaseUrl('//localhost:3000');
    apiProvider.setEndpoints({
        comments: {
            index: '/people.json',
                reprove: '',
                publish: ''
            }
    });
});