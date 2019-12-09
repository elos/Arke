/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// --- React Native {{{
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from './app/components/root';

AppRegistry.registerComponent('Arke', () => Root);

// --- }}}

// --- Flux {{{

var Constants = require("./app/constants/app-constants");
var Dispatcher = require("./app/dispatcher/app-dispatcher");

Dispatcher.dispatch({
    actionType: Constants.APP_INITITIALIZED,
});

// --- }}}

// --- DB Changes {{{
var DB = require("./app/core/db");
var RecordActions = require("./app/actions/record-actions");

DB.changes({
    error: function () {
        console.log("yikes");
    },

    resolve: function (recordChange) {
        switch (recordChange.change_kind) {
            case DB.ChangeKind.Update:
                RecordActions.update(recordChange.record_kind, recordChange.record);
                break
            case DB.ChangeKind.Delete:
                RecordActions.delete(recordChange.record_kind, recordChange.record);
                break;
        }
    }
});
// --- }}}
