var si = require('systeminformation');
var getIP = require('external-ip');

var ipAddress;
var lang;
var software;
var cpu;
var os;

module.exports = function(inLang){
  lang = inLang;
  return getInfo();
}

  function getInfo(){

  getIP(function(err, ip){
    if(err){
      throw err;
    }
    ipAddress = ip;
  });


  si.osInfo(function(data){
    os = data.distro + " " + data.release;
  });

  si.cpu(function(data) {
    cpu = data.manufacturer;
  });

  return{
    ipAddress: ipAddress,
    language: lang,
    OS: os,
    CPU: cpu
  }
}









// callback style
