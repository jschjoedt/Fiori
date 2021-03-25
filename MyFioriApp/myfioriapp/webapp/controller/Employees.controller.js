sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("my.fiori.app.myfioriapp.controller.Employees", {
			onInit: function () {

            },
            
            handleSayHelloButtonPress: function(oEvent) {
                MessageToast.show("Hello from mighty button!");
            }
		});
	});
