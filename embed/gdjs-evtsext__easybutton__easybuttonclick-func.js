
if (typeof gdjs.evtsExt__EasyButton__EasyButtonClick !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonClick.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonClick = {};
gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects2= [];


gdjs.evtsExt__EasyButton__EasyButtonClick.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonClick_9546GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1});
gdjs.evtsExt__EasyButton__EasyButtonClick.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__EasyButton__EasyButtonClick.mapOfGDgdjs_9546evtsExt_9595_9595EasyButton_9595_9595EasyButtonClick_9546GDButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1[i].getVariableString(gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1[i].getVariables().get("__EasyButton_Identify")) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identify") : "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1[k] = gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15172060);
}
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EasyButton__EasyButtonClick.func = function(runtimeScene, Button, Identify, parentEventsFunctionContext) {
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

gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonClick.GDButtonObjects2.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonClick.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__EasyButton__EasyButtonClick.registeredGdjsCallbacks = [];