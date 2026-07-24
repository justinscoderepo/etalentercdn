var document = self.document = {
    parentNode: null, nodeType: 9, toString: function () {
        return "FakeDocument"
    }
};
var window = self.window = self;
var fakeElement = Object.create(document);
fakeElement.nodeType = 1;
fakeElement.toString = function () {
    return "FakeElement"
};
fakeElement.parentNode = fakeElement.firstChild = fakeElement.lastChild = fakeElement;
fakeElement.ownerDocument = document;

document.head = document.body = fakeElement;
document.ownerDocument = document.documentElement = document;
document.getElementById = document.createElement = function () {
    return fakeElement;
};
document.createDocumentFragment = function () {
    return this;
};
document.getElementsByTagName = document.getElementsByClassName = function () {
    return [fakeElement];
};
document.getAttribute = document.setAttribute = document.removeChild =
    document.addEventListener = document.removeEventListener =
        function () {
            return null;
        };
document.cloneNode = document.appendChild = function () {
    return this;
};
document.appendChild = function (child) {
    return child;
};
document.childNodes = [];
document.implementation = {
    createHTMLDocument: function () {
        return document;
    }
}
//var myjQuery = {};
$ = {};
importScripts("/Scripts/Worker/jQuery.js");
onmessage = function (e) {

    var task = e.data[0];

    var parameters = (e.data[1].split('{').length > 1) ? JSON.parse(e.data[1]) : e.data[1];
    var workerResult = "";
    switch (task) {
        case "post": {
            $.ajaxSetup({headers: parameters.headers})
            $.post(parameters.url, parameters.data,
                function (results) {

                    workerResult = JSON.stringify({
                        results: results,
                        workercallbacksi: parameters.workercallbacksi,
                        task: "post"
                    });
                    postMessage(workerResult);
                }).fail(function (xhr, status, error) {
                var failObject = {
                    xhr: xhr,
                    status: status,
                    error: error
                };
                workerResult = JSON.stringify({
                    failObject: failObject,
                    workercallbacksi: parameters.workercallbacksi,
                    task: "postfail"
                });
                postMessage(workerResult);
            });
            break;
        }
        case "get": {

            $.ajaxSetup({headers: parameters.headers})

            $.get(parameters.url, parameters.data,
                function (results) {

                    workerResult = JSON.stringify({
                        results: results,
                        workercallbacksi: parameters.workercallbacksi,
                        task: "get"
                    });
                    postMessage(workerResult);
                }).fail(function (xhr, status, error) {
                var failObject = {
                    xhr: xhr,
                    status: status,
                    error: error
                };
                workerResult = JSON.stringify({
                    failObject: failObject,
                    workercallbacksi: parameters.workercallbacksi,
                    task: "getfail"
                });
                postMessage(workerResult);
            });
            ;
            break;
        }
    }


}