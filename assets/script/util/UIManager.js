var UIManager = {
    getViewRoot: function(){
        return cc.find("Canvas/viewRoot");
    },

    showScene: function(){
        console.log("showScene");
    },

    showDialogConfimeOneBtn: function(){
        var DialogManager = require("DialogManager");
        DialogManager.showDialog("DialogConfirmOneBtn");
    }
};

module.exports = UIManager;

//window.UIManager = UIManager;

