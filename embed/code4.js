gdjs.StatsCode = {};
gdjs.StatsCode.GDfieldObjects1= [];
gdjs.StatsCode.GDfieldObjects2= [];
gdjs.StatsCode.GDtxt_9595buttonObjects1= [];
gdjs.StatsCode.GDtxt_9595buttonObjects2= [];
gdjs.StatsCode.GDbuttonObjects1= [];
gdjs.StatsCode.GDbuttonObjects2= [];
gdjs.StatsCode.GDtxt_9595controlsObjects1= [];
gdjs.StatsCode.GDtxt_9595controlsObjects2= [];
gdjs.StatsCode.GDtxt_9595controls2Objects1= [];
gdjs.StatsCode.GDtxt_9595controls2Objects2= [];
gdjs.StatsCode.GDtxt_9595controls4Objects1= [];
gdjs.StatsCode.GDtxt_9595controls4Objects2= [];
gdjs.StatsCode.GDtxt_9595controls5Objects1= [];
gdjs.StatsCode.GDtxt_9595controls5Objects2= [];
gdjs.StatsCode.GDtxt_9595controls3Objects1= [];
gdjs.StatsCode.GDtxt_9595controls3Objects2= [];
gdjs.StatsCode.GDGreenFlatBarObjects1= [];
gdjs.StatsCode.GDGreenFlatBarObjects2= [];
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.StatsCode.GDcursorObjects1= [];
gdjs.StatsCode.GDcursorObjects2= [];


gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.StatsCode.GDbuttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.StatsCode.GDtxt_9595buttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.StatsCode.GDbuttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.StatsCode.GDtxt_9595buttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.StatsCode.GDbuttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.StatsCode.GDbuttonObjects1});
gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.StatsCode.GDcursorObjects1});
gdjs.StatsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.StatsCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.StatsCode.GDtxt_9595buttonObjects1);
{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects, 8, 8, 10, "idle", "hover", gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDtxt_95959595buttonObjects1Objects, "Back to menu", "", "back", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WebSocketClient__Connect.func(runtimeScene, "ws://server-fifa87.scpbriza.repl.co:8080", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.StatsCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.StatsCode.GDtxt_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects, gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDtxt_95959595buttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.StatsCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.StatsCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDbuttonObjects1Objects, "back", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.StatsCode.GDcursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StatsCode.mapOfGDgdjs_9546StatsCode_9546GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.StatsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDcursorObjects1[i].getBehavior("Resizable").setSize(24, 24);
}
}{for(var i = 0, len = gdjs.StatsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDcursorObjects1[i].setZOrder(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (5 == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.StatsCode.GDGreenFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StatsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_controls3"), gdjs.StatsCode.GDtxt_9595controls3Objects1);
gdjs.copyArray(runtimeScene.getObjects("txt_controls5"), gdjs.StatsCode.GDtxt_9595controls5Objects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.StatsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.StatsCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDGreenFlatBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StatsCode.GDtxt_9595controls3Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtxt_9595controls3Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString());
}
}{for(var i = 0, len = gdjs.StatsCode.GDtxt_9595controls5Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDtxt_9595controls5Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(19).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", "ID");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("User", "ID", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8687268);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WebSocketClient__Send.func(runtimeScene, "ID: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WebSocketClient__Send.func(runtimeScene, "GOALS: " + runtimeScene.getGame().getVariables().getFromIndex(19).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8689500);
}
}
if (isConditionTrue_0) {
}

}


};

gdjs.StatsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StatsCode.GDfieldObjects1.length = 0;
gdjs.StatsCode.GDfieldObjects2.length = 0;
gdjs.StatsCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.StatsCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.StatsCode.GDbuttonObjects1.length = 0;
gdjs.StatsCode.GDbuttonObjects2.length = 0;
gdjs.StatsCode.GDtxt_9595controlsObjects1.length = 0;
gdjs.StatsCode.GDtxt_9595controlsObjects2.length = 0;
gdjs.StatsCode.GDtxt_9595controls2Objects1.length = 0;
gdjs.StatsCode.GDtxt_9595controls2Objects2.length = 0;
gdjs.StatsCode.GDtxt_9595controls4Objects1.length = 0;
gdjs.StatsCode.GDtxt_9595controls4Objects2.length = 0;
gdjs.StatsCode.GDtxt_9595controls5Objects1.length = 0;
gdjs.StatsCode.GDtxt_9595controls5Objects2.length = 0;
gdjs.StatsCode.GDtxt_9595controls3Objects1.length = 0;
gdjs.StatsCode.GDtxt_9595controls3Objects2.length = 0;
gdjs.StatsCode.GDGreenFlatBarObjects1.length = 0;
gdjs.StatsCode.GDGreenFlatBarObjects2.length = 0;
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.StatsCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.StatsCode.GDcursorObjects1.length = 0;
gdjs.StatsCode.GDcursorObjects2.length = 0;

gdjs.StatsCode.eventsList0(runtimeScene);

return;

}

gdjs['StatsCode'] = gdjs.StatsCode;
