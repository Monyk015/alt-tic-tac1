// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Phx = require("bucklescript-phx/src/phx.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var opts = (
    function () {
        return {
            params: {
                token: window.userToken
            }
        }
    }
);

var eta = Phx.initSocket(Caml_option.some(opts), "/socket");

var socket = Phx.putOnClose((function (param) {
        console.log("Socket closed");
        return /* () */0;
      }), Phx.connectSocket(undefined, eta));

exports.opts = opts;
exports.socket = socket;
/* opts Not a pure module */
