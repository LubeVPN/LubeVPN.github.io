/* jshint multistr: true */

function g_checkIsImageFile(file){
    if(g_isMobile == false) {
        var ImgType = ["jpeg", "jpg", "bmp", "png"];
        if (!RegExp("\.(" + ImgType.join("|") + ")$", "i").test(file.name.toLowerCase())) {
            alert("选择文件错误,图片类型须是(jpeg,jpg,bmp,png)中的一种");
            return false;
        }
    }
    return true;
}
 
function g_base64ToUint8(base64) {
    //var binary = g_biOS==true?Base64.decode(base64):atob(base64);
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return view;
}

function g_base64ToArrayBuffer(base64) {
    return g_base64ToUint8(base64).buffer;
}

function g_arrayBufferToBase64(buffer){
    var binary = '';
    var bytes = new Uint8Array( buffer);
    for (var i = 0; i < bytes.byteLength; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa( binary );
}

function g_hex2ab (hex){
    try {
        var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16);
        }));
    
        var buffer = typedArray.buffer;
        return buffer;
    } catch(e) {
        return null;
    }
}
  
function g_ab2hex (buffer) {
    var hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2);
      }
    );
    return hexArr.join('');
}

function g_timeAgo(timestamp){
    var _now = new Date(Date.now()),_time = new Date(timestamp),_strTime='';
    var mon = _time.getMonth()+1;
    if(mon<10){
        mon = '0'+mon;
    }
    var day = _time.getDate();
    if(day<10){
        day = '0'+day;
    }
    var h = _time.getHours();
    if(h<10){
        h = '0'+h;
    }
    var min = _time.getMinutes();
    if(min<10){
        min = '0'+min;
    }

    if(_now.getFullYear() ==  _time.getFullYear()){
        if(_now.getMonth() ==  _time.getMonth()){
            if(_now.getDate() ==  _time.getDate()){
                return h+':'+min;
            }else{
                if(_now.getDate() ==  _time.getDate()+1){
                    _strTime = 'Yesterday '+h+':'+min;
                }else{
                    _strTime = mon+'/'+day+' '+h+':'+min;
                }
            }
        }else{
            _strTime = mon+'/'+day+' '+h+':'+min;
        }
    }else{
        _strTime = _time.getFullYear()+'/'+mon+'/'+day+' '+h+':'+min;
    }
    return _strTime;
}

function rotateImg(img, direction,canvas, width, height) {
    //最小与最大旋转方向，图片旋转4次后回到原方向
    if (img == null)return;

    //var step = img.getAttribute('step');
    var step = 2;
    if (direction == 'right') {
        step++;
        //旋转到原位置，即超过最大值
        //step > max_step && (step = min_step);//???kingmark
    } 
    else if(direction == 'right2'){
        step = 2;
    }else {
        step--;
        //step < min_step && (step = max_step);//???kingmark
    }
    //img.setAttribute('step', step);
    /*var canvas = document.getElementById('pic_' + pid);
     if (canvas == null) {
     img.style.display = 'none';
     canvas = document.createElement('canvas');
     canvas.setAttribute('id', 'pic_' + pid);
     img.parentNode.appendChild(canvas);
     }  */
    //旋转角度以弧度值为参数
    var degree = step * 90 * Math.PI / 180;
    var ctx = canvas.getContext('2d');
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height, width, height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height, width, height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0, width, height);
            break;
    }
}

function g_readImageFromData(imgData,Orientation,callback){
    var image = new Image();
    image.src = imgData;
    image.onload = function() {
        var expectWidth = this.naturalWidth;
        var expectHeight = this.naturalHeight;

        if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
            expectWidth = 800;
            expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
        } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
            expectHeight = 1200;
            expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
        }
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = expectWidth;
        canvas.height = expectHeight;
        
        var base64 = null;
        
        if (g_isMobile && g_biOS) {
            if(Orientation != "" && Orientation != 1){
                switch(Orientation){
                    case 6://需要顺时针（向左）90度旋转
                        rotateImg(this,'left',canvas, expectWidth, expectHeight);
                        break;
                    case 8://需要逆时针（向右）90度旋转
                        rotateImg(this,'right',canvas, expectWidth, expectHeight);
                        break;
                    case 3://需要180度旋转
                        rotateImg(this, 'right2', canvas, expectWidth, expectHeight);
                        //rotateImg(this,'right',canvas);//转两次
                        //rotateImg(this,'right',canvas);
                        break;
                    default:
                        ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                        break;
                }
            }else{
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
            }
            base64 = canvas.toDataURL("image/jpeg", 1.0);
        }else{
            if(g_isMobile && g_bSamsung){
                rotateImg(this,'left',canvas, expectWidth, expectHeight);
                base64 = canvas.toDataURL("image/jpeg", 1.0);
            }else{
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                var encoder = new JPEGEncoder();
                base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);
            }
        }
        
        callback(base64,canvas.width,canvas.height);
    };
}

function g_photoFix(file, callback){
    EXIF.getData(file, function() {
        EXIF.getAllTags(this);
        Orientation = EXIF.getTag(this, 'Orientation');

        var oReader = new FileReader();
        oReader.onload = function(e) {
            //var blob = URL.createObjectURL(file);
            //_compress(blob, file, basePath);
            g_readImageFromData(e.target.result, Orientation, callback);
    
        };
        oReader.readAsDataURL(file);
    });
}

function g_escape2Html(str) {
    var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}

function g_Html2String(html){
    return html.replace(/[<>&"]/g, function (c) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
    }).trim();
}


function g_isArray(object) {
    return Object.prototype.toString.call(object)=='[object Array]';
    //return object && typeof object === 'object' && Array == object.constructor;
}

function g_strByteLen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
    //单字节加1 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}

function g_RandString(length){
    var strRandKey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.~!@#$%^&*()_;<>?";
    var maxPos = strRandKey.length;
    var strRet = '';
    for (var i = 0; i < length; i++) {
        strRet += strRandKey.charAt(Math.floor(Math.random() * maxPos));
    }
    return strRet;
}

g_convertToJSON = function(str) {
    if (typeof str == 'string') {
        try {
            return JSON.parse(str);
        } catch(e) {
            return null;
        }
    }
    return null;
};
