
app.filter('crop', function(){
    return function(text, size){
        return text.substr(0, size) + '...';
    };
});

