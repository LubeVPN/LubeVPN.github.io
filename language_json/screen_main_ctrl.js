/* jshint multistr: true */
var MainCtrl_Screen = {
    createNew: function (pScreenNode) {
        var _self = {};
        _self.m_pScreenNode = pScreenNode;

        _self.m_MainDiv = null;
        _self.m_contentView = null;
        _self.m_userListView = null;
        _self.m_userListContent = null;
        _self.m_wDv = null;
        _self.m_userListScroll = null;
        
        _self.m_Announcement_Screen = Announcement_view_Screen.createNew(_self);

        _self.m_pPopupDialog = null;
        _self.m_pRePopupDialog = null;
        
        _self.m_ReConnectSrvTimer = null;
        _self.m_QHLTS = 0;//m_QueryHeadLineTS
        _self.m_bSMoreUserInfo = false;


        _self.getNumsScreen = function(){
            return 1;
        };

        _self.resetContentSize = function(offsetWidth,clientHeight){
            var _css = {
                'position': 'relative',
                'z-index': '2',
                'overflow': 'hidden',
                'height': clientHeight - 60,
                'width': offsetWidth*0.95*0.25-6,
            };
            _self.m_userListView.css(_css);

            _self.m_Announcement_Screen.resetContentSize(offsetWidth, clientHeight-10);

            var _div = _self.m_MainDiv.find("[name='dialog-message-div']");
            _div.css({
                'width':offsetWidth,
                'height':clientHeight
            });

            _div = _div.find("[name='dialog-content']");
            var _mw = parseInt(_div.css('max-width'));
            if(isNaN(_mw)){
                _mw = offsetWidth *0.85;
            }

            _div.css({
                "top":(clientHeight-_div.height())/2,
                "left":(offsetWidth-_mw-60)/2
            });

            _div = _self.m_MainDiv.find("[name='confirmdialog-message-div']");
            _div.css({
                'width':offsetWidth,
                'height':clientHeight
            });

            _div = _div.find("[name='confirmdialog-content']");
            _mw = parseInt(_div.css('max-width'));
            if(isNaN(_mw)){
                _mw = offsetWidth *0.9;
            }

            _div.css({
                "top":(clientHeight-_div.height())/2,
                "left":(offsetWidth-_mw-60)/2
            });

            _div = _self.m_MainDiv.find("[name='reconfirmdialog-message-div']");
            _div.css({
                'width':offsetWidth,
                'height':clientHeight
            });

            _div = _div.find("[name='reconfirmdialog-content']");
            _div.css({
                "top":(clientHeight-_div.height())/2,
                "left":(offsetWidth-offsetWidth *0.9)/2
            });
        };
        
        _self.unbindEvent = function(){

        };

        _self.backLastScreen = function(){
            _self.unbindEvent();
        };

        _self.backKeyDown = function () {

            if(_self.m_pPopupDialog != null){
                _self.m_pPopupDialog.doClose();
                _self.m_pPopupDialog = null;
                return false;
            }

            if(_self.m_pRePopupDialog != null){
                _self.m_pRePopupDialog.doClose();
                _self.m_pRePopupDialog = null;
                return false;
            }

            return true;
        };

        _self.onSizeChange = function(offsetWidth,clientHeight){
            if(_self.m_MainDiv == null)return;
            var _leftDivWidth = offsetWidth*0.95*0.75;
            var subWidth = _leftDivWidth;

            _self.m_contentView.css({
                "width":subWidth
            });
            
            _self.m_MainDiv.css({
                'width': offsetWidth,
                'min-height':clientHeight-10
            }); 
            _self.resetContentSize(offsetWidth,clientHeight);
        };

        _self.showDialogMessageBox = function(nodediv, maxwidth, callback){
            $(document.body).css({
                "overflow":"hidden"
            });
            _self.m_pPopupDialog = _self.m_MainDiv.find("[name='dialog-message-div']");
            _self.m_pPopupDialog.closeCallBack = callback;
            _self.m_pPopupDialog.doClose = function(){
                $(document.body).css({
                    "overflow-y":"scroll",
                    "overflow-x": "hidden"
                });
                if(_self.m_pPopupDialog.closeCallBack != null) {
                    _self.m_pPopupDialog.closeCallBack();
                }
                _self.m_pPopupDialog.hide();
                _self.m_pPopupDialog = null;
            };

            var _div = _self.m_pPopupDialog.find("[name='dialog-content']");
            _div.empty();
            _div.append(nodediv);
            _self.m_pPopupDialog.show();

            var _css = {
                "color":"#34495e",
                "position": "relative",
                "opacity": 1
            };

            var _w = document.body.offsetWidth*0.85;
            if(maxwidth != 0 && _w > maxwidth){
                _css.width = _css["max-width"] = _w = maxwidth;
            }else{
                _css.width = _w;
            }
            _css.left = (document.body.offsetWidth - _w - 60)/2;

            _div.css(_css);
            _div.css({"top": (document.documentElement.clientHeight - _div.height()) / 2});


            if(callback != null) {
                _self.m_pPopupDialog.one("click", function (event) {
                    _self.m_pPopupDialog.doClose();
                    event.stopPropagation();
                    return false;
                });
            }
            return _self.m_pPopupDialog;
        };
        
        _self.showConfirmDialogMessageBox = function(nodediv, maxwidth, confirmFun,cancelFun){
            $(document.body).css({
                "overflow":"hidden"
            });

            _self.m_pPopupDialog = _self.m_MainDiv.find("[name='confirmdialog-message-div']");
            _self.m_pPopupDialog.closeCallBack = cancelFun;
            _self.m_pPopupDialog.doClose = function(){
                $(document.body).css({
                    "overflow-y":"scroll",
                    "overflow-x": "hidden"
                });
                if(_self.m_pPopupDialog.closeCallBack != null) {
                    _self.m_pPopupDialog.closeCallBack();
                    _self.m_pPopupDialog.closeCallBack = null;
                }
                _self.m_pPopupDialog.find("[name='confirmbtn']").off("click");
                _self.m_pPopupDialog.hide();
                _self.m_pPopupDialog = null;
            };

            var _div = _self.m_pPopupDialog.find("[name='confirmdialog-content']");
            _div.empty();
            _div.append(nodediv);
            _self.m_pPopupDialog.show();
            var _css = {
                "color":"#34495e",
                "position": "relative",
                "opacity": 1
            };

            var _w = document.body.offsetWidth*0.9;
            if(maxwidth != 0 && _w > maxwidth){
                _css.width = _css["max-width"] = _w = maxwidth;
            }else{
                _css.width = _w;
            }
            _css.left = (document.body.offsetWidth - _w - 60)/2;

            _div.css(_css);
            _div.css({"top": (document.documentElement.clientHeight - _div.height()) / 2});

            _div.find("[name='confirmbtn']").on("click",function(event){
                $(this).off("click");
                if(confirmFun(_self.m_pPopupDialog) == false)return;
                $(document.body).css({
                    "overflow-y":"scroll",
                    "overflow-x": "hidden"
                });
                _self.m_pPopupDialog.hide();
                _self.m_pPopupDialog = null;
                event.stopPropagation();
                return false;
            });

            if(_div.find("[name='cancelbtn']").length > 0) {
                _div.find("[name='cancelbtn']").one("click", function (event) {
                    _self.m_pPopupDialog.doClose();
                    event.stopPropagation();
                    return false;
                });
            }else{
                _self.m_pPopupDialog.one("click",function(event){
                    _self.m_pPopupDialog.doClose();
                    event.stopPropagation();
                    return false;
                });
            }
            return _self.m_pPopupDialog;
        };


        _self.showReConfirmDialogMessageBox = function(nodediv,confirmFun,cancelFun){
            _self.m_pRePopupDialog = _self.m_MainDiv.find("[name='reconfirmdialog-message-div']");
            _self.m_pRePopupDialog.closeCallBack = cancelFun;
            _self.m_pRePopupDialog.doClose = function(){
                if(_self.m_pRePopupDialog.closeCallBack != null) {
                    _self.m_pRePopupDialog.closeCallBack();
                    _self.m_pRePopupDialog.closeCallBack = null;
                }
                _self.m_pRePopupDialog.hide();
                _self.m_pRePopupDialog = null;
            };

            var _div = _self.m_pRePopupDialog.find("[name='reconfirmdialog-content']");
            _div.empty();
            _div.append(nodediv);
            _self.m_pRePopupDialog.show();
            _div.css({
                "width":'90%',
                "color":"#34495e",
                "position": "relative",
                "opacity": 1,
                "left":(document.body.offsetWidth-document.body.offsetWidth*0.9)/2
            });
            _div.css({"top": (document.documentElement.clientHeight - _div.height()) / 2});

            _div.find("[name='confirmbtn']").on("click",function(event){
                $(this).off("click");
                if(confirmFun(_self.m_pRePopupDialog) == false)return;
                _self.m_pRePopupDialog.hide();
                _self.m_pRePopupDialog = null;
                event.stopPropagation();
                return false;
            });

            if(_div.find("[name='cancelbtn']").length > 0) {
                _div.find("[name='cancelbtn']").one("click", function (event) {
                    _self.m_pRePopupDialog.doClose();
                    event.stopPropagation();
                    return false;
                });
            }else{
                _self.m_pRePopupDialog.one("click",function(event){
                    _self.m_pRePopupDialog.doClose();
                    event.stopPropagation();
                    return false;

                });
            }
            return _self.m_pRePopupDialog;
        };
        
        _self.resetMessageContentEvent = function(){
            var _uitem = _self.m_userListContent.find("[name='user-info-item']");
            _uitem.off("click");
            
            _uitem.on('click', function (event) {
                var _useinfo = $(this).data("userinfo");
                
                _self.m_Announcement_Screen.show(_useinfo, true);
                _self.m_contentView.show();


                event.stopPropagation();
                return false;
            });

            _self.m_Announcement_Screen.setEvent();
        };

        _self.queryUsersInfo = function () {
            if (_self.m_QHLTS == -1 || _self.m_bSMoreUserInfo == true)return;
            _self.m_bSMoreUserInfo = true;
            //todo
        }; 

        _self.getMoreUsers = function () {
            if (_self.m_userListScroll.maxScrollY - _self.m_userListScroll.y > 40) {
                _self.queryUsersInfo();
            }
        };

        _self.setEvent = function(){
            _self.m_userListScroll = new IScroll(_self.m_userListView[0]);
            _self.m_userListScroll.on("slideUp",_self.getMoreUsers);

            _self.resetMessageContentEvent();
        };

        //失去去服務器的連接
        _self.onLoginError = function(dialog){
            console.log("onLoginError");
            dialog.find("[name='dialog_content']").html("");
        };

        //連接服務器失敗
        _self.onConnectServerFailed = function(dialog){
            console.log("onConnectServerFailed");
            dialog.find("[name='dialog_content']").html("連接服務器失敗");
        };

        //服務器推送過來的消息
        _self.onRecvMessage = function (recvdata) {
            var _data = g_convertToJSON(recvdata);
            console.log(_data);
            var j, _div, _useinfo, bFound=false,
            _childrens = _self.m_userListContent.find("[name='user-info-item']");
            for(j=0;j<_childrens.length;j++){
                _div = $(_childrens[j]);
                _useinfo = _div.data("userinfo");
                if ( _useinfo.uid == _data.data.fromuid) {
                    bFound = true;
                    break;
                }
            }
            if(bFound == false){
                //todo add new user
                return;
            }

            if(j != 0 && j < _childrens.length){
                _self.m_wDv.after(_div);
                if(_self.m_userListScroll != null){
                    //_s.resetMessageContentEvent();
                    _self.m_userListScroll.refresh();
                }
            }
        };

        _self.scorllToUserlistViewEnd = function (bAtOnce) {
            var _childrens = _self.m_userListContent.children('.chatmessage');
            if (_childrens.length > 1) {
                var _contentLast = $(_childrens[_childrens.length - 1]);
                _self.m_userListScroll.scrollToElement(_contentLast[0], bAtOnce == true ? 0 : null);
            }
        };

        _self.addUserInfo = function(userinfo, bAppend){
            var subBuff = [];
            subBuff.push("<div name='user-info-item' style='color: #999;font-size: 18px;margin: 2px auto;padding: 5px 10px;background-color: #fff;'>ID:&nbsp;<span name='user-id'></span></div>");
            var _node = $(subBuff.join(''));

            _node.data("userinfo", userinfo);
            _node.find("[name='user-id']").text(userinfo.uid);

            if(bAppend == true){
                _self.m_wDv.after(_node);
            }else{
                //_self.m_userListContent.prepend(_node);
                _self.m_userListContent.append(_node);
            }
        };

        //獲取最近有對話請求的用戶，服務器配置爲最近6小時內的用戶
        _self.loadLastChatUser = function(){
            _self.m_pScreenNode.sendMessageToServer({
                    "cmd": 'webchat.getlastuser',
                    "time": _self.m_QHLTS
                }, 
                function(err, cnmret){
                    if(err == null){
                        var _ret = g_convertToJSON(cnmret);
                        if (_ret != null) {                            
                            _self.m_QHLTS = _ret.ts;
                            _self.m_userListContent.find("[name='user_loading']").remove();

                            for (var i = 0; i < _ret.data.length; i++) {
                                var userinfo = {
                                    "uid": _ret.data[i].uid,
                                    "name": _ret.data[i].name,
                                    "lastonline": _ret.data[i].lastonline
                                };
                                _self.addUserInfo(userinfo,false);
                            }

                            _self.m_userListScroll.refresh();
                            _self.scorllToUserlistViewEnd(true);

                            _self.resetMessageContentEvent();
                        }
                    }
                }
            );
        };
        
        //登錄服務器成功
        _self.doLogined = function(dialog){
            dialog.doClose();
            _self.m_userListContent.empty().append("<div name='userlist_viewheader' style='text-align: center;color: #666;margin: 20px 20px;font-size: 18px;display: none;'></div><div name='user_loading' style='text-align: center;color: #999;margin-top:10px;font-size: 16px;'><i name='user_loading_faicon' class='fa fa-spinner fa-pulse'></i><p name='user_loading_tip' style='font-size: 14px;'>正在獲取客戶</p></div>");
            _self.m_wDv = _self.m_userListView.find("[name='userlist_viewheader']");
            _self.m_MainDiv.find("[name='main_content_div']").show();
            _self.resetMessageContentEvent();
            _self.m_userListScroll.refresh();
            _self.m_userListScroll.scrollTo(0,0,0);

            _self.loadLastChatUser();
        };

        //顯示正在連接服務器的提示對話框
        _self.showConnectSrvDialog = function(){
            var _subnode = $("<div style='overflow: auto;text-align: center;'><div name='dialog_content' style='margin: 0 auto;padding: 15px 15px;font-size: 15px;font-weight: bold;color: #888;'></div></div>");
            _subnode.find("[name='dialog_content']").html("<i class='fa fa-spinner fa-pulse'></i>&nbsp;&nbsp;正在連接服務器…");
            var pDialog = _self.showDialogMessageBox(_subnode, 460, null);

            //去連接服務器並登錄
            ConnectWithServer(pDialog);
        };

        _self.show = function(){
            var offsetWidth = document.body.offsetWidth;
            var clientHeight = document.documentElement.clientHeight;

            var strDivHtml = "<div style='overflow:hidden;float:left;background: #eee2e2;'>\
                                <div name='main_content_div' style='width: 100%;padding:5px 20px;overflow: hidden;display:none;'>\
                                    <div name='main_userlist_div' style='width: 25%;float:left;padding-right: 10px;z-index:90;position:relative;background-color: #eee2e2;'>\
                                        <div style='-moz-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;border-top: 2px solid #ed4040;'>\
                                            <div style='font-weight: bold;margin-bottom: 2px;background: #fff;padding: 2px 10px 2px;border: 1px solid #dddddd;border-radius: 3px;'><i class='fa fa-list' style='color: #ff8800;height: 40px;line-height: 43px;border-right: 1px solid #ddd;margin-right: 10px;padding-right: 10px;font-size: 1.3em;'></i>客戶列表</div>\
                                            <div name='userlist_view' style='background: #eee;border: 1px solid #dddddd;border-radius: 5px;'>\
                                                <div class='scroller-hidden'>\
                                                <div name='userlist_viewheader' style='text-align: center;color: #666;margin: 20px 20px;font-size: 18px;display: none;'></div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div name='main_chatscreen_div' style='width: 75%;float:right;min-width:600px;-moz-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;'>\
                                        <div name='mcl_view' style='display:none;overflow:hidden;position:relative;'></div>\
                                    </div>\
                                </div>\
                                <div name='dialog-message-div' style='display:none;position: fixed;top:0;z-index:999;'><div name='dialog-content' style='border-top: 2px solid #ed4040;overflow: auto;outline: none;padding: 15px 15px 0;box-shadow: 0 4px 8px rgba(0,0,0,0.5);border-radius: 5px;box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;background-color: #fff;'></div></div>\
                                <div name='confirmdialog-message-div' style='display:none;position: fixed;top:0;z-index:999;'><div name='confirmdialog-content' style='border-top: 2px solid #ed4040;overflow: auto;outline: none;padding: 15px 15px 0;box-shadow: 0 4px 8px rgba(0,0,0,0.5);border-radius: 5px;box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;background-color: #fff;'></div></div>\
                                <div name='reconfirmdialog-message-div' style='display:none;position: fixed;top:0;z-index:999;'><div name='reconfirmdialog-content' style='border-top: 2px solid #ed4040;overflow: auto;outline: none;padding: 15px 15px 0;box-shadow: 0 4px 8px rgba(0,0,0,0.5);border-radius: 5px;box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;background-color: #fff;'></div></div>\
                            </div>";

            var _sfm = $("#screen_main");
            _self.m_MainDiv = $(strDivHtml);
            _self.m_MainDiv.css({
                'width': offsetWidth,
                'min-height':clientHeight-10
            });
            
            _sfm.append(_self.m_MainDiv);
            
            _self.m_userListView = _self.m_MainDiv.find("[name='userlist_view']");
            _self.m_userListContent = $(_self.m_userListView.children("div")[0]);
            _self.m_wDv = _self.m_userListView.find("[name='userlist_viewheader']");

            _self.m_contentView = _self.m_MainDiv.find("[name='mcl_view']");
            _self.m_contentView.append(_self.m_Announcement_Screen.screenInit());
            
            _self.resetContentSize(offsetWidth,clientHeight);

            _self.setEvent();

            _sfm.resize();

            setTimeout(function(){
                _self.showConnectSrvDialog();
            },200);
        };

        return _self;
    }
};
