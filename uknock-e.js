//easy version of uknock since knocker is used
var hosts = [];
var ports = [];
var knocker = require('knocker')
var ping = require('ping');

function check() {
    hosts.forEach(function (host) {
        setTimeout(function () {
            ping.promise.probe(host)
                .then(function (res) {
                    console.log(res.alive)
                    check();
                    if (res.alive === false) {
                        console.log("entering")
                        opening();
                    //     return(res.alive);
                    //     exports.check = res.alive
                    }
                });
        }, 10000)
    });

}
check();

function opening (){
    let i = 0
        setTimeout(function open(){
            if (i<ports.length){
                knocker.setTarget('')
                    .knock(ports[i])
                console.log("Knocking " + ports[i])
                i++;
                open()
            }else{
                console.log("Knocking completed");
                return("opened");
            }
        },100)
}
