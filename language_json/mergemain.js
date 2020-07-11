var gws = null,
gSocketStata = -1,
gUseKey = "",
gUserID = 0,
g_lServerTime = 0;

doUserLogin = function () {
    var _login = {
        'cmd': 'webuser.login',
        'name': gUseKey,
        'rkey':g_RandString(Math.floor((Math.random()*500)+1))
    };

    gws.emit('modules.semail', JSON.stringify(_login), function (err, result) {
        if (err == null) {
            var _ret = g_convertToJSON(result);
            if (_ret == null) {
                return;
            }
            g_MainScreen.m_pMainScreen.postMessageToParent({
                "cmd":"websign",
                "data":Base64.encode(_ret.rand)
            },function(result){
                if (result.err != null) {
                    return callback({"message":"sign error"});
                }
                    var rsignature = result.res;
                var _msg = {
                    'cmd': 'webuser.relogin',
                    'signature': rsignature,
                    'rkey':g_RandString(Math.floor((Math.random()*500)+12))
                };
                gws.emit('modules.semail', JSON.stringify(_msg), function (err, result) {
                    if (err == null) {
                        var _retl = g_convertToJSON(result);
                        if (_retl != null) {
                            g_lServerTime = _retl.srvtime - new Date().getTime();
                            gUserID = _retl.uid;
                            gSocketStata = 1;
                            if(typeof(g_MainScreen.m_pMainScreen.m_onConnectWithSrvFun) == 'function'){
                                g_MainScreen.m_pMainScreen.m_onConnectWithSrvFun();
                                g_MainScreen.m_pMainScreen.m_onConnectWithSrvFun = null;
                            }
                        }
                    }
                });
            });
        }
    });
};

onConnect_WithServer = function () {
    doUserLogin();
};

ondisconnect_Withserver = function (bDisconnect) {
    if(bDisconnect){
        gws.disconnect();
    }
    gSocketStata = -1;
};

ConnectWithServer = function () {
    if (gSocketStata != -1)return;
    gSocketStata = 0;
    gws = io("https://payment.lubevpn.com", {
        'transports': ['websocket'],
        'reconnection': false,
        'autoConnect': false,
        'forceNew': true
    });

    gws.on('connect', function () {
        onConnect_WithServer();
    });

    gws.on('disconnect', function () {
        ondisconnect_Withserver(true);
    });

    gws.on('connect_error', function () {
        ondisconnect_Withserver(false);
    });

    gws.on('error', function () {
        ondisconnect_Withserver(false);
    });

    gws.on('webmsg', function (data) {
        var recvmsg = g_convertToJSON(data);
        if (recvmsg == null) return;
        g_MainScreen.m_pMainScreen.onRecvMessage(recvmsg);
    });

    gws.open();
};

