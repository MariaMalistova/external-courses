function fetchPolyfill(url, options = {method: "GET", body: {}, headers: {}}) {
    let xhr = new XMLHttpRequest();  
  
    return new Promise(function(resolve, reject) {
        xhr.onload = function () {
            resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function() {  
            reject(xhr.status + ': ' + xhr.statusText);  
        };  
        xhr.open(options.method, url);  
        if (options) {
            for (let header in options.headers) {
                if (options.headers.hasOwnProperty(header)) {
                    xhr.setRequestHeader(header, options.headers[header]);    
                }    
            }
            xhr.send(options.body);         
        } 
        else {
            xhr.send();
        }          
    });
}