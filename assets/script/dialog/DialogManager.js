var DialogManager = {
    stack: [],

    getDialogRoot: function(){
        return cc.find("Canvas/dialogRoot");
    },


    showDialog: function(dialogName, dialogArgs){
        console.log("DialogManager showDialog", dialogName);
        var self = this;
        cc.loader.loadRes("prefab/dialog/"+dialogName, cc.Prefab, function(err, prefab) {
            if (err) {
                console.error(err);
                return;
            }
            var dialog =  cc.instantiate(prefab);
            var dialogRoot = self.getDialogRoot();
            dialogRoot.addChild(dialog);
            var script = dialog.getComponent(dialogName);
            script.init(dialogArgs);
            self.stack.push(dialog);
        });
    },

    closeDialog: function(dialog){
        var stack = this.stack;
        if (dialog) {
            for(let i= stack.length-1;i>=0;i--){
                if(stack[i] == dialog){
                    stack.splice(i, 1);
                }
            }
        }else{
            dialog = stack.pop();
        }
        if (dialog){
            console.log("DialgManager closeDialog find ok");
            var script = dialog.getComponent(dialog.getName());
            script.doClose();
        }else{
            console.log("DialogManager can't find");
        }
    },

    getDialog: function(dialogName){
        var stack = this.stack;
        for(let i= stack.length-1;i>=0;i++){
            let dialog = stack[i];
            console.log("DialogManager getDialog name", dialog.getName());
        }
    },

    closeAllDialog: function(){
        var stack = this.stack;
        for(let i= stack.length-1;i>=0;i--){
            let dialog = stack[i];
            dialog.destroy();
        }
        this.stack = [];
    },

    reset: function(){
        this.stack = [];
    }
};

window.DialogManager = DialogManager;

