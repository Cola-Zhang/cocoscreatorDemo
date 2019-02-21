
cc.Class({
    extends: require("DialogAlertBase"),

    properties: {
        contentLabel: {
            default: null,
            type: cc.Label
        },

        confirmBtn: {
            default: null,
            type: cc.Button
        },

        cancelBtn: {
            default: null, 
            type: cc.Button
        }
    },

    init: function(args){
        console.log("DialogConfirmTwoBtn init");
        var content = args.content;
        var caller = args.caller;
        var confirmCallback = args.confirmCallback;
        var cancelCallback = args.cancelCallback;
        var btnClickClose = args.btnClickClose;
        if (btnClickClose == undefined){
            btnClickClose = true;
        }
        if(content){
            this.contentLabel.string = content;
        }
        this.confirmBtn.node.on('click', function(){
            if(confirmCallback){
                confirmCallback.call(caller);
            }
            if(btnClickClose){
                this.close();
            }
        }, this);

        this.cancelBtn.node.on('click', function(){
            if(cancelCallback){
                cancelCallback.call(caller);
            }
            if(btnClickClose){
                this.close();
            }
        }, this);
    }
});
