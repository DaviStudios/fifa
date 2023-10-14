gdjs.RankSceneCode = {};
gdjs.RankSceneCode.GDfieldObjects1= [];
gdjs.RankSceneCode.GDfieldObjects2= [];
gdjs.RankSceneCode.GDtxt_9595buttonObjects1= [];
gdjs.RankSceneCode.GDtxt_9595buttonObjects2= [];
gdjs.RankSceneCode.GDbuttonObjects1= [];
gdjs.RankSceneCode.GDbuttonObjects2= [];
gdjs.RankSceneCode.GDtxt_9595controlsObjects1= [];
gdjs.RankSceneCode.GDtxt_9595controlsObjects2= [];
gdjs.RankSceneCode.GDDavid_9595CardObjects1= [];
gdjs.RankSceneCode.GDDavid_9595CardObjects2= [];
gdjs.RankSceneCode.GDLukas_9595cardObjects1= [];
gdjs.RankSceneCode.GDLukas_9595cardObjects2= [];
gdjs.RankSceneCode.GDVlasta_9595cardObjects1= [];
gdjs.RankSceneCode.GDVlasta_9595cardObjects2= [];
gdjs.RankSceneCode.GDcursorObjects1= [];
gdjs.RankSceneCode.GDcursorObjects2= [];


gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RankSceneCode.GDbuttonObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.RankSceneCode.GDtxt_9595buttonObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.RankSceneCode.GDcursorObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RankSceneCode.GDbuttonObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.RankSceneCode.GDtxt_9595buttonObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RankSceneCode.GDbuttonObjects1});
gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.RankSceneCode.GDbuttonObjects1});
gdjs.RankSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RankSceneCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.RankSceneCode.GDtxt_9595buttonObjects1);
gdjs.RankSceneCode.GDcursorObjects1.length = 0;

{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects, 8, 8, 10, "idle", "hover", gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDtxt_95959595buttonObjects1Objects, "Back to menu", "", "back", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.RankSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RankSceneCode.GDcursorObjects1[i].getBehavior("Resizable").setSize(24, 24);
}
}{for(var i = 0, len = gdjs.RankSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RankSceneCode.GDcursorObjects1[i].setZOrder(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RankSceneCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.RankSceneCode.GDtxt_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects, gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDtxt_95959595buttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RankSceneCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.RankSceneCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.RankSceneCode.mapOfGDgdjs_9546RankSceneCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.RankSceneCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.RankSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.RankSceneCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.RankSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RankSceneCode.GDfieldObjects1.length = 0;
gdjs.RankSceneCode.GDfieldObjects2.length = 0;
gdjs.RankSceneCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.RankSceneCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.RankSceneCode.GDbuttonObjects1.length = 0;
gdjs.RankSceneCode.GDbuttonObjects2.length = 0;
gdjs.RankSceneCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.RankSceneCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.RankSceneCode.GDDavid_9595CardObjects1.length = 0;
gdjs.RankSceneCode.GDDavid_9595CardObjects2.length = 0;
gdjs.RankSceneCode.GDLukas_9595cardObjects1.length = 0;
gdjs.RankSceneCode.GDLukas_9595cardObjects2.length = 0;
gdjs.RankSceneCode.GDVlasta_9595cardObjects1.length = 0;
gdjs.RankSceneCode.GDVlasta_9595cardObjects2.length = 0;
gdjs.RankSceneCode.GDcursorObjects1.length = 0;
gdjs.RankSceneCode.GDcursorObjects2.length = 0;

gdjs.RankSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['RankSceneCode'] = gdjs.RankSceneCode;
