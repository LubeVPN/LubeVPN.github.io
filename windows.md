---
layout: page
title: PC版本安裝辦法
subtitle: Windows PC Version Installation
bigimg: /img/inst.jpg
googlefonts: ["Roboto Condensed"]
---

## 1
[點擊這裡下載](citium_app.zip)西蒂姆(Citum)Windows PC端在你的電腦硬盤中。
<br>
[CLICK HERE TO DOWNLOAD](citium_app.zip) Citium installation zip file into your Windows PC.

## 2
解壓 zip 文件到你電腦中任何一個地方，例如 "Program Files"、"C:" 或你電腦的桌面。
<br>
Unzip the Windows Citium installation zip file into any directory (e.g., "Program Files", "C:" or your own Desktop).

## 3
雙擊文件夾內 exe 文件，啟動西蒂姆(Citum)客戶端。點擊程序導航條最右手邊的「設定」。撥亮「網路優化加速器」的切換鍵。
<br>
Double-click the exe file in the program directory. Click on the rightmost button on the navigation to "General Settings". Switch on the LubeVPN Service.

{: .box-warning}
{: style="color: grey; font-size: 100%;"}
**網路加速證書：** 如果你還未激活你的順道VPN「試用加速證書」（TAC），請盡快在西蒂姆(Citum)即時聊天中向推薦人發出申請試用的代碼（在「設置」的順道VPN 版面中獲取）。您的推薦人會幫提供會接受您的申請並提供授權。
<br>
**CERTIFICATE:** If you have not activated your LubeVPN Trial Acceleration Cert (TAC), please send the TAC request code to your referrer in Citium Instant Messenger. Your referrer will guide you through the activation process.

## 4
推薦使用 Google Chrome 瀏覽器和它的插件 [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)
<br>
Recommend using Google Chrome and its plugin [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif).

## 5
進入 Proxy SwithcyOmega 的操作界面，開啟 Socks5 來讓 Chrome 和 順道VPN 之間的自動切換，請完成以下的操作：
<br>
Enter Proxy SwitchyOmega to finish the basic setup for using Socks5 auto-switching mechanism:

> "SwitchyOmega" > "Options" > "SETTINGS" > "Import/Export" > "Settings"

## 6
在 "Restore from online" 欄目中填入:<br>
Fill-in the "Restore from online" field with the following text:
```
https://raw.githubusercontent.com/wiki/FelisCatus/SwitchyOmega/GFWList.bak
```
Then, press the "Restore" button on the right.
然後按右手邊的 "Restore" 按鈕。

## 7
進入：<br>
Go to:

> "PROFILES" > "自動切換" > "Rule List Config"

然後選擇 "AutoProxy"（而非"Switchy"）
<br>
Choose "AutoProxy" (not "Switchy")

## 8
在 "Rule List URL" 欄目中填入：
<br>
Fill in the "Rule List URL" field with the following text:
```
https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
```
點擊 "Download Profile Now" 按鈕<br>
Click "Download Profile Now" button.

## 9
完成設置！可以開始通過順道VPN暢快地上網！<br>
All done! You can start surfing the web with LubeVPN!
