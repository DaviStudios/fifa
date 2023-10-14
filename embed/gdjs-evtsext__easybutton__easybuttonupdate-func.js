
if (typeof gdjs.evtsExt__EasyButton__EasyButtonUpdate !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonUpdate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonUpdate = {};
gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex4 = 0;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachObjects2 = [];

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachObjects4 = [];

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary2 = null;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary4 = null;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTotalCount2 = 0;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTotalCount4 = 0;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects4= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects6= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5= [];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects6= [];


gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects5Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5});
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2, gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5);

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4, gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[k] = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects5Objects, (gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5[i].setZOrder((( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[0].getZOrder()) + 1);
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects5Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5});
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2, gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5);

gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4, gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[k] = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects5Objects, (gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5[0].getVariables()).get("__EasyButton_DisplayText"))));
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ButtonTextObject"), gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3);

for (gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex4 = 0;gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex4 < gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3.length;++gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex4) {
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary4 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3[gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex4];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4.push(gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects3Objects = Hashtable.newFrom({"ButtonTextObject": gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3});
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3);
gdjs.copyArray(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects2, gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[i].getVariableNumber(gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[i].getVariables().get("__EasyButton_creationID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3[0].getVariables()).get("__EasyButton_creationID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[k] = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__EasyButton__EasyButtonUpdate.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonUpdate_9546GDButtonTextObjectObjects3Objects, (gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length !== 0 ? gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3 */
/* Reuse gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3[i].setPosition(((( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[0].getPointX("")) + ((( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[0].getWidth()) / 2)) - ((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3[i].getWidth()) / 2),((( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[0].getPointY("")) + (( gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3[0].getHeight()) / 2) - ((gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3[i].getHeight()) / 2));
}
}}

}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects1);

for (gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2 = 0;gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2 < gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects1.length;++gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2) {
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary2 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects1[gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2.push(gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ButtonTextObject"), gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects1);

for (gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2 = 0;gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2 < gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects1.length;++gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2) {
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects2.length = 0;


gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary2 = gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects1[gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachIndex2];
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects2.push(gdjs.evtsExt__EasyButton__EasyButtonUpdate.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList5(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__EasyButton__EasyButtonUpdate.func = function(runtimeScene, Button, ButtonTextObject, Identify, parentEventsFunctionContext) {
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
if (argName === "Identify") return Identify;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects3.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects4.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects5.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonObjects6.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects3.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects4.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects5.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonUpdate.GDButtonTextObjectObjects6.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonUpdate.eventsList6(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__EasyButton__EasyButtonUpdate.registeredGdjsCallbacks = [];