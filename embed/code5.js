gdjs.ControlsSceneCode = {};
gdjs.ControlsSceneCode.GDfieldObjects1= [];
gdjs.ControlsSceneCode.GDfieldObjects2= [];
gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1= [];
gdjs.ControlsSceneCode.GDtxt_9595buttonObjects2= [];
gdjs.ControlsSceneCode.GDbuttonObjects1= [];
gdjs.ControlsSceneCode.GDbuttonObjects2= [];
gdjs.ControlsSceneCode.GDtxt_9595controlsObjects1= [];
gdjs.ControlsSceneCode.GDtxt_9595controlsObjects2= [];
gdjs.ControlsSceneCode.GDcursorObjects1= [];
gdjs.ControlsSceneCode.GDcursorObjects2= [];


gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlsSceneCode.GDbuttonObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.ControlsSceneCode.GDcursorObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlsSceneCode.GDbuttonObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlsSceneCode.GDbuttonObjects1});
gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlsSceneCode.GDbuttonObjects1});
gdjs.ControlsSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.ControlsSceneCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1);
gdjs.ControlsSceneCode.GDcursorObjects1.length = 0;

{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects, 8, 8, 10, "idle", "hover", gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDtxt_95959595buttonObjects1Objects, "Back to menu", "", "back", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.ControlsSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.ControlsSceneCode.GDcursorObjects1[i].getBehavior("Resizable").setSize(24, 24);
}
}{for(var i = 0, len = gdjs.ControlsSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.ControlsSceneCode.GDcursorObjects1[i].setZOrder(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.ControlsSceneCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects, gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDtxt_95959595buttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.ControlsSceneCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.ControlsSceneCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.ControlsSceneCode.mapOfGDgdjs_9546ControlsSceneCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (5 == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.ControlsSceneCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.ControlsSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.ControlsSceneCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.ControlsSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsSceneCode.GDfieldObjects1.length = 0;
gdjs.ControlsSceneCode.GDfieldObjects2.length = 0;
gdjs.ControlsSceneCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.ControlsSceneCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.ControlsSceneCode.GDbuttonObjects1.length = 0;
gdjs.ControlsSceneCode.GDbuttonObjects2.length = 0;
gdjs.ControlsSceneCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.ControlsSceneCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.ControlsSceneCode.GDcursorObjects1.length = 0;
gdjs.ControlsSceneCode.GDcursorObjects2.length = 0;

gdjs.ControlsSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['ControlsSceneCode'] = gdjs.ControlsSceneCode;
