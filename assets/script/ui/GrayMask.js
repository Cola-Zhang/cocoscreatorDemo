
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
        bg.runAction(
            cc.sequence(
                cc.fadeTo(0.15, 178)
            )
        );
    }
});
