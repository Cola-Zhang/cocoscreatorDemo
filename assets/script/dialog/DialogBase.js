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

    init: function(){
        
    },

    onLoad: function() {
        this.createTouchBlockNode();
        var root = this.node.getChildByName("root");
        this.root = root;
        var grayMask = this.node.getChildByName("TouchBlockGrayMask");
        this.grayMaskScript = grayMask.getComponent(grayMask.getName());
        this.grayMaskScript.show();
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
        this.createTouchBlockNode();
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
        this.grayMaskScript.close();
    },

    setCloseOnSide: function(isCloseOnSide){
        this._isCloseOnSide = isCloseOnSide;
    },

    getRoot: function(){
        return this.node.getChildByName("root");
    },

    onAnimationInFinish: function(){
        this.removeTouchBlockNode();
        if(this._isCloseOnSide){
            this.root.on(cc.Node.EventType.TOUCH_END, function(){

            }, this);
            this.grayMask.on(cc.Node.EventType.TOUCH_END, function(a,b){
                this.close();
            }, this);
        }
    },

    createTouchBlockNode: function(){
        if(!this.touchBlockNode){
            this.touchBlockNode = UIManager.newTouchBlock();
            this.node.addChild(this.touchBlockNode, 100);
        }
    },

    removeTouchBlockNode: function(){
        if(this.touchBlockNode){
            this.touchBlockNode.destroy();
        }
    }






    // update (dt) {},
});
