
cc.Class({
    extends: require("DialogBase"),

    close: function() {
        var DialogManager = require("DialogManager");
        DialogManager.closeDialog(this.node);
    }
});
