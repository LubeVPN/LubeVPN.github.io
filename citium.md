---
layout: page
title: 可推诿性匿名網絡
subtitle: More Than Anonymity
bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

## 西蒂姆<br>Citium

西蒂姆（Citium）是一個免費的、開源代碼的、完全去中心化的、無需准入許可的區塊鏈系統，並採用了创新和獨特的安全机制，例如 __網樹內容傳遞網路__（MTMCDN）和 __分身馬甲帳號__。西蒂姆（Citium）能服務得到 __文字__、__音像__、__視像__ 和 __即時音訊__ 的數據。使用西蒂姆（Citium）建造的去中心化應用程序（dApp）能享有與別不同的數據傳輸安全性，例如 __可推诿性__。
<br>
Citium is a free, open-source, fully decentralized, permissionless blockchain that features innovative and unique InfoSec mechanisms (e.g., _mesh-tree multicast content delivery network_ (MTMCDN) and _sock puppetry_). Citium is capable of serving _text_, _image_, _video_ and _real-time voice_ data. Decentralized Apps (dApps) built on Citium can enjoy many data security features (e.g., _deniability_).

{: .box-note}
__完全去中心化__：大多數現代在線應用程序服務提供商在使用某種形式的中心化方法（例如，託管于數據中心的服務器）來構建其用戶管理系統。這意味著監視。因為無論服務提供者斷言他們如何有效地保護用戶信息（例如電子郵件，IP，用戶名和密碼）免受惡意管理或黑客攻擊，從理論上講，他們都擁有修改或刪除信息的權力。因此，去中心化是絕對必要的，因為這樣才可以排除任何不幸事故發生，即使只是理論上可能會發生的事故。
<br>
__Fully Decentralization__: Majority of the contemporary online application service providers are using some forms of centralized methods (e.g., servers hosted in a datacenter) to structure their user management systems. It means monitoring. Because no matter how vigorously the service providers assert that they are effectively guarding the user information (e.g., email, IPs, username & password) from maladministration or hack, theoretically, they hold the power to modify or delete the information. Therefore, decentralization is absolutely necessary to achieve the level of confidence that one can rule out even theoretical mishaps from happening.

### 資訊安全功能<br>InfoSec Features

Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management. It typically involves preventing or at least reducing the probability of unauthorized/inappropriate access, use, disclosure, disruption, deletion/destruction, corruption, modification, inspection, recording or devaluation, although it may also involve reducing the adverse impacts of incidents.

| :closed_lock_with_key: | 資訊安全功能<br>InfoSec Feature | 風險與威脅<br>Risk & Threat |
|:--:|:--:|:--|
| ✓ | 無需許可<br>Permissionless | 審查<br>Censorship |
| ✓ | 機密性<br>Confidentiality | 信息洩露<br>Information Disclosure |
| ✓ | 完整性<br>Integrity | 篡改<br>Tampering |
| ✓ | 可用性<br>Availability | 阻斷服務攻擊<br>DDoS Attack |
| ✓ | 授權性<br>Authorization | 特權提升<br>Privilege Escalation |
| ✓ | 驗證性<br>Authentication | 欺骗<br>Spoofing |
| ✓ | 可推诿性<br>Deniability | 強制型透漏<br>Forced Disclosure |
| ✗ | 不可否認性<br>Non-Repudiation | 可否認性<br>Repudiation |

{: .box-note}
:closed_lock_with_key:: ✓ 有該功能; ✗ 無該功能
<br>
:closed_lock_with_key:: ✓ available feature; ✗ unavailable feature


