const net = require("net");
var knocks = [];
var ip = "";
try {
    function knock(knocks, ip) {
        let i = 0
        while (i < knocks.length) {
            net.connect(knocks[i], ip)
            console.log("Knocking  " + knocks[i])
            i++
        }
        return (console.log("Knocking complete"));
    }
} catch {
    //ETIMEOUT IS NORMAL
}
knock(knocks, ip);
