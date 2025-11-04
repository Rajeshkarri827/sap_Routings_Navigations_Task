sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
            const oModel = new sap.ui.model.json.JSONModel("../model/data.json");
            this.getView().setModel(oModel);
        },

        onSelect(oEvent) {
            // const oItem = oEvent.getParameter("listItem");
            var sPath=oEvent.getSource().getBindingContext().getPath()
            // const sPath = oItem.getBindingContext().getPath();
            // const sIndex = sPath.split("/")[2];
            sPath=encodeURIComponent(sPath);
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("TargetView2", { empId: sPath });
        }
    });
});
