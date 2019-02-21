
cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Sprite
        },
    },

    onLoad() {
        var bg = this.bg;
        bg.node.runAction(
            cc.fadeTo(0.15, 178)
        );
    },

    close() {
        var bg = this.bg;
        bg.node.runAction(
            cc.fadeTo(0.15, 0)
        )
    }
});
