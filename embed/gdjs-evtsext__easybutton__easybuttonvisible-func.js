
if (typeof gdjs.evtsExt__EasyButton__EasyButtonVisible !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonVisible.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonVisible = {};
gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects2= [];


gdjs.evtsExt__EasyButton__EasyButtonVisible.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[k] = gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[k] = gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__EasyButton__EasyButtonVisible.func = function(runtimeScene, Button, identify, parentEventsFunctionContext) {
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
if (argName === "identify") return identify;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonVisible.GDButtonObjects2.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonVisible.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__EasyButton__EasyButtonVisible.registeredGdjsCallbacks = [];