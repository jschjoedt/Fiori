/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"northwind/odata/demo/webapp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
