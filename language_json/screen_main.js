var g_bLoginedInServer = false,
    g_currentVersion = 1000,
    g_AudioObj = new Audio(),
    g_websocket = null,
    g_UserInfo = null,
    g_strDeviceToken = "",
    g_UserExtInfo = null,
    g_lServerTime = 0,
    g_srvAddress = "https://payment.lubevpn.com",
    g_animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    g_prikey = "Xq5HaTK4oqSCi5aBgVU9p6DG4xFRQutwwftkh7//fPk=",
    g_pubkey = "AsaO7/k4U5u6xVafEGafFeVNnIvEBJRT0BpYHYY0q4IJ",
    gUserID = 0;
    
doUserLogin = function(dialog){
    var _login = {
        'cmd': 'webuser.login',
        'name': g_pubkey,
        'rkey':g_RandString(Math.floor((Math.random()*500)+1))
    };

    g_websocket.emit('modules.semail', JSON.stringify(_login), function (err, result) {
        if (err == null) {
            var _ret = g_convertToJSON(result);
            if (_ret == null) {
                return;
            }
            vpnManager.sign(Base64.encode(_ret.rand),
                g_prikey,function(err, result){
                if (err != null) {
                    return callback({"message":"sign error"});
                }
                var rsignature = result;

                var _msg = {
                    'cmd': 'webuser.relogin',
                    'signature': rsignature,
                    'rkey':g_RandString(Math.floor((Math.random()*500)+12))
                };
                g_websocket.emit('modules.semail', JSON.stringify(_msg), function (err, result) {
                    if (err == null) {
                        g_bLoginedInServer = true;
                        var _retl = g_convertToJSON(result);
                        if (_retl != null) {
                            g_lServerTime = _retl.srvtime - new Date().getTime();
                            gUserID = _retl.uid;
                            
                            g_MainScreen.m_pMainScreen.doLogined(dialog);
                        }
                    }
                });
                
            });
        }
    });
};

onConnect_WithServer = function (dialog) {
    doUserLogin(dialog);
};

ondisconnect_Withserver = function (dialog) {
    g_websocket.disconnect();
    //g_websocket = null;
    if (g_bLoginedInServer == false) {
        //登录时候被服务器挂断链接
        g_MainScreen.m_pMainScreen.onLoginError(dialog);
    } else {
        //登录后被服务器挂断链接
        g_bLoginedInServer = false;
    }
};

ConnectWithServer = function (dialog) {
    g_websocket = io(g_srvAddress, {
        'transports': ['websocket'],
        'reconnection': false,
        'autoConnect': false,
        'forceNew': true
    });

    g_websocket.on('connect', function(){
        onConnect_WithServer(dialog);
    });
    
    g_websocket.on('disconnect', function(){
        ondisconnect_Withserver(dialog);
    });

    g_websocket.on('connect_error', function () {
        g_MainScreen.m_pMainScreen.onConnectServerFailed(dialog);
    });

    g_websocket.on('connect_timeout', function () {
        g_MainScreen.m_pMainScreen.onConnectServerFailed(dialog);
    });
    
    g_websocket.on('webmsg', function (data) {
        g_MainScreen.m_pMainScreen.onRecvMessage(data);
    });

    g_websocket.open();
};

var Main_Screen = {
    createNew: function () {
        var _self = {};
        _self.m_pMainScreen = MainCtrl_Screen.createNew(_self);

        _self.onSizeChange = function (offsetWidth, clientHeight) {
            var _sfm = $("#screen_main");
            var subWidth = offsetWidth;
            if (_self.m_pMainScreen != null) {
                subWidth = _self.m_pMainScreen.getNumsScreen() * offsetWidth;
            }

            _sfm.css({'width': subWidth});

            if (_self.m_pMainScreen != null) {
                _self.m_pMainScreen.onSizeChange(offsetWidth, clientHeight);
            }
        };

        _self.backKeyDown = function () {
            return _self.m_pMainScreen.backKeyDown();
        };

        _self.sendMessageToServer = function (message, callback) {
            if (g_websocket.connected == true && g_bLoginedInServer == true) {
                g_websocket.emit('modules.semail', JSON.stringify(message), callback);
            } else {
                callback({
                    "error": "cannot connect with server"
                });
            }
        };

        _self.show = function () {
            $("#screen-loading").remove();
            $("#screen_main").show();
            _self.m_pMainScreen.show();
        };

        return _self;
    }
};

function initHtml() {    
    g_MainScreen = Main_Screen.createNew();
    g_MainScreen.show();
}
