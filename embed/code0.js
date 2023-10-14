gdjs.MainSceneCode = {};
gdjs.MainSceneCode.GDtitleObjects1= [];
gdjs.MainSceneCode.GDtitleObjects2= [];
gdjs.MainSceneCode.GDtitleObjects3= [];
gdjs.MainSceneCode.GDtitleObjects4= [];
gdjs.MainSceneCode.GDbuttonObjects1= [];
gdjs.MainSceneCode.GDbuttonObjects2= [];
gdjs.MainSceneCode.GDbuttonObjects3= [];
gdjs.MainSceneCode.GDbuttonObjects4= [];
gdjs.MainSceneCode.GDtxt_9595buttonObjects1= [];
gdjs.MainSceneCode.GDtxt_9595buttonObjects2= [];
gdjs.MainSceneCode.GDtxt_9595buttonObjects3= [];
gdjs.MainSceneCode.GDtxt_9595buttonObjects4= [];
gdjs.MainSceneCode.GDgoal_9595bgObjects1= [];
gdjs.MainSceneCode.GDgoal_9595bgObjects2= [];
gdjs.MainSceneCode.GDgoal_9595bgObjects3= [];
gdjs.MainSceneCode.GDgoal_9595bgObjects4= [];
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects1= [];
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects2= [];
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects3= [];
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects4= [];
gdjs.MainSceneCode.GDtxt_9595versionObjects1= [];
gdjs.MainSceneCode.GDtxt_9595versionObjects2= [];
gdjs.MainSceneCode.GDtxt_9595versionObjects3= [];
gdjs.MainSceneCode.GDtxt_9595versionObjects4= [];
gdjs.MainSceneCode.GDtitle2Objects1= [];
gdjs.MainSceneCode.GDtitle2Objects2= [];
gdjs.MainSceneCode.GDtitle2Objects3= [];
gdjs.MainSceneCode.GDtitle2Objects4= [];
gdjs.MainSceneCode.GDtitle3Objects1= [];
gdjs.MainSceneCode.GDtitle3Objects2= [];
gdjs.MainSceneCode.GDtitle3Objects3= [];
gdjs.MainSceneCode.GDtitle3Objects4= [];
gdjs.MainSceneCode.GDtitle4Objects1= [];
gdjs.MainSceneCode.GDtitle4Objects2= [];
gdjs.MainSceneCode.GDtitle4Objects3= [];
gdjs.MainSceneCode.GDtitle4Objects4= [];
gdjs.MainSceneCode.GDRuleButtonObjects1= [];
gdjs.MainSceneCode.GDRuleButtonObjects2= [];
gdjs.MainSceneCode.GDRuleButtonObjects3= [];
gdjs.MainSceneCode.GDRuleButtonObjects4= [];
gdjs.MainSceneCode.GDcursorObjects1= [];
gdjs.MainSceneCode.GDcursorObjects2= [];
gdjs.MainSceneCode.GDcursorObjects3= [];
gdjs.MainSceneCode.GDcursorObjects4= [];


gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects1});
gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\sounds\\soccer_audience.wav", 1, true, 10, 1);
}}

}


};gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.MainSceneCode.GDtxt_9595buttonObjects1);
{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 90, 252, 10, "idle", "hover", gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects, "Start game", "", "start", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 90, 300, 10, "idle", "hover", gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects, "Controls", "", "controls", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__EasyButton__EasyButtonCreate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 90, 348, 10, "idle", "hover", gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects1Objects, "Rankings", "", "rankings", 24, "255;255;255", 1, "0;0;0", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.MainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList2 = function(runtimeScene) {

};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects2Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects3Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects3});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects3Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects3});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects3Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects3});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects3);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.MainSceneCode.GDtxt_9595buttonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects3Objects, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects3Objects, "start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects3Objects, "start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, "start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", true);
}}

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects2Objects = Hashtable.newFrom({"txt_button": gdjs.MainSceneCode.GDtxt_9595buttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects2});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MainSceneCode.GDbuttonObjects1});
gdjs.MainSceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.MainSceneCode.GDtxt_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects2Objects, "controls", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, "controls", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects1Objects, "controls", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ControlsScene", true);
}}

}


};gdjs.MainSceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonClick.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, "rankings", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RankScene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonHover.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, "rankings", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.MainSceneCode.GDbuttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("txt_button"), gdjs.MainSceneCode.GDtxt_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.func(runtimeScene, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDbuttonObjects2Objects, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDtxt_95959595buttonObjects2Objects, "rankings", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
}

}


