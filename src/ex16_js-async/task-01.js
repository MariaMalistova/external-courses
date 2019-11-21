function fetchLike(url, options) {
    let xhr = new XMLHttpRequest();
    let method;
    if (options) {
        method = "POST";
    } 
    else {
        method = "GET"; 
    }   
  
    return new Promise(function(resolve, reject) {
        xhr.onload = function () {
            resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function() {  
            reject(xhr.status + ': ' + xhr.statusText);  
        };  
        xhr.open(method, url);  
        if (options) {
            for (let header in options.headers) {
                if (header in options.headers) {
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