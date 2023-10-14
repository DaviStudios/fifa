gdjs.AdminCode = {};
gdjs.AdminCode.GDfieldObjects1= [];
gdjs.AdminCode.GDfieldObjects2= [];
gdjs.AdminCode.GDtxt_9595buttonObjects1= [];
gdjs.AdminCode.GDtxt_9595buttonObjects2= [];
gdjs.AdminCode.GDbuttonObjects1= [];
gdjs.AdminCode.GDbuttonObjects2= [];
gdjs.AdminCode.GDtxt_9595controlsObjects1= [];
gdjs.AdminCode.GDtxt_9595controlsObjects2= [];
gdjs.AdminCode.GDnewIDObjects1= [];
gdjs.AdminCode.GDnewIDObjects2= [];
gdjs.AdminCode.GDYellowButtonObjects1= [];
gdjs.AdminCode.GDYellowButtonObjects2= [];
gdjs.AdminCode.GDcursorObjects1= [];
gdjs.AdminCode.GDcursorObjects2= [];


gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.AdminCode.GDbuttonObjects1});
gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.AdminCode.GDtxt_9595buttonObjects1});
gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.AdminCode.GDbuttonObjects1});
gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.AdminCode.GDtxt_9595buttonObjects1});
gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.AdminCode.GDbuttonObjects1});
gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.AdminCode.GDbuttonObjects1});
gdjs.AdminCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.AdminCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.AdminCode.GDtxt_9595buttonObjects1);
{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects, 8, 8, 10, "idle", "hover", gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDtxt_95959595buttonObjects1Objects, "Back to menu", "", "back", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.AdminCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.AdminCode.GDtxt_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects, gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDtxt_95959595buttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.AdminCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.AdminCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.AdminCode.mapOfGDgdjs_9546AdminCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.AdminCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AdminCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.AdminCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AdminCode.GDYellowButtonObjects1[k] = gdjs.AdminCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.AdminCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("newID"), gdjs.AdminCode.GDnewIDObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("User", "ID", (( gdjs.AdminCode.GDnewIDObjects1.length === 0 ) ? "" :gdjs.AdminCode.GDnewIDObjects1[0].getString()));
}}

}


};

gdjs.AdminCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AdminCode.GDfieldObjects1.length = 0;
gdjs.AdminCode.GDfieldObjects2.length = 0;
gdjs.AdminCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.AdminCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.AdminCode.GDbuttonObjects1.length = 0;
gdjs.AdminCode.GDbuttonObjects2.length = 0;
gdjs.AdminCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.AdminCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.AdminCode.GDnewIDObjects1.length = 0;
gdjs.AdminCode.GDnewIDObjects2.length = 0;
gdjs.AdminCode.GDYellowButtonObjects1.length = 0;
gdjs.AdminCode.GDYellowButtonObjects2.length = 0;
gdjs.AdminCode.GDcursorObjects1.length = 0;
gdjs.AdminCode.GDcursorObjects2.length = 0;

gdjs.AdminCode.eventsList0(runtimeScene);

return;

}

gdjs['AdminCode'] = gdjs.AdminCode;
