---
layout: page
title: 完全去中心化網絡
subtitle: 100% Decentralized Citium
bigimg: /img/web.jpg
---

## 西蒂姆<br>Citium

西蒂姆（Citium）是一個「開源的」(open-sourced)、「無需准入許可的」（permissionless）與「可推諉的」（deniable）去中心化網絡技術。使用西蒂姆（Citium）建造的去中心化應用程序（dApp）和其數據（例如文字、音像、視像和即時音訊）能比任何其他形式設計的系統都要享有更優越的安全性。

decentralized, uncensorable, permissionless, resilient

Citium is an open-sourced, deniable and permissionless decentralized network technology. Its decentralized Apps (dApps) and their data (e.g., text, image, video and real-time voice) enjoy far superior security than any other systems that are designed differently.

### 八大亮點<br>Eight Noteworthy

Confidentiality: No unauthorized party can access appropriate messages.
Integrity: Messages cannot be changed during transit without being discovered.
Authentication: The message needs to be sent by the person/machine who claims to have sent it.
Access control: Only those users enabled can access the data.
Non-repudiation: The receiver can prove that the sender actually sent the message.[3]

| # | · | Feature | Against |
|:--:|:--:|:--:|:--|
| 1 | ✓ | Confidentiality | Information Disclosure |
| 2 | ✓ | Integrity | Tampering |
| 3 | ✓ | Availability | Denial of Service |
| 4 | ✓ | Authorization | Privilege Escalation |
| 5 | ✓ | Authentication | Spoofing |
| 6 | ✓<br><sub>✗<sup> | Deniability<br><sub>Non-Repudiation<sup> | Forced Disclosure<br><sub>Repudiation<sup> |
| 7 | ✓ | Permissionless | Censorship |

Authentication is verifying the identity of a person or process. It is a technical construct.

Non-repudiation is being able to assure that an action cannot be denied; being able to prove that someone did something, for example. It is a legal construct.

Spoofing	Authenticity
Tampering	Integrity
Repudiation	Non-repudiability
Information disclosure	Confidentiality
Denial of Service	Availability
Elevation of Privilege	Authorization

## CIA三元組視角<br>CIA Triad Perspective

傳統上來說，大部分資訊安全架構師著眼點擺在「CIA三元組」，它們是：__機密性 (Confidentiality)__, __完整性 (Integrity)__ 和 __可用性 (Availability)__。在這三個基礎上，西蒂姆（Citium）同時著重多一個安全概念：__推诿性 (Deniability)__ †。它的重要性只會比「CIA三元組」有過之亦無不及，因為與它相關的機制是用戶當被 「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)) 時候的最後一道防線。

 {: .box-note}
 **†** __推诿性 (Deniability)__ 一般會被稱為「合理的可推諉性」(Plausible Deniability), 但不要與另外兩個加密安全領域的概念「可否認性」(Repudiability) 和「無法認領性」(Unclaimability) 混淆了。

Traditionally, most InfoSec architects pay attention only to the famous CIA triad: __Confidentiality__, __Integrity__ and __Availability__. Citium deals with one more issue: __Deniability__†. which is not one bit less important than the CIA triad because its associated mechanisms are the users' last line of defense against __forced disclosure__ or [__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law).

 {: .box-note}
 **†** Deniability, often referred as Plausible Deniability, is not to be confused with two other cryptography concepts: "repudiability" and "unclaimability".

### 推诿性<br>Deniability

西蒂姆 (Citium) 中最創新的安全功能實現辦法是受到了「__大型多人線上角色扮演遊戲__」(MMORPG)、「__反洗錢__」(AML) 和「__分散式阻斷服務攻擊__」(DDoS Attack) 啟發設計而成。它們與去中心化加密安全網絡技術結合後，能提供近乎完美的可推諉性 (Deniability) 效果。首先，MMORPG 提供的啟發，是在它們的「公共頻道」(public channel) 聊天系統。玩過 MMORPG 的人會發現，在「公共頻道」中發言的人非常多而且話題雜亂不堪，難以辨認誰對誰發言或發言的目的是什麼。

西蒂姆 (Citium) 用了兩種圈套型機制：

- 數據分散化
- 小號化

Citum uses two decoying mechanisms:

- Smurf all data transmission
- Sockpuppetize every contact

## 微軟安全分型視角<br>STRIDE Perspective

這整套設計辦法不單撇除了數據對任何個別中轉通訊服務商的依賴，更能杜絕監聽、攔截、追蹤的風險和它們萬一發生了之後的後患。

Data transfers on Citium not only can avoid the reliance on any particular intermediary service provider, but also can effectively eliminate three major [STRIDE](https://en.wikipedia.org/wiki/STRIDE_(security)) threats, namely, 1. Spoofing; 2. Tampering and 3. Denial-of-service attack (DoS attack)), as well as mitigating the possible repercussions of the rest of the threats.

### 1. 完全去中心化<br>Fully Decentralization

大多數現代在線應用程序服務提供商在使用某種形式的中心化方法（例如，託管于數據中心的服務器）來構建其用戶管理系統。這意味著監視。因為無論服務提供者斷言他們如何有效地保護用戶信息（例如電子郵件，IP，用戶名和密碼）免受惡意管理或黑客攻擊，從理論上講，他們都擁有修改或刪除信息的權力。因此，去中心化是絕對必要的，因為這樣才可以排除任何不幸事故發生，即使只是理論上可能會發生的事故。

Citium 在開源節點上運行，任何人都可以不受限制地構建它們。這符合比特幣節點的本質。完全去中心化的設計可以防止單點故障。

Majority of the contemporary online application service providers are using some forms of centralized methods (e.g., servers hosted in a datacenter) to structure their user management systems. It means monitoring. Because no matter how vigorously the service providers assert that they are effectively guarding the user information (e.g., email, IPs, username & password) from maladministration or hack, theoretically, they hold the power to modify or delete the information. Therefore, decentralization is absolutely necessary to achieve the level of confidence that one can rule out even theoretical mishaps from happening.

Citium runs on open source nodes, and anyone can build them without restrictions. This aligns with the nature of Bitcoin's nodes. Full decentralization essentially guard against single point of failure.

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
