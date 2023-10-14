
if (typeof gdjs.evtsExt__EasyButton__EasyButtonHover !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonHover.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonHover = {};
gdjs.evtsExt__EasyButton__EasyButtonHover.forEachIndex2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonHover.forEachObjects2 = [];

gdjs.evtsExt__EasyButton__EasyButtonHover.forEachTemporary2 = null;

gdjs.evtsExt__EasyButton__EasyButtonHover.forEachTotalCount2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3= [];
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4= [];
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects5= [];


gdjs.evtsExt__EasyButton__EasyButtonHover.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonHover_9546GDButtonObjects4Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4});
gdjs.evtsExt__EasyButton__EasyButtonHover.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonHover_9546GDButtonObjects3Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3});
gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(16862052);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3, gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__EasyButton__EasyButtonHover.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonHover_9546GDButtonObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4[i].setAnimationName((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4[i].getVariables().get("__EasyButton_Idle"))));
}
}}

}


{

/* Reuse gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__EasyButton__EasyButtonHover.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonHover_9546GDButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[i].setAnimationName((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[i].getVariables().get("__EasyButton_Hover"))));
}
}
{ //Subevents
gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects2, gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[i].getVariableString(gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[i].getVariables().get("__EasyButton_Identify")) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identify") : "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[k] = gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects1);

for (gdjs.evtsExt__EasyButton__EasyButtonHover.forEachIndex2 = 0;gdjs.evtsExt__EasyButton__EasyButtonHover.forEachIndex2 < gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects1.length;++gdjs.evtsExt__EasyButton__EasyButtonHover.forEachIndex2) {
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects2.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonHover.forEachTemporary2 = gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects1[gdjs.evtsExt__EasyButton__EasyButtonHover.forEachIndex2];
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects2.push(gdjs.evtsExt__EasyButton__EasyButtonHover.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__EasyButton__EasyButtonHover.func = function(runtimeScene, Button, Identify, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Button": Button
},
  _objectArraysMap: {
"Button": gdjs.objectsListsToArray(Button)
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
if (argName === "Identify") return Identify;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects3.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects4.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHover.GDButtonObjects5.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonHover.eventsList3(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__EasyButton__EasyButtonHover.registeredGdjsCallbacks = [];