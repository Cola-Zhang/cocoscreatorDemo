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

    ctor: function(){
        this._isCloseOnSide = true;
    },

    onLoad: function() {
        this.createTouchCoverAll();
        var root = this.node.getChildByName("root");
        this.root = root;
        this.grayMask = this.node.getChildByName("GrayMask");
        root.scale = 0;
        root.runAction(
            cc.sequence(
                cc.scaleTo(0.15, 1), 
                cc.scaleTo(0.1, 1.08),
                cc.scaleTo(0.1, 1),
                cc.callFunc(function(){
                    this.onAnimationInFinish();
                }, this)
            )
        );
    },

    close: function() {
        DialogManager.closeDialog(this.node);
    },

    doClose: function() {
        this.createTouchCoverAll();
        this.root.runAction(
            cc.sequence(
                cc.scaleTo(0.1, 1.04), 
                cc.scaleTo(0.1, 1),
                cc.scaleTo(0.15, 0),
                cc.callFunc(function(){
                    this.node.destroy();
                }, this)
            )
        );
        this.grayMask.getComponent(this.grayMask.getName()).close();
    },

    setCloseOnSide: function(isCloseOnSide){
        this._isCloseOnSide = isCloseOnSide;
    },

    getRoot: function(){
        return this.node.getChildByName("root");
    },

    onAnimationInFinish: function(){
        this.removeTouchCoverAll();
        if(this._isCloseOnSide){
            this.root.on(cc.Node.EventType.TOUCH_END, function(){

            }, this);
            this.grayMask.on(cc.Node.EventType.TOUCH_END, function(a,b){
                this.close();
            }, this);
        }
    },

    createTouchCoverAll: function(){
        if(!this.touchCoverNode){
            this.touchCoverNode = UIManager.newTouchCover();
            console.log("createTouchCoverAll");
            this.node.addChild(this.touchCoverNode, 100);
        }
    },

    removeTouchCoverAll: function(){
        if(this.touchCoverNode){
            this.touchCoverNode.destroy();
        }
    }






    // update (dt) {},
});
