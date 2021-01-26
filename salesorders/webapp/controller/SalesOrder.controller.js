sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("sap.sales.order.info.salesorders.controller.SalesOrder", {
			onInit: function () {

            },
            
            onListItemPress: function(oEvent) {
                var oListItem = oEvent.getSource();
                var sMessage = "Pressed: " + oListItem.getDescription() + " --> " + oListItem.getInfo(); 
                MessageToast.show(sMessage);
            }
		});
	});
