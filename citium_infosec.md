---
layout: page
title: 可推诿性匿名網絡
subtitle: More Than Anonymity
bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

西蒂姆（Citium）是一個免費的、開源代碼的、完全去中心化的、[無需准入許可的區塊鏈系統](https://en.wikipedia.org/wiki/Blockchain#Permissionless)，並採用了密碼學上堅不可摧的信息安全机制，例如 __無差別網樹多點傳送__（IMTM）__哈希傳遞網路__（HDN） 和 __分身馬甲帳號__。西蒂姆（Citium）當前的版本能兼容 __文字__、__音像__、__視像__ 和 __即時音訊__ 的數據。使用西蒂姆（Citium）建造的去中心化應用程序（dApp）能享有與別不同的數據傳輸安全性，例如 __可推诿性__。西蒂姆（Citium）非常適合用於 **匿名化即時通訊系統**（AIMS） 和 **服務器IP地址混淆**（SIPO）。 SIPO是西蒂姆（Citium）的獨特功能，可以讓HTML5的內容訪問者既可以訪問到內容但無從得知其服務器的來源IP地址，不單能有效 **防止分散式阻斷服務攻擊（DDoS）**，更可以從IP地理情報層面杜絕情報收集，有效 **防止網絡服務器被拆卸和扣押**。

接下來，為了方便讓讀者較為高效地理解西蒂姆（Citium）的獨特性，我們只以 **匿名化即時通訊系統**（AIMS）為應用範本介紹西蒂姆（Citium）相關訊息安全功能。

Citium is a free, open-source, fully decentralized, [permissionless blockchain](https://en.wikipedia.org/wiki/Blockchain#Permissionless) that features cryptanalytically unbreakable InfoSec mechanisms (e.g., **indiscriminate mesh-tree multicast** (IMTM) **hash delivery network** (HDN) and **sockpuppetry**). Citium's current build is capable of serving **text**, **image**, **video** and **real-time voice** data. Decentralized Apps (dApps) built on Citium can enjoy many data security features (e.g., **deniability**). Citium is best suited for **anonymized instant messenger system** (AIMS) and **server IP address obfuscation** (SIPO). SIPO is a unique feature of Citium. SIPO can enable visitors to visit HTML5-based content while seamlessly hide the content hosting server's originating IP address from its visitors. Not only can SIPO effectively **prevent distributed denial-of-service (DDoS) attacks**, but it can also curtail IP intelligence gathering (e.g., geolocation lookup), effectively **preventing web server takedown and seizure**.

In the following, to help you effectively understand the unique infosec features of Citium, we focus on using only the application of **anonymized instant messenger system**.

## 可推诿性 | Deniability ✓<br>不可否認性 | Non-Repudiation ✗
某些中心化通信系統被稱為 *不可否認的*，因為其用戶的目標是系統化地讓其溝通對象承擔法律責任。西蒂姆（Citium）不是為這種目標而設計的，而是提供了完全相反的信息安全功能：**可推諉性**。「可推諉性」是針對 **強制披露** 或 [強制性秘鑰披露](https://en.wikipedia.org/wiki/Key_disclosure_law)的最後一道防線。當兩個用戶（例如Alice和Bob）決定通過西蒂姆（Citium）通信，他們必須首先成為西蒂姆（Citium）中彼此認證的用戶（“聯絡人”）。添加聯絡人這個認證行為也是唯一次時機他們倆（Alice和Bob）可以彼此確認身份。因為在此之後，即使在他們倆通信過程中，任何人都無法無可辯駁地證明他們兩個的聯絡人關係。這是通過一個獨特的訊息安全機制實現的：__分身馬甲帳號__。

Some centralized communication systems are said to be *non-repudiable* because their users purposely want to systematically hold their communication counterparties legally accountable. Citium does not cater for that purpose. In fact, Citium offers the complete opposite: **deniability**, which is the last line of defense against **forced disclosure** or [mandatory key disclosure](https://en.wikipedia.org/wiki/Key_disclosure_law). Deniability in Citium is achieved through three InfoSec mechanisms: 1. **permissionless**, 2. [**deniable authentication**](https://en.wikipedia.org/wiki/Deniable_authentication), and 3. **sockpuppetry**.

{: .box-note}
{: style="color: grey; font-size: 90%;"}
**不可否認性** 是一個在信息安全中廣泛使用的法律概念。它指的是任何訊息服務系統中，接訊者有充分的理由相信該訊息是由已知的發訊者創建的（驗證性），並且該消息在傳輸過程中未發生更改（完整性）。換句話說，不可否認性使得系統用戶很難成功地抵賴消息的信息來自何者/何處、以及消息的真實性。留意，西蒂姆（Citium）不服務此需求。<br>
**Non-repudiation** is a legal concept that is widely used in information security. It refers to any service, which gives a recipient very strong reason to believe that the message was created by a known sender (authentication) and that the message was not altered in transit (integrity). In other words, non-repudiation makes it very difficult to successfully deny who/where a message came from as well as the authenticity of that message. Note, Citium is not built for this.

### 1. 無需許可 | Permissionless ✓
西蒂姆（Citium）的服務節點是開源開放的，任何人可以成爲服務節點中的一個！做節點的好處是你可以無限制的向使用該節點服務的人提供廣告服務。當然，用戶選擇使用哪些節點的服務，是用戶的權利。用戶可以拒絕選擇作惡的節點，節點也可以拒絕作惡的用戶，這是自由公平的選擇。
<br>
外部看到西蒂姆（Citium）網絡中傳輸的數據是無法辨識真僞的數據，《比特訊》採用SDTP技術，其核心就是數據人人可僞造，人人篡改，除非發起人自己證明。其實這與比特幣的理念一致，沒有打包入塊的數據，亦無法被證明真僞。《比特訊》認爲，私有數據無需要被其他人偷窺，那麼最好的保護方式就是海量的僞造且無法被證明。
<br>
The main benefit of Citium being a [permissionless](https://en.wikipedia.org/wiki/Blockchain#Permissionless) blockchain is __censorship-resistance__. No one can be banned from running nodes. Operators of nodes (e.g., IMSP) may advertise their own material (e.g., commercial content) to those who access Citium through their nodes. Every node can multicast/retrieve data (e.g., text, image, video and real-time voice) to/from Citium. Any two users (e.g., Alice & Bob) who decide to communicate securely may hop on Citium at any time without the need to ask anyone else for permission.

### 2. 驗證性 | Authentication ✓
When two users (e.g., Alice and Bob) decide to communicate through Citium with each other, they have to become each other's authenticated users ("Contacts") in Citium from the outset — i.e. exercising an out-of-band key exchange. This is the only moment in the authentication lifecycle that the two users know for sure that the communicating counterparty (Alice or Bob) is whom they believe to be. But after that, as ironic as it may sound, no one, not even the two users themselves, can irrefutably prove their authenticated Contact relationship even during the course of their communication.

Despite what has just been said, the traditional sense of user authentication (i.e., irrefutably identifying a user) is still there because authentication in the Citium universe is no longer bounded by user account alone but by every cryptographically signed message. Two users (e.g., Alice & Bob) must be joined cryptographically or authenticated in a trusted relationship, i.e., "Contacts", before they can communicate. Once authenticated, message sent between two Contacts (e.g., Alice & Bob) cannot be spoofed by any third party. That is, Bob can always correctly identify the cryptographically bounded message sent from Alice whom he has authenticated from the outset in spite of many other users pretending to be Alice; and Alice can always be certain that only the one true Bob is authorized to read the message that he send in spite of many other users pretending to be Bob trying to access the message.

### 3. 分身馬甲帳號<br>Sockpuppetry
[Sockpuppets](https://en.wikipedia.org/wiki/Sockpuppet_(Internet))是一個 **反監控的軟件對策** / [software measure of countersurveillance](https://en.wikipedia.org/wiki/Countersurveillance#Software_countermeasures)。在西蒂姆（Citium）中，__分身馬甲帳號__ 的機制註定了 __任何用戶都可以偽裝成其他用戶__，就連用戶帳戶的暱稱也無獨一無二性呢！從用戶的角度來看，除了一個人自己的賬戶外，沒有用戶能確定哪個賬戶屬於誰。西蒂姆（Citium）的「分身馬甲帳號」機制規定 **一個用戶賬戶不可以與另一位用戶賬戶直接溝通**，而只能通過西蒂姆（Citium）中的「分身馬甲帳號」間接溝通。不論從任何視角看，所有用戶賬號都是「分身馬甲帳號」，而每個帳號都貌似是一個反監控的誘餌。一個賬戶在替持賬用戶通訊或僅僅只是在替其他用戶扮演「分身馬甲帳號」去通訊，除了持賬用戶本人之外，任何其他人都無從推敲亦無法證明。

[Sockpuppet](https://en.wikipedia.org/wiki/Sockpuppet_(Internet)) is a [software measures of countersurveillance](https://en.wikipedia.org/wiki/Countersurveillance#Software_countermeasures). In Citium, sockpuppetry dictates that __anyone can pretend to be someone else__. User account nickname is non-exclusive, too! No user knows for sure which account belongs to whom from an aerial perspective, except one's own. Sockpuppetry dictates that a user **cannot communicate directly** to another user but only indirectly through the sea of sockpuppeted user account in Citium. From any perspective, all user accounts are sockpuppets and everyone looks like an anti-surveillance decoy. An account can be communicating on behalf of the account holder or simply just sockpuppetting (communicating on behalf of other accounts). No one else can scrutinize or prove which account is communicating on hehalf of whom except for the account holder him/herself.

{: .box-warning}
{: style="color: grey; font-size: 80%;"}
:bomb:: To further maximize deniability, all data have limited life expectancy on Citium nodes. For example, hash keys sitting on a mobile node are set to **self-destruct countdown** of 24 hours.

## 機密性 | Confidentiality ✓
傳統IMSP是基於中心化身份驗證和授權機制去確保信息安全的，天然使然無可避免地需要擔受[數據洩露](https://en.wikipedia.org/wiki/Data_breach)的風險。這是西蒂姆（Citium）的機制完全解決了的問題。（[請參閱專用頁面](../ fallible_providers)）西蒂姆（Citium）使用獨特的身份驗證機制來更好地檢查和平衡用戶與IMSP之間的關係：**用戶身份驗證信息完全由用戶自己生成，絕不假手于他人** 未經授權的第三方均無法讀取託管在Alice的IMSP服務器上的適配給他的聯絡人的訊息（例如，發訊者Alice留給Bob的訊息，除了Bob之外無人能讀），因為Citium使用了 __無差別網樹多點傳送__（IMTM）__哈希傳遞網路__（HDN）機制。
<br>
Traditional IMSP based on centralized authentication and authorization regime is inherently and inevitably susceptible to [data breach](https://en.wikipedia.org/wiki/Data_breach). This is a paint point that Citium's regime are made to resolve. ([Refer to the dedicated page that talks about it.](../fallible_providers)) Citium use a unique authentication mechanism for better checks and balances between users and IMSP: **A user authentication info is entirely generated by the user but no one else.** No unauthorized third party can read an appropriate message (e.g., sent from Alice to Bob), which is hosted on Alice's IMSP server, because Citium use a **indiscriminate mesh-tree multicast** (IMTM) **hash delivery network** (HDN) mechanism.

### IMTM HDN
IMTM-HDN 意味著 __消息是被算法劃分成多個散列密鑰__，這些散列密鑰又通過網狀樹多點傳送、不加選擇地分佈到盡可能多的節點上。存放加密的哈希密鑰的西蒂姆（Citium）節點充當接收者（Bob）的「哈希傳遞網絡」（HDN）。為了使接訊者（Bob）解密來自發訊者（Alice）的消息，Bob必須獲取指定的私鑰來解密消息。 Bob必須通過 __無差別網樹多點傳送__（IMTM）來盡可能多的節點作請求，直到她收集形成指定的專用密鑰所需的所有散列的哈希密鑰為止。__只有接訊者（Bob）才能將所有哈希密鑰重新統一併起來才能生成有效的私鑰，成功解鎖Alice留給她的加密的信息__。
<br>
**Indiscriminate mesh-tree multicast** (IMTM) **hash delivery network** (HDN) means that __the message is algorithmically split into multiple hash keys__, which in turn are distributed indiscriminately to as many nodes as possible by mesh-tree multicasting. The Citium nodes that hold the encrypted hash keys act as **hash delivery network** (HDN) for the receiver (Bob). In order for the receiver (Bob) to decrypt the message from the sender (Alice), Bob has to obtain the designated private key to decrypt the message. Bob has to make request to as many nodes as he can through **indiscriminate mesh-tree multicast** (IMTM) until he collects all the hash keys necessary to form the designated private key. _Only the receiver (Bob) can reunite and decrypt all hash keys back to the valid private key to unlock the encrypted message_.

{: .box-warning}
{: style="color: grey; font-size: 80%;"}
__加密分析學上無法破解__：除非某駭客能夠劫持擁有相關哈希密鑰的每個節點，然後使用只是理論上存在的量子計算機解密所有哈希密鑰，否則哈希密鑰在傳輸期間不會對消息的機密性造成任何威脅。
<br>
__Cryptanalytically Unbreakable__: Unless some hackers can hijack every node that hold the pertaining hash keys and decipher them all with a quantum computer that only exist in theory, nothing during transit of the pertaining hash keys can threat the confidentiality of the message.

## 完整性 | Integrity ✓
在西蒂姆（Citium）上傳播的信息或其離散哈希值都被 [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 算法加密了的。破解該加密不僅在數學上不切實際，而且在很多開源項目（例如[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)）中已經使用了將近二十年。成功的駭客攻擊（無需私鑰對它進行解密）將使任何可能的攻擊者都獲得巨大的利潤。這種現象似乎從未發生過，這種歷史現實是最佳的經驗證據說明它的安全性。
<br>
An appropriate message or its hash keys cannot be changed during transit on Citium because they are __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only mathematically impractical to break the encryption but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successfully hack (deciphering it without private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is good empirical evidence for its security.

## 資訊安全功能<br>InfoSec Features
信息安全（有時簡稱為InfoSec）是一種通過減輕信息風險來保護信息的應用功能實踐。 它是信息風險管理的一部分。 它通常涉及防止或至少減少未經授權/不當訪問，使用，披露、破壞、刪除/銷毀、損壞、修改、檢查、記錄或貶值的可能性，也可能涉及減少事件如果不幸發生後的不利影響，例如「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law))。
<br>
Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management. It typically involves preventing or at least reducing the probability of unauthorized/inappropriate access, use, disclosure, disruption, deletion/destruction, corruption, modification, inspection, recording or devaluation, although it may also involve reducing the adverse impacts of incidents (e.g., __force disclosure__ / [__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)).

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

Here are a list of InfoSec features that any two users (e.g., Alice & Bob) who have established trusted relationship between themselves on Citium may enjoy:

### 1 可用性 | Availability ✓
__Decentralized network offers many nodes__ for the hash keys of an appropriate message (e.g., sent from Alice to Bob) as points of transits and hash delivery nodes so that services are available at all time. No [single point of failure (SPOF)](https://en.wikipedia.org/wiki/Single_point_of_failure) could impact the uptime of Citium.

{: .box-note}
{: style="color: grey; font-size: 70%;"}
__完全去中心化__：大多數現代在線應用程序服務提供商在使用某種形式的中心化方法（例如，託管于數據中心的服務器）來構建其用戶管理系統。這意味著監視。因為無論服務提供者斷言他們如何有效地保護用戶信息（例如電子郵件，IP，用戶名和密碼）免受惡意管理或駭客攻擊，從理論上講，他們都擁有修改或刪除信息的權力。因此，去中心化是絕對必要的，因為這樣才可以排除任何不幸事故發生，即使只是理論上可能會發生的事故。
<br>
__Fully Decentralization__: Majority of the contemporary online application service providers are using some forms of centralized methods (e.g., servers hosted in a datacenter) to structure their user management systems. It means monitoring. Because no matter how vigorously the service providers assert that they are effectively guarding the user information (e.g., email, IPs, username & password) from maladministration or hack, theoretically, they hold the power to modify or delete the information. Therefore, decentralization is absolutely necessary to achieve the level of confidence that one can rule out even theoretical mishaps from happening.

### 2. 授權性 | Authorization ✓
__Network-wide peer-to-peer (P2P) relationship__ assume no higher or lower privilege but only those appropriated to receive is authorized. Thus, neither [horizontal privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal) nor [vertical privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Vertical) may occur.
