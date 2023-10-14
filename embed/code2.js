gdjs.BANCode = {};
gdjs.BANCode.GDfieldObjects1= [];
gdjs.BANCode.GDfieldObjects2= [];
gdjs.BANCode.GDtxt_9595buttonObjects1= [];
gdjs.BANCode.GDtxt_9595buttonObjects2= [];
gdjs.BANCode.GDbuttonObjects1= [];
gdjs.BANCode.GDbuttonObjects2= [];
gdjs.BANCode.GDtxt_9595controlsObjects1= [];
gdjs.BANCode.GDtxt_9595controlsObjects2= [];
gdjs.BANCode.GDcursorObjects1= [];
gdjs.BANCode.GDcursorObjects2= [];


gdjs.BANCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};

gdjs.BANCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BANCode.GDfieldObjects1.length = 0;
gdjs.BANCode.GDfieldObjects2.length = 0;
gdjs.BANCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.BANCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.BANCode.GDbuttonObjects1.length = 0;
gdjs.BANCode.GDbuttonObjects2.length = 0;
gdjs.BANCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.BANCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.BANCode.GDcursorObjects1.length = 0;
gdjs.BANCode.GDcursorObjects2.length = 0;

gdjs.BANCode.eventsList0(runtimeScene);

return;

}

gdjs['BANCode'] = gdjs.BANCode;
