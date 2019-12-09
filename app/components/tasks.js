'use strict';

var React = require('react-native');
var {
    ListView,
    RecyclerViewBackedScrollView,
    Text,
    View,
} = React;

var TodosStore = require("../stores/todos-store");
var TodosActionCreators = require("../action-creators/todos-action-creators");

var MOCK_TASKS = [
    {
        id: "1",
        name: "Task 1"
    },
    {
        id: "2",
        name: "Task 2"
    }
]

var Tasks = React.createClass({
    componentDidMount: function () {
        TodosStore.addChangeListener(this._onNewChange);
        TodosActionCreators.refresh();
    },

    componentWillUnmount: function () {
        TodosStore.removeChangeListener(this._onNewChange);
    },

    _onNewChange: function () {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(TodosStore.getTodos()),
            loaded: true
        })
    },

    getInitialState: function ()  {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

        var tasks = TodosStore.getTodos();
        if (tasks !== null) {
            ds = ds.cloneWithRows(tasks);
        }

        return {
            dataSource: ds,
            loaded: tasks !== null
        };
    },

    render: function () {
        console.log(this.state);
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} />}
            />
        );
    },

    _renderRow: function (task) {
        return (
            <View>
                <Text>{task.name}</Text>
            </View>
        );
    },
});

module.exports = Tasks;
