var getJSON = function(url, callback) {
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', url, true);
    xmlhttprequest.responseType = 'json';
    xmlhttprequest.onload = function() {
        var status = xmlhttprequest.status;
        if (status == 200) {
            callback(null, xmlhttprequest.response);
        } else {
            callback(status, xmlhttprequest.response);
        }
    };
    xmlhttprequest.send();
};

getJSON('http://localhost:8080/customers', function(err, data) {
    if (err != null) {
        console.error(err);
    } else {
        var display = `ID: ${data.customerID}`;
    }
    console.log(display);
});