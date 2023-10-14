
if (typeof gdjs.evtsExt__EasyButton__EasyButtonCreate !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonCreate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonCreate = {};
gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex4 = 0;

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachObjects2 = [];

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachObjects4 = [];

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary2 = null;

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary4 = null;

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTotalCount2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTotalCount4 = 0;

gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects4= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects6= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5= [];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects6= [];


gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1});
gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects1Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1});
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1 */
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects1Objects, (( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[0].getPointX("")), (( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("OnLayer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].getVariables().get("__EasyButton_creationID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[0].getVariables()).get("__EasyButton_creationID"))));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[0] : null), (gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[0] : null));
}{runtimeScene.getScene().getVariables().get("__EasyButton_creationID").add(1);
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].setWrapping(false);
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].setWrappingWidth((( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].setCharacterSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ButtonTextSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].setOutline((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ButtonTextOutlineColor") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ButtonTextOutlineSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[i].setColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ButtonTextColor") : ""));
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects5Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5});
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2, gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5);

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4, gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[k] = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects5Objects, (gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5[i].setZOrder((( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[0].getZOrder()) + 1);
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects5Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5});
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2, gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5);

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4, gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[k] = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects5Objects, (gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5[0].getVariables()).get("__EasyButton_DisplayText"))));
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ButtonTextObject"), gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3);

for (gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex4 = 0;gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex4 < gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3.length;++gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex4) {
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary4 = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3[gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex4];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4.push(gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects3Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3});
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3);
gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects2, gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[k] = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonTextObjectObjects3Objects, (gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3[i].setPosition(((( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[0].getPointX("")) + ((( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[0].getWidth()) / 2)) - ((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3[i].getWidth()) / 2),((( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[0].getPointY("")) + (( gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3[0].getHeight()) / 2) - ((gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3[i].getHeight()) / 2));
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__EasyButton__EasyButtonCreate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonCreate_9546GDButtonObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ButtonX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ButtonY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("OnLayer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].getVariables().get("__EasyButton_creationID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__EasyButton_creationID")));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ButtonZ")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].getVariables().get("__EasyButton_DisplayText")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DisplayText") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].getVariables().get("__EasyButton_Identify")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identify") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].getVariables().get("__EasyButton_Idle")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("IdleAnimation") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].returnVariable(gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].getVariables().get("__EasyButton_Hover")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("HoverAnimation") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[i].setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("IdleAnimation") : ""));
}
}
{ //Subevents
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1);

for (gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2 = 0;gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2 < gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length;++gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2) {
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary2 = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1[gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2.push(gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ButtonTextObject"), gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1);

for (gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2 = 0;gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2 < gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length;++gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2) {
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects2.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary2 = gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1[gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachIndex2];
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects2.push(gdjs.evtsExt__EasyButton__EasyButtonCreate.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList6(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__EasyButton__EasyButtonCreate.func = function(runtimeScene, Button, ButtonX, ButtonY, ButtonZ, IdleAnimation, HoverAnimation, ButtonTextObject, DisplayText, OnLayer, Identify, ButtonTextSize, ButtonTextColor, ButtonTextOutlineSize, ButtonTextOutlineColor, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Button": Button
, "ButtonTextObject": ButtonTextObject
},
  _objectArraysMap: {
"Button": gdjs.objectsListsToArray(Button)
, "ButtonTextObject": gdjs.objectsListsToArray(ButtonTextObject)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ButtonX") return ButtonX;
if (argName === "ButtonY") return ButtonY;
if (argName === "ButtonZ") return ButtonZ;
if (argName === "IdleAnimation") return IdleAnimation;
if (argName === "HoverAnimation") return HoverAnimation;
if (argName === "DisplayText") return DisplayText;
if (argName === "OnLayer") return OnLayer;
if (argName === "Identify") return Identify;
if (argName === "ButtonTextSize") return ButtonTextSize;
if (argName === "ButtonTextColor") return ButtonTextColor;
if (argName === "ButtonTextOutlineSize") return ButtonTextOutlineSize;
if (argName === "ButtonTextOutlineColor") return ButtonTextOutlineColor;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects3.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects4.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects5.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonObjects6.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects3.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects4.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects5.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonCreate.GDButtonTextObjectObjects6.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonCreate.eventsList7(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EasyButton__EasyButtonCreate.registeredGdjsCallbacks = [];