/* jshint multistr: true */
var MergeMain_Screen = {
    createNew: function (pScreenNode) {
    var _s = {};
    _s.m_pScreenNode = pScreenNode;
    _s.m_OSW = $("#screen_main").width();
    _s.m_SS = null;

    _s.m_MD = null;
    _s.m_mgD = null;
    _s.m_mgC = null;
    _s.m_mgS = null;
    _s.m_nCLSy = null;

    _s.m_Pdlg = null;

    _s.m_Languages = null;
    _s.m_Master = null;
    _s.next_message_id = 1;
    _s.waiting_cb = {};
    _s.userdata = null;
    _s.m_nRecharge = 0;
    _s.m_onConnectWithSrvFun = null;
    
    _s.onRecvMessage = function (recvmsg) {
        if (_s.m_SS != null) {
            _s.m_SS.onRecvMessage(recvmsg);
        }
    };

    _s.getNumsScreen = function () {
        return (_s.m_SS == null) ? 1 : _s.m_SS.getNumsScreen() + 1;
    };

    _s.resetContentSize = function(offsetWidth,clientHeight){
        var _css = {
            'position': 'relative',
            'z-index': '2',
            'overflow': 'hidden',
            'height': clientHeight,
            'width': offsetWidth,
            'background-color': "#eee"
        };
        _s.m_mgD.css(_css);

        var _div = _s.m_MD.find("[name='confirmdialog-message-div']");
        _div.css({
            'width': offsetWidth,
            'height': clientHeight
        });

        _div = _div.find("[name='confirmdialog-content']");
        _div.css({
            "top": (clientHeight - _div.height()) / 2,
            "left": (offsetWidth - offsetWidth * 0.9) / 2
        });
    };

    _s.onSizeChange = function (offsetWidth, clientHeight) {
        if (_s.m_MD == null)return;
        var _sfm = $("#screen_main");
        var subWidth = 0;
        if (_s.m_SS != null) {
            subWidth = _s.m_SS.getNumsScreen() * offsetWidth;
        }

        _s.m_OSW = _sfm.width() - offsetWidth - subWidth;
        _s.m_MD.css({'width': offsetWidth, 'height': clientHeight});
        _s.resetContentSize(offsetWidth, clientHeight);
        if (_s.m_SS != null) {
            _s.m_SS.onSizeChange(offsetWidth, clientHeight);
        }
    };

    _s.unbindEvent = function(){
        if (_s.m_mgS) {
            _s.m_nCLSy = _s.m_mgS.y;
            _s.m_mgS.destroy();
            _s.m_mgS = null;
        }

        _s.m_mgC.find("[name='help_item']").off('tap');
        _s.m_mgC.find("[name='ceritficate_item']").off('tap');
        _s.m_mgC.find("a").off('tap');
    };

    _s.showConfirmDialogMessageBox = function (nodediv, confirmFun, cancelFun) {
        _s.m_Pdlg = _s.m_MD.find("[name='confirmdialog-message-div']");
        _s.m_Pdlg.closeCallBack = cancelFun;
        _s.m_Pdlg.doClose = function () {
            if (_s.m_Pdlg.closeCallBack != null) {
                _s.m_Pdlg.closeCallBack();
            }
            _s.m_Pdlg.find("[name='confirmbtn']").off("click");
            _s.m_Pdlg.hide();
            _s.m_Pdlg = null;
        };

        var _div = _s.m_Pdlg.find("[name='confirmdialog-content']");
        _div.empty();
        _div.append(nodediv);
        _s.m_Pdlg.show();
        _div.css({
            "width": '90%',
            "color": "#34495e",
            "position": "relative",
            "opacity": 1,
            "left": (g_offsetWidth - g_offsetWidth * 0.9) / 2
        });
        _div.css({
            "top": (g_ClientHeight - _div.height()) / 2
        });

        _div.find("[name='confirmbtn']").on("click", function () {
            $(this).off("click");
            if (confirmFun(_s.m_Pdlg) == false) return;
            _s.m_Pdlg.hide();
            _s.m_Pdlg = null;
        });

        if (_div.find("[name='cancelbtn']").length > 0) {
            _div.find("[name='cancelbtn']").one("click", function () {
                _s.m_Pdlg.doClose();
            });
        } else {
            _s.m_Pdlg.one("click", function () {
                _s.m_Pdlg.doClose();
            });
        }
        return _s.m_Pdlg;
    };

    _s.showRechargeDialog = function(){
        _s.m_nRecharge = 0;
        var subBuff = [],_node,_popdialog;
        if(_s.userdata.ladder === 0 && _s.userdata.chargedate === 0){
            subBuff.push("<div style='overflow: auto;'><div name='dialog_title' style='font-size: 14px;text-align: left;word-wrap: break-word;'></div>");
            subBuff.push("<div name='dialog_content' style='margin: 15px 15px;font-size: 14px;'></div>");
            subBuff.push("<div name='dialog_recharge' style='margin: 20px 10px 30px;overflow: auto'><label class='checkbox' style='width: 100%;font-size: 14px;float:left;margin-top: 5px;'>");
            subBuff.push("<input type='radio' name='hr_radio' value='1'/>&nbsp;&nbsp;<span name='hr1_span'></span>");
            subBuff.push("</label><label class='checkbox' style='width: 100%;font-size: 14px;float:left;margin-top: 5px;'>");
            subBuff.push("<input type='radio' name='hr_radio' value='2'/>&nbsp;&nbsp;<span name='hr2_span'></span>");
            subBuff.push("</label><label class='checkbox' style='width: 100%;font-size: 14px;float:left;margin-top: 5px;'>");
            subBuff.push("<input type='radio' name='hr_radio' value='3' checked='checked'/>&nbsp;&nbsp;<span name='hr3_span'></span>");
            subBuff.push("</label></div>");
            subBuff.push("<div name='dialog_content_loading' style='display:none;text-align: center;color: #666;margin: 20px 20px;font-size: 14px;'><i name='loading_faicon' class='fa fa-spinner fa-pulse'></i><p name='dialog_content_loading_span' style='font-size: 14px;margin: 5px auto;'></p></div>");
            subBuff.push("<div style='margin: 10px 0 10px 0;text-align: right;'>");
            subBuff.push("<div class='button button-raised button-primary button-rounded button-small' name='confirmbtn' style='padding: 0 20px;margin-right: 10px;font-weight: bold;'></div>");
            subBuff.push("<div class='button button-raised button-caution button-rounded button-small' name='cancelbtn' style='padding: 0 20px;margin-right: 10px;font-weight: bold;'></div>");
            subBuff.push("</div></div>");
            _node= $(subBuff.join(''));    
            _node.find("[name='dialog_title']").text(g_language=="en"?"LubeVPN Renewal":"順道VPN 續時抵值辦法");
            _node.find("[name='dialog_content']").text(g_language=="en"?"Choose a renewal period. Confirm and start using LubeVPN service right away. But please make sure you contact LIVE HELP to arrange payment or else the CERT will expire after 24 hours. ":"請選擇續時週期，確認後將立刻開通並可使用 順道VPN。但請你務必在24小時內與在線客服進行核準，否則它將在24小時後被禁用。");
            _node.find("[name='confirmbtn']").text(g_language=="en"?"Confirm":"確認");
            _node.find("[name='cancelbtn']").text(g_language=="en"?"Cancel":"取消");
            _node.find("[name='hr1_span']").text(g_language=="en"?"Renew for 30-DAY MEMBER CERT at 12.95 USDC":"續時30日套餐需12.95 USDC抵值");
            _node.find("[name='hr2_span']").text(g_language=="en"?"Renew for 180-DAY MEMBER CERT at 57.45 USDC":"續時180日套餐需57.45 USDC抵值");
            _node.find("[name='hr3_span']").text(g_language=="en"?"Renew for 360-DAY MEMBER CERT at 86.15 USDC":"續時360日套餐需86.15 USDC抵值");
            _node.find("[name='dialog_content_loading_span']").text(g_language=="en"?"Verifying the CERT...":"正在檢驗通行證書……");

            _popdialog = _s.showConfirmDialogMessageBox(_node,
                function () {
                    var nCharge = parseInt(_popdialog.find("[name='hr_radio']:checked").val());
                    
                    _popdialog.find("[name='dialog_content']").hide();
                    _popdialog.find("[name='dialog_recharge']").hide();
                    _popdialog.find("[name='confirmbtn']").hide();
                    _popdialog.find("[name='cancelbtn']").hide();
                    _popdialog.find("[name='dialog_content_loading']").show();
                    $("#screen_main").resize();

                    _s.m_nRecharge = 1;
                    window.parent.postMessage(
                        {
                            "cmd":"proxyrecharge",
                            "charge":nCharge
                        },
                        "*"
                    );

                    return false;
                },
                function(){}
            );
        }else{
            if(_s.userdata.active === 0 && _s.userdata.ladder !== 0 && _s.userdata.chargedate !== 0){
                subBuff.push("<div style='overflow: auto;'><div name='dialog_title' style='font-size: 14px;text-align: left;word-wrap: break-word;'></div>");
                subBuff.push("<div name='dialog_content' style='display:none;margin: 15px 15px;font-size: 14px;'></div>");
                subBuff.push("<div name='dialog_content_loading' style='text-align: center;color: #666;margin: 20px 20px;font-size: 14px;'><i name='loading_faicon' class='fa fa-spinner fa-pulse'></i><p name='dialog_content_loading_span' style='font-size: 14px;margin: 5px auto;'></p></div>");
                subBuff.push("<div style='margin: 10px 0 10px 0;text-align: right;'>");
                subBuff.push("<div class='button button-raised button-caution button-rounded button-small' name='cancelbtn' style='display:none;padding: 0 20px;margin-right: 10px;font-weight: bold;'></div>");
                subBuff.push("</div></div>");
                _node = $(subBuff.join(''));
                _node.find("[name='dialog_title']").text(g_language=="en"?"VPN續費":"VPN續費");
                _node.find("[name='cancelbtn']").text(g_language=="en"?"Close":"關閉");
                _node.find("[name='dialog_content']").text(g_language=="en"?"CERT verification failed. Try again later or contact LIVE HELP.":"通行證書檢驗失敗，請稍後再試，或與客服諮詢。");
                _node.find("[name='dialog_content_loading_span']").text(g_language=="en"?"Verifying CERT...":"正在檢驗通行證書……");

                _popdialog = _s.showConfirmDialogMessageBox(_node,
                    function () {},
                    function () {}
                ); 
                _s.m_nRecharge = 2;
                window.parent.postMessage(
                    {
                        "cmd":"proxycheckrecharge"
                    },
                    "*"
                );
            }
        }
    };

    _s.resetMessageContentEvent = function(){
        var _helpitem = _s.m_mgC.find("[name='help_item']"),
            _citem = _s.m_mgC.find("[name='ceritficate_item']"),
            _ahref = _s.m_mgC.find("a");
        _helpitem.off('tap');
        _ahref.off('tap');
        _citem.off('tap');

        _helpitem.on('tap',function(event){
            //var _category = $(this).data('category');
            var _box = $(this).parent().find("[name='help_resume_div']");
                if(_box.is(":hidden")){
                    _s.m_mgC.find("[name='help_resume_div']").hide();
                    _box.show();
                }else{
                    _box.hide();
                }
            _s.m_mgS.refresh();
            event.stopPropagation();
            return false;
        });

        _citem.on('tap', function (event) {
            _s.showRechargeDialog();
            event.stopPropagation();
            return false;
        });

        _ahref.on('tap', function (event) {
            if(g_isMobile){
                window.open(_url, '_system');
            }
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    };

    _s.createCategory = function(category){
        var subBuff = [];
        subBuff.push("<div><div name='help_item' style='overflow:auto;margin: 2px 0 0;padding: 10px 5px; background-color: #fff;color: #555;'><i name='help_item_icon' class='fa fa-question-circle' style='width: 20px;text-align: center;margin: 0 10px;font-size: 18px;'></i><span name='help_item_span' style='font-size: 14px;'></span></div>");
        subBuff.push("<div name='help_resume_div' style='padding: 5px 10px;background: #fff;border-top: 1px solid #eee;display: none;'><div name='help_resume' style='background: #fbb16d;border-radius: 8px;font-size: 15px;padding: 5px 10px;'></div></div>");
        subBuff.push("</div>");
        var _node = $(subBuff.join(''));
        _node.data('category',category);
        _node.find("[name='help_item_icon']").removeClass().addClass(category.icon).css({
            "color":category.color
        });
        _node.find("[name='help_item_span']").text(category.title[g_language]);
        _node.find("[name='help_resume']").html(category.resume[g_language]);
        

        _s.m_mgC.find("[name='merge_loading']").before(_node);
    };

    _s.setEvent = function(){
        _s.resetMessageContentEvent();

        var _opt = {
            probeType: 3,
            tap: true,
            mouseWheel: true,
            hScrollbar: false,
            disablePointer: true,
            disableTouch: false,
            disableMouse: false,
        };
        _opt.preventDefaultException = {  tagName: /^(IMG|A)$/};
        _s.m_mgS = new IScroll(_s.m_mgD[0], _opt);

        if(_s.m_nCLSy != null) {
            _s.m_mgS.scrollTo(0, _s.m_nCLSy, 0);
        }
    };

    _s.onMessageParent = function(rs){
        var _res = rs.data,_data, subBuff = [],i,realexpired,_now,date,year,month,day;
        if(_res.cmd == "response"){
            if (_s.waiting_cb[_res.to] != null) {
                _s.waiting_cb[_res.to](_res.result);
            }
        }else if(_res.cmd == "webaccount"){
            gUseKey = _res.key;
        }else if(_res.cmd == "frameonload"){
            _s.userdata = _res.data;
            setTimeout(function(){
                window.parent.postMessage(
                    {
                        "cmd":"setoptionbtn",
                        "class":"fa fa-comments-o",
                        "show":true
                    },
                    "*"
                );
                setTimeout(function(){
                    window.parent.postMessage(
                        {
                            "cmd":"fileget",
                            "name":"category.json",
                        },
                        "*"
                    );
                },300);
            },200);
        }else if(_res.cmd == "fileget"){
            if(_res.result != ""){
                _data = g_convertToJSON(_res.result);
                if (_data) {
                    if(_res.name == "category.json"){
                        _s.m_mgC.find("[name='merge_loading']").hide();
                        subBuff = [];
                        subBuff.push("<div style='background-color: #fff;'><div name='websitelogo' style='margin: 0 auto;background-size: contain;'></div></div>");
                        var _node = $(subBuff.join(''));
                        _node.find("[name='websitelogo']").css({
                            "width":120,
                            "height":120,
                            'backgroundImage':"url("+g_Origin + "/images/logo.webp)"
                        });
                        _s.m_mgC.find("[name='merge_loading']").before(_node);

                        for(i=0;i<_data.categorys.length;i++){
                            _s.createCategory(_data.categorys[i]);
                        }

                        subBuff = [];
                        subBuff.push("<div name='ceritficate_item' style='display:none;margin-top: 5px; padding: 12px 0px; overflow: auto; background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(221, 221, 221);'><div style='overflow: hidden;float: left;margin-left:15px;color: #999;'><span name='ceritficate_tag'></span>&nbsp;&nbsp;<span name='ceritficate_expired' style='font-size:14px;'></span></div><div style='overflow: hidden;float: right;margin-right:15px;color: #999;'><i class='fa fa-id-card-o'></i></div></div>");
                        _node = $(subBuff.join(''));
                        if(_s.userdata.pubkey != ""){
                            _node.find("[name='ceritficate_tag']").text(g_language=="en"?"Expiry:":"有效期：");
                            _now = Date.now();
                            if(_now > _s.userdata.expired){
                                _node.find("[name='ceritficate_expired']").html(g_language=="en"?"<span style='font-size:13px;color:#ec0a0a;'>expired</span>":"<span style='font-size:13px;color:#ec0a0a;'>已失效</span>");
                            }else{
                                date = new Date(_s.userdata.expired);
                                year = date.getFullYear();
                                month = date.getMonth()+1;
                                day = date.getDate();
                                _node.find("[name='ceritficate_expired']").text(year+"/"+month+"/"+day);
                            }
                            _node.show();
                        }
                        _s.m_mgC.find("[name='merge_loading']").before(_node);
                        
                        _s.resetMessageContentEvent();
                        _s.resetContentSize(g_offsetWidth, g_ClientHeight);
                        _s.m_mgS.refresh();
                    }
                    return;
                }
            }
            _s.m_mgC.find("[name='merge_loading_faicon']").hide();
            _s.m_mgC.find("[name='merge_loading_tip']").text(g_language=="en"?"Website data load failed":"網站數據加載失敗");
        }else if(_res.cmd == "optionbtnclick"){
            if (_s.m_SS == null) {
                _s.unbindEvent();
                _s.m_SS = Chat_Screen.createNew(_s);
                _s.m_SS.setExtData({
                    'backScreenLeftPos': '0',
                    'moveToLeft': '-100',
                    'animatspeed': 'normal'
                });
                _s.m_SS.show(function () {
                    window.parent.postMessage(
                        {
                            "cmd":"setoptionbtn",
                            "class":"fa fa-comments-o",
                            "show":true
                        },
                        "*"
                    );
                    _s.m_SS = null;
                    _s.setEvent();
                });
            }else{
                _s.m_SS.backKeyDown();
            }
        }else if(_res.cmd == "proxycheckrecharge"){
            if(_s.m_nRecharge == 2 && _s.m_Pdlg != null){
                _s.m_Pdlg.find("[name='dialog_content_loading']").hide();
                _s.m_Pdlg.find("[name='cancelbtn']").text(g_language=="en"?"Close":"關閉").show();
                if(_res.errcode == 0){
                    _data = g_convertToJSON(_res.result);
                    if (_data) {
                        _s.userdata.ladder = _data.ladder;
                        _s.userdata.chargedate = _data.chargedate;

                        if(_data.ladder == 1){
                            realexpired = 30*86400000;
                        }else if(_data.ladder == 2){
                            ealexpired = 185*86400000;
                        }else{
                            realexpired = 366*86400000;
                        }
                        var _tmpexpired = _data.chargedate + realexpired;

                        date = new Date(_tmpexpired);
                        year = date.getFullYear();
                        month = date.getMonth()+1;
                        day = date.getDate();
                        var _resText = year+"/"+month+"/"+day;
                        _s.m_Pdlg.find("[name='dialog_content']").html("順道VPN續費選項已生效，有效期至："+_resText+"，請盡快聯系在線客服進行審核確認。").show();
                    }
                }else if(_res.errcode == 1){
                    _data = g_convertToJSON(_res.result);
                    if (_data) {
                        _s.userdata.ladder = _data.ladder;
                        _s.userdata.chargedate = _data.chargedate;
                        if(_data.ladder == 1){
                            realexpired = 30*86400000;
                        }else if(_data.ladder == 2){
                            ealexpired = 185*86400000;
                        }else{
                            realexpired = 366*86400000;
                        }
                        _s.userdata.expired = _data.chargedate + realexpired;

                        _s.userdata.active = 1;
                        _s.m_Pdlg.find("[name='dialog_content']").text(g_language=="en"?"Renewal succeeds!":"續費審核成功。").show();
                    }
                }else{
                    _s.m_Pdlg.find("[name='dialog_content']").text(g_language=="en"?"Renewal failed. Try again later!":"續費失敗，請稍後再試，或與客服諮詢。").show();
                }
                $("#screen_main").resize();
            }
        }else if(_res.cmd == "proxyrecharge"){
            if(_s.m_nRecharge == 1 && _s.m_Pdlg != null){
                _s.m_Pdlg.find("[name='dialog_content_loading']").hide();
                if(_res.errcode != 0){
                    _s.m_Pdlg.find("[name='dialog_content']").show();
                    _s.m_Pdlg.find("[name='cancelbtn']").show();
                    $("#screen_main").resize();
                    return;
                }
                _s.m_Pdlg.find("[name='cancelbtn']").text(g_language=="en"?"Close":"關閉").show();

                _data = g_convertToJSON(_res.result);
                if (_data) {
                    _s.userdata.ladder = _data.ladder;
                    _s.userdata.chargedate = _data.chargedate;
                    if(_data.ladder == 1){
                        realexpired = 30*86400000;
                    }else if(_data.ladder == 2){
                        ealexpired = 185*86400000;
                    }else{
                        realexpired = 366*86400000;
                    }

                    var _tmpe = _data.chargedate + realexpired;
                    date = new Date(_tmpe);
                    year = date.getFullYear();
                    month = date.getMonth()+1;
                    day = date.getDate();

                    var _resT = year+"/"+month+"/"+day;
                    _s.m_Pdlg.find("[name='dialog_content']").html("VPN續費選項已生效，有效期至："+_resT+"，請聯系在線客服進行審核確認。否則，該VPN服務將在24小時後被暫停。").show();
                }

                $("#screen_main").resize();
            }
        }
    };
    
    _s.postMessageToParent = function(msg, callback){
        msg.id = _s.next_message_id;
        _s.next_message_id += 1;
        _s.waiting_cb = {};
        _s.waiting_cb[msg.id] = callback;
        window.parent.postMessage(msg, "*");
    };

    _s.sendMessageToServer = function (message, callback) {
        if (gws != null && gws.connected == true && gSocketStata == 1) {
            gws.emit('modules.semail', JSON.stringify(message), callback);
        } else {
            callback({
                "error": "cannot connect with server"
            });
        }
    };
    
    _s.show = function () {
        var offsetWidth = g_offsetWidth;
        var clientHeight = g_ClientHeight;
        var _sfm = $("#screen_main");
        var _divhtml = "<div style='overflow:hidden;float:left;-moz-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;'>\
                            <div name='merge_div'>\
                                <div class='scroller-hidden'>\
                                    <div name='merge_loading' style='text-align: center;color: #999;margin-top:10px;font-size: 18px;'><i name='merge_loading_faicon' class='fa fa-spinner fa-pulse'></i><p name='merge_loading_tip' style='font-size: 15px;'>正在更新数据</p></div>\
                                </div>\
                            </div>\
                            <div name='confirmdialog-message-div' style='display:none;position: absolute;top:0;z-index:3;background: rgba(0,0,0,0.5);'><div name='confirmdialog-content' style='overflow: auto;outline: none;padding: 15px 15px 0;box-shadow: 0 2px 6px rgba(0,0,0,0.2);border-radius: 5px;box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;background-color: #fff;'></div></div>\
                        </div>";
        _s.m_MD = $(_divhtml);
        _s.m_MD.css({
            'width': offsetWidth,
            'height': clientHeight
        });
        _sfm.append(_s.m_MD);
        _sfm.css({
            'width': offsetWidth + _s.m_OSW,
            'height': clientHeight
        });

        _s.m_mgD = _s.m_MD.find("[name='merge_div']");
        _s.m_mgC = $(_s.m_mgD.children('div')[0]);
        _s.setEvent();
        _sfm.resize();
    };
    return _s;
}
};
