gdjs.RulesCode = {};
gdjs.RulesCode.GDfieldObjects1= [];
gdjs.RulesCode.GDfieldObjects2= [];
gdjs.RulesCode.GDtxt_9595buttonObjects1= [];
gdjs.RulesCode.GDtxt_9595buttonObjects2= [];
gdjs.RulesCode.GDbuttonObjects1= [];
gdjs.RulesCode.GDbuttonObjects2= [];
gdjs.RulesCode.GDtxt_9595controlsObjects1= [];
gdjs.RulesCode.GDtxt_9595controlsObjects2= [];
gdjs.RulesCode.GDcursorObjects1= [];
gdjs.RulesCode.GDcursorObjects2= [];


gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RulesCode.GDbuttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.RulesCode.GDtxt_9595buttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RulesCode.GDbuttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.RulesCode.GDtxt_9595buttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RulesCode.GDbuttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RulesCode.GDbuttonObjects1});
gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.RulesCode.GDcursorObjects1});
gdjs.RulesCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RulesCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.RulesCode.GDtxt_9595buttonObjects1);
{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects, 8, 8, 10, "idle", "hover", gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDtxt_95959595buttonObjects1Objects, "Back to menu", "", "back", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RulesCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.RulesCode.GDtxt_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects, gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDtxt_95959595buttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RulesCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RulesCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.RulesCode.GDcursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RulesCode.mapOfGDgdjs_9546RulesCode_9546GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.RulesCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RulesCode.GDcursorObjects1[i].getBehavior("Resizable").setSize(24, 24);
}
}{for(var i = 0, len = gdjs.RulesCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RulesCode.GDcursorObjects1[i].setZOrder(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (5 == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.RulesCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.RulesCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RulesCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.RulesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RulesCode.GDfieldObjects1.length = 0;
gdjs.RulesCode.GDfieldObjects2.length = 0;
gdjs.RulesCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.RulesCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.RulesCode.GDbuttonObjects1.length = 0;
gdjs.RulesCode.GDbuttonObjects2.length = 0;
gdjs.RulesCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.RulesCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.RulesCode.GDcursorObjects1.length = 0;
gdjs.RulesCode.GDcursorObjects2.length = 0;

gdjs.RulesCode.eventsList0(runtimeScene);

return;

}

gdjs['RulesCode'] = gdjs.RulesCode;
