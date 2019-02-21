// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var root = this.node.getChildByName("root");
        root.scale = 0;
        root.runAction(
            cc.sequence(
                cc.scaleTo(0.15, 1), 
                cc.scaleTo(0.1, 1.08),
                cc.scaleTo(0.1, 1)
            )
        );
    },


    close () {
        var DialogManager = require("DialogManager");
        DialogManager.closeDialog(this.node);
    }

    

    // update (dt) {},
});
