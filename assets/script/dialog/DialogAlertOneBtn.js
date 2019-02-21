
cc.Class({
    extends: require("DialogAlertBase"),

    properties: {
        contentLabel: {
            default: null,
            type: cc.Label
        },

        button: {
            default: null,
            type: cc.Button
        }
    },

    init: function(args){
        console.log("DialogConfirmOneBtn init args", args);
        var content = args.content;
        var caller = args.caller;
        var callback = args.callback;
        var btnClickClose = args.btnClickClose;
        if (btnClickClose == undefined){
            btnClickClose = true;
        }

        if(content){
            this.contentLabel.string = content;
        }
        
        this.button.node.on('click', function(){
            if(callback){
                callback.call(caller);
            }
            if(btnClickClose){
                this.close();
            }
        }, this);
    },
});
