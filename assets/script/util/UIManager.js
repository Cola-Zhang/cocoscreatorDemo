
var UIManager = {
    
    getCanvas: function(){
        return cc.find("Canvas");
    },

    showViewLaunch: function(){
        ViewManager.showView("ViewLaunch");
    },

    showViewMain: function(){
        ViewManager.showView("ViewMain")
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
        DialogManager.showDialog("DialogAlertOneBtn", args);
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
        DialogManager.showDialog("DialogAlertTwoBtn", args);
    },

    newTouchBlock: function(){
        var node=new cc.Node();
        var blockInputEvents = node.addComponent(cc.BlockInputEvents);
        node.width = 640;
        node.height = 1136;
        return node;
    },
};

window.UIManager = UIManager;

