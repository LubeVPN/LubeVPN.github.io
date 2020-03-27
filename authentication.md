---
layout: page
title: 身份驗證性悖論
subtitle: Authentication ✓
# bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

西蒂姆（Citium）採用了「可推諉驗證性」的機制。當兩個用戶（例如Alice和Bob）決定通過西蒂姆（Citium）通訊，他們必須首先成為西蒂姆（Citium）中彼此認證的用戶（“聯絡人”），具體辦法是通過 [頻外金鑰驗證](https://ocftw.github.io/ssd.eff.org/zh_TW/module/key-verification.html)，防範了一切日後可能在西蒂姆（Citium）體系內發生的[中間人攻擊](https://zh.wikipedia.org/zh-tw/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)。添加聯絡人這個認證行為也是唯一次時機他們倆（Alice和Bob）可以彼此確認身份。因為在此之後，即使在他們倆通信過程中，任何人都無法無可辯駁地證明他們兩個的聯絡人關係。

Citium uses [deniable authentication](https://en.wikipedia.org/wiki/Deniable_authentication) mechanism. When two users (e.g. Alice and Bob) decide to communicate through Citium with each other, they have to become each other's authenticated users ("Contacts") in Citium from the outset — i.e. performing an [out-of-band key verification](https://ssd.eff.org/en/module/key-verification), which eliminates all future possibility of [man-in-the-middle attack (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) on Citium. This is the only moment in the authentication lifecycle that the two users know for sure that the communicating counterparty (Alice or Bob) is whom they believe to be. But after that, as ironic as it may sound, no one, not even the two users themselves, can irrefutably prove their authenticated Contact relationship even during the course of their communication.

儘管有上述特殊性，傳統而論的用戶身份驗證（即，毫無疑問地能明確辨識用戶）的功能是依然被保留了的，因為西蒂姆（Citium）的世界中的身份驗證不再僅由用戶帳戶作准，而是由每條密碼簽名的消息限制，因為任何兩個聯繫人（例如Alice） 和Bob彼此溝通，從一開始就已經完成[帶外密鑰驗證](https://ocftw.github.io/ssd.eff.org/zh_TW/module/key-verification.html)。 驗證後，任何第三方都無法欺騙在Alice和Bob之間發送的郵件。 儘管Citium的未經許可的性質確實允許惡意欺騙，但是Bob始終可以正確識別從一開始就已通過身份驗證的Alice發送的加密限制消息，儘管許多其他用戶冒充Alice，並且Alice始終可以確定只有 一個真實的Bob可以正確解密她發送的消息，儘管許多其他用戶冒充Bob試圖解密消息。

Despite what has just been said, the traditional sense of user authentication (i.e. irrefutably identifying a user) is still preserved because authentication in the Citium universe is no longer bounded by user account alone but by every cryptographically signed message. Any two communicating parties (i.e. the Contacts: Alice & Bob) who communicate with each other must perform [out-of-band key verification](https://ssd.eff.org/en/module/key-verification) from the outset. Once verified, messages sent between Alice and Bob cannot be spoofed by any third party. Although the permissionless nature of Citium dictates that no conventional measure (e.g., [anti-spam techniques](https://en.wikipedia.org/wiki/Anti-spam_techniques)) is in place to prevent [spoofing attack](https://en.wikipedia.org/wiki/Spoofing_attack) and [phishing](https://en.wikipedia.org/wiki/Phishing), Citium is a counterintuitively pristine communication environment from the perspectives of Alice and Bob. Bob can always correctly identify the cryptographically bounded message sent from Alice whom he has authenticated from the outset in spite of many other users pretending to be Alice, and Alice can always be certain that only the one true Bob can correctly decrypt the messages she sends in spite of many other users pretending to be Bob trying to decrypt the message.

{: .myButton}
{: style="text-align: center;"}
**下一章** | **NEXT CHAPTER**<br>[**分身馬甲帳號**<br>**Sockpuppetry**](../sockpuppetry)
