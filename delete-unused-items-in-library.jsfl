var dom = fl.getDocumentDOM();
var lib = dom.library;
var items = lib.unusedItems;

for(var i = 0; i < items.length; i++)
{     
	fl.trace( items[i].name );
	lib.deleteItem(items[i].name);
}