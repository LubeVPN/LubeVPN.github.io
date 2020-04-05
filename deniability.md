---
layout: page
title: 可抵賴可推诿
subtitle: Deniability ✓<br>Non-Repudiation ✗
# bigimg: /img/web.jpg
googlefonts: ["Roboto Condensed"]
---

很多中心化通訊系統自稱帶有 *不可否認性* 作為訊息安全功能之一，因為他們的用戶本身目標就是希望能系統化地讓溝通對手承擔法律責任。西蒂姆（Citium）不是為這種目標而設計的，而是提供了完全相反的信息安全功能：**可推諉性**。「可推諉性」是針對[**強制披露**](https://en.wikipedia.org/wiki/Key_disclosure_law)和其後患的最後一道防線。

西蒂姆（Citium）去中心化系統協議背後的主要動機是為對話參與者提供一個可推諉的溝通網絡，同時保持對話的機密性，例如現實生活中的私人對話，或新聞採購中的記錄。 與之相反的是，某些中心化通訊系統卻輸出可以稍後用作通訊事件和參與者身份的可驗證記錄。

Many centralized communication systems claim to have *non-repudiability* as one of their infosec features because their users purposely want to systematically hold their communicating parties legally accountable. Citium does not cater to that purpose. In fact, Citium offers the complete opposite: **deniability**, which is the last line of defense against [**forced disclosure**](https://en.wikipedia.org/wiki/Key_disclosure_law) and its repercussions.

The primary motivation behind Citium decentralized system protocol is to provide a deniable communication network for the conversation participants while keeping conversations confidential, like a private conversation in real life, or off the record in journalism sourcing. This is in contrast with some other centralized communication systems that produce output which can be later used as a verifiable record of the communication event and the identities of the participants.

{: .box-note}
{: style="color: grey; font-size: 100%;"}
**不可否認性** 是一個在信息安全中廣泛使用的法律概念。它指的是任何訊息服務系統中，接訊者有充分的理由相信該訊息是由已知的發件人創建的（驗證性），並且該消息在傳輸過程中未發生更改（完整性）。換句話說，不可否認性使得系統用戶很難成功地抵賴消息的信息來自何者/何處、以及消息的真實性。留意，西蒂姆（Citium）不服務此需求。
<br><br>
**Non-repudiation** is a legal concept that is widely used in information security. It refers to any service, which gives a recipient a very strong reason to believe that the message was created by a known sender (authentication) and that the message was not altered in transit (integrity). In other words, non-repudiation makes it very difficult to successfully deny who/where a message came from as well as the authenticity of that message. Note, Citium is not built for this.

### 實用價值<br>Practical Value

從現實操作來說，很多人都希望獲得可推諉性的溝通辦法，尤其是那些雖然溝通內容合情合理但卻未必能倖免於被法庭傳召或被司法機構強迫作證的溝通內容，例如新聞記者與吹哨人之間的溝通內容，或高壓政權中的社運分子與律師之間的溝通內容。 西蒂姆（Citium）允許否認溝通過的信息曾存在過于任何的存儲介質，和允許模棱兩可化溝通過的信息。

當溝通雙方希望在一個帶有可推諉性訊息安全功能的系統上對話，發件人需要能夠[合理地推諉](https://zh.wikipedia.org/wiki/%E5%90%88%E7%90%86%E6%8E%A8%E8%AF%BF)他發送過的訊息，稱之為「發件人可推諉的方案」；預期收件人需要能夠[合理地推諉](https://zh.wikipedia.org/wiki/%E5%90%88%E7%90%86%E6%8E%A8%E8%AF%BF)他是被指定的預期收件人，稱之為「收件人可推諉的方案」。

In practice, deniable communication has been sought by users whose legitimate activities may not always be protected from subpoenas or legal coercion, e.g., journalists and whistleblowers, or lawyers and activists in repressive regimes. Citium allows for denying the existence of messages on any storage medium, and for equivocating those messages.

When two parties want to communicate on a system with deniability as one of the main infosec features, the sender of a message want to [plausibly deny](https://en.wikipedia.org/wiki/Plausible_deniability) that he or she has sent that message, i.e.,  sender-deniable scheme; the intended recipient of a message wants to [plausibly deny](https://en.wikipedia.org/wiki/Plausible_deniability) that he or she has received that message, i.e.,  receiver-deniable scheme.

### 防範于未然<br>Preempt Coercion

西蒂姆（Citium）可否認性的設計原則不是要「說服」脅迫者溝通雙方繳出來的通話記錄都是真實的。 因為眾所周知通話記錄很容易被偽造。 相反，我們的目標是 **將脅迫防範於未然**，讓脅逼者理解到在西蒂姆（Citium）上的通信記錄是枉費心機的。只要溝通雙方堅持按原定的措辭去說明溝通的辦法在西蒂姆（Citium）進行，讓脅逼者理解西蒂姆（Citium）的系統原理後，則不可能被脅逼者找到真實的溝通信息。

The purpose of deniability is not at all to "convince" the coercer that any surrendered transcript is real; indeed, it is common knowledge that transcript can easily be faked. Instead, the goal is to **preempt coercion** in the first place by making it useless. Parties who "stick to their stories" explaining to the coercer how Citium works can never be pinned down to the real message.

西蒂姆（Citium）中的「可推諉性」是通過三個訊息安全機制實現的：<br>
Deniability in Citium is achieved through three InfoSec mechanisms:

1. **無需准入許可**<br>**Permissionless**
2. **可推諉驗證**<br>**Deniable Authentication**
3. **分身馬甲帳號**<br>**Sockpuppetry**


### 下一章 / NEXT CHAPTER
[**無需准入或許可**](../permissionless)<br>
[**Permissionless**](../permissionless)
{: .myButton}
