cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    ctor: function(){
        this.scaleRate = 0.9;
        this.scaleTime = 0.15;
    },

    onLoad: function(){
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    },

    onTouchStart: function(){
        if(!this.scaleAni){
            this.initScaleX = this.node.scaleX;
            this.initScaleY = this.node.scaleY;
            this.boundingBox = this.node.getBoundingBoxToWorld();
        }
        if(this.initScaleX == undefined){
            return;
        }
        this.isTouchIn = true;
        this.scaleToSmall();
    },

    onTouchEnd: function(){
        if(this.initScaleX == undefined){
            return;
        }
        this.scaleToNormal();
    },

    onTouchCancel: function(){
        if(this.initScaleX == undefined){
            return;
        }
        this.scaleToNormal();
    },

    onTouchMove: function(event){
        if(this.initScaleX == undefined){
            return;
        }       
        if (this.boundingBox.contains(event.getLocation())){
            if(!this.isTouchIn){
                this.isTouchIn = true;
                this.scaleToSmall();
            }
        }else{
            if(this.isTouchIn){
                this.isTouchIn = false;
                this.scaleToNormal();
            }
        }
    },

    scaleToSmall: function(){
        if(this.scaleAni){
            this.node.stopAction(this.scaleAni);
            this.scaleAni = null;
        }

        this.scaleAni = this.node.runAction(
            cc.sequence(
                cc.scaleTo(this.scaleTime, this.initScaleX* this.scaleRate, this.initScaleY* this.scaleRate),
                cc.callFunc(function(){
                    this.scaleAni = null;
                }, this)
            )
        );
    },

    scaleToNormal: function(){
        if(this.scaleAni){
            this.node.stopAction(this.scaleAni);
            this.scaleAni = null;
        }
        this.scaleAni = this.node.runAction(
            cc.sequence(
                cc.scaleTo(this.scaleTime, this.initScaleX, this.initScaleY),
                cc.callFunc(function(){
                    this.scaleAni = null;
                }, this)
            )
        );
    }
});
