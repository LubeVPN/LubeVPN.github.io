var g_MainScreen = null,
g_animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
g_isMobile = false,
g_biOS = false,
g_bSamsung = false,
g_offsetWidth = 360,
g_ClientHeight = 592,
g_leftFix = 0,
g_TopFix = 0,
g_language = "en",
g_Origin = "";

//uglifyjs global.js main.js mergemain.js chatscreen.js -m --dead_code --unused -b beautify=false -o all.min.js

function _checkBrowserType() {
    var ua = navigator.userAgent.toLowerCase();
    var ipad = ua.match(/(ipad).*os\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iphone\sos)\s([\d_]+)/),
        isAndroid = ua.match(/(android)\s+([\d.]+)/);
    g_isMobile = isIphone || isAndroid;
    if (g_isMobile != null) {
        g_isMobile = true;
    } else {
        g_isMobile = false;
    }
    if (ua.match(/iphone/i) == "iphone") {
        g_biOS = true;
    } else if (ua.indexOf(" sm-") != -1) {
        g_bSamsung = true;
    }

    g_language = (navigator.browserLanguage || navigator.language).toLowerCase().substr(0, 2);
    if(g_language != "zh"){
        g_language = "en";
    }
}

_checkBrowserType();


var Main_Screen = {
    createNew: function () {
        var _self = {};
        _self.m_pMainScreen = MergeMain_Screen.createNew(_self);

        _self.onSizeChange = function (offsetWidth, clientHeight) {
            var _sfm = $("#screen_main");
            var subWidth = offsetWidth;
            if (_self.m_pMainScreen != null) {
                subWidth = _self.m_pMainScreen.getNumsScreen() * offsetWidth;
            }
            _sfm.css({'width': subWidth, 'height': clientHeight});

            if (_self.m_pMainScreen != null) {
                _self.m_pMainScreen.onSizeChange(offsetWidth, clientHeight);
            }
        };

        _self.onMessageParent = function(data){
			_self.m_pMainScreen.onMessageParent(data);
		};

        _self.show = function () {
            _self.m_pMainScreen.show();
            $("#screen_main").resize();
        };

        return _self;
    }
};

function onSizeChanged() {
    var _css = {};
    g_leftFix = 0;
    g_TopFix = 0;
    if (g_isMobile == true) {
        g_offsetWidth = document.body.offsetWidth;
        g_ClientHeight = window.innerHeight;
        _css.width = g_offsetWidth;
    } else {
        g_offsetWidth = 360;
        g_ClientHeight = 592;
        if (document.body.offsetWidth < 360) {
            g_offsetWidth = document.body.offsetWidth;
            _css.width = g_offsetWidth;
            _css.left = 0;
        } else {
            _css.width = g_offsetWidth;
            _css.left = (document.body.offsetWidth - g_offsetWidth) / 2;
            g_leftFix = _css.left;
        }

        if (document.documentElement.clientHeight < g_ClientHeight) {
            g_ClientHeight = document.documentElement.clientHeight;
            g_offsetWidth = g_ClientHeight * 360 / 592;
            _css.width = g_offsetWidth;
            _css.left = (document.body.offsetWidth - g_offsetWidth) / 2;
            g_leftFix = _css.left;
        }

        _css.top = (document.documentElement.clientHeight - g_ClientHeight) / 2;
        g_TopFix = _css.top;
    }

    $("#screen-root").css(_css);
}

$(window).resize(function () {
    onSizeChanged();
    if (g_MainScreen != null) {
        g_MainScreen.onSizeChange(g_offsetWidth, g_ClientHeight);
    }
});

function initHtml(origin){
    g_Origin = origin;
    g_MainScreen = Main_Screen.createNew();
    g_MainScreen.show();
    window.addEventListener('message',g_MainScreen.onMessageParent);

    window.parent.postMessage(
        {
            "cmd":"onload",
            "name":g_language=="en"?"LubeVPN":"順道VPN",
            "key":"",
            "msgtype":""
        },
        "*"
    );
}
