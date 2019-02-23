var ViewManager = {
    view: null,

    stack: null,

    getRoot: function(){
        return cc.find("Canvas/viewRoot");
    },


    showView: function(viewName, viewArgs){
        console.log("ViewManager showView", viewName);
        cc.loader.loadRes("prefab/view/"+viewName, cc.Prefab, function(err, prefab) {
            if (err) {
                console.error(err);
                return;
            }
            if(this.view){
                this.view.destroy();
                this.view = null;
            }

            var view =  cc.instantiate(prefab);
            this.view = view;

            var widget = view.addComponent(cc.Widget);
            widget.isAlignTop = true;
            widget.isAlignBottom = true;
            widget.isAlighLeft = true;
            widget.isAlignRight = true;
            widget.top = 0;
            widget.bottom = 0;
            widget.left = 0;
            widget.rght = 0;

            var viewRoot = this.getRoot();
            viewRoot.addChild(view);



            var script = view.getComponent(viewName);
            script.init(viewArgs);
            
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

