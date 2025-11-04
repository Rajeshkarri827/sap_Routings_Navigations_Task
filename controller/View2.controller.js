sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], (Controller, UIComponent,History) => {
    "use strict";

    return Controller.extend("project2.controller.View2", {
        onInit() {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("TargetView2").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched(oEvent) {
            var sPath = oEvent.getParameter("arguments").empId;
             sPath = decodeURIComponent(sPath)
            this.getView().bindElement({ path: sPath });
        },

        // onNavBack() {
        //     // const oRouter = UIComponent.getRouterFor(this);
        //     // oRouter.navTo("RouteView1");
        // }

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
 
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1", {}, true);
            }
        }
    });
});
