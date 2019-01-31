function getData()
{
	var ko = require("knockout");
	return ko.dataFor($0);	
}

function onCreated(pane)
{
	function updateElementProperties()
	{
		pane.setExpression("(" + getData.toString() + ")()");	
	}

	updateElementProperties();
	
	browser.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
	pane.onShown.addListener(updateElementProperties);
}

console.log("running!");
browser.devtools.panels.elements.createSidebarPane("KOntext").then(onCreated);