Here are a list of InfoSec features that any two users (e.g., Joe & Jane) who have established trusted relationship between themselves on Citium may enjoy:
#### 1. 無需許可 / Permissionless ✓
西蒂姆（Citium）的服務節點是開源開放的，任何人可以成爲服務節點中的一個！做節點的好處是你可以無限制的向使用該節點服務的人提供廣告服務。當然，用戶選擇使用哪些節點的服務，是用戶的權利。用戶可以拒絕選擇作惡的節點，節點也可以拒絕作惡的用戶，這是自由公平的選擇。
<br>
The main benefit of Citium being a [permissionless](https://en.wikipedia.org/wiki/Blockchain#Permissionless) blockchain is __censorship-resistance__. No one can be banned from running nodes. Operators of nodes may advertise their own material to those who access Citium through their nodes. Every node can multicast/retrieve data (e.g., text, image, video and real-time voice) to/from Citium. Any two users (e.g., Joe & Jane) who decide to communicate securely may hop on Citium at any time without the need to ask anyone else for permission.
#### 2. 機密性 | Confidentiality ✓
No unauthorized third party can access an appropriate message (e.g., sent from Joe to Jane) on Citium because Citium use a _mesh-tree multicast content delivery network_ (MTMCDN) mechanism. That is, __the message is randomly split into packets__, which in turn are distributed to as many nodes as possible by mesh-tree multicasting. The nodes that hold the encrypted packets act as content delivery network (CDN) for the message. __Only the receiver (Jane) can decrypt and reunite all packets back to the appropriate message__. Unless some hackers can hijack every node that hold the pertaining packets and decipher them all with a quantum computer that only exist in theory, nothing during transit of the pertaining packets can threat the confidentiality of the message.
#### 3. 完整性 | Integrity ✓
An appropriate message or its packets cannot be changed during transit on Citium because they are __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only mathematically impractical to break but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successfully hack (deciphering it without private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is good empirical evidence for its security.
#### 4. 可用性 | Availability ✓
__Decentralized network offers many nodes__ for the packets of an appropriate message (e.g., sent from Joe to Jane) as points of transits and content delivery servers so that services are available at all time. No [single point of failure (SPOF)](https://en.wikipedia.org/wiki/Single_point_of_failure) could impact the uptime of Citium.
#### 5. 授權性 | Authorization ✓
__Network-wide peer-to-peer (P2P) relationship__ assume no higher or lower privilege but only those appropriated to receive is authorized. Thus, neither [horizontal privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal) nor [vertical privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation#Vertical) may occur.
#### 6. 驗證性 | Authentication ✓
__Aanyone can pretend to be someone else__ because nickname in Citium is non-exclusive. No one knows for sure who is who from an aerial perspective. Two users (e.g., Joe & Jane) can be joined cryptographically in a trusted relationship only once. Once "wedded," spoofing by any third party is impossible, i.e., Joe can always identify the one and only Jane whom he "wedded" even though many other users pretend to be Jane; and Jane can always identify the one and only Joe whom she "wedded" even though many other users pretend to be Joe.
#### 7. 可推诿性 | Deniability ✓<br>不可否認性 | Non-Repudiation ✗

用戶當被 「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)) 時候的最後一道防線。
<br>
Some centralized communication systems are said to be non-repudiable because their users purposely want to hold their counterparties legally accountable. Citium does not cater for that purpose. In fact, Citium offers the complete opposite: deniability, which is the last line of defense against _forced disclosure_ or [_mandatory key disclosure_](https://en.wikipedia.org/wiki/Key_disclosure_law). When two users decide to communicate through Citium with each other, they have to become each other's authenticated users ("Contacts") in Citium first. But as ironic as it may sound, no one, not even themselves, can prove their authenticated Contact relationship afterward and even during the course of their communication. This is achieved by an innovative and unique InfoSec mechanism called _sockpuppetry_: Every user has multiple [sockpuppets](https://en.wikipedia.org/wiki/Sockpuppet_(Internet)) as designated proxies to talk to their Contacts' sockpuppets. The users themselves do not talk directly to anyone else but their own sockpuppets. From an aerial perspective, all users look alike, including the sockpuppets. No one can tell the difference from human-control users from sockpupeted ones, except their own.

{: .box-note}
:bomb:: To further maximize deniability, all packets have limited life expectancy on Citium nodes. For example, packets sitting on a mobile node are set to __self-destruct countdown__ of 24 hours.


### 2. 無對象收發

點對點等於公開是必須的，因為互聯網的點對點離不開接線員。接線員想幫你點對誰，就點對誰，反正這個黑箱操作，用戶是看不見的。所以，點對點私密，其實是完全被偷窺攝像頭錄影的。西蒂姆（Citium）收發無對象，其核心是信息人人可僞造，基於零知識證明，收發雙方心知肚明。當然，無對象收發消息到達會慢些，也無法被收回。“快，你想死的有多快”。

### 3. 保密 VS 加密

隱私保護得靠保密，加密的等級很明顯要低於保密的等級。首先來說，加密很重要，然而西蒂姆（Citium）採用的SDTP是屬於更高的保密級別。非技術性的表述是：你可以冒充成爲世界上的任何人，任何人也可以冒充你；只有你自己能證明你的存在，你的真僞。一段需要保密的數據，只有被你的授權確認的才能看見，那麼只要不是被你授權的數據則都是假的。

### 4. 抗大數據分析

外部看到西蒂姆（Citium）網絡中傳輸的數據是無法辨識真僞的數據，《比特訊》採用SDTP技術，其核心就是數據人人可僞造，人人篡改，除非發起人自己證明。其實這與比特幣的理念一致，沒有打包入塊的數據，亦無法被證明真僞。《比特訊》認爲，私有數據無需要被其他人偷窺，那麼最好的保護方式就是海量的僞造且無法被證明。

### 5. 人人可節點

西蒂姆（Citium）的服務節點是開源開放的，任何人可以成爲服務節點中的一個！做節點的好處是你可以無限制的向使用該節點服務的人提供廣告服務。當然，用戶選擇使用哪些節點的服務，是用戶的權利。用戶可以拒絕選擇作惡的節點，節點也可以拒絕作惡的用戶，這是自由公平的選擇。

### 6. 應用服務保護

爲應用服務提供保護，不只是保護用戶隱私安全。西蒂姆（Citium）會讓衆多的參與者去分擔攻擊，無論攻擊是流量形式的還是其他形式的。當然，這不是免費的，你需要《比特訊》區塊鏈的礦工去頒發保護證書，幫你的服務分發數據資源(CDN)，確認服務身份(DNS)，抗擊各種網絡攻擊(高防)。它基於智能合約，遠比機構承諾靠譜、高效。
