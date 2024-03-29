var AppDispatcher = require("../dispatcher/app-dispatcher");
var AppConstants = require("../constants/app-constants");
var RecordActionCreators = require("../action-creators/record-action-creators");
var ActiveUserStore = require("../stores/active-user-store");

var TodosActions = {
    refreshTasks: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_REFRESH,
        });
    },

    completeTask: function (id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_COMPLETE,
            data: {
                task_id: id,
            }
        });
    },

    startTask: function (id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_START,
            data: {
                task_id: id,
            }
        });
    },

    stopTask: function (id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_STOP,
            data: {
                task_id: id,
            }
        });
    },

    deleteTask: function (id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_DELETE,
            data: {
                task_id: id,
            }
        });
    },

    saveTask: function (task) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_SAVE,
            data: {
                task: task,
            }
        });
    },

    editTask: function (task) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODOS_EDIT,
            data: {
                task: task,
            }
        });
    },

    makeGoal: function (task) {
        RecordActionCreators.save('event', {
            name: "TASK_MAKE_GOAL",
            owner_id: ActiveUserStore.getID(),
            data: {
                "task_id": task.id,
            }
        });
    },

    dropGoal: function (task) {
        RecordActionCreators.save('event', {
            name: "TASK_DROP_GOAL",
            owner_id: ActiveUserStore.getID(),
            data: {
                "task_id": task.id,
            }
        });
    }
};

module.exports = TodosActions;
