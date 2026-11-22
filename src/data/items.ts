export interface MedicalItem {
  id: string;
  name: string;
  enName: string;
  category: 'airway' | 'trauma' | 'vitals' | 'meds' | 'special' | 'ppe';
  categoryName: string;
  desc: string;
  indication: string;
  svg: string;
}

export const MEDICAL_ITEMS: MedicalItem[] = [
  // ================= 1. 呼吸道與氧氣 (Airway & Oxygen) =================
  {
    id: 'bvm',
    name: '甦醒球 BVM',
    enName: 'Bag Valve Mask',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '正壓通氣裝置，配合單向閥與蓄氣袋使用。',
    indication: '患者停止呼吸（無呼吸/瀕死呼吸）或呼吸極度微弱、無效通氣時。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 綠色氧氣小軟管 -->
      <path d="M28 54 C22 54 16 48 16 42 C16 36 22 34 15 28" stroke="#7CB69D" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾蓄氣袋 Reservoir Bag -->
      <path d="M12 64 C7 71 11 84 22 82 C32 80 36 70 29 61 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 74 C20 76 25 75 27 71" stroke="#D5C7B2" stroke-width="1.8" stroke-linecap="round"/>
      <!-- 後端連接閥 -->
      <rect x="26" y="48" width="9" height="9" rx="2.5" transform="rotate(-15 30 52)" fill="#F6EFE2" stroke="#463529" stroke-width="2.2"/>
      <!-- 胖胖薄荷綠矽膠球體 Chubby Mint Silicone Bag -->
      <ellipse cx="50" cy="46" rx="22" ry="16" transform="rotate(-14 50 46)" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <!-- いらすとや風格高光與陰影弧線 -->
      <ellipse cx="45" cy="37" rx="9" ry="3.5" transform="rotate(-16 45 37)" fill="#FFFFFF" opacity="0.65"/>
      <path d="M40 54 C48 58 59 54 65 48" stroke="#5F9E84" stroke-width="2.2" stroke-linecap="round"/>
      <!-- 前端鴨嘴閥組件 -->
      <rect x="67" y="34" width="9" height="9" rx="2.5" transform="rotate(-14 71 38)" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- 圓潤透明面罩與柔軟氣墊圈 -->
      <path d="M74 31 C82 26 91 34 89 47 C87 57 77 58 71 46 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M84 33 C91 39 90 52 81 55" stroke="#6BB2E2" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="81" cy="39" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'simple_mask',
    name: '簡單型氧氣面罩',
    enName: 'Simple Face Mask',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '提供中濃度氧氣（約 40~60%，流量 6~10 L/min）。',
    indication: '中度缺氧、自發性呼吸尚平穩但需氧療者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 柔和鬆緊固定帶 -->
      <path d="M30 38 C16 43 14 58 26 66" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      <path d="M70 38 C84 43 86 58 74 66" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- 圓潤水滴型透明面罩 -->
      <path d="M50 22 C66 22 76 38 74 56 C72 70 61 77 50 77 C39 77 28 70 26 56 C24 38 34 22 50 22 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- いらすとや白高光 -->
      <ellipse cx="41" cy="35" rx="4" ry="7" transform="rotate(-18 41 35)" fill="#FFFFFF" opacity="0.65"/>
      <!-- 鼻樑軟鋁壓條 -->
      <path d="M39 30 C46 26 54 26 61 30" stroke="#F6EFE2" stroke-width="4" stroke-linecap="round"/>
      <path d="M39 30 C46 26 54 26 61 30" stroke="#463529" stroke-width="2" stroke-linecap="round"/>
      <!-- 兩側可愛呼氣小圓孔 -->
      <circle cx="37" cy="50" r="2.2" fill="#463529"/>
      <circle cx="42" cy="53" r="2.2" fill="#463529"/>
      <circle cx="63" cy="50" r="2.2" fill="#463529"/>
      <circle cx="58" cy="53" r="2.2" fill="#463529"/>
      <!-- 底部氧氣接頭與綠管 -->
      <rect x="45" y="66" width="10" height="12" rx="3" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <path d="M50 78 C50 86 58 89 64 94" stroke="#7CB69D" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M50 78 C50 86 58 89 64 94" stroke="#463529" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'nrm_mask',
    name: '非再吸入型氧氣面罩',
    enName: 'NRM Mask',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '提供高濃度氧氣（80~100%，流量 10~15 L/min）。',
    indication: '嚴重缺氧、CO中毒、休克、嚴重創傷呼吸困難者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 鬆緊帶 -->
      <path d="M28 34 C16 38 16 50 26 56" stroke="#7CB69D" stroke-width="2.4" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- 底部胖胖儲氣袋 Reservoir Bag (NRM特徵) -->
      <path d="M42 58 C32 65 30 82 42 90 C52 96 68 92 70 80 C72 69 62 61 56 58 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="46" cy="76" rx="4" ry="7" transform="rotate(-12 46 76)" fill="#D6ECF9" opacity="0.6"/>
      <path d="M52 74 C56 80 61 82 64 78" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <!-- 面罩罩體 -->
      <path d="M48 16 C63 16 72 30 70 46 C68 58 58 64 48 64 C38 64 28 58 26 46 C24 30 33 16 48 16 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="39" cy="28" rx="3.5" ry="6" transform="rotate(-18 39 28)" fill="#FFFFFF" opacity="0.7"/>
      <!-- 單向珊瑚紅圓瓣膜 One-way Valves (NRM關鍵辨識) -->
      <circle cx="38" cy="42" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="58" cy="42" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="38" cy="42" r="1.5" fill="#FFFDF9"/>
      <circle cx="58" cy="42" r="1.5" fill="#FFFDF9"/>
      <!-- 連接閥與氧氣管 -->
      <rect x="43" y="54" width="10" height="9" rx="2.5" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <path d="M56 62 C68 66 76 76 84 88" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'nasal_cannula',
    name: '氧氣鼻導管',
    enName: 'Nasal Cannula',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '低濃度氧氣（24~44%，流量 1~6 L/min），攜帶舒適。',
    indication: '輕度低血氧、慢性阻塞性肺病穩定者、無法耐受面罩者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 雙耳圓弧軟管環 -->
      <path d="M22 44 C13 54 22 72 38 76 C46 78 54 78 62 76 C78 72 87 54 78 44" stroke="#463529" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M22 44 C13 54 22 72 38 76 C46 78 54 78 62 76 C78 72 87 54 78 44" stroke="#94C9B3" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 兩個可愛圓頭鼻叉 Nasal Prongs (特徵) -->
      <path d="M44 42 V31" stroke="#463529" stroke-width="6" stroke-linecap="round"/>
      <path d="M44 42 V31" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M56 42 V31" stroke="#463529" stroke-width="6" stroke-linecap="round"/>
      <path d="M56 42 V31" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round"/>
      <!-- 鼻下軟管橫樑 -->
      <rect x="33" y="39" width="34" height="8" rx="4" fill="#7CB69D" stroke="#463529" stroke-width="2.3"/>
      <ellipse cx="50" cy="42" rx="8" ry="1.5" fill="#FFFFFF" opacity="0.6"/>
      <!-- 滑動調節環 Bolo Ring -->
      <rect x="43" y="72" width="14" height="8" rx="4" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- 下方供氧主管 -->
      <path d="M50 80 C50 87 54 91 58 95" stroke="#463529" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M50 80 C50 87 54 91 58 95" stroke="#7CB69D" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'c_collar',
    name: '頸圈',
    enName: 'Cervical Collar',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '限制頸椎過度彎曲、後仰或扭轉，保護脊椎神經。',
    indication: '高能量撞擊創傷、車禍、墜落傷、懷疑頸椎損傷者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 藍色柔軟內襯泡棉層 -->
      <path d="M16 42 C20 30 36 26 50 26 C64 26 80 30 84 42 C87 54 83 67 74 73 C62 80 38 80 26 73 C17 67 13 54 16 42 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5"/>
      <!-- 奶油白硬質外支撐殼 -->
      <path d="M19 45 C23 35 37 32 50 32 C63 32 77 35 81 45 C83 54 80 65 72 70 C62 76 38 76 28 70 C20 65 17 54 19 45 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5"/>
      <!-- 下巴圓弧托架 Chin Support -->
      <path d="M34 36 C42 44 58 44 66 36 C62 47 38 47 34 36 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- 中央圓潤氣切觀察孔 Trachea Hole (特徵) -->
      <ellipse cx="50" cy="56" rx="10" ry="7.5" fill="#F8AD9D" fill-opacity="0.45" stroke="#463529" stroke-width="2.3"/>
      <!-- 兩側可愛調整鈕扣 -->
      <circle cx="29" cy="55" r="3.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="71" cy="55" r="3.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <!-- 魔鬼氈黏扣帶 -->
      <rect x="76" y="48" width="12" height="11" rx="3" transform="rotate(8 76 48)" fill="#5C4738" stroke="#463529" stroke-width="2.2"/>
      <!-- 高光 -->
      <ellipse cx="33" cy="45" rx="4" ry="2" fill="#FFFFFF" opacity="0.75"/>
    </svg>`
  },
  {
    id: 'spine_board',
    name: '長背板',
    enName: 'Spine Board',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '剛性全身固定板，用於脊椎受傷患者固定與搬運。',
    indication: '全身多處外傷、疑似脊椎損傷、需全身固定及水平搬運時。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 溫暖向日葵黃/亮橘長背板本體 -->
      <rect x="27" y="10" width="46" height="80" rx="11" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <!-- いらすとや風格高光條 -->
      <path d="M35 16 H45" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
      <!-- 頭部固定軟墊區 -->
      <rect x="41" y="17" width="18" height="12" rx="4" fill="#EB6A5B" fill-opacity="0.3" stroke="#463529" stroke-width="1.8" stroke-dasharray="2.5 2.5"/>
      <!-- 兩側圓潤把手孔 Handholds (長背板特徵) -->
      <rect x="31" y="24" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="24" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="31" y="44" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="44" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="31" y="64" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="64" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- 兩條彩色安全固定帶 Straps -->
      <rect x="27" y="36" width="46" height="5.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <rect x="46" y="35" width="8" height="7.5" rx="1.5" fill="#5C4738" stroke="#463529" stroke-width="1.8"/>
      <rect x="27" y="56" width="46" height="5.5" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <rect x="46" y="55" width="8" height="7.5" rx="1.5" fill="#5C4738" stroke="#463529" stroke-width="1.8"/>
    </svg>`
  },
  {
    id: 'gauze',
    name: '紗布',
    enName: 'Sterile Gauze',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '無菌紗布塊，用於覆蓋傷口、直接加壓止血與吸收滲出液。',
    indication: '各類擦傷、裂傷出血、傷口覆蓋保護。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 下層交疊蓬鬆紗布 -->
      <rect x="26" y="27" width="52" height="50" rx="7" transform="rotate(6 52 52)" fill="#F6EFE2" stroke="#463529" stroke-width="2.4"/>
      <!-- 上層柔軟米白無菌紗布 -->
      <rect x="21" y="23" width="52" height="50" rx="7" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 溫潤手繪棉紗網格織紋 -->
      <line x1="34" y1="27" x2="34" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="47" y1="27" x2="47" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="60" y1="27" x2="60" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="36" x2="69" y2="36" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="48" x2="69" y2="48" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="60" x2="69" y2="60" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- 可愛薄荷綠無菌十字貼紙 -->
      <circle cx="61" cy="34" r="6.5" fill="#7CB69D" stroke="#463529" stroke-width="2"/>
      <path d="M61 30.5 V37.5 M57.5 34 H64.5" stroke="#FFFDF9" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'tourniquet',
    name: '止血帶',
    enName: 'CAT Tourniquet',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '肢體大動脈噴血專用止血帶，具旋緊絞棒與固定扣。',
    indication: '四肢大出血、動脈性噴血、加壓止血無效時。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 加厚深巧克黑束帶環 -->
      <path d="M16 66 C26 48 74 48 84 66 L78 78 C68 62 32 62 22 78 Z" fill="#5C4738" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 珊瑚紅拉尾 Red Tip (CAT止血帶經典辨識) -->
      <path d="M14 68 L22 55 L28 63 L19 76 Z" fill="#EB6A5B" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
      <!-- 絞棒固定座 C-Clip -->
      <rect x="41" y="40" width="18" height="13" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2.2"/>
      <!-- 奶油白時間紀錄貼條 TIME -->
      <rect x="37" y="28" width="26" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <text x="41" y="35.5" font-size="6.5" fill="#EB6A5B" font-weight="900">TIME</text>
      <!-- 圓頭旋緊絞棒 Windlass Rod -->
      <rect x="26" y="43" width="48" height="8" rx="4" transform="rotate(-24 50 47)" fill="#463529" stroke="#FFFDF9" stroke-width="1.2"/>
      <rect x="26" y="43" width="48" height="8" rx="4" transform="rotate(-24 50 47)" fill="#5C4738" stroke="#463529" stroke-width="2.3"/>
      <circle cx="50" cy="47" r="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'elastic_bandage',
    name: '彈性繃帶',
    enName: 'Elastic Bandage',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '加壓包紮、固定敷料及扭挫傷支撐。',
    indication: '傷口加壓止血、敷料固定、關節扭傷支撐。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 展開微捲的奶茶色繃帶尾端 -->
      <path d="M40 44 C52 34 70 33 85 42 C82 54 68 54 46 62 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 圓滾滾繃帶捲筒本體 -->
      <ellipse cx="35" cy="56" rx="16" ry="22" fill="#E5D9C5" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="35" cy="56" rx="11" ry="16" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <ellipse cx="35" cy="56" rx="5" ry="8" fill="#7A6352" stroke="#463529" stroke-width="1.8"/>
      <!-- 彈性織紋線條 -->
      <path d="M54 42 C57 46 58 51 58 56" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <path d="M66 40 C69 44 70 49 70 53" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <!-- 兩枚可愛金屬小固定夾 Clips -->
      <rect x="75" y="38" width="6" height="8" rx="2" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <rect x="73" y="47" width="6" height="8" rx="2" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'sam_splint',
    name: '骨折固定夾板',
    enName: 'SAM Splint',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '輕質高分子軟鋁夾板，可自由塑型為U型或C型固定骨折。',
    indication: '四肢閉鎖性或開放性骨折固定、關節脫臼固定。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- U型彎折的立體夾板：亮橘外層 + 天藍內層 (SAM Splint經典配色) -->
      <path d="M24 30 C24 18 46 18 50 32 L60 66 C64 80 82 78 82 64" stroke="#463529" stroke-width="15" stroke-linecap="round" fill="none"/>
      <path d="M24 30 C24 18 46 18 50 32 L60 66 C64 80 82 78 82 64" stroke="#6BB2E2" stroke-width="10.5" stroke-linecap="round" fill="none"/>
      <path d="M22 32 C22 20 44 20 48 34 L58 68 C62 82 80 80 80 66" stroke="#F6C46A" stroke-width="6.5" stroke-linecap="round" fill="none"/>
      <path d="M22 32 C22 20 44 20 48 34 L58 68 C62 82 80 80 80 66" stroke="#EB6A5B" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 泡棉表面可愛白點高光 -->
      <circle cx="35" cy="24" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="51" cy="45" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="56" cy="59" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="71" cy="75" r="2" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
  },
  {
    id: 'ems_bag',
    name: '救護包',
    enName: 'EMS Bag',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '標準緊急救護技術員出勤背包，收納全套第一線急救器材。',
    indication: '所有出勤救護情境之核心載具與器材收納。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 頂部圓潤提把 -->
      <path d="M36 30 V20 C36 14 64 14 64 20 V30" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 兩側可愛小口袋耳朵 -->
      <rect x="11" y="44" width="10" height="28" rx="5" fill="#D85344" stroke="#463529" stroke-width="2.4"/>
      <rect x="79" y="44" width="10" height="28" rx="5" fill="#D85344" stroke="#463529" stroke-width="2.4"/>
      <!-- 圓滾滾珊瑚紅救護包主體 -->
      <rect x="18" y="28" width="64" height="56" rx="14" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <!-- いらすとや白高光 -->
      <ellipse cx="29" cy="36" rx="6" ry="2.5" transform="rotate(-12 29 36)" fill="#FFFFFF" opacity="0.65"/>
      <!-- 暖黃色反光飾條 -->
      <rect x="18" y="43" width="64" height="8" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- 可愛微笑表情與紅潤臉頰 (いらすとや擬人吉祥物風格) -->
      <path d="M35 37 C36 34 39 34 40 37" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M60 37 C61 34 64 34 65 37" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <ellipse cx="32" cy="40" rx="3" ry="1.8" fill="#F8AD9D"/>
      <ellipse cx="68" cy="40" rx="3" ry="1.8" fill="#F8AD9D"/>
      <path d="M47 39 Q50 42 53 39" stroke="#463529" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- 前側圓角大口袋與生命之星十字徽章 -->
      <rect x="27" y="55" width="46" height="23" rx="7" fill="#D85344" stroke="#463529" stroke-width="2.3"/>
      <circle cx="50" cy="66.5" r="8.5" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <path d="M50 61.5 V71.5 M45 66.5 H55" stroke="#6BB2E2" stroke-width="3.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'stethoscope',
    name: '聽診器',
    enName: 'Stethoscope',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '聆聽心音、肺部呼吸音（哮鳴、囉音、對稱性）與測量血壓。',
    indication: '呼吸喘、胸痛、懷疑氣胸或氣喘、生命徵象全面評估。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 雙耳金屬聽管 -->
      <path d="M34 26 C32 14 44 12 50 22 C56 12 68 14 66 26" stroke="#463529" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M34 26 C32 14 44 12 50 22 C56 12 68 14 66 26" stroke="#DCE4EC" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <!-- 奶油白圓潤耳塞 Eartips -->
      <circle cx="35" cy="26" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <circle cx="65" cy="26" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <!-- Y型金屬匯流管 -->
      <path d="M39 24 L50 36 L61 24" stroke="#463529" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M39 24 L50 36 L61 24" stroke="#DCE4EC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- 柔和天藍/珊瑚粉聽診軟管 (Q彈弧線) -->
      <path d="M50 36 C50 52 26 54 26 70 C26 86 56 88 58 72 C60 58 76 58 76 74" stroke="#463529" stroke-width="7.5" stroke-linecap="round" fill="none"/>
      <path d="M50 36 C50 52 26 54 26 70 C26 86 56 88 58 72 C60 58 76 58 76 74" stroke="#6BB2E2" stroke-width="4.2" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾聽診頭 Chestpiece -->
      <circle cx="76" cy="76" r="11" fill="#DCE4EC" stroke="#463529" stroke-width="2.6"/>
      <circle cx="76" cy="76" r="7" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <circle cx="76" cy="76" r="2.5" fill="#6BB2E2"/>
      <ellipse cx="73" cy="72" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
  },
  {
    id: 'bp_monitor',
    name: '血壓機',
    enName: 'BP Monitor',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '測量患者收縮壓、舒張壓與平均動脈壓。',
    indication: '休克、高血壓急症、頭暈、創傷、常規生命徵象量測。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 溫潤深藍壓脈帶 Cuff -->
      <rect x="16" y="44" width="38" height="36" rx="7" fill="#4F94C4" stroke="#463529" stroke-width="2.6"/>
      <rect x="21" y="50" width="28" height="10" rx="3" fill="#D6ECF9" stroke="#463529" stroke-width="1.8"/>
      <ellipse cx="25" cy="48" rx="4" ry="1.5" fill="#FFFFFF" opacity="0.6"/>
      <!-- 兩條Q彈充氣橡膠管 -->
      <path d="M44 80 C48 92 62 90 65 76" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M32 80 C36 94 70 96 75 78" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾指針壓力錶 Gauge -->
      <circle cx="67" cy="36" r="16" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <circle cx="67" cy="36" r="12" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- 錶盤刻度與珊瑚紅指針 -->
      <circle cx="67" cy="27" r="1.2" fill="#463529"/>
      <circle cx="76" cy="36" r="1.2" fill="#463529"/>
      <circle cx="58" cy="36" r="1.2" fill="#463529"/>
      <line x1="67" y1="36" x2="73" y2="29" stroke="#EB6A5B" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="67" cy="36" r="2.2" fill="#463529"/>
      <!-- 胖胖充氣捏球 Bulb -->
      <ellipse cx="75" cy="72" rx="8" ry="11" fill="#5C4738" stroke="#463529" stroke-width="2.5"/>
      <ellipse cx="73" cy="68" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.4"/>
      <rect x="72" y="57" width="6" height="4" rx="1.5" fill="#DCE4EC" stroke="#463529" stroke-width="1.8"/>
    </svg>`
  },
  {
    id: 'pulse_oximeter',
    name: '血氧機',
    enName: 'Pulse Oximeter',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '無創指夾式測量周邊動脈血氧飽和度（SpO2）與脈搏速率。',
    indication: '呼吸急促、意識改變、紫紺、一氧化碳中毒鑑別、常規生命徵象。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 指夾底座 -->
      <rect x="26" y="42" width="50" height="36" rx="11" fill="#D6ECF9" stroke="#463529" stroke-width="2.5"/>
      <!-- 圓潤上蓋機身 -->
      <rect x="24" y="24" width="52" height="42" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 天藍色外框裝飾 -->
      <rect x="29" y="29" width="42" height="24" rx="6" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <!-- 螢幕面板 -->
      <rect x="32" y="32" width="36" height="18" rx="4" fill="#463529"/>
      <!-- 可愛大字 98% 與小愛心 -->
      <text x="35" y="45" font-size="11" fill="#7CB69D" font-weight="900">98</text>
      <text x="52" y="40" font-size="4.5" fill="#F6C46A" font-weight="bold">%SpO2</text>
      <!-- 小愛心脈搏圖標 -->
      <circle cx="57" cy="45" r="2.2" fill="#EB6A5B"/>
      <circle cx="60" cy="45" r="2.2" fill="#EB6A5B"/>
      <polygon points="55,46 62,46 58.5,49.5" fill="#EB6A5B"/>
      <!-- 圓圓電源鍵 -->
      <circle cx="50" cy="59" r="3.8" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'penlight',
    name: '瞳孔筆',
    enName: 'Penlight',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '檢查患者雙眼瞳孔大小、對光反射（直接與間接光反射）。',
    indication: '頭部外傷、中風、昏迷、腦震盪、評估神經學功能。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-38 50 50)">
        <!-- 筆尾溫暖黃色按壓開關 -->
        <rect x="44" y="10" width="12" height="8" rx="4" fill="#EB6A5B" stroke="#463529" stroke-width="2.3"/>
        <!-- 金屬筆夾 -->
        <path d="M44 22 H38 V40 H44" stroke="#463529" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- 圓潤天藍筆身 -->
        <rect x="43" y="17" width="14" height="54" rx="4" fill="#6BB2E2" stroke="#463529" stroke-width="2.6"/>
        <!-- 白色瞳孔大小對照貼紙 (2mm ~ 8mm 圓點特徵) -->
        <rect x="45" y="25" width="10" height="36" rx="2" fill="#FFFDF9"/>
        <circle cx="50" cy="30" r="1" fill="#463529"/>
        <circle cx="50" cy="36" r="1.6" fill="#463529"/>
        <circle cx="50" cy="43" r="2.3" fill="#463529"/>
        <circle cx="50" cy="52" r="3.1" fill="#463529"/>
        <!-- 燈頭與溫暖可愛黃色光芒 -->
        <polygon points="43,71 57,71 54,78 46,78" fill="#F6EFE2" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
        <circle cx="50" cy="80" r="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
        <path d="M44 86 L37 96 M50 87 L50 98 M56 86 L63 96" stroke="#F6C46A" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'triangular_bandage',
    name: '三角巾',
    enName: 'Triangular Bandage',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '懸臂吊帶托起受傷上肢，亦可用於頭部、關節包紮及固定夾板。',
    indication: '鎖骨骨折、手臂骨折、肩關節脫臼、大面積傷口包紮。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 溫潤棉麻米白大三角巾 -->
      <path d="M16 74 L50 18 L84 74 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 柔和布料折線 -->
      <path d="M35 52 C44 48 56 48 65 52" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M26 65 C40 60 60 60 74 65" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round"/>
      <!-- 可愛紅十字小印章 -->
      <circle cx="50" cy="57" r="7" fill="#FAD4CF" stroke="#EB6A5B" stroke-width="1.5"/>
      <path d="M50 53.5 V60.5 M46.5 57 H53.5" stroke="#EB6A5B" stroke-width="2.3" stroke-linecap="round"/>
      <!-- 金屬安全別針 Safety Pin (特徵) -->
      <g transform="translate(55, 26) rotate(28)">
        <rect x="0" y="0" width="24" height="9" rx="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
        <circle cx="5" cy="4.5" r="2" fill="#FFFDF9" stroke="#463529" stroke-width="1.5"/>
        <line x1="7" y1="4.5" x2="19" y2="4.5" stroke="#463529" stroke-width="1.8" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'iv_bag',
    name: '點滴',
    enName: 'IV Infusion Bag',
    category: 'meds',
    categoryName: '藥物與輸液',
    desc: '生理食鹽水 (0.9% NaCl) 靜脈輸液，建立給藥途徑與擴充血容積。',
    indication: '低血容休克、熱衰竭脫水、大失血維持灌流、給藥途徑建立。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 頂部吊掛小圓孔 -->
      <path d="M43 15 C43 9 57 9 57 15" stroke="#463529" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾透明點滴軟袋 -->
      <rect x="27" y="15" width="46" height="54" rx="11" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 水藍色食鹽水液面 -->
      <path d="M29 31 C38 28 62 28 71 31 V59 C71 64 67 67 62 67 H38 C33 67 29 64 29 59 Z" fill="#D6ECF9"/>
      <!-- 白高光與標籤 -->
      <ellipse cx="64" cy="44" rx="2.5" ry="9" fill="#FFFFFF" opacity="0.75"/>
      <rect x="35" y="36" width="24" height="18" rx="3" fill="#FFFDF9" stroke="#4F94C4" stroke-width="1.5"/>
      <text x="38" y="45" font-size="6.5" fill="#4F94C4" font-weight="900">0.9%</text>
      <text x="39" y="51.5" font-size="5" fill="#463529" font-weight="bold">NaCl</text>
      <!-- 點滴滴室 Drip Chamber 與可愛小水滴 -->
      <rect x="45" y="69" width="10" height="14" rx="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <path d="M50 73 C48 76 47 78 50 79 C53 78 52 76 50 73 Z" fill="#6BB2E2"/>
      <!-- 輸液管與黃色滾輪夾 -->
      <path d="M50 83 C50 90 60 92 64 97" stroke="#463529" stroke-width="3" stroke-linecap="round" fill="none"/>
      <rect x="52" y="87" width="8" height="6" rx="2" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'glucometer',
    name: '血糖機',
    enName: 'Glucometer',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '快速檢驗微血管全血血糖濃度，確認有無低血糖或高血糖危象。',
    indication: '意識不清、昏睡、中風鑑別診斷、糖尿病史患者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 頂部插入的血糖試紙 Test Strip 與可愛小血滴 (特徵) -->
      <rect x="44" y="11" width="12" height="19" rx="2.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <path d="M50 14 C47 18 47 21 50 22 C53 21 53 18 50 14 Z" fill="#EB6A5B"/>
      <!-- 圓滾滾掌上型血糖機身 -->
      <rect x="26" y="26" width="48" height="60" rx="16" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="35" cy="33" rx="5" ry="2" transform="rotate(-15 35 33)" fill="#FFFFFF" opacity="0.65"/>
      <!-- 寬大液晶螢幕 -->
      <rect x="33" y="35" width="34" height="26" rx="6" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <text x="36" y="51" font-size="13" fill="#463529" font-weight="900">110</text>
      <text x="38" y="58" font-size="4.5" fill="#7A6352" font-weight="bold">mg/dL</text>
      <!-- 兩顆可愛圓圓操作鈕 -->
      <circle cx="41" cy="72" r="5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <circle cx="59" cy="72" r="5" fill="#F6EFE2" stroke="#463529" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: 'ekg',
    name: '心電圖機 EKG',
    enName: '12-Lead EKG',
    category: 'vitals',
    categoryName: '生命徵象監測',
    desc: '12導程心電圖監測儀，精準記錄心臟電氣活動與缺血變化。',
    indication: '急性胸痛、懷疑心肌梗塞 (STEMI)、胸悶冷汗、心律不整、到院前即時傳輸。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 頂部手提把 -->
      <path d="M36 22 V15 C36 11 64 11 64 15 V22" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- 圓潤米白心電圖機主機 -->
      <rect x="16" y="21" width="68" height="53" rx="11" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <!-- 螢幕區 (深巧克底 + 亮綠QRS心電波形) -->
      <rect x="23" y="28" width="40" height="28" rx="5" fill="#463529"/>
      <path d="M26 43 H31 L33 39 L35 46 L38 31 L41 50 L44 39 Q48 33 52 39 L54 43 H60" stroke="#7CB69D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="29" cy="34" r="2" fill="#EB6A5B"/>
      <text x="33" y="36" font-size="5" fill="#F6C46A" font-weight="900">88</text>
      <!-- 右側可愛彩色按鈕面板 -->
      <circle cx="71" cy="34" r="4" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="71" cy="44" r="3.2" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
      <circle cx="71" cy="52" r="3.2" fill="#F6C46A" stroke="#463529" stroke-width="1.8"/>
      <!-- 吐出的心電圖紀錄紙條 Paper Strip -->
      <path d="M26 62 H56 L59 79 H23 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M28 71 H35 L37 66 L39 74 L42 69 H53" stroke="#EB6A5B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- 彩色導聯吸球束 (紅黃綠藍 12導程特徵) -->
      <path d="M72 68 C72 78 65 84 55 87" stroke="#463529" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="48" cy="88" r="3.8" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <circle cx="57" cy="90" r="3.8" fill="#F6C46A" stroke="#463529" stroke-width="1.8"/>
      <circle cx="66" cy="88" r="3.8" fill="#7CB69D" stroke="#463529" stroke-width="1.8"/>
      <circle cx="75" cy="89" r="3.8" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
    </svg>`
  },
  {
    id: 'glucose_powder',
    name: '糖粉',
    enName: 'Oral Glucose',
    category: 'meds',
    categoryName: '藥物與輸液',
    desc: '口服單純醣類，用於意識清楚且能吞嚥的低血糖患者。',
    indication: '低血糖症狀（血糖值 < 60 mg/dL），患者意識清醒可自主吞嚥。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-8 50 50)">
        <!-- 草莓牛奶粉紅隨身糖粉包 -->
        <rect x="27" y="20" width="46" height="60" rx="7" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
        <!-- 上下波浪撕口封邊 -->
        <rect x="27" y="20" width="46" height="8" rx="3" fill="#F8AD9D" stroke="#463529" stroke-width="2.2"/>
        <rect x="27" y="72" width="46" height="8" rx="3" fill="#F8AD9D" stroke="#463529" stroke-width="2.2"/>
        <!-- 溫暖糖果圖案與標籤 -->
        <rect x="33" y="33" width="34" height="34" rx="5" fill="#FAD4CF"/>
        <!-- 可愛小糖果圖標 -->
        <polygon points="36,44 41,47 36,50" fill="#EB6A5B" stroke="#463529" stroke-width="1.6" stroke-linejoin="round"/>
        <polygon points="64,44 59,47 64,50" fill="#EB6A5B" stroke="#463529" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="50" cy="47" r="7" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
        <ellipse cx="48" cy="45" rx="2" ry="1.2" fill="#FFFFFF" opacity="0.8"/>
        <text x="38" y="62" font-size="6" fill="#463529" font-weight="900">GLUCOSE</text>
      </g>
    </svg>`
  },
  {
    id: 'saline_bottle',
    name: '沖洗用生理食鹽水',
    enName: 'Normal Saline (Irrigation)',
    category: 'meds',
    categoryName: '藥物與輸液',
    desc: '無菌沖洗液，用於清洗傷口異物、化學物噴濺沖眼、降溫冷敷。',
    indication: '髒污傷口清創、熱液燙傷沖水降溫、眼部異物化學沖洗。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 天藍色尖嘴沖洗蓋 -->
      <path d="M46 12 H54 L56 20 H44 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="42" y="20" width="16" height="7" rx="2.5" fill="#4F94C4" stroke="#463529" stroke-width="2.3"/>
      <!-- 胖胖塑膠瓶身 -->
      <rect x="29" y="27" width="42" height="60" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 清澈水藍食鹽水液面 -->
      <path d="M31 46 C40 43 48 48 56 45 C62 43 67 46 69 45 V77 C69 82 65 85 60 85 H40 C35 85 31 82 31 77 Z" fill="#D6ECF9"/>
      <!-- 白高光 -->
      <ellipse cx="63" cy="60" rx="2.5" ry="11" fill="#FFFFFF" opacity="0.75"/>
      <!-- 標籤貼紙 -->
      <rect x="35" y="51" width="26" height="22" rx="4" fill="#FFFDF9" stroke="#6BB2E2" stroke-width="1.8"/>
      <text x="38" y="61" font-size="6.5" fill="#4F94C4" font-weight="900">N/S</text>
      <text x="38" y="69" font-size="5" fill="#463529" font-weight="bold">500mL</text>
    </svg>`
  },
  {
    id: 'cotton_swabs',
    name: '棉枝',
    enName: 'Cotton Swabs',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '無菌長柄棉棒，用於塗抹藥劑、清理細小傷口分泌物與採檢。',
    indication: '傷口清創周邊塗抹、清潔異物、輔助換藥處置。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 撕開一半的無菌包裝袋 -->
      <path d="M24 44 L56 86 L78 70 L46 28 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="44" y="54" width="20" height="10" rx="2.5" transform="rotate(52 54 59)" fill="#6BB2E2"/>
      <!-- 三支溫暖木柄長棉棒 -->
      <line x1="29" y1="28" x2="51" y2="57" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="37" y1="21" x2="59" y2="50" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="45" y1="16" x2="67" y2="45" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <!-- 蓬鬆圓滾滾大白棉花頭 Cotton Tips (特徵) -->
      <ellipse cx="28" cy="26" rx="5.5" ry="7.5" transform="rotate(-38 28 26)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <ellipse cx="36" cy="19" rx="5.5" ry="7.5" transform="rotate(-38 36 19)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <ellipse cx="44" cy="14" rx="5.5" ry="7.5" transform="rotate(-38 44 14)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
    </svg>`
  },
  {
    id: 'ob_kit',
    name: '生產包',
    enName: 'OB Kit',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '內含無菌臍帶夾、無菌臍帶剪、吸鼻球、包巾等急產接生組件。',
    indication: '現場急產、胎頭露出、不可避免之到院前分娩。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 薄荷綠無菌接生鋪巾包 -->
      <rect x="20" y="28" width="60" height="50" rx="10" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <!-- 中央奶油白封條與可愛粉紅愛心十字 -->
      <rect x="35" y="24" width="30" height="58" rx="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="43" r="8" fill="#F8AD9D" stroke="#463529" stroke-width="2"/>
      <path d="M50 39 V47 M46 43 H54" stroke="#FFFDF9" stroke-width="2.6" stroke-linecap="round"/>
      <text x="39.5" y="62" font-size="6.5" fill="#463529" font-weight="900">OB KIT</text>
      <!-- 探出頭的圓滾滾天藍吸鼻球 Bulb Syringe (急產包特徵) -->
      <circle cx="24" cy="30" r="8.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <path d="M19 25 L11 17" stroke="#463529" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M19 25 L11 17" stroke="#6BB2E2" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="22" cy="28" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.75"/>
      <!-- 黃色無菌臍帶夾 Cord Clamp -->
      <rect x="66" y="62" width="18" height="8" rx="3.5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: 'burn_kit',
    name: '燒傷包',
    enName: 'Burn Kit',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '無菌不沾黏敷料、燙傷水凝膠敷料，保護創面避免感染失水。',
    indication: '二度或三度大面積燒燙傷、化學灼傷洗淨後創面保護。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 圓角水凝膠鋁箔包裝袋 -->
      <rect x="22" y="22" width="56" height="56" rx="10" fill="#DCE4EC" stroke="#463529" stroke-width="2.6"/>
      <rect x="28" y="28" width="44" height="44" rx="6" fill="#FFFDF9" stroke="#6BB2E2" stroke-width="2"/>
      <!-- 冰涼水滴寶寶圖標 Cooling Hydrogel Drop -->
      <circle cx="50" cy="54" r="13" fill="#D6ECF9"/>
      <path d="M50 39 C43 48 41 53 41 57 C41 62 45 66 50 66 C55 66 59 62 59 57 C59 53 57 48 50 39 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
      <ellipse cx="47" cy="54" rx="2" ry="3.5" transform="rotate(-15 47 54)" fill="#FFFFFF" opacity="0.8"/>
      <!-- 頂部珊瑚紅 BURN 標記 -->
      <rect x="35" y="25" width="30" height="9" rx="3" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <text x="40" y="32" font-size="6.5" fill="#FFFDF9" font-weight="900">BURN</text>
    </svg>`
  },
  {
    id: 'trauma_shears',
    name: '剪刀',
    enName: 'Trauma Shears',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '救護專用醫療剪刀，鈍頭安全設計，能迅速剪開厚重衣物。',
    indication: '創傷暴露檢查、快速剪開傷患褲管、袖口、安全帶。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 彎角不鏽鋼剪刀刃與圓潤安全鈍頭 Blunt Safety Tip (特徵) -->
      <path d="M40 58 L52 42 L74 20 L80 26 L58 48 Z" fill="#DCE4EC" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M44 54 L54 44 L70 16 L76 20 L56 46 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="77" cy="23" r="4.5" fill="#DCE4EC" stroke="#463529" stroke-width="2.3"/>
      <!-- 轉軸大圓鉚釘 -->
      <circle cx="52" cy="46" r="4" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- 胖胖珊瑚橘/深巧克人體工學大指環握把 -->
      <ellipse cx="30" cy="70" rx="11" ry="15" transform="rotate(-12 30 70)" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="30" cy="70" rx="5.5" ry="8.5" transform="rotate(-12 30 70)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <ellipse cx="56" cy="75" rx="12" ry="13" transform="rotate(15 56 75)" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="56" cy="75" rx="6" ry="7" transform="rotate(15 56 75)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: 'blanket',
    name: '棉被',
    enName: 'Patient Blanket',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '保暖棉被，預防創傷三機（低體溫、酸中毒、凝血功能障礙）。',
    indication: '各類創傷保暖、失血性休克預防低體溫、安撫患者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 蓬鬆厚實折疊暖黃毛毯底層 -->
      <path d="M18 42 C32 32 68 32 82 42 C86 52 86 64 80 72 C66 80 34 80 20 72 C14 64 14 52 18 42 Z" fill="#E6AC4C" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 上層柔軟蜂蜜黃格紋被 -->
      <path d="M18 36 C32 28 68 28 82 36 C86 46 84 58 78 64 C64 72 36 72 22 64 C16 58 14 46 18 36 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 溫暖日式縫線格紋 -->
      <path d="M36 32 L34 68" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M50 30 L50 70" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M64 32 L66 68" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M22 48 C38 43 62 43 78 48" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <!-- 蓬鬆白高光 -->
      <ellipse cx="29" cy="38" rx="5" ry="2" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'space_blanket',
    name: '保暖鋁箔',
    enName: 'Space Blanket',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '反射人體輻射熱達 90% 的輕便太空毯，高效防風防水保溫。',
    indication: '失溫、戶外搜救、創傷休克、新生兒急產後包裹保溫。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 金銀雙面折疊太空鋁箔毯 (金色外層 + 銀白內層) -->
      <polygon points="22,30 52,18 80,30 50,44" fill="#F6C46A" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="50,44 80,30 78,64 48,76" fill="#DCE4EC" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="22,30 50,44 48,76 20,62" fill="#E6AC4C" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="48,76 78,64 72,80 42,90" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 閃亮亮四角星芒 Sparkles -->
      <path d="M70 16 L72 22 L78 24 L72 26 L70 32 L68 26 L62 24 L68 22 Z" fill="#FFFDF9" stroke="#463529" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M28 48 L29.5 52 L33.5 53.5 L29.5 55 L28 59 L26.5 55 L22.5 53.5 L26.5 52 Z" fill="#FFFDF9"/>
    </svg>`
  },
  {
    id: 'gloves',
    name: '手套',
    enName: 'Nitrile Gloves',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '無粉丁腈檢驗手套，阻絕血液、體液與致病菌傳染。',
    indication: '所有救護出勤、接觸任何患者或耗材前之必備防護。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 後方天藍胖胖手套 -->
      <path d="M46 42 C44 27 52 22 55 29 C57 21 65 21 65 29 C68 23 76 26 73 35 C78 32 84 37 80 45 C77 56 73 65 69 76 L47 72 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 前方粉水藍胖胖五指手套 -->
      <path d="M18 52 C13 44 19 38 24 44 C22 31 30 27 33 34 C35 25 43 25 43 34 C46 28 54 31 51 40 C56 37 61 42 58 50 C54 61 50 70 46 80 L23 76 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 圓潤捲邊袖口 Cuffs -->
      <rect x="20" y="73" width="28" height="8" rx="4" transform="rotate(7 34 77)" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <rect x="46" y="69" width="25" height="8" rx="4" transform="rotate(7 58 73)" fill="#4F94C4" stroke="#463529" stroke-width="2.3"/>
      <!-- 白高光 -->
      <ellipse cx="35" cy="54" rx="4" ry="7" fill="#FFFFFF" opacity="0.65"/>
    </svg>`
  },
  {
    id: 'sterile_gloves',
    name: '無菌手套',
    enName: 'Sterile Surgical Gloves',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '滅菌獨立包裝外科手套，袖口折邊防污染，適用無菌侵入性處置。',
    indication: '現場急產接生、無菌換藥、大面積創面處理、侵入性處置。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 展開的和紙無菌包裝夾 -->
      <rect x="14" y="20" width="72" height="62" rx="8" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <line x1="50" y1="22" x2="50" y2="80" stroke="#D5C7B2" stroke-width="2.2" stroke-dasharray="4 3"/>
      <!-- L 與 R 可愛圓章 -->
      <circle cx="25" cy="30" r="5" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
      <text x="22.5" y="33" font-size="6.5" fill="#FFFDF9" font-weight="900">L</text>
      <circle cx="75" cy="30" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <text x="72.5" y="33" font-size="6.5" fill="#FFFDF9" font-weight="900">R</text>
      <!-- 左右一對純白無菌手套 -->
      <path d="M24 50 C22 40 27 37 29 41 C31 36 36 36 36 41 C38 37 43 39 42 45 C45 43 48 47 46 52 L42 66 L26 66 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="24" y="61" width="20" height="7" rx="2.5" fill="#D6ECF9" stroke="#463529" stroke-width="2"/>
      <path d="M76 50 C78 40 73 37 71 41 C69 36 64 36 64 41 C62 37 57 39 58 45 C55 43 52 47 54 52 L58 66 L74 66 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="56" y="61" width="20" height="7" rx="2.5" fill="#D6ECF9" stroke="#463529" stroke-width="2"/>
      <!-- 底部薄荷綠 STERILE 標籤 -->
      <rect x="34" y="71" width="32" height="8" rx="4" fill="#7CB69D" stroke="#463529" stroke-width="1.8"/>
      <text x="38" y="77" font-size="5.5" fill="#FFFDF9" font-weight="900">STERILE</text>
    </svg>`
  },
  {
    id: 'mask',
    name: '口罩',
    enName: 'Surgical Mask',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '三層醫用防護口罩，阻隔飛沫、病原體傳播。',
    indication: '所有接觸患者場合、呼吸道症狀、發燒感染高風險。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 兩側圓圓柔軟白耳繩 Ear Loops -->
      <path d="M24 36 C10 38 10 62 24 64" stroke="#463529" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M24 36 C10 38 10 62 24 64" stroke="#FFFDF9" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <path d="M76 36 C90 38 90 62 76 64" stroke="#463529" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M76 36 C90 38 90 62 76 64" stroke="#FFFDF9" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <!-- 圓角水藍三層醫用口罩主體 -->
      <rect x="22" y="30" width="56" height="40" rx="8" fill="#D6ECF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 頂部鼻樑壓條與三道柔和折線 Pleats -->
      <line x1="34" y1="35" x2="66" y2="35" stroke="#FFFDF9" stroke-width="3" stroke-linecap="round"/>
      <path d="M27 44 C42 46 58 46 73 44" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M27 52 C42 54 58 54 73 52" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M27 60 C42 62 58 62 73 60" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'gown',
    name: '防護衣',
    enName: 'PPE Isolation Gown',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '拋棄式防液體滲透隔離衣，全方位保護救護人員驅幹與手臂。',
    indication: '大量血液噴濺風險、傳染病疑似個案、分娩急救。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 柔和鵝黃色防水隔離衣本體 -->
      <path d="M34 20 L14 40 L23 49 L34 38 V80 C34 84 66 84 66 80 V38 L77 49 L86 40 L66 20 Z" fill="#FDF0C9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 圓領口 -->
      <path d="M40 20 C44 27 56 27 60 20 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.3"/>
      <!-- 白色羅紋縮口袖 Cuffs -->
      <rect x="12" y="39" width="11" height="7" rx="2.5" transform="rotate(42 17 42)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <rect x="77" y="39" width="11" height="7" rx="2.5" transform="rotate(-42 82 42)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <!-- 腰間可愛蝴蝶結綁帶 -->
      <path d="M34 52 H66" stroke="#F6C46A" stroke-width="4"/>
      <path d="M34 52 H66" stroke="#463529" stroke-width="2"/>
      <path d="M62 52 C70 48 74 55 66 57 C72 60 68 67 62 56" fill="#F6C46A" stroke="#463529" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'opa',
    name: '口咽 OPA',
    enName: 'Oropharyngeal Airway',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '無意識患者維持呼吸道暢通，阻擋舌根後墜。',
    indication: '深度昏迷（無嘔吐反射）、OHCA、需要建立暢通氣道者。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 彎月形圓潤透明口咽管道 Guedel Curve -->
      <path d="M64 38 C66 58 50 78 30 78 C20 78 18 66 28 62 C42 58 50 48 50 38 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M57 44 C55 56 44 67 30 69" stroke="#6BB2E2" stroke-width="3" stroke-linecap="round"/>
      <!-- 硬質防咬塊 Bite Block -->
      <rect x="51" y="28" width="14" height="12" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <!-- 亮橘色尺寸辨識翼緣 Flange (OPA關鍵特徵) -->
      <ellipse cx="58" cy="24" rx="14" ry="7" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="58" cy="24" rx="5.5" ry="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'npa',
    name: '鼻咽 NPA',
    enName: 'Nasopharyngeal Airway',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '軟質導氣管，保留嘔吐反射或牙關緊閉時使用。',
    indication: '意識不清但有咽喉嘔吐反射、痙攣牙關緊閉、不能插口咽管時。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 柔軟薄荷綠微彎鼻咽軟管與斜切尖端 Beveled Tip -->
      <path d="M62 24 C56 44 44 58 28 70 L34 80 C54 66 68 48 74 28 Z" fill="#7CB69D" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 高光虛線 -->
      <path d="M65 34 C59 49 49 60 37 69" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <!-- 頂端可愛小喇叭口 Trumpet Flange (NPA防滑入鼻腔特徵) -->
      <ellipse cx="68" cy="24" rx="13" ry="7.5" transform="rotate(20 68 24)" fill="#94C9B3" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="68" cy="24" rx="5.5" ry="3.2" transform="rotate(20 68 24)" fill="#463529"/>
    </svg>`
  },
  {
    id: 'suction_catheter',
    name: '抽吸管',
    enName: 'Yankauer Suction',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '硬式彎角抽吸導管，快速吸除口腔內嘔吐物、積血與痰液。',
    indication: '呼吸道異物、嘔吐物阻塞、大口吐血、分泌物過多導致窒息。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 尾端軟管 -->
      <path d="M72 78 C78 86 84 90 92 92" stroke="#463529" stroke-width="7" stroke-linecap="round"/>
      <path d="M72 78 C78 86 84 90 92 92" stroke="#F6EFE2" stroke-width="3.5" stroke-linecap="round"/>
      <!-- 透明水藍彎角硬式抽吸握管 Yankauer Wand -->
      <path d="M72 78 L54 56 L44 36 L30 22" stroke="#463529" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M72 78 L54 56 L44 36 L30 22" stroke="#D6ECF9" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- 拇指負壓控制孔 Thumb Vent -->
      <rect x="55" y="57" width="11" height="8" rx="3" transform="rotate(48 60 61)" fill="#6BB2E2" stroke="#463529" stroke-width="2.2"/>
      <circle cx="61" cy="61" r="2" fill="#463529"/>
      <!-- 前端圓滾滾防傷球頭 Bulbous Tip (特徵) -->
      <circle cx="28" cy="20" r="6.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.5"/>
      <circle cx="26" cy="18" r="1.8" fill="#FFFDF9"/>
    </svg>`
  },
  {
    id: 'aed',
    name: 'AED自動體外去顫器',
    enName: 'AED Defibrillator',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '全自動分析心律並對致命心律不整（VF/VT）給予電擊去顫。',
    indication: '心肺功能停止（OHCA）、無意識且無正常呼吸時立刻使用。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 頂部厚實手提把 -->
      <path d="M36 24 V16 C36 11 64 11 64 16 V24" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾亮黃/珊瑚紅高辨識度 AED 機身 -->
      <rect x="18" y="22" width="64" height="58" rx="14" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="29" cy="29" rx="6" ry="2.2" fill="#FFFFFF" opacity="0.7"/>
      <!-- 大大的愛心閃電標誌 (AED核心特徵) -->
      <path d="M42 40 C42 35 33 33 30 38 C27 43 32 51 42 58 C52 51 57 43 54 38 C51 33 42 35 42 40 Z" fill="#EB6A5B" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
      <polygon points="43,38 37,47 43,47 40,55 48,45 42,45" fill="#FFFDF9"/>
      <!-- 1號薄荷綠電源鍵 & 2號亮橘電擊鍵 -->
      <circle cx="67" cy="38" r="5.5" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <circle cx="67" cy="54" r="6.5" fill="#EB6A5B" stroke="#463529" stroke-width="2.2"/>
      <polygon points="67,50 64,55 68,55 66,58 70,53 67,53" fill="#F6C46A"/>
      <!-- 底部兩塊白色電擊貼片電極導線 -->
      <rect x="31" y="67" width="38" height="7" rx="3.5" fill="#463529"/>
      <path d="M40 74 V86 M60 74 V86" stroke="#463529" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="32" y="83" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="54" y="83" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'oxygen_tank',
    name: '三合一攜帶氧氣',
    enName: 'Portable Oxygen Kit',
    category: 'airway',
    categoryName: '呼吸道與氧氣',
    desc: '攜帶型鋁合金高壓氧氣鋼瓶，配有減壓閥、流量調節器與手提袋。',
    indication: '所有需要到院前氧氣治療之傷病患（BVM、NRM、面罩、鼻導管）。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 側背帶 -->
      <path d="M32 46 C16 50 16 76 32 82" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- 胖胖薄荷綠氧氣鋼瓶筒身 -->
      <path d="M34 36 C34 26 66 26 66 36 V80 C66 86 60 90 50 90 C40 90 34 86 34 80 Z" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="41" cy="48" rx="3" ry="12" fill="#FFFFFF" opacity="0.6"/>
      <!-- 白色肩部識別環與 O2 字樣 -->
      <rect x="34" y="42" width="32" height="16" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <text x="41" y="54" font-size="11" fill="#5F9E84" font-weight="900">O₂</text>
      <!-- 頂部黃銅減壓閥與圓形壓力錶 Regulator & Gauge -->
      <rect x="44" y="16" width="12" height="12" rx="3" fill="#F6C46A" stroke="#463529" stroke-width="2.3"/>
      <circle cx="62" cy="19" r="7.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <line x1="62" y1="19" x2="66" y2="15" stroke="#EB6A5B" stroke-width="2.2" stroke-linecap="round"/>
      <!-- 左側流量轉鈕 -->
      <rect x="35" y="17" width="9" height="7" rx="2.5" fill="#5C4738" stroke="#463529" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'micropore_tape',
    name: '紙膠帶',
    enName: 'Micropore Tape',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '醫用透氣紙膠帶，固定紗布敷料、點滴導管與護木。',
    indication: '傷口覆蓋後敷料周邊固定、靜脈留置針固定。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 拉出的一截鋸齒撕口白紙膠帶 -->
      <path d="M52 38 C64 28 78 28 90 35 L86 52 C75 45 64 45 54 54 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 立體厚實圓餅膠帶捲 -->
      <ellipse cx="40" cy="60" rx="23" ry="18" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="40" cy="54" rx="23" ry="18" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 經典水藍色塑膠內軸 Core -->
      <ellipse cx="40" cy="54" rx="11" ry="8.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <ellipse cx="40" cy="55" rx="6" ry="4.5" fill="#F6EFE2" stroke="#463529" stroke-width="1.8"/>
    </svg>`
  },
  {
    id: 'splint_roll',
    name: '捲筒式護木',
    enName: 'SAM Splint Roll',
    category: 'trauma',
    categoryName: '創傷固定與止血',
    desc: '捲曲收納狀態的鋁質軟式夾板，體積小巧便於攜帶。',
    indication: '四肢骨折、脫臼應急固定前之快速取用備料。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 蛋糕捲般的橘藍雙色夾板捲筒 (SAM Splint收納態) -->
      <circle cx="50" cy="50" r="27" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <circle cx="50" cy="50" r="21" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="15" fill="#F6C46A" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="9" fill="#6BB2E2" stroke="#463529" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- 微翹的外層尾端 -->
      <path d="M72 34 C81 42 82 58 75 68" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="38" cy="34" rx="5" ry="2.2" transform="rotate(-30 38 34)" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'restraints',
    name: '約束帶',
    enName: 'Limb Restraints',
    category: 'special',
    categoryName: '特殊包與工具',
    desc: '加厚軟質肢體保護性約束帶，預防躁動傷患自傷或攻擊。',
    indication: '譫妄、嚴重躁動攻擊、自傷風險、精神急症患者運送保護。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 兩端長長固定綁帶 -->
      <path d="M22 50 C10 50 10 68 22 76" stroke="#463529" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M22 50 C10 50 10 68 22 76" stroke="#F6C46A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M78 50 C90 50 90 68 78 76" stroke="#463529" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M78 50 C90 50 90 68 78 76" stroke="#F6C46A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- 蓬鬆棉花糖白羊羔絨內襯滾邊 Fluffy Padding -->
      <rect x="20" y="32" width="60" height="36" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 天藍色加厚護腕主體 -->
      <rect x="23" y="38" width="54" height="24" rx="7" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <!-- 中央快拆安全插扣 Buckle -->
      <rect x="42" y="42" width="16" height="16" rx="4" fill="#5C4738" stroke="#463529" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="3.5" fill="#EB6A5B"/>
    </svg>`
  },
  {
    id: 'stab_vest',
    name: '防刺背心',
    enName: 'Stab-proof Vest',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '高強度防刺纖維背心，保障執勤救護員免受刀刃穿刺傷害。',
    indication: '暴力攻擊傾向現場、鬥毆砍殺案件、高危險治安現場出勤。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 圓潤厚實深藍/巧克戰術防刺背心 -->
      <path d="M28 18 L40 18 C42 28 58 28 60 18 L72 18 L76 38 L70 42 V78 C70 83 30 83 30 78 V42 L24 38 Z" fill="#5C4738" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 肩膀調整魔鬼氈護墊 -->
      <rect x="28" y="18" width="11" height="12" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2"/>
      <rect x="61" y="18" width="11" height="12" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2"/>
      <!-- 胸前醒目 EMS 反光銘牌 -->
      <rect x="35" y="36" width="30" height="13" rx="3.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <text x="39.5" y="45.5" font-size="8.5" fill="#EB6A5B" font-weight="900">EMS</text>
      <!-- 腰部黃綠格紋高反光警語帶 Checkered Reflective Strip -->
      <rect x="30" y="62" width="40" height="8" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <rect x="38" y="62" width="8" height="8" fill="#7CB69D"/>
      <rect x="54" y="62" width="8" height="8" fill="#7CB69D"/>
    </svg>`
  },
  {
    id: 'helmet',
    name: '救護頭盔',
    enName: 'Rescue Helmet',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '救護專用輕量防護頭盔，防止落石、撞擊並配有防護面罩。',
    indication: '車禍脫困、倒塌搜救、高空吊掛、落石危險區域出勤。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 下巴Y型安全扣帶 Chin Strap -->
      <path d="M28 56 C32 76 44 84 50 84 C56 84 68 76 72 56" stroke="#5C4738" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <rect x="45" y="79" width="10" height="7" rx="2.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <!-- 圓滾滾奶油白救護安全帽殼 -->
      <path d="M18 52 C18 28 32 16 50 16 C68 16 82 28 82 52 C82 58 76 60 68 60 H32 C24 60 18 58 18 52 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <ellipse cx="36" cy="26" rx="8" ry="3.5" transform="rotate(-18 36 26)" fill="#FFFFFF" opacity="0.9"/>
      <!-- 珊瑚紅反光條與正面紅十字徽章 -->
      <path d="M21 47 C36 42 64 42 79 47" stroke="#EB6A5B" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="50" cy="34" r="7.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <path d="M50 30 V38 M46 34 H54" stroke="#FFFDF9" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 透明水藍護目鏡面罩 Visor -->
      <path d="M25 54 C34 68 66 68 75 54 Z" fill="#6BB2E2" fill-opacity="0.65" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'alcohol_spray',
    name: '酒精噴霧',
    enName: '75% Alcohol Spray',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '75% 醫用消毒酒精噴霧瓶，快速消滅病原菌，環境與雙手即時清消。',
    indication: '法定傳染病現場、高傳染風險患者處置後雙手與裝備即時清消。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 噴出的可愛小水霧愛心/水珠 Mist -->
      <circle cx="17" cy="24" r="2.5" fill="#6BB2E2"/>
      <circle cx="11" cy="31" r="3" fill="#D6ECF9" stroke="#6BB2E2" stroke-width="1.5"/>
      <circle cx="19" cy="36" r="2" fill="#6BB2E2"/>
      <!-- 天藍噴槍頭與小扳機 Trigger Head -->
      <path d="M36 32 C32 40 34 48 39 50" stroke="#EB6A5B" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M36 32 C32 40 34 48 39 50" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M26 24 H44 V18 C44 14 62 14 62 20 V34 H42 L36 34 H26 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 瓶頸環 -->
      <rect x="43" y="34" width="18" height="6" rx="2" fill="#F6EFE2" stroke="#463529" stroke-width="2.3"/>
      <!-- 圓滾滾純白噴霧瓶身 -->
      <rect x="33" y="40" width="38" height="48" rx="13" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <path d="M35 56 C44 53 60 57 69 55 V76 C69 82 64 86 58 86 H46 C40 86 35 82 35 76 Z" fill="#D6ECF9"/>
      <!-- 75% 消毒標籤 -->
      <rect x="39" y="57" width="26" height="21" rx="4" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <text x="42" y="68" font-size="8" fill="#FFFDF9" font-weight="900">75%</text>
      <text x="41" y="75" font-size="4" fill="#FFFDF9" font-weight="bold">ALCOHOL</text>
      <ellipse cx="64" cy="49" rx="2" ry="4" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
  },
  {
    id: 'n95_mask',
    name: 'N95口罩',
    enName: 'N95 Respirator',
    category: 'ppe',
    categoryName: '防護與衛生',
    desc: '緊密貼合型 N95 顆粒物防護口罩，有效過濾 95% 以上非油性懸浮微粒與氣膠。',
    indication: '法定傳染病（肺結核、麻疹、COVID-19重症、禽流感）、產生氣膠處置（插管、抽吸）。',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 雙條黃色頭戴式鬆緊帶 Headbands (N95非耳掛之核心特徵) -->
      <path d="M28 38 C10 34 8 18 24 12 C42 6 70 8 78 20" stroke="#F6C46A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M30 66 C12 72 12 86 28 90 C46 94 72 88 78 74" stroke="#F6C46A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- 圓滾滾 3D 碗狀立體口罩本體 Cup Shell -->
      <path d="M24 50 C24 28 42 20 68 24 C79 36 83 48 83 52 C83 56 79 68 68 78 C42 82 24 72 24 50 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 立體縫線與壓邊 -->
      <path d="M67 25 C64 42 66 52 76 52 C66 52 64 62 67 77" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <path d="M28 50 C42 50 56 46 67 25" stroke="#D5C7B2" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
      <!-- 金屬鼻樑壓片 Metal Nose Clip -->
      <rect x="59" y="25" width="17" height="5.5" rx="2.5" transform="rotate(24 67 27)" fill="#DCE4EC" stroke="#463529" stroke-width="2.2"/>
      <!-- 醒目 N95 認證印字 -->
      <text x="34" y="54" font-size="10" fill="#4F94C4" font-weight="900">N95</text>
      <text x="35" y="62" font-size="4.5" fill="#7A6352" font-weight="bold">NIOSH</text>
    </svg>`
  }
];

export function getItemById(id: string): MedicalItem | undefined {
  return MEDICAL_ITEMS.find(item => item.id === id);
}

export function getItemsByCategory(category: string): MedicalItem[] {
  return MEDICAL_ITEMS.filter(item => item.category === category);
}
