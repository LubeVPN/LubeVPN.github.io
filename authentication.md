---
layout: page
title: 可推諉身份驗證性
subtitle: Deniable Authentication ✓
bigimg: /img/auth.jpg
googlefonts: ["Roboto Condensed"]
---

西蒂姆（Citium）採用了「可推諉驗證性」的機制。當兩個用戶（例如Alice和Bob）決定通過西蒂姆（Citium）通訊，他們必須首先成為西蒂姆（Citium）中彼此認證的用戶（“聯絡人”），具體辦法是通過 [頻外秘鑰驗證](https://ocftw.github.io/ssd.eff.org/zh_TW/module/key-verification.html)（OOBA），防範了一切日後可能在西蒂姆（Citium）體系內發生的[中間人攻擊](https://zh.wikipedia.org/zh-tw/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)。添加聯絡人這個認證行為也是唯一次時機他們倆（Alice和Bob）可以彼此確認身份。因為在此之後，即使在他們倆通信過程中，任何人都無法無可辯駁地證明他們兩個的聯絡人關係。

Citium uses [deniable authentication](https://en.wikipedia.org/wiki/Deniable_authentication) mechanism. When two users (e.g. Alice and Bob) decide to communicate through Citium with each other, they have to become each other's authenticated users ("Contacts") in Citium from the outset — i.e. performing an [out-of-band key authentication/verification](https://ssd.eff.org/en/module/key-verification), which eliminates all future possibility of [man-in-the-middle attack (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) on Citium. This is the only moment in the authentication lifecycle that the two users know for sure that the communicating counterparty (Alice or Bob) is whom they believe to be. But after that, as ironic as it may sound, no one, not even the two users themselves, can irrefutably prove their authenticated Contact relationship even during the course of their communication.

儘管有上述特殊性，傳統而論的用戶身份驗證（即，毫無疑問地能明確辨識用戶）的功能是依然被保留了的，因為西蒂姆（Citium）的世界中的身份驗證不再僅由用戶帳戶作准，而是由每條密碼簽名的消息限制，因為任何兩個聯絡人（例如Alice） 和Bob彼此溝通，從一開始就已經完成[頻外密鑰驗證](https://ocftw.github.io/ssd.eff.org/zh_TW/module/key-verification.html)（OOBA）。 驗證後，任何第三方都無法欺騙攻擊在Alice和Bob之間發送的郵件。 儘管Citium的「無需准入許可性」確實允許欺騙攻擊，但是可能出乎很多人意料之外，Bob自始至終可以正確識別從一開始就已通過身份驗證的Alice發送的加密限制消息，儘管許多其他用戶冒充Alice，並且Alice始終可以確定只有一個真實的Bob可以正確解密她發送的消息，儘管許多其他用戶都可以冒充Bob去試圖解密消息。

Despite what has just been said, the traditional sense of user authentication (i.e. irrefutably identifying a user) is still preserved because authentication in the Citium universe is no longer bounded by user account alone but by every cryptographically signed message. Any two communicating parties (i.e. the Contacts: Alice & Bob) who communicate with each other must perform [out-of-band key authentication/verification](https://ssd.eff.org/en/module/key-verification) (OOBA) from the outset. Once verified, messages sent between Alice and Bob cannot be spoofed by any third party. Although the permissionless nature of Citium dictates that no conventional measure (e.g., [anti-spam techniques](https://en.wikipedia.org/wiki/Anti-spam_techniques)) is in place to prevent [spoofing attack](https://en.wikipedia.org/wiki/Spoofing_attack) and [phishing](https://en.wikipedia.org/wiki/Phishing), perhaps counterintuitively to many, Citium is a pristine environment from the perspectives of Alice and Bob. Bob always can correctly identify the cryptographically bounded message sent from Alice whom he has authenticated from the outset in spite of many other users pretending to be Alice, and Alice can always be certain that only the one true Bob can correctly decrypt the messages she sends in spite of many other users pretending to be Bob trying to decrypt the message.

## 頻外秘鑰驗證<br>Out-of-Band Key Verification

如果 Alice 和 Bob 要成為聯絡人之前必須有一方首先發起頻外秘鑰驗證（OOBA）。假設 Alice 是「聯絡發起人」， Alice 向 Bob 發起 OOBA，她必須向 Bob 發送一個明文的 **「好友邀請代碼」（FIC）**，如下所示：

In order for Alice and Bob to become Contacts, one has to initiate an out-of-band key authentication/verification (OOBA). Suppose Alice is the Contacts Initiator. Alice initiates an OOBA with Bob by sending Bob a **Friend Invitation Code (FIC)**, which is a plaintext that looks like this:

```json
{"MSG":"Hi, I'm Alice. This is a Friend Invitation Code (FIC). it is valid for 24 hours. ","APPNAME":"SEMAIL","NICKNAME":"e99bbbe885a6e6b8ace8a9a6","TID":"322","HOST":"68747470733a2f2f7777772e70616e676f3132332e6f7267","MAJOR":"03c86ebf41b02f379823173aafd7bd873efb9b59e06375dac7793342db8b3d9ee7","MINOR":"02307396c7f6ac576544991285b016283fbe2e08f5013f41cf984734ed2bfc814e","SIGNATURE":"304402204ddf9ae16a14dfc70c94c83eb6735419e4e8eb2019853c54336c9af84d425c480220394b6181eccb2df743f78f848f6f2ba9f153e6d5b2a3322e646f4f320666c85531"}
```

**MSG** 是友好的可讀文本，方便任何看到此消息的人了解其內容所屬意義。 **APPNAME** 默認為 "SEMAIL"，而它是一個標示與其他同樣使用了「安全數據傳輸協議」（SDTP）的應用兼容性。 **NICKNAME** 是 Alice 希望在該 FIC 中彰顯的個人暱稱的密文。**TID** 是 Alice 的服務節點用以辨識 Alice 的代號。 **HOST** 是Alice服務節點的主機或IP地址的密文。 **MAJOR** 和 **MINOR ** 是兩個公鑰，**MAJOR** 是給服務節點用於認證 Alice 的；而 **MINOR** 則試過用於授權他人留信息給 Alice 的。 **SIGNATURE** 是上述信息的數字簽名以確保它們的其完整性。

**MSG** is a friendly readable text for anyone who sees this message to know what it is about. **APPNAME** is "SEMAIL" by default. It signals compatibility with other services that use Safe Data Transfer Protocol (SDTP). **NICKNAME** is the ciphertext of the nickname that Alice wants to be known by whoever adds her through this FIC. **TID** is Alice's corresponding identifier issued by her service node. **HOST** is the cyphertext of the host or IP address of Alice's service node. **MAJOR** and **MINOR** are the two public keys. **MAJOR** the service node to authenticate Alice, and **MINOR** is used to authorize others to post her messages. **SIGNATURE** is the digital signature for all the above information to ensure their integrity.

### 可推諉性<br>Deniability

從西蒂姆（Citium）的聯絡人機制來說，Alice 可以只把 FIC 發給了 Bob，但她也可以發給其他人的，例如 Charlie 和 Chuck。只有 Alice 她自己才能完全確鑿地知道是否 Bob 一個人接收過 FIC 或其他都有接收過。換言之， Alice 甚至可能曾經把該 FIC 公開發佈過，相當於任何人都可以獲取該 FIC 然後留言給 Alice。

In the Citium Contacts mechanism, Alice can send the FIC not only to Bob but also to other people, such as Charlie and Chuck. Only Alice herself knows for sure if it is Bob being the only one who has received the FIC or not. In other words, Alice could have publicly displayed the FIC, so that anyone could have it and post messages to Alice.

| 聯絡發起人<br>Contacts Initiator | 應邀聯絡人<br>Contacts Invitee |
| Alice | Bob |
| Alice | Charlie |
| Alice | Chuck |
| Alice | 隨機陌生人D<br>a random person D |
| Alice | 隨機陌生人E<br>a random person E |
| Alice | 隨機陌生人F<br>a random person F |
| Alice | ... |
| Alice | ... |
| Alice | ... |

由此可見，無人能證明她的聯絡人中哪位是 Alice 自始至終都認識的，而不是一些隨機陌生人試圖留言給她。如此一來，Alice 便可以[合理地推諉](https://zh.wikipedia.org/wiki/%E5%90%88%E7%90%86%E6%8E%A8%E8%AF%BF)她與任何信息的關係。

As you can see, no one could prove irrefutably that which of her Contacts was someone that she has known personally instead of some random person trying to post messages to her. Therefore, Alice can [plausibly deny](https://en.wikipedia.org/wiki/Plausible_deniability) her relationship with any message.

{: .box-success}
為求用戶體驗和使用便捷性，默認的「好友邀請代碼」（FIC）身份驗證邏輯做了檢測機制，只要有一個好友接受身份驗證了之後，該 FIC 就作廢了。所以在西蒂姆（Citium）中，大家都可能有看到過有一條「等待對方授權」的系統信息。該系統信息代表兩次試圖身份驗證均未成功。如果 Bob 見到了這種情況，有兩種可能：1、Charlie、Chuck或一個隨機陌生人使用了；2、網絡出問題了。因為西蒂姆（Citium）的客戶端代碼開源的，任何人都可以改编 Citium IM <i class='fa fa-envelope-square' style='color:blue'></i> 這個一對一的 FIC 身份認證限制。可推諉性依然成立。
<br><br>
To enhance user experience and simplicity, the default **Friend Invitation Code (FIC)** authentication has a detection mechanism. As long as a friend accepts the out-of-band verification, the FIC is invalidated. You may see a system message popped up in Citium Instant Messenger saying "Awaiting authorization from the communicating party". This message indicates that two attempts to authenticate were unsuccessful. If Bob sees this, there are two possibilities: 1. Charlie, Chuck or some random person has used the FIC; 2. There is a problem with the network. However, since CIM <i class='fa fa-envelope-square' style='color:blue'></i> is open-source, anyone can modify this one-to-one authentication restriction of FIC. Deniability still holds.

### 下一章 / NEXT CHAPTER
[**分身馬甲帳號**](../sockpuppetry)<br>
[**Sockpuppetry**](../sockpuppetry)
{: .myButton}
