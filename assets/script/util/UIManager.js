var DialogManager = require("DialogManager");
var UIManager = {
    getViewRoot: function(){
        return cc.find("Canvas/viewRoot");
    },

    showScene: function(){
        console.log("showScene");
    },

    /**
     * 
     * var args = {
            content: content,
            caller: caller,
            callback: callback,
            btnText: "确定",
            btnClickClose: true
        }
     */
    showDialogAlertConfirm: function(args){
        return DialogManager.showDialog("DialogAlertOneBtn", args);
    },

    /**
     * var args = {
            content: content,
            caller: caller,
            confirmCallback: confirmCallback,
            cancelCallback: cancelCallback,
            btnClickClose: true
        }
     */
    showDialogAlertQuest: function(args){
        return DialogManager.showDialog("DialogAlertTwoBtn", args);
    }
};

module.exports = UIManager;

//window.UIManager = UIManager;

