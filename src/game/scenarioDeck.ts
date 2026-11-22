export interface Scenario {
  id: string;
  title: string;
  category: string;
  urgency: 'high' | 'critical' | 'medium';
  patient: string;
  description: string;
  requiredItemIds: string[];
  rationale: string;
  tip: string;
  timeLimitSec: number;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'sc-ohca',
    title: 'OHCA 到院前心肺功能停止',
    category: '高級救命急症',
    urgency: 'critical',
    patient: '70歲男性・無意識',
    description: '患者家中突然倒地呼叫無反應！評估無呼吸且無頸動脈脈搏，需立即心肺復甦！',
    requiredItemIds: ['aed', 'bvm', 'opa'],
    rationale: 'OHCA 應立即啟動高品質 CPR，儘速使用 AED 分析心律去顫，量測長度置入口咽管 OPA 維持呼吸道暢通防舌根下墜，並以甦醒球 BVM 正壓給氧通氣！',
    tip: '💡 口咽管長度測量：門牙至下顎角（或嘴角至耳垂），置入時先凸面向天花板再旋轉180度！',
    timeLimitSec: 30
  },
  {
    id: 'sc-arterial-bleed',
    title: '股動脈大噴血創傷',
    category: '大出血創傷',
    urgency: 'critical',
    patient: '35歲工廠工人・意識漸模糊',
    description: '機具割傷大腿內側，鮮紅色血液呈噴射狀湧出，幾秒內浸濕整條褲子！',
    requiredItemIds: ['tourniquet', 'gauze', 'gloves'],
    rationale: '四肢動脈大出血應立刻在傷口近心端 5~7 公分施打戰術止血帶並旋緊，紗布加壓包紮並記錄時間！',
    tip: '💡 止血帶是四肢噴血的救命關鍵，務必在時間標籤寫上施打時間！',
    timeLimitSec: 30
  },
  {
    id: 'sc-spinal-trauma',
    title: '車禍高能量撞擊脊椎疑慮',
    category: '重大外傷固定',
    urgency: 'high',
    patient: '22歲機車騎士・發抖覺得冷',
    description: '十字路口側撞拋飛5米，主訴頸部與後背強烈劇痛，雙腳發麻無法抬起，全身發抖直喊好冷！需固定頸椎、上背板並立即保暖！',
    requiredItemIds: ['c_collar', 'spine_board', 'blanket'],
    rationale: '高能量撞擊合併神經學症狀，必須立即徒手固定頭頸並上頸圈，以長背板軸線翻身固定，蓋棉被防失溫！',
    tip: '💡 創傷低體溫會破壞凝血功能，長背板固定後務必注意保暖！',
    timeLimitSec: 30
  },
  {
    id: 'sc-asthma-attack',
    title: '重度氣喘發作合併低血氧',
    category: '內科呼吸急症',
    urgency: 'high',
    patient: '28歲女性・端坐呼吸發紺',
    description: '嚴重呼吸困難說不出完整句子，嘴唇發紫，血氧飽和度 SpO2 掉至 80%！',
    requiredItemIds: ['nrm_mask', 'pulse_oximeter', 'stethoscope'],
    rationale: '重度缺氧應立即給予非再吸入型氧氣面罩（NRM 15L/min），夾血氧機連續監測，以聽診器評估哮鳴音！',
    tip: '💡 NRM面罩使用前，須先用手指堵住出氣孔將蓄氣袋充飽氧氣！',
    timeLimitSec: 30
  },
  {
    id: 'sc-hypoglycemia',
    title: '低血糖急症（血糖 Low 處置）',
    category: '代謝性急症',
    urgency: 'high',
    patient: '68歲糖尿病患・昏睡冷汗・血糖 Low',
    description: '晨起未進食注射胰島素後癱倒沙發，呼之昏睡冷汗直冒，血糖機檢測數值顯示「Low」！需備妥監測與升糖器材！',
    requiredItemIds: ['glucometer', 'iv_bag', 'glucose_powder'],
    rationale: '低血糖急症應以血糖機密切監測；若昏迷無法吞嚥須建立點滴（IV）輸液途徑給糖，意識清楚能吞嚥時則可給予口服糖粉！',
    tip: '💡 血糖機顯示「Low」代表血糖極度危險（通常 < 20 mg/dL）！必須精準評估意識與吞嚥反射決定由靜脈點滴或口服糖粉給糖！',
    timeLimitSec: 30
  },
  {
    id: 'sc-burn-scalding',
    title: '二度大面積沸水熱液燙傷',
    category: '燒燙傷處置',
    urgency: 'high',
    patient: '4歲幼童・劇痛嚎哭',
    description: '誤翻熱湯造成前胸與雙前臂大片紅腫脫皮、水泡迅速形成，劇烈疼痛！',
    requiredItemIds: ['saline_bottle', 'burn_kit', 'space_blanket'],
    rationale: '大面積燙傷應首選無菌生理食鹽水沖洗降溫，以燒傷包無菌覆蓋保護創面，並立即以保暖用鋁箔包裹防止體溫大量散失造成低體溫！',
    tip: '💡 大面積燒燙傷皮膚屏障受損極易迅速失溫，降溫與覆蓋後務必使用保暖用鋁箔防範低體溫危象！',
    timeLimitSec: 30
  },
  {
    id: 'sc-field-delivery',
    title: '急產接生（胎頭著冠露出）',
    category: '婦產急症',
    urgency: 'critical',
    patient: '32歲產婦（第三胎）・陣痛劇烈',
    description: '救護員抵達時產婦頻繁用力，內褲掀開已見胎兒頭頂露出產道口！',
    requiredItemIds: ['ob_kit', 'space_blanket', 'sterile_gloves'],
    rationale: '急產接生應穿戴無菌手套避免母體與新生兒感染，迅速備妥生產包迎接胎頭娩出，胎兒擦乾後立即使用保暖鋁箔包裹防失溫！',
    tip: '💡 接生現場須全程維持無菌原則！穿戴無菌手套並以無菌鋪單迎接胎兒，迅速保暖防範新生兒低體溫！',
    timeLimitSec: 30
  },
  {
    id: 'sc-forearm-fracture',
    title: '前臂骨折畸形骨擦音',
    category: '骨骼肌肉外傷',
    urgency: 'medium',
    patient: '19歲排球員・前臂成角變形',
    description: '救球重摔手著地，前臂中段可見外觀明顯畸形骨凸，劇烈疼痛伴隨局部腫脹！',
    requiredItemIds: ['sam_splint', 'elastic_bandage', 'triangular_bandage'],
    rationale: '四肢骨折固定應跨越上下兩關節，以軟鋁夾板（SAM Splint）塑形包覆，彈性繃帶固定，再以三角巾托吊！',
    tip: '💡 固定前後都必須評估末梢循環、感覺與運動功能（CSM/PMS）！',
    timeLimitSec: 30
  },
  {
    id: 'sc-vomit-airway-obstruction',
    title: '嘔吐物阻塞呼吸道窒息',
    category: '呼吸道異物急症',
    urgency: 'critical',
    patient: '50歲男性・昏睡對痛沒反應',
    description: '大量嘔吐後呼吸發出咕嚕水泡聲，呼叫與給予疼痛刺激均毫無反應，嘴唇發紫！需抽吸氣道、維持通暢並鑑別昏迷原因！',
    requiredItemIds: ['suction_catheter', 'opa', 'glucometer'],
    rationale: '呼吸道異物嘔吐物應立即以硬式抽吸管深入抽吸乾淨；病患深度昏迷對痛無反應且無嘔吐反射，應置入口咽管 OPA 防止舌根後墜，並立即以血糖機檢測排除低血糖昏迷！',
    tip: '💡 意識不清對痛沒反應之昏睡病患，務必量血糖排除低血糖；每次抽吸時間嚴禁超過 10~15 秒！',
    timeLimitSec: 30
  },
  {
    id: 'sc-violent-psychiatric',
    title: '精神異常躁動持刀防衛處置',
    category: '治安現場與自身安全',
    urgency: 'critical',
    patient: '40歲男性・情緒極度狂躁攻擊',
    description: '現場男子揮舞美工刀咆哮，砸碎玻璃家具，拒絕任何人靠近並揚言攻擊！',
    requiredItemIds: ['stab_vest', 'helmet', 'restraints'],
    rationale: '現場安全第一！未著防刺背心與救護安全頭盔前切勿貿然進入，待警力控制後以約束帶保護性約束運送！',
    tip: '💡 救護鐵則：救人之前，必須先保證救護人員自身的絕對安全！',
    timeLimitSec: 30
  },
  {
    id: 'sc-coronary-chest-pain',
    title: '急性胸痛疑似心肌梗塞 (STEMI)',
    category: '心血管急症',
    urgency: 'critical',
    patient: '58歲男性・胸口壓榨劇痛冒冷汗',
    description: '胸骨下壓榨性劇痛輻射至下巴與左肩，患者面色慘白冒冷汗！需立即執行心電圖與評估！',
    requiredItemIds: ['ekg', 'bp_monitor', 'pulse_oximeter'],
    rationale: '胸痛急症應立即施做 12 導程心電圖機 (EKG) 判讀有無 ST 段上升 (STEMI) 並提早傳輸醫院通報導管室，同時監測血壓與血氧！',
    tip: '💡 早期 12 導程 EKG 傳輸能大幅縮短心導管打通血管時間 (D2B 時間 < 90分鐘)！',
    timeLimitSec: 30
  },
  {
    id: 'sc-dyspnea-mouth-breathing',
    title: '呼吸喘且張口呼吸處置',
    category: '內科呼吸急症',
    urgency: 'high',
    patient: '65歲女性・呼吸急促張口呼吸',
    description: '患者呼吸短促且張口呼吸、胸悶不適，呼吸頻率達 28 次/分！需立即評估血氧、肺音並給予氧氣面罩處置！',
    requiredItemIds: ['pulse_oximeter', 'simple_mask', 'stethoscope'],
    rationale: '患者呼吸喘且張口呼吸時，應立即以血氧機監測周邊動脈血氧飽和度 (SpO2)，使用簡單型氧氣面罩提供穩定氧療，並以聽診器評估雙側肺部呼吸音！',
    tip: '💡 張口呼吸患者若使用鼻導管吸入氧濃度不穩定，首選簡單型氧氣面罩覆蓋口鼻提供 6~10 L/min 氧氣！',
    timeLimitSec: 30
  },
  {
    id: 'sc-unconscious-trauma',
    title: '意識不清創傷患者處置',
    category: '重大外傷固定與神經學評估',
    urgency: 'critical',
    patient: '45歲男性・高處墜落意識不清昏迷',
    description: '工地施工自三公尺鷹架墜落，頭部著地腫脹出血，呼叫無反應、意識不清昏迷！需評估瞳孔光反射並實施全身脊椎固定！',
    requiredItemIds: ['penlight', 'c_collar', 'spine_board'],
    rationale: '外傷昏迷患者必須立即以瞳孔筆檢查雙側瞳孔大小及對光反射（評估顱內壓升高與腦疝危象），並迅速配戴頸圈及上長背板固定，防止二次脊髓神經損害！',
    tip: '💡 創傷昏迷患者一律視同脊椎損傷！雙側瞳孔大小不對稱（Anisocoria）常提示嚴重的顱內出血或腦水腫！',
    timeLimitSec: 30
  },
  {
    id: 'sc-mild-hypoxia-fever',
    title: '發燒咳嗽輕度缺氧處置',
    category: '呼吸道與感染防護',
    urgency: 'medium',
    patient: '72歲長者・發燒咳嗽・SpO2 91%',
    description: '發燒咳嗽輕度缺氧（SpO2 90~93%），沒有張口呼吸，無法耐受面罩之穩定輕症患者！需給予氧療與防護！',
    requiredItemIds: ['nasal_cannula', 'oxygen_tank', 'mask'],
    rationale: '輕度缺氧且無張口呼吸、無法耐受面罩之穩定輕症患者，給予氧氣鼻導管最為合適；搭配三合一攜帶氧氣供氧，並請病患配戴口罩防範呼吸道飛沫傳播！',
    tip: '💡 氧氣鼻導管提供 1~6 L/min 氧氣（濃度約 24~44%）；發燒咳嗽者外層覆蓋外科口罩，兼顧氧療與感控防護！',
    timeLimitSec: 30
  },
  {
    id: 'sc-infectious-disease',
    title: '法定高傳染性疾病防護處置',
    category: '法定傳染病與感控防護',
    urgency: 'critical',
    patient: '45歲男性・高燒持續咳嗽・疑似法定高傳染病',
    description: '接獲指揮中心通報，病患具流行病學接觸史，持續高燒劇烈咳嗽且喘，疑似法定飛沫與空氣高傳染性疾病！接觸前務必執行最高規格個人防護與清消！',
    requiredItemIds: ['gown', 'alcohol_spray', 'n95_mask'],
    rationale: '面對法定飛沫與空氣高傳染性疾病，出勤人員接觸前必須穿著長袖防水防護衣保護身體，佩戴密合之 N95 口罩阻絕微細氣膠與飛沫核，並備妥 75% 酒精噴霧於接觸前後即時消毒手部與裝備，落實最高感控防護！',
    tip: '💡 面對法定飛沫/空氣傳播急症：穿著防護衣、佩戴 N95 口罩是阻絕感染的第一道防線；救護全程與脫除裝備時務必以酒精噴霧徹底消毒手部！',
    timeLimitSec: 30
  },
  {
    id: 'sc-minor-abrasion-dirty',
    title: '跌倒擦傷傷口髒污清潔處置',
    category: '輕度創傷與換藥',
    urgency: 'medium',
    patient: '10歲男童・跌倒擦傷膝蓋手肘・傷口髒污',
    description: '跌倒受傷小擦傷，傷口表面夾雜砂石與泥土髒污！需清潔創面、移除異物並包紮防感染！',
    requiredItemIds: ['saline_bottle', 'cotton_swabs', 'gauze'],
    rationale: '淺層擦傷夾雜髒污泥沙時，應先以沖洗用生理食鹽水大量沖洗除去粗大污物，再以無菌棉枝由傷口內側向外側輕柔清潔滾動帶走附著砂石，最後覆蓋無菌紗布保護創面防止外界污染感染！',
    tip: '💡 傷口清創換藥原則：由內往外環狀消毒清潔，切勿來回塗抹避免將外圍細菌帶回傷口中心；以棉枝清潔細部砂石後，再以無菌紗布覆蓋包紮！',
    timeLimitSec: 30
  },
  {
    id: 'sc-dressing-fixation',
    title: '創傷敷料包紮固定器材選用',
    category: '創傷包紮與敷料固定',
    urgency: 'medium',
    patient: '30歲女性・肢體廣泛擦傷敷料固定',
    description: '傷口清創並覆蓋無菌紗布敷料後，為了確實固定敷料、防止滑脫移位並保護傷口，可以使用哪些器材進行固定？',
    requiredItemIds: ['micropore_tape', 'elastic_bandage', 'triangular_bandage'],
    rationale: '無菌敷料覆蓋傷口後，需依解剖部位與受力狀況選擇合適器材確實固定：紙膠帶可貼合邊緣防止翹起，彈性繃帶可環形或8字包紮加壓固定，三角巾則可大面積包覆或懸吊托吊患肢！',
    tip: '💡 敷料固定三大耗材：紙膠帶（貼合邊緣固定）、彈性繃帶（四肢環狀加壓包紮）、三角巾（大範圍包覆懸吊固定），三者皆為救護敷料固定關鍵器材！',
    timeLimitSec: 30
  },
  {
    id: 'sc-npa-ankle-splint',
    title: '咽喉反射存在合併腳跟變形固定',
    category: '呼吸道維持與下肢骨折固定',
    urgency: 'high',
    patient: '55歲男性・呼吸異音有嘔吐反射・腳跟腫脹變形',
    description: '傷患呼吸有鼾音異音但咽喉嘔吐反射仍存在，右側腳跟著地劇痛且外觀明顯變形！需維持氣道暢通並實施足跟骨折塑型固定！',
    requiredItemIds: ['npa', 'splint_roll', 'elastic_bandage'],
    rationale: '患者呼吸道有異音但咽喉嘔吐反射存在時，禁用口咽管（OPA）避免誘發嘔吐，應選用軟質鼻咽管（NPA）維持呼吸道暢通；腳跟（跟骨）外傷變形則以具可塑性的捲筒式護木塑型包覆，並以彈性繃帶 8 字包紮穩固固定！',
    tip: '💡 臨床關鍵：咽喉反射尚存者首選鼻咽管 NPA（潤滑後斜面朝鼻中膈置入）；足踝與腳跟外傷以捲筒式護木塑型，再搭配彈性繃帶固定，固定前後切記評估末梢脈搏與感覺（CSM）！',
    timeLimitSec: 30
  },
  {
    id: 'sc-abdominal-bleed-exposure',
    title: '腹部大出血創傷暴露與包紮處置',
    category: '軀幹創傷與大出血處置',
    urgency: 'critical',
    patient: '38歲男性・腹部遭刺衣服浸滿鮮血',
    description: '傷患腹部衣物浸滿鮮血、面色蒼白冒冷汗！需立即剪開衣物暴露傷口評估、以紗布加壓止血並用三角巾完成腹部包紮！',
    requiredItemIds: ['trauma_shears', 'gauze', 'triangular_bandage'],
    rationale: '軀幹嚴重外傷出血應秉持「暴露（Exposure）」原則，先以救護剪刀迅速剪開厚重浸血衣物確認傷口位置與型態；隨即使用無菌紗布覆蓋傷口加壓止血，最後以三角巾完成腹部全範圍包紮固定！',
    tip: '💡 腹部創傷鐵則：嚴禁隔著衣物盲目止血！務必使用鈍頭剪刀剪除衣物看清傷口，以紗布加壓止血後，以三角巾大面積包紮固定！',
    timeLimitSec: 30
  },
  {
    id: 'sc-opioid-overdose',
    title: '疑似鴉片類藥物過量中毒',
    category: '中毒急症與呼吸抑制',
    urgency: 'critical',
    patient: '27歲男性・呼之不應呼吸微弱・針尖瞳孔',
    description: '現場發現空針劑，患者深度昏迷、呼吸頻率每分鐘僅 4 次發紺！需評估瞳孔光反應、正壓人工呼吸與血氧監測！',
    requiredItemIds: ['penlight', 'bvm', 'pulse_oximeter'],
    rationale: '鴉片類藥物中毒之經典三聯徵為昏迷、呼吸抑制與針尖樣瞳孔（Pinpoint pupils）。救護員必須以瞳孔筆檢查雙側瞳孔大小；因嚴重低換氣危及生命，需立即以甦醒球（BVM）輔助正壓給氧通氣，並夾上血氧機連續監測！',
    tip: '💡 臨床關鍵：雙側對稱如針尖般縮小（< 2mm）是鴉片類中毒強烈指標！第一要務是維持呼吸道並以 BVM 輔助通氣防缺氧腦病變！',
    timeLimitSec: 30
  },
  {
    id: 'sc-brainstem-stroke',
    title: '突發昏迷疑似腦幹中風出血',
    category: '神經急症與腦中風',
    urgency: 'critical',
    patient: '62歲男性・劇烈頭痛後昏迷・血壓極高',
    description: '吃晚餐時突喊後腦劇痛隨即倒地不省人事，呼之無反應、四肢癱軟！需評估瞳孔對光反應、監測血壓變化並輔助通氣！',
    requiredItemIds: ['penlight', 'bp_monitor', 'bvm'],
    rationale: '腦幹出血常急驟陷入深昏迷，必須以瞳孔筆檢查雙側瞳孔光反射與有無瞳孔不等大或針尖樣瞳孔（腦幹受壓迫）；以血壓機密集監測有無庫欣氏反應（血壓飆高、脈搏緩慢），並以甦醒球（BVM）維持呼吸與氧合！',
    tip: '💡 神經急症鐵則：瞳孔筆能快速鑑別大腦半球或腦幹病變；收縮壓飆高合併脈壓寬常為顱內壓極度升高徵兆！',
    timeLimitSec: 30
  },
  {
    id: 'sc-severe-hypothermia',
    title: '寒冬路倒環境性重度低體溫',
    category: '環境急症與失溫',
    urgency: 'high',
    patient: '68歲街友・雨夜路倒冰冷・意識模糊',
    description: '寒流雨夜臥倒巷弄衣物濕透，肢體冰冷僵硬、全身顫抖停止已陷入嗜睡！需全面防風阻絕散熱並評估末梢循環！',
    requiredItemIds: ['space_blanket', 'blanket', 'pulse_oximeter'],
    rationale: '重度失溫核心體溫低於 32°C 易引發致命心律不整。應脫除濕衣後，立即先裹上具高反射率的保暖用鋁箔鎖住人體輻射熱，外層覆蓋厚棉被阻絕冷空氣傳導，並以血氧機監測周邊脈搏與 SpO2！',
    tip: '💡 低體溫救護原則：內層鋁箔反射熱輻射＋外層棉被阻絕傳導對流；搬運時動作務必輕柔，防止誘發心室顫動（VF）！',
    timeLimitSec: 30
  },
  {
    id: 'sc-high-fall-trauma',
    title: '三樓高處墜落多重重大創傷',
    category: '高能量重大創傷',
    urgency: 'critical',
    patient: '36歲工班師傅・三樓施工墜落水泥地',
    description: '施工自約 9 公尺高處墜落，主訴全身劇痛、頸背劇痛雙腿發麻、右小腿外觀畸形！需全脊椎防護並固定骨折！',
    requiredItemIds: ['c_collar', 'spine_board', 'sam_splint'],
    rationale: '高能量垂直墜落（超過 6 米或 2 層樓以上）屬於最高等級重大創傷機制！救護員必須立即限制頭頸活動施打頸圈、使用長背板進行全身脊椎固定，並以骨折固定夾板為畸形肢體完成塑型固定！',
    tip: '💡 創傷救命守則：高處墜落一律視同頸椎與脊髓損傷！必須先上頸圈再翻身上長背板；肢體骨折固定應跨越上下兩關節！',
    timeLimitSec: 30
  },
  {
    id: 'sc-drowning-ohca',
    title: '溺水救起心肺功能停止處置',
    category: '環境急症與 OHCA',
    urgency: 'critical',
    patient: '16歲少年・泳池沉底救起無呼吸脈搏',
    description: '泳池沉底數分鐘救起，口鼻不斷湧出大量白色泡沫與積水，呼叫無反應、無脈搏！需清空積水氣道、正壓通氣並去顫！',
    requiredItemIds: ['suction_catheter', 'bvm', 'aed'],
    rationale: '溺水心跳停止之核心病理為嚴重低血氧！救護人員應立即以抽吸管深入抽吸清空口鼻大量泡沫與液體，立即以甦醒球（BVM）給予高品質正壓人工呼吸（給氧通氣為溺水救命之鑰），並貼上 AED 電極貼片分析心律！',
    tip: '💡 溺水 OHCA 關鍵：與一般心因性猝死不同，溺水急救「正壓人工呼吸（BVM）」極為關鍵；抽吸氣道務必迅速，切勿延誤通氣與壓胸！',
    timeLimitSec: 30
  },
  {
    id: 'sc-septic-shock-dyspnea',
    title: '休克低血壓合併嚴重呼吸衰竭',
    category: '重症休克與呼吸急症',
    urgency: 'critical',
    patient: '74歲女性・高燒寒顫・血壓 70/40・喘促',
    description: '尿道感染引發嚴重敗血症，面色蒼白冒冷汗、血壓驟降休克、呼吸急促達 34 次/分端坐呼吸！需緊急輸液與高濃度給氧！',
    requiredItemIds: ['iv_bag', 'nrm_mask', 'bp_monitor'],
    rationale: '重症休克合併低血壓與組織缺氧時，應立即建立點滴（IV）輸液管路大量灌注晶體溶液提升灌流壓，給予非再吸入型氧氣面罩（NRM 15L/min）提供高濃度氧療，並以血壓機每 3~5 分鐘重複量測評估輸液療效！',
    tip: '💡 休克處置三部曲：NRM 高濃度氧氣改善缺氧、點滴輸液搶救有效循環血容量、血壓機密切追蹤平均動脈壓（MAP）！',
    timeLimitSec: 30
  },
  {
    id: 'sc-fire-smoke-inhalation',
    title: '火災濃煙吸入嗆傷與低血氧',
    category: '火場急症與吸入性灼傷',
    urgency: 'high',
    patient: '42歲男性・公寓火警濃煙受困救出',
    description: '自滿布黑煙之火場救出，鼻毛燒焦、聲音沙啞且咳出黑色炭黑痰液，血氧飽和度 SpO2 僅 84%！需立即高濃度氧療！',
    requiredItemIds: ['nrm_mask', 'oxygen_tank', 'pulse_oximeter'],
    rationale: '火災濃煙吸入具有一氧化碳中毒與吸入性呼吸道熱化學灼傷之雙重風險。應立即使用三合一攜帶氧氣連接非再吸入型氧氣面罩（NRM），以 15 L/min 最大流量提供高濃度純氧加速一氧化碳排除，並以血氧機監測心率與末梢狀況！',
    tip: '💡 火場嗆傷關鍵：吸入濃煙者一律給予 100% 氧氣（NRM 15L/min）！注意：一氧化碳中毒時傳統血氧機數值可能偏高，仍須堅持高濃度給氧！',
    timeLimitSec: 30
  },
  {
    id: 'sc-post-seizure-trismus',
    title: '癲癇大發作後牙關緊閉鼾音',
    category: '神經急症與氣道維持',
    urgency: 'high',
    patient: '33歲男性・全身抽搐剛停・牙關緊咬',
    description: '倒地全身強直陣攣抽搐 3 分鐘後抽搐停止陷入昏睡，雙唇緊閉牙關咬緊，呼吸發出沉重打鼾異音！需維持氣道並排除低血糖！',
    requiredItemIds: ['npa', 'simple_mask', 'glucometer'],
    rationale: '癲癇發作後患者常處於昏睡期（Post-ictal state），牙關緊閉時嚴禁強行撬開插入口咽管，應首選軟質鼻咽管（NPA）維持呼吸道暢通，覆蓋簡單型氧氣面罩給氧，並立即以血糖機檢測血糖排除低血糖誘發抽搐！',
    tip: '💡 抽搐急救鐵則：牙關咬緊時嚴禁將手指或硬物塞入口中！首選 NPA 經鼻孔維持氣道；量測血糖是抽搐急症標準鑑別步驟！',
    timeLimitSec: 30
  },
  {
    id: 'sc-anaphylactic-shock',
    title: '戶外蜂螫嚴重過敏性休克',
    category: '過敏性急症與休克',
    urgency: 'critical',
    patient: '48歲男性・山徑遭黑腹虎頭蜂螫傷數處',
    description: '遭蜂螫後數分鐘內全身泛發大片風疹塊奇癢無比，聲音迅速沙啞喉頭緊縮呼吸喘鳴，血壓暴跌至 75/45 mmHg！需緊急急救！',
    requiredItemIds: ['nrm_mask', 'iv_bag', 'bp_monitor'],
    rationale: '蜂毒引發之嚴重過敏性休克（Anaphylaxis）會造成致命性喉頭水腫與全身血管通透性劇增血壓衰竭。需立即給予非再吸入型氧氣面罩（NRM 15L/min）維持氧合，迅速建立點滴（IV）輸液搶救血容量，並以血壓機每分鐘連續量測！',
    tip: '💡 過敏性休克危機：氣道水腫與血管崩潰在數分鐘內奪命！高濃度面罩氧療＋點滴快速輸液＋血壓監測分秒必爭！',
    timeLimitSec: 30
  },
  {
    id: 'sc-tension-pneumothorax',
    title: '胸壁穿刺傷疑慮張力性氣胸',
    category: '胸部重大創傷',
    urgency: 'critical',
    patient: '29歲工人・金屬鋼筋刺入右側胸壁',
    description: '工地意外鐵條刺穿右胸，傷口處隨呼吸發出吸氣嘶嘶吸吮聲（Sucking chest wound），呼吸極度喘促發紺！需評估肺音並覆蓋處置！',
    requiredItemIds: ['stethoscope', 'gauze', 'nrm_mask'],
    rationale: '開放性胸壁穿透傷極易演變成致命性張力性氣胸！應立即以無菌紗布覆蓋傷口（或胸封處置）阻絕外界空氣進一步抽入胸腔，使用聽診器聽診兩側肺呼吸音評估肺塌陷與縱膈偏移程度，並施予 NRM 高濃度面罩給氧！',
    tip: '💡 胸部創傷重點：聽診器評估雙側肺音對稱性是鑑別氣胸與血胸的黃金法寶；覆蓋紗布防止空氣進胸腔，NRM 15L/min 氧療！',
    timeLimitSec: 30
  },
  {
    id: 'sc-hemorrhagic-hypothermia',
    title: '重度失血性休克合併體溫驟降',
    category: '重大外傷與休克防護',
    urgency: 'critical',
    patient: '51歲聯結車司機・撞擊肢體撕裂大量出血',
    description: '車禍重創雙下肢廣泛撕裂活動性噴血，患者面色慘白如紙、四肢冰冷發抖直喊好冷！需止血、保暖與體液復甦！',
    requiredItemIds: ['tourniquet', 'space_blanket', 'iv_bag'],
    rationale: '創傷致死三聯徵（低體溫、酸中毒、凝血功能障礙）互相加劇！首要動作是立即在近端上止血帶阻斷動脈大出血，接著迅速以保暖用鋁箔緊緊包裹阻斷體溫流失，並同時建立靜脈點滴進行晶體輸液復甦！',
    tip: '💡 創傷黃金準則：止血帶阻斷大出血永遠第一優先！失血患者體溫每掉 1 度凝血酵素功能驟降，保暖鋁箔與點滴復甦缺一不可！',
    timeLimitSec: 30
  }
];

export function getRandomScenario(excludedIds: string[] = []): Scenario {
  const pool = SCENARIOS.filter(s => !excludedIds.includes(s.id));
  if (pool.length === 0) return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  return pool[Math.floor(Math.random() * pool.length)];
}
