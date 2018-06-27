var recipes = {egg: "2"};
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value
  return object
}
function deleteFromObjectByKey(object, key){
       var newObj = Object.assign(delete[key])
       newObj= (delete[key])
       return newObj
     }
     
     function destructivelyDeleteFromObjectByKey(object, key){
       delete object[key]
       return object
     }
    