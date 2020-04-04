---
layout: page
title: 為何用西蒂姆？
subtitle: Why use Citium?
bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

西蒂姆（Citium）是一個免費的、開源代碼的、完全去中心化的、[無需准入許可的區塊鏈系統](https://en.wikipedia.org/wiki/Blockchain#Permissionless)，並採用了密碼學上堅不可摧的信息安全机制，例如 __無差別網樹多點傳送__（IMTM）__門限加密系統__ 和 __分身馬甲帳號__。西蒂姆（Citium）當前的版本能兼容 __文字__、__音像__、__視像__ 和 __即時音訊__ 的數據。使用西蒂姆（Citium）建造的去中心化應用程序（dApp）能享有非凡的數據安全功能，例如 __可推诿性__，非常適合用於建造 **[OTS無記錄通訊](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)即時通訊系統**（OTS-IMS）。

Citium is a free, open-source, fully decentralized, [permissionless blockchain](https://en.wikipedia.org/wiki/Blockchain#Permissionless) that features cryptanalytically unbreakable InfoSec mechanisms (e.g. **indiscriminate mesh-tree multicast** (IMTM) [**threshold cryptosystem**](https://en.wikipedia.org/wiki/Threshold_cryptosystem) and **sockpuppetry**). Citium's current build is capable of serving **text**, **image**, **video** and **real-time voice** data. Decentralized Apps (dApps) built on Citium can enjoy extraordinary data security features, such as **deniability**, which is well-suited to build [**Off-the-Record Messaging (OTR)**](https://en.wikipedia.org/wiki/Off-the-Record_Messaging) **Instant Messenger System**.

### 服務器IP地址混淆<br>Server IP Obfuscation

服務器IP地址混淆（SIPO）是西蒂姆（Citium）的獨特功能，可以讓HTML5的內容訪問者既可以訪問到內容但無從得知其服務器的來源IP地址，不單能有效 **防止分散式阻斷服務攻擊（DDoS）**，更可以從IP地理情報層面杜絕情報收集，有效 **防止網絡服務器被拆卸和扣押**。

Server IP Obfuscation (SIPO) is a unique feature of Citium. It can hide a server's originating IP address from its visitors while letting them visit HTML5-based content on the server seamlessly. Not only can SIPO effectively **prevent distributed denial-of-service (DDoS) attacks**, but it can also curtail IP intelligence gathering (e.g. geolocation lookup), effectively **preventing web server takedown and seizure**.

## 西蒂姆的世界觀<br>Citium's Worldview

訴諸新穎性和權威性是謬誤的思維。但不幸地，常規的網絡安全一直專注於由自詡的專家和看似值得信賴的管理機構所兜售的更新穎技術。這些技術都屢屢令人失望，歷來有被詳盡記載和被檢討，例如[瑞士Crypto公司的安全漏洞機器](https://en.wikipedia.org/wiki/Crypto_AG#Compromised_machines)，[Skype的竊聽後門](https://en.wikipedia.org/wiki/Skype_security#Eavesdropping_by_design)和[其他臭名昭著的數據洩露](https://en.wikipedia.org/wiki/List_of_data_breaches)。

西蒂姆（Citium）與常規的網絡安全辦法形成了鮮明的對比。 西蒂姆（Citium）假定任何中央管理機構或任何「單個權益持份者」（單個用戶節點或單個服務節點）本質上都是邪惡的。單個權益持份者把持任何的權力都可能對某些人產生不利影響，因此，西蒂姆（Citium）剝削了權益持份者傳統來說持有的功能，例如授權的權利，以及持有用戶帳戶ID、密碼和個人信息的權利。

It is fallacious thinking to appeal to novelty and authority. But unfortunately, conventional cybersecurity has been focusing on ever fancier technologies peddled by self-proclaimed experts and seemingly trustworthy governing bodies. A laundry list of disappointments has been documented and reviewed, such as [Swiss Crypto AG's compromised machines](https://en.wikipedia.org/wiki/Crypto_AG#Compromised_machines), [Skype's eavesdropping by design](https://en.wikipedia.org/wiki/Skype_security#Eavesdropping_by_design) and [other infamous data breaches](https://en.wikipedia.org/wiki/List_of_data_breaches).

Citium is in stark contrast to the conventional approach. Citium assumes that any single stakeholder (i.e. user node & service node) is evil by nature. Whatever power a stakeholder holds may adversely affect someone; therefore, Citium mutilates the power that is conventionally available to stakeholders, such as the rights to authorize, and to hold users' account ID, password, and personal information.

## SafeMail & SDTP

西蒂姆（Citium）繼承自開源項目[SafeMail](https://github.com/maikejonne/safeemail)。儘管西蒂姆（Citium）即時通訊系統項目與 SafeMail 協議完全兼容，但我們還是決定將其稱為 Citium Instant Messenger（CIM）而不是Citium Mail，因為用戶界面和實際使用感覺就像市場上的大多數即時通訊程序。

CIM和SafeMail都使用的通信機制是「安全數據傳輸協議」 [SDTP](https://en.wikiversity.org/zh-tw/SDTP)。 SDTP規定，所有形式的通信都將相同的通用通知推送給預期的接收者。收到通知後，要求預期的收件人自己檢索消息。

Citium is inherited from the open-source project [SafeMail](https://github.com/maikejonne/safeemail). Although the Citium Instant Messenger project is fully compatible with SafeMail protocol, we decide to call it Citium Instant Messenger (CIM) instead of Citium Mail because the user interface and the actual usage feel like most of the instant messengers in the marketplace.

The communication mechanism used by both CIM and SafeMail is the "Safe Data Transfer Protocol" [(Safe Data Transfer Protocol)](https://en.wikiversity.org/zh-tw/SDTP). SDTP dictates that all forms of communication push the same generic notification to the intended recipients. Once notified, the intended recipients are required to retrieve the messages on their own.

### Push & Pull<br>推播與拉取

大多數即時通訊系統都設計為將通訊信息主動推播到預期收件人的客戶端應用程序上。但是，在西蒂姆（Citium）即時聊天系統中，主動推播通知僅限於發送給預期的收件人的通用文本提醒（例如「您有一個新的消息」）。預期的收件人需要自己去拉取消息。

Most instant messenger systems are designed that messages are directly pushed onto the client apps of the intended recipients. However, in Citium Instant Messenger system, push notifications are limited to a generic text reminder (e.g. "You have a new message.") sent to the intended recipients. The intended recipients are required to fetch the messages on their own.

## 門限加密系統<br>Threshold Cryptography

在任何密碼系統中，將純文本訊息轉換為密文再轉換回來的最重要組成部分是密鑰。 密鑰是密碼學整體安全性的基礎，這意味著密鑰的保護也已成為重要的命題。 可以減少密鑰洩露風險的一種方法是門限加密。 門限加密學的基本思想是，在將密鑰分發給相關節點之前，將其分為 N 個份額。 為了再次生成密鑰，不需要所有共享。 相反，一個實體只能組合 K 個份額（稱為門限）來重建密鑰。 換句話說，即使將密鑰分為 N 個份額，也僅需要 K 個份額即可重建密鑰。

西蒂姆（Citium）的門限加密方案是確保密鑰安全並防止密鑰被洩露的額外步驟。這是因為對手將需要攻擊 K 個節點以便獲得 K 個份額來生成密鑰，而不是損害一個節點則可來獲取密鑰。這使得攻擊難度大增。歷來只有具有非常有價值的秘密（例如證書頒發機構，軍隊和政府所隱藏的）才使用門限加密系統技術。

In any cryptographic system, the most important component of transforming plaintext message to ciphertext and back is the key. The key is the foundation of the overall security of cryptography, which means that the protection of the key has also become an important issue. One of the methods that can reduce the risk of the key being compromised is threshold cryptography. The basic idea of threshold cryptography is that the key is divided into n shares before being distributed to the involved entities. In order to generate the key again, not all the shares are needed. Instead, an entity can combine only k shares (known as the threshold value) to reconstruct the key. In other words, even though the key is divided into n shares, only k out of shares is needed to reconstruct the key.

### 作為額外安全措施<br>As Extra Security

Threshold cryptography scheme in Citium is an advanced and extra step to securing the key and to preventing the key from being compromised. This is because an adversary will need to attack k entities in order to obtain k shares to generate the key, rather than compromising one entity to obtain the key. This makes it more difficult for an attacker. Historically, only organizations with very valuable secrets, such as certificate authorities, the military, and governments made use of threshold cryptosystem technology.

## 資訊安全功能<br>InfoSec Features

以下是一個西蒂姆（Citium）的信息安全（有時簡稱為InfoSec）功能列表。信息安全是一種通過減輕信息風險來保護信息的應用功能實踐。 它是信息風險管理的一部分。 它通常涉及防止或至少減少未經授權/不當訪問，使用，披露、破壞、刪除/銷毀、損壞、修改、檢查、記錄或貶值的可能性，也可能涉及減少事件如果不幸發生後的不利影響，例如「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law))。

Here is a list of available InfoSec features on Citium. Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management. It typically involves preventing or at least reducing the probability of unauthorized/inappropriate access, use, disclosure, disruption, deletion/destruction, corruption, modification, inspection, recording or devaluation, although it may also involve reducing the adverse impacts of incidents (e.g. __force disclosure__ / [__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)).

| :closed_lock_with_key: | 資訊安全功能<br>InfoSec | 風險與威脅<br>Risk & Threat |
|:--:|:--:|:--|
| ✓ | 無需許可<br>Permissionless | 審查<br>Censorship |
| ✓ | 機密性<br>Confidentiality | 信息洩露<br>Data Breach |
| ✓ | 完整性<br>Integrity | 篡改<br>Tampering |
| ✓ | 可用性<br>Availability | 阻斷服務攻擊<br>DDoS Attack |
| ✓ | 授權性<br>Authorization | 特權提升<br>Privilege Escalation |
| ✓ | 驗證性<br>Authentication | 欺骗<br>Spoofing |
| ✓ | 可推诿性<br>Deniability | 強制型透漏<br>Forced Disclosure |
| ✗ | 不可否認性<br>Non-Repudiation | 可否認性<br>Repudiation |

{: .box-note}
{: style="color: grey; font-size: 80%;"}
:closed_lock_with_key:: ✓ 有該功能; ✗ 無該功能
<br>
:closed_lock_with_key:: ✓ available feature; ✗ unavailable feature

### 下一章 / NEXT CHAPTER
[**可推诿性和不可否認性**](../deniability)<br>
[**Deniability & Non-Repudiation**](../deniability)
{: .myButton}
