   'use strict';

    var app = require('app');

    app.on('ready', function() {
      var BrowserWindow = require('browser-window');

      var win = 
      new BrowserWindow({ width: 800, height: 600, show: false, 
               'node-integration':true });
      win.on('closed', function() {
        win = null;
      });

      win.loadUrl('index.html');
      win.show();
    });
