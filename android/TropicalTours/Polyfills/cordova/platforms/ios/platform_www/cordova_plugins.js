cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-hostedwebapp/www/hostedWebApp.js",
        "id": "cordova-plugin-hostedwebapp.hostedwebapp",
        "pluginId": "cordova-plugin-hostedwebapp",
        "clobbers": [
            "hostedwebapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
        "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
        "pluginId": "cordova-plugin-cleartext",
        "clobbers": [
            "cordova.plugins.CordovaPluginsCleartext"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-network-information": "2.0.1",
    "cordova-plugin-hostedwebapp": "0.3.1",
    "cordova-plugin-cleartext": "1.0.0"
}
// BOTTOM OF METADATA
});