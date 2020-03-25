---
layout: page
title: 可推诿性匿名網絡
subtitle: More Than Anonymity
bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

西蒂姆（Citium）是一個免費的、開源代碼的、完全去中心化的、[無需准入許可的區塊鏈系統](https://en.wikipedia.org/wiki/Blockchain#Permissionless)，並採用了密碼學上堅不可摧的信息安全机制，例如 __無差別網樹多點傳送__（IMTM）__哈希傳遞網路__（HDN） 和 __分身馬甲帳號__。西蒂姆（Citium）當前的版本能兼容 __文字__、__音像__、__視像__ 和 __即時音訊__ 的數據。使用西蒂姆（Citium）建造的去中心化應用程序（dApp）能享有與別不同的數據傳輸安全性，例如 __可推诿性__。西蒂姆（Citium）非常適合用於 **[OTS無記錄通訊](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)即時通訊系統**（OTS-IMS） 和 **服務器IP地址混淆**（SIPO）。

SIPO是西蒂姆（Citium）的獨特功能，可以讓HTML5的內容訪問者既可以訪問到內容但無從得知其服務器的來源IP地址，不單能有效 **防止分散式阻斷服務攻擊（DDoS）**，更可以從IP地理情報層面杜絕情報收集，有效 **防止網絡服務器被拆卸和扣押**。

但鑒於篇幅，接下來，為了方便讓您較為高效地理解西蒂姆（Citium）的獨特性，我們只以 **[OTS無記錄通訊](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)即時通訊系統**（OTS-IMS）為應用範本介紹西蒂姆（Citium）相關訊息安全功能。

Citium is a free, open-source, fully decentralized, [permissionless blockchain](https://en.wikipedia.org/wiki/Blockchain#Permissionless) that features cryptanalytically unbreakable InfoSec mechanisms (e.g. **indiscriminate mesh-tree multicast** (IMTM) **message digests delivery network** (MDDN) and **sockpuppetry**). Citium's current build is capable of serving **text**, **image**, **video** and **real-time voice** data. Decentralized Apps (dApps) built on Citium can enjoy many data security features (e.g. **deniability**). Citium is best suited for [**Off-the-Record Messaging (OTR)**](https://en.wikipedia.org/wiki/Off-the-Record_Messaging) **Instant Messenger System** and **server IP address obfuscation** (SIPO). SIPO is a unique feature of Citium.

SIPO can enable visitors to visit HTML5-based content while seamlessly hide the content hosting server's originating IP address from its visitors. Not only can SIPO effectively **prevent distributed denial-of-service (DDoS) attacks**, but it can also curtail IP intelligence gathering (e.g. geolocation lookup), effectively **preventing web server takedown and seizure**.

Given the limited space, however, in the following, to help you effectively understand the unique infosec features of Citium, we focus on depicting only the application of [**Off-the-Record Messaging (OTR)**](https://en.wikipedia.org/wiki/Off-the-Record_Messaging) **Instant Messenger System**.

## 可推诿性 | Deniability ✓<br>不可否認性 | Non-Repudiation ✗
某些中心化通信系統被稱為 *不可否認的*，因為其用戶的目標是系統化地讓其溝通方承擔法律責任。西蒂姆（Citium）不是為這種目標而設計的，而是提供了完全相反的信息安全功能：**可推諉性**。「可推諉性」是針對[**強制披露**](https://en.wikipedia.org/wiki/Key_disclosure_law)和其後患的最後一道防線。不公開的、私下的電子通訊一直是個人和企業通訊中的關注點。發件人（或預期收件人）需要能夠[合理地推諉](https://zh.wikipedia.org/wiki/%E5%90%88%E7%90%86%E6%8E%A8%E8%AF%BF)他發送過的訊息（或，是預期收件人）。西蒂姆（Citium）中的「可推諉性」是通過三個訊息安全機制實現的：

1. [**無需准入許可**](#1-%E7%84%A1%E9%9C%80%E8%A8%B1%E5%8F%AF--permissionless-)
2. **可推諉驗證**
3. **分身馬甲帳號**

Some centralized communication systems are said to be *non-repudiable* because their users purposely want to systematically hold their communicating parties legally accountable. Citium does not cater for that purpose. In fact, Citium offers the complete opposite: **deniability**, which is the last line of defense against [**forced disclosure**](https://en.wikipedia.org/wiki/Key_disclosure_law) and its repercussions. Off-the-record electronic communication has always been a concern in personal and business communications. The sender (or the intended recipient) of a message want to [plausibly deny](https://en.wikipedia.org/wiki/Plausible_deniability) that he or she has sent that message (or being the intended recipient). Deniability in Citium is achieved through three InfoSec mechanisms:

1. [**Permissionless**](#1-%E7%84%A1%E9%9C%80%E8%A8%B1%E5%8F%AF--permissionless-)
2. [**Deniable Authentication**](https://en.wikipedia.org/wiki/Deniable_authentication)
3. **Sockpuppetry**

{: .box-note}
{: style="color: grey; font-size: 90%;"}
**不可否認性** 是一個在信息安全中廣泛使用的法律概念。它指的是任何訊息服務系統中，接訊者有充分的理由相信該訊息是由已知的發件人創建的（驗證性），並且該消息在傳輸過程中未發生更改（完整性）。換句話說，不可否認性使得系統用戶很難成功地抵賴消息的信息來自何者/何處、以及消息的真實性。留意，西蒂姆（Citium）不服務此需求。<br>
**Non-repudiation** is a legal concept that is widely used in information security. It refers to any service, which gives a recipient very strong reason to believe that the message was created by a known sender (authentication) and that the message was not altered in transit (integrity). In other words, non-repudiation makes it very difficult to successfully deny who/where a message came from as well as the authenticity of that message. Note, Citium is not built for this.

### 1. 無需許可 | Permissionless ✓
西蒂姆（Citium）作為一個免費的、開源代碼的、完全去中心化的、[無需准入許可的區塊鏈系統](https://en.wikipedia.org/wiki/Blockchain#Permissionless) 的好處是 **抗审查**。沒人可被阻止在西蒂姆（Citium）上架設節點。節點的運營商，例如[OTS](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)即時聊天工具提供商（IMSP），可以向通過其西蒂姆（Citium）節點訪問的用戶宣傳自己的資料（例如，商業廣告內容）。發件人可以自由選擇IMSP的服務節點去中繼信息給預期收件人。任何兩個用戶（例如Alice和Bob）都可以隨時通過任何西蒂姆（Citium）的IMSP進行安全和可推諉的通訊而無需徵詢任何其他人的許可。但當然，任何一個西蒂姆（Citium）服務節點都有權拒絕服務或拒絕中繼涉嫌濫用服務的節點。完全取決於每個參與者的自由自決。無論從哪個網絡層面查看西蒂姆（Citium）的數據，所有數據看起來都是雷同的。沒有第三者（尤其是機器智能）可以確認數據是否被偽造或篡改了，因為每個人都可以偽造和篡改其他人的數據。簡而言之，除非另有明確證據說明，否則所有數據均假定為未知來源（被偽造了）且不可信（被篡改過）。

The main benefit of Citium being a free, open-source, fully decentralized, [permissionless blockchain](https://en.wikipedia.org/wiki/Blockchain#Permissionless) is __censorship-resistance__. No one can be banned from running nodes. Operators of nodes (e.g. [OTS](https://en.wikipedia.org/wiki/Off-the-Record_Messaging) Instant Messenger System Provider (IMSP)) may advertise their own material (e.g. commercial content) to the users who access Citium through their nodes. A sender is free to choose which IMSP's service node to help relay his/her message to the intended recipient. Any two users (e.g. Alice & Bob) who decide to communicate securely and deniably may hop on any service nodes of Citium at any time without the need to ask for anyone else's permission. But of course, service nodes are entitled not to serve or not to relay from questionably abusive nodes. It all depends on the self-determination of each participant. No matter from which network communication layer that one looks at Citium, all data look similar. No third party, especially machine intelligence, can tell if data has been forged or tampered with because everyone can forge or tamper with everyone else's data. In principle, all data are assumed unknown origin (forged) and untrustworthy (tampered) until proven otherwise.

{: .box-note}
{: style="color: grey; font-size: 90%;"}
**從西蒂姆（Citium）世界觀：** 為了打消惡意方窺探數據或抓住數據為把柄去危害別人的念頭，西蒂姆（Citium）認為最佳的安保辦法就是公開地允許任何人都可以參與偽造和篡改數據，那麼便沒有任何一方能夠分辨數據真偽和是否有被偽造或篡改過的可能。<br>
**Citium's Worldview:** In order to discourage malicious parties from snooping data or holding data as evidence against others, Citium believes that the best security practice is to openly permit everyone to forge and tamper with data so that and no party can possibly differentiate genuine from forged or tampered data.

### 2. 驗證性 | Authentication ✓
西蒂姆（Citium）採用了「可推諉驗證性」的機制。當兩個用戶（例如Alice和Bob）決定通過西蒂姆（Citium）通訊，他們必須首先成為西蒂姆（Citium）中彼此認證的用戶（“聯絡人”），具體辦法是通過 [頻外金鑰驗證](https://ocftw.github.io/ssd.eff.org/zh_TW/module/key-verification.html)。添加聯絡人這個認證行為也是唯一次時機他們倆（Alice和Bob）可以彼此確認身份。因為在此之後，即使在他們倆通信過程中，任何人都無法無可辯駁地證明他們兩個的聯絡人關係。

Citium uses [deniable authentication](https://en.wikipedia.org/wiki/Deniable_authentication) mechanism. When two users (e.g. Alice and Bob) decide to communicate through Citium with each other, they have to become each other's authenticated users ("Contacts") in Citium from the outset — i.e. exercising an [out-of-band key verification](https://ssd.eff.org/en/module/key-verification), which eliminates all future possibility of [man-in-the-middle attack (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) on Citium. This is the only moment in the authentication lifecycle that the two users know for sure that the communicating counterparty (Alice or Bob) is whom they believe to be. But after that, as ironic as it may sound, no one, not even the two users themselves, can irrefutably prove their authenticated Contact relationship even during the course of their communication.

Despite what has just been said, the traditional sense of user authentication (i.e. irrefutably identifying a user) is still preserved because authentication in the Citium universe is no longer bounded by user account alone but by every cryptographically signed message because any two Contacts (e.g. Alice & Bob) who communicate with each other have finish [out-of-band key verification](https://ssd.eff.org/en/module/key-verification) from the outset. Once verified, message sent between Alice and Bob cannot be spoofed by any third party. Although the permissionless nature of Citium do allow malicious spoofing, Bob can always correctly identify the cryptographically bounded message sent from Alice whom he has authenticated from the outset in spite of many other users pretending to be Alice, and Alice can always be certain that only the one true Bob is authorized to read the message that he send in spite of many other users pretending to be Bob trying to access the message.

### 3. 分身馬甲帳號<br>Sockpuppetry
[Sockpuppets](https://en.wikipedia.org/wiki/Sockpuppet_(Internet))是一個 **反監控的軟件對策** / [software measure of countersurveillance](https://en.wikipedia.org/wiki/Countersurveillance#Software_countermeasures)。在西蒂姆（Citium）中，__分身馬甲帳號__ 的機制註定了 __任何用戶都可以偽裝成其他用戶__，就連用戶帳戶的暱稱也無獨一無二性呢！從用戶的角度來看，除了一個人自己的賬戶外，沒有用戶能確定哪個賬戶屬於誰。西蒂姆（Citium）的「分身馬甲帳號」機制規定 **一個用戶賬戶不可以與另一位用戶賬戶直接溝通**，而只能通過西蒂姆（Citium）中的「分身馬甲帳號」間接溝通。不論從任何視角看，所有用戶賬號都是「分身馬甲帳號」，而每個帳號都貌似是一個反監控的誘餌。一個賬戶在替持賬用戶通訊或僅僅只是在替其他用戶扮演「分身馬甲帳號」去通訊，除了持賬用戶本人之外，任何其他人都無從推敲亦無法證明。

[Sockpuppet](https://en.wikipedia.org/wiki/Sockpuppet_(Internet)) is a [software measures of countersurveillance](https://en.wikipedia.org/wiki/Countersurveillance#Software_countermeasures). In Citium, sockpuppetry dictates that __anyone can pretend to be someone else__. User account nickname is non-exclusive, too! No user knows for sure which account belongs to whom from an aerial perspective, except one's own. Sockpuppetry dictates that a user **cannot communicate directly** to another user but only indirectly through the sea of sockpuppeted user account in Citium. From any perspective, all user accounts are sockpuppets and everyone looks like an anti-surveillance decoy. An account can be communicating on behalf of the account holder or simply just sockpuppetting (communicating on behalf of other accounts). No one else can scrutinize or prove which account is communicating on hehalf of whom except for the account holder him/herself.

{: .box-warning}
{: style="color: grey; font-size: 80%;"}
:bomb:: To further maximize deniability, all data have limited life expectancy on Citium nodes. For example, message digests sitting on a mobile node are set to **self-destruct countdown** of 24 hours.

## 機密性 | Confidentiality ✓
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

## 資訊安全功能<br>InfoSec Features
信息安全（有時簡稱為InfoSec）是一種通過減輕信息風險來保護信息的應用功能實踐。 它是信息風險管理的一部分。 它通常涉及防止或至少減少未經授權/不當訪問，使用，披露、破壞、刪除/銷毀、損壞、修改、檢查、記錄或貶值的可能性，也可能涉及減少事件如果不幸發生後的不利影響，例如「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law))。
<br>
Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management. It typically involves preventing or at least reducing the probability of unauthorized/inappropriate access, use, disclosure, disruption, deletion/destruction, corruption, modification, inspection, recording or devaluation, although it may also involve reducing the adverse impacts of incidents (e.g. __force disclosure__ / [__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)).

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

Here are a list of InfoSec features that any two users (e.g. Alice & Bob) who have established trusted relationship between themselves on Citium may enjoy:

### 1 可用性 | Availability ✓
__Decentralized network offers many nodes__ for the hash keys of an appropriate message (e.g. sent from Alice to Bob) as points of transits and hash delivery nodes so that services are available at all time. No [single point of failure (SPOF)](https://en.wikipedia.org/wiki/Single_point_of_failure) could impact the uptime of Citium.

{: .box-note}
{: style="color: grey; font-size: 70%;"}
__完全去中心化__：大多數現代在線應用程序服務提供商在使用某種形式的中心化方法（例如，託管于數據中心的服務器）來構建其用戶管理系統。這意味著監視。因為無論服務提供者斷言他們如何有效地保護用戶信息（例如電子郵件，IP，用戶名和密碼）免受惡意管理或駭客攻擊，從理論上講，他們都擁有修改或刪除信息的權力。因此，去中心化是絕對必要的，因為這樣才可以排除任何不幸事故發生，即使只是理論上可能會發生的事故。
<br>
__Fully Decentralization__: Majority of the contemporary online application service providers are using some forms of centralized methods (e.g. servers hosted in a datacenter) to structure their user management systems. It means monitoring. Because no matter how vigorously the service providers assert that they are effectively guarding the user information (e.g. email, IPs, username & password) from maladministration or hack, theoretically, they hold the power to modify or delete the information. Therefore, decentralization is absolutely necessary to achieve the level of confidence that one can rule out even theoretical mishaps from happening.

### 2. 授權性 | Authorization ✓
__Network-wide peer-to-peer (P2P) relationship__ assume no higher or lower privilege but only those appropriated to receive is authorized. Thus, neither [horizontal privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal) nor [vertical privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Vertical) may occur.
