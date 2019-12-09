'use strict';

var React = require('react-native');

var {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Text,
    View,
} = React;

var ConfigStore = require("../stores/config-store");

var AccountDetails = React.createClass({
    getInitialState: function () {
        return {
            public: ConfigStore.getPublicCredential(),
            private: ConfigStore.getPrivateCredential(),
        };
    },

    render: function () {
        return (
            <View style={Style.View}>
                <Text style={Style.Title}>
                    Account Details
                </Text>
                <View style={Style.TextContainer}>
                    <TextInput
                        autoCapitalize="none"
                        style={Style.Text}
                        onChangeText={(text) => this.setState({public: text})}
                        value={this.state.public}
                        placeholder="Public"
                    />
                </View>
                <View style={Style.TextContainer}>
                    <TextInput
                        autoCapitalize="none"
                        style={Style.Text}
                        onChangeText={(text) => this.setState({private: text})}
                        value={this.state.private}
                        placeholder="Private"
                    />
                </View>
                <TouchableHighlight onPress={this._onPressButton} style={Style.ButtonContainer}>
                    <Text style={Style.Button}> Save </Text>
                </TouchableHighlight>
            </View>
       );
    }
});

var Style = StyleSheet.create({
    View: {
        padding: 10,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },

    Title: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 10,
    },

    TextContainer: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        height: 40,
        width: 300,
        margin: 5,
    },

    Text: {
        height: 40,
    },

    ButtonContainer: {
        width: 100,
        padding: 5,
    },

    Button: {
        color: "#0095F5",
        textAlign: "center",
        fontSize: 20,
    }
})

module.exports = AccountDetails;
