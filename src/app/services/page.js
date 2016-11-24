function settingPage(){
    var title = 'default';
    var url = 'http://proyectos.adiahost.com/mundicar/api/api.php/';
    return {
        title: function() { return title+" - MundiCar"; },
        setTitle: function(newTitle) { title = newTitle; },
        //
        urlAPI: function(urlAPI) {
            return url+urlAPI;
        }
    };
};

module.exports = settingPage;