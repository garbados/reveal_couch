var couchapp = require('couchapp')
  , path = require('path')
  , fs = require('fs');

ddoc = {
    _id: '_design/app'
  , views: {}
  , lists: {}
  , shows: {}
};

couchapp.loadAttachments(ddoc, __dirname);

module.exports = ddoc;