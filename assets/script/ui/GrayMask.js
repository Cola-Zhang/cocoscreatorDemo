
cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Sprite
        },
    },

    onLoad: function() {
        var bg = this.bg;
        bg.node.runAction(
            cc.fadeTo(0.15, 178)
        );
    },

    close: function() {
        var bg = this.bg;
        bg.node.runAction(
            cc.sequence(
                cc.fadeTo(0.15, 0),
                cc.callFunc(function(){
                    this.node.destroy();
                }, this)
            )
        );
    }
});
