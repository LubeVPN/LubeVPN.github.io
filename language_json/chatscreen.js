/* jshint multistr: true */
var Chat_Screen = {
    createNew: function (pScreenNode) {
        var _s = {};
        _s.m_pScreenNode = pScreenNode;
        _s.m_OSW = $("#screen_main").width();
        _s.m_CloseFunction = null;

        _s.m_MD = null;

        _s.m_CD = null;
        _s.m_CS = null;
        _s.m_CC = null;
        _s.m_nCLSy = null;

        _s.m_Pdlg = null;

        _s.m_talkBar = null;
        _s.m_chatInputDiv = null;
        _s.m_sendMsgBtn = null;

        _s.m_bInputFocus = false;
        _s.m_hasInputWord = false;
        _s.m_MaxTextLength = 1000;

        _s.m_extData = null;
        _s.chatMsgs = null;
        _s.m_strNeedResendIcon = "<i class='fa fa-circle' style='color:#f00;'></i>";
        _s.m_QHLTS = 0;//m_QueryHeadLineTS
        
        _s.getNumsScreen = function () {
            return 1;
        };

        _s.resetContentSize = function(offsetWidth,clientHeight){
            var _css = {
                'position': 'relative',
                'z-index': '2',
                'overflow': 'hidden',
                'height': clientHeight-50,
                'width': offsetWidth,
                'background-color': "#eee"
            };
            _s.m_CD.css(_css);

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
            _s.m_OSW = _sfm.width() - offsetWidth;
            _s.m_MD.css({'width': offsetWidth, 'height': clientHeight});
            
            _s.resetContentSize(offsetWidth, clientHeight);

            var _barHeight = _s.m_talkBar.height();
            _s.m_talkBar.css({
                'width': offsetWidth,
                "top": clientHeight - _barHeight
            });
            _s.m_nLastTalkBarHeight = _s.m_talkBar.height();

            if (_s.m_CS != null) {
                _s.m_CS.refresh();
                _s.scorllToChatMessageEnd(true);
            }
        };

        _s.unbindEvent = function(){
            if (_s.m_CS) {
                _s.m_CS.off("slideDown");
                _s.m_nCLSy = _s.m_CS.y;
                _s.m_CS.destroy();
                _s.m_CS = null;
            }

            _s.m_chatInputDiv.off("focus");
            _s.m_sendMsgBtn.off("touchstart mousedown");
            _s.m_CC.find("a").off('tap');
            _s.m_CC.find("[name='webpasswd_reset']").off('tap');
        };

        _s.backLastScreen = function () {
            _s.unbindEvent();
            _s.m_talkBar.hide();

            var _sfm = $("#screen_main");
            _sfm.transition(
                {
                    "left": _s.m_extData.backScreenLeftPos+"%"
                }, 
                _s.m_extData.animatspeed, function () {
                    _s.m_MD.hide();
                    _s.m_MD.remove();
                    _s.m_MD = null;
                    _sfm.css({
                        'width': _s.moSw,
                        'height': g_ClientHeight
                });
                _s.m_CloseFunction();
                _sfm.resize();
            });
        };

        _s.backKeyDown = function () {
            if (_s.m_Pdlg != null) {
                _s.m_Pdlg.doClose();
                _s.m_Pdlg = null;
                return false;
            }

            if(_s.m_bInputFocus == true){
                _s.m_chatInputDiv.blur();
                return false;
            }

            _s.backLastScreen();
            return true;
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

        _s.prepareChatMsg = function (chatMsg, node, callback) {
            if (chatMsg.type == "image") {
            }else{
                var _base64content = Base64.encode(chatMsg.content);
                _s.m_pScreenNode.postMessageToParent({
                    "cmd":"websign",
                    "data":_base64content
                },function(result){
                    if (result.err != null) {
                        return callback({"message":"sign error"});
                    }
                    node.find("[name='message_waitting']").find("[name='waitting_icon']").css("color","#999");
                    _s.m_pScreenNode.sendMessageToServer({
                        'cmd': 'webchat.message',
                        'signature': result.res,
                        'content':_base64content,
                        'image':"",
                        'type':chatMsg.type
                    },
                    function(err){
                        if (err != null) {
                            return callback({"message":"cannot connect with server"});
                        }
                        callback(null);
                    });
                });
            }
        };

        _s.newAlementAdd = function (chatMsg, node) {
            _s.resetMessageContentEvent();
            _s.m_CS.refresh();
            _s.m_CS.scrollToElement(node[0]);
            setTimeout(function(){
                //var _time = Math.round(new Date().getTime());
                _s.prepareChatMsg(chatMsg, node, function(err){
                    if(err==null){
                        node.find("[name='message_waitting']").hide();
                        _s.chatMsgs.push(chatMsg);
                    }else{
                        node.find("[name='message_waitting']").html(_s.m_strNeedResendIcon);
                    }
                });
            },0);
        };
        
        _s.createNewChatMsg = function (chatMsg) {
            var subBuff = [];
            var nLen = _s.chatMsgs.length;
            var bAddTimeStr = false;
            if (nLen > 0) {
                if (_s.chatMsgs[nLen - 1].timestamp < chatMsg.timestamp - 1000 * 60 * 5) {
                    bAddTimeStr = true;
                }
            }
            if (bAddTimeStr == true || nLen == 0) {
                subBuff.push("<div style='text-align: center;margin:0 auto;'><span style='border-radius:4px;padding: 4px 6px;font-size:12px;background-color: #999999;color:#fff;'>");
                subBuff.push(g_timeAgo(chatMsg.timestamp));
                subBuff.push("</span></div>");
            }
            subBuff.push("<div class='message-send chatmessage chatmessage-send'><div class='message-info'><div class='message-content-box'><div name='mcb_arrow' class='arrow'></div><div class='message-content'></div></div><div name='message_waitting' style='margin-right:10px;float: right;font-size: 16px;color: #999;'><i name='waitting_icon' class='fa fa-spinner fa-pulse' style='color:#ae50e7;'></i></div></div></div>");
            var _node = $(subBuff.join(''));

            _s.m_CC.find("[name='chat_bottom_div']").before(_node);
            _node.data("msg", chatMsg);

            var _msgcontent = _node.find('.message-content');
            if (chatMsg.type == "text") {
                var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
                subBuff = [];
                subBuff.push("<div style='overflow: hidden;padding-left: 4px;'><span style='-moz-user-select: text;user-select: text;-webkit-user-select: text;-o-user-select: text;'>");
                subBuff.push(chatMsg.content.replace(reg, "<a target='_blank' href='$1$2' >$1$2</a>").replace(/\n/g, "<br>"));
                subBuff.push("</span></div>");
                _msgcontent.append(subBuff.join(''));
            }
            _s.newAlementAdd(chatMsg, _node);
        };

        _s.scorllToChatMessageEnd = function (bAtOnce) {
            var _childrens = _s.m_CC.children('.chatmessage');
            if (_childrens.length > 1) {
                var _contentLast = $(_childrens[_childrens.length - 1]);
                _s.m_CS.scrollToElement(_contentLast[0], bAtOnce == true ? 0 : null);
            }
        };

        _s.resetMessageContentEvent = function(){
            var _ahref = _s.m_CC.find("a"),
                _pwrest = _s.m_CC.find("[name='webpasswd_reset']");
            
            _ahref.off('tap');
            _pwrest.off('tap');

            _ahref.on('tap', function (event) {
                var _url = $(this).attr("href");
                window.open(_url, '_system');
                event.preventDefault();
                event.stopPropagation();
                return false;
            });

            _pwrest.on('tap', function (event) {
                $(this).off('tap');
                _s.m_pScreenNode.sendMessageToServer(
                    {
                        "cmd": 'webchat.resetpasswd'
                    }, 
                    function(err, result){
                        if(err==null){
                            var _cnmret = g_convertToJSON(result);
                            if(_cnmret != null){
                                var _content_h = g_language=="en"?"Your password to the Community Forum after the reset: <br><span style='color:#08a7c3;'>":"重置討論區的登錄密碼是：<br><span style='color:#08a7c3;'>";
                                var _content_t = g_language=="en"?"</span><br>You might want to change the password. ":"</span><br>請注意修改此密碼。";
                                var chatMsg = {
                                    "uid": 0,
                                    "tid": gUserID,
                                    "content": _content_h+_cnmret.passwd+_content_t,
                                    "image": "",
                                    "type": "text",
                                    "timestamp": Math.round(new Date().getTime())
                                };
                                _s.chatMsgs.push(chatMsg);
                                _s.updateChatMessage(chatMsg,true);
        
                                _s.m_CS.refresh();
                                _s.scorllToChatMessageEnd(true);
                            }
                        }
                        _s.resetMessageContentEvent();
                    }
                );

                event.stopPropagation();
                return false;
            });
        };


        _s.resetSendBTNEvent = function(){
            _s.m_sendMsgBtn.off("touchstart mousedown");

            if(_s.m_hasInputWord){
                _s.m_sendMsgBtn.on("touchstart mousedown", function (event) {

                    var _content = $.trim(_s.m_chatInputDiv.text());
                    if (_content.length > 0) {
                        _content = _content.replace(/[<>&"]/g, function (c) {
                            return {
                                '<': '&lt;',
                                '>': '&gt;',
                                '&': '&amp;',
                                '"': '&quot;'
                            } [c];
                        });

                        _s.createNewChatMsg({
                            "uid": gUserID,
                            "tid": 0,
                            "content": _content,
                            "image":"",
                            "type": "text",
                            "timestamp": Math.round(new Date().getTime())
                        });

                        _s.m_chatInputDiv.empty();
                        _s.m_hasInputWord = false;
                        _s.resetSendBTNEvent();
                        $("#screen_main").resize();
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                });
            }
        };

        _s.slideDownEnd = function () {
            _s.m_CS.off("scrollEnd", _s.slideDownEnd);
            _s.queryNormalChatMessages(function(err, cnmret){
                if (err == null) {
                    var _ret = g_convertToJSON(cnmret);
                    if (_ret != null) {
                        _s.m_QHLTS = _ret.ts;
                        var chatMsg;
                        for (var i = 0; i < _ret.data.length; i++) {
                            chatMsg = {
                                "uid": _ret.data[i].fromuid,
                                "tid": _ret.data[i].touid,
                                "content": Base64.decode(_ret.data[i].content),
                                "image": _ret.data[i].image,
                                "type": _ret.data[i].mtype,
                                "timestamp": _ret.data[i].timestamp
                            };
                            _s.chatMsgs.push(chatMsg);
                            _s.updateChatMessage(chatMsg,false);
                        }

                        _s.m_CS.refresh();
                        _s.m_CS.scrollTo(0, _s.m_CS.maxScrollY-_s.m_nCLSy, 0);

                        _s.resetMessageContentEvent();
                    }
                }
                _s.m_CS.on("slideDown", _s.getMoreChatMsg);
            });
        };
        
        _s.getMoreChatMsg = function () {
            if (_s.m_CS.y > 40 && _s.m_QHLTS>0) {
                _s.m_nCLSy = _s.m_CS.maxScrollY;
                _s.m_CS.off("slideDown", _s.getMoreChatMsg);
                _s.m_CS.on("scrollEnd", _s.slideDownEnd);
            }
        };
        
        _s.setEvent = function(){
            _s.resetSendBTNEvent();
            _s.resetMessageContentEvent();

            var _opt = {
                probeType: 3,
                tap: true,
                mouseWheel: true,
                hScrollbar: false,
                disablePointer: true,
                disableTouch: false,
                disableMouse: false
            };
            if(g_isMobile == false){
                _opt.preventDefaultException = {  tagName: /^(IMG|A|SPAN)$/};
            }else{
                _opt.preventDefaultException = { tagName: /^(SPAN)$/ };
            }

            _s.m_CS = new IScroll(_s.m_CD[0], _opt);
            _s.m_CS.on("slideDown",_s.getMoreChatMsg);

            if(_s.m_nCLSy != null) {
                _s.m_CS.scrollTo(0, _s.m_nCLSy, 0);
            }

            _s.m_chatInputDiv.on("focus", function () {
                _s.m_CD.on('tap', function () {
                    _s.m_chatInputDiv.blur();
                });

                _s.m_chatInputDiv.on('input', function () {
                    var _text = _s.m_chatInputDiv.text();
                    var nLen = _text.length;
                    if (nLen >= 1) {
                        if(_s.m_hasInputWord == false){
                            _s.m_hasInputWord = true;
                            _s.resetSendBTNEvent();
                        }
                        if (nLen > _s.m_MaxTextLength) {
                            _s.m_chatInputDiv.text(_text.substring(0, _s.m_MaxTextLength));
                        }
                    } else {
                        _s.m_chatInputDiv.empty();
                        _s.m_hasInputWord = false;
                        _s.resetSendBTNEvent();
                    }
                    if (_s.m_talkBar.height() != _s.m_nLastTalkBarHeight) {
                        $("#screen_main").resize();
                    }
                });

                _s.m_chatInputDiv.on('blur', function () {                
                    _s.m_bInputFocus = false;
                    _s.m_chatInputDiv.off('blur');
                    _s.m_chatInputDiv.off('input');
                    _s.m_CD.off('tap');
                });

                _s.m_bInputFocus = true;
            });
        };

        _s.setExtData = function (extData) {
            _s.m_extData = extData || {};
        };

        _s.queryNormalChatMessages = function (callback) {
            var _querycmd = {
                "cmd": 'querychatmsgs',
                "time": _s.m_QHLTS
            };
            _s.m_pScreenNode.sendMessageToServer(
                _querycmd, 
                function(err, result){
                    callback(err, result);
                }
            );
        };

        _s.addChatMsgTimeDiv = function (chatMsg, strBuff) {
            var subBuff = [];
            var nLen = _s.chatMsgs.length;
            var nIndex = $.inArray(chatMsg, _s.chatMsgs);
            var bAddTimeStr = false;
            if (nIndex > 0 && nIndex < nLen) {
                if (_s.chatMsgs[nIndex - 1].timestamp < chatMsg.timestamp - 1000 * 60 * 5) {
                    bAddTimeStr = true;
                }
            }
            if (bAddTimeStr == true || nIndex == 0) {
                subBuff.push("<div style='text-align: center;margin:0 auto;'><span style='border-radius:4px;padding: 4px 6px;font-size:12px;background-color: #999999;color:#fff;'>");
                subBuff.push(g_timeAgo(chatMsg.timestamp));
                subBuff.push("</span></div>");
            }
            subBuff.push(strBuff);
            return subBuff.join('');
        };

        _s.updateChatMessage = function (chatMsg, bAppend) {
            var subBuff = [], _picurl="";

            if (chatMsg.uid != gUserID) {
                subBuff.push("<div class='message-receive chatmessage chatmessage-receive'>");
            } else {
                subBuff.push("<div class='message-send chatmessage chatmessage-send'>");
            }
            subBuff.push("<div class='message-info'>");
            if(chatMsg.uid != gUserID){
                subBuff.push("<div name='user_avatar' class='user-avatar' style='font-size: 32px;text-align: center;background-color: #aaa;'><i name='avatar_none' class='fa fa-user' style='text-align: center;color: #ddd;top: -4px;position: relative;'></i></div>");
            }
            subBuff.push("<div class='message-content-box'><div name='mcb_arrow' class='arrow'></div><div class='message-content'></div></div>");
            if (chatMsg.uid == gUserID) {
                subBuff.push("<div name='message_waitting' style='display:none;margin-right:10px;float: right;font-size: 16px;'><i class='fa fa-spinner fa-pulse'></i></div>");
            }
            subBuff.push("</div></div>");
            var _node = $(_s.addChatMsgTimeDiv(chatMsg, subBuff.join('')));

            _node.data("msg", chatMsg);
            
            if (chatMsg.uid != gUserID) {
                var _avatar = _node.find("[name='user_avatar']");
                _avatar.data("type", 1);
            
                if (typeof(_picurl) == "string" && _picurl != "") {
                    _avatar.css({
                        "background-image": "url(" + _picurl + ")",
                        "background-size": "100% 100%"
                    });
                    _avatar.find("[name='avatar_none']").hide();
                } else {
                    _avatar.css({
                        "background-size": "100% 100%"
                    });
                }
            }

            var _msgcontent = _node.find('.message-content');
            if (chatMsg.type == "text") {
                subBuff = [];
                var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
                subBuff.push("<div style='overflow: hidden;padding-left: 4px;'><span style='-moz-user-select: text;user-select: text;-webkit-user-select: text;-o-user-select: text;'>");
                subBuff.push(chatMsg.content.replace(reg, "<a target='_blank' href='$1$2' >$1$2</a>").replace(/\n/g, "<br>"));
                subBuff.push("</span></div>");
                _msgcontent.append(subBuff.join(''));
            } else if (chatMsg.type == "image") {
            }
            if(bAppend == true){
                _s.m_CC.find("[name='chat_bottom_div']").before(_node);
            }else{
                _s.m_CC.prepend(_node);
            }
        };

        _s.onRecvMessage = function (recvmsg) {
            if(recvmsg.cmd == "webchat.talk"){
                var chatMsg = {
                    "uid": recvmsg.data.fromuid,
                    "tid": gUserID,
                    "content": Base64.decode(recvmsg.data.content),
                    "image": recvmsg.data.image,
                    "type": recvmsg.data.type,
                    "timestamp": recvmsg.data.timestamp
                };
                _s.chatMsgs.push(chatMsg);
                _s.updateChatMessage(chatMsg,true);

                _s.m_CS.refresh();
                _s.scorllToChatMessageEnd(true);
            }
        };

        _s.initChatDiv = function () {
            _s.queryNormalChatMessages(function(err, cnmret){
                if (err == null) {
                    var _ret = g_convertToJSON(cnmret);
                    if (_ret != null) {
                        _s.m_QHLTS = _ret.ts;
                        _s.m_MD.find("[name='chat_loading']").remove();

                        var chatMsg;
                        for (var i = 0; i < _ret.data.length; i++) {
                            chatMsg = {
                                "uid": _ret.data[i].fromuid,
                                "tid": _ret.data[i].touid,
                                "content": Base64.decode(_ret.data[i].content),
                                "image": _ret.data[i].image,
                                "type": _ret.data[i].mtype,
                                "timestamp": _ret.data[i].timestamp
                            };
                            _s.chatMsgs.push(chatMsg);
                            _s.updateChatMessage(chatMsg,false);
                        }

                        var _now = Math.round(new Date().getTime());
                        var _content = g_language=="en"?"We encourage you to seek help on our Community Forum because we try to limit LIVE HELP to issues related to the renewal and billing of MEMBER CERT. <br>https://forum.lubevpn.com<br> Here is your Login for the Forum: <br><span style='color:#08a7c3;'>vpnuser":"我們鼓勵你去順道VPN的社區論壇發問，因為我們的在線客服盡處理與《會員通行證書》續時和抵值相關的話題。<br>https://forum.lubevpn.com<br>你的討論區登錄帳號是：<br><span style='color:#08a7c3;'>vpnuser";
                        chatMsg = {
                            "uid": 0,
                            "tid": gUserID,
                            "content": _content+gUserID+"</span>",
                            "image": "",
                            "type": "text",
                            "timestamp": _now
                        };
                        _s.chatMsgs.push(chatMsg);
                        _s.updateChatMessage(chatMsg,true);
                        
                        var subBuff = [];
                        subBuff.push("<div style='overflow: hidden;padding-left: 4px;text-align: center;margin: 10px auto;'><button name='webpasswd_reset' class='button button-primary button-rounded button-tiny' style='font-size: 12px;padding: 0px 10px;margin: 0 12px;'>");
                        subBuff.push(g_language=="en"?"RESET PASSWORD":"密碼重置");
                        subBuff.push("</button></div>");
                        _content = g_language=="en"?"If you have forgotten your password to the LubeVPN Community Forum, click RESET PASSWORD to get a new one. <br>":"如果忘記了討論區密碼，請點擊密碼重置按鈕進行重置。<br>";
                        chatMsg = {
                            "uid": 0,
                            "tid": gUserID,
                            "content": _content+subBuff.join(''),
                            "image": "",
                            "type": "text",
                            "timestamp": _now
                        };
                        _s.chatMsgs.push(chatMsg);
                        _s.updateChatMessage(chatMsg,true);

                        _s.m_CS.refresh();
                        _s.scorllToChatMessageEnd(true);

                        _s.resetMessageContentEvent();
                        _s.m_talkBar.show();
                        $("#screen_main").resize();
                    }
                }
            });
        };

        _s.show = function (closeFunction) {
            var offsetWidth = g_offsetWidth;
            var clientHeight = g_ClientHeight;
            _s.m_CloseFunction = closeFunction;
            
            var _sfm = $("#screen_main");
            var _divhtml = "<div style='overflow:hidden;float:left;-moz-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;'>\
                                <div name='chat_div'>\
                                    <div class='scroller-hidden'>\
                                        <div name='chat_loading' style='text-align: center;color: #999;margin-top:10px;font-size: 18px;'><i name='chat_loading_faicon' class='fa fa-spinner fa-pulse'></i><p name='chat_loading_tip' style='font-size: 15px;'>正在獲取過往記錄</p></div>\
                                        <div name='chat_bottom_div' style='text-align: center;color: #666;margin: 20px 20px;font-size: 18px;'></div>\
                                    </div>\
                                </div>\
                                <div name='talk_bar' style='min-height:50px;z-index:3;background-color:#fff;border-top: 1px solid #5d5;border-bottom: 1px solid #bbb;display:none;'>\
                                    <div name='talk_content_div' style='float:left;'>\
                                        <div name='chat_input_content' contenteditable='true' spellcheck='false' autocapitalize='off' autocorrect='off' style='white-space: normal;word-break: break-all;padding: 2px 6px;min-height: 32px;max-height: 90px;overflow-y: auto;outline: 0;font-size: 16px;border-bottom: 1px solid #5471EF;margin-left:5px;margin-top:4px;-webkit-user-modify:read-write-plaintext-only;-webkit-user-select:text;'></div>\
                                    </div>\
                                    <div style='float:right;'>\
                                        <div name='sendmsg_btn' style='background-color: #d8e2e9;width:36px;line-height:32px;max-height: 32px;overflow: hidden;margin: 5px 5px;text-align: center;color: #666;font-size:20px;border-radius:4px;box-shadow: 1px 1px 2px;-moz-box-shadow: 1px 1px 2px;-webkit-box-shadow: 1px 1px 2px;'><i class='fa fa-send-o fa-flip-horizontal'></i></div>\
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

            _s.m_CD = _s.m_MD.find("[name='chat_div']");
            _s.m_CC = $(_s.m_CD.children('div')[0]);
            _s.resetContentSize(offsetWidth, clientHeight);

            _s.m_talkBar = _s.m_MD.find("[name='talk_bar']");
            _s.m_sendMsgBtn = _s.m_talkBar.find("[name='sendmsg_btn']");
            _s.m_talkBar.css({
                'width': offsetWidth,
                "top": clientHeight - 50,
                "position":(g_biOS||g_isMobile==false)?"absolute":"fixed"
            });
            
            var _tkcdiv = _s.m_talkBar.find("[name='talk_content_div']"),
                _inputDivW = 51;
            _tkcdiv.css("width", offsetWidth - _inputDivW);

            _s.m_chatInputDiv = _s.m_MD.find("[name='chat_input_content']");

            _s.setEvent();
            _sfm.resize();

            _sfm.transition({
                "left": _s.m_extData.moveToLeft+"%"
                }, _s.m_extData.animatspeed, function () {
                    window.parent.postMessage(
                        {
                            "cmd":"setoptionbtn",
                            "class":"fa fa-sign-out",
                            "show":true
                        },
                        "*"
                    );
                    _s.chatMsgs = [];
                    if(gSocketStata == 1){
                        _s.initChatDiv();
                    }else{
                        g_MainScreen.m_pMainScreen.m_onConnectWithSrvFun = _s.initChatDiv;
                        ConnectWithServer();
                    }
                    _sfm.resize();
            });
        };
        return _s;
    }
};
