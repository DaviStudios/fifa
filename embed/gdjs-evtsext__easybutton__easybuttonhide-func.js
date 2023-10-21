
if (typeof gdjs.evtsExt__EasyButton__EasyButtonHide !== "undefined") {
  gdjs.evtsExt__EasyButton__EasyButtonHide.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EasyButton__EasyButtonHide = {};
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects2= [];
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects1= [];
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects2= [];


gdjs.evtsExt__EasyButton__EasyButtonHide.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ButtonTextObject"), gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__EasyButton__EasyButtonHide.func = function(runtimeScene, Button, ButtonTextObject, Identify, parentEventsFunctionContext) {
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

gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonObjects2.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects1.length = 0;
gdjs.evtsExt__EasyButton__EasyButtonHide.GDButtonTextObjectObjects2.length = 0;

gdjs.evtsExt__EasyButton__EasyButtonHide.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__EasyButton__EasyButtonHide.registeredGdjsCallbacks = [];