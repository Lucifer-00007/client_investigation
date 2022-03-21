// var j = require('node-fetch');

const request = require('request');

var a = 'TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDExOyBDUEgxOTM3KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTguMC40NzU4LjEwMSBNb2JpbGUgU2FmYXJpLzUzNy4zNnx8MTA2LjIwNy4yMzIuMjMy'

var full_data = Buffer.from(a, 'base64').toString();
var ip = full_data.split("||")[1];
var phone_code = (full_data.split(";")[2].split(")")[0]).trim();


console.log("Full: ", full_data); 
console.log("IP: ", ip); 
console.log("Phone_Code: ", phone_code); 


var my_url = 'http://api.ipstack.com/103.204.169.150?access_key=b6f9e38ce9897f8f5a87ac1c8162265f&format=1';

request(my_url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }

  console.log("city: ", body.city);
  console.log("region: ", body.region_name);
});


// https://storage.googleapis.com/play_public/supported_devices.html

