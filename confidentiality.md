---
layout: page
title: 機密和完整性
subtitle: Confidentiality ✓<br>Integrity ✓
# bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

傳統IMSP是基於中心化身份驗證和授權機制去確保信息安全的，天然使然無可避免地需要擔受[數據洩露](https://en.wikipedia.org/wiki/Data_breach)的風險。這是西蒂姆（Citium）的機制完全解決了的問題。（[請參閱專用頁面](../ fallible_providers)）簡單來說，西蒂姆（Citium）採用[端到端加密（E2EE）](https://zh.wikipedia.org/zh-tw/%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%8A%A0%E5%AF%86)

未經授權的第三方均無法讀取託管在Alice的IMSP服務器上的適配給他的聯絡人的訊息（例如，發件人Alice留給預期收件人Bob的訊息，除了Bob之外無人能讀），因為Citium使用了 __無差別網樹多點傳送__（IMTM）__哈希傳遞網路__（HDN）機制。
<br>
Traditional IMSP based on centralized authentication and authorization regime is inherently and inevitably susceptible to [data breach](https://en.wikipedia.org/wiki/Data_breach). This is a paint point that Citium's regime are made to resolve. ([Refer to the dedicated page that talks about it.](../fallible_providers)) Simply put, Citium uses [end-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption) [asymmetric (public key) cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). No third party can correctly decipher a message (from sender Alice to the intended recipient Bob), which is hosted on Alice's IMSP service node, because Citium use a **indiscriminate mesh-tree multicast** (IMTM) **message digests delivery network** (MDDN) mechanism.

### IMTM HDN

IMTM-HDN 意味著 __消息是被加密算法劃分成多個散列密鑰__，這些散列密鑰又通過網狀樹多點傳送、不加選擇地分佈到盡可能多的節點上。存放加密的哈希密鑰的西蒂姆（Citium）節點充當收件人（Bob）的「哈希傳遞網絡」（HDN）。為了使預期收件人（Bob）解密來自發件人（Alice）的消息，Bob必須獲取指定的私鑰來解密消息。 Bob必須通過 __無差別網樹多點傳送__（IMTM）來盡可能多的節點作請求，直到她收集形成指定的專用密鑰所需的所有散列的哈希密鑰為止。__只有接訊者（Bob）才能將所有哈希密鑰重新統一併起來才能生成有效的私鑰，成功解鎖Alice留給她的加密的信息__。
<br>
**Indiscriminate mesh-tree multicast** (IMTM) **message digests delivery network** (MDDN) means that __the message is cryptographically split into multiple message digests__, which in turn are distributed indiscriminately to as many nodes as possible by mesh-tree multicasting. The Citium nodes that hold the message digests act as **message digests delivery network** (MDDN) for the intended recipient (Bob). In order for the intended recipient (Bob) to decrypt the message from the sender (Alice), Bob has to obtain the designated private key to decrypt the message. Bob has to make request to as many nodes as he can through **indiscriminate mesh-tree multicast** (IMTM) until he collects all the message digests necessary to form the designated private key. _Only the intended recipient (Bob) can reunite and decrypt all message digests back to the original plaintext_.

{: .box-warning}
{: style="color: grey; font-size: 80%;"}
__加密分析學上無法破解__：除非某駭客能夠劫持擁有相關哈希密鑰的每個節點，然後使用只是理論上存在的量子計算機解密所有哈希密鑰，否則哈希密鑰在傳輸期間不會對消息的機密性造成任何威脅。
<br>
__Cryptanalytically Unbreakable__: Unless some hackers can hijack every node that hold the pertaining hash keys and decipher them all with a quantum computer that only exist in theory, nothing during transit of the pertaining hash keys can threat the confidentiality of the message.

## 完整性 | Integrity ✓

在西蒂姆（Citium）上傳播的信息或其離散哈希值都被 [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 算法加密了的。破解該加密不僅在數學上不切實際，而且在很多開源項目（例如[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)）中已經使用了將近二十年。成功的駭客攻擊（無需私鑰對它進行解密）將使任何可能的攻擊者都獲得巨大的利潤。這種現象似乎從未發生過，這種是非常好的經驗證據說明它的安全性。
<br>
A message or its hash keys cannot be changed during transit on Citium because they are __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only [computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successfully hack (deciphering it without private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is a very good empirical evidence for its security.

### 下一章 / NEXT CHAPTER
[**可用性**](../availability)<br>
[**Availability**](../availability)
{: .myButton}
