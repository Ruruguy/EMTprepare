var D=Object.defineProperty;var P=(C,t,e)=>t in C?D(C,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):C[t]=e;var n=(C,t,e)=>P(C,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const E=[{id:"bvm",name:"甦醒球 BVM",enName:"Bag Valve Mask",category:"airway",categoryName:"呼吸道與氧氣",desc:"正壓通氣裝置，配合單向閥與蓄氣袋使用。",indication:"患者停止呼吸（無呼吸/瀕死呼吸）或呼吸極度微弱、無效通氣時。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"simple_mask",name:"簡單型氧氣面罩",enName:"Simple Face Mask",category:"airway",categoryName:"呼吸道與氧氣",desc:"提供中濃度氧氣（約 40~60%，流量 6~10 L/min）。",indication:"中度缺氧、自發性呼吸尚平穩但需氧療者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"nrm_mask",name:"非再吸入型氧氣面罩",enName:"NRM Mask",category:"airway",categoryName:"呼吸道與氧氣",desc:"提供高濃度氧氣（80~100%，流量 10~15 L/min）。",indication:"嚴重缺氧、CO中毒、休克、嚴重創傷呼吸困難者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"nasal_cannula",name:"氧氣鼻導管",enName:"Nasal Cannula",category:"airway",categoryName:"呼吸道與氧氣",desc:"低濃度氧氣（24~44%，流量 1~6 L/min），攜帶舒適。",indication:"輕度低血氧、慢性阻塞性肺病穩定者、無法耐受面罩者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"c_collar",name:"頸圈",enName:"Cervical Collar",category:"trauma",categoryName:"創傷固定與止血",desc:"限制頸椎過度彎曲、後仰或扭轉，保護脊椎神經。",indication:"高能量撞擊創傷、車禍、墜落傷、懷疑頸椎損傷者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"spine_board",name:"長背板",enName:"Spine Board",category:"trauma",categoryName:"創傷固定與止血",desc:"剛性全身固定板，用於脊椎受傷患者固定與搬運。",indication:"全身多處外傷、疑似脊椎損傷、需全身固定及水平搬運時。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"gauze",name:"紗布",enName:"Sterile Gauze",category:"trauma",categoryName:"創傷固定與止血",desc:"無菌紗布塊，用於覆蓋傷口、直接加壓止血與吸收滲出液。",indication:"各類擦傷、裂傷出血、傷口覆蓋保護。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"tourniquet",name:"止血帶",enName:"CAT Tourniquet",category:"trauma",categoryName:"創傷固定與止血",desc:"肢體大動脈噴血專用止血帶，具旋緊絞棒與固定扣。",indication:"四肢大出血、動脈性噴血、加壓止血無效時。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"elastic_bandage",name:"彈性繃帶",enName:"Elastic Bandage",category:"trauma",categoryName:"創傷固定與止血",desc:"加壓包紮、固定敷料及扭挫傷支撐。",indication:"傷口加壓止血、敷料固定、關節扭傷支撐。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"sam_splint",name:"骨折固定夾板",enName:"SAM Splint",category:"trauma",categoryName:"創傷固定與止血",desc:"輕質高分子軟鋁夾板，可自由塑型為U型或C型固定骨折。",indication:"四肢閉鎖性或開放性骨折固定、關節脫臼固定。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"ems_bag",name:"救護包",enName:"EMS Bag",category:"special",categoryName:"特殊包與工具",desc:"標準緊急救護技術員出勤背包，收納全套第一線急救器材。",indication:"所有出勤救護情境之核心載具與器材收納。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"stethoscope",name:"聽診器",enName:"Stethoscope",category:"vitals",categoryName:"生命徵象監測",desc:"聆聽心音、肺部呼吸音（哮鳴、囉音、對稱性）與測量血壓。",indication:"呼吸喘、胸痛、懷疑氣胸或氣喘、生命徵象全面評估。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"bp_monitor",name:"血壓機",enName:"BP Monitor",category:"vitals",categoryName:"生命徵象監測",desc:"測量患者收縮壓、舒張壓與平均動脈壓。",indication:"休克、高血壓急症、頭暈、創傷、常規生命徵象量測。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"pulse_oximeter",name:"血氧機",enName:"Pulse Oximeter",category:"vitals",categoryName:"生命徵象監測",desc:"無創指夾式測量周邊動脈血氧飽和度（SpO2）與脈搏速率。",indication:"呼吸急促、意識改變、紫紺、一氧化碳中毒鑑別、常規生命徵象。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"penlight",name:"瞳孔筆",enName:"Penlight",category:"vitals",categoryName:"生命徵象監測",desc:"檢查患者雙眼瞳孔大小、對光反射（直接與間接光反射）。",indication:"頭部外傷、中風、昏迷、腦震盪、評估神經學功能。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"triangular_bandage",name:"三角巾",enName:"Triangular Bandage",category:"trauma",categoryName:"創傷固定與止血",desc:"懸臂吊帶托起受傷上肢，亦可用於頭部、關節包紮及固定夾板。",indication:"鎖骨骨折、手臂骨折、肩關節脫臼、大面積傷口包紮。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"iv_bag",name:"點滴",enName:"IV Infusion Bag",category:"meds",categoryName:"藥物與輸液",desc:"生理食鹽水 (0.9% NaCl) 靜脈輸液，建立給藥途徑與擴充血容積。",indication:"低血容休克、熱衰竭脫水、大失血維持灌流、給藥途徑建立。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"glucometer",name:"血糖機",enName:"Glucometer",category:"vitals",categoryName:"生命徵象監測",desc:"快速檢驗微血管全血血糖濃度，確認有無低血糖或高血糖危象。",indication:"意識不清、昏睡、中風鑑別診斷、糖尿病史患者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"ekg",name:"心電圖機 EKG",enName:"12-Lead EKG",category:"vitals",categoryName:"生命徵象監測",desc:"12導程心電圖監測儀，精準記錄心臟電氣活動與缺血變化。",indication:"急性胸痛、懷疑心肌梗塞 (STEMI)、胸悶冷汗、心律不整、到院前即時傳輸。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"glucose_powder",name:"糖粉",enName:"Oral Glucose",category:"meds",categoryName:"藥物與輸液",desc:"口服單純醣類，用於意識清楚且能吞嚥的低血糖患者。",indication:"低血糖症狀（血糖值 < 60 mg/dL），患者意識清醒可自主吞嚥。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"saline_bottle",name:"沖洗用生理食鹽水",enName:"Normal Saline (Irrigation)",category:"meds",categoryName:"藥物與輸液",desc:"無菌沖洗液，用於清洗傷口異物、化學物噴濺沖眼、降溫冷敷。",indication:"髒污傷口清創、熱液燙傷沖水降溫、眼部異物化學沖洗。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"cotton_swabs",name:"棉枝",enName:"Cotton Swabs",category:"trauma",categoryName:"創傷固定與止血",desc:"無菌長柄棉棒，用於塗抹藥劑、清理細小傷口分泌物與採檢。",indication:"傷口清創周邊塗抹、清潔異物、輔助換藥處置。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"ob_kit",name:"生產包",enName:"OB Kit",category:"special",categoryName:"特殊包與工具",desc:"內含無菌臍帶夾、無菌臍帶剪、吸鼻球、包巾等急產接生組件。",indication:"現場急產、胎頭露出、不可避免之到院前分娩。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"burn_kit",name:"燒傷包",enName:"Burn Kit",category:"special",categoryName:"特殊包與工具",desc:"無菌不沾黏敷料、燙傷水凝膠敷料，保護創面避免感染失水。",indication:"二度或三度大面積燒燙傷、化學灼傷洗淨後創面保護。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"trauma_shears",name:"剪刀",enName:"Trauma Shears",category:"special",categoryName:"特殊包與工具",desc:"救護專用醫療剪刀，鈍頭安全設計，能迅速剪開厚重衣物。",indication:"創傷暴露檢查、快速剪開傷患褲管、袖口、安全帶。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"blanket",name:"棉被",enName:"Patient Blanket",category:"special",categoryName:"特殊包與工具",desc:"保暖棉被，預防創傷三機（低體溫、酸中毒、凝血功能障礙）。",indication:"各類創傷保暖、失血性休克預防低體溫、安撫患者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"space_blanket",name:"保暖鋁箔",enName:"Space Blanket",category:"special",categoryName:"特殊包與工具",desc:"反射人體輻射熱達 90% 的輕便太空毯，高效防風防水保溫。",indication:"失溫、戶外搜救、創傷休克、新生兒急產後包裹保溫。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 金銀雙面折疊太空鋁箔毯 (金色外層 + 銀白內層) -->
      <polygon points="22,30 52,18 80,30 50,44" fill="#F6C46A" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="50,44 80,30 78,64 48,76" fill="#DCE4EC" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="22,30 50,44 48,76 20,62" fill="#E6AC4C" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="48,76 78,64 72,80 42,90" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 閃亮亮四角星芒 Sparkles -->
      <path d="M70 16 L72 22 L78 24 L72 26 L70 32 L68 26 L62 24 L68 22 Z" fill="#FFFDF9" stroke="#463529" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M28 48 L29.5 52 L33.5 53.5 L29.5 55 L28 59 L26.5 55 L22.5 53.5 L26.5 52 Z" fill="#FFFDF9"/>
    </svg>`},{id:"gloves",name:"手套",enName:"Nitrile Gloves",category:"ppe",categoryName:"防護與衛生",desc:"無粉丁腈檢驗手套，阻絕血液、體液與致病菌傳染。",indication:"所有救護出勤、接觸任何患者或耗材前之必備防護。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 後方天藍胖胖手套 -->
      <path d="M46 42 C44 27 52 22 55 29 C57 21 65 21 65 29 C68 23 76 26 73 35 C78 32 84 37 80 45 C77 56 73 65 69 76 L47 72 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 前方粉水藍胖胖五指手套 -->
      <path d="M18 52 C13 44 19 38 24 44 C22 31 30 27 33 34 C35 25 43 25 43 34 C46 28 54 31 51 40 C56 37 61 42 58 50 C54 61 50 70 46 80 L23 76 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 圓潤捲邊袖口 Cuffs -->
      <rect x="20" y="73" width="28" height="8" rx="4" transform="rotate(7 34 77)" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <rect x="46" y="69" width="25" height="8" rx="4" transform="rotate(7 58 73)" fill="#4F94C4" stroke="#463529" stroke-width="2.3"/>
      <!-- 白高光 -->
      <ellipse cx="35" cy="54" rx="4" ry="7" fill="#FFFFFF" opacity="0.65"/>
    </svg>`},{id:"sterile_gloves",name:"無菌手套",enName:"Sterile Surgical Gloves",category:"ppe",categoryName:"防護與衛生",desc:"滅菌獨立包裝外科手套，袖口折邊防污染，適用無菌侵入性處置。",indication:"現場急產接生、無菌換藥、大面積創面處理、侵入性處置。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"mask",name:"口罩",enName:"Surgical Mask",category:"ppe",categoryName:"防護與衛生",desc:"三層醫用防護口罩，阻隔飛沫、病原體傳播。",indication:"所有接觸患者場合、呼吸道症狀、發燒感染高風險。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"gown",name:"防護衣",enName:"PPE Isolation Gown",category:"ppe",categoryName:"防護與衛生",desc:"拋棄式防液體滲透隔離衣，全方位保護救護人員驅幹與手臂。",indication:"大量血液噴濺風險、傳染病疑似個案、分娩急救。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"opa",name:"口咽 OPA",enName:"Oropharyngeal Airway",category:"airway",categoryName:"呼吸道與氧氣",desc:"無意識患者維持呼吸道暢通，阻擋舌根後墜。",indication:"深度昏迷（無嘔吐反射）、OHCA、需要建立暢通氣道者。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 彎月形圓潤透明口咽管道 Guedel Curve -->
      <path d="M64 38 C66 58 50 78 30 78 C20 78 18 66 28 62 C42 58 50 48 50 38 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M57 44 C55 56 44 67 30 69" stroke="#6BB2E2" stroke-width="3" stroke-linecap="round"/>
      <!-- 硬質防咬塊 Bite Block -->
      <rect x="51" y="28" width="14" height="12" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <!-- 亮橘色尺寸辨識翼緣 Flange (OPA關鍵特徵) -->
      <ellipse cx="58" cy="24" rx="14" ry="7" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="58" cy="24" rx="5.5" ry="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
    </svg>`},{id:"npa",name:"鼻咽 NPA",enName:"Nasopharyngeal Airway",category:"airway",categoryName:"呼吸道與氧氣",desc:"軟質導氣管，保留嘔吐反射或牙關緊閉時使用。",indication:"意識不清但有咽喉嘔吐反射、痙攣牙關緊閉、不能插口咽管時。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 柔軟薄荷綠微彎鼻咽軟管與斜切尖端 Beveled Tip -->
      <path d="M62 24 C56 44 44 58 28 70 L34 80 C54 66 68 48 74 28 Z" fill="#7CB69D" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- 高光虛線 -->
      <path d="M65 34 C59 49 49 60 37 69" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <!-- 頂端可愛小喇叭口 Trumpet Flange (NPA防滑入鼻腔特徵) -->
      <ellipse cx="68" cy="24" rx="13" ry="7.5" transform="rotate(20 68 24)" fill="#94C9B3" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="68" cy="24" rx="5.5" ry="3.2" transform="rotate(20 68 24)" fill="#463529"/>
    </svg>`},{id:"suction_catheter",name:"抽吸管",enName:"Yankauer Suction",category:"airway",categoryName:"呼吸道與氧氣",desc:"硬式彎角抽吸導管，快速吸除口腔內嘔吐物、積血與痰液。",indication:"呼吸道異物、嘔吐物阻塞、大口吐血、分泌物過多導致窒息。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"aed",name:"AED自動體外去顫器",enName:"AED Defibrillator",category:"special",categoryName:"特殊包與工具",desc:"全自動分析心律並對致命心律不整（VF/VT）給予電擊去顫。",indication:"心肺功能停止（OHCA）、無意識且無正常呼吸時立刻使用。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"oxygen_tank",name:"三合一攜帶氧氣",enName:"Portable Oxygen Kit",category:"airway",categoryName:"呼吸道與氧氣",desc:"攜帶型鋁合金高壓氧氣鋼瓶，配有減壓閥、流量調節器與手提袋。",indication:"所有需要到院前氧氣治療之傷病患（BVM、NRM、面罩、鼻導管）。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"micropore_tape",name:"紙膠帶",enName:"Micropore Tape",category:"trauma",categoryName:"創傷固定與止血",desc:"醫用透氣紙膠帶，固定紗布敷料、點滴導管與護木。",indication:"傷口覆蓋後敷料周邊固定、靜脈留置針固定。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 拉出的一截鋸齒撕口白紙膠帶 -->
      <path d="M52 38 C64 28 78 28 90 35 L86 52 C75 45 64 45 54 54 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- 立體厚實圓餅膠帶捲 -->
      <ellipse cx="40" cy="60" rx="23" ry="18" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="40" cy="54" rx="23" ry="18" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- 經典水藍色塑膠內軸 Core -->
      <ellipse cx="40" cy="54" rx="11" ry="8.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <ellipse cx="40" cy="55" rx="6" ry="4.5" fill="#F6EFE2" stroke="#463529" stroke-width="1.8"/>
    </svg>`},{id:"splint_roll",name:"捲筒式護木",enName:"SAM Splint Roll",category:"trauma",categoryName:"創傷固定與止血",desc:"捲曲收納狀態的鋁質軟式夾板，體積小巧便於攜帶。",indication:"四肢骨折、脫臼應急固定前之快速取用備料。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 蛋糕捲般的橘藍雙色夾板捲筒 (SAM Splint收納態) -->
      <circle cx="50" cy="50" r="27" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <circle cx="50" cy="50" r="21" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="15" fill="#F6C46A" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="9" fill="#6BB2E2" stroke="#463529" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- 微翹的外層尾端 -->
      <path d="M72 34 C81 42 82 58 75 68" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="38" cy="34" rx="5" ry="2.2" transform="rotate(-30 38 34)" fill="#FFFFFF" opacity="0.7"/>
    </svg>`},{id:"restraints",name:"約束帶",enName:"Limb Restraints",category:"special",categoryName:"特殊包與工具",desc:"加厚軟質肢體保護性約束帶，預防躁動傷患自傷或攻擊。",indication:"譫妄、嚴重躁動攻擊、自傷風險、精神急症患者運送保護。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"stab_vest",name:"防刺背心",enName:"Stab-proof Vest",category:"ppe",categoryName:"防護與衛生",desc:"高強度防刺纖維背心，保障執勤救護員免受刀刃穿刺傷害。",indication:"暴力攻擊傾向現場、鬥毆砍殺案件、高危險治安現場出勤。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"helmet",name:"救護頭盔",enName:"Rescue Helmet",category:"ppe",categoryName:"防護與衛生",desc:"救護專用輕量防護頭盔，防止落石、撞擊並配有防護面罩。",indication:"車禍脫困、倒塌搜救、高空吊掛、落石危險區域出勤。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"alcohol_spray",name:"酒精噴霧",enName:"75% Alcohol Spray",category:"ppe",categoryName:"防護與衛生",desc:"75% 醫用消毒酒精噴霧瓶，快速消滅病原菌，環境與雙手即時清消。",indication:"法定傳染病現場、高傳染風險患者處置後雙手與裝備即時清消。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"n95_mask",name:"N95口罩",enName:"N95 Respirator",category:"ppe",categoryName:"防護與衛生",desc:"緊密貼合型 N95 顆粒物防護口罩，有效過濾 95% 以上非油性懸浮微粒與氣膠。",indication:"法定傳染病（肺結核、麻疹、COVID-19重症、禽流感）、產生氣膠處置（插管、抽吸）。",svg:`<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`}];function M(C){return E.find(t=>t.id===C)}const S=[{id:"sc-ohca",title:"OHCA 到院前心肺功能停止",category:"高級救命急症",urgency:"critical",patient:"70歲男性・無意識",description:"患者家中突然倒地呼叫無反應！評估無呼吸且無頸動脈脈搏，需立即心肺復甦！",requiredItemIds:["aed","bvm","opa"],rationale:"OHCA 應立即啟動高品質 CPR，儘速使用 AED 分析心律去顫，量測長度置入口咽管 OPA 維持呼吸道暢通防舌根下墜，並以甦醒球 BVM 正壓給氧通氣！",tip:"💡 口咽管長度測量：門牙至下顎角（或嘴角至耳垂），置入時先凸面向天花板再旋轉180度！",timeLimitSec:30},{id:"sc-arterial-bleed",title:"股動脈大噴血創傷",category:"大出血創傷",urgency:"critical",patient:"35歲工廠工人・意識漸模糊",description:"機具割傷大腿內側，鮮紅色血液呈噴射狀湧出，幾秒內浸濕整條褲子！",requiredItemIds:["tourniquet","gauze","gloves"],rationale:"四肢動脈大出血應立刻在傷口近心端 5~7 公分施打戰術止血帶並旋緊，紗布加壓包紮並記錄時間！",tip:"💡 止血帶是四肢噴血的救命關鍵，務必在時間標籤寫上施打時間！",timeLimitSec:30},{id:"sc-spinal-trauma",title:"車禍高能量撞擊脊椎疑慮",category:"重大外傷固定",urgency:"high",patient:"22歲機車騎士・發抖覺得冷",description:"十字路口側撞拋飛5米，主訴頸部與後背強烈劇痛，雙腳發麻無法抬起，全身發抖直喊好冷！需固定頸椎、上背板並立即保暖！",requiredItemIds:["c_collar","spine_board","blanket"],rationale:"高能量撞擊合併神經學症狀，必須立即徒手固定頭頸並上頸圈，以長背板軸線翻身固定，蓋棉被防失溫！",tip:"💡 創傷低體溫會破壞凝血功能，長背板固定後務必注意保暖！",timeLimitSec:30},{id:"sc-asthma-attack",title:"重度氣喘發作合併低血氧",category:"內科呼吸急症",urgency:"high",patient:"28歲女性・端坐呼吸發紺",description:"嚴重呼吸困難說不出完整句子，嘴唇發紫，血氧飽和度 SpO2 掉至 80%！",requiredItemIds:["nrm_mask","pulse_oximeter","stethoscope"],rationale:"重度缺氧應立即給予非再吸入型氧氣面罩（NRM 15L/min），夾血氧機連續監測，以聽診器評估哮鳴音！",tip:"💡 NRM面罩使用前，須先用手指堵住出氣孔將蓄氣袋充飽氧氣！",timeLimitSec:30},{id:"sc-hypoglycemia",title:"低血糖急症（血糖 Low 處置）",category:"代謝性急症",urgency:"high",patient:"68歲糖尿病患・昏睡冷汗・血糖 Low",description:"晨起未進食注射胰島素後癱倒沙發，呼之昏睡冷汗直冒，血糖機檢測數值顯示「Low」！需備妥監測與升糖器材！",requiredItemIds:["glucometer","iv_bag","glucose_powder"],rationale:"低血糖急症應以血糖機密切監測；若昏迷無法吞嚥須建立點滴（IV）輸液途徑給糖，意識清楚能吞嚥時則可給予口服糖粉！",tip:"💡 血糖機顯示「Low」代表血糖極度危險（通常 < 20 mg/dL）！必須精準評估意識與吞嚥反射決定由靜脈點滴或口服糖粉給糖！",timeLimitSec:30},{id:"sc-burn-scalding",title:"二度大面積沸水熱液燙傷",category:"燒燙傷處置",urgency:"high",patient:"4歲幼童・劇痛嚎哭",description:"誤翻熱湯造成前胸與雙前臂大片紅腫脫皮、水泡迅速形成，劇烈疼痛！",requiredItemIds:["saline_bottle","burn_kit","space_blanket"],rationale:"大面積燙傷應首選無菌生理食鹽水沖洗降溫，以燒傷包無菌覆蓋保護創面，並立即以保暖用鋁箔包裹防止體溫大量散失造成低體溫！",tip:"💡 大面積燒燙傷皮膚屏障受損極易迅速失溫，降溫與覆蓋後務必使用保暖用鋁箔防範低體溫危象！",timeLimitSec:30},{id:"sc-field-delivery",title:"急產接生（胎頭著冠露出）",category:"婦產急症",urgency:"critical",patient:"32歲產婦（第三胎）・陣痛劇烈",description:"救護員抵達時產婦頻繁用力，內褲掀開已見胎兒頭頂露出產道口！",requiredItemIds:["ob_kit","space_blanket","sterile_gloves"],rationale:"急產接生應穿戴無菌手套避免母體與新生兒感染，迅速備妥生產包迎接胎頭娩出，胎兒擦乾後立即使用保暖鋁箔包裹防失溫！",tip:"💡 接生現場須全程維持無菌原則！穿戴無菌手套並以無菌鋪單迎接胎兒，迅速保暖防範新生兒低體溫！",timeLimitSec:30},{id:"sc-forearm-fracture",title:"前臂骨折畸形骨擦音",category:"骨骼肌肉外傷",urgency:"medium",patient:"19歲排球員・前臂成角變形",description:"救球重摔手著地，前臂中段可見外觀明顯畸形骨凸，劇烈疼痛伴隨局部腫脹！",requiredItemIds:["sam_splint","elastic_bandage","triangular_bandage"],rationale:"四肢骨折固定應跨越上下兩關節，以軟鋁夾板（SAM Splint）塑形包覆，彈性繃帶固定，再以三角巾托吊！",tip:"💡 固定前後都必須評估末梢循環、感覺與運動功能（CSM/PMS）！",timeLimitSec:30},{id:"sc-vomit-airway-obstruction",title:"嘔吐物阻塞呼吸道窒息",category:"呼吸道異物急症",urgency:"critical",patient:"50歲男性・昏睡對痛沒反應",description:"大量嘔吐後呼吸發出咕嚕水泡聲，呼叫與給予疼痛刺激均毫無反應，嘴唇發紫！需抽吸氣道、維持通暢並鑑別昏迷原因！",requiredItemIds:["suction_catheter","opa","glucometer"],rationale:"呼吸道異物嘔吐物應立即以硬式抽吸管深入抽吸乾淨；病患深度昏迷對痛無反應且無嘔吐反射，應置入口咽管 OPA 防止舌根後墜，並立即以血糖機檢測排除低血糖昏迷！",tip:"💡 意識不清對痛沒反應之昏睡病患，務必量血糖排除低血糖；每次抽吸時間嚴禁超過 10~15 秒！",timeLimitSec:30},{id:"sc-violent-psychiatric",title:"精神異常躁動持刀防衛處置",category:"治安現場與自身安全",urgency:"critical",patient:"40歲男性・情緒極度狂躁攻擊",description:"現場男子揮舞美工刀咆哮，砸碎玻璃家具，拒絕任何人靠近並揚言攻擊！",requiredItemIds:["stab_vest","helmet","restraints"],rationale:"現場安全第一！未著防刺背心與救護安全頭盔前切勿貿然進入，待警力控制後以約束帶保護性約束運送！",tip:"💡 救護鐵則：救人之前，必須先保證救護人員自身的絕對安全！",timeLimitSec:30},{id:"sc-coronary-chest-pain",title:"急性胸痛疑似心肌梗塞 (STEMI)",category:"心血管急症",urgency:"critical",patient:"58歲男性・胸口壓榨劇痛冒冷汗",description:"胸骨下壓榨性劇痛輻射至下巴與左肩，患者面色慘白冒冷汗！需立即執行心電圖與評估！",requiredItemIds:["ekg","bp_monitor","pulse_oximeter"],rationale:"胸痛急症應立即施做 12 導程心電圖機 (EKG) 判讀有無 ST 段上升 (STEMI) 並提早傳輸醫院通報導管室，同時監測血壓與血氧！",tip:"💡 早期 12 導程 EKG 傳輸能大幅縮短心導管打通血管時間 (D2B 時間 < 90分鐘)！",timeLimitSec:30},{id:"sc-dyspnea-mouth-breathing",title:"呼吸喘且張口呼吸處置",category:"內科呼吸急症",urgency:"high",patient:"65歲女性・呼吸急促張口呼吸",description:"患者呼吸短促且張口呼吸、胸悶不適，呼吸頻率達 28 次/分！需立即評估血氧、肺音並給予氧氣面罩處置！",requiredItemIds:["pulse_oximeter","simple_mask","stethoscope"],rationale:"患者呼吸喘且張口呼吸時，應立即以血氧機監測周邊動脈血氧飽和度 (SpO2)，使用簡單型氧氣面罩提供穩定氧療，並以聽診器評估雙側肺部呼吸音！",tip:"💡 張口呼吸患者若使用鼻導管吸入氧濃度不穩定，首選簡單型氧氣面罩覆蓋口鼻提供 6~10 L/min 氧氣！",timeLimitSec:30},{id:"sc-unconscious-trauma",title:"意識不清創傷患者處置",category:"重大外傷固定與神經學評估",urgency:"critical",patient:"45歲男性・高處墜落意識不清昏迷",description:"工地施工自三公尺鷹架墜落，頭部著地腫脹出血，呼叫無反應、意識不清昏迷！需評估瞳孔光反射並實施全身脊椎固定！",requiredItemIds:["penlight","c_collar","spine_board"],rationale:"外傷昏迷患者必須立即以瞳孔筆檢查雙側瞳孔大小及對光反射（評估顱內壓升高與腦疝危象），並迅速配戴頸圈及上長背板固定，防止二次脊髓神經損害！",tip:"💡 創傷昏迷患者一律視同脊椎損傷！雙側瞳孔大小不對稱（Anisocoria）常提示嚴重的顱內出血或腦水腫！",timeLimitSec:30},{id:"sc-mild-hypoxia-fever",title:"發燒咳嗽輕度缺氧處置",category:"呼吸道與感染防護",urgency:"medium",patient:"72歲長者・發燒咳嗽・SpO2 91%",description:"發燒咳嗽輕度缺氧（SpO2 90~93%），沒有張口呼吸，無法耐受面罩之穩定輕症患者！需給予氧療與防護！",requiredItemIds:["nasal_cannula","oxygen_tank","mask"],rationale:"輕度缺氧且無張口呼吸、無法耐受面罩之穩定輕症患者，給予氧氣鼻導管最為合適；搭配三合一攜帶氧氣供氧，並請病患配戴口罩防範呼吸道飛沫傳播！",tip:"💡 氧氣鼻導管提供 1~6 L/min 氧氣（濃度約 24~44%）；發燒咳嗽者外層覆蓋外科口罩，兼顧氧療與感控防護！",timeLimitSec:30},{id:"sc-infectious-disease",title:"法定高傳染性疾病防護處置",category:"法定傳染病與感控防護",urgency:"critical",patient:"45歲男性・高燒持續咳嗽・疑似法定高傳染病",description:"接獲指揮中心通報，病患具流行病學接觸史，持續高燒劇烈咳嗽且喘，疑似法定飛沫與空氣高傳染性疾病！接觸前務必執行最高規格個人防護與清消！",requiredItemIds:["gown","alcohol_spray","n95_mask"],rationale:"面對法定飛沫與空氣高傳染性疾病，出勤人員接觸前必須穿著長袖防水防護衣保護身體，佩戴密合之 N95 口罩阻絕微細氣膠與飛沫核，並備妥 75% 酒精噴霧於接觸前後即時消毒手部與裝備，落實最高感控防護！",tip:"💡 面對法定飛沫/空氣傳播急症：穿著防護衣、佩戴 N95 口罩是阻絕感染的第一道防線；救護全程與脫除裝備時務必以酒精噴霧徹底消毒手部！",timeLimitSec:30},{id:"sc-minor-abrasion-dirty",title:"跌倒擦傷傷口髒污清潔處置",category:"輕度創傷與換藥",urgency:"medium",patient:"10歲男童・跌倒擦傷膝蓋手肘・傷口髒污",description:"跌倒受傷小擦傷，傷口表面夾雜砂石與泥土髒污！需清潔創面、移除異物並包紮防感染！",requiredItemIds:["saline_bottle","cotton_swabs","gauze"],rationale:"淺層擦傷夾雜髒污泥沙時，應先以沖洗用生理食鹽水大量沖洗除去粗大污物，再以無菌棉枝由傷口內側向外側輕柔清潔滾動帶走附著砂石，最後覆蓋無菌紗布保護創面防止外界污染感染！",tip:"💡 傷口清創換藥原則：由內往外環狀消毒清潔，切勿來回塗抹避免將外圍細菌帶回傷口中心；以棉枝清潔細部砂石後，再以無菌紗布覆蓋包紮！",timeLimitSec:30},{id:"sc-dressing-fixation",title:"創傷敷料包紮固定器材選用",category:"創傷包紮與敷料固定",urgency:"medium",patient:"30歲女性・肢體廣泛擦傷敷料固定",description:"傷口清創並覆蓋無菌紗布敷料後，為了確實固定敷料、防止滑脫移位並保護傷口，可以使用哪些器材進行固定？",requiredItemIds:["micropore_tape","elastic_bandage","triangular_bandage"],rationale:"無菌敷料覆蓋傷口後，需依解剖部位與受力狀況選擇合適器材確實固定：紙膠帶可貼合邊緣防止翹起，彈性繃帶可環形或8字包紮加壓固定，三角巾則可大面積包覆或懸吊托吊患肢！",tip:"💡 敷料固定三大耗材：紙膠帶（貼合邊緣固定）、彈性繃帶（四肢環狀加壓包紮）、三角巾（大範圍包覆懸吊固定），三者皆為救護敷料固定關鍵器材！",timeLimitSec:30},{id:"sc-npa-ankle-splint",title:"咽喉反射存在合併腳跟變形固定",category:"呼吸道維持與下肢骨折固定",urgency:"high",patient:"55歲男性・呼吸異音有嘔吐反射・腳跟腫脹變形",description:"傷患呼吸有鼾音異音但咽喉嘔吐反射仍存在，右側腳跟著地劇痛且外觀明顯變形！需維持氣道暢通並實施足跟骨折塑型固定！",requiredItemIds:["npa","splint_roll","elastic_bandage"],rationale:"患者呼吸道有異音但咽喉嘔吐反射存在時，禁用口咽管（OPA）避免誘發嘔吐，應選用軟質鼻咽管（NPA）維持呼吸道暢通；腳跟（跟骨）外傷變形則以具可塑性的捲筒式護木塑型包覆，並以彈性繃帶 8 字包紮穩固固定！",tip:"💡 臨床關鍵：咽喉反射尚存者首選鼻咽管 NPA（潤滑後斜面朝鼻中膈置入）；足踝與腳跟外傷以捲筒式護木塑型，再搭配彈性繃帶固定，固定前後切記評估末梢脈搏與感覺（CSM）！",timeLimitSec:30},{id:"sc-abdominal-bleed-exposure",title:"腹部大出血創傷暴露與包紮處置",category:"軀幹創傷與大出血處置",urgency:"critical",patient:"38歲男性・腹部遭刺衣服浸滿鮮血",description:"傷患腹部衣物浸滿鮮血、面色蒼白冒冷汗！需立即剪開衣物暴露傷口評估、以紗布加壓止血並用三角巾完成腹部包紮！",requiredItemIds:["trauma_shears","gauze","triangular_bandage"],rationale:"軀幹嚴重外傷出血應秉持「暴露（Exposure）」原則，先以救護剪刀迅速剪開厚重浸血衣物確認傷口位置與型態；隨即使用無菌紗布覆蓋傷口加壓止血，最後以三角巾完成腹部全範圍包紮固定！",tip:"💡 腹部創傷鐵則：嚴禁隔著衣物盲目止血！務必使用鈍頭剪刀剪除衣物看清傷口，以紗布加壓止血後，以三角巾大面積包紮固定！",timeLimitSec:30},{id:"sc-opioid-overdose",title:"疑似鴉片類藥物過量中毒",category:"中毒急症與呼吸抑制",urgency:"critical",patient:"27歲男性・呼之不應呼吸微弱・針尖瞳孔",description:"現場發現空針劑，患者深度昏迷、呼吸頻率每分鐘僅 4 次發紺！需評估瞳孔光反應、正壓人工呼吸與血氧監測！",requiredItemIds:["penlight","bvm","pulse_oximeter"],rationale:"鴉片類藥物中毒之經典三聯徵為昏迷、呼吸抑制與針尖樣瞳孔（Pinpoint pupils）。救護員必須以瞳孔筆檢查雙側瞳孔大小；因嚴重低換氣危及生命，需立即以甦醒球（BVM）輔助正壓給氧通氣，並夾上血氧機連續監測！",tip:"💡 臨床關鍵：雙側對稱如針尖般縮小（< 2mm）是鴉片類中毒強烈指標！第一要務是維持呼吸道並以 BVM 輔助通氣防缺氧腦病變！",timeLimitSec:30},{id:"sc-brainstem-stroke",title:"突發昏迷疑似腦幹中風出血",category:"神經急症與腦中風",urgency:"critical",patient:"62歲男性・劇烈頭痛後昏迷・血壓極高",description:"吃晚餐時突喊後腦劇痛隨即倒地不省人事，呼之無反應、四肢癱軟！需評估瞳孔對光反應、監測血壓變化並輔助通氣！",requiredItemIds:["penlight","bp_monitor","bvm"],rationale:"腦幹出血常急驟陷入深昏迷，必須以瞳孔筆檢查雙側瞳孔光反射與有無瞳孔不等大或針尖樣瞳孔（腦幹受壓迫）；以血壓機密集監測有無庫欣氏反應（血壓飆高、脈搏緩慢），並以甦醒球（BVM）維持呼吸與氧合！",tip:"💡 神經急症鐵則：瞳孔筆能快速鑑別大腦半球或腦幹病變；收縮壓飆高合併脈壓寬常為顱內壓極度升高徵兆！",timeLimitSec:30},{id:"sc-severe-hypothermia",title:"寒冬路倒環境性重度低體溫",category:"環境急症與失溫",urgency:"high",patient:"68歲街友・雨夜路倒冰冷・意識模糊",description:"寒流雨夜臥倒巷弄衣物濕透，肢體冰冷僵硬、全身顫抖停止已陷入嗜睡！需全面防風阻絕散熱並評估末梢循環！",requiredItemIds:["space_blanket","blanket","pulse_oximeter"],rationale:"重度失溫核心體溫低於 32°C 易引發致命心律不整。應脫除濕衣後，立即先裹上具高反射率的保暖用鋁箔鎖住人體輻射熱，外層覆蓋厚棉被阻絕冷空氣傳導，並以血氧機監測周邊脈搏與 SpO2！",tip:"💡 低體溫救護原則：內層鋁箔反射熱輻射＋外層棉被阻絕傳導對流；搬運時動作務必輕柔，防止誘發心室顫動（VF）！",timeLimitSec:30},{id:"sc-high-fall-trauma",title:"三樓高處墜落多重重大創傷",category:"高能量重大創傷",urgency:"critical",patient:"36歲工班師傅・三樓施工墜落水泥地",description:"施工自約 9 公尺高處墜落，主訴全身劇痛、頸背劇痛雙腿發麻、右小腿外觀畸形！需全脊椎防護並固定骨折！",requiredItemIds:["c_collar","spine_board","sam_splint"],rationale:"高能量垂直墜落（超過 6 米或 2 層樓以上）屬於最高等級重大創傷機制！救護員必須立即限制頭頸活動施打頸圈、使用長背板進行全身脊椎固定，並以骨折固定夾板為畸形肢體完成塑型固定！",tip:"💡 創傷救命守則：高處墜落一律視同頸椎與脊髓損傷！必須先上頸圈再翻身上長背板；肢體骨折固定應跨越上下兩關節！",timeLimitSec:30},{id:"sc-drowning-ohca",title:"溺水救起心肺功能停止處置",category:"環境急症與 OHCA",urgency:"critical",patient:"16歲少年・泳池沉底救起無呼吸脈搏",description:"泳池沉底數分鐘救起，口鼻不斷湧出大量白色泡沫與積水，呼叫無反應、無脈搏！需清空積水氣道、正壓通氣並去顫！",requiredItemIds:["suction_catheter","bvm","aed"],rationale:"溺水心跳停止之核心病理為嚴重低血氧！救護人員應立即以抽吸管深入抽吸清空口鼻大量泡沫與液體，立即以甦醒球（BVM）給予高品質正壓人工呼吸（給氧通氣為溺水救命之鑰），並貼上 AED 電極貼片分析心律！",tip:"💡 溺水 OHCA 關鍵：與一般心因性猝死不同，溺水急救「正壓人工呼吸（BVM）」極為關鍵；抽吸氣道務必迅速，切勿延誤通氣與壓胸！",timeLimitSec:30},{id:"sc-septic-shock-dyspnea",title:"休克低血壓合併嚴重呼吸衰竭",category:"重症休克與呼吸急症",urgency:"critical",patient:"74歲女性・高燒寒顫・血壓 70/40・喘促",description:"尿道感染引發嚴重敗血症，面色蒼白冒冷汗、血壓驟降休克、呼吸急促達 34 次/分端坐呼吸！需緊急輸液與高濃度給氧！",requiredItemIds:["iv_bag","nrm_mask","bp_monitor"],rationale:"重症休克合併低血壓與組織缺氧時，應立即建立點滴（IV）輸液管路大量灌注晶體溶液提升灌流壓，給予非再吸入型氧氣面罩（NRM 15L/min）提供高濃度氧療，並以血壓機每 3~5 分鐘重複量測評估輸液療效！",tip:"💡 休克處置三部曲：NRM 高濃度氧氣改善缺氧、點滴輸液搶救有效循環血容量、血壓機密切追蹤平均動脈壓（MAP）！",timeLimitSec:30},{id:"sc-fire-smoke-inhalation",title:"火災濃煙吸入嗆傷與低血氧",category:"火場急症與吸入性灼傷",urgency:"high",patient:"42歲男性・公寓火警濃煙受困救出",description:"自滿布黑煙之火場救出，鼻毛燒焦、聲音沙啞且咳出黑色炭黑痰液，血氧飽和度 SpO2 僅 84%！需立即高濃度氧療！",requiredItemIds:["nrm_mask","oxygen_tank","pulse_oximeter"],rationale:"火災濃煙吸入具有一氧化碳中毒與吸入性呼吸道熱化學灼傷之雙重風險。應立即使用三合一攜帶氧氣連接非再吸入型氧氣面罩（NRM），以 15 L/min 最大流量提供高濃度純氧加速一氧化碳排除，並以血氧機監測心率與末梢狀況！",tip:"💡 火場嗆傷關鍵：吸入濃煙者一律給予 100% 氧氣（NRM 15L/min）！注意：一氧化碳中毒時傳統血氧機數值可能偏高，仍須堅持高濃度給氧！",timeLimitSec:30},{id:"sc-post-seizure-trismus",title:"癲癇大發作後牙關緊閉鼾音",category:"神經急症與氣道維持",urgency:"high",patient:"33歲男性・全身抽搐剛停・牙關緊咬",description:"倒地全身強直陣攣抽搐 3 分鐘後抽搐停止陷入昏睡，雙唇緊閉牙關咬緊，呼吸發出沉重打鼾異音！需維持氣道並排除低血糖！",requiredItemIds:["npa","simple_mask","glucometer"],rationale:"癲癇發作後患者常處於昏睡期（Post-ictal state），牙關緊閉時嚴禁強行撬開插入口咽管，應首選軟質鼻咽管（NPA）維持呼吸道暢通，覆蓋簡單型氧氣面罩給氧，並立即以血糖機檢測血糖排除低血糖誘發抽搐！",tip:"💡 抽搐急救鐵則：牙關咬緊時嚴禁將手指或硬物塞入口中！首選 NPA 經鼻孔維持氣道；量測血糖是抽搐急症標準鑑別步驟！",timeLimitSec:30},{id:"sc-anaphylactic-shock",title:"戶外蜂螫嚴重過敏性休克",category:"過敏性急症與休克",urgency:"critical",patient:"48歲男性・山徑遭黑腹虎頭蜂螫傷數處",description:"遭蜂螫後數分鐘內全身泛發大片風疹塊奇癢無比，聲音迅速沙啞喉頭緊縮呼吸喘鳴，血壓暴跌至 75/45 mmHg！需緊急急救！",requiredItemIds:["nrm_mask","iv_bag","bp_monitor"],rationale:"蜂毒引發之嚴重過敏性休克（Anaphylaxis）會造成致命性喉頭水腫與全身血管通透性劇增血壓衰竭。需立即給予非再吸入型氧氣面罩（NRM 15L/min）維持氧合，迅速建立點滴（IV）輸液搶救血容量，並以血壓機每分鐘連續量測！",tip:"💡 過敏性休克危機：氣道水腫與血管崩潰在數分鐘內奪命！高濃度面罩氧療＋點滴快速輸液＋血壓監測分秒必爭！",timeLimitSec:30},{id:"sc-tension-pneumothorax",title:"胸壁穿刺傷疑慮張力性氣胸",category:"胸部重大創傷",urgency:"critical",patient:"29歲工人・金屬鋼筋刺入右側胸壁",description:"工地意外鐵條刺穿右胸，傷口處隨呼吸發出吸氣嘶嘶吸吮聲（Sucking chest wound），呼吸極度喘促發紺！需評估肺音並覆蓋處置！",requiredItemIds:["stethoscope","gauze","nrm_mask"],rationale:"開放性胸壁穿透傷極易演變成致命性張力性氣胸！應立即以無菌紗布覆蓋傷口（或胸封處置）阻絕外界空氣進一步抽入胸腔，使用聽診器聽診兩側肺呼吸音評估肺塌陷與縱膈偏移程度，並施予 NRM 高濃度面罩給氧！",tip:"💡 胸部創傷重點：聽診器評估雙側肺音對稱性是鑑別氣胸與血胸的黃金法寶；覆蓋紗布防止空氣進胸腔，NRM 15L/min 氧療！",timeLimitSec:30},{id:"sc-hemorrhagic-hypothermia",title:"重度失血性休克合併體溫驟降",category:"重大外傷與休克防護",urgency:"critical",patient:"51歲聯結車司機・撞擊肢體撕裂大量出血",description:"車禍重創雙下肢廣泛撕裂活動性噴血，患者面色慘白如紙、四肢冰冷發抖直喊好冷！需止血、保暖與體液復甦！",requiredItemIds:["tourniquet","space_blanket","iv_bag"],rationale:"創傷致死三聯徵（低體溫、酸中毒、凝血功能障礙）互相加劇！首要動作是立即在近端上止血帶阻斷動脈大出血，接著迅速以保暖用鋁箔緊緊包裹阻斷體溫流失，並同時建立靜脈點滴進行晶體輸液復甦！",tip:"💡 創傷黃金準則：止血帶阻斷大出血永遠第一優先！失血患者體溫每掉 1 度凝血酵素功能驟降，保暖鋁箔與點滴復甦缺一不可！",timeLimitSec:30}];function A(C=[]){const t=S.filter(e=>!C.includes(e.id));return t.length===0?S[Math.floor(Math.random()*S.length)]:t[Math.floor(Math.random()*t.length)]}class N{constructor(){n(this,"ctx",null);n(this,"isMuted",!1);n(this,"isBgmPlaying",!1);n(this,"isBgmMuted",!1);n(this,"bgmGainNode",null);n(this,"bgmTimerId",null);n(this,"bgmStepIndex",0);n(this,"nextNoteTime",0);n(this,"bgmTempo",126);n(this,"stepDur",60/126/4);n(this,"bgmMelody",[523.25,0,659.25,783.99,0,659.25,0,523.25,0,587.33,659.25,0,783.99,0,880,0,880,0,783.99,659.25,0,523.25,0,659.25,0,523.25,0,440,0,523.25,587.33,0,659.25,0,523.25,0,587.33,0,523.25,440,0,523.25,0,659.25,0,783.99,0,880,783.99,0,659.25,0,587.33,0,523.25,0,587.33,0,659.25,0,783.99,0,987.77,0]);n(this,"bgmBass",[130.81,0,196,0,130.81,0,196,0,130.81,0,196,0,130.81,0,196,0,110,0,164.81,0,110,0,164.81,0,110,0,164.81,0,110,0,164.81,0,87.31,0,130.81,0,87.31,0,130.81,0,87.31,0,130.81,0,87.31,0,130.81,0,98,0,146.83,0,98,0,146.83,0,98,0,146.83,0,98,0,146.83,0])}initCtx(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.isMuted=t}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}playGrab(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),i=this.ctx.currentTime;t.type="sine",t.frequency.setValueAtTime(320,i),t.frequency.exponentialRampToValueAtTime(780,i+.08),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.09),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.1)}playDropInBag(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(90,t+.12),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.16)}playCorrect(){if(this.isMuted||(this.initCtx(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((e,i)=>{const r=this.ctx.currentTime+i*.06,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,r),o.gain.setValueAtTime(.22,r),o.gain.exponentialRampToValueAtTime(.001,r+.28),s.connect(o),o.connect(this.ctx.destination),s.start(r),s.stop(r+.3)})}playWrong(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(240,t),e.frequency.linearRampToValueAtTime(140,t+.12),e.frequency.linearRampToValueAtTime(200,t+.2),e.frequency.linearRampToValueAtTime(90,t+.35),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.38),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.4)}playTick(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(880,t),i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.05)}playRoundWin(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=[{f:523.25,d:.1},{f:659.25,d:.1},{f:783.99,d:.1},{f:1046.5,d:.25}];let e=0;t.forEach(i=>{const r=this.ctx.currentTime+e,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(i.f,r),o.gain.setValueAtTime(.25,r),o.gain.exponentialRampToValueAtTime(.001,r+i.d+.1),s.connect(o),o.connect(this.ctx.destination),s.start(r),s.stop(r+i.d+.15),e+=i.d*.9})}playDispatchAlarm(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=[{f:587.33,d:.14},{f:783.99,d:.14},{f:880,d:.28}];let e=0;t.forEach(i=>{const r=this.ctx.currentTime+e,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i.f,r),o.gain.setValueAtTime(.35,r),o.gain.exponentialRampToValueAtTime(.001,r+i.d+.15),s.connect(o),o.connect(this.ctx.destination),s.start(r),s.stop(r+i.d+.2),e+=i.d})}startBgm(){this.initCtx(),this.ctx&&(this.bgmGainNode||(this.bgmGainNode=this.ctx.createGain(),this.bgmGainNode.gain.setValueAtTime(this.isBgmMuted?0:.12,this.ctx.currentTime),this.bgmGainNode.connect(this.ctx.destination)),!this.isBgmPlaying&&(this.isBgmPlaying=!0,this.nextNoteTime=this.ctx.currentTime+.05,this.bgmStepIndex=0,this.bgmTimerId=setInterval(()=>this.scheduleBgm(),25)))}stopBgm(){this.isBgmPlaying=!1,this.bgmTimerId&&(clearInterval(this.bgmTimerId),this.bgmTimerId=null)}pauseBgm(){this.isBgmPlaying&&this.bgmTimerId&&(clearInterval(this.bgmTimerId),this.bgmTimerId=null,this.bgmGainNode&&this.ctx&&this.bgmGainNode.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.1))}resumeBgm(){this.isBgmPlaying&&!this.bgmTimerId&&!this.isBgmMuted&&this.ctx&&this.bgmGainNode&&(this.bgmGainNode.gain.linearRampToValueAtTime(.12,this.ctx.currentTime+.1),this.nextNoteTime=this.ctx.currentTime+.05,this.bgmTimerId=setInterval(()=>this.scheduleBgm(),25))}playPause(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(310,t+.14),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.18)}playResume(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(560,t+.14),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.18)}toggleBgm(){if(this.isBgmMuted=!this.isBgmMuted,this.ctx&&this.bgmGainNode){const t=this.ctx.currentTime;this.bgmGainNode.gain.cancelScheduledValues(t),this.bgmGainNode.gain.setValueAtTime(this.bgmGainNode.gain.value,t),this.bgmGainNode.gain.linearRampToValueAtTime(this.isBgmMuted?0:.12,t+.1)}return!this.isBgmPlaying&&!this.isBgmMuted&&this.startBgm(),!this.isBgmMuted}isBgmActive(){return this.isBgmPlaying&&!this.isBgmMuted}scheduleBgm(){if(!this.ctx||!this.isBgmPlaying||!this.bgmGainNode)return;const t=.1;for(;this.nextNoteTime<this.ctx.currentTime+t;)this.playBgmStep(this.bgmStepIndex,this.nextNoteTime),this.nextNoteTime+=this.stepDur,this.bgmStepIndex=(this.bgmStepIndex+1)%64}playBgmStep(t,e){if(!this.ctx||!this.bgmGainNode)return;const i=this.bgmMelody[t];if(i>0){const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e),o.gain.setValueAtTime(.35,e),o.gain.exponentialRampToValueAtTime(.001,e+.16),s.connect(o),o.connect(this.bgmGainNode),s.start(e),s.stop(e+.18)}const r=this.bgmBass[t];if(r>0){const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(r,e),o.gain.setValueAtTime(.45,e),o.gain.exponentialRampToValueAtTime(.001,e+.22),s.connect(o),o.connect(this.bgmGainNode),s.start(e),s.stop(e+.25)}if(t%4===2){const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(1400,e),o.gain.setValueAtTime(.08,e),o.gain.exponentialRampToValueAtTime(.001,e+.035),s.connect(o),o.connect(this.bgmGainNode),s.start(e),s.stop(e+.04)}}}const f=new N;class _{constructor(t,e){n(this,"videoEl");n(this,"canvasEl");n(this,"ctx");n(this,"camera",null);n(this,"hands",null);n(this,"isRunning",!1);n(this,"maxHands",2);n(this,"isMultiplayerMode",!1);n(this,"smoothCoords",{});n(this,"lastSeen",new Map);n(this,"pinchStates",{0:!1,1:!1});n(this,"currentMultiState",{handsCount:0,hands:[]});n(this,"onStateChangeCallback",null);this.videoEl=t,this.canvasEl=e,this.ctx=e.getContext("2d"),this.handleResize(),window.addEventListener("resize",()=>this.handleResize())}handleResize(){this.canvasEl.width=window.innerWidth,this.canvasEl.height=window.innerHeight}setOnStateChange(t){this.onStateChangeCallback=t}setMultiplayerMode(t){this.isMultiplayerMode!==t&&this.resetTracking(),this.isMultiplayerMode=t}async start(){try{return!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia?(console.warn("getUserMedia not available in this context, using mouse/touch mode."),!1):window.Hands&&window.Camera?(await this.initMediaPipe(),!0):(console.warn("MediaPipe library not loaded yet, waiting or fallback..."),!1)}catch(t){return console.error("Failed to start hand tracker:",t),this.isRunning=!1,!1}}async initMediaPipe(){const t=window.Hands,e=window.Camera;this.hands=new t({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${i}`}),this.hands.setOptions({maxNumHands:this.maxHands,modelComplexity:1,minDetectionConfidence:.65,minTrackingConfidence:.65}),this.hands.onResults(i=>this.onResults(i)),this.camera=new e(this.videoEl,{onFrame:async()=>{if(this.isRunning&&this.hands)try{await this.hands.send({image:this.videoEl})}catch{}},width:1280,height:720}),this.isRunning=!0,await this.camera.start()}stop(){if(this.isRunning=!1,this.resetTracking(),this.camera)try{this.camera.stop()}catch{}}resetTracking(){var t,e;this.lastSeen.clear(),this.smoothCoords={},this.pinchStates={},this.currentMultiState={handsCount:0,hands:[]},(t=this.ctx)==null||t.clearRect(0,0,this.canvasEl.width,this.canvasEl.height),(e=this.onStateChangeCallback)==null||e.call(this,this.currentMultiState)}onResults(t){if(!this.isRunning)return;const e=performance.now(),i=this.videoEl.videoWidth/this.videoEl.videoHeight||16/9;if(!this.ctx)return;const r=this.canvasEl.width,s=this.canvasEl.height;this.ctx.clearRect(0,0,r,s);const o=[];if(t.multiHandLandmarks&&t.multiHandLandmarks.length>0){const l=t.multiHandLandmarks.slice(0,2).map((d,u)=>{const h=d[4],p=d[8],y=d[0],x=d[9],k=1-h.x,F=1-p.x,b=(k+F)/2,B=(h.y+p.y)/2,g=Math.max(.001,Math.hypot((y.x-x.x)*i,y.y-x.y)),w=Math.hypot((h.x-p.x)*i,h.y-p.y),v=g*.42,I=g*.65;return{landmarks:d,rawX:b,rawY:B,minPinchDist:w,pinchThreshold:v,releaseThreshold:I,originalIdx:u}}),c=(d,u)=>{const h=l[d];if(!h)return 0;const p=this.smoothCoords[u];return p?Math.hypot(h.rawX-p.x,h.rawY-p.y):.45+.1*(this.isMultiplayerMode?Math.abs(h.rawX-u):u)},m=c(0,1)+c(1,0)<c(0,0)+c(1,1);l.forEach((d,u)=>{const h=m?1-u:u;this.lastSeen.set(h,e);const p=!this.isMultiplayerMode||h===0,y=p?"#3182CE":"#E07A5F",x=p?"#63B3ED":"#F6AD55";let k=p?"P1 救護員":"P2 救護員";!this.isMultiplayerMode&&l.length>1&&(k=h===0?"P1 救護員":"P1 (副手)"),this.pinchStates[h]||!1?d.minPinchDist>d.releaseThreshold&&(this.pinchStates[h]=!1):d.minPinchDist<d.pinchThreshold&&(this.pinchStates[h]=!0);const b=this.pinchStates[h];this.smoothCoords[h]||(this.smoothCoords[h]={x:d.rawX,y:d.rawY});const B=.55;this.smoothCoords[h].x=this.smoothCoords[h].x*(1-B)+d.rawX*B,this.smoothCoords[h].y=this.smoothCoords[h].y*(1-B)+d.rawY*B;const g=this.smoothCoords[h].x*r,w=this.smoothCoords[h].y*s;o.push({id:h,label:k,color:y,accentColor:x,isPinching:b,pinchDistance:d.minPinchDist,cursorScreenX:g,cursorScreenY:w,cursorNormX:this.smoothCoords[h].x,cursorNormY:this.smoothCoords[h].y,landmarks:d.landmarks}),this.drawSingleHandSkeleton(d.landmarks,h,b,y,x,k,r,s)})}const a=[];for(const[l,c]of this.lastSeen)o.some(m=>m.id===l)||(e-c<180?a.push(l):(this.lastSeen.delete(l),delete this.smoothCoords[l],delete this.pinchStates[l]));this.currentMultiState={temporarilyMissing:a,handsCount:o.length,hands:o},this.onStateChangeCallback&&this.onStateChangeCallback(this.currentMultiState)}drawSingleHandSkeleton(t,e,i,r,s,o,a,l){if(!this.ctx)return;const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];this.ctx.save(),this.ctx.lineWidth=3,this.ctx.strokeStyle=i?s:r,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=.8,c.forEach(([x,k])=>{const F=t[x],b=t[k],B=(1-F.x)*a,g=F.y*l,w=(1-b.x)*a,v=b.y*l;this.ctx.beginPath(),this.ctx.moveTo(B,g),this.ctx.lineTo(w,v),this.ctx.stroke()}),t.forEach((x,k)=>{const F=(1-x.x)*a,b=x.y*l;this.ctx.beginPath(),k===4||k===8?(this.ctx.arc(F,b,i?9:7,0,Math.PI*2),this.ctx.fillStyle=i?s:"#FAF5FF",this.ctx.fill(),this.ctx.strokeStyle=r,this.ctx.lineWidth=2.5,this.ctx.stroke()):(this.ctx.arc(F,b,4,0,Math.PI*2),this.ctx.fillStyle="#FFFFFF",this.ctx.fill(),this.ctx.strokeStyle=r,this.ctx.lineWidth=1.5,this.ctx.stroke())});const m=(1-t[4].x)*a,d=t[4].y*l,u=(1-t[8].x)*a,h=t[8].y*l,p=(m+u)/2,y=(d+h)/2;this.ctx.beginPath(),this.ctx.setLineDash([4,4]),this.ctx.moveTo(m,d),this.ctx.lineTo(u,h),this.ctx.strokeStyle=i?s:"#CBD5E0",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.roundRect(p-32,y-32,64,20,10),this.ctx.fill(),this.ctx.strokeStyle="#FFFFFF",this.ctx.lineWidth=1.5,this.ctx.stroke(),this.ctx.fillStyle="#FFFFFF",this.ctx.font="bold 10px sans-serif",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(i?`${o} 抓取`:o,p,y-22),this.ctx.restore()}getMultiState(){return this.currentMultiState}}class G{constructor(t){n(this,"particles",[]);n(this,"canvas");n(this,"ctx");this.canvas=t,this.ctx=t.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}burst(t,e,i=!0,r=24){const a=i?["#F6E05E","#68D391","#4299E1","#FC8181","#FAF089","#FAF7F2"]:["#E53E3E","#CBD5E0","#718096","#4A5568"];for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,m=3+Math.random()*8,d=i?["star","cross","confetti"]:["circle","confetti"],u=d[Math.floor(Math.random()*d.length)];this.particles.push({x:t,y:e,vx:Math.cos(c)*m,vy:Math.sin(c)*m-(i?2.5:0),size:6+Math.random()*8,color:a[Math.floor(Math.random()*a.length)],rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.2,alpha:1,decay:.015+Math.random()*.02,shape:u})}}updateAndDraw(){if(this.ctx){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t=this.particles.length-1;t>=0;t--){const e=this.particles[t];if(e.x+=e.vx,e.y+=e.vy,e.vy+=.22,e.vx*=.98,e.rotation+=e.vRot,e.alpha-=e.decay,e.alpha<=0){this.particles.splice(t,1);continue}this.ctx.save(),this.ctx.translate(e.x,e.y),this.ctx.rotate(e.rotation),this.ctx.globalAlpha=e.alpha,this.ctx.fillStyle=e.color,e.shape==="star"?this.drawStar(this.ctx,0,0,4,e.size,e.size/2):e.shape==="cross"?this.drawCross(this.ctx,0,0,e.size):e.shape==="confetti"?this.ctx.fillRect(-e.size/2,-e.size/3,e.size,e.size/1.5):(this.ctx.beginPath(),this.ctx.arc(0,0,e.size/2,0,Math.PI*2),this.ctx.fill()),this.ctx.restore()}}}drawStar(t,e,i,r,s,o){let a=Math.PI/2*3,l=e,c=i;const m=Math.PI/r;t.beginPath(),t.moveTo(e,i-s);for(let d=0;d<r;d++)l=e+Math.cos(a)*s,c=i+Math.sin(a)*s,t.lineTo(l,c),a+=m,l=e+Math.cos(a)*o,c=i+Math.sin(a)*o,t.lineTo(l,c),a+=m;t.lineTo(e,i-s),t.closePath(),t.fill()}drawCross(t,e,i,r){const s=r/3;t.fillRect(e-s/2,i-r/2,s,r),t.fillRect(e-r/2,i-s/2,r,s)}}class R{constructor(){n(this,"containerEl",null);n(this,"currentCategory","all");n(this,"searchQuery","");this.createModalHtml()}createModalHtml(){const t=E.length,e=E.filter(c=>c.category==="airway").length,i=E.filter(c=>c.category==="trauma").length,r=E.filter(c=>c.category==="vitals").length,s=E.filter(c=>c.category==="meds").length,o=E.filter(c=>c.category==="special").length,a=E.filter(c=>c.category==="ppe").length,l=document.createElement("div");l.id="encyclopedia-modal",l.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D221B]/65 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300",l.innerHTML=`
      <div class="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFDF9] border-[3px] border-[#463529] rounded-[2rem] shadow-[0_10px_0_#463529,0_25px_50px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden font-sans">
        <!-- 頂部 いらすとや 繪本標題列 -->
        <div class="flex items-center justify-between px-6 py-4 border-b-[2.5px] border-[#463529] bg-[#F6EFE2]">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-[#EB6A5B] border-2 border-[#463529] shadow-[0_2px_0_#463529] flex items-center justify-center text-white font-black text-base">${t}</span>
            <div>
              <h2 class="text-xl font-black text-[#463529] tracking-wide flex items-center gap-2">
                <span>🎨 いらすとや風格・救護耗材繪本圖鑑</span>
              </h2>
              <p class="text-xs font-bold text-[#7A6352]">Irasutoya Style EMS Equipment Illustrated Scrapbook (${t} Items)</p>
            </div>
          </div>
          <button id="close-encyclopedia" class="w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#463529] text-[#463529] font-black text-lg hover:bg-[#EB6A5B] hover:text-white transition-colors flex items-center justify-center shadow-[0_2px_0_#463529] cursor-pointer">
            ✕
          </button>
        </div>

        <!-- 篩選器與搜尋 -->
        <div class="p-4 border-b-2 border-[#E5D9C5] bg-[#FFFDF9] flex flex-wrap items-center justify-between gap-3">
          <!-- 分類紙膠帶標籤 -->
          <div class="flex flex-wrap gap-1.5" id="category-tabs">
            <button data-cat="all" class="px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer">全部 (${t})</button>
            <button data-cat="airway" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D8EDE3] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">呼吸道與氧氣 (${e})</button>
            <button data-cat="trauma" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">創傷固定與止血 (${i})</button>
            <button data-cat="vitals" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">生命徵象 (${r})</button>
            <button data-cat="meds" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FAD4CF] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">藥物與輸液 (${s})</button>
            <button data-cat="special" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">特殊包與工具 (${o})</button>
            <button data-cat="ppe" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">防護與安全 (${a})</button>
          </div>

          <!-- 搜尋框 -->
          <div class="relative w-full sm:w-64">
            <input id="encyclopedia-search" type="text" placeholder="搜尋器材名稱、適應症..." class="w-full pl-9 pr-4 py-1.5 text-xs font-bold text-[#463529] bg-[#F6EFE2] border-2 border-[#463529] rounded-full focus:outline-none focus:ring-2 focus:ring-[#EB6A5B] shadow-inner" />
            <span class="absolute left-3 top-2 text-[#7A6352] text-xs">🔍</span>
          </div>
        </div>

        <!-- 繪本卡片網格列表 -->
        <div class="flex-1 overflow-y-auto p-6 bg-[#F6EFE2]">
          <div id="encyclopedia-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <!-- 動態渲染卡片 -->
          </div>
        </div>
      </div>
    `,document.body.appendChild(l),this.containerEl=l,this.bindEvents(),this.renderCards()}bindEvents(){if(!this.containerEl)return;const t=this.containerEl.querySelector("#close-encyclopedia");t==null||t.addEventListener("click",()=>this.hide()),this.containerEl.addEventListener("click",r=>{r.target===this.containerEl&&this.hide()});const e=this.containerEl.querySelectorAll("#category-tabs button");e.forEach(r=>{r.addEventListener("click",s=>{e.forEach(a=>{a.className="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer"});const o=s.currentTarget;o.className="px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer",this.currentCategory=o.getAttribute("data-cat")||"all",this.renderCards()})});const i=this.containerEl.querySelector("#encyclopedia-search");i==null||i.addEventListener("input",r=>{this.searchQuery=r.target.value.trim().toLowerCase(),this.renderCards()})}renderCards(){if(!this.containerEl)return;const t=this.containerEl.querySelector("#encyclopedia-grid");if(!t)return;let e=E;this.currentCategory!=="all"&&(e=e.filter(i=>i.category===this.currentCategory)),this.searchQuery&&(e=e.filter(i=>i.name.toLowerCase().includes(this.searchQuery)||i.enName.toLowerCase().includes(this.searchQuery)||i.indication.toLowerCase().includes(this.searchQuery)||i.desc.toLowerCase().includes(this.searchQuery))),t.innerHTML=e.map((i,r)=>`
      <div class="group bg-[#FFFDF9] border-2 border-[#463529] rounded-2xl p-3 shadow-[0_4px_0_#D5C7B2] hover:shadow-[0_6px_0_#463529] hover:-translate-y-1 transition-all flex flex-col items-center text-center">
        <!-- SVG いらすとや貼紙插畫容器 -->
        <div class="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-[#F6EFE2] rounded-2xl border-2 border-[#E5D9C5] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform table-svg-wrapper">
          ${i.svg}
        </div>
        <span class="text-[10px] font-black text-[#463529] px-2.5 py-0.5 bg-[#FDF0C9] rounded-full border-2 border-[#463529] mb-1">
          #${r+1} ${i.categoryName}
        </span>
        <h3 class="text-sm font-black text-[#463529] tracking-tight leading-snug mt-0.5">${i.name}</h3>
        <p class="text-[10px] font-bold text-[#7A6352] mb-1.5">${i.enName}</p>
        <p class="text-[11px] font-medium text-[#5C4738] line-clamp-2 leading-relaxed bg-[#F6EFE2] p-1.5 rounded-xl border border-[#D5C7B2] w-full text-left">
          ${i.desc}
        </p>
      </div>
    `).join("")}show(){this.containerEl&&(this.containerEl.classList.remove("hidden"),setTimeout(()=>{var t;(t=this.containerEl)==null||t.classList.remove("opacity-0")},10))}hide(){this.containerEl&&(this.containerEl.classList.add("opacity-0"),setTimeout(()=>{var t;(t=this.containerEl)==null||t.classList.add("hidden")},300))}}class V{constructor(){n(this,"hudRoundEl",document.getElementById("hud-round"));n(this,"hudTimerEl",document.getElementById("hud-timer"));n(this,"hudP1BoxEl",document.getElementById("hud-p1-box"));n(this,"hudP2BoxEl",document.getElementById("hud-p2-box"));n(this,"hudScoreP1El",document.getElementById("hud-score-p1"));n(this,"hudScoreP2El",document.getElementById("hud-score-p2"));n(this,"hudComboEl",document.getElementById("hud-combo"));n(this,"playerModeTagEl",document.getElementById("player-mode-tag"));n(this,"scenarioTitleEl",document.getElementById("scenario-title"));n(this,"scenarioDescEl",document.getElementById("scenario-desc"));n(this,"scenarioCategoryEl",document.getElementById("scenario-category"));n(this,"scenarioUrgencyEl",document.getElementById("scenario-urgency"));n(this,"scenarioPatientEl",document.getElementById("scenario-patient"));n(this,"targetSlotsEl",document.getElementById("target-slots"));n(this,"shelfEl",document.getElementById("equipment-shelf"));n(this,"emsBagTargetEl",document.getElementById("ems-bag-target"));n(this,"bagGlowEl",document.getElementById("bag-glow"));n(this,"roundModalEl",document.getElementById("round-modal"));n(this,"singleArenaEl",document.getElementById("single-arena-container"));n(this,"vsArenaEl",document.getElementById("vs-arena-container"));n(this,"p1BagTargetEl",document.getElementById("p1-bag-target"));n(this,"p2BagTargetEl",document.getElementById("p2-bag-target"));n(this,"p1BagGlowEl",document.getElementById("p1-bag-glow"));n(this,"p2BagGlowEl",document.getElementById("p2-bag-glow"));n(this,"p1TargetSlotsEl",document.getElementById("p1-target-slots"));n(this,"p2TargetSlotsEl",document.getElementById("p2-target-slots"));n(this,"vsScenarioTitleEl",document.getElementById("vs-scenario-title"));n(this,"vsScenarioDescEl",document.getElementById("vs-scenario-desc"));n(this,"vsScenarioCategoryEl",document.getElementById("vs-scenario-category"));n(this,"vsScenarioUrgencyEl",document.getElementById("vs-scenario-urgency"));n(this,"vsScenarioPatientEl",document.getElementById("vs-scenario-patient"));n(this,"cursors",[{container:document.getElementById("gesture-cursor-0"),ring:document.getElementById("cursor-ring-0")},{container:document.getElementById("gesture-cursor-1"),ring:document.getElementById("cursor-ring-1")}]);n(this,"draggedGhosts",[{ghost:document.getElementById("dragged-ghost"),content:document.getElementById("ghost-content")},{ghost:document.getElementById("dragged-ghost-1")||document.getElementById("dragged-ghost"),content:document.getElementById("ghost-content-1")||document.getElementById("ghost-content")}]);n(this,"currentRound",1);n(this,"maxRounds",5);n(this,"p1Score",0);n(this,"p2Score",0);n(this,"combo",0);n(this,"timer",30);n(this,"timerInterval",null);n(this,"isRoundActive",!1);n(this,"isPaused",!1);n(this,"gameMode","vs");n(this,"isMultiplayerMode",!0);n(this,"firstGrabberMap",new Map);n(this,"p1Collected",new Set);n(this,"p2Collected",new Set);n(this,"finisherBonusAwarded",!1);n(this,"currentScenario");n(this,"requiredItemsLeft",new Set);n(this,"playedScenarioIds",new Set);n(this,"shelfItems",[]);n(this,"activeGrabs",new Map);n(this,"prevPinchStates",{0:!1,1:!1});n(this,"handTracker");n(this,"particleSystem");n(this,"encyclopediaModal");n(this,"isCameraActive",!1);n(this,"hasGameStarted",!1);this.initSystems(),this.bindGlobalEvents(),this.initPreGame()}initSystems(){const t=document.getElementById("particle-canvas");this.particleSystem=new G(t),this.encyclopediaModal=new R;const e=document.getElementById("webcam"),i=document.getElementById("camera-overlay");this.handTracker=new _(e,i),this.handTracker.setMultiplayerMode(this.isMultiplayerMode),this.handTracker.setOnStateChange(r=>this.onMultiHandUpdate(r)),this.tryInitCamera(),this.mainRenderLoop()}async tryInitCamera(){try{await this.handTracker.start()?(this.isCameraActive=!0,this.updateCameraUI(!0)):this.updateCameraUI(!1)}catch{console.warn("Camera fallback to touch/mouse mode."),this.updateCameraUI(!1)}}updateCameraUI(t){const e=document.getElementById("cam-text"),i=document.getElementById("cam-icon");t?(e&&(e.textContent="鏡頭就緒"),i&&(i.textContent="📹")):(e&&(e.textContent="滑鼠/觸控模式"),i&&(i.textContent="🖱️"))}bindGlobalEvents(){var a,l,c,m,d,u,h,p,y,x,k,F,b,B;(a=document.getElementById("btn-intro-guide"))==null||a.addEventListener("click",()=>{this.isRoundActive&&!this.isPaused&&this.pauseGame(),this.showIntroModal(this.hasGameStarted)}),(l=document.getElementById("btn-pause-toggle"))==null||l.addEventListener("click",()=>{this.togglePause()}),(c=document.getElementById("btn-start-game"))==null||c.addEventListener("click",()=>{this.hasGameStarted?this.hideIntroModal():this.onStartGameClicked()}),(m=document.getElementById("btn-close-intro"))==null||m.addEventListener("click",()=>{this.hideIntroModal()}),(d=document.getElementById("btn-intro-encyclopedia"))==null||d.addEventListener("click",()=>{this.encyclopediaModal.show()});const t=document.getElementById("btn-bgm-toggle"),e=document.getElementById("bgm-icon"),i=document.getElementById("bgm-text");t==null||t.addEventListener("click",()=>{const g=!f.toggleBgm();e&&i&&t&&(g?(e.textContent="🔇",i.textContent="音樂關",t.className="px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#E5D9C5] text-xs font-black text-[#7A6352] hover:bg-[#D5C7B2] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]"):(e.textContent="🎵",i.textContent="音樂開",t.className="px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#EB6A5B] text-xs font-black text-white hover:bg-[#D85344] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]"))}),(u=document.getElementById("btn-encyclopedia"))==null||u.addEventListener("click",()=>{this.isRoundActive&&!this.isPaused&&this.pauseGame(),this.encyclopediaModal.show()}),(h=document.getElementById("btn-player-mode"))==null||h.addEventListener("click",()=>{const g=this.gameMode==="vs"?"1p":this.gameMode==="1p"?"coop":"vs";this.setGameMode(g)}),document.querySelectorAll(".mode-select-btn").forEach(g=>{g.addEventListener("click",()=>{const w=g.getAttribute("data-mode");w&&this.setGameMode(w)})}),(p=document.getElementById("btn-camera-toggle"))==null||p.addEventListener("click",()=>{this.isCameraActive?(this.handTracker.stop(),this.isCameraActive=!1,this.updateCameraUI(!1)):this.tryInitCamera()});const s=document.getElementById("btn-sound-toggle");s==null||s.addEventListener("click",()=>{const g=f.toggleMute();s&&(s.textContent=g?"🔇":"🔊",s.title=g?"已靜音":"音效開啟")});const o=document.querySelectorAll(".round-select-btn");o.forEach(g=>{g.addEventListener("click",w=>{const v=w.currentTarget,I=parseInt(v.getAttribute("data-rounds")||"5",10);this.maxRounds=I,o.forEach(L=>{L.className="round-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm"}),v.className="round-select-btn px-3.5 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-round-btn",this.updateHUD(),f.playGrab()})}),(y=document.getElementById("modal-next-btn"))==null||y.addEventListener("click",()=>{this.hideRoundModal(),this.currentRound>=this.maxRounds?this.showPodiumCeremony():(this.currentRound++,this.startRound())}),(x=document.getElementById("podium-restart-btn"))==null||x.addEventListener("click",()=>{this.hidePodiumModal(),this.startNewGame()}),(k=document.getElementById("podium-encyclopedia-btn"))==null||k.addEventListener("click",()=>{this.encyclopediaModal.show()}),(F=document.getElementById("btn-modal-resume"))==null||F.addEventListener("click",()=>{this.resumeGame()}),(b=document.getElementById("btn-pause-restart-round"))==null||b.addEventListener("click",()=>{this.resumeGame(),this.startRound()}),(B=document.getElementById("btn-pause-open-encyclopedia"))==null||B.addEventListener("click",()=>{this.encyclopediaModal.show()}),window.addEventListener("keydown",g=>{var v;const w=(((v=document.activeElement)==null?void 0:v.tagName)||"").toLowerCase();w==="input"||w==="textarea"||(g.code==="Space"||g.key==="p"||g.key==="P"?(g.preventDefault(),this.togglePause()):g.key==="Escape"&&this.isPaused&&(g.preventDefault(),this.resumeGame()))}),window.addEventListener("pointermove",g=>{if(this.handTracker.getMultiState().handsCount===0){const w=this.cursors[0];w.container.style.opacity="1",w.container.style.left=`${g.clientX}px`,w.container.style.top=`${g.clientY}px`;const v=this.activeGrabs.has("mouse")?"mouse":this.activeGrabs.has("P1")?"P1":this.activeGrabs.has("P2")?"P2":null;v&&(this.updateGhostPosition(g.clientX,g.clientY,v),this.checkBagHover(g.clientX,g.clientY,v))}}),window.addEventListener("pointerup",g=>{this.activeGrabs.has("mouse")?this.evaluateDrop("mouse",g.clientX,g.clientY):this.activeGrabs.has("P1")?this.evaluateDrop("P1",g.clientX,g.clientY):this.activeGrabs.has("P2")&&this.evaluateDrop("P2",g.clientX,g.clientY)})}setGameMode(t){this.gameMode=t,this.isMultiplayerMode=t!=="1p",this.handTracker&&this.handTracker.setMultiplayerMode(this.isMultiplayerMode);const e=document.getElementById("mode-text"),i=document.getElementById("cursor-label-1");t==="vs"?(this.playerModeTagEl.textContent="雙人競速對決 (VS 15/10分)",this.playerModeTagEl.className="text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#EB6A5B] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]",e&&(e.textContent="切為單人"),this.hudP2BoxEl.classList.remove("hidden"),i&&(i.textContent="P2",i.className="absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md"),this.singleArenaEl.classList.add("hidden"),this.vsArenaEl.classList.remove("hidden")):t==="coop"?(this.playerModeTagEl.textContent="雙人同屏合作 (Co-op)",this.playerModeTagEl.className="text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#6BB2E2] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]",e&&(e.textContent="切為競賽"),this.hudP2BoxEl.classList.remove("hidden"),i&&(i.textContent="P2",i.className="absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md"),this.singleArenaEl.classList.remove("hidden"),this.vsArenaEl.classList.add("hidden")):(this.playerModeTagEl.textContent="單人救護模式 (1P)",this.playerModeTagEl.className="text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#7CB69D] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]",e&&(e.textContent="切為合作"),this.hudP2BoxEl.classList.add("hidden"),i&&(i.textContent="P1",i.className="absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#3182CE] text-white shadow-md"),this.singleArenaEl.classList.remove("hidden"),this.vsArenaEl.classList.add("hidden")),document.querySelectorAll(".mode-select-btn").forEach(s=>{s.getAttribute("data-mode")===t?s.className="mode-select-btn px-4 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-mode-btn cursor-pointer":s.className="mode-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm cursor-pointer"}),this.currentScenario&&(this.renderScenarioCard(),this.buildShelfItems(),this.updateHUD())}onMultiHandUpdate(t){const e=t.hands;this.shelfEl.querySelectorAll(".table-item-card").forEach(r=>r.classList.remove("is-hovered")),e.forEach(r=>{if(!r.isPinching){const s=!this.isMultiplayerMode||r.id===0?"P1":"P2",o=this.findClosestShelfCard(r.cursorScreenX,r.cursorScreenY,110,this.gameMode==="vs"?s:void 0);o&&o.classList.add("is-hovered")}}),[0,1].forEach(r=>{var a;const s=this.cursors[r],o=e.find(l=>l.id===r);if(o){s.container.style.opacity="1",s.container.style.left=`${o.cursorScreenX}px`,s.container.style.top=`${o.cursorScreenY}px`;const l=!this.isMultiplayerMode||r===0,c=l?"border-[#3182CE]":"border-[#E07A5F]",m=l?"bg-[#3182CE]/20":"bg-[#E07A5F]/20",d=document.getElementById(`cursor-label-${r}`),u=`${l?"1P":"2P"} · ${o.isPinching?"捏合":"張開"}`;d&&d.textContent!==u&&(d.textContent=u),o.isPinching?s.ring.className="w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400/40 flex items-center justify-center scale-90 transition-all shadow-lg":s.ring.className=`w-12 h-12 rounded-full border-2 ${c} ${m} flex items-center justify-center scale-100 transition-all shadow-md`;const h=this.prevPinchStates[r]||!1;o.isPinching&&!h?this.checkPinchGrab(r,o.cursorScreenX,o.cursorScreenY):!o.isPinching&&h&&this.checkPinchDrop(r,o.cursorScreenX,o.cursorScreenY),this.activeGrabs.has(r)&&(this.updateGhostPosition(o.cursorScreenX,o.cursorScreenY,r),this.checkBagHover(o.cursorScreenX,o.cursorScreenY,r)),this.prevPinchStates[r]=o.isPinching}else{if((a=t.temporarilyMissing)!=null&&a.includes(r))return;s.container.style.opacity="0",this.activeGrabs.has(r)&&this.cancelGrab(r),this.prevPinchStates[r]=!1}})}findClosestShelfCard(t,e,i=120,r){var c;const s=document.elementFromPoint(t,e);if(s){const m=s.closest(".table-item-card");if(m&&!m.classList.contains("is-dragged")&&(!r||!((c=m.getAttribute("data-taken-by"))!=null&&c.includes(r))))return m}const o=Array.from(this.shelfEl.querySelectorAll(".table-item-card"));let a=i,l=null;return o.forEach(m=>{var b;if(m.classList.contains("is-dragged")||r&&((b=m.getAttribute("data-taken-by"))!=null&&b.includes(r)))return;const d=m.getBoundingClientRect(),u=Math.max(d.left-t,0,t-d.right),h=Math.max(d.top-e,0,e-d.bottom),p=Math.hypot(u,h),y=(d.left+d.right)/2,x=(d.top+d.bottom)/2,k=Math.hypot(y-t,x-e),F=p===0?0:Math.min(p,k*.75);F<a&&(a=F,l=m)}),l}checkPinchGrab(t,e,i){if(!this.isRoundActive||this.isPaused||this.activeGrabs.has(t)||!this.isMultiplayerMode&&this.activeGrabs.size>0)return;const r=!this.isMultiplayerMode||t===0||t==="P1"?"P1":"P2",s=this.findClosestShelfCard(e,i,125,this.gameMode==="vs"?r:void 0);if(s){const o=s.getAttribute("data-item-id");if(o){const a=M(o);a&&this.startGrab(t,a,s,e,i)}}}startGrab(t,e,i,r,s){this.activeGrabs.set(t,{item:e,cardEl:i}),i.classList.add("is-dragged");const o=t===1||t==="P2"?1:0,a=this.draggedGhosts[o];a&&(a.content.innerHTML=e.svg,a.ghost.classList.remove("hidden")),this.updateGhostPosition(r,s,t),f.playGrab(),this.particleSystem.burst(r,s,!0,8)}checkPinchDrop(t,e,i){if(!this.isRoundActive||this.isPaused)return this.cancelGrab(t);this.activeGrabs.has(t)&&this.evaluateDrop(t,e,i)}updateGhostPosition(t,e,i=0){const r=i===1||i==="P2"?1:0,s=this.draggedGhosts[r];s&&(s.ghost.style.left=`${t}px`,s.ghost.style.top=`${e}px`)}checkBagHover(t,e,i){if(this.gameMode==="vs"){const l=this.p1BagTargetEl.getBoundingClientRect(),c=this.p2BagTargetEl.getBoundingClientRect(),m=50,d=t>=l.left-m&&t<=l.right+m&&e>=l.top-m&&e<=l.bottom+m,u=t>=c.left-m&&t<=c.right+m&&e>=c.top-m&&e<=c.bottom+m,h=document.getElementById("p1-bag-icon-container"),p=document.getElementById("p2-bag-icon-container");d?(this.p1BagGlowEl.style.opacity="1",this.p1BagTargetEl.style.borderColor="rgba(99, 179, 237, 0.95)",this.p1BagTargetEl.style.boxShadow="0 0 35px rgba(49, 130, 206, 0.55)",h&&(h.style.transform="scale(1.18)")):(this.p1BagGlowEl.style.opacity="0",this.p1BagTargetEl.style.borderColor="",this.p1BagTargetEl.style.boxShadow="",h&&(h.style.transform="scale(1)")),u?(this.p2BagGlowEl.style.opacity="1",this.p2BagTargetEl.style.borderColor="rgba(246, 173, 85, 0.95)",this.p2BagTargetEl.style.boxShadow="0 0 35px rgba(224, 122, 95, 0.55)",p&&(p.style.transform="scale(1.18)")):(this.p2BagGlowEl.style.opacity="0",this.p2BagTargetEl.style.borderColor="",this.p2BagTargetEl.style.boxShadow="",p&&(p.style.transform="scale(1)"));return}const r=this.emsBagTargetEl.getBoundingClientRect(),s=50,o=t>=r.left-s&&t<=r.right+s&&e>=r.top-s&&e<=r.bottom+s,a=document.getElementById("bag-icon-container");o?(this.bagGlowEl.style.opacity="1",this.emsBagTargetEl.style.borderColor="rgba(251, 191, 36, 0.95)",this.emsBagTargetEl.style.boxShadow="0 0 35px rgba(245, 158, 11, 0.45)",a&&(a.style.transform="scale(1.22)")):(this.bagGlowEl.style.opacity="0",this.emsBagTargetEl.style.borderColor="",this.emsBagTargetEl.style.boxShadow="",a&&(a.style.transform="scale(1)"))}cancelGrab(t){var r;const e=this.activeGrabs.get(t);e&&(e.cardEl.classList.remove("is-dragged"),e.cardEl.classList.add("animate-wobble"),setTimeout(()=>e.cardEl.classList.remove("animate-wobble"),400),this.activeGrabs.delete(t));const i=t===1||t==="P2"?1:0;if((r=this.draggedGhosts[i])==null||r.ghost.classList.add("hidden"),this.gameMode==="vs"){this.p1BagGlowEl.style.opacity="0",this.p2BagGlowEl.style.opacity="0",this.p1BagTargetEl.style.borderColor="",this.p2BagTargetEl.style.borderColor="",this.p1BagTargetEl.style.boxShadow="",this.p2BagTargetEl.style.boxShadow="";const s=document.getElementById("p1-bag-icon-container"),o=document.getElementById("p2-bag-icon-container");s&&(s.style.transform="scale(1)"),o&&(o.style.transform="scale(1)")}else{this.bagGlowEl.style.opacity="0",this.emsBagTargetEl.style.borderColor="",this.emsBagTargetEl.style.boxShadow="";const s=document.getElementById("bag-icon-container");s&&(s.style.transform="scale(1)")}}evaluateDrop(t,e,i){var c,m;const r=this.activeGrabs.get(t);if(!r)return;if(this.gameMode==="vs"){const d=this.p1BagTargetEl.getBoundingClientRect(),u=this.p2BagTargetEl.getBoundingClientRect(),h=50,p=e>=d.left-h&&e<=d.right+h&&i>=d.top-h&&i<=d.bottom+h,y=e>=u.left-h&&e<=u.right+h&&i>=u.top-h&&i<=u.bottom+h;let x=t===1||t==="P2"?"P2":"P1";if(t==="mouse")if(p)x="P1";else if(y)x="P2";else{this.cancelGrab(t);return}if(x==="P1"&&y){this.showFloatingScore(e,i,"⚠️ 這是 P2 救護包！請放左側藍色包","#FC8181"),f.playWrong(),this.cancelGrab(t);return}if(x==="P2"&&p){this.showFloatingScore(e,i,"⚠️ 這是 P1 救護包！請放右側橘色包","#FC8181"),f.playWrong(),this.cancelGrab(t);return}if(x==="P1"&&p||x==="P2"&&y){this.handleVsItemDropIntoBag(x,r.item,r.cardEl,e,i),this.activeGrabs.delete(t);const F=t===1||t==="P2"?1:0;(c=this.draggedGhosts[F])==null||c.ghost.classList.add("hidden"),this.p1BagGlowEl.style.opacity="0",this.p2BagGlowEl.style.opacity="0",this.p1BagTargetEl.style.borderColor="",this.p2BagTargetEl.style.borderColor="",this.p1BagTargetEl.style.boxShadow="",this.p2BagTargetEl.style.boxShadow=""}else this.cancelGrab(t);return}const s=this.emsBagTargetEl.getBoundingClientRect(),o=50,a=e>=s.left-o&&e<=s.right+o&&i>=s.top-o&&i<=s.bottom+o,l=document.getElementById("bag-icon-container");if(a){this.handleItemDropIntoBag(t,r.item,r.cardEl,e,i),this.activeGrabs.delete(t);const d=t===1||t==="P2"?1:0;(m=this.draggedGhosts[d])==null||m.ghost.classList.add("hidden"),this.bagGlowEl.style.opacity="0",this.emsBagTargetEl.style.borderColor="",this.emsBagTargetEl.style.boxShadow="",l&&(l.style.transform="scale(1)")}else this.cancelGrab(t)}handleVsItemDropIntoBag(t,e,i,r,s){if(f.playDropInBag(),this.currentScenario.requiredItemIds.includes(e.id)){if(t==="P1"?this.p1Collected.has(e.id):this.p2Collected.has(e.id)){f.playWrong(),this.showFloatingScore(r,s,`⚠️ ${t} 已拿過此器材！不可重複領取`,"#FC8181"),i.classList.remove("is-dragged"),i.classList.add("animate-wobble"),setTimeout(()=>i.classList.remove("animate-wobble"),400);return}const l=!this.firstGrabberMap.has(e.id);let c=0;l?(this.firstGrabberMap.set(e.id,t),c=15,this.showFloatingScore(r,s,`+15 搶先！(${t})`,"#F6E05E")):(c=10,this.showFloatingScore(r,s,`+10 次位 (${t})`,"#68D391")),t==="P1"?(this.p1Score+=c,this.p1Collected.add(e.id)):(this.p2Score+=c,this.p2Collected.add(e.id)),f.playCorrect(),this.particleSystem.burst(r,s,!0,36);const m=document.getElementById(t==="P1"?"p1-bag-icon-container":"p2-bag-icon-container");m&&(m.classList.add("animate-swallow"),setTimeout(()=>m.classList.remove("animate-swallow"),550)),this.markTargetSlotCollected(t,e.id,l);const d=i.getAttribute("data-taken-by")||"",u=new Set(d.split(",").filter(Boolean));u.add(t),i.setAttribute("data-taken-by",Array.from(u).join(","));let h=parseInt(i.getAttribute("data-count")||"1",10);if(h--,i.setAttribute("data-count",h.toString()),h<=0)this.replenishShelfCard(i);else{i.classList.remove("is-stacked","is-dragged");const x=i.querySelector(".card-stack-badge");x&&(x.className="card-stack-badge badge-single",x.textContent="x1 份")}const p=this.currentScenario.requiredItemIds.length;if((t==="P1"?this.p1Collected.size:this.p2Collected.size)===p&&!this.finisherBonusAwarded){this.finisherBonusAwarded=!0;const x=20;t==="P1"?this.p1Score+=x:this.p2Score+=x,this.showFloatingScore(r,s-40,`🏆 ${t} 率先完備 +20分！`,"#ECC94B")}this.updateHUD(),this.p1Collected.size===p&&this.p2Collected.size===p&&setTimeout(()=>{this.handleRoundVictory(20,this.p1Score>=this.p2Score?"P1":"P2")},800)}else{this.timer=Math.max(1,this.timer-2),f.playWrong(),this.particleSystem.burst(r,s,!1,24),this.showFloatingScore(r,s,"❌ 非本題急救耗材！","#FC8181");const a=t==="P1"?this.p1BagTargetEl:this.p2BagTargetEl;a.classList.add("animate-reject"),setTimeout(()=>a.classList.remove("animate-reject"),500),i.classList.remove("is-dragged"),i.classList.add("animate-wobble"),setTimeout(()=>i.classList.remove("animate-wobble"),400),this.updateHUD()}}showFloatingScore(t,e,i,r="#F6E05E"){const s=document.createElement("div");s.className="fixed font-black text-sm sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] animate-float-score pointer-events-none z-50 whitespace-nowrap",s.style.left=`${Math.min(window.innerWidth-60,Math.max(60,t))}px`,s.style.top=`${Math.min(window.innerHeight-60,Math.max(60,e))}px`,s.style.color=r,s.textContent=i,document.body.appendChild(s),setTimeout(()=>s.remove(),1200)}markTargetSlotCollected(t,e,i){const r=t==="P1"?"p1":"p2",s=document.querySelector(`[data-${r}-slot-id="${e}"]`);s&&(s.className=`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${t==="P1"?"bg-[#4F94C4]":"bg-[#EB6A5B]"} border-2 border-[#463529] flex items-center justify-center text-sm sm:text-base font-black text-white shadow-[0_2px_0_#463529] transform scale-105 transition-all`,s.innerHTML=i?"🥇":"✓")}handleItemDropIntoBag(t,e,i,r,s){f.playDropInBag();const o=document.getElementById("bag-icon-container");if(o&&(o.classList.add("animate-swallow"),setTimeout(()=>o.classList.remove("animate-swallow"),550)),this.emsBagTargetEl.classList.add("scale-[1.02]"),setTimeout(()=>this.emsBagTargetEl.classList.remove("scale-[1.02]"),300),this.requiredItemsLeft.has(e.id)){this.requiredItemsLeft.delete(e.id),this.combo++;const l=10;let c=0;const m=this.isMultiplayerMode&&(t===1||t==="P2");m?this.p2Score+=l:this.p1Score+=l,f.playCorrect(),this.particleSystem.burst(r,s,!0,36);const d=this.targetSlotsEl.querySelector(`[data-slot-item-id="${e.id}"]`);d&&(d.className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7CB69D] border-2 border-[#463529] flex items-center justify-center text-xl font-black text-white shadow-[0_2px_0_#463529] transform scale-110 transition-all",d.innerHTML="✓"),this.replenishShelfCard(i),this.requiredItemsLeft.size===0?(c=20,m?this.p2Score+=c:this.p1Score+=c,this.updateHUD(),this.handleRoundVictory(c,m?"P2":"P1")):this.updateHUD()}else{this.combo=0,this.timer=Math.max(1,this.timer-2),f.playWrong(),this.particleSystem.burst(r,s,!1,24);const l=document.getElementById("bag-icon-container");l&&(l.classList.add("animate-reject"),setTimeout(()=>l.classList.remove("animate-reject"),500)),this.emsBagTargetEl.classList.add("animate-reject"),setTimeout(()=>this.emsBagTargetEl.classList.remove("animate-reject"),500),i.classList.remove("is-dragged"),i.classList.add("animate-wobble"),setTimeout(()=>i.classList.remove("animate-wobble"),400),this.updateHUD()}}initPreGame(){this.currentScenario=A(),this.timer=30,this.requiredItemsLeft=new Set(this.currentScenario.requiredItemIds),this.firstGrabberMap.clear(),this.p1Collected.clear(),this.p2Collected.clear(),this.finisherBonusAwarded=!1,this.setGameMode(this.gameMode),this.isRoundActive=!1}onStartGameClicked(){this.hasGameStarted=!0,this.isPaused=!1,this.updatePauseButtonUI(!1),this.hidePauseModal(),f.playDispatchAlarm(),f.startBgm(),this.hideIntroModal(),this.startNewGame()}showIntroModal(t=!1){const e=document.getElementById("dispatch-intro-modal");if(!e)return;e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0","pointer-events-none")},10);const i=document.getElementById("btn-start-game");i&&(t?i.innerHTML=`
          <span class="text-2xl sm:text-3xl animate-bounce">🚑</span>
          <span class="tracking-wide">➔ 繼續救護出勤任務</span>
        `:i.innerHTML=`
          <span class="text-2xl sm:text-3xl animate-bounce">🚑</span>
          <span class="tracking-wide">START 立即出勤</span>
          <span class="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform">➔</span>
        `)}hideIntroModal(){const t=document.getElementById("dispatch-intro-modal");t&&(t.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>{t.classList.add("hidden")},500))}startNewGame(){this.currentRound=1,this.p1Score=0,this.p2Score=0,this.combo=0,this.playedScenarioIds.clear(),this.startRound()}startRound(){this.isRoundActive=!0,this.isPaused=!1,this.updatePauseButtonUI(!1),this.hidePauseModal(),this.playedScenarioIds.size>=S.length&&this.playedScenarioIds.clear(),this.currentScenario=A([...this.playedScenarioIds]),this.playedScenarioIds.add(this.currentScenario.id),this.timer=30,this.requiredItemsLeft=new Set(this.currentScenario.requiredItemIds),this.firstGrabberMap.clear(),this.p1Collected.clear(),this.p2Collected.clear(),this.finisherBonusAwarded=!1,this.renderScenarioCard(),this.buildShelfItems(),this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>this.onTimerTick(),1e3),this.updateHUD()}onTimerTick(){!this.isRoundActive||this.isPaused||(this.timer--,this.timer<=5&&this.timer>0&&(f.playTick(),this.hudTimerEl.classList.add("animate-ping"),setTimeout(()=>this.hudTimerEl.classList.remove("animate-ping"),300)),this.timer<=0&&(this.timer=0,this.handleRoundTimeout()),this.updateHUD())}handleRoundVictory(t,e){this.isRoundActive=!1,clearInterval(this.timerInterval),f.playRoundWin(),this.particleSystem.burst(window.innerWidth/2,window.innerHeight/2,!0,64);const i=this.p1Score+this.p2Score;document.getElementById("modal-banner").innerHTML="🏆",document.getElementById("modal-banner").className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#48BB78] text-white shadow-lg",document.getElementById("modal-title").textContent="出勤處置完美收齊！",document.getElementById("modal-subtitle").textContent=`第 ${this.currentRound} 回合・由 ${e} 完成最終收齊`;const r=document.getElementById("modal-scores-breakdown");if(this.gameMode==="vs"){const s=Array.from(this.firstGrabberMap.values()).filter(a=>a==="P1").length,o=Array.from(this.firstGrabberMap.values()).filter(a=>a==="P2").length;r.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（左側・藍）得分：</span>
          <span class="text-sm font-black">${this.p1Score} 分 (首位搶得 ${s} 項)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（右側・橘）得分：</span>
          <span class="text-sm font-black">${this.p2Score} 分 (首位搶得 ${o} 項)</span>
        </div>
      `}else this.isMultiplayerMode?r.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（藍）累計：</span>
          <span class="text-sm font-black">${this.p1Score} 分</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（橘）累計：</span>
          <span class="text-sm font-black">${this.p2Score} 分</span>
        </div>
      `:r.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員處置得分：</span>
          <span class="text-sm font-black">${this.p1Score} 分</span>
        </div>
      `;document.getElementById("modal-score-bonus").textContent=`+${t} 分 (${e} 獲得)`,document.getElementById("modal-score-total").textContent=`${i} 分`,document.getElementById("modal-rationale").textContent=this.currentScenario.rationale,document.getElementById("modal-tip").textContent=this.currentScenario.tip,this.showRoundModal()}handleRoundTimeout(){this.isRoundActive=!1,clearInterval(this.timerInterval),f.playWrong(),this.particleSystem.burst(window.innerWidth/2,window.innerHeight/2,!1,40);const t=this.p1Score+this.p2Score;document.getElementById("modal-banner").innerHTML="⏳",document.getElementById("modal-banner").className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#E07A5F] text-white shadow-lg",document.getElementById("modal-title").textContent="30秒出勤時間耗盡！",document.getElementById("modal-subtitle").textContent="緊急狀況刻不容緩，請再接再厲！";const e=document.getElementById("modal-scores-breakdown");if(this.gameMode==="vs"){const i=Array.from(this.firstGrabberMap.values()).filter(s=>s==="P1").length,r=Array.from(this.firstGrabberMap.values()).filter(s=>s==="P2").length;e.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（左側・藍）：</span>
          <span class="text-sm font-black">${this.p1Score} 分 (首位搶得 ${i} 項)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（右側・橘）：</span>
          <span class="text-sm font-black">${this.p2Score} 分 (首位搶得 ${r} 項)</span>
        </div>
      `}else this.isMultiplayerMode?e.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員：</span>
          <span>${this.p1Score} 分</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員：</span>
          <span>${this.p2Score} 分</span>
        </div>
      `:e.innerHTML=`
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員得分：</span>
          <span>${this.p1Score} 分</span>
        </div>
      `;document.getElementById("modal-score-bonus").textContent="+0 分 (未完整收齊)",document.getElementById("modal-score-total").textContent=`${t} 分`,document.getElementById("modal-rationale").textContent=this.currentScenario.rationale,document.getElementById("modal-tip").textContent=this.currentScenario.tip,this.showRoundModal()}showRoundModal(){this.roundModalEl.classList.remove("hidden"),setTimeout(()=>this.roundModalEl.classList.remove("opacity-0"),10)}hideRoundModal(){this.roundModalEl.classList.add("opacity-0"),setTimeout(()=>this.roundModalEl.classList.add("hidden"),300)}showPodiumCeremony(){this.isRoundActive=!1,clearInterval(this.timerInterval),f.playRoundWin();for(let a=0;a<5;a++)setTimeout(()=>{const l=window.innerWidth*(.2+.6*Math.random()),c=window.innerHeight*(.2+.4*Math.random());this.particleSystem.burst(l,c,!0,80)},a*350);const t=document.getElementById("podium-modal");if(!t)return;const e=document.getElementById("podium-title"),i=document.getElementById("podium-subtitle"),r=document.getElementById("podium-stage"),s=document.getElementById("podium-stats"),o=this.p1Score+this.p2Score;if(this.isMultiplayerMode){const a=this.p1Score>this.p2Score,l=this.p1Score===this.p2Score;if(l)e.textContent="雙人同心！榮獲最佳神級救護搭檔 MVP！",i.textContent=`共出勤 ${this.maxRounds} 趟緊急任務，兩位救護員以平手神配合守護市民！`;else{const d=a?"P1 救護員（藍色）":"P2 救護員（橘色）";e.textContent=`🎉 恭喜 ${d} 榮登冠軍 MVP！`,i.textContent=`分秒必爭！在 ${this.maxRounds} 趟隨機出勤中脫穎而出，精準收齊急救器材！`}const c=l||a?1:2,m=l?1:a?2:1;r.innerHTML=`
        <!-- P1 救護員頒獎位 -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${c===1?"animate-bounce":""}">${c===1?"🥇":"🥈"}</div>
          <div class="text-xs font-black text-[#3182CE] bg-blue-100 px-3 py-1 rounded-full border border-blue-300 mb-1">
            P1 救護員
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p1Score} 分</div>
          <div class="w-full ${c===1?"h-32 bg-gradient-to-t from-blue-500 to-blue-400":"h-24 bg-gradient-to-t from-blue-300 to-blue-200"} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${c===1?"CHAMPION":"2ND"}</span>
            <span class="text-[10px] font-bold opacity-90">${c===1?"冠軍 MVP":"卓越救護員"}</span>
          </div>
        </div>

        <!-- P2 救護員頒獎位 -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${m===1?"animate-bounce":""}">${m===1?"🥇":"🥈"}</div>
          <div class="text-xs font-black text-[#E07A5F] bg-orange-100 px-3 py-1 rounded-full border border-orange-300 mb-1">
            P2 救護員
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p2Score} 分</div>
          <div class="w-full ${m===1?"h-32 bg-gradient-to-t from-orange-500 to-orange-400":"h-24 bg-gradient-to-t from-orange-300 to-orange-200"} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${m===1?"CHAMPION":"2ND"}</span>
            <span class="text-[10px] font-bold opacity-90">${m===1?"冠軍 MVP":"卓越救護員"}</span>
          </div>
        </div>
      `}else{let a="🎖️ S級 首席高級救護技術員 (EMT-P)";this.p1Score<30?a="🔰 B級 初級救護技術員 (EMT-1)":this.p1Score<60&&(a="🥈 A級 中級救護技術員 (EMT-2)"),e.textContent="🌟 出勤任務圓滿完成！",i.textContent=`成功完成 ${this.maxRounds} 趟緊急出勤，榮獲最高醫療榮譽評價！`,r.innerHTML=`
        <div class="w-full flex flex-col items-center py-2">
          <div class="text-4xl mb-2 animate-bounce">🏆</div>
          <div class="text-sm font-black text-[#B45309] bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 mb-2">
            ${a}
          </div>
          <div class="text-3xl font-black text-[#E07A5F] mb-3">${this.p1Score} <span class="text-sm text-[#718096]">總得分</span></div>
          <div class="w-48 h-20 bg-gradient-to-t from-[#E07A5F] to-[#F4A261] rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-lg font-black tracking-widest">MASTER EMT</span>
            <span class="text-[11px] opacity-90">急救耗材精通大師</span>
          </div>
        </div>
      `}s.innerHTML=`
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">挑戰出勤題數</div>
        <div class="text-base font-black text-[#2D3748] mt-0.5">${this.maxRounds} 趟</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">團隊累計總分</div>
        <div class="text-base font-black text-[#C53030] mt-0.5">${o} 分</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">耗材精準收齊率</div>
        <div class="text-base font-black text-[#38A169] mt-0.5">100%</div>
      </div>
    `,t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0")},10)}hidePodiumModal(){const t=document.getElementById("podium-modal");t&&(t.classList.add("opacity-0"),setTimeout(()=>{t.classList.add("hidden")},500))}renderScenarioCard(){this.scenarioTitleEl.textContent=this.currentScenario.title,this.scenarioDescEl.textContent=this.currentScenario.description,this.scenarioCategoryEl.textContent=this.currentScenario.category,this.scenarioPatientEl.textContent=this.currentScenario.patient,this.targetSlotsEl.innerHTML=this.currentScenario.requiredItemIds.map(t=>{const e=M(t);return`
        <div data-slot-item-id="${t}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFDF9] border-2 border-[#463529] p-1.5 flex items-center justify-center shadow-[0_2px_0_#D5C7B2] transition-all" title="${e==null?void 0:e.name}">
          ${e?e.svg:"？"}
        </div>
      `}).join(""),this.vsScenarioTitleEl&&(this.vsScenarioTitleEl.textContent=this.currentScenario.title),this.vsScenarioDescEl&&(this.vsScenarioDescEl.textContent=this.currentScenario.description),this.vsScenarioCategoryEl&&(this.vsScenarioCategoryEl.textContent=this.currentScenario.category),this.vsScenarioPatientEl&&(this.vsScenarioPatientEl.textContent=this.currentScenario.patient),this.p1TargetSlotsEl&&(this.p1TargetSlotsEl.innerHTML=this.currentScenario.requiredItemIds.map(t=>{const e=M(t);return`
          <div data-p1-slot-id="${t}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#4F94C4] transition-all" title="${e==null?void 0:e.name}">
            ${e?e.svg:"？"}
          </div>
        `}).join("")),this.p2TargetSlotsEl&&(this.p2TargetSlotsEl.innerHTML=this.currentScenario.requiredItemIds.map(t=>{const e=M(t);return`
          <div data-p2-slot-id="${t}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#EB6A5B] transition-all" title="${e==null?void 0:e.name}">
            ${e?e.svg:"？"}
          </div>
        `}).join(""))}createCardElement(t,e=1){const i=document.createElement("div");i.setAttribute("data-item-id",t.id),i.setAttribute("data-count",e.toString()),i.setAttribute("data-taken-by","");const r=this.gameMode==="vs"&&e>1;i.className=`table-item-card w-20 h-28 sm:w-24 sm:h-32 flex flex-col items-center justify-between p-1 transition-all duration-300 ${r?"is-stacked":""}`;const s=this.gameMode==="vs"?`<span class="card-stack-badge ${e>1?"badge-double":"badge-single"}">${e>1?"x2 份":"x1 份"}</span>`:"";return i.innerHTML=`
      ${s}
      <!-- 去背 SVG 圖形 -->
      <div class="table-svg-wrapper w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-none">
        ${t.svg}
      </div>
      <!-- 下方器材名稱標籤 (日式淺奶茶色木紋藥籤，大字體清晰可見) -->
      <div class="item-name-tag text-xs sm:text-sm font-extrabold px-2.5 py-1 rounded-xl mt-1 text-center truncate max-w-full pointer-events-none">
        ${t.name}
      </div>
    `,i.addEventListener("pointerdown",o=>{if(this.gameMode==="vs"){const a=o.clientX<window.innerWidth/2?"P1":"P2";if((i.getAttribute("data-taken-by")||"").includes(a)){this.showFloatingScore(o.clientX,o.clientY,`⚠️ ${a} 已拿過此器材！`,"#FC8181"),f.playWrong();return}this.startGrab(a,t,i,o.clientX,o.clientY)}else this.startGrab("mouse",t,i,o.clientX,o.clientY)}),i}buildShelfItems(){const t=this.currentScenario.requiredItemIds.map(a=>M(a)).filter(a=>a!==void 0),e=E.filter(a=>!this.currentScenario.requiredItemIds.includes(a.id)),r=Math.max(0,10-t.length),s=[...e].sort(()=>Math.random()-.5).slice(0,r);this.shelfItems=[...t,...s].sort(()=>Math.random()-.5);const o=this.gameMode==="vs"?2:1;this.shelfEl.innerHTML="",this.shelfItems.forEach(a=>{const l=this.createCardElement(a,o);this.shelfEl.appendChild(l)})}replenishShelfCard(t){const e=new Set(Array.from(this.shelfEl.querySelectorAll(".table-item-card")).filter(s=>s!==t).map(s=>s.getAttribute("data-item-id")).filter(s=>s!==null)),i=this.currentScenario.requiredItemIds.filter(s=>!e.has(s)).map(s=>M(s)).filter(s=>s!==void 0);let r;if(i.length>0)r=i[Math.floor(Math.random()*i.length)];else{const s=E.filter(o=>!e.has(o.id));s.length>0?r=s[Math.floor(Math.random()*s.length)]:r=E[Math.floor(Math.random()*E.length)]}if(!r){t.remove();return}t.style.transform="scale(0)",t.style.opacity="0",setTimeout(()=>{const s=this.gameMode==="vs"?2:1,o=this.createCardElement(r,s);o.style.transform="scale(0)",o.style.opacity="0",t.parentNode?t.parentNode.replaceChild(o,t):this.shelfEl.appendChild(o),requestAnimationFrame(()=>{o.style.transform="scale(1)",o.style.opacity="1",o.classList.add("animate-wobble"),setTimeout(()=>o.classList.remove("animate-wobble"),400)})},200)}updateHUD(){this.hudRoundEl.textContent=`${this.currentRound}/${this.maxRounds}`,this.hudTimerEl.textContent=`${this.timer}s`,this.hudScoreP1El.textContent=`${this.p1Score} 分`,this.hudScoreP2El.textContent=`${this.p2Score} 分`,this.hudComboEl.textContent=`x${this.combo}`;const t=document.getElementById("p1-vs-score-tag"),e=document.getElementById("p2-vs-score-tag");t&&(t.textContent=`${this.p1Score} 分`),e&&(e.textContent=`${this.p2Score} 分`)}togglePause(){!this.hasGameStarted||!this.isRoundActive||(this.isPaused?this.resumeGame():this.pauseGame())}pauseGame(){!this.hasGameStarted||!this.isRoundActive||this.isPaused||(this.isPaused=!0,this.updatePauseButtonUI(!0),this.showPauseModal(),f.playPause(),f.pauseBgm())}resumeGame(){this.isPaused&&(this.isPaused=!1,this.updatePauseButtonUI(!1),this.hidePauseModal(),f.playResume(),f.resumeBgm())}updatePauseButtonUI(t){const e=document.getElementById("pause-icon"),i=document.getElementById("pause-text"),r=document.getElementById("btn-pause-toggle");t?(e&&(e.textContent="▶️"),i&&(i.textContent="繼續"),r&&(r.className="px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#7CB69D] text-xs font-black text-white hover:bg-[#5F9E84] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529] animate-pulse")):(e&&(e.textContent="⏸️"),i&&(i.textContent="暫停"),r&&(r.className="px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#F6C46A] text-xs font-black text-[#463529] hover:bg-[#E6AC4C] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]"))}showPauseModal(){const t=document.getElementById("pause-modal");if(!t)return;const e=document.getElementById("pause-modal-subtitle"),i=document.getElementById("pause-current-scenario-cat"),r=document.getElementById("pause-current-time-badge"),s=document.getElementById("pause-current-scenario-title"),o=document.getElementById("pause-current-scenario-patient");e&&(e.textContent=`目前為第 ${this.currentRound}/${this.maxRounds} 趟出勤・倒數時間尚餘 ${this.timer} 秒`),i&&this.currentScenario&&(i.textContent=this.currentScenario.category),r&&(r.textContent=`剩餘 ${this.timer} 秒`),s&&this.currentScenario&&(s.textContent=this.currentScenario.title),o&&this.currentScenario&&(o.textContent=this.currentScenario.patient),t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0")},10)}hidePauseModal(){const t=document.getElementById("pause-modal");t&&(t.classList.add("opacity-0"),setTimeout(()=>{t.classList.add("hidden")},300))}mainRenderLoop(){this.particleSystem.updateAndDraw(),requestAnimationFrame(()=>this.mainRenderLoop())}}function T(){window.__EMS_GAME_INITIALIZED__||(window.__EMS_GAME_INITIALIZED__=!0,new V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T();
