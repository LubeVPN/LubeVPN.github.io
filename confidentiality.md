---
layout: page
title: 機密性和完整性
subtitle: Confidentiality ✓<br>Integrity ✓
bigimg: /img/conf.jpg
googlefonts: ["Roboto Condensed"]
---

大多數傳統即時通訊系統（IMS）是基於中心化身份驗證和授權機制去確保信息安全的，可惜任何中央化的系統都無可避免地需要承擔[數據洩露](https://en.wikipedia.org/wiki/Data_breach)的風險。（[詳述](../fallible_providers)）對比起來，西蒂姆（Citium）是由眾多節點網絡鋪墊出來的去中心化系統，在它的基礎上面搭建的IMS就不再需要承擔這種風險。舉例，假設兩個用戶試圖在西蒂姆（Citium）通訊。發件人是 Alice，預期收件人是 Bob。第三者是無法確認得知自己是否已經正確地解密得到 Alice 給 Bob 的訊息的，因為西蒂姆（Citium）用了以下的安全機制：1、[**PGP加密**](https://zh.wikipedia.org/zh-tw/PGP)；2、**秘鑰/信息疑義**；3、__無差別網樹多點傳送（IMTM）__**門限加密系統**。PGP太流行了，不需要再解釋了。但是「密鑰/消息疑義」比較少人認識，而「IMTM門限加密系統」是西蒂姆（Citium）獨有的，所以我們會花更多的時間來解釋它們的信息安全優勢。

Most of the conventional instant messenger systems (IMS) are built on a centralized authentication and authorization regime. Unfortunately, any centralized system is inherently susceptible to [data breach](https://en.wikipedia.org/wiki/Data_breach). ([More info here.](../fallible_providers)) In contract, IMS built on top of Citium, paved by a network of decentralized nodes, is not at risk. For example, suppose that two users are trying to communicate with each other on Citium. Sender is Alice and the intended recipient is Bob. No third party can know for sure if he or she has been correctly deciphering a message from Alice to Bob because Citium utilizes the following security mechanisms: 1. [**Pretty Good Privacy (PGP) Encryption**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy); 2. **Key/Message Equivocation**; and 3. **indiscriminate mesh-tree multicast (IMTM) threshold cryptosystem**. PGP is too popular to need further explanation.  But key/message equivocation is less known and the IMTM threshold cryptosystem is unique to Citium so we are going to spend more time explaining their InfoSec advantages.

![Cipher](/img/citium-data-flow.svg "Citium Off-the-Record Messaging Instant Messenger System"){: .center-block :}

- 19^th^
- H~2~O

### 秘鑰/信息疑義<br>Key/Message Equivocation

In the Citium cryptosystem, an enemy hacker or a cryptanalyst might be able to intercept a ciphertext (C). There is a critical concept called key equivocation and message equivocation.

![Equivocation](/img/equivocation.svg "Key/Message Equivocation"){: .center-block :}

密码分析员成功破译文本的几率一般会随着文本长度的增加而增加。假设密码分析员同时拥有明文和密文，因此将更有能力快速找到密钥。密钥的外观等效性是指在已知明文攻击下的密钥的强度，而密钥等效性和消息等效性则是指在已知明文攻击下的密钥和明文攻击下的密钥强度。收到的密码文本越长，密码分析员发现密钥或明文的概率就越大。

The key appearance equivocation will clearly approach zero faster than the key equivocation, because in the case of the key appearance equivocation it is assumed that the cryptanalyst also has the plaintext as well as the ciphertext. This extra knowledge will allow the cryptanalyst to determine the key more quickly on average.

The key appearance equivocation is a measure for the strength of a cipher system under a known-plaintext attack for the key, while the key and message equivocation are a measure for the strength of a cipher system under a ciphertext only attack for the key and message respectively.

### IMTM門限加密系統<br>IMTM Threshold Cryptosystem

**IMTM門限加密系統** 意味著 __一個消息的信息摘要是被加密算法劃分成多個部件__，這些部件又通過網狀樹多點傳送、不加選擇地分佈到盡可能多的節點上，有效地抑止關聯鏈結分析的可能，和去除任何因為單點攻擊成功而導致的數據洩露。

**Indiscriminate mesh-tree multicast (IMTM) threshold cryptosystem** means that __a message digest is cryptographically split into multiple parts__, which in turn are distributed indiscriminately to as many nodes as possible by mesh-tree multicasting, effectively preempting link analysis[https://en.wikipedia.org/wiki/Link_analysis] and eliminating data breach due to failure at any single point.

任何人都可以用任何密鑰解密信息摘要的部件或其任何組合（達到 「密鑰疑義」的效果），但所產生的明文將是不同的信息（即「模糊但似是而非的明文」），除非所有部分都被正確的密鑰解密。為了使預期收件人（Bob）解密來自發件人（Alice）的消息，Bob必須獲取指定的私鑰來解密消息。 Bob必須通過 __無差別網樹多點傳送__（IMTM）來盡可能多的節點作請求，直到收集齊全消息摘要密鑰為止。__只有接訊者（Bob）才能將所有消息摘要密鑰重新統一併起來才能生成有效的私鑰，成功解鎖Alice留給她的加密的信息__。

Anyone can decrypt the parts or any combination of the parts of a message digest by any key (i.e. *key equivocation*) but the resulting plaintext will be a different message (i.e. *innocuous but plausible plaintext*) unless all parts are decrypted by the right keys. In order for the intended recipient (Bob) to correctly decrypt the message from the sender (Alice), Bob has to obtain all parts of the message digest and to decrypt it with the right key. Bob has to make request to as many nodes as he can through **indiscriminate mesh-tree multicast** (IMTM) until he collects all the parts. _Only the intended recipient (Bob) can correctly reunite and decrypt all parts of the message digest_.

{: .box-warning}
{: style="color: grey; font-size: 100%;"}
__加密分析學上無法破解__：除非某駭客能夠劫持擁有相關消息摘要密鑰的每個節點，然後使用只是理論上存在的量子計算機解密所有消息摘要密鑰，否則消息摘要密鑰在傳輸期間不會對消息的機密性造成任何威脅。
<br><br>
__Cryptanalytically Unbreakable__: Unless some hackers can hijack every node that holds the pertaining message digest keys and decipher them all with a quantum computer that only exists in theory, nothing during transit of the pertaining message digest keys can threaten the confidentiality of the message.

## 完整性 | Integrity ✓

在信息安全中，數據完整性是指在整個生命週期內保持並確保數據的準確性和完整性。信息安全完整性是指數據不能以未經授權或未被發現的方式進行修改，其定義則不要與數據庫中的參考完整性混淆。在西蒂姆（Citium）上傳播的信息或其消息摘要值都被 [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 算法加密了的。該加密不僅「計算不可解」[computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability)，而且在很多開源項目（例如[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)）中已經使用了將近二十年。成功的駭客攻擊（無需私鑰對它進行解密）將使任何可能的攻擊者都獲得巨大的利潤。這種現象似乎從未發生過，這是非常好的經驗證據說明它的安全性。

In information security, data integrity means maintaining and assuring the accuracy and completeness of data over its entire lifecycle. InfoSec integrity means that data cannot be modified in an unauthorized or undetected manner, and its definition is not to be confused with referential integrity in databases. A message or its message digest keys cannot be changed during transit on Citium because they are __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only [computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successful hack (deciphering it without a private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is a very good empirical evidence for its security.

### 下一章 / NEXT CHAPTER
[**可用性**](../availability)<br>
[**Availability**](../availability)
{: .myButton}
