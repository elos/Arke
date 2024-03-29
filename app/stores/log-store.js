/*
 * Node's EventEmitter + object-assign
 */
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

/*
 * Require our own modules
 */
var AppDispatcher = require("../dispatcher/app-dispatcher");
var AppConstants = require("../constants/app-constants");

var Logger = require("../utils/logger");

/*
 * LogStore
 *  - Watches all events and prints them to the console.
 */
var LogStore = assign({}, EventEmitter.prototype, {

});

/*
 * Register all event callbacks
 */
AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case AppConstants.RECORD_UPDATE:
        break;
    default:
        Logger.info("LogStore:", action.actionType, action)
  }
});

module.exports = LogStore;