{


gdjs.MainSceneCode.eventsList3(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList4(runtimeScene);
}


};gdjs.MainSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("g_fullscreen"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("g_fullscreen"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.MainSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14699436);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().get("g_fullscreen"));
}
{ //Subevents
gdjs.MainSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList8 = function(runtimeScene) {

};gdjs.MainSceneCode.eventsList9 = function(runtimeScene) {

};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.MainSceneCode.GDcursorObjects1});
gdjs.MainSceneCode.eventsList10 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList1(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList5(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("User", "ID"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("User", "ID", "DAVKO-" + gdjs.evtTools.common.toString(gdjs.random(9)) + gdjs.evtTools.common.toString(gdjs.random(9)) + gdjs.evtTools.common.toString(gdjs.random(9)) + gdjs.evtTools.common.toString(gdjs.random(9)) + gdjs.evtTools.common.toString(gdjs.random(9)) + gdjs.evtTools.common.toString(gdjs.random(9)) + "-OKVAD");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("User", "ID");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("title4"), gdjs.MainSceneCode.GDtitle4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("User", "ID", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MainSceneCode.GDtitle4Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDtitle4Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.MainSceneCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "DAVKO-112233-OKVAD";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BAN", false);
}}

}


{


gdjs.MainSceneCode.eventsList9(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "ADMIN";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Admin", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RuleButton"), gdjs.MainSceneCode.GDRuleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainSceneCode.GDRuleButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainSceneCode.GDRuleButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainSceneCode.GDRuleButtonObjects1[k] = gdjs.MainSceneCode.GDRuleButtonObjects1[i];
        ++k;
    }
}
gdjs.MainSceneCode.GDRuleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rules", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.MainSceneCode.GDcursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDcursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].getBehavior("Resizable").setSize(24, 24);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].setZOrder(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (5 == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.MainSceneCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.MainSceneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDtitleObjects1.length = 0;
gdjs.MainSceneCode.GDtitleObjects2.length = 0;
gdjs.MainSceneCode.GDtitleObjects3.length = 0;
gdjs.MainSceneCode.GDtitleObjects4.length = 0;
gdjs.MainSceneCode.GDbuttonObjects1.length = 0;
gdjs.MainSceneCode.GDbuttonObjects2.length = 0;
gdjs.MainSceneCode.GDbuttonObjects3.length = 0;
gdjs.MainSceneCode.GDbuttonObjects4.length = 0;
gdjs.MainSceneCode.GDtxt_9595buttonObjects1.length = 0;
gdjs.MainSceneCode.GDtxt_9595buttonObjects2.length = 0;
gdjs.MainSceneCode.GDtxt_9595buttonObjects3.length = 0;
gdjs.MainSceneCode.GDtxt_9595buttonObjects4.length = 0;
gdjs.MainSceneCode.GDgoal_9595bgObjects1.length = 0;
gdjs.MainSceneCode.GDgoal_9595bgObjects2.length = 0;
gdjs.MainSceneCode.GDgoal_9595bgObjects3.length = 0;
gdjs.MainSceneCode.GDgoal_9595bgObjects4.length = 0;
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects1.length = 0;
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects2.length = 0;
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects3.length = 0;
gdjs.MainSceneCode.GDthe_9595ball_9595isObjects4.length = 0;
gdjs.MainSceneCode.GDtxt_9595versionObjects1.length = 0;
gdjs.MainSceneCode.GDtxt_9595versionObjects2.length = 0;
gdjs.MainSceneCode.GDtxt_9595versionObjects3.length = 0;
gdjs.MainSceneCode.GDtxt_9595versionObjects4.length = 0;
gdjs.MainSceneCode.GDtitle2Objects1.length = 0;
gdjs.MainSceneCode.GDtitle2Objects2.length = 0;
gdjs.MainSceneCode.GDtitle2Objects3.length = 0;
gdjs.MainSceneCode.GDtitle2Objects4.length = 0;
gdjs.MainSceneCode.GDtitle3Objects1.length = 0;
gdjs.MainSceneCode.GDtitle3Objects2.length = 0;
gdjs.MainSceneCode.GDtitle3Objects3.length = 0;
gdjs.MainSceneCode.GDtitle3Objects4.length = 0;
gdjs.MainSceneCode.GDtitle4Objects1.length = 0;
gdjs.MainSceneCode.GDtitle4Objects2.length = 0;
gdjs.MainSceneCode.GDtitle4Objects3.length = 0;
gdjs.MainSceneCode.GDtitle4Objects4.length = 0;
gdjs.MainSceneCode.GDRuleButtonObjects1.length = 0;
gdjs.MainSceneCode.GDRuleButtonObjects2.length = 0;
gdjs.MainSceneCode.GDRuleButtonObjects3.length = 0;
gdjs.MainSceneCode.GDRuleButtonObjects4.length = 0;
gdjs.MainSceneCode.GDcursorObjects1.length = 0;
gdjs.MainSceneCode.GDcursorObjects2.length = 0;
gdjs.MainSceneCode.GDcursorObjects3.length = 0;
gdjs.MainSceneCode.GDcursorObjects4.length = 0;

gdjs.MainSceneCode.eventsList10(runtimeScene);

return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
