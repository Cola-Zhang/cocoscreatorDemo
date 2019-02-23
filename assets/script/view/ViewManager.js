var ViewManager = {
    view: null,

    stack: null,

    getRoot: function(){
        return cc.find("Canvas/viewRoot");
    },

    showView: function(viewName, viewArgs){
        console.log("ViewManager showView", viewName);
        cc.loader.loadResArray(["prefab/view/"+viewName,"prefab/ui/TouchBlockGrayMask"], cc.Prefab, function(err, prefabs) {
            if (err) {
                console.error(err);
                return;
            }
            if (this.touchBlockGrayMask){
                this.touchBlockGrayMask.destroy();
                touchBlockGrayMask = null;
            }
            
            if (this.oldView){
                this.oldView.destroy();
                this.oldView = null;
            }
            this.oldView = this.view;

            var view =  cc.instantiate(prefabs[0]);
            this.view = view;
            var widget = view.addComponent(cc.Widget);
            widget.isAlignTop = true;
            widget.isAlignBottom = true;
            widget.isAlighLeft = true;
            widget.isAlignRight = true;
            widget.top = 0;
            widget.bottom = 0;
            widget.left = 0;
            widget.right = 0;
            var viewRoot = this.getRoot();
            viewRoot.addChild(view);
            var script = view.getComponent(viewName);
            script.init(viewArgs);
            if(this.oldView){
                view.active = false;
                var touchBlockGrayMask = cc.instantiate(prefabs[1]);
                this.touchBlockGrayMask = touchBlockGrayMask;
                UIManager.getCanvas().addChild(touchBlockGrayMask);
                var maskBg = touchBlockGrayMask.getChildByName("bg");
                maskBg.opacity = 0;
                maskBg.runAction(cc.sequence(
                    cc.delayTime(0.03),
                    cc.fadeTo(0.1,204),
                    cc.callFunc(function(){
                        if (this.oldView){
                            this.oldView.destroy();
                            this.oldView = null;
                        }
                        view.active = true;
                    }, this),
                    cc.fadeTo(0.1, 0),
                    cc.callFunc(function(){
                        if (this.touchBlockGrayMask){
                            this.touchBlockGrayMask.destroy();
                            touchBlockGrayMask = null;
                        }
                        script.onAnimationInFinish();
                    }, this)
                ));
            }else{
                script.scheduleOnce(function(){
                    script.onAnimationInFinish();
                }.bind(this), 0.01);
            }
        }.bind(this));
    },

    closeView: function(){
        if (view){   
            var script = view.getComponent(view.getName());
            script.doClose();
        }
    },

    getView: function(){
        return this.view;
    },

    reset: function(){
        this.view = null;
        this.stack = [];
    }
};

window.ViewManager = ViewManager;

