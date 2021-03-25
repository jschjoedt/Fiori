/*global QUnit*/

sap.ui.define([
	"myfiori.app./myfioriapp/controller/Employees.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Employees Controller");

	QUnit.test("I should test the Employees controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
