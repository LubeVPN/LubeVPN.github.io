---
layout: page
title: 西蒂姆
subtitle: Why use Citium?
bigimg: /img/node.jpg
googlefonts: ["Roboto Condensed"]
---
2020年4月，美國加州北區地方法院的一項判決指出，儘早使用限時即焚的通信工具可以避免被指控「銷毀證據」(spoliation of evidence)：

A recent decision by the US District Court for the Northern District of California notes the importance of using ephemeral communication tools as early as possible to avoid being accused of spoliation of evidence:

> WeRide Corp. v. Huang, 2020 WL 1967209, 9, 11 (N.D. Cal., Apr. 24, 2020), presents what the court described as a “staggering” amount of spoliation, “so sweeping that [the] case [could not] be resolved on its merits.”  One of the spoliation factors the court considered was senior management’s specific direction to use ephemeral messaging months after the litigation was filled – apparently in an attempt to evade discovery. Ultimately, the court ordered terminating sanctions under Fed. R. Civ. P. 37(b) and (e).

### 西蒂姆是什麼？<br>What is Citium?

**西蒂姆是一个「安全」「借乘」「繞行」「抗毀」「瞬逝」和「可抵賴」的即時通訊平臺**：

- __*S*__「**安全**」。採用受到了開源社區監督的、比特幣網絡也採用的加密算法。
- __*P*__「**借乘**」。西蒂姆通訊數據兼容借乘[对等网络P2P](https://zh.wikipedia.org/wiki/%E5%B0%8D%E7%AD%89%E7%B6%B2%E8%B7%AF) (BitTorrent/比特幣) 網絡傳輸全球。
- __*I*__「**抗毀**」。任何服務節點、甚至全部節點被強行撤下後依然能維持通訊服務。
- __*C*__「**繞行**」。用戶不受哪怕[最嚴峻地區的互聯網審查](https://en.wikipedia.org/wiki/Internet_censorship_and_surveillance_by_country)機制阻礙，暢享互聯互通。
- __*E*__「**瞬逝**」。限時即焚信息預防被檢控「[銷毀證據](https://en.wikipedia.org/wiki/Spoliation_of_evidence)」或設備被盜後的資訊泄露。
- __*D*__「**可抵賴**」。西蒂姆資訊安全的**最後一道防線**，是讓用戶掌握從技術層面來說可行、理直氣壯地否認曾經參與過的互聯網通訊行爲；因爲只有這樣才可以防範於未然用戶被【暴力】脅逼、「中間人攻擊」(MITM) 類似的竊聽行爲、和被「後量子密碼攻擊」揭發的[大規模監控](https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%9B%91%E6%8E%A7)歷史檔案數據造成的秋後算賬。

**Citium is an *SPICED* instant messaging platform**, where *SPICED* is a mnemonic that stands for __*S*__*ecure*, __*P*__*iggybacking*, __*I*__*mpervious*, __*C*__*ircumventive*, __*E*__*phemeral*, and __*D*__*eniable*:

- __*Secure*__. Messages are encrypted on your own device with ECDSA, BLOWFISH, and XXTEA, which are time-tested and [provably secure algorithms](https://en.wikipedia.org/wiki/Provable_security) in the open source community.
- __*Piggybacking*__. A unique feature that enables inconspicuous transmission of data through BitTorrent and Bitcoin networks, which are the world's most popular [P2P protocols](https://en.wikipedia.org/wiki/List_of_P2P_protocols) with millions of active nodes.
- __*Impervious*__. You can send and receive messages even if all Citium nodes are removed. Service availability of Citium is impervious to [takedown](https://en.wikipedia.org/wiki/Notice_and_take_down). 
- __*Circumventive*__. No one can stop you and your contacts from communicating even if you are situated in [the most pervasive level of Internet censorship](https://en.wikipedia.org/wiki/Internet_censorship_and_surveillance_by_country).
- __*Ephemeral*__. [Cleartext](https://simple.wikipedia.org/wiki/Cleartext) messages self-destruct, which preempts [spoliation of evidence](https://en.wikipedia.org/wiki/Spoliation_of_evidence) and data breach due to devices fallen into the wrong hands.
- __*Deniable*__. The **last line of defense** is its technically feasible/plausible deniability, which preempts coercion, eavesdropping, such as man-in-the-middle (MITM) attack, and post-quantum computing cryptanalysis of [archived surveillance data by government mass surveillance projects](https://en.wikipedia.org/wiki/List_of_government_mass_surveillance_projects).

### 系統設計前設<br>System Design Premises

切勿被它平平無奇的界面設計誤導讓你以爲西蒂姆只是一款未完善的軟件。事實上，西蒂姆的功能非常強大，因爲它可以保障通信私密並具有「量子抗性」等級的安全，並且傳輸資訊可以被「合理推諉」。眾所周知，創新的系統設計往往會引入新的系統毛病。然而，盡管如此，大多數系統設計者還是喜歡搞創新，因為解決各種疑難雜癥是人的天性。不幸的是，很多時候這些善意的創新都會引起各種新毛病，比如安全漏洞。而且隨著覆雜度越高，越容易出錯。因此，西蒂姆的設計理念，首先是降低系統覆雜度。當一些覆雜的加密算法的使用不可避免和不可被再簡化時，我們就會將其劃分為模塊化組件。考慮到模塊化設計在出現問題時容易出現故障，而這些問題又是劃分的橋梁，西蒂姆確保這些故障不過是以犧牲速度為代價的可接受成本。這一切聽起來可能過於抽象，所以讓我們用更具體的術語和例子來說明這些。


Don't let its blandly designed client app interface mislead you into thinking that Citium is an underdeveloped software. In fact, it is so powerful that it guarantees the communications with your intended contacts are **quantum-resistant** and **plausibly deniable**. It is well-known that innovative system design often introduces new forms of failure. And yet, despite that, most system designers embrace innovation because it is human nature to resolve recurring annoyances. Sadly, more often than not, the well-meaning changes in secure communication systems create unexpected failures, such as security vulnerabilities. The higher the complexity, the more error-prone they are. Therefore, the design philosophy of Citium is, foremost, to reduce system complexity. When the use of some complex encryption algorithms is irreducible, we compartmentalize them into modular components. Given that modular designs become susceptible to failure when issues arise that bridge the divisions, Citium makes sure those failures are nothing but acceptable cost at the expense of speed. It might all sound too abstract so let us put these in more concrete terms and examples.

### 如何通俗地理解西蒂姆？<br>Citium in Layman's Terms

BitTorrent和比特幣協議的資訊加密和傳輸機制是久經時間考驗的去中心化P2P技術。BitTorrent協議已經存在了20年，全球有數十億用戶。比特幣協議已經在高風險的金融環境中證明了其可靠性。西蒂姆乘它們之便，實現了抗量子破解的保密性、用戶匿名性和合理推諉性。**你可以想象一下「瓶中信」的情景**。但是取而代之，我們在瓶子里放的不是紙片，而是一個又一個拼圖遊戲的碎片。這些拼圖碎片被切碎之前的原圖，可以類比成是你希望發給預定收件人的信息。現在，你的信息被你自己的設備加密，並被分割成碎片。信息被加密再切片，好比原圖模切成拼圖然每塊單獨裝瓶。然後，它們被隨機投遞到西蒂姆網絡、BitTorrent網絡和比特幣網絡的節點上。它們分布在世界各地的不同國家，就像把瓶子投到七大洋里一樣。

Encryptions and transmission mechanisms of BitTorrent and Bitcoin protocols are time-tested decentralized P2P technology. The BitTorrent protocol has been around for two decades with billions of users worldwide. The Bitcoin protocol has demonstrated its reliability in the high-stakes financial environment. Citium rides on the back of them to realize quantum-resistant confidentiality, user anonymity and deniability. **Imagine "messages in bottles" senario**. Instead of putting pieces of papers into bottles, we put individual jigsaw puzzles in them. The message that you want to send to your intended recipient is analogous to the custom photo of a jigsaw puzzle. First, the message is encrypted by your own device and is cryptographically split into small slices. It is like die-cutting the photo into jigsaw puzzles then bottling them individually. Then, they are randomly casted to the nodes in the Citium network, the BitTorrent network and the Bitcoin network. They are located all over the world in different countries. It is like casting the bottles into the seven seas. 

#### 動態數據<br>Dynamic Data

請注意，西蒂姆網絡與那些搭載在BitTorrent和比特幣網絡上的數據動態傳輸形態，**類似於互聯網上每時每刻都在发生的數以千萬計的「僞種」(fake seeding) 和「粉塵攻擊」(dusting attacks)**。換句話說，數據傳輸是無害的，而且是完美地隱藏在平凡的互聯網流量中。大部分的BitTorrent和比特幣節點既不會檢查也不會阻止來自個別西蒂姆節點的數據投遞，因為它們的規模太小、頻率太低，不具有幹擾性；通常情況下，只是將新到達的數據堆疊到緩沖區和/或傳遞給別的節點。這就是為什麽**西蒂姆可以規避各種互聯網審查，用戶可以在西蒂姆上自由交流的原因。**而且，靜止的數據--所有的密文切片--都坐在西蒂姆、BitTorrent客戶端和比特幣網絡節點的去中心化網絡上，看起來很相似，就像你很難區分海洋中一個漂浮的瓶子和另一個漂浮的瓶子一樣。

Note that the dynamic transmission of data to the Citium network along with those that piggyback on BitTorrent and Bitcoin networks **resembles the tens of millions of fake seeding and dusting attacks that happen every moment on the Internet**. In other words, the data transmission is harmless and is hiding perfectly in the plainsight of mundane Internet traffic. Most of the BitTorrent and Bitcoin nodes neither examine nor block data casting from individual Citium nodes because they are too small in size and low in frequency to be obtrusive. Usually, they just stack the newly arrived data into their own buffers and/or pass them onto someone else. That's why **Citium can circumvent all kinds of Internet censorship and users can communicate freely on Citium.** 

#### 靜態數據<br>Static Data

而且，西蒂姆的靜態的數據，即那些坐落在西蒂姆節點的去中心化網絡上的密文碎片，它們表面看起來都非常相似，就像漂浮在海面上的那些長相相似的瓶中信一樣，彼此都很難被區分開來。每個人都可以用瓶子裝一個拼圖的碎片，然後投到海里，任何人都可以撿到它。當然也包括你投出去的，也可以被任何人撿到！然而，除了你預定收件人之外，沒有人知道哪個瓶子里裝的是必須被收集齊全的拼圖碎片，更不用說的，就是即使他們設法找回了每一塊必須集齊的拼圖碎片，也不知道如何將它們拼回原來的明文信息。但同時，你和你的預定收件人卻可以在西蒂姆中順暢地交流，因為只有你的預定收件人知道哪些是「需要被收集齊全的密文碎片」（瓶中信），並且有所需的鑰匙來「解密」（解鎖）它們，並將「密文」（拼圖）拼回原始「明文信息」（照片）。此外，無論你們相互溝通的最終事態發展如何，甚至你的預定收件人扭頭翻臉不認人、對你不利、告發你，你都能得到得到西蒂姆的技術上說得通的「合理推諉」的保護。多虧了西蒂姆整體設計，**甚至你的預定收件人都無法追究你對他/她說的任何話的責任**，因為從技術上講，任何人都不可能無可辯駁地證明這些信息是由你投遞的。

Moreover, the static data--all the ciphertext slices--that are sitting on the decentralized network of Citium, BitTorrent client and Bitcoin network nodes look similar, just like you can hardly tell apart one floating bottle from another in the seas. Everyone can bottle a jigsaw puzzle and cast it into the seas and everyone is allowed to pick it up. Yours, too, can be picked up by anyone! However, no one, except your intended recipient, has any clue of which bottles contain the essential puzzles, not to mention how to piece them back to the original message even if they somehow manage to recover every essential slice. Yet all the while, you and the intended recipient can communicate smoothly in Citium because only your intended recipient knows which are the essential slices (bottles) to retain, has the required keys to decrypt (unlock) them and to piece the ciphertexts (jigsaw puzzles) back together into the original message (photo). In addition, you ripe the full benefit of plausible deniability no matter how things turn out, even your intended recipient decides to turn on you. Thanks to the inherent design of Citium, **your intended recipients cannot hold you accountable to whatever you have said to him/her** because it is technically impossible to prove irrefutably that the messages were ever casted by you.


## 資訊安全設計前設<br>InfoSec Design Premises

所有流行的甚至看似創新的、希望用來防止中間人（MITM）和密碼分析攻擊的加密算法和功能（如AES、前向保密），即使不是徒勞，也是難以實現的，因為任何對「反MITM技術」的信念都是無法在發生事故之前被證實有效或無效的，更何況它們都早已被確認無法抵禦量子計算機和/或暴力脅迫的攻擊。我們只能祝願那些對「反MITM技術」抱有信心的人好運，而我們則把西蒂姆的設計前提推導到極致，因為傳統的數據安全假設並沒有起到很好的作用，尤其是對那些在線交流敏感信息的人來說，他們在資源和決心上都被對手（即信息安全破譯攻擊者）所壓制。人們無法理解一些資源豐富且有耐心的攻擊者將MITM做到什麽難以想象的高度；然而到事故發生在他們身手，知道了後，卻已經爲時已晚。誰也不知道國家情報機構什麽時候開始使用量子計算機解密存了檔的傳輸數據，所以無論你今天覺得你私密溝通有多麼安全，都不能保證明天不會被更強大的密碼分析技術來找你麻煩。最後，除非你的身手猶如電影中的特工伊桑·亨特和詹姆斯·邦德一樣敏捷，或，你的頭腦像《嫌疑慣犯》中的凱撒·索澤（Keyser Söze）一樣精狡，或，你根本不介意服毒殉道，否則到了你被暴力脅逼吐出祕密時候才來後悔就爲時已晚。反之，如果你早用了西蒂姆來傳達私密信息，其**技術上說得通的可抵賴性將使你免於坐以待斃**。

All popular and even seemingly innovative encryption algorithms and features (e.g. AES, forward secrecy) in the hope of preventing man-in-the-middle (MITM) and cryptanalysis is elusive if not futile because any belief in anti-MITM technology is unfalsifiable, not to mention that none of them can withstand attacks by quantum computers and/or coercions. We can only wish those who have faith in anti-MITM technologies good luck while we take the design premises of Citium to extremes because traditional data security assumptions have not served well especially to those who communicate sensitive information online and are overpowered by adversaries (i.e. threat actors) in terms of resources and determinations. One cannot fathom the extent of MITM that some resourceful and patient threat actors will go until it is too late. One can never know when state level intelligence agencies start using quantum computers to decrypt archived transmission data, so whatever you feel secure today is no guarantee of not getting back at you by more powerful cryptanalysis technology tomorrow. Last but not the least, unless your body is as nimble as Ethan Hunt in *Mission: Impossible*, unless your mind is as ingenious as Keyser Söze in *The Usual Suspects*, or unless you are always ready to bite and ingest Hydrogen Cyanide (HCN), at the point of being coerced to divulge your secrets, you are doomed. On the other hand, if you have used Citium to communicate private and confidential information, **technically feasible/plausible deniability will defend you from being a sitting duck**.

### 不可避免的竊聽、監視和脅迫<br>Inevitable Eavesdropping, Surveillance & Coercion

西蒂姆能讓用戶免被竊聽和監視嗎？不能，因為竊聽和監視無處不在。例如愛德華·斯諾登在2013年吹哨子曝光[美國國家安全局《稜鏡計畫》](https://zh.wikipedia.org/wiki/%E7%A8%9C%E9%8F%A1%E8%A8%88%E7%95%AB)。我們不能不從中吸取經驗教訓，認清現實，所有人都逃不出竊聽、監視和甚至脅迫的五指山。反其道而行，西蒂姆所做的是提供「可否認性」，使竊聽和監視變得毫無意義，因爲西蒂姆網絡節點的資訊流通是在眾目睽睽之下進行的，沒有人知道在在浩如煙海的信息「瓶中信」中猜得出來誰從哪個設備上發送了什麽。換句話說，西蒂姆利用了一系列的可否認加密方案，使竊聽和監視即使不是完全無足輕重也變得無害。**在大多數情況下，如果「脅迫」當前，你便相當於徹底失敗，你一切曾經試圖保護溝通保密性的努力都是徒然。**「可否認性」的目的根本不是為了讓脅迫者 “相信”任何上交的記錄本是真實的；眾所周知，溝通記錄本來就很容易被偽造。相反，我們的**目標是通過讓上交的溝通記錄變得毫無用處，從而在根源處杜絕脅迫行為**。西蒂姆用戶只需“堅持自己的故事”。沒有數據分析師或資訊安全分析師能夠無可辯駁地證明誰參與了西蒂姆中的哪條信息。西蒂姆的資訊安全理念是重大突破，將可否認的加密方案作為保密性的最後一道防線。簡單地說，只要你通過西蒂姆進行通訊，你就可以無後顧之憂地否認一切對你不利的證據。證明你是無辜的，未必是你的責任。畢竟，證明你做錯了什麽是指控方的責任；但作爲西蒂姆用戶，你就可以放心了，因爲沒有人能夠做到這一點。

Can Citium free users from eavesdropping and surveillance? No, because eavesdropping and surveillance are everywhere. For instance, in 2013, whistleblower Edward Snowden revealed the [US NSA PRISM surveillance program](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) to the world. We cannot face the reality without learning a lesson from it that everyone is subject to eavesdropping, surveillance and even coercion by [government mass surveillance projects](https://en.wikipedia.org/wiki/List_of_government_mass_surveillance_projects). What Citium does, paradoxically, is to offer deniability so that eavesdropping and surveillance is rendered meaningless because no one knows for sure who sent what from which devices in the vast ocean of "bottles of messages'' hidden in the plain sights of the Citium network of nodes. In other words, Citium utilizes a blend of deniable encryption schemes so that eavesdropping and surveillance become innocuous if not entirely inconsequential. **In most circumstances, coercion is tantamount to total defeat. Your attempts to protect the confidentiality of your communications have been in vain.** The purpose of deniability is not at all to “convince” the coercer that any surrendered transcript is real; indeed, it is common knowledge that transcript can easily be faked. Instead, **the goal is to preempt coercion in the first place by making surrendered transcripts useless**. Citium users simply have to “stick to their stories”. No data analyst or forensic expert can irrefutably prove who is involved in which message in Citium. The use of Citium has enabled a major paradigm shift to deniable encryption schemes as the last defense of confidentiality. Simply put, as long as you communicate through Citium, you are free to deny every evidence against you. It is not your duty to prove that you are innocent. It is someone else's duty to prove that you have done something wrong that leads to your charges. But rest assured that no one is capable of doing so.


### 不可靠的中心化系統<br>Unrealiable Centralized Regime

眾所周知，訴諸中央化權威性和新穎性是謬誤的思維。但不幸的是，這種認知不曾妨礙看似值得信賴的中心化管理機構和自詡的專家持續向用戶兜售更新穎的資訊安全技術。可惜這些技術屢屢發生意外，例如：

  - [瑞士Crypto公司的安全漏洞機器](https://en.wikipedia.org/wiki/Crypto_AG#Compromised_machines)
  - [Skype的竊聽後門](https://en.wikipedia.org/wiki/Skype_security#Eavesdropping_by_design)
  - [破譯EncroChat](https://en.wikipedia.org/wiki/EncroChat)
  - [其他臭名昭著的數據洩露](https://en.wikipedia.org/wiki/List_of_data_breaches)

這些種種意外都讓用戶後悔盲從，不應該再盲目相信業界推廣的各種只是看似專業的安全技術。有見及此，西蒂姆(Citum)作出了三個悲觀但嚴謹的資訊安全設計前設。

{: style="color: navy; font-size: 100%;"}
|#| **設計前設** | 描述 |
|:--:|:--:|:--|
|**1**| **無人可信** | 參與者容易犯錯 |
|**2**| **權力腐敗** | 權利即系統漏洞 |
|**3**| **天下無密** | 加密文並不安全 |

資訊安全入侵者大可以通過種種手段入侵西蒂姆(Citium)的數據，例如通過 **1、挑撥策反**；**2、權柄濫用**；或 **3、破解密文** 這些方法。我們甚至再假說入侵者竟然成功地揭發了本來不想被外人得知的私人數據內容！但因為基於西蒂姆的設計前設，即使事已至此，西蒂姆用戶都依然能理直氣壯地否認參與分發這些數據內容，因為西蒂姆的系統設計註定其資訊本質真假難辨；不論規模多麼龐大、做工多麼精細的網絡安全偵查取證，最終都只會徒勞無功。除此之外，西蒂姆的 **「可推諉性」資訊安全功能大大降低了競爭對手或司法機關偵查或取證對付西蒂姆用戶的慾望**。

As we all know, it is fallacious thinking to appeal to centralized authority and novelty. But unfortunately, this knowledge cannot prevent seemingly trustworthy centralized governing bodies and self-proclaimed experts from peddling ever fancier InfoSec technologies to their users. A laundry list of disappointments has been blindsiding these users, such as

  - [Swiss Crypto AG's compromised machines](https://en.wikipedia.org/wiki/Crypto_AG#Compromised_machines)
  - [Skype's eavesdropping by design](https://en.wikipedia.org/wiki/Skype_security#Eavesdropping_by_design)
  - [Crackdown on EncroChat](https://en.wikipedia.org/wiki/EncroChat)
  - [other infamous data breaches](https://en.wikipedia.org/wiki/List_of_data_breaches).

In view of these repeated incidents, Citium proposes three (3) pessimistic yet stringent InfoSec design premises.

{: style="color: navy; font-size: 90%;"}
|#| **Design Premises** | Description |
|:--:|:--:|:--|
|**1**| **Trust<br>No One** | Participant is fallible. |
|**2**| **Power<br>Corrupts** | Rights are exploitable. |
|**3**| **No<br>Secrecy** | Cipher is vulnerable. |

In face of an intruder successfully uncovering private data in Citium through **1. inciting defection**; **2. power abuse;** or **3. ciphertext hack**, Citium users can still justifiably deny that they have ever been involved because all security forensics are futile, no matter how extensive and meticulous they are. Citium inevitably makes the data source obscured and inadmissible. Besides, **Deniability, as an InfoSec feature, greatly reduces the desire of any competitor or judicial authority to investigate or obtain evidence against users of Citium**.

### 服務可供性<br>Availability

如果黑客持有極其強大的攻擊資源，他們可以侵害得到西蒂姆的通信網絡嗎？不可以的，因為即使所有其他西蒂姆節點被攻陷，西蒂姆客戶端應用程序的信息傳遞也始終可用，因為**西蒂姆數據的動態傳輸搭載在BitTorrent和比特幣網絡上**。是的，你沒聽錯！西蒂姆不僅僅是沒有中央服務器（這基本杜絕了突襲、關機、強制交出數據等行爲），而且西蒂姆的數據傳輸也是依靠別人的P2P基礎網絡設施。因此，從此可以告別服務器和節點中斷的種種顧慮！黑客需要實際奪取西蒂姆節點位於所有國家的所有設備，如手機、路由器和內容服務器，以阻礙西蒂姆網絡傳輸圖像、語音和視頻等大文件的性能，也僅僅只是影響了傳輸的性能。言下之意，這種全面性的奪取不僅是極不可能的事，而且是必然會引起廣泛關注的矚目的行為。對於大多數威脅行為者來說，這實在是太過誇張了，不值得考慮。相比之下，執法部門如果針對EncroChat等大眾化的安全聊天服務，只需要一次性而謹慎地拆除其中心化的消息中繼服務器或聯系人目錄服務器，就可以一了百了。與此同時，大多數用戶可能會依然在不知不覺中繼續使用該服務，而完全沒留意到自己的ID和通訊數據已經被秘密泄露了。幸運的是，西蒂姆用戶永遠不用擔心這種事故。西蒂姆網絡中的連接設備節點數量只會與日俱增，因為每一個在線的西蒂姆客戶端應用都是一個活躍的節點，它既為自己服務，也為去西蒂姆中心化網絡中的其他節點服務。因此，**隨著時間的流逝，削弱或破壞西蒂姆去中心化網絡的難度只會呈幾何級數增加，而反觀SkyECC等中心化服務提供商，它們的系統在越來越流行的同時，不可避免地亦提高了其數據泄露風險**。從技術上講，在資訊安全意義上，西蒂姆節點的去中心化網絡是在PGP加密方案的基礎上進行進一步的分層防禦，使得西蒂姆的通信可以被否認，而且是量子安全的。這是其他任何供應商都無法提供的獨特服務。

Can someone use an unimaginably large amount of resources to attack Citium so that it fails? No, because Citium client app messaging is always available even if all the other Citium nodes have been taken down because **dynamic transmission of Citium data piggybacks on BitTorrent and Bitcoin networks**. Yes, you heard correctly. Not only that Citium has no central servers, which essentially renders raiding, shut down, or forces to turn over data impossible, but also that its data transmission relies on someone else's P2P network infrastructures. Thus, say goodbye to the server and node outages! A threat actor needs to physically seize ALL devices, such as phones, routers and content servers in ALL countries, where the Citium nodes are situated, to hamper the performance of the Citium network in transferring large files, such as image, voice and video. Not to mention that the takedown is not only highly improbable but a glaring act bound to draw attention. It is just too pyrrhic for most of the threat actors to contemplate. In contrast, law enforcement who is targeting popularized secure chat service, such as EncroChat, would only require a one-time, yet discreet, takedown of their centralized messaging relay or contact directory servers. Most users may unknowingly continue to use the service while their IDs and data have already been covertly compromised. Luckily, Citium users never have to worry about this kind of mishaps. The number of connected device nodes in the Citium network are only growing day by day because every online Citium client app is an active node that serves itself as well as everyone else in the decentralized network. Therefore, **crippling or compromising the Citium decentralized network is only getting geometrically harder and harder as time passes while centralized service providers, such as SkyECC, inevitably heighten their data breaching risk as they gain in popularity**. Technically, in the infoSec sense, the decentralized network of Citium nodes is a layered defense on top of the PGP-encryption scheme, making Citium communications deniable and quantum-safe. This is a unique service unavailable by any other provider. 



## 資訊安全亮點<br>InfoSec Highlights

傳統來說，為了方便用戶使用密碼系統，折衷起見，中心化的系統的「權益持份者」(stakeholders)持有用戶的賬戶ID、密碼和個人信息授權訪問和服務。但往往這些折衷辦法都會引致無可挽回的副作用，例如數據洩露、強迫和勒索攻擊。幸運的是，現代密碼學技術賦予了設計者空間創造更優質的密碼系統：既可以祛除這些傳統常規的權利和權力，同時又不影響密碼系統的整體可用性！

西蒂姆(Citum)充分利用了這些久經考驗的技術構建了一個免費的、開源代碼的、完全去中心化的、[無需准入許可的區塊鏈系統](https://en.wikipedia.org/wiki/Blockchain#Permissionless)，並採用了密碼學上堅不可摧的資訊安全機制，例如 __混合加密系統__、__門限加密系統__、__無差別網樹多點傳送__（IMTM） 和 __分身馬甲帳號__。西蒂姆(Citum)當前的版本能兼容 __文字__、__音像__、__視像__ 和 __即時音訊__ 的數據。使用西蒂姆(Citum)建造的去中心化應用程序（dApp）能享有非凡的數據安全功能，例如 __可推諉性__，非常適合用於建造 **[OTS無記錄通訊](https://en.wikipedia.org/wiki/Off-the-Record_Messaging)即時通訊系統**（OTS-IMS）。

{: .box-success}
**服務器IP地址混淆：** 服務器IP地址混淆（SIPO）是西蒂姆(Citum)的獨特功能，可以讓HTML5的內容訪問者既可以訪問到內容但無從得知其服務器的來源IP地址，不單能有效 **防止分散式阻斷服務攻擊（DDoS）**，更可以從IP地理情報層面杜絕情報收集，有效 **防止網絡服務器被拆卸和扣押**。

Conventionally, compromising with usability, centralized stakeholders of a cryptosystem hold users' account ID, password, and personal information to authorize access and service, which may all lead to irreparable blowback, such as data breaches, coercion and blackmail attacks. Luckily, modern cryptography technologies enable designers to create better cryptosystem: do away with these rights and power while still retaining the overall usability of cryptosystems!

Citium take full advantage of these time-tested proven technologies to establish a free, open-source, fully decentralized, [permissionless blockchain](https://en.wikipedia.org/wiki/Blockchain#Permissionless) that features [cryptanalytically unbreakable](https://en.wikipedia.org/wiki/Information-theoretic_security) cryptosystems and InfoSec mechanisms,  such as [**Hybrid Cryptosystem**](https://en.wikipedia.org/wiki/Hybrid_cryptosystem), [threshold cryptosystem](https://en.wikipedia.org/wiki/Threshold_cryptosystem), **indiscriminate mesh-tree multicast** (IMTM), and **sockpuppetry**. Citium's current build is capable of serving **text**, **image**, **video** and **real-time voice** data. Decentralized Apps (dApps) built on Citium can enjoy extraordinary data security features, such as **deniability**, which is well-suited to build [**Off-the-Record Messaging (OTR)**](https://en.wikipedia.org/wiki/Off-the-Record_Messaging) **Instant Messenger System**.

{: .box-success}
**Server IP Obfuscation:** Server IP Obfuscation (SIPO) is a unique feature of Citium. It can hide a server's originating IP address from its visitors while letting them visit HTML5-based content on the server seamlessly. Not only can SIPO effectively **prevent distributed denial-of-service (DDoS) attacks**, but it can also curtail IP intelligence gathering (e.g. geolocation lookup), effectively **preventing web server takedown and seizure**.

### 安全起見的取舍<br>Security Tradeoff

為什麽我觀察到西蒂姆的信息发送和接收偶爾會有延遲？簡短來說，偶爾的延遲是我們為額外的資訊安全起見而付出的代價。延遲的程度主要取決於信息的大小。例如文字信息的體積較小，延遲通常會在幾秒鐘內解決。但如果是圖片、語音片段或視頻，體積較大，延遲時間則會稍長，但也不會超過幾分鐘。在你等待的時候，西蒂姆正忙著用三重加密技術對你的信息進行加密，分別是ECDSA、BLOWFISH和XXTEA。值得一提的是，ECDSA是比特幣網絡使用的加密方案，它經受住了時間的考驗。由於比特幣的市值已達數千億美元，因此，哪怕是破解其中的一小部分，都意味著中了彩票頭獎或證明了黑客的能力。盡管有如此豐厚的激勵機制，依然一直沒有人能夠破解它。然而ECDSA之所以沒有被更廣泛地被應用起來是因爲它對算力需求比較大。移動設備需要時間來處理加密運算，繼而導致了偶爾的延遲。除吃之外的延遲是投遞過程，指的是將切片加密文本投向P2P網絡（即西蒂姆、BitTorrent、Bitcoin），因為去中心化系統中的資訊傳達時長不像中心化系統中的那樣可被準確預測。更不用說，同時接收端還要忙著獲取這些微小的加密信息碎片，然後解密並重新組合成原始的可讀格式。這個傳輸過程比大多數其他即時通訊工具要慢，但對於重視保密性的西蒂姆用戶來說，這是必要的性能和安全權衡利弊之後的取舍。從技術上講，消息的切片是「門限加密算法」 (threshold cryptography) 中的一個概念，它使得西蒂姆具有「後量子抗性」(post-quantum resistant)。通俗點說就是就算黑客是一個未來人，他帶著強勁量子電腦解密器回來到今天，也無法揭露原文。

Why do I observe occasional delay sending and receiving message(s) thru Citium? The short answer is that the occasional delay is the price we pay for the extra peace of mind in security. The extent of a delay highly depends on the size of a message. If it is a text message, which is small in size, the delay will normally be resolved in a few seconds. But if it is a picture, voice clip or video, which is large in size, the delay will be slightly longer but not longer than a couple of minutes. While you are waiting, Citium is busy encrypting your message with a triple layer of encryption, namely ECDSA, BLOWFISH, and XXTEA. Notably, ECDSA is the encryption scheme used by the Bitcoin network, which has stood the test of time. As the market capitalization of Bitcoin is already in the hundreds of billions of dollars, cracking even a fraction of it means jackpot or attestation to a hacker's ability. In spite of the incentives, no one has been able to crack it. The only reason why ECDSA has not been adapted more widely is due to its hunger for computational power. Mobile devices need time to process the encryption which contributes to the occasional delay. Furthering the delay is the casting of sliced ciphertexts to the P2P networks (i.e. Citium, BitTorrent, Bitcoin) because the ETA in decentralized systems is not as predictable as those in centralized ones. Not to mention, all the while the recipient end is busy fetching these tiny encrypted pieces of message, then decrypting and reassembling them back to the original, readable format. The transmission process is slower than most of the other instant messengers but it is the necessary performance and security tradeoff for Citium users who value confidentiality above all. Technically, the slicing of messages is a concept in threshold cryptography which makes Ctium post-quantum resistant. In plain English it means that even threat actors who come back from the future, armed with quantum strength deciphers, cannot reveal the original text.


## 與免費應用不同之處<br>Differs from FREE App

西蒂姆與市場上其他即時通訊軟件相比如何？免費的應用程序，如Signal、Telegram、WhatsApp、Facebook Messenger和微信，都會通過電子郵件、短信或電話等方式，獲得並使用至少一個個人識別碼來識別和追蹤你，它們可以追蹤到你的真實身份。這些公司的隱私政策決定了他們的用戶信息是不安全的。更糟糕的是，他們中心化管理的商業模式使他們容易受到審訊和脅迫。這意味著他們更願意為了自己的利益而泄露你的信息，因為他們有權在未經用戶許可的情況下向第三方发布用戶信息。另一方面，付費應用，如SkyECC，會將用戶ID分配給你，因此任何擁有你ID的人都有可能找到你、知道你具體在哪裏。西蒂姆保證你的隱私，從付款、安裝和客戶服務的過程中，絕對不會詢問你的任何信息。除非你主動聯系我們，我們的客服人員不會知道你的存在。私人電子數字證書將代替用戶名和密碼焊接到您的手機上。它將使您免於用戶名和密碼組合泄露、ID盜竊、釣魚、惡意隨機ping消息和垃圾廣告。我們沒有中央服務器，所以任何DDoS攻擊或數據綁架的企圖，從西蒂姆的設計上來說都是不可能的。您是唯一一個可以控制何時、如何以及與誰聊天的人。

Free apps, such as Signal, Telegram, WhatsApp, Facebook Messenger and WeChat, obtain and make use of at least one personal identifier(s), such as through email, SMS or phone, to keep track of you. They can lead back to your real identity. Privacy policies of these companies dictate that their user information is insecure. To make matters worse, their centralized-managed business models make them vulnerable to coercions. It means that they are more than ready to give away your information for their own sake as they have the right to release user information to third parties without user permission. On the other hand, paid apps, such as SkyECC, assign user ID to you so anyone with your ID could potentially locate you and knock on your door. Citium guarantees your privacy by absolutely NOT ASKING for anything about you from the process of payment, installation and to customer service. Our customer service agents do not know about your existence unless you reach out to us. A private e-cert will weld to your phone instead of user ID and password. It will free you from username and password combination leaks, ID theft, phishing, malicious random ping of messages and trash ads. We have no central server so any DDoS attack or attempt to data kidnapping is, by design, impossible. You are the only one who controls when, how and with whom you are chatting.

### 布偶賬戶<br>Sockpuppeting Accounts

除了隱私問題，從加密算法的角度來看，所有這些免費應用都會发放用戶用來加密信息的公鑰，這樣公司只要知道誰在使用哪個公鑰，就能知道用戶是誰。相比之下，每個西蒂姆用戶都會发放自己的公鑰。事實上，你的每一個西蒂姆聯系人都是通過一些代理賬戶與你進行通信的，這些賬戶全部都是西蒂姆在**「頻外驗證」(out-of-band verifications)** 時為你的聯系人單獨創建的。你的聯系人不知道這些賬戶是只給自己的、還是給別人的。這種方案從本質處杜絕你的聯系人在未來背叛你，因為他們根本無法無可辯駁地證明他們在與你對話。在西蒂姆的溝通網絡中，所有人都是經過這種被稱為「布偶賬戶」 (sockpuppeting accounts)的虛擬身份和別人對話 ，沒有人知道誰在通過它們說話，這樣西蒂姆中的**每個人都可以始終保持似着「合理的可否認性」(plausible deniablity)**。

Apart from privacy issues, from the encryption algorithm point of view, all these free apps issue the public keys that their users use to encrypt the messages so that the companies know who the users are simply by knowing who's using which public key. In contrast, each Citium user issues his/her own public key. In fact, every one of your Citium Contacts are communicating with you through some proxy accounts which Citium created for your Contacts individually during **out-of-band verifications**. Your Contacts do not know if the accounts are only for them or they're for someone else as well. This scheme essentially disallows your Contacts from turning against you in the future because they cannot prove irrefutably that they are talking to you. Everyone talks through "sockpuppeting accounts" which no one knows for sure who's talking through them so that **everyone in Citium can maintain plausible deniability at all times**.


## 可抵賴可推諉 ✓<br>Deniability ✓

很多中心化通訊系統自稱帶有 *不可否認性* 作為訊息安全功能之一，因為他們的用戶本身目標就是希望能系統化地讓溝通對手承擔法律責任。西蒂姆(Citum)不是為這種目標而設計的，而是提供了完全相反的資訊安全功能：**可推諉性**。「可推諉性」是針對[**強制披露**](https://en.wikipedia.org/wiki/Key_disclosure_law)和其後患的最後一道防線。

一些服務商，比如說Facebook，試圖提供可推諉性，但卻沒能排除他們自己的嫌疑。這裡直接引用2017年5月18日Facebook 發布的、基於他們的 Facebook Messenger[《秘密對話技術白皮書》](https://about.fb.com/news/2016/07/messenger-starts-testing-end-to-end-encryption-with-secret-conversations/)中的一段話。

> *第三方可推諉性*屬性確保了**Facebook以外的任何一方**都無法通過密碼學方法確定報告的有效性。

這意味著 **Facebook仍然可能被強制脅迫披露，甚至自願接受監控，更不用說數據洩露的可能性了**。所以，Facebook 的秘密對話功能極其量提供了半生不熟的「可推諉性」。反觀，西蒂姆(Citum)提供了「完全的可推諉性」(full deniability)；沒有參與者或中轉機器可以以任何形式犧牲「可推諉性」。

西蒂姆(Citum)去中心化系統協議背後的主要動機是為對話參與者提供一個可推諉的溝通網絡，同時保持對話的機密性，例如現實生活中的私人對話，或新聞採購中的記錄。 與之相反的是，某些中心化通訊系統卻輸出可以稍後用作通訊事件和參與者身份的可驗證記錄。

Many centralized communication systems claim to have *non-repudiability* as one of their FnfoSec features because their users purposely want to systematically hold their communicating parties legally accountable. Citium does not cater to that purpose. In fact, Citium offers the complete opposite: **deniability**, which is the last line of defense against [**forced disclosure**](https://en.wikipedia.org/wiki/Key_disclosure_law) and its repercussions.

Some service providers, such as Facebook, are trying to offer deniability but they fail to rule themselves out of the picture. Here a direct quote from the [Technical Whitepaper of Messenger Secret Conversations](https://about.fb.com/news/2016/07/messenger-starts-testing-end-to-end-encryption-with-secret-conversations/) in Facebook Messenger published on May 18, 2017:

> "[T]he *third-party deniability* property ensures that **no party outside of Facebook** can cryptographically determine the validity of a report."

It implies that **Facebook can still be vulnerable to forced disclosure and or even voluntarily submitting to surveillance, not to mention the chance of data breach**. Thus, Secret Conversations of Facebook's Messenger offers half-baked deniability at best. In contrast, Citium offers full deniability; no participant or mediatory machine can compromise deniability in any way.  

The primary motivation behind Citium decentralized system protocol is to provide a deniable communication network for the conversation participants while keeping conversations confidential, like a private conversation in real life, or off the record in journalism sourcing. This is in contrast with some other centralized communication systems that produce output which can be later used as a verifiable record of the communication event and the identities of the participants.

## SafeMail & SDTP

西蒂姆(Citum)繼承自開源項目：[Bitmessage](https://en.wikipedia.org/wiki/Bitmessage) 與 [SafeMail](https://github.com/maikejonne/safeemail)。儘管西蒂姆(Citum)即時通訊系統項目與 SafeMail 協議完全兼容，但我們還是決定將其稱為 Citium Instant Messenger（CIM）<i class='fa fa-envelope-o' style='color:blue'></i> 而不是Citium Mail，因為它很多方面（用戶界面和操作）形似大多數市場上流行的即時聊天工具軟件。

CIM和SafeMail都使用的通信機制是「安全數據傳輸協議」 [SDTP](https://en.wikiversity.org/zh-tw/SDTP)。 SDTP規定，所有形式的通信都將相同的通用通知推送給預期的接收者。收到通知後，要求預期的收件人自己檢索消息。

Citium is inherited from the open-source projects: [Bitmessage](https://en.wikipedia.org/wiki/Bitmessage) and [SafeMail](https://github.com/maikejonne/safeemail). Although the Citium Instant Messenger project is fully compatible with SafeMail protocol, we decide to call it Citium Instant Messenger (CIM) <i class='fa fa-envelope-o' style='color:blue'></i> instead of Citium Mail because it is in many ways (e.g. the user interface and operation) more akin to most of the popular instant messengers in the marketplace.

The communication mechanism used by both CIM and SafeMail is the "Safe Data Transfer Protocol" [(Safe Data Transfer Protocol)](https://en.wikiversity.org/zh-tw/SDTP). SDTP dictates that all forms of communication push the same generic notification to the intended recipients. Once notified, the intended recipients are required to retrieve the messages on their own.

### Push & Pull（Fitch）<br>推播與拉取（撲捉）

大多數即時通訊系統都設計為將通訊信息主動推播到「預期收件人」(intended recipients)的客戶端應用程序上。然而，在西蒂姆(Citum)即時通信系統（CIM）<i class='fa fa-envelope-o' style='color:blue'></i> 中，推送通知只限於一般的文字提醒（即“You have a new message.”；中文翻譯：“您有一條新消息”），並以加密的加密文本（“密文”）的方式將消息的極微小的片斷發送給目標收件人。預期的收件人需要自己去從芸芸眾多西蒂姆(Citum)的節點 <i class='fa fa-cubes'></i>（即服務和用戶節點）去撲捉、拉取消息，最終與其手頭上收到了的極微小的片斷重組一起，才能獲取原有的、正確的信息。

Most instant messenger systems are designed that messages are directly pushed onto the client apps of the intended recipients. However, in Citium Instant Messenger (CIM) system <i class='fa fa-envelope-o' style='color:blue'></i>, push notification is limited to a generic text reminder (i.e. "You have a new message.") and a very thin slice of the message encrypted in a ciphertext being sent to the intended recipients. The intended recipients are required to actively fetch the remaining slices on their own from the sea of Citium nodes <i class='fa fa-cubes'></i> (i.e. service & user nodes), and eventually, recombining with the thin slice at hand to acquire the original, correct message.

## 門限加密系統<br>Threshold Cryptography

在任何密碼系統中，將純文本訊息轉換為密文再轉換回來的最重要組成部分是密鑰。 密鑰是密碼學整體安全性的基礎，這意味著密鑰的保護也已成為重要的命題。 可以減少密鑰洩露風險的一種方法是門限加密。 門限加密學的基本思想是，在將密鑰分發給相關節點 <i class='fa fa-cubes'></i> 之前，將其分為 N 個份額。 為了再次生成密鑰，不需要所有共享。 相反，一個實體只能組合 K 個份額（稱為門限）來重建密鑰。 換句話說，即使將密鑰分為 N 個份額，也僅需要 K 個份額即可重建密鑰。

In any cryptographic system, the most important component of transforming plaintext messages to ciphertext and back is the key. The key is the foundation of the overall security of cryptography, which means that the protection of the key has also become an important issue. One of the methods that can reduce the risk of the key being compromised is threshold cryptography. The basic idea of threshold cryptography is that the key is divided into n shares before being distributed to the involved entities. In order to generate the key again, not all the shares are needed. Instead, an entity can combine only k shares (known as the threshold value) to reconstruct the key. In other words, even though the key is divided into n shares, only k out of shares is needed to reconstruct the key.

### 作為額外安全措施<br>As Extra Security

歷來只有具有非常有價值的秘密（例如證書頒發機構，軍隊和政府所隱藏的）才使用門限加密系統技術。西蒂姆(Citum)的門限加密方案是確保密鑰安全並防止密鑰被洩露的額外步驟。這是因為對手將需要攻擊 K 個節點 <i class='fa fa-cubes'></i> 以便獲得 K 個份額來生成密鑰，而不是損害一個節點 <i class='fa fa-cube'></i> 則可來獲取密鑰。這使得攻擊難度大增。

Historically, only organizations with very valuable secrets, such as certificate authorities, the military, and governments made use of threshold cryptosystem technology. Threshold cryptography scheme in Citium is an advanced and extra step to securing the key and to preventing the key from being compromised. This is because an adversary will need to attack k node(s) <i class='fa fa-cubes'></i> in order to obtain k shares to generate the key, rather than compromising one node <i class='fa fa-cube'></i> to obtain the key. This makes it more difficult for an attacker.

在西蒂姆(Citum)中，不僅是密鑰，而且消息被加密後的密文本身也與密鑰的N個共享碎片一起被分割成N個碎片。共享的密碼文本（"密文"）被無差別地、不加區分地分發到盡可能多的西蒂姆(Citum)節點 <i class='fa fa-cubes'></i>（即服務和用戶節點）。這樣一來，所有的內容對所有節點的所有者都是良性的。任何人都不需要對分發的任何信息負責。沒任何人知道在他們自己的節點 <i class='fa fa-cubes'></i> 上在分發的內容是什麼、從哪裡來或給誰發的。在西蒂姆(Citum)的門限密碼系統設計是 K = N，這意味著所有的 N 個份額都要被收集和合併。這是門限密碼系統最嚴格的資訊安全设置。

In Citium, not only the key, but also the ciphertext (i.e. encrypted message) itself are divided into n slices along with the  n shares of the key. The shared ciphertexts are distributed indiscriminately to as many Citium nodes <i class='fa fa-cubes'></i> (i.e. service & user nodes). In doing so, all contents are benign to the owner of all nodes <i class='fa fa-cubes'></i>. No one is needed to be held responsible for any message distributed. No one knows what/whence/to whom they are distributing on their nodes <i class='fa fa-cubes'></i>. In the Citium's threshold cryptosystem, it is designed that k = n. It means all n shares have to be collected and combined. It is the most stringent InfoSec setting on the threshold cryptosystem.

## 資訊安全總結<br>InfoSec Summary

以下是一個西蒂姆(Citum)的資訊安全（有時簡稱為InfoSec）功能列表。資訊安全是一種通過減輕信息風險來保護信息的應用功能實踐。 它是信息風險管理的一部分。 它通常涉及防止或至少減少未經授權/不當訪問，使用，披露、破壞、刪除/銷毀、損壞、修改、檢查、記錄或貶值的可能性，也可能涉及減少事件如果不幸發生後的不利影響，例如「__强制性披露__」 (__force disclosure__) / 「__強制性密鑰披露__」 ([__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law))。

Here is a list of available InfoSec features on Citium. Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management. It typically involves preventing or at least reducing the probability of unauthorized/inappropriate access, use, disclosure, disruption, deletion/destruction, corruption, modification, inspection, recording or devaluation, although it may also involve reducing the adverse impacts of incidents (e.g. __force disclosure__ / [__mandatory key disclosure__](https://en.wikipedia.org/wiki/Key_disclosure_law)).

| :closed_lock_with_key: | 資訊安全功能<br>InfoSec | 風險與威脅<br>Risk & Threat |
|:--:|:--:|:--|
| ✓ | 無需許可<br>Permissionless | 審查<br>Censorship |
| ✓ | 機密性<br>Confidentiality | 信息洩露<br>Data Breach |
| ✓ | 完整性<br>Integrity | 篡改<br>Tampering |
| ✓ | 可用性<br>Availability | 阻斷服務攻擊<br>DDoS Attack |
| ✓ | 授權性<br>Authorization | 特權提升<br>Privilege Escalation |
| ✓ | 驗證性<br>Authentication | 欺骗<br>Spoofing |
| ✓ | 可推諉性<br>Deniability | 強制型透漏<br>Forced Disclosure |
| ✗ | 不可否認性<br>Non-Repudiation | 可否認性<br>Repudiation |

{: .box-note}
{: style="color: grey; font-size: 80%;"}
:closed_lock_with_key:: ✓ 有該功能; ✗ 無該功能
<br>
:closed_lock_with_key:: ✓ available feature; ✗ unavailable feature

### 下一章 / NEXT CHAPTER
[**可推諉性和不可否認性**](../deniability)<br>
[**Deniability & Non-Repudiation**](../deniability)
{: .myButton}
