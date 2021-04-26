let mongoose = require('mongoose');
//Define a schema
let Schema = mongoose.Schema;
let mainMenuList = new Schema({"MainMenuName" : {type:String}, "SubMenuList": [{"SubMenuName":{type:String}, "link":{type:String}}]});

let MainMenuList = mongoose.model("MainMenuList", mainMenuList);

module.exports = MainMenuList;