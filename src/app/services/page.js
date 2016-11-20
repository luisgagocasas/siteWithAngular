function titlePage(){
    var title = 'default';
    return {
        title: function() { return title+" - MundiCar"; },
        setTitle: function(newTitle) { title = newTitle; }
    };
};

module.exports = titlePage;