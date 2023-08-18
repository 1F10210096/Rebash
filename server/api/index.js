"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var os_1 = require("os");
var socket_io_1 = require("socket.io");
console.log('wda;@l,afkwlop;fkjma:ep@ofkjmae:iogkajeroglkarlgmagpe]grap');
try {
    var app = (0, express_1.default)();
    var server = http_1.default.createServer(app);
    var apiRouter = express_1.default.Router();
    app.use('/api', apiRouter);
    server.listen(3000, function () {
        console.log('Listening on port 3000...');
    });
    var io_1 = new socket_io_1.Server(server, {
        path: '/socket.io',
    });
    io_1.on('connection', function (socket) {
        // WebSocketの接続が確立したときの処理
        console.log("[connect] ".concat(socket.id));
        console.log(Array.from(io_1.sockets.sockets.keys()));
        // convenience function to log server messages on the client
        function log(text) {
            socket.emit('log', "Message from server: ".concat(text));
        }
        socket.on('message', function (message) {
            log("Client said: ".concat(message));
            // for a real app, would be room-only (not broadcast)
            socket.broadcast.emit('message', message);
        });
        // eslint-disable-next-line complexity
        socket.on('create or join', function (room) {
            log("Received request to create or join room ".concat(room));
            var clientsInRoom = io_1.sockets.adapter.rooms.get(room);
            var numClients = clientsInRoom instanceof Set ? clientsInRoom.size : 0;
            if (typeof clientsInRoom !== 'undefined') {
                log("Room ".concat(room, " now has ").concat(numClients, " client(s)"));
            }
            else {
                log("Room ".concat(room, " does not exist"));
            }
            if (clientsInRoom instanceof Set) {
                // Set<string> の場合の条件を追加
                if (numClients === 0) {
                    socket.join(room);
                    log("Client ID ".concat(socket.id, " created room ").concat(room));
                    socket.emit('created', room, socket.id);
                }
                else if (numClients === 1) {
                    log("Client ID ".concat(socket.id, " joined room ").concat(room));
                    io_1.to(room).emit('join', room);
                    socket.join(room);
                    socket.emit('joined', room, socket.id);
                    io_1.to(room).emit('ready');
                }
                else {
                    // max two clients
                    socket.emit('full', room);
                }
            }
        });
        socket.on('ipaddr', function () {
            var ifaces = os_1.default.networkInterfaces();
            if (typeof ifaces === 'object') {
                for (var dev in ifaces) {
                    if (Object.prototype.hasOwnProperty.call(ifaces, dev)) {
                        var interfaceDetails = ifaces[dev];
                        // eslint-disable-next-line max-depth
                        if (Array.isArray(interfaceDetails)) {
                            interfaceDetails.forEach(function (details) {
                                if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
                                    socket.emit('ipaddr', details.address);
                                }
                            });
                        }
                    }
                }
            }
        });
        socket.on('bye', function () {
            console.log('Received bye');
        });
        socket.on('connect', function () {
            console.log('Connect');
        });
        socket.on('disconnect', function () {
            console.log("[disconnect] ".concat(socket.id));
            console.log(Array.from(io_1.sockets.sockets.keys()));
        });
    });
    io_1.on('connect', function (socket) {
        console.log("[connect] ".concat(socket.id));
        console.log(Array.from(io_1.sockets.sockets.keys()));
    });
}
catch (error) {
    console.log('Error:', error); // エラー内容を表示
}
