---
layout: page
title: 機密和完整性
subtitle: Confidentiality ✓<br>Integrity ✓
# bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

傳統即時通訊系統（IMS）是基於中心化身份驗證和授權機制去確保信息安全的，可惜任何中央化的系統都無可避免地需要承擔[數據洩露](https://en.wikipedia.org/wiki/Data_breach)的風險。（[詳述](../fallible_providers)）

對比起來，西蒂姆（Citium）是由眾多節點網絡鋪墊出來的去中心化系統，在它的基礎上面搭建的IMS就不再需要承擔這種風險。舉例，假設兩個用戶試圖在西蒂姆（Citium）通訊。發件人是 Alice，預期收件人是 Bob。第三者是無法正確地解密得到 Alice 給 Bob 的訊息的，因為西蒂姆（Citium）用了以下的安全機制：

1. [端到端加密（E2EE）](https://zh.wikipedia.org/zh-tw/%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%8A%A0%E5%AF%86)
2. [非對稱式密碼學](https://zh.wikipedia.org/wiki/%E5%85%AC%E5%BC%80%E5%AF%86%E9%92%A5%E5%8A%A0%E5%AF%86)。
3. __無差別網樹多點傳送（IMTM）消息摘要傳遞網路（MDDN__

Conventional Instant Messenger System (IMS) is built on centralized authentication and authorization regime. Unfortunately, any centralized system is inherently susceptible to [data breach](https://en.wikipedia.org/wiki/Data_breach). ([More info here.](../fallible_providers))

In contract, IMS built on top of Citium, serviced by a network of decentralized nodes, is not at risk. For example, suppose that two users are trying to communicate with each other on Citium. Sender is Alice and the intended recipient is Bob. No third party can correctly decipher a message from Alice to Bob because Citium utilizes the following security mechanisms:

1. [end-to-end encryption (E2EE)](https://en.wikipedia.org/wiki/End-to-end_encryption)
2. [asymmetric (public key) cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)
3. **indiscriminate mesh-tree multicast (IMTM) message digests delivery network (MDDN)**

### IMTM-MDDN

IMTM-HDN 意味著 __消息是被加密算法劃分成多個密鑰__，這些密鑰又通過網狀樹多點傳送、不加選擇地分佈到盡可能多的節點上。存放加密的消息摘要密鑰的西蒂姆（Citium）節點充當收件人（Bob）的「消息摘要傳遞網絡」（HDN）。為了使預期收件人（Bob）解密來自發件人（Alice）的消息，Bob必須獲取指定的私鑰來解密消息。 Bob必須通過 __無差別網樹多點傳送__（IMTM）來盡可能多的節點作請求，直到她收集形成指定的專用密鑰所需的所有的消息摘要密鑰為止。__只有接訊者（Bob）才能將所有消息摘要密鑰重新統一併起來才能生成有效的私鑰，成功解鎖Alice留給她的加密的信息__。
<br>
**Indiscriminate mesh-tree multicast** (IMTM) **message digests delivery network** (MDDN) means that __the message is cryptographically split into multiple message digests__, which in turn are distributed indiscriminately to as many nodes as possible by mesh-tree multicasting. The Citium nodes that hold the message digests act as **message digests delivery network** (MDDN) for the intended recipient (Bob). In order for the intended recipient (Bob) to decrypt the message from the sender (Alice), Bob has to obtain the designated private key to decrypt the message. Bob has to make request to as many nodes as he can through **indiscriminate mesh-tree multicast** (IMTM) until he collects all the message digests necessary to form the designated private key. _Only the intended recipient (Bob) can reunite and decrypt all message digests back to the original plaintext_.

{: .box-warning}
{: style="color: grey; font-size: 80%;"}
__加密分析學上無法破解__：除非某駭客能夠劫持擁有相關消息摘要密鑰的每個節點，然後使用只是理論上存在的量子計算機解密所有消息摘要密鑰，否則消息摘要密鑰在傳輸期間不會對消息的機密性造成任何威脅。
<br>
__Cryptanalytically Unbreakable__: Unless some hackers can hijack every node that hold the pertaining message digest keys and decipher them all with a quantum computer that only exist in theory, nothing during transit of the pertaining message digest keys can threat the confidentiality of the message.

## 完整性 | Integrity ✓

在西蒂姆（Citium）上傳播的信息或其消息摘要值都被 [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 算法加密了的。破解該加密不僅在數學上不切實際，而且在很多開源項目（例如[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)）中已經使用了將近二十年。成功的駭客攻擊（無需私鑰對它進行解密）將使任何可能的攻擊者都獲得巨大的利潤。這種現象似乎從未發生過，這種是非常好的經驗證據說明它的安全性。

A message or its message digest keys cannot be changed during transit on Citium because they are __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only [computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successfully hack (deciphering it without private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is a very good empirical evidence for its security.

### 下一章 / NEXT CHAPTER
[**可用性**](../availability)<br>
[**Availability**](../availability)
{: .myButton}
