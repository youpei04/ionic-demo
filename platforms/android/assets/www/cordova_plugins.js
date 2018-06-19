cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-alipay-v2.alipay",
        "file": "plugins/cordova-plugin-alipay-v2/www/alipay.js",
        "pluginId": "cordova-plugin-alipay-v2",
        "clobbers": [
            "cordova.plugins.alipay"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "jpush-phonegap-plugin.JPushPlugin",
        "file": "plugins/jpush-phonegap-plugin/www/JPushPlugin.js",
        "pluginId": "jpush-phonegap-plugin",
        "clobbers": [
            "JPush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-alipay-v2": "0.0.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-jcore": "1.2.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "jpush-phonegap-plugin": "3.4.1"
};
// BOTTOM OF METADATA
});