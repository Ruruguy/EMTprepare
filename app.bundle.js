(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/data/items.ts
  var MEDICAL_ITEMS = [
    // ================= 1. 呼吸道與氧氣 (Airway & Oxygen) =================
    {
      id: "bvm",
      name: "\u7526\u9192\u7403 BVM",
      enName: "Bag Valve Mask",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u6B63\u58D3\u901A\u6C23\u88DD\u7F6E\uFF0C\u914D\u5408\u55AE\u5411\u95A5\u8207\u84C4\u6C23\u888B\u4F7F\u7528\u3002",
      indication: "\u60A3\u8005\u505C\u6B62\u547C\u5438\uFF08\u7121\u547C\u5438/\u7015\u6B7B\u547C\u5438\uFF09\u6216\u547C\u5438\u6975\u5EA6\u5FAE\u5F31\u3001\u7121\u6548\u901A\u6C23\u6642\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u7DA0\u8272\u6C27\u6C23\u5C0F\u8EDF\u7BA1 -->
      <path d="M28 54 C22 54 16 48 16 42 C16 36 22 34 15 28" stroke="#7CB69D" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE\u84C4\u6C23\u888B Reservoir Bag -->
      <path d="M12 64 C7 71 11 84 22 82 C32 80 36 70 29 61 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 74 C20 76 25 75 27 71" stroke="#D5C7B2" stroke-width="1.8" stroke-linecap="round"/>
      <!-- \u5F8C\u7AEF\u9023\u63A5\u95A5 -->
      <rect x="26" y="48" width="9" height="9" rx="2.5" transform="rotate(-15 30 52)" fill="#F6EFE2" stroke="#463529" stroke-width="2.2"/>
      <!-- \u80D6\u80D6\u8584\u8377\u7DA0\u77FD\u81A0\u7403\u9AD4 Chubby Mint Silicone Bag -->
      <ellipse cx="50" cy="46" rx="22" ry="16" transform="rotate(-14 50 46)" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <!-- \u3044\u3089\u3059\u3068\u3084\u98A8\u683C\u9AD8\u5149\u8207\u9670\u5F71\u5F27\u7DDA -->
      <ellipse cx="45" cy="37" rx="9" ry="3.5" transform="rotate(-16 45 37)" fill="#FFFFFF" opacity="0.65"/>
      <path d="M40 54 C48 58 59 54 65 48" stroke="#5F9E84" stroke-width="2.2" stroke-linecap="round"/>
      <!-- \u524D\u7AEF\u9D28\u5634\u95A5\u7D44\u4EF6 -->
      <rect x="67" y="34" width="9" height="9" rx="2.5" transform="rotate(-14 71 38)" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- \u5713\u6F64\u900F\u660E\u9762\u7F69\u8207\u67D4\u8EDF\u6C23\u588A\u5708 -->
      <path d="M74 31 C82 26 91 34 89 47 C87 57 77 58 71 46 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M84 33 C91 39 90 52 81 55" stroke="#6BB2E2" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="81" cy="39" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
    },
    {
      id: "simple_mask",
      name: "\u7C21\u55AE\u578B\u6C27\u6C23\u9762\u7F69",
      enName: "Simple Face Mask",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u63D0\u4F9B\u4E2D\u6FC3\u5EA6\u6C27\u6C23\uFF08\u7D04 40~60%\uFF0C\u6D41\u91CF 6~10 L/min\uFF09\u3002",
      indication: "\u4E2D\u5EA6\u7F3A\u6C27\u3001\u81EA\u767C\u6027\u547C\u5438\u5C1A\u5E73\u7A69\u4F46\u9700\u6C27\u7642\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u67D4\u548C\u9B06\u7DCA\u56FA\u5B9A\u5E36 -->
      <path d="M30 38 C16 43 14 58 26 66" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      <path d="M70 38 C84 43 86 58 74 66" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- \u5713\u6F64\u6C34\u6EF4\u578B\u900F\u660E\u9762\u7F69 -->
      <path d="M50 22 C66 22 76 38 74 56 C72 70 61 77 50 77 C39 77 28 70 26 56 C24 38 34 22 50 22 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u3044\u3089\u3059\u3068\u3084\u767D\u9AD8\u5149 -->
      <ellipse cx="41" cy="35" rx="4" ry="7" transform="rotate(-18 41 35)" fill="#FFFFFF" opacity="0.65"/>
      <!-- \u9F3B\u6A11\u8EDF\u92C1\u58D3\u689D -->
      <path d="M39 30 C46 26 54 26 61 30" stroke="#F6EFE2" stroke-width="4" stroke-linecap="round"/>
      <path d="M39 30 C46 26 54 26 61 30" stroke="#463529" stroke-width="2" stroke-linecap="round"/>
      <!-- \u5169\u5074\u53EF\u611B\u547C\u6C23\u5C0F\u5713\u5B54 -->
      <circle cx="37" cy="50" r="2.2" fill="#463529"/>
      <circle cx="42" cy="53" r="2.2" fill="#463529"/>
      <circle cx="63" cy="50" r="2.2" fill="#463529"/>
      <circle cx="58" cy="53" r="2.2" fill="#463529"/>
      <!-- \u5E95\u90E8\u6C27\u6C23\u63A5\u982D\u8207\u7DA0\u7BA1 -->
      <rect x="45" y="66" width="10" height="12" rx="3" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <path d="M50 78 C50 86 58 89 64 94" stroke="#7CB69D" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M50 78 C50 86 58 89 64 94" stroke="#463529" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    </svg>`
    },
    {
      id: "nrm_mask",
      name: "\u975E\u518D\u5438\u5165\u578B\u6C27\u6C23\u9762\u7F69",
      enName: "NRM Mask",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u63D0\u4F9B\u9AD8\u6FC3\u5EA6\u6C27\u6C23\uFF0880~100%\uFF0C\u6D41\u91CF 10~15 L/min\uFF09\u3002",
      indication: "\u56B4\u91CD\u7F3A\u6C27\u3001CO\u4E2D\u6BD2\u3001\u4F11\u514B\u3001\u56B4\u91CD\u5275\u50B7\u547C\u5438\u56F0\u96E3\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9B06\u7DCA\u5E36 -->
      <path d="M28 34 C16 38 16 50 26 56" stroke="#7CB69D" stroke-width="2.4" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- \u5E95\u90E8\u80D6\u80D6\u5132\u6C23\u888B Reservoir Bag (NRM\u7279\u5FB5) -->
      <path d="M42 58 C32 65 30 82 42 90 C52 96 68 92 70 80 C72 69 62 61 56 58 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="46" cy="76" rx="4" ry="7" transform="rotate(-12 46 76)" fill="#D6ECF9" opacity="0.6"/>
      <path d="M52 74 C56 80 61 82 64 78" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <!-- \u9762\u7F69\u7F69\u9AD4 -->
      <path d="M48 16 C63 16 72 30 70 46 C68 58 58 64 48 64 C38 64 28 58 26 46 C24 30 33 16 48 16 Z" fill="#D6ECF9" fill-opacity="0.9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="39" cy="28" rx="3.5" ry="6" transform="rotate(-18 39 28)" fill="#FFFFFF" opacity="0.7"/>
      <!-- \u55AE\u5411\u73CA\u745A\u7D05\u5713\u74E3\u819C One-way Valves (NRM\u95DC\u9375\u8FA8\u8B58) -->
      <circle cx="38" cy="42" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="58" cy="42" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="38" cy="42" r="1.5" fill="#FFFDF9"/>
      <circle cx="58" cy="42" r="1.5" fill="#FFFDF9"/>
      <!-- \u9023\u63A5\u95A5\u8207\u6C27\u6C23\u7BA1 -->
      <rect x="43" y="54" width="10" height="9" rx="2.5" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <path d="M56 62 C68 66 76 76 84 88" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round" fill="none"/>
    </svg>`
    },
    {
      id: "nasal_cannula",
      name: "\u6C27\u6C23\u9F3B\u5C0E\u7BA1",
      enName: "Nasal Cannula",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u4F4E\u6FC3\u5EA6\u6C27\u6C23\uFF0824~44%\uFF0C\u6D41\u91CF 1~6 L/min\uFF09\uFF0C\u651C\u5E36\u8212\u9069\u3002",
      indication: "\u8F15\u5EA6\u4F4E\u8840\u6C27\u3001\u6162\u6027\u963B\u585E\u6027\u80BA\u75C5\u7A69\u5B9A\u8005\u3001\u7121\u6CD5\u8010\u53D7\u9762\u7F69\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u96D9\u8033\u5713\u5F27\u8EDF\u7BA1\u74B0 -->
      <path d="M22 44 C13 54 22 72 38 76 C46 78 54 78 62 76 C78 72 87 54 78 44" stroke="#463529" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M22 44 C13 54 22 72 38 76 C46 78 54 78 62 76 C78 72 87 54 78 44" stroke="#94C9B3" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- \u5169\u500B\u53EF\u611B\u5713\u982D\u9F3B\u53C9 Nasal Prongs (\u7279\u5FB5) -->
      <path d="M44 42 V31" stroke="#463529" stroke-width="6" stroke-linecap="round"/>
      <path d="M44 42 V31" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M56 42 V31" stroke="#463529" stroke-width="6" stroke-linecap="round"/>
      <path d="M56 42 V31" stroke="#7CB69D" stroke-width="3.2" stroke-linecap="round"/>
      <!-- \u9F3B\u4E0B\u8EDF\u7BA1\u6A6B\u6A11 -->
      <rect x="33" y="39" width="34" height="8" rx="4" fill="#7CB69D" stroke="#463529" stroke-width="2.3"/>
      <ellipse cx="50" cy="42" rx="8" ry="1.5" fill="#FFFFFF" opacity="0.6"/>
      <!-- \u6ED1\u52D5\u8ABF\u7BC0\u74B0 Bolo Ring -->
      <rect x="43" y="72" width="14" height="8" rx="4" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- \u4E0B\u65B9\u4F9B\u6C27\u4E3B\u7BA1 -->
      <path d="M50 80 C50 87 54 91 58 95" stroke="#463529" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M50 80 C50 87 54 91 58 95" stroke="#7CB69D" stroke-width="3" stroke-linecap="round"/>
    </svg>`
    },
    {
      id: "c_collar",
      name: "\u9838\u5708",
      enName: "Cervical Collar",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u9650\u5236\u9838\u690E\u904E\u5EA6\u5F4E\u66F2\u3001\u5F8C\u4EF0\u6216\u626D\u8F49\uFF0C\u4FDD\u8B77\u810A\u690E\u795E\u7D93\u3002",
      indication: "\u9AD8\u80FD\u91CF\u649E\u64CA\u5275\u50B7\u3001\u8ECA\u798D\u3001\u589C\u843D\u50B7\u3001\u61F7\u7591\u9838\u690E\u640D\u50B7\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u85CD\u8272\u67D4\u8EDF\u5167\u896F\u6CE1\u68C9\u5C64 -->
      <path d="M16 42 C20 30 36 26 50 26 C64 26 80 30 84 42 C87 54 83 67 74 73 C62 80 38 80 26 73 C17 67 13 54 16 42 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5"/>
      <!-- \u5976\u6CB9\u767D\u786C\u8CEA\u5916\u652F\u6490\u6BBC -->
      <path d="M19 45 C23 35 37 32 50 32 C63 32 77 35 81 45 C83 54 80 65 72 70 C62 76 38 76 28 70 C20 65 17 54 19 45 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5"/>
      <!-- \u4E0B\u5DF4\u5713\u5F27\u6258\u67B6 Chin Support -->
      <path d="M34 36 C42 44 58 44 66 36 C62 47 38 47 34 36 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- \u4E2D\u592E\u5713\u6F64\u6C23\u5207\u89C0\u5BDF\u5B54 Trachea Hole (\u7279\u5FB5) -->
      <ellipse cx="50" cy="56" rx="10" ry="7.5" fill="#F8AD9D" fill-opacity="0.45" stroke="#463529" stroke-width="2.3"/>
      <!-- \u5169\u5074\u53EF\u611B\u8ABF\u6574\u9215\u6263 -->
      <circle cx="29" cy="55" r="3.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="71" cy="55" r="3.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <!-- \u9B54\u9B3C\u6C08\u9ECF\u6263\u5E36 -->
      <rect x="76" y="48" width="12" height="11" rx="3" transform="rotate(8 76 48)" fill="#5C4738" stroke="#463529" stroke-width="2.2"/>
      <!-- \u9AD8\u5149 -->
      <ellipse cx="33" cy="45" rx="4" ry="2" fill="#FFFFFF" opacity="0.75"/>
    </svg>`
    },
    {
      id: "spine_board",
      name: "\u9577\u80CC\u677F",
      enName: "Spine Board",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u525B\u6027\u5168\u8EAB\u56FA\u5B9A\u677F\uFF0C\u7528\u65BC\u810A\u690E\u53D7\u50B7\u60A3\u8005\u56FA\u5B9A\u8207\u642C\u904B\u3002",
      indication: "\u5168\u8EAB\u591A\u8655\u5916\u50B7\u3001\u7591\u4F3C\u810A\u690E\u640D\u50B7\u3001\u9700\u5168\u8EAB\u56FA\u5B9A\u53CA\u6C34\u5E73\u642C\u904B\u6642\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u6EAB\u6696\u5411\u65E5\u8475\u9EC3/\u4EAE\u6A58\u9577\u80CC\u677F\u672C\u9AD4 -->
      <rect x="27" y="10" width="46" height="80" rx="11" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <!-- \u3044\u3089\u3059\u3068\u3084\u98A8\u683C\u9AD8\u5149\u689D -->
      <path d="M35 16 H45" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
      <!-- \u982D\u90E8\u56FA\u5B9A\u8EDF\u588A\u5340 -->
      <rect x="41" y="17" width="18" height="12" rx="4" fill="#EB6A5B" fill-opacity="0.3" stroke="#463529" stroke-width="1.8" stroke-dasharray="2.5 2.5"/>
      <!-- \u5169\u5074\u5713\u6F64\u628A\u624B\u5B54 Handholds (\u9577\u80CC\u677F\u7279\u5FB5) -->
      <rect x="31" y="24" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="24" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="31" y="44" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="44" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="31" y="64" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="64.5" y="64" width="4.5" height="10" rx="2.2" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- \u5169\u689D\u5F69\u8272\u5B89\u5168\u56FA\u5B9A\u5E36 Straps -->
      <rect x="27" y="36" width="46" height="5.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <rect x="46" y="35" width="8" height="7.5" rx="1.5" fill="#5C4738" stroke="#463529" stroke-width="1.8"/>
      <rect x="27" y="56" width="46" height="5.5" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <rect x="46" y="55" width="8" height="7.5" rx="1.5" fill="#5C4738" stroke="#463529" stroke-width="1.8"/>
    </svg>`
    },
    {
      id: "gauze",
      name: "\u7D17\u5E03",
      enName: "Sterile Gauze",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u7121\u83CC\u7D17\u5E03\u584A\uFF0C\u7528\u65BC\u8986\u84CB\u50B7\u53E3\u3001\u76F4\u63A5\u52A0\u58D3\u6B62\u8840\u8207\u5438\u6536\u6EF2\u51FA\u6DB2\u3002",
      indication: "\u5404\u985E\u64E6\u50B7\u3001\u88C2\u50B7\u51FA\u8840\u3001\u50B7\u53E3\u8986\u84CB\u4FDD\u8B77\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u4E0B\u5C64\u4EA4\u758A\u84EC\u9B06\u7D17\u5E03 -->
      <rect x="26" y="27" width="52" height="50" rx="7" transform="rotate(6 52 52)" fill="#F6EFE2" stroke="#463529" stroke-width="2.4"/>
      <!-- \u4E0A\u5C64\u67D4\u8EDF\u7C73\u767D\u7121\u83CC\u7D17\u5E03 -->
      <rect x="21" y="23" width="52" height="50" rx="7" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u6EAB\u6F64\u624B\u7E6A\u68C9\u7D17\u7DB2\u683C\u7E54\u7D0B -->
      <line x1="34" y1="27" x2="34" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="47" y1="27" x2="47" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="60" y1="27" x2="60" y2="69" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="36" x2="69" y2="36" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="48" x2="69" y2="48" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <line x1="25" y1="60" x2="69" y2="60" stroke="#E5D9C5" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
      <!-- \u53EF\u611B\u8584\u8377\u7DA0\u7121\u83CC\u5341\u5B57\u8CBC\u7D19 -->
      <circle cx="61" cy="34" r="6.5" fill="#7CB69D" stroke="#463529" stroke-width="2"/>
      <path d="M61 30.5 V37.5 M57.5 34 H64.5" stroke="#FFFDF9" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
    },
    {
      id: "tourniquet",
      name: "\u6B62\u8840\u5E36",
      enName: "CAT Tourniquet",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u80A2\u9AD4\u5927\u52D5\u8108\u5674\u8840\u5C08\u7528\u6B62\u8840\u5E36\uFF0C\u5177\u65CB\u7DCA\u7D5E\u68D2\u8207\u56FA\u5B9A\u6263\u3002",
      indication: "\u56DB\u80A2\u5927\u51FA\u8840\u3001\u52D5\u8108\u6027\u5674\u8840\u3001\u52A0\u58D3\u6B62\u8840\u7121\u6548\u6642\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u52A0\u539A\u6DF1\u5DE7\u514B\u9ED1\u675F\u5E36\u74B0 -->
      <path d="M16 66 C26 48 74 48 84 66 L78 78 C68 62 32 62 22 78 Z" fill="#5C4738" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u73CA\u745A\u7D05\u62C9\u5C3E Red Tip (CAT\u6B62\u8840\u5E36\u7D93\u5178\u8FA8\u8B58) -->
      <path d="M14 68 L22 55 L28 63 L19 76 Z" fill="#EB6A5B" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
      <!-- \u7D5E\u68D2\u56FA\u5B9A\u5EA7 C-Clip -->
      <rect x="41" y="40" width="18" height="13" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2.2"/>
      <!-- \u5976\u6CB9\u767D\u6642\u9593\u7D00\u9304\u8CBC\u689D TIME -->
      <rect x="37" y="28" width="26" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <text x="41" y="35.5" font-size="6.5" fill="#EB6A5B" font-weight="900">TIME</text>
      <!-- \u5713\u982D\u65CB\u7DCA\u7D5E\u68D2 Windlass Rod -->
      <rect x="26" y="43" width="48" height="8" rx="4" transform="rotate(-24 50 47)" fill="#463529" stroke="#FFFDF9" stroke-width="1.2"/>
      <rect x="26" y="43" width="48" height="8" rx="4" transform="rotate(-24 50 47)" fill="#5C4738" stroke="#463529" stroke-width="2.3"/>
      <circle cx="50" cy="47" r="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "elastic_bandage",
      name: "\u5F48\u6027\u7E43\u5E36",
      enName: "Elastic Bandage",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u52A0\u58D3\u5305\u7D2E\u3001\u56FA\u5B9A\u6577\u6599\u53CA\u626D\u632B\u50B7\u652F\u6490\u3002",
      indication: "\u50B7\u53E3\u52A0\u58D3\u6B62\u8840\u3001\u6577\u6599\u56FA\u5B9A\u3001\u95DC\u7BC0\u626D\u50B7\u652F\u6490\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5C55\u958B\u5FAE\u6372\u7684\u5976\u8336\u8272\u7E43\u5E36\u5C3E\u7AEF -->
      <path d="M40 44 C52 34 70 33 85 42 C82 54 68 54 46 62 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- \u5713\u6EFE\u6EFE\u7E43\u5E36\u6372\u7B52\u672C\u9AD4 -->
      <ellipse cx="35" cy="56" rx="16" ry="22" fill="#E5D9C5" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="35" cy="56" rx="11" ry="16" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <ellipse cx="35" cy="56" rx="5" ry="8" fill="#7A6352" stroke="#463529" stroke-width="1.8"/>
      <!-- \u5F48\u6027\u7E54\u7D0B\u7DDA\u689D -->
      <path d="M54 42 C57 46 58 51 58 56" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <path d="M66 40 C69 44 70 49 70 53" stroke="#D5C7B2" stroke-width="2" stroke-linecap="round"/>
      <!-- \u5169\u679A\u53EF\u611B\u91D1\u5C6C\u5C0F\u56FA\u5B9A\u593E Clips -->
      <rect x="75" y="38" width="6" height="8" rx="2" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <rect x="73" y="47" width="6" height="8" rx="2" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "sam_splint",
      name: "\u9AA8\u6298\u56FA\u5B9A\u593E\u677F",
      enName: "SAM Splint",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u8F15\u8CEA\u9AD8\u5206\u5B50\u8EDF\u92C1\u593E\u677F\uFF0C\u53EF\u81EA\u7531\u5851\u578B\u70BAU\u578B\u6216C\u578B\u56FA\u5B9A\u9AA8\u6298\u3002",
      indication: "\u56DB\u80A2\u9589\u9396\u6027\u6216\u958B\u653E\u6027\u9AA8\u6298\u56FA\u5B9A\u3001\u95DC\u7BC0\u812B\u81FC\u56FA\u5B9A\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- U\u578B\u5F4E\u6298\u7684\u7ACB\u9AD4\u593E\u677F\uFF1A\u4EAE\u6A58\u5916\u5C64 + \u5929\u85CD\u5167\u5C64 (SAM Splint\u7D93\u5178\u914D\u8272) -->
      <path d="M24 30 C24 18 46 18 50 32 L60 66 C64 80 82 78 82 64" stroke="#463529" stroke-width="15" stroke-linecap="round" fill="none"/>
      <path d="M24 30 C24 18 46 18 50 32 L60 66 C64 80 82 78 82 64" stroke="#6BB2E2" stroke-width="10.5" stroke-linecap="round" fill="none"/>
      <path d="M22 32 C22 20 44 20 48 34 L58 68 C62 82 80 80 80 66" stroke="#F6C46A" stroke-width="6.5" stroke-linecap="round" fill="none"/>
      <path d="M22 32 C22 20 44 20 48 34 L58 68 C62 82 80 80 80 66" stroke="#EB6A5B" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- \u6CE1\u68C9\u8868\u9762\u53EF\u611B\u767D\u9EDE\u9AD8\u5149 -->
      <circle cx="35" cy="24" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="51" cy="45" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="56" cy="59" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="71" cy="75" r="2" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
    },
    {
      id: "ems_bag",
      name: "\u6551\u8B77\u5305",
      enName: "EMS Bag",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u6A19\u6E96\u7DCA\u6025\u6551\u8B77\u6280\u8853\u54E1\u51FA\u52E4\u80CC\u5305\uFF0C\u6536\u7D0D\u5168\u5957\u7B2C\u4E00\u7DDA\u6025\u6551\u5668\u6750\u3002",
      indication: "\u6240\u6709\u51FA\u52E4\u6551\u8B77\u60C5\u5883\u4E4B\u6838\u5FC3\u8F09\u5177\u8207\u5668\u6750\u6536\u7D0D\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9802\u90E8\u5713\u6F64\u63D0\u628A -->
      <path d="M36 30 V20 C36 14 64 14 64 20 V30" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- \u5169\u5074\u53EF\u611B\u5C0F\u53E3\u888B\u8033\u6735 -->
      <rect x="11" y="44" width="10" height="28" rx="5" fill="#D85344" stroke="#463529" stroke-width="2.4"/>
      <rect x="79" y="44" width="10" height="28" rx="5" fill="#D85344" stroke="#463529" stroke-width="2.4"/>
      <!-- \u5713\u6EFE\u6EFE\u73CA\u745A\u7D05\u6551\u8B77\u5305\u4E3B\u9AD4 -->
      <rect x="18" y="28" width="64" height="56" rx="14" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <!-- \u3044\u3089\u3059\u3068\u3084\u767D\u9AD8\u5149 -->
      <ellipse cx="29" cy="36" rx="6" ry="2.5" transform="rotate(-12 29 36)" fill="#FFFFFF" opacity="0.65"/>
      <!-- \u6696\u9EC3\u8272\u53CD\u5149\u98FE\u689D -->
      <rect x="18" y="43" width="64" height="8" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- \u53EF\u611B\u5FAE\u7B11\u8868\u60C5\u8207\u7D05\u6F64\u81C9\u9830 (\u3044\u3089\u3059\u3068\u3084\u64EC\u4EBA\u5409\u7965\u7269\u98A8\u683C) -->
      <path d="M35 37 C36 34 39 34 40 37" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M60 37 C61 34 64 34 65 37" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <ellipse cx="32" cy="40" rx="3" ry="1.8" fill="#F8AD9D"/>
      <ellipse cx="68" cy="40" rx="3" ry="1.8" fill="#F8AD9D"/>
      <path d="M47 39 Q50 42 53 39" stroke="#463529" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- \u524D\u5074\u5713\u89D2\u5927\u53E3\u888B\u8207\u751F\u547D\u4E4B\u661F\u5341\u5B57\u5FBD\u7AE0 -->
      <rect x="27" y="55" width="46" height="23" rx="7" fill="#D85344" stroke="#463529" stroke-width="2.3"/>
      <circle cx="50" cy="66.5" r="8.5" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <path d="M50 61.5 V71.5 M45 66.5 H55" stroke="#6BB2E2" stroke-width="3.2" stroke-linecap="round"/>
    </svg>`
    },
    {
      id: "stethoscope",
      name: "\u807D\u8A3A\u5668",
      enName: "Stethoscope",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "\u8046\u807D\u5FC3\u97F3\u3001\u80BA\u90E8\u547C\u5438\u97F3\uFF08\u54EE\u9CF4\u3001\u56C9\u97F3\u3001\u5C0D\u7A31\u6027\uFF09\u8207\u6E2C\u91CF\u8840\u58D3\u3002",
      indication: "\u547C\u5438\u5598\u3001\u80F8\u75DB\u3001\u61F7\u7591\u6C23\u80F8\u6216\u6C23\u5598\u3001\u751F\u547D\u5FB5\u8C61\u5168\u9762\u8A55\u4F30\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u96D9\u8033\u91D1\u5C6C\u807D\u7BA1 -->
      <path d="M34 26 C32 14 44 12 50 22 C56 12 68 14 66 26" stroke="#463529" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M34 26 C32 14 44 12 50 22 C56 12 68 14 66 26" stroke="#DCE4EC" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <!-- \u5976\u6CB9\u767D\u5713\u6F64\u8033\u585E Eartips -->
      <circle cx="35" cy="26" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <circle cx="65" cy="26" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <!-- Y\u578B\u91D1\u5C6C\u532F\u6D41\u7BA1 -->
      <path d="M39 24 L50 36 L61 24" stroke="#463529" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M39 24 L50 36 L61 24" stroke="#DCE4EC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- \u67D4\u548C\u5929\u85CD/\u73CA\u745A\u7C89\u807D\u8A3A\u8EDF\u7BA1 (Q\u5F48\u5F27\u7DDA) -->
      <path d="M50 36 C50 52 26 54 26 70 C26 86 56 88 58 72 C60 58 76 58 76 74" stroke="#463529" stroke-width="7.5" stroke-linecap="round" fill="none"/>
      <path d="M50 36 C50 52 26 54 26 70 C26 86 56 88 58 72 C60 58 76 58 76 74" stroke="#6BB2E2" stroke-width="4.2" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE\u807D\u8A3A\u982D Chestpiece -->
      <circle cx="76" cy="76" r="11" fill="#DCE4EC" stroke="#463529" stroke-width="2.6"/>
      <circle cx="76" cy="76" r="7" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <circle cx="76" cy="76" r="2.5" fill="#6BB2E2"/>
      <ellipse cx="73" cy="72" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
    },
    {
      id: "bp_monitor",
      name: "\u8840\u58D3\u6A5F",
      enName: "BP Monitor",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "\u6E2C\u91CF\u60A3\u8005\u6536\u7E2E\u58D3\u3001\u8212\u5F35\u58D3\u8207\u5E73\u5747\u52D5\u8108\u58D3\u3002",
      indication: "\u4F11\u514B\u3001\u9AD8\u8840\u58D3\u6025\u75C7\u3001\u982D\u6688\u3001\u5275\u50B7\u3001\u5E38\u898F\u751F\u547D\u5FB5\u8C61\u91CF\u6E2C\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u6EAB\u6F64\u6DF1\u85CD\u58D3\u8108\u5E36 Cuff -->
      <rect x="16" y="44" width="38" height="36" rx="7" fill="#4F94C4" stroke="#463529" stroke-width="2.6"/>
      <rect x="21" y="50" width="28" height="10" rx="3" fill="#D6ECF9" stroke="#463529" stroke-width="1.8"/>
      <ellipse cx="25" cy="48" rx="4" ry="1.5" fill="#FFFFFF" opacity="0.6"/>
      <!-- \u5169\u689DQ\u5F48\u5145\u6C23\u6A61\u81A0\u7BA1 -->
      <path d="M44 80 C48 92 62 90 65 76" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M32 80 C36 94 70 96 75 78" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE\u6307\u91DD\u58D3\u529B\u9336 Gauge -->
      <circle cx="67" cy="36" r="16" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <circle cx="67" cy="36" r="12" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- \u9336\u76E4\u523B\u5EA6\u8207\u73CA\u745A\u7D05\u6307\u91DD -->
      <circle cx="67" cy="27" r="1.2" fill="#463529"/>
      <circle cx="76" cy="36" r="1.2" fill="#463529"/>
      <circle cx="58" cy="36" r="1.2" fill="#463529"/>
      <line x1="67" y1="36" x2="73" y2="29" stroke="#EB6A5B" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="67" cy="36" r="2.2" fill="#463529"/>
      <!-- \u80D6\u80D6\u5145\u6C23\u634F\u7403 Bulb -->
      <ellipse cx="75" cy="72" rx="8" ry="11" fill="#5C4738" stroke="#463529" stroke-width="2.5"/>
      <ellipse cx="73" cy="68" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.4"/>
      <rect x="72" y="57" width="6" height="4" rx="1.5" fill="#DCE4EC" stroke="#463529" stroke-width="1.8"/>
    </svg>`
    },
    {
      id: "pulse_oximeter",
      name: "\u8840\u6C27\u6A5F",
      enName: "Pulse Oximeter",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "\u7121\u5275\u6307\u593E\u5F0F\u6E2C\u91CF\u5468\u908A\u52D5\u8108\u8840\u6C27\u98FD\u548C\u5EA6\uFF08SpO2\uFF09\u8207\u8108\u640F\u901F\u7387\u3002",
      indication: "\u547C\u5438\u6025\u4FC3\u3001\u610F\u8B58\u6539\u8B8A\u3001\u7D2B\u7D3A\u3001\u4E00\u6C27\u5316\u78B3\u4E2D\u6BD2\u9451\u5225\u3001\u5E38\u898F\u751F\u547D\u5FB5\u8C61\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u6307\u593E\u5E95\u5EA7 -->
      <rect x="26" y="42" width="50" height="36" rx="11" fill="#D6ECF9" stroke="#463529" stroke-width="2.5"/>
      <!-- \u5713\u6F64\u4E0A\u84CB\u6A5F\u8EAB -->
      <rect x="24" y="24" width="52" height="42" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u5929\u85CD\u8272\u5916\u6846\u88DD\u98FE -->
      <rect x="29" y="29" width="42" height="24" rx="6" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <!-- \u87A2\u5E55\u9762\u677F -->
      <rect x="32" y="32" width="36" height="18" rx="4" fill="#463529"/>
      <!-- \u53EF\u611B\u5927\u5B57 98% \u8207\u5C0F\u611B\u5FC3 -->
      <text x="35" y="45" font-size="11" fill="#7CB69D" font-weight="900">98</text>
      <text x="52" y="40" font-size="4.5" fill="#F6C46A" font-weight="bold">%SpO2</text>
      <!-- \u5C0F\u611B\u5FC3\u8108\u640F\u5716\u6A19 -->
      <circle cx="57" cy="45" r="2.2" fill="#EB6A5B"/>
      <circle cx="60" cy="45" r="2.2" fill="#EB6A5B"/>
      <polygon points="55,46 62,46 58.5,49.5" fill="#EB6A5B"/>
      <!-- \u5713\u5713\u96FB\u6E90\u9375 -->
      <circle cx="50" cy="59" r="3.8" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "penlight",
      name: "\u77B3\u5B54\u7B46",
      enName: "Penlight",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "\u6AA2\u67E5\u60A3\u8005\u96D9\u773C\u77B3\u5B54\u5927\u5C0F\u3001\u5C0D\u5149\u53CD\u5C04\uFF08\u76F4\u63A5\u8207\u9593\u63A5\u5149\u53CD\u5C04\uFF09\u3002",
      indication: "\u982D\u90E8\u5916\u50B7\u3001\u4E2D\u98A8\u3001\u660F\u8FF7\u3001\u8166\u9707\u76EA\u3001\u8A55\u4F30\u795E\u7D93\u5B78\u529F\u80FD\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-38 50 50)">
        <!-- \u7B46\u5C3E\u6EAB\u6696\u9EC3\u8272\u6309\u58D3\u958B\u95DC -->
        <rect x="44" y="10" width="12" height="8" rx="4" fill="#EB6A5B" stroke="#463529" stroke-width="2.3"/>
        <!-- \u91D1\u5C6C\u7B46\u593E -->
        <path d="M44 22 H38 V40 H44" stroke="#463529" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- \u5713\u6F64\u5929\u85CD\u7B46\u8EAB -->
        <rect x="43" y="17" width="14" height="54" rx="4" fill="#6BB2E2" stroke="#463529" stroke-width="2.6"/>
        <!-- \u767D\u8272\u77B3\u5B54\u5927\u5C0F\u5C0D\u7167\u8CBC\u7D19 (2mm ~ 8mm \u5713\u9EDE\u7279\u5FB5) -->
        <rect x="45" y="25" width="10" height="36" rx="2" fill="#FFFDF9"/>
        <circle cx="50" cy="30" r="1" fill="#463529"/>
        <circle cx="50" cy="36" r="1.6" fill="#463529"/>
        <circle cx="50" cy="43" r="2.3" fill="#463529"/>
        <circle cx="50" cy="52" r="3.1" fill="#463529"/>
        <!-- \u71C8\u982D\u8207\u6EAB\u6696\u53EF\u611B\u9EC3\u8272\u5149\u8292 -->
        <polygon points="43,71 57,71 54,78 46,78" fill="#F6EFE2" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
        <circle cx="50" cy="80" r="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
        <path d="M44 86 L37 96 M50 87 L50 98 M56 86 L63 96" stroke="#F6C46A" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`
    },
    {
      id: "triangular_bandage",
      name: "\u4E09\u89D2\u5DFE",
      enName: "Triangular Bandage",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u61F8\u81C2\u540A\u5E36\u6258\u8D77\u53D7\u50B7\u4E0A\u80A2\uFF0C\u4EA6\u53EF\u7528\u65BC\u982D\u90E8\u3001\u95DC\u7BC0\u5305\u7D2E\u53CA\u56FA\u5B9A\u593E\u677F\u3002",
      indication: "\u9396\u9AA8\u9AA8\u6298\u3001\u624B\u81C2\u9AA8\u6298\u3001\u80A9\u95DC\u7BC0\u812B\u81FC\u3001\u5927\u9762\u7A4D\u50B7\u53E3\u5305\u7D2E\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u6EAB\u6F64\u68C9\u9EBB\u7C73\u767D\u5927\u4E09\u89D2\u5DFE -->
      <path d="M16 74 L50 18 L84 74 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u67D4\u548C\u5E03\u6599\u6298\u7DDA -->
      <path d="M35 52 C44 48 56 48 65 52" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M26 65 C40 60 60 60 74 65" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round"/>
      <!-- \u53EF\u611B\u7D05\u5341\u5B57\u5C0F\u5370\u7AE0 -->
      <circle cx="50" cy="57" r="7" fill="#FAD4CF" stroke="#EB6A5B" stroke-width="1.5"/>
      <path d="M50 53.5 V60.5 M46.5 57 H53.5" stroke="#EB6A5B" stroke-width="2.3" stroke-linecap="round"/>
      <!-- \u91D1\u5C6C\u5B89\u5168\u5225\u91DD Safety Pin (\u7279\u5FB5) -->
      <g transform="translate(55, 26) rotate(28)">
        <rect x="0" y="0" width="24" height="9" rx="4.5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
        <circle cx="5" cy="4.5" r="2" fill="#FFFDF9" stroke="#463529" stroke-width="1.5"/>
        <line x1="7" y1="4.5" x2="19" y2="4.5" stroke="#463529" stroke-width="1.8" stroke-linecap="round"/>
      </g>
    </svg>`
    },
    {
      id: "iv_bag",
      name: "\u9EDE\u6EF4",
      enName: "IV Infusion Bag",
      category: "meds",
      categoryName: "\u85E5\u7269\u8207\u8F38\u6DB2",
      desc: "\u751F\u7406\u98DF\u9E7D\u6C34 (0.9% NaCl) \u975C\u8108\u8F38\u6DB2\uFF0C\u5EFA\u7ACB\u7D66\u85E5\u9014\u5F91\u8207\u64F4\u5145\u8840\u5BB9\u7A4D\u3002",
      indication: "\u4F4E\u8840\u5BB9\u4F11\u514B\u3001\u71B1\u8870\u7AED\u812B\u6C34\u3001\u5927\u5931\u8840\u7DAD\u6301\u704C\u6D41\u3001\u7D66\u85E5\u9014\u5F91\u5EFA\u7ACB\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9802\u90E8\u540A\u639B\u5C0F\u5713\u5B54 -->
      <path d="M43 15 C43 9 57 9 57 15" stroke="#463529" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE\u900F\u660E\u9EDE\u6EF4\u8EDF\u888B -->
      <rect x="27" y="15" width="46" height="54" rx="11" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u6C34\u85CD\u8272\u98DF\u9E7D\u6C34\u6DB2\u9762 -->
      <path d="M29 31 C38 28 62 28 71 31 V59 C71 64 67 67 62 67 H38 C33 67 29 64 29 59 Z" fill="#D6ECF9"/>
      <!-- \u767D\u9AD8\u5149\u8207\u6A19\u7C64 -->
      <ellipse cx="64" cy="44" rx="2.5" ry="9" fill="#FFFFFF" opacity="0.75"/>
      <rect x="35" y="36" width="24" height="18" rx="3" fill="#FFFDF9" stroke="#4F94C4" stroke-width="1.5"/>
      <text x="38" y="45" font-size="6.5" fill="#4F94C4" font-weight="900">0.9%</text>
      <text x="39" y="51.5" font-size="5" fill="#463529" font-weight="bold">NaCl</text>
      <!-- \u9EDE\u6EF4\u6EF4\u5BA4 Drip Chamber \u8207\u53EF\u611B\u5C0F\u6C34\u6EF4 -->
      <rect x="45" y="69" width="10" height="14" rx="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <path d="M50 73 C48 76 47 78 50 79 C53 78 52 76 50 73 Z" fill="#6BB2E2"/>
      <!-- \u8F38\u6DB2\u7BA1\u8207\u9EC3\u8272\u6EFE\u8F2A\u593E -->
      <path d="M50 83 C50 90 60 92 64 97" stroke="#463529" stroke-width="3" stroke-linecap="round" fill="none"/>
      <rect x="52" y="87" width="8" height="6" rx="2" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "glucometer",
      name: "\u8840\u7CD6\u6A5F",
      enName: "Glucometer",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "\u5FEB\u901F\u6AA2\u9A57\u5FAE\u8840\u7BA1\u5168\u8840\u8840\u7CD6\u6FC3\u5EA6\uFF0C\u78BA\u8A8D\u6709\u7121\u4F4E\u8840\u7CD6\u6216\u9AD8\u8840\u7CD6\u5371\u8C61\u3002",
      indication: "\u610F\u8B58\u4E0D\u6E05\u3001\u660F\u7761\u3001\u4E2D\u98A8\u9451\u5225\u8A3A\u65B7\u3001\u7CD6\u5C3F\u75C5\u53F2\u60A3\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9802\u90E8\u63D2\u5165\u7684\u8840\u7CD6\u8A66\u7D19 Test Strip \u8207\u53EF\u611B\u5C0F\u8840\u6EF4 (\u7279\u5FB5) -->
      <rect x="44" y="11" width="12" height="19" rx="2.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <path d="M50 14 C47 18 47 21 50 22 C53 21 53 18 50 14 Z" fill="#EB6A5B"/>
      <!-- \u5713\u6EFE\u6EFE\u638C\u4E0A\u578B\u8840\u7CD6\u6A5F\u8EAB -->
      <rect x="26" y="26" width="48" height="60" rx="16" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="35" cy="33" rx="5" ry="2" transform="rotate(-15 35 33)" fill="#FFFFFF" opacity="0.65"/>
      <!-- \u5BEC\u5927\u6DB2\u6676\u87A2\u5E55 -->
      <rect x="33" y="35" width="34" height="26" rx="6" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <text x="36" y="51" font-size="13" fill="#463529" font-weight="900">110</text>
      <text x="38" y="58" font-size="4.5" fill="#7A6352" font-weight="bold">mg/dL</text>
      <!-- \u5169\u9846\u53EF\u611B\u5713\u5713\u64CD\u4F5C\u9215 -->
      <circle cx="41" cy="72" r="5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <circle cx="59" cy="72" r="5" fill="#F6EFE2" stroke="#463529" stroke-width="2.2"/>
    </svg>`
    },
    {
      id: "ekg",
      name: "\u5FC3\u96FB\u5716\u6A5F EKG",
      enName: "12-Lead EKG",
      category: "vitals",
      categoryName: "\u751F\u547D\u5FB5\u8C61\u76E3\u6E2C",
      desc: "12\u5C0E\u7A0B\u5FC3\u96FB\u5716\u76E3\u6E2C\u5100\uFF0C\u7CBE\u6E96\u8A18\u9304\u5FC3\u81DF\u96FB\u6C23\u6D3B\u52D5\u8207\u7F3A\u8840\u8B8A\u5316\u3002",
      indication: "\u6025\u6027\u80F8\u75DB\u3001\u61F7\u7591\u5FC3\u808C\u6897\u585E (STEMI)\u3001\u80F8\u60B6\u51B7\u6C57\u3001\u5FC3\u5F8B\u4E0D\u6574\u3001\u5230\u9662\u524D\u5373\u6642\u50B3\u8F38\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9802\u90E8\u624B\u63D0\u628A -->
      <path d="M36 22 V15 C36 11 64 11 64 15 V22" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6F64\u7C73\u767D\u5FC3\u96FB\u5716\u6A5F\u4E3B\u6A5F -->
      <rect x="16" y="21" width="68" height="53" rx="11" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <!-- \u87A2\u5E55\u5340 (\u6DF1\u5DE7\u514B\u5E95 + \u4EAE\u7DA0QRS\u5FC3\u96FB\u6CE2\u5F62) -->
      <rect x="23" y="28" width="40" height="28" rx="5" fill="#463529"/>
      <path d="M26 43 H31 L33 39 L35 46 L38 31 L41 50 L44 39 Q48 33 52 39 L54 43 H60" stroke="#7CB69D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="29" cy="34" r="2" fill="#EB6A5B"/>
      <text x="33" y="36" font-size="5" fill="#F6C46A" font-weight="900">88</text>
      <!-- \u53F3\u5074\u53EF\u611B\u5F69\u8272\u6309\u9215\u9762\u677F -->
      <circle cx="71" cy="34" r="4" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <circle cx="71" cy="44" r="3.2" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
      <circle cx="71" cy="52" r="3.2" fill="#F6C46A" stroke="#463529" stroke-width="1.8"/>
      <!-- \u5410\u51FA\u7684\u5FC3\u96FB\u5716\u7D00\u9304\u7D19\u689D Paper Strip -->
      <path d="M26 62 H56 L59 79 H23 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M28 71 H35 L37 66 L39 74 L42 69 H53" stroke="#EB6A5B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- \u5F69\u8272\u5C0E\u806F\u5438\u7403\u675F (\u7D05\u9EC3\u7DA0\u85CD 12\u5C0E\u7A0B\u7279\u5FB5) -->
      <path d="M72 68 C72 78 65 84 55 87" stroke="#463529" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="48" cy="88" r="3.8" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <circle cx="57" cy="90" r="3.8" fill="#F6C46A" stroke="#463529" stroke-width="1.8"/>
      <circle cx="66" cy="88" r="3.8" fill="#7CB69D" stroke="#463529" stroke-width="1.8"/>
      <circle cx="75" cy="89" r="3.8" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
    </svg>`
    },
    {
      id: "glucose_powder",
      name: "\u7CD6\u7C89",
      enName: "Oral Glucose",
      category: "meds",
      categoryName: "\u85E5\u7269\u8207\u8F38\u6DB2",
      desc: "\u53E3\u670D\u55AE\u7D14\u91A3\u985E\uFF0C\u7528\u65BC\u610F\u8B58\u6E05\u695A\u4E14\u80FD\u541E\u56A5\u7684\u4F4E\u8840\u7CD6\u60A3\u8005\u3002",
      indication: "\u4F4E\u8840\u7CD6\u75C7\u72C0\uFF08\u8840\u7CD6\u503C < 60 mg/dL\uFF09\uFF0C\u60A3\u8005\u610F\u8B58\u6E05\u9192\u53EF\u81EA\u4E3B\u541E\u56A5\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-8 50 50)">
        <!-- \u8349\u8393\u725B\u5976\u7C89\u7D05\u96A8\u8EAB\u7CD6\u7C89\u5305 -->
        <rect x="27" y="20" width="46" height="60" rx="7" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
        <!-- \u4E0A\u4E0B\u6CE2\u6D6A\u6495\u53E3\u5C01\u908A -->
        <rect x="27" y="20" width="46" height="8" rx="3" fill="#F8AD9D" stroke="#463529" stroke-width="2.2"/>
        <rect x="27" y="72" width="46" height="8" rx="3" fill="#F8AD9D" stroke="#463529" stroke-width="2.2"/>
        <!-- \u6EAB\u6696\u7CD6\u679C\u5716\u6848\u8207\u6A19\u7C64 -->
        <rect x="33" y="33" width="34" height="34" rx="5" fill="#FAD4CF"/>
        <!-- \u53EF\u611B\u5C0F\u7CD6\u679C\u5716\u6A19 -->
        <polygon points="36,44 41,47 36,50" fill="#EB6A5B" stroke="#463529" stroke-width="1.6" stroke-linejoin="round"/>
        <polygon points="64,44 59,47 64,50" fill="#EB6A5B" stroke="#463529" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="50" cy="47" r="7" fill="#F6C46A" stroke="#463529" stroke-width="2"/>
        <ellipse cx="48" cy="45" rx="2" ry="1.2" fill="#FFFFFF" opacity="0.8"/>
        <text x="38" y="62" font-size="6" fill="#463529" font-weight="900">GLUCOSE</text>
      </g>
    </svg>`
    },
    {
      id: "saline_bottle",
      name: "\u6C96\u6D17\u7528\u751F\u7406\u98DF\u9E7D\u6C34",
      enName: "Normal Saline (Irrigation)",
      category: "meds",
      categoryName: "\u85E5\u7269\u8207\u8F38\u6DB2",
      desc: "\u7121\u83CC\u6C96\u6D17\u6DB2\uFF0C\u7528\u65BC\u6E05\u6D17\u50B7\u53E3\u7570\u7269\u3001\u5316\u5B78\u7269\u5674\u6FFA\u6C96\u773C\u3001\u964D\u6EAB\u51B7\u6577\u3002",
      indication: "\u9AD2\u6C61\u50B7\u53E3\u6E05\u5275\u3001\u71B1\u6DB2\u71D9\u50B7\u6C96\u6C34\u964D\u6EAB\u3001\u773C\u90E8\u7570\u7269\u5316\u5B78\u6C96\u6D17\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5929\u85CD\u8272\u5C16\u5634\u6C96\u6D17\u84CB -->
      <path d="M46 12 H54 L56 20 H44 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="42" y="20" width="16" height="7" rx="2.5" fill="#4F94C4" stroke="#463529" stroke-width="2.3"/>
      <!-- \u80D6\u80D6\u5851\u81A0\u74F6\u8EAB -->
      <rect x="29" y="27" width="42" height="60" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u6E05\u6F88\u6C34\u85CD\u98DF\u9E7D\u6C34\u6DB2\u9762 -->
      <path d="M31 46 C40 43 48 48 56 45 C62 43 67 46 69 45 V77 C69 82 65 85 60 85 H40 C35 85 31 82 31 77 Z" fill="#D6ECF9"/>
      <!-- \u767D\u9AD8\u5149 -->
      <ellipse cx="63" cy="60" rx="2.5" ry="11" fill="#FFFFFF" opacity="0.75"/>
      <!-- \u6A19\u7C64\u8CBC\u7D19 -->
      <rect x="35" y="51" width="26" height="22" rx="4" fill="#FFFDF9" stroke="#6BB2E2" stroke-width="1.8"/>
      <text x="38" y="61" font-size="6.5" fill="#4F94C4" font-weight="900">N/S</text>
      <text x="38" y="69" font-size="5" fill="#463529" font-weight="bold">500mL</text>
    </svg>`
    },
    {
      id: "cotton_swabs",
      name: "\u68C9\u679D",
      enName: "Cotton Swabs",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u7121\u83CC\u9577\u67C4\u68C9\u68D2\uFF0C\u7528\u65BC\u5857\u62B9\u85E5\u5291\u3001\u6E05\u7406\u7D30\u5C0F\u50B7\u53E3\u5206\u6CCC\u7269\u8207\u63A1\u6AA2\u3002",
      indication: "\u50B7\u53E3\u6E05\u5275\u5468\u908A\u5857\u62B9\u3001\u6E05\u6F54\u7570\u7269\u3001\u8F14\u52A9\u63DB\u85E5\u8655\u7F6E\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u6495\u958B\u4E00\u534A\u7684\u7121\u83CC\u5305\u88DD\u888B -->
      <path d="M24 44 L56 86 L78 70 L46 28 Z" fill="#F6EFE2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="44" y="54" width="20" height="10" rx="2.5" transform="rotate(52 54 59)" fill="#6BB2E2"/>
      <!-- \u4E09\u652F\u6EAB\u6696\u6728\u67C4\u9577\u68C9\u68D2 -->
      <line x1="29" y1="28" x2="51" y2="57" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="37" y1="21" x2="59" y2="50" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="45" y1="16" x2="67" y2="45" stroke="#E6AC4C" stroke-width="3.5" stroke-linecap="round"/>
      <!-- \u84EC\u9B06\u5713\u6EFE\u6EFE\u5927\u767D\u68C9\u82B1\u982D Cotton Tips (\u7279\u5FB5) -->
      <ellipse cx="28" cy="26" rx="5.5" ry="7.5" transform="rotate(-38 28 26)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <ellipse cx="36" cy="19" rx="5.5" ry="7.5" transform="rotate(-38 36 19)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <ellipse cx="44" cy="14" rx="5.5" ry="7.5" transform="rotate(-38 44 14)" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
    </svg>`
    },
    {
      id: "ob_kit",
      name: "\u751F\u7522\u5305",
      enName: "OB Kit",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u5167\u542B\u7121\u83CC\u81CD\u5E36\u593E\u3001\u7121\u83CC\u81CD\u5E36\u526A\u3001\u5438\u9F3B\u7403\u3001\u5305\u5DFE\u7B49\u6025\u7522\u63A5\u751F\u7D44\u4EF6\u3002",
      indication: "\u73FE\u5834\u6025\u7522\u3001\u80CE\u982D\u9732\u51FA\u3001\u4E0D\u53EF\u907F\u514D\u4E4B\u5230\u9662\u524D\u5206\u5A29\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u8584\u8377\u7DA0\u7121\u83CC\u63A5\u751F\u92EA\u5DFE\u5305 -->
      <rect x="20" y="28" width="60" height="50" rx="10" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <!-- \u4E2D\u592E\u5976\u6CB9\u767D\u5C01\u689D\u8207\u53EF\u611B\u7C89\u7D05\u611B\u5FC3\u5341\u5B57 -->
      <rect x="35" y="24" width="30" height="58" rx="4" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="43" r="8" fill="#F8AD9D" stroke="#463529" stroke-width="2"/>
      <path d="M50 39 V47 M46 43 H54" stroke="#FFFDF9" stroke-width="2.6" stroke-linecap="round"/>
      <text x="39.5" y="62" font-size="6.5" fill="#463529" font-weight="900">OB KIT</text>
      <!-- \u63A2\u51FA\u982D\u7684\u5713\u6EFE\u6EFE\u5929\u85CD\u5438\u9F3B\u7403 Bulb Syringe (\u6025\u7522\u5305\u7279\u5FB5) -->
      <circle cx="24" cy="30" r="8.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <path d="M19 25 L11 17" stroke="#463529" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M19 25 L11 17" stroke="#6BB2E2" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="22" cy="28" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.75"/>
      <!-- \u9EC3\u8272\u7121\u83CC\u81CD\u5E36\u593E Cord Clamp -->
      <rect x="66" y="62" width="18" height="8" rx="3.5" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
    </svg>`
    },
    {
      id: "burn_kit",
      name: "\u71D2\u50B7\u5305",
      enName: "Burn Kit",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u7121\u83CC\u4E0D\u6CBE\u9ECF\u6577\u6599\u3001\u71D9\u50B7\u6C34\u51DD\u81A0\u6577\u6599\uFF0C\u4FDD\u8B77\u5275\u9762\u907F\u514D\u611F\u67D3\u5931\u6C34\u3002",
      indication: "\u4E8C\u5EA6\u6216\u4E09\u5EA6\u5927\u9762\u7A4D\u71D2\u71D9\u50B7\u3001\u5316\u5B78\u707C\u50B7\u6D17\u6DE8\u5F8C\u5275\u9762\u4FDD\u8B77\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5713\u89D2\u6C34\u51DD\u81A0\u92C1\u7B94\u5305\u88DD\u888B -->
      <rect x="22" y="22" width="56" height="56" rx="10" fill="#DCE4EC" stroke="#463529" stroke-width="2.6"/>
      <rect x="28" y="28" width="44" height="44" rx="6" fill="#FFFDF9" stroke="#6BB2E2" stroke-width="2"/>
      <!-- \u51B0\u6DBC\u6C34\u6EF4\u5BF6\u5BF6\u5716\u6A19 Cooling Hydrogel Drop -->
      <circle cx="50" cy="54" r="13" fill="#D6ECF9"/>
      <path d="M50 39 C43 48 41 53 41 57 C41 62 45 66 50 66 C55 66 59 62 59 57 C59 53 57 48 50 39 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.3" stroke-linejoin="round"/>
      <ellipse cx="47" cy="54" rx="2" ry="3.5" transform="rotate(-15 47 54)" fill="#FFFFFF" opacity="0.8"/>
      <!-- \u9802\u90E8\u73CA\u745A\u7D05 BURN \u6A19\u8A18 -->
      <rect x="35" y="25" width="30" height="9" rx="3" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <text x="40" y="32" font-size="6.5" fill="#FFFDF9" font-weight="900">BURN</text>
    </svg>`
    },
    {
      id: "trauma_shears",
      name: "\u526A\u5200",
      enName: "Trauma Shears",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u6551\u8B77\u5C08\u7528\u91AB\u7642\u526A\u5200\uFF0C\u920D\u982D\u5B89\u5168\u8A2D\u8A08\uFF0C\u80FD\u8FC5\u901F\u526A\u958B\u539A\u91CD\u8863\u7269\u3002",
      indication: "\u5275\u50B7\u66B4\u9732\u6AA2\u67E5\u3001\u5FEB\u901F\u526A\u958B\u50B7\u60A3\u8932\u7BA1\u3001\u8896\u53E3\u3001\u5B89\u5168\u5E36\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5F4E\u89D2\u4E0D\u93FD\u92FC\u526A\u5200\u5203\u8207\u5713\u6F64\u5B89\u5168\u920D\u982D Blunt Safety Tip (\u7279\u5FB5) -->
      <path d="M40 58 L52 42 L74 20 L80 26 L58 48 Z" fill="#DCE4EC" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M44 54 L54 44 L70 16 L76 20 L56 46 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="77" cy="23" r="4.5" fill="#DCE4EC" stroke="#463529" stroke-width="2.3"/>
      <!-- \u8F49\u8EF8\u5927\u5713\u925A\u91D8 -->
      <circle cx="52" cy="46" r="4" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <!-- \u80D6\u80D6\u73CA\u745A\u6A58/\u6DF1\u5DE7\u514B\u4EBA\u9AD4\u5DE5\u5B78\u5927\u6307\u74B0\u63E1\u628A -->
      <ellipse cx="30" cy="70" rx="11" ry="15" transform="rotate(-12 30 70)" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="30" cy="70" rx="5.5" ry="8.5" transform="rotate(-12 30 70)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <ellipse cx="56" cy="75" rx="12" ry="13" transform="rotate(15 56 75)" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="56" cy="75" rx="6" ry="7" transform="rotate(15 56 75)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
    </svg>`
    },
    {
      id: "blanket",
      name: "\u68C9\u88AB",
      enName: "Patient Blanket",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u4FDD\u6696\u68C9\u88AB\uFF0C\u9810\u9632\u5275\u50B7\u4E09\u6A5F\uFF08\u4F4E\u9AD4\u6EAB\u3001\u9178\u4E2D\u6BD2\u3001\u51DD\u8840\u529F\u80FD\u969C\u7919\uFF09\u3002",
      indication: "\u5404\u985E\u5275\u50B7\u4FDD\u6696\u3001\u5931\u8840\u6027\u4F11\u514B\u9810\u9632\u4F4E\u9AD4\u6EAB\u3001\u5B89\u64AB\u60A3\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u84EC\u9B06\u539A\u5BE6\u6298\u758A\u6696\u9EC3\u6BDB\u6BEF\u5E95\u5C64 -->
      <path d="M18 42 C32 32 68 32 82 42 C86 52 86 64 80 72 C66 80 34 80 20 72 C14 64 14 52 18 42 Z" fill="#E6AC4C" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u4E0A\u5C64\u67D4\u8EDF\u8702\u871C\u9EC3\u683C\u7D0B\u88AB -->
      <path d="M18 36 C32 28 68 28 82 36 C86 46 84 58 78 64 C64 72 36 72 22 64 C16 58 14 46 18 36 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u6EAB\u6696\u65E5\u5F0F\u7E2B\u7DDA\u683C\u7D0B -->
      <path d="M36 32 L34 68" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M50 30 L50 70" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M64 32 L66 68" stroke="#EB6A5B" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <path d="M22 48 C38 43 62 43 78 48" stroke="#7CB69D" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      <!-- \u84EC\u9B06\u767D\u9AD8\u5149 -->
      <ellipse cx="29" cy="38" rx="5" ry="2" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
    },
    {
      id: "space_blanket",
      name: "\u4FDD\u6696\u92C1\u7B94",
      enName: "Space Blanket",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u53CD\u5C04\u4EBA\u9AD4\u8F3B\u5C04\u71B1\u9054 90% \u7684\u8F15\u4FBF\u592A\u7A7A\u6BEF\uFF0C\u9AD8\u6548\u9632\u98A8\u9632\u6C34\u4FDD\u6EAB\u3002",
      indication: "\u5931\u6EAB\u3001\u6236\u5916\u641C\u6551\u3001\u5275\u50B7\u4F11\u514B\u3001\u65B0\u751F\u5152\u6025\u7522\u5F8C\u5305\u88F9\u4FDD\u6EAB\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u91D1\u9280\u96D9\u9762\u6298\u758A\u592A\u7A7A\u92C1\u7B94\u6BEF (\u91D1\u8272\u5916\u5C64 + \u9280\u767D\u5167\u5C64) -->
      <polygon points="22,30 52,18 80,30 50,44" fill="#F6C46A" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="50,44 80,30 78,64 48,76" fill="#DCE4EC" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="22,30 50,44 48,76 20,62" fill="#E6AC4C" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="48,76 78,64 72,80 42,90" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- \u9583\u4EAE\u4EAE\u56DB\u89D2\u661F\u8292 Sparkles -->
      <path d="M70 16 L72 22 L78 24 L72 26 L70 32 L68 26 L62 24 L68 22 Z" fill="#FFFDF9" stroke="#463529" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M28 48 L29.5 52 L33.5 53.5 L29.5 55 L28 59 L26.5 55 L22.5 53.5 L26.5 52 Z" fill="#FFFDF9"/>
    </svg>`
    },
    {
      id: "gloves",
      name: "\u624B\u5957",
      enName: "Nitrile Gloves",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u7121\u7C89\u4E01\u8148\u6AA2\u9A57\u624B\u5957\uFF0C\u963B\u7D55\u8840\u6DB2\u3001\u9AD4\u6DB2\u8207\u81F4\u75C5\u83CC\u50B3\u67D3\u3002",
      indication: "\u6240\u6709\u6551\u8B77\u51FA\u52E4\u3001\u63A5\u89F8\u4EFB\u4F55\u60A3\u8005\u6216\u8017\u6750\u524D\u4E4B\u5FC5\u5099\u9632\u8B77\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5F8C\u65B9\u5929\u85CD\u80D6\u80D6\u624B\u5957 -->
      <path d="M46 42 C44 27 52 22 55 29 C57 21 65 21 65 29 C68 23 76 26 73 35 C78 32 84 37 80 45 C77 56 73 65 69 76 L47 72 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- \u524D\u65B9\u7C89\u6C34\u85CD\u80D6\u80D6\u4E94\u6307\u624B\u5957 -->
      <path d="M18 52 C13 44 19 38 24 44 C22 31 30 27 33 34 C35 25 43 25 43 34 C46 28 54 31 51 40 C56 37 61 42 58 50 C54 61 50 70 46 80 L23 76 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u5713\u6F64\u6372\u908A\u8896\u53E3 Cuffs -->
      <rect x="20" y="73" width="28" height="8" rx="4" transform="rotate(7 34 77)" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <rect x="46" y="69" width="25" height="8" rx="4" transform="rotate(7 58 73)" fill="#4F94C4" stroke="#463529" stroke-width="2.3"/>
      <!-- \u767D\u9AD8\u5149 -->
      <ellipse cx="35" cy="54" rx="4" ry="7" fill="#FFFFFF" opacity="0.65"/>
    </svg>`
    },
    {
      id: "sterile_gloves",
      name: "\u7121\u83CC\u624B\u5957",
      enName: "Sterile Surgical Gloves",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u6EC5\u83CC\u7368\u7ACB\u5305\u88DD\u5916\u79D1\u624B\u5957\uFF0C\u8896\u53E3\u6298\u908A\u9632\u6C61\u67D3\uFF0C\u9069\u7528\u7121\u83CC\u4FB5\u5165\u6027\u8655\u7F6E\u3002",
      indication: "\u73FE\u5834\u6025\u7522\u63A5\u751F\u3001\u7121\u83CC\u63DB\u85E5\u3001\u5927\u9762\u7A4D\u5275\u9762\u8655\u7406\u3001\u4FB5\u5165\u6027\u8655\u7F6E\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5C55\u958B\u7684\u548C\u7D19\u7121\u83CC\u5305\u88DD\u593E -->
      <rect x="14" y="20" width="72" height="62" rx="8" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <line x1="50" y1="22" x2="50" y2="80" stroke="#D5C7B2" stroke-width="2.2" stroke-dasharray="4 3"/>
      <!-- L \u8207 R \u53EF\u611B\u5713\u7AE0 -->
      <circle cx="25" cy="30" r="5" fill="#6BB2E2" stroke="#463529" stroke-width="1.8"/>
      <text x="22.5" y="33" font-size="6.5" fill="#FFFDF9" font-weight="900">L</text>
      <circle cx="75" cy="30" r="5" fill="#EB6A5B" stroke="#463529" stroke-width="1.8"/>
      <text x="72.5" y="33" font-size="6.5" fill="#FFFDF9" font-weight="900">R</text>
      <!-- \u5DE6\u53F3\u4E00\u5C0D\u7D14\u767D\u7121\u83CC\u624B\u5957 -->
      <path d="M24 50 C22 40 27 37 29 41 C31 36 36 36 36 41 C38 37 43 39 42 45 C45 43 48 47 46 52 L42 66 L26 66 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="24" y="61" width="20" height="7" rx="2.5" fill="#D6ECF9" stroke="#463529" stroke-width="2"/>
      <path d="M76 50 C78 40 73 37 71 41 C69 36 64 36 64 41 C62 37 57 39 58 45 C55 43 52 47 54 52 L58 66 L74 66 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="56" y="61" width="20" height="7" rx="2.5" fill="#D6ECF9" stroke="#463529" stroke-width="2"/>
      <!-- \u5E95\u90E8\u8584\u8377\u7DA0 STERILE \u6A19\u7C64 -->
      <rect x="34" y="71" width="32" height="8" rx="4" fill="#7CB69D" stroke="#463529" stroke-width="1.8"/>
      <text x="38" y="77" font-size="5.5" fill="#FFFDF9" font-weight="900">STERILE</text>
    </svg>`
    },
    {
      id: "mask",
      name: "\u53E3\u7F69",
      enName: "Surgical Mask",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u4E09\u5C64\u91AB\u7528\u9632\u8B77\u53E3\u7F69\uFF0C\u963B\u9694\u98DB\u6CAB\u3001\u75C5\u539F\u9AD4\u50B3\u64AD\u3002",
      indication: "\u6240\u6709\u63A5\u89F8\u60A3\u8005\u5834\u5408\u3001\u547C\u5438\u9053\u75C7\u72C0\u3001\u767C\u71D2\u611F\u67D3\u9AD8\u98A8\u96AA\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5169\u5074\u5713\u5713\u67D4\u8EDF\u767D\u8033\u7E69 Ear Loops -->
      <path d="M24 36 C10 38 10 62 24 64" stroke="#463529" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M24 36 C10 38 10 62 24 64" stroke="#FFFDF9" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <path d="M76 36 C90 38 90 62 76 64" stroke="#463529" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M76 36 C90 38 90 62 76 64" stroke="#FFFDF9" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u89D2\u6C34\u85CD\u4E09\u5C64\u91AB\u7528\u53E3\u7F69\u4E3B\u9AD4 -->
      <rect x="22" y="30" width="56" height="40" rx="8" fill="#D6ECF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u9802\u90E8\u9F3B\u6A11\u58D3\u689D\u8207\u4E09\u9053\u67D4\u548C\u6298\u7DDA Pleats -->
      <line x1="34" y1="35" x2="66" y2="35" stroke="#FFFDF9" stroke-width="3" stroke-linecap="round"/>
      <path d="M27 44 C42 46 58 46 73 44" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M27 52 C42 54 58 54 73 52" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M27 60 C42 62 58 62 73 60" stroke="#6BB2E2" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`
    },
    {
      id: "gown",
      name: "\u9632\u8B77\u8863",
      enName: "PPE Isolation Gown",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u62CB\u68C4\u5F0F\u9632\u6DB2\u9AD4\u6EF2\u900F\u9694\u96E2\u8863\uFF0C\u5168\u65B9\u4F4D\u4FDD\u8B77\u6551\u8B77\u4EBA\u54E1\u9A45\u5E79\u8207\u624B\u81C2\u3002",
      indication: "\u5927\u91CF\u8840\u6DB2\u5674\u6FFA\u98A8\u96AA\u3001\u50B3\u67D3\u75C5\u7591\u4F3C\u500B\u6848\u3001\u5206\u5A29\u6025\u6551\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u67D4\u548C\u9D5D\u9EC3\u8272\u9632\u6C34\u9694\u96E2\u8863\u672C\u9AD4 -->
      <path d="M34 20 L14 40 L23 49 L34 38 V80 C34 84 66 84 66 80 V38 L77 49 L86 40 L66 20 Z" fill="#FDF0C9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u5713\u9818\u53E3 -->
      <path d="M40 20 C44 27 56 27 60 20 Z" fill="#F6C46A" stroke="#463529" stroke-width="2.3"/>
      <!-- \u767D\u8272\u7F85\u7D0B\u7E2E\u53E3\u8896 Cuffs -->
      <rect x="12" y="39" width="11" height="7" rx="2.5" transform="rotate(42 17 42)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <rect x="77" y="39" width="11" height="7" rx="2.5" transform="rotate(-42 82 42)" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <!-- \u8170\u9593\u53EF\u611B\u8774\u8776\u7D50\u7D81\u5E36 -->
      <path d="M34 52 H66" stroke="#F6C46A" stroke-width="4"/>
      <path d="M34 52 H66" stroke="#463529" stroke-width="2"/>
      <path d="M62 52 C70 48 74 55 66 57 C72 60 68 67 62 56" fill="#F6C46A" stroke="#463529" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
    },
    {
      id: "opa",
      name: "\u53E3\u54BD OPA",
      enName: "Oropharyngeal Airway",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u7121\u610F\u8B58\u60A3\u8005\u7DAD\u6301\u547C\u5438\u9053\u66A2\u901A\uFF0C\u963B\u64CB\u820C\u6839\u5F8C\u589C\u3002",
      indication: "\u6DF1\u5EA6\u660F\u8FF7\uFF08\u7121\u5614\u5410\u53CD\u5C04\uFF09\u3001OHCA\u3001\u9700\u8981\u5EFA\u7ACB\u66A2\u901A\u6C23\u9053\u8005\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5F4E\u6708\u5F62\u5713\u6F64\u900F\u660E\u53E3\u54BD\u7BA1\u9053 Guedel Curve -->
      <path d="M64 38 C66 58 50 78 30 78 C20 78 18 66 28 62 C42 58 50 48 50 38 Z" fill="#D6ECF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M57 44 C55 56 44 67 30 69" stroke="#6BB2E2" stroke-width="3" stroke-linecap="round"/>
      <!-- \u786C\u8CEA\u9632\u54AC\u584A Bite Block -->
      <rect x="51" y="28" width="14" height="12" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2.4"/>
      <!-- \u4EAE\u6A58\u8272\u5C3A\u5BF8\u8FA8\u8B58\u7FFC\u7DE3 Flange (OPA\u95DC\u9375\u7279\u5FB5) -->
      <ellipse cx="58" cy="24" rx="14" ry="7" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="58" cy="24" rx="5.5" ry="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "npa",
      name: "\u9F3B\u54BD NPA",
      enName: "Nasopharyngeal Airway",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u8EDF\u8CEA\u5C0E\u6C23\u7BA1\uFF0C\u4FDD\u7559\u5614\u5410\u53CD\u5C04\u6216\u7259\u95DC\u7DCA\u9589\u6642\u4F7F\u7528\u3002",
      indication: "\u610F\u8B58\u4E0D\u6E05\u4F46\u6709\u54BD\u5589\u5614\u5410\u53CD\u5C04\u3001\u75D9\u6523\u7259\u95DC\u7DCA\u9589\u3001\u4E0D\u80FD\u63D2\u53E3\u54BD\u7BA1\u6642\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u67D4\u8EDF\u8584\u8377\u7DA0\u5FAE\u5F4E\u9F3B\u54BD\u8EDF\u7BA1\u8207\u659C\u5207\u5C16\u7AEF Beveled Tip -->
      <path d="M62 24 C56 44 44 58 28 70 L34 80 C54 66 68 48 74 28 Z" fill="#7CB69D" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u9AD8\u5149\u865B\u7DDA -->
      <path d="M65 34 C59 49 49 60 37 69" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <!-- \u9802\u7AEF\u53EF\u611B\u5C0F\u5587\u53ED\u53E3 Trumpet Flange (NPA\u9632\u6ED1\u5165\u9F3B\u8154\u7279\u5FB5) -->
      <ellipse cx="68" cy="24" rx="13" ry="7.5" transform="rotate(20 68 24)" fill="#94C9B3" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="68" cy="24" rx="5.5" ry="3.2" transform="rotate(20 68 24)" fill="#463529"/>
    </svg>`
    },
    {
      id: "suction_catheter",
      name: "\u62BD\u5438\u7BA1",
      enName: "Yankauer Suction",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u786C\u5F0F\u5F4E\u89D2\u62BD\u5438\u5C0E\u7BA1\uFF0C\u5FEB\u901F\u5438\u9664\u53E3\u8154\u5167\u5614\u5410\u7269\u3001\u7A4D\u8840\u8207\u75F0\u6DB2\u3002",
      indication: "\u547C\u5438\u9053\u7570\u7269\u3001\u5614\u5410\u7269\u963B\u585E\u3001\u5927\u53E3\u5410\u8840\u3001\u5206\u6CCC\u7269\u904E\u591A\u5C0E\u81F4\u7A92\u606F\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5C3E\u7AEF\u8EDF\u7BA1 -->
      <path d="M72 78 C78 86 84 90 92 92" stroke="#463529" stroke-width="7" stroke-linecap="round"/>
      <path d="M72 78 C78 86 84 90 92 92" stroke="#F6EFE2" stroke-width="3.5" stroke-linecap="round"/>
      <!-- \u900F\u660E\u6C34\u85CD\u5F4E\u89D2\u786C\u5F0F\u62BD\u5438\u63E1\u7BA1 Yankauer Wand -->
      <path d="M72 78 L54 56 L44 36 L30 22" stroke="#463529" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M72 78 L54 56 L44 36 L30 22" stroke="#D6ECF9" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- \u62C7\u6307\u8CA0\u58D3\u63A7\u5236\u5B54 Thumb Vent -->
      <rect x="55" y="57" width="11" height="8" rx="3" transform="rotate(48 60 61)" fill="#6BB2E2" stroke="#463529" stroke-width="2.2"/>
      <circle cx="61" cy="61" r="2" fill="#463529"/>
      <!-- \u524D\u7AEF\u5713\u6EFE\u6EFE\u9632\u50B7\u7403\u982D Bulbous Tip (\u7279\u5FB5) -->
      <circle cx="28" cy="20" r="6.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.5"/>
      <circle cx="26" cy="18" r="1.8" fill="#FFFDF9"/>
    </svg>`
    },
    {
      id: "aed",
      name: "AED\u81EA\u52D5\u9AD4\u5916\u53BB\u986B\u5668",
      enName: "AED Defibrillator",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u5168\u81EA\u52D5\u5206\u6790\u5FC3\u5F8B\u4E26\u5C0D\u81F4\u547D\u5FC3\u5F8B\u4E0D\u6574\uFF08VF/VT\uFF09\u7D66\u4E88\u96FB\u64CA\u53BB\u986B\u3002",
      indication: "\u5FC3\u80BA\u529F\u80FD\u505C\u6B62\uFF08OHCA\uFF09\u3001\u7121\u610F\u8B58\u4E14\u7121\u6B63\u5E38\u547C\u5438\u6642\u7ACB\u523B\u4F7F\u7528\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u9802\u90E8\u539A\u5BE6\u624B\u63D0\u628A -->
      <path d="M36 24 V16 C36 11 64 11 64 16 V24" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE\u4EAE\u9EC3/\u73CA\u745A\u7D05\u9AD8\u8FA8\u8B58\u5EA6 AED \u6A5F\u8EAB -->
      <rect x="18" y="22" width="64" height="58" rx="14" fill="#F6C46A" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="29" cy="29" rx="6" ry="2.2" fill="#FFFFFF" opacity="0.7"/>
      <!-- \u5927\u5927\u7684\u611B\u5FC3\u9583\u96FB\u6A19\u8A8C (AED\u6838\u5FC3\u7279\u5FB5) -->
      <path d="M42 40 C42 35 33 33 30 38 C27 43 32 51 42 58 C52 51 57 43 54 38 C51 33 42 35 42 40 Z" fill="#EB6A5B" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
      <polygon points="43,38 37,47 43,47 40,55 48,45 42,45" fill="#FFFDF9"/>
      <!-- 1\u865F\u8584\u8377\u7DA0\u96FB\u6E90\u9375 & 2\u865F\u4EAE\u6A58\u96FB\u64CA\u9375 -->
      <circle cx="67" cy="38" r="5.5" fill="#7CB69D" stroke="#463529" stroke-width="2.2"/>
      <circle cx="67" cy="54" r="6.5" fill="#EB6A5B" stroke="#463529" stroke-width="2.2"/>
      <polygon points="67,50 64,55 68,55 66,58 70,53 67,53" fill="#F6C46A"/>
      <!-- \u5E95\u90E8\u5169\u584A\u767D\u8272\u96FB\u64CA\u8CBC\u7247\u96FB\u6975\u5C0E\u7DDA -->
      <rect x="31" y="67" width="38" height="7" rx="3.5" fill="#463529"/>
      <path d="M40 74 V86 M60 74 V86" stroke="#463529" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="32" y="83" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <rect x="54" y="83" width="14" height="10" rx="3" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "oxygen_tank",
      name: "\u4E09\u5408\u4E00\u651C\u5E36\u6C27\u6C23",
      enName: "Portable Oxygen Kit",
      category: "airway",
      categoryName: "\u547C\u5438\u9053\u8207\u6C27\u6C23",
      desc: "\u651C\u5E36\u578B\u92C1\u5408\u91D1\u9AD8\u58D3\u6C27\u6C23\u92FC\u74F6\uFF0C\u914D\u6709\u6E1B\u58D3\u95A5\u3001\u6D41\u91CF\u8ABF\u7BC0\u5668\u8207\u624B\u63D0\u888B\u3002",
      indication: "\u6240\u6709\u9700\u8981\u5230\u9662\u524D\u6C27\u6C23\u6CBB\u7642\u4E4B\u50B7\u75C5\u60A3\uFF08BVM\u3001NRM\u3001\u9762\u7F69\u3001\u9F3B\u5C0E\u7BA1\uFF09\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5074\u80CC\u5E36 -->
      <path d="M32 46 C16 50 16 76 32 82" stroke="#463529" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- \u80D6\u80D6\u8584\u8377\u7DA0\u6C27\u6C23\u92FC\u74F6\u7B52\u8EAB -->
      <path d="M34 36 C34 26 66 26 66 36 V80 C66 86 60 90 50 90 C40 90 34 86 34 80 Z" fill="#7CB69D" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="41" cy="48" rx="3" ry="12" fill="#FFFFFF" opacity="0.6"/>
      <!-- \u767D\u8272\u80A9\u90E8\u8B58\u5225\u74B0\u8207 O2 \u5B57\u6A23 -->
      <rect x="34" y="42" width="32" height="16" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <text x="41" y="54" font-size="11" fill="#5F9E84" font-weight="900">O\u2082</text>
      <!-- \u9802\u90E8\u9EC3\u9285\u6E1B\u58D3\u95A5\u8207\u5713\u5F62\u58D3\u529B\u9336 Regulator & Gauge -->
      <rect x="44" y="16" width="12" height="12" rx="3" fill="#F6C46A" stroke="#463529" stroke-width="2.3"/>
      <circle cx="62" cy="19" r="7.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.3"/>
      <line x1="62" y1="19" x2="66" y2="15" stroke="#EB6A5B" stroke-width="2.2" stroke-linecap="round"/>
      <!-- \u5DE6\u5074\u6D41\u91CF\u8F49\u9215 -->
      <rect x="35" y="17" width="9" height="7" rx="2.5" fill="#5C4738" stroke="#463529" stroke-width="2"/>
    </svg>`
    },
    {
      id: "micropore_tape",
      name: "\u7D19\u81A0\u5E36",
      enName: "Micropore Tape",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u91AB\u7528\u900F\u6C23\u7D19\u81A0\u5E36\uFF0C\u56FA\u5B9A\u7D17\u5E03\u6577\u6599\u3001\u9EDE\u6EF4\u5C0E\u7BA1\u8207\u8B77\u6728\u3002",
      indication: "\u50B7\u53E3\u8986\u84CB\u5F8C\u6577\u6599\u5468\u908A\u56FA\u5B9A\u3001\u975C\u8108\u7559\u7F6E\u91DD\u56FA\u5B9A\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u62C9\u51FA\u7684\u4E00\u622A\u92F8\u9F52\u6495\u53E3\u767D\u7D19\u81A0\u5E36 -->
      <path d="M52 38 C64 28 78 28 90 35 L86 52 C75 45 64 45 54 54 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- \u7ACB\u9AD4\u539A\u5BE6\u5713\u9905\u81A0\u5E36\u6372 -->
      <ellipse cx="40" cy="60" rx="23" ry="18" fill="#F6EFE2" stroke="#463529" stroke-width="2.6"/>
      <ellipse cx="40" cy="54" rx="23" ry="18" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u7D93\u5178\u6C34\u85CD\u8272\u5851\u81A0\u5167\u8EF8 Core -->
      <ellipse cx="40" cy="54" rx="11" ry="8.5" fill="#6BB2E2" stroke="#463529" stroke-width="2.3"/>
      <ellipse cx="40" cy="55" rx="6" ry="4.5" fill="#F6EFE2" stroke="#463529" stroke-width="1.8"/>
    </svg>`
    },
    {
      id: "splint_roll",
      name: "\u6372\u7B52\u5F0F\u8B77\u6728",
      enName: "SAM Splint Roll",
      category: "trauma",
      categoryName: "\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840",
      desc: "\u6372\u66F2\u6536\u7D0D\u72C0\u614B\u7684\u92C1\u8CEA\u8EDF\u5F0F\u593E\u677F\uFF0C\u9AD4\u7A4D\u5C0F\u5DE7\u4FBF\u65BC\u651C\u5E36\u3002",
      indication: "\u56DB\u80A2\u9AA8\u6298\u3001\u812B\u81FC\u61C9\u6025\u56FA\u5B9A\u524D\u4E4B\u5FEB\u901F\u53D6\u7528\u5099\u6599\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u86CB\u7CD5\u6372\u822C\u7684\u6A58\u85CD\u96D9\u8272\u593E\u677F\u6372\u7B52 (SAM Splint\u6536\u7D0D\u614B) -->
      <circle cx="50" cy="50" r="27" fill="#EB6A5B" stroke="#463529" stroke-width="2.6"/>
      <circle cx="50" cy="50" r="21" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="15" fill="#F6C46A" stroke="#463529" stroke-width="2.4"/>
      <circle cx="50" cy="50" r="9" fill="#6BB2E2" stroke="#463529" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="4" fill="#FFFDF9" stroke="#463529" stroke-width="2"/>
      <!-- \u5FAE\u7FF9\u7684\u5916\u5C64\u5C3E\u7AEF -->
      <path d="M72 34 C81 42 82 58 75 68" stroke="#463529" stroke-width="4" stroke-linecap="round" fill="none"/>
      <ellipse cx="38" cy="34" rx="5" ry="2.2" transform="rotate(-30 38 34)" fill="#FFFFFF" opacity="0.7"/>
    </svg>`
    },
    {
      id: "restraints",
      name: "\u7D04\u675F\u5E36",
      enName: "Limb Restraints",
      category: "special",
      categoryName: "\u7279\u6B8A\u5305\u8207\u5DE5\u5177",
      desc: "\u52A0\u539A\u8EDF\u8CEA\u80A2\u9AD4\u4FDD\u8B77\u6027\u7D04\u675F\u5E36\uFF0C\u9810\u9632\u8E81\u52D5\u50B7\u60A3\u81EA\u50B7\u6216\u653B\u64CA\u3002",
      indication: "\u8B6B\u5984\u3001\u56B4\u91CD\u8E81\u52D5\u653B\u64CA\u3001\u81EA\u50B7\u98A8\u96AA\u3001\u7CBE\u795E\u6025\u75C7\u60A3\u8005\u904B\u9001\u4FDD\u8B77\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5169\u7AEF\u9577\u9577\u56FA\u5B9A\u7D81\u5E36 -->
      <path d="M22 50 C10 50 10 68 22 76" stroke="#463529" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M22 50 C10 50 10 68 22 76" stroke="#F6C46A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M78 50 C90 50 90 68 78 76" stroke="#463529" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M78 50 C90 50 90 68 78 76" stroke="#F6C46A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- \u84EC\u9B06\u68C9\u82B1\u7CD6\u767D\u7F8A\u7F94\u7D68\u5167\u896F\u6EFE\u908A Fluffy Padding -->
      <rect x="20" y="32" width="60" height="36" rx="12" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <!-- \u5929\u85CD\u8272\u52A0\u539A\u8B77\u8155\u4E3B\u9AD4 -->
      <rect x="23" y="38" width="54" height="24" rx="7" fill="#6BB2E2" stroke="#463529" stroke-width="2.4"/>
      <!-- \u4E2D\u592E\u5FEB\u62C6\u5B89\u5168\u63D2\u6263 Buckle -->
      <rect x="42" y="42" width="16" height="16" rx="4" fill="#5C4738" stroke="#463529" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="3.5" fill="#EB6A5B"/>
    </svg>`
    },
    {
      id: "stab_vest",
      name: "\u9632\u523A\u80CC\u5FC3",
      enName: "Stab-proof Vest",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u9AD8\u5F37\u5EA6\u9632\u523A\u7E96\u7DAD\u80CC\u5FC3\uFF0C\u4FDD\u969C\u57F7\u52E4\u6551\u8B77\u54E1\u514D\u53D7\u5200\u5203\u7A7F\u523A\u50B7\u5BB3\u3002",
      indication: "\u66B4\u529B\u653B\u64CA\u50BE\u5411\u73FE\u5834\u3001\u9B25\u6BC6\u780D\u6BBA\u6848\u4EF6\u3001\u9AD8\u5371\u96AA\u6CBB\u5B89\u73FE\u5834\u51FA\u52E4\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5713\u6F64\u539A\u5BE6\u6DF1\u85CD/\u5DE7\u514B\u6230\u8853\u9632\u523A\u80CC\u5FC3 -->
      <path d="M28 18 L40 18 C42 28 58 28 60 18 L72 18 L76 38 L70 42 V78 C70 83 30 83 30 78 V42 L24 38 Z" fill="#5C4738" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u80A9\u8180\u8ABF\u6574\u9B54\u9B3C\u6C08\u8B77\u588A -->
      <rect x="28" y="18" width="11" height="12" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2"/>
      <rect x="61" y="18" width="11" height="12" rx="3" fill="#7A6352" stroke="#463529" stroke-width="2"/>
      <!-- \u80F8\u524D\u9192\u76EE EMS \u53CD\u5149\u9298\u724C -->
      <rect x="35" y="36" width="30" height="13" rx="3.5" fill="#FFFDF9" stroke="#463529" stroke-width="2.2"/>
      <text x="39.5" y="45.5" font-size="8.5" fill="#EB6A5B" font-weight="900">EMS</text>
      <!-- \u8170\u90E8\u9EC3\u7DA0\u683C\u7D0B\u9AD8\u53CD\u5149\u8B66\u8A9E\u5E36 Checkered Reflective Strip -->
      <rect x="30" y="62" width="40" height="8" fill="#F6C46A" stroke="#463529" stroke-width="2.2"/>
      <rect x="38" y="62" width="8" height="8" fill="#7CB69D"/>
      <rect x="54" y="62" width="8" height="8" fill="#7CB69D"/>
    </svg>`
    },
    {
      id: "helmet",
      name: "\u6551\u8B77\u982D\u76D4",
      enName: "Rescue Helmet",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u6551\u8B77\u5C08\u7528\u8F15\u91CF\u9632\u8B77\u982D\u76D4\uFF0C\u9632\u6B62\u843D\u77F3\u3001\u649E\u64CA\u4E26\u914D\u6709\u9632\u8B77\u9762\u7F69\u3002",
      indication: "\u8ECA\u798D\u812B\u56F0\u3001\u5012\u584C\u641C\u6551\u3001\u9AD8\u7A7A\u540A\u639B\u3001\u843D\u77F3\u5371\u96AA\u5340\u57DF\u51FA\u52E4\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u4E0B\u5DF4Y\u578B\u5B89\u5168\u6263\u5E36 Chin Strap -->
      <path d="M28 56 C32 76 44 84 50 84 C56 84 68 76 72 56" stroke="#5C4738" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <rect x="45" y="79" width="10" height="7" rx="2.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <!-- \u5713\u6EFE\u6EFE\u5976\u6CB9\u767D\u6551\u8B77\u5B89\u5168\u5E3D\u6BBC -->
      <path d="M18 52 C18 28 32 16 50 16 C68 16 82 28 82 52 C82 58 76 60 68 60 H32 C24 60 18 58 18 52 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <ellipse cx="36" cy="26" rx="8" ry="3.5" transform="rotate(-18 36 26)" fill="#FFFFFF" opacity="0.9"/>
      <!-- \u73CA\u745A\u7D05\u53CD\u5149\u689D\u8207\u6B63\u9762\u7D05\u5341\u5B57\u5FBD\u7AE0 -->
      <path d="M21 47 C36 42 64 42 79 47" stroke="#EB6A5B" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="50" cy="34" r="7.5" fill="#EB6A5B" stroke="#463529" stroke-width="2"/>
      <path d="M50 30 V38 M46 34 H54" stroke="#FFFDF9" stroke-width="2.5" stroke-linecap="round"/>
      <!-- \u900F\u660E\u6C34\u85CD\u8B77\u76EE\u93E1\u9762\u7F69 Visor -->
      <path d="M25 54 C34 68 66 68 75 54 Z" fill="#6BB2E2" fill-opacity="0.65" stroke="#463529" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`
    },
    {
      id: "alcohol_spray",
      name: "\u9152\u7CBE\u5674\u9727",
      enName: "75% Alcohol Spray",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "75% \u91AB\u7528\u6D88\u6BD2\u9152\u7CBE\u5674\u9727\u74F6\uFF0C\u5FEB\u901F\u6D88\u6EC5\u75C5\u539F\u83CC\uFF0C\u74B0\u5883\u8207\u96D9\u624B\u5373\u6642\u6E05\u6D88\u3002",
      indication: "\u6CD5\u5B9A\u50B3\u67D3\u75C5\u73FE\u5834\u3001\u9AD8\u50B3\u67D3\u98A8\u96AA\u60A3\u8005\u8655\u7F6E\u5F8C\u96D9\u624B\u8207\u88DD\u5099\u5373\u6642\u6E05\u6D88\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u5674\u51FA\u7684\u53EF\u611B\u5C0F\u6C34\u9727\u611B\u5FC3/\u6C34\u73E0 Mist -->
      <circle cx="17" cy="24" r="2.5" fill="#6BB2E2"/>
      <circle cx="11" cy="31" r="3" fill="#D6ECF9" stroke="#6BB2E2" stroke-width="1.5"/>
      <circle cx="19" cy="36" r="2" fill="#6BB2E2"/>
      <!-- \u5929\u85CD\u5674\u69CD\u982D\u8207\u5C0F\u6273\u6A5F Trigger Head -->
      <path d="M36 32 C32 40 34 48 39 50" stroke="#EB6A5B" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M36 32 C32 40 34 48 39 50" stroke="#463529" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M26 24 H44 V18 C44 14 62 14 62 20 V34 H42 L36 34 H26 Z" fill="#6BB2E2" stroke="#463529" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- \u74F6\u9838\u74B0 -->
      <rect x="43" y="34" width="18" height="6" rx="2" fill="#F6EFE2" stroke="#463529" stroke-width="2.3"/>
      <!-- \u5713\u6EFE\u6EFE\u7D14\u767D\u5674\u9727\u74F6\u8EAB -->
      <rect x="33" y="40" width="38" height="48" rx="13" fill="#FFFDF9" stroke="#463529" stroke-width="2.6"/>
      <path d="M35 56 C44 53 60 57 69 55 V76 C69 82 64 86 58 86 H46 C40 86 35 82 35 76 Z" fill="#D6ECF9"/>
      <!-- 75% \u6D88\u6BD2\u6A19\u7C64 -->
      <rect x="39" y="57" width="26" height="21" rx="4" fill="#6BB2E2" stroke="#463529" stroke-width="2"/>
      <text x="42" y="68" font-size="8" fill="#FFFDF9" font-weight="900">75%</text>
      <text x="41" y="75" font-size="4" fill="#FFFDF9" font-weight="bold">ALCOHOL</text>
      <ellipse cx="64" cy="49" rx="2" ry="4" fill="#FFFFFF" opacity="0.8"/>
    </svg>`
    },
    {
      id: "n95_mask",
      name: "N95\u53E3\u7F69",
      enName: "N95 Respirator",
      category: "ppe",
      categoryName: "\u9632\u8B77\u8207\u885B\u751F",
      desc: "\u7DCA\u5BC6\u8CBC\u5408\u578B N95 \u9846\u7C92\u7269\u9632\u8B77\u53E3\u7F69\uFF0C\u6709\u6548\u904E\u6FFE 95% \u4EE5\u4E0A\u975E\u6CB9\u6027\u61F8\u6D6E\u5FAE\u7C92\u8207\u6C23\u81A0\u3002",
      indication: "\u6CD5\u5B9A\u50B3\u67D3\u75C5\uFF08\u80BA\u7D50\u6838\u3001\u9EBB\u75B9\u3001COVID-19\u91CD\u75C7\u3001\u79BD\u6D41\u611F\uFF09\u3001\u7522\u751F\u6C23\u81A0\u8655\u7F6E\uFF08\u63D2\u7BA1\u3001\u62BD\u5438\uFF09\u3002",
      svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- \u96D9\u689D\u9EC3\u8272\u982D\u6234\u5F0F\u9B06\u7DCA\u5E36 Headbands (N95\u975E\u8033\u639B\u4E4B\u6838\u5FC3\u7279\u5FB5) -->
      <path d="M28 38 C10 34 8 18 24 12 C42 6 70 8 78 20" stroke="#F6C46A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M30 66 C12 72 12 86 28 90 C46 94 72 88 78 74" stroke="#F6C46A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- \u5713\u6EFE\u6EFE 3D \u7897\u72C0\u7ACB\u9AD4\u53E3\u7F69\u672C\u9AD4 Cup Shell -->
      <path d="M24 50 C24 28 42 20 68 24 C79 36 83 48 83 52 C83 56 79 68 68 78 C42 82 24 72 24 50 Z" fill="#FFFDF9" stroke="#463529" stroke-width="2.6" stroke-linejoin="round"/>
      <!-- \u7ACB\u9AD4\u7E2B\u7DDA\u8207\u58D3\u908A -->
      <path d="M67 25 C64 42 66 52 76 52 C66 52 64 62 67 77" stroke="#E5D9C5" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <path d="M28 50 C42 50 56 46 67 25" stroke="#D5C7B2" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
      <!-- \u91D1\u5C6C\u9F3B\u6A11\u58D3\u7247 Metal Nose Clip -->
      <rect x="59" y="25" width="17" height="5.5" rx="2.5" transform="rotate(24 67 27)" fill="#DCE4EC" stroke="#463529" stroke-width="2.2"/>
      <!-- \u9192\u76EE N95 \u8A8D\u8B49\u5370\u5B57 -->
      <text x="34" y="54" font-size="10" fill="#4F94C4" font-weight="900">N95</text>
      <text x="35" y="62" font-size="4.5" fill="#7A6352" font-weight="bold">NIOSH</text>
    </svg>`
    }
  ];
  function getItemById(id) {
    return MEDICAL_ITEMS.find((item) => item.id === id);
  }

  // src/game/scenarioDeck.ts
  var SCENARIOS = [
    {
      id: "sc-ohca",
      title: "OHCA \u5230\u9662\u524D\u5FC3\u80BA\u529F\u80FD\u505C\u6B62",
      category: "\u9AD8\u7D1A\u6551\u547D\u6025\u75C7",
      urgency: "critical",
      patient: "70\u6B72\u7537\u6027\u30FB\u7121\u610F\u8B58",
      description: "\u60A3\u8005\u5BB6\u4E2D\u7A81\u7136\u5012\u5730\u547C\u53EB\u7121\u53CD\u61C9\uFF01\u8A55\u4F30\u7121\u547C\u5438\u4E14\u7121\u9838\u52D5\u8108\u8108\u640F\uFF0C\u9700\u7ACB\u5373\u5FC3\u80BA\u5FA9\u7526\uFF01",
      requiredItemIds: ["aed", "bvm", "opa"],
      rationale: "OHCA \u61C9\u7ACB\u5373\u555F\u52D5\u9AD8\u54C1\u8CEA CPR\uFF0C\u5118\u901F\u4F7F\u7528 AED \u5206\u6790\u5FC3\u5F8B\u53BB\u986B\uFF0C\u91CF\u6E2C\u9577\u5EA6\u7F6E\u5165\u53E3\u54BD\u7BA1 OPA \u7DAD\u6301\u547C\u5438\u9053\u66A2\u901A\u9632\u820C\u6839\u4E0B\u589C\uFF0C\u4E26\u4EE5\u7526\u9192\u7403 BVM \u6B63\u58D3\u7D66\u6C27\u901A\u6C23\uFF01",
      tip: "\u{1F4A1} \u53E3\u54BD\u7BA1\u9577\u5EA6\u6E2C\u91CF\uFF1A\u9580\u7259\u81F3\u4E0B\u984E\u89D2\uFF08\u6216\u5634\u89D2\u81F3\u8033\u5782\uFF09\uFF0C\u7F6E\u5165\u6642\u5148\u51F8\u9762\u5411\u5929\u82B1\u677F\u518D\u65CB\u8F49180\u5EA6\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-arterial-bleed",
      title: "\u80A1\u52D5\u8108\u5927\u5674\u8840\u5275\u50B7",
      category: "\u5927\u51FA\u8840\u5275\u50B7",
      urgency: "critical",
      patient: "35\u6B72\u5DE5\u5EE0\u5DE5\u4EBA\u30FB\u610F\u8B58\u6F38\u6A21\u7CCA",
      description: "\u6A5F\u5177\u5272\u50B7\u5927\u817F\u5167\u5074\uFF0C\u9BAE\u7D05\u8272\u8840\u6DB2\u5448\u5674\u5C04\u72C0\u6E67\u51FA\uFF0C\u5E7E\u79D2\u5167\u6D78\u6FD5\u6574\u689D\u8932\u5B50\uFF01",
      requiredItemIds: ["tourniquet", "gauze", "gloves"],
      rationale: "\u56DB\u80A2\u52D5\u8108\u5927\u51FA\u8840\u61C9\u7ACB\u523B\u5728\u50B7\u53E3\u8FD1\u5FC3\u7AEF 5~7 \u516C\u5206\u65BD\u6253\u6230\u8853\u6B62\u8840\u5E36\u4E26\u65CB\u7DCA\uFF0C\u7D17\u5E03\u52A0\u58D3\u5305\u7D2E\u4E26\u8A18\u9304\u6642\u9593\uFF01",
      tip: "\u{1F4A1} \u6B62\u8840\u5E36\u662F\u56DB\u80A2\u5674\u8840\u7684\u6551\u547D\u95DC\u9375\uFF0C\u52D9\u5FC5\u5728\u6642\u9593\u6A19\u7C64\u5BEB\u4E0A\u65BD\u6253\u6642\u9593\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-spinal-trauma",
      title: "\u8ECA\u798D\u9AD8\u80FD\u91CF\u649E\u64CA\u810A\u690E\u7591\u616E",
      category: "\u91CD\u5927\u5916\u50B7\u56FA\u5B9A",
      urgency: "high",
      patient: "22\u6B72\u6A5F\u8ECA\u9A0E\u58EB\u30FB\u767C\u6296\u89BA\u5F97\u51B7",
      description: "\u5341\u5B57\u8DEF\u53E3\u5074\u649E\u62CB\u98DB5\u7C73\uFF0C\u4E3B\u8A34\u9838\u90E8\u8207\u5F8C\u80CC\u5F37\u70C8\u5287\u75DB\uFF0C\u96D9\u8173\u767C\u9EBB\u7121\u6CD5\u62AC\u8D77\uFF0C\u5168\u8EAB\u767C\u6296\u76F4\u558A\u597D\u51B7\uFF01\u9700\u56FA\u5B9A\u9838\u690E\u3001\u4E0A\u80CC\u677F\u4E26\u7ACB\u5373\u4FDD\u6696\uFF01",
      requiredItemIds: ["c_collar", "spine_board", "blanket"],
      rationale: "\u9AD8\u80FD\u91CF\u649E\u64CA\u5408\u4F75\u795E\u7D93\u5B78\u75C7\u72C0\uFF0C\u5FC5\u9808\u7ACB\u5373\u5F92\u624B\u56FA\u5B9A\u982D\u9838\u4E26\u4E0A\u9838\u5708\uFF0C\u4EE5\u9577\u80CC\u677F\u8EF8\u7DDA\u7FFB\u8EAB\u56FA\u5B9A\uFF0C\u84CB\u68C9\u88AB\u9632\u5931\u6EAB\uFF01",
      tip: "\u{1F4A1} \u5275\u50B7\u4F4E\u9AD4\u6EAB\u6703\u7834\u58DE\u51DD\u8840\u529F\u80FD\uFF0C\u9577\u80CC\u677F\u56FA\u5B9A\u5F8C\u52D9\u5FC5\u6CE8\u610F\u4FDD\u6696\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-asthma-attack",
      title: "\u91CD\u5EA6\u6C23\u5598\u767C\u4F5C\u5408\u4F75\u4F4E\u8840\u6C27",
      category: "\u5167\u79D1\u547C\u5438\u6025\u75C7",
      urgency: "high",
      patient: "28\u6B72\u5973\u6027\u30FB\u7AEF\u5750\u547C\u5438\u767C\u7D3A",
      description: "\u56B4\u91CD\u547C\u5438\u56F0\u96E3\u8AAA\u4E0D\u51FA\u5B8C\u6574\u53E5\u5B50\uFF0C\u5634\u5507\u767C\u7D2B\uFF0C\u8840\u6C27\u98FD\u548C\u5EA6 SpO2 \u6389\u81F3 80%\uFF01",
      requiredItemIds: ["nrm_mask", "pulse_oximeter", "stethoscope"],
      rationale: "\u91CD\u5EA6\u7F3A\u6C27\u61C9\u7ACB\u5373\u7D66\u4E88\u975E\u518D\u5438\u5165\u578B\u6C27\u6C23\u9762\u7F69\uFF08NRM 15L/min\uFF09\uFF0C\u593E\u8840\u6C27\u6A5F\u9023\u7E8C\u76E3\u6E2C\uFF0C\u4EE5\u807D\u8A3A\u5668\u8A55\u4F30\u54EE\u9CF4\u97F3\uFF01",
      tip: "\u{1F4A1} NRM\u9762\u7F69\u4F7F\u7528\u524D\uFF0C\u9808\u5148\u7528\u624B\u6307\u5835\u4F4F\u51FA\u6C23\u5B54\u5C07\u84C4\u6C23\u888B\u5145\u98FD\u6C27\u6C23\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-hypoglycemia",
      title: "\u4F4E\u8840\u7CD6\u6025\u75C7\uFF08\u8840\u7CD6 Low \u8655\u7F6E\uFF09",
      category: "\u4EE3\u8B1D\u6027\u6025\u75C7",
      urgency: "high",
      patient: "68\u6B72\u7CD6\u5C3F\u75C5\u60A3\u30FB\u660F\u7761\u51B7\u6C57\u30FB\u8840\u7CD6 Low",
      description: "\u6668\u8D77\u672A\u9032\u98DF\u6CE8\u5C04\u80F0\u5CF6\u7D20\u5F8C\u7671\u5012\u6C99\u767C\uFF0C\u547C\u4E4B\u660F\u7761\u51B7\u6C57\u76F4\u5192\uFF0C\u8840\u7CD6\u6A5F\u6AA2\u6E2C\u6578\u503C\u986F\u793A\u300CLow\u300D\uFF01\u9700\u5099\u59A5\u76E3\u6E2C\u8207\u5347\u7CD6\u5668\u6750\uFF01",
      requiredItemIds: ["glucometer", "iv_bag", "glucose_powder"],
      rationale: "\u4F4E\u8840\u7CD6\u6025\u75C7\u61C9\u4EE5\u8840\u7CD6\u6A5F\u5BC6\u5207\u76E3\u6E2C\uFF1B\u82E5\u660F\u8FF7\u7121\u6CD5\u541E\u56A5\u9808\u5EFA\u7ACB\u9EDE\u6EF4\uFF08IV\uFF09\u8F38\u6DB2\u9014\u5F91\u7D66\u7CD6\uFF0C\u610F\u8B58\u6E05\u695A\u80FD\u541E\u56A5\u6642\u5247\u53EF\u7D66\u4E88\u53E3\u670D\u7CD6\u7C89\uFF01",
      tip: "\u{1F4A1} \u8840\u7CD6\u6A5F\u986F\u793A\u300CLow\u300D\u4EE3\u8868\u8840\u7CD6\u6975\u5EA6\u5371\u96AA\uFF08\u901A\u5E38 < 20 mg/dL\uFF09\uFF01\u5FC5\u9808\u7CBE\u6E96\u8A55\u4F30\u610F\u8B58\u8207\u541E\u56A5\u53CD\u5C04\u6C7A\u5B9A\u7531\u975C\u8108\u9EDE\u6EF4\u6216\u53E3\u670D\u7CD6\u7C89\u7D66\u7CD6\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-burn-scalding",
      title: "\u4E8C\u5EA6\u5927\u9762\u7A4D\u6CB8\u6C34\u71B1\u6DB2\u71D9\u50B7",
      category: "\u71D2\u71D9\u50B7\u8655\u7F6E",
      urgency: "high",
      patient: "4\u6B72\u5E7C\u7AE5\u30FB\u5287\u75DB\u568E\u54ED",
      description: "\u8AA4\u7FFB\u71B1\u6E6F\u9020\u6210\u524D\u80F8\u8207\u96D9\u524D\u81C2\u5927\u7247\u7D05\u816B\u812B\u76AE\u3001\u6C34\u6CE1\u8FC5\u901F\u5F62\u6210\uFF0C\u5287\u70C8\u75BC\u75DB\uFF01",
      requiredItemIds: ["saline_bottle", "burn_kit", "space_blanket"],
      rationale: "\u5927\u9762\u7A4D\u71D9\u50B7\u61C9\u9996\u9078\u7121\u83CC\u751F\u7406\u98DF\u9E7D\u6C34\u6C96\u6D17\u964D\u6EAB\uFF0C\u4EE5\u71D2\u50B7\u5305\u7121\u83CC\u8986\u84CB\u4FDD\u8B77\u5275\u9762\uFF0C\u4E26\u7ACB\u5373\u4EE5\u4FDD\u6696\u7528\u92C1\u7B94\u5305\u88F9\u9632\u6B62\u9AD4\u6EAB\u5927\u91CF\u6563\u5931\u9020\u6210\u4F4E\u9AD4\u6EAB\uFF01",
      tip: "\u{1F4A1} \u5927\u9762\u7A4D\u71D2\u71D9\u50B7\u76AE\u819A\u5C4F\u969C\u53D7\u640D\u6975\u6613\u8FC5\u901F\u5931\u6EAB\uFF0C\u964D\u6EAB\u8207\u8986\u84CB\u5F8C\u52D9\u5FC5\u4F7F\u7528\u4FDD\u6696\u7528\u92C1\u7B94\u9632\u7BC4\u4F4E\u9AD4\u6EAB\u5371\u8C61\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-field-delivery",
      title: "\u6025\u7522\u63A5\u751F\uFF08\u80CE\u982D\u8457\u51A0\u9732\u51FA\uFF09",
      category: "\u5A66\u7522\u6025\u75C7",
      urgency: "critical",
      patient: "32\u6B72\u7522\u5A66\uFF08\u7B2C\u4E09\u80CE\uFF09\u30FB\u9663\u75DB\u5287\u70C8",
      description: "\u6551\u8B77\u54E1\u62B5\u9054\u6642\u7522\u5A66\u983B\u7E41\u7528\u529B\uFF0C\u5167\u8932\u6380\u958B\u5DF2\u898B\u80CE\u5152\u982D\u9802\u9732\u51FA\u7522\u9053\u53E3\uFF01",
      requiredItemIds: ["ob_kit", "space_blanket", "sterile_gloves"],
      rationale: "\u6025\u7522\u63A5\u751F\u61C9\u7A7F\u6234\u7121\u83CC\u624B\u5957\u907F\u514D\u6BCD\u9AD4\u8207\u65B0\u751F\u5152\u611F\u67D3\uFF0C\u8FC5\u901F\u5099\u59A5\u751F\u7522\u5305\u8FCE\u63A5\u80CE\u982D\u5A29\u51FA\uFF0C\u80CE\u5152\u64E6\u4E7E\u5F8C\u7ACB\u5373\u4F7F\u7528\u4FDD\u6696\u92C1\u7B94\u5305\u88F9\u9632\u5931\u6EAB\uFF01",
      tip: "\u{1F4A1} \u63A5\u751F\u73FE\u5834\u9808\u5168\u7A0B\u7DAD\u6301\u7121\u83CC\u539F\u5247\uFF01\u7A7F\u6234\u7121\u83CC\u624B\u5957\u4E26\u4EE5\u7121\u83CC\u92EA\u55AE\u8FCE\u63A5\u80CE\u5152\uFF0C\u8FC5\u901F\u4FDD\u6696\u9632\u7BC4\u65B0\u751F\u5152\u4F4E\u9AD4\u6EAB\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-forearm-fracture",
      title: "\u524D\u81C2\u9AA8\u6298\u7578\u5F62\u9AA8\u64E6\u97F3",
      category: "\u9AA8\u9ABC\u808C\u8089\u5916\u50B7",
      urgency: "medium",
      patient: "19\u6B72\u6392\u7403\u54E1\u30FB\u524D\u81C2\u6210\u89D2\u8B8A\u5F62",
      description: "\u6551\u7403\u91CD\u6454\u624B\u8457\u5730\uFF0C\u524D\u81C2\u4E2D\u6BB5\u53EF\u898B\u5916\u89C0\u660E\u986F\u7578\u5F62\u9AA8\u51F8\uFF0C\u5287\u70C8\u75BC\u75DB\u4F34\u96A8\u5C40\u90E8\u816B\u8139\uFF01",
      requiredItemIds: ["sam_splint", "elastic_bandage", "triangular_bandage"],
      rationale: "\u56DB\u80A2\u9AA8\u6298\u56FA\u5B9A\u61C9\u8DE8\u8D8A\u4E0A\u4E0B\u5169\u95DC\u7BC0\uFF0C\u4EE5\u8EDF\u92C1\u593E\u677F\uFF08SAM Splint\uFF09\u5851\u5F62\u5305\u8986\uFF0C\u5F48\u6027\u7E43\u5E36\u56FA\u5B9A\uFF0C\u518D\u4EE5\u4E09\u89D2\u5DFE\u6258\u540A\uFF01",
      tip: "\u{1F4A1} \u56FA\u5B9A\u524D\u5F8C\u90FD\u5FC5\u9808\u8A55\u4F30\u672B\u68A2\u5FAA\u74B0\u3001\u611F\u89BA\u8207\u904B\u52D5\u529F\u80FD\uFF08CSM/PMS\uFF09\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-vomit-airway-obstruction",
      title: "\u5614\u5410\u7269\u963B\u585E\u547C\u5438\u9053\u7A92\u606F",
      category: "\u547C\u5438\u9053\u7570\u7269\u6025\u75C7",
      urgency: "critical",
      patient: "50\u6B72\u7537\u6027\u30FB\u660F\u7761\u5C0D\u75DB\u6C92\u53CD\u61C9",
      description: "\u5927\u91CF\u5614\u5410\u5F8C\u547C\u5438\u767C\u51FA\u5495\u5695\u6C34\u6CE1\u8072\uFF0C\u547C\u53EB\u8207\u7D66\u4E88\u75BC\u75DB\u523A\u6FC0\u5747\u6BEB\u7121\u53CD\u61C9\uFF0C\u5634\u5507\u767C\u7D2B\uFF01\u9700\u62BD\u5438\u6C23\u9053\u3001\u7DAD\u6301\u901A\u66A2\u4E26\u9451\u5225\u660F\u8FF7\u539F\u56E0\uFF01",
      requiredItemIds: ["suction_catheter", "opa", "glucometer"],
      rationale: "\u547C\u5438\u9053\u7570\u7269\u5614\u5410\u7269\u61C9\u7ACB\u5373\u4EE5\u786C\u5F0F\u62BD\u5438\u7BA1\u6DF1\u5165\u62BD\u5438\u4E7E\u6DE8\uFF1B\u75C5\u60A3\u6DF1\u5EA6\u660F\u8FF7\u5C0D\u75DB\u7121\u53CD\u61C9\u4E14\u7121\u5614\u5410\u53CD\u5C04\uFF0C\u61C9\u7F6E\u5165\u53E3\u54BD\u7BA1 OPA \u9632\u6B62\u820C\u6839\u5F8C\u589C\uFF0C\u4E26\u7ACB\u5373\u4EE5\u8840\u7CD6\u6A5F\u6AA2\u6E2C\u6392\u9664\u4F4E\u8840\u7CD6\u660F\u8FF7\uFF01",
      tip: "\u{1F4A1} \u610F\u8B58\u4E0D\u6E05\u5C0D\u75DB\u6C92\u53CD\u61C9\u4E4B\u660F\u7761\u75C5\u60A3\uFF0C\u52D9\u5FC5\u91CF\u8840\u7CD6\u6392\u9664\u4F4E\u8840\u7CD6\uFF1B\u6BCF\u6B21\u62BD\u5438\u6642\u9593\u56B4\u7981\u8D85\u904E 10~15 \u79D2\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-violent-psychiatric",
      title: "\u7CBE\u795E\u7570\u5E38\u8E81\u52D5\u6301\u5200\u9632\u885B\u8655\u7F6E",
      category: "\u6CBB\u5B89\u73FE\u5834\u8207\u81EA\u8EAB\u5B89\u5168",
      urgency: "critical",
      patient: "40\u6B72\u7537\u6027\u30FB\u60C5\u7DD2\u6975\u5EA6\u72C2\u8E81\u653B\u64CA",
      description: "\u73FE\u5834\u7537\u5B50\u63EE\u821E\u7F8E\u5DE5\u5200\u5486\u54EE\uFF0C\u7838\u788E\u73BB\u7483\u5BB6\u5177\uFF0C\u62D2\u7D55\u4EFB\u4F55\u4EBA\u9760\u8FD1\u4E26\u63DA\u8A00\u653B\u64CA\uFF01",
      requiredItemIds: ["stab_vest", "helmet", "restraints"],
      rationale: "\u73FE\u5834\u5B89\u5168\u7B2C\u4E00\uFF01\u672A\u8457\u9632\u523A\u80CC\u5FC3\u8207\u6551\u8B77\u5B89\u5168\u982D\u76D4\u524D\u5207\u52FF\u8CBF\u7136\u9032\u5165\uFF0C\u5F85\u8B66\u529B\u63A7\u5236\u5F8C\u4EE5\u7D04\u675F\u5E36\u4FDD\u8B77\u6027\u7D04\u675F\u904B\u9001\uFF01",
      tip: "\u{1F4A1} \u6551\u8B77\u9435\u5247\uFF1A\u6551\u4EBA\u4E4B\u524D\uFF0C\u5FC5\u9808\u5148\u4FDD\u8B49\u6551\u8B77\u4EBA\u54E1\u81EA\u8EAB\u7684\u7D55\u5C0D\u5B89\u5168\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-coronary-chest-pain",
      title: "\u6025\u6027\u80F8\u75DB\u7591\u4F3C\u5FC3\u808C\u6897\u585E (STEMI)",
      category: "\u5FC3\u8840\u7BA1\u6025\u75C7",
      urgency: "critical",
      patient: "58\u6B72\u7537\u6027\u30FB\u80F8\u53E3\u58D3\u69A8\u5287\u75DB\u5192\u51B7\u6C57",
      description: "\u80F8\u9AA8\u4E0B\u58D3\u69A8\u6027\u5287\u75DB\u8F3B\u5C04\u81F3\u4E0B\u5DF4\u8207\u5DE6\u80A9\uFF0C\u60A3\u8005\u9762\u8272\u6158\u767D\u5192\u51B7\u6C57\uFF01\u9700\u7ACB\u5373\u57F7\u884C\u5FC3\u96FB\u5716\u8207\u8A55\u4F30\uFF01",
      requiredItemIds: ["ekg", "bp_monitor", "pulse_oximeter"],
      rationale: "\u80F8\u75DB\u6025\u75C7\u61C9\u7ACB\u5373\u65BD\u505A 12 \u5C0E\u7A0B\u5FC3\u96FB\u5716\u6A5F (EKG) \u5224\u8B80\u6709\u7121 ST \u6BB5\u4E0A\u5347 (STEMI) \u4E26\u63D0\u65E9\u50B3\u8F38\u91AB\u9662\u901A\u5831\u5C0E\u7BA1\u5BA4\uFF0C\u540C\u6642\u76E3\u6E2C\u8840\u58D3\u8207\u8840\u6C27\uFF01",
      tip: "\u{1F4A1} \u65E9\u671F 12 \u5C0E\u7A0B EKG \u50B3\u8F38\u80FD\u5927\u5E45\u7E2E\u77ED\u5FC3\u5C0E\u7BA1\u6253\u901A\u8840\u7BA1\u6642\u9593 (D2B \u6642\u9593 < 90\u5206\u9418)\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-dyspnea-mouth-breathing",
      title: "\u547C\u5438\u5598\u4E14\u5F35\u53E3\u547C\u5438\u8655\u7F6E",
      category: "\u5167\u79D1\u547C\u5438\u6025\u75C7",
      urgency: "high",
      patient: "65\u6B72\u5973\u6027\u30FB\u547C\u5438\u6025\u4FC3\u5F35\u53E3\u547C\u5438",
      description: "\u60A3\u8005\u547C\u5438\u77ED\u4FC3\u4E14\u5F35\u53E3\u547C\u5438\u3001\u80F8\u60B6\u4E0D\u9069\uFF0C\u547C\u5438\u983B\u7387\u9054 28 \u6B21/\u5206\uFF01\u9700\u7ACB\u5373\u8A55\u4F30\u8840\u6C27\u3001\u80BA\u97F3\u4E26\u7D66\u4E88\u6C27\u6C23\u9762\u7F69\u8655\u7F6E\uFF01",
      requiredItemIds: ["pulse_oximeter", "simple_mask", "stethoscope"],
      rationale: "\u60A3\u8005\u547C\u5438\u5598\u4E14\u5F35\u53E3\u547C\u5438\u6642\uFF0C\u61C9\u7ACB\u5373\u4EE5\u8840\u6C27\u6A5F\u76E3\u6E2C\u5468\u908A\u52D5\u8108\u8840\u6C27\u98FD\u548C\u5EA6 (SpO2)\uFF0C\u4F7F\u7528\u7C21\u55AE\u578B\u6C27\u6C23\u9762\u7F69\u63D0\u4F9B\u7A69\u5B9A\u6C27\u7642\uFF0C\u4E26\u4EE5\u807D\u8A3A\u5668\u8A55\u4F30\u96D9\u5074\u80BA\u90E8\u547C\u5438\u97F3\uFF01",
      tip: "\u{1F4A1} \u5F35\u53E3\u547C\u5438\u60A3\u8005\u82E5\u4F7F\u7528\u9F3B\u5C0E\u7BA1\u5438\u5165\u6C27\u6FC3\u5EA6\u4E0D\u7A69\u5B9A\uFF0C\u9996\u9078\u7C21\u55AE\u578B\u6C27\u6C23\u9762\u7F69\u8986\u84CB\u53E3\u9F3B\u63D0\u4F9B 6~10 L/min \u6C27\u6C23\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-unconscious-trauma",
      title: "\u610F\u8B58\u4E0D\u6E05\u5275\u50B7\u60A3\u8005\u8655\u7F6E",
      category: "\u91CD\u5927\u5916\u50B7\u56FA\u5B9A\u8207\u795E\u7D93\u5B78\u8A55\u4F30",
      urgency: "critical",
      patient: "45\u6B72\u7537\u6027\u30FB\u9AD8\u8655\u589C\u843D\u610F\u8B58\u4E0D\u6E05\u660F\u8FF7",
      description: "\u5DE5\u5730\u65BD\u5DE5\u81EA\u4E09\u516C\u5C3A\u9DF9\u67B6\u589C\u843D\uFF0C\u982D\u90E8\u8457\u5730\u816B\u8139\u51FA\u8840\uFF0C\u547C\u53EB\u7121\u53CD\u61C9\u3001\u610F\u8B58\u4E0D\u6E05\u660F\u8FF7\uFF01\u9700\u8A55\u4F30\u77B3\u5B54\u5149\u53CD\u5C04\u4E26\u5BE6\u65BD\u5168\u8EAB\u810A\u690E\u56FA\u5B9A\uFF01",
      requiredItemIds: ["penlight", "c_collar", "spine_board"],
      rationale: "\u5916\u50B7\u660F\u8FF7\u60A3\u8005\u5FC5\u9808\u7ACB\u5373\u4EE5\u77B3\u5B54\u7B46\u6AA2\u67E5\u96D9\u5074\u77B3\u5B54\u5927\u5C0F\u53CA\u5C0D\u5149\u53CD\u5C04\uFF08\u8A55\u4F30\u9871\u5167\u58D3\u5347\u9AD8\u8207\u8166\u759D\u5371\u8C61\uFF09\uFF0C\u4E26\u8FC5\u901F\u914D\u6234\u9838\u5708\u53CA\u4E0A\u9577\u80CC\u677F\u56FA\u5B9A\uFF0C\u9632\u6B62\u4E8C\u6B21\u810A\u9AD3\u795E\u7D93\u640D\u5BB3\uFF01",
      tip: "\u{1F4A1} \u5275\u50B7\u660F\u8FF7\u60A3\u8005\u4E00\u5F8B\u8996\u540C\u810A\u690E\u640D\u50B7\uFF01\u96D9\u5074\u77B3\u5B54\u5927\u5C0F\u4E0D\u5C0D\u7A31\uFF08Anisocoria\uFF09\u5E38\u63D0\u793A\u56B4\u91CD\u7684\u9871\u5167\u51FA\u8840\u6216\u8166\u6C34\u816B\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-mild-hypoxia-fever",
      title: "\u767C\u71D2\u54B3\u55FD\u8F15\u5EA6\u7F3A\u6C27\u8655\u7F6E",
      category: "\u547C\u5438\u9053\u8207\u611F\u67D3\u9632\u8B77",
      urgency: "medium",
      patient: "72\u6B72\u9577\u8005\u30FB\u767C\u71D2\u54B3\u55FD\u30FBSpO2 91%",
      description: "\u767C\u71D2\u54B3\u55FD\u8F15\u5EA6\u7F3A\u6C27\uFF08SpO2 90~93%\uFF09\uFF0C\u6C92\u6709\u5F35\u53E3\u547C\u5438\uFF0C\u7121\u6CD5\u8010\u53D7\u9762\u7F69\u4E4B\u7A69\u5B9A\u8F15\u75C7\u60A3\u8005\uFF01\u9700\u7D66\u4E88\u6C27\u7642\u8207\u9632\u8B77\uFF01",
      requiredItemIds: ["nasal_cannula", "oxygen_tank", "mask"],
      rationale: "\u8F15\u5EA6\u7F3A\u6C27\u4E14\u7121\u5F35\u53E3\u547C\u5438\u3001\u7121\u6CD5\u8010\u53D7\u9762\u7F69\u4E4B\u7A69\u5B9A\u8F15\u75C7\u60A3\u8005\uFF0C\u7D66\u4E88\u6C27\u6C23\u9F3B\u5C0E\u7BA1\u6700\u70BA\u5408\u9069\uFF1B\u642D\u914D\u4E09\u5408\u4E00\u651C\u5E36\u6C27\u6C23\u4F9B\u6C27\uFF0C\u4E26\u8ACB\u75C5\u60A3\u914D\u6234\u53E3\u7F69\u9632\u7BC4\u547C\u5438\u9053\u98DB\u6CAB\u50B3\u64AD\uFF01",
      tip: "\u{1F4A1} \u6C27\u6C23\u9F3B\u5C0E\u7BA1\u63D0\u4F9B 1~6 L/min \u6C27\u6C23\uFF08\u6FC3\u5EA6\u7D04 24~44%\uFF09\uFF1B\u767C\u71D2\u54B3\u55FD\u8005\u5916\u5C64\u8986\u84CB\u5916\u79D1\u53E3\u7F69\uFF0C\u517C\u9867\u6C27\u7642\u8207\u611F\u63A7\u9632\u8B77\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-infectious-disease",
      title: "\u6CD5\u5B9A\u9AD8\u50B3\u67D3\u6027\u75BE\u75C5\u9632\u8B77\u8655\u7F6E",
      category: "\u6CD5\u5B9A\u50B3\u67D3\u75C5\u8207\u611F\u63A7\u9632\u8B77",
      urgency: "critical",
      patient: "45\u6B72\u7537\u6027\u30FB\u9AD8\u71D2\u6301\u7E8C\u54B3\u55FD\u30FB\u7591\u4F3C\u6CD5\u5B9A\u9AD8\u50B3\u67D3\u75C5",
      description: "\u63A5\u7372\u6307\u63EE\u4E2D\u5FC3\u901A\u5831\uFF0C\u75C5\u60A3\u5177\u6D41\u884C\u75C5\u5B78\u63A5\u89F8\u53F2\uFF0C\u6301\u7E8C\u9AD8\u71D2\u5287\u70C8\u54B3\u55FD\u4E14\u5598\uFF0C\u7591\u4F3C\u6CD5\u5B9A\u98DB\u6CAB\u8207\u7A7A\u6C23\u9AD8\u50B3\u67D3\u6027\u75BE\u75C5\uFF01\u63A5\u89F8\u524D\u52D9\u5FC5\u57F7\u884C\u6700\u9AD8\u898F\u683C\u500B\u4EBA\u9632\u8B77\u8207\u6E05\u6D88\uFF01",
      requiredItemIds: ["gown", "alcohol_spray", "n95_mask"],
      rationale: "\u9762\u5C0D\u6CD5\u5B9A\u98DB\u6CAB\u8207\u7A7A\u6C23\u9AD8\u50B3\u67D3\u6027\u75BE\u75C5\uFF0C\u51FA\u52E4\u4EBA\u54E1\u63A5\u89F8\u524D\u5FC5\u9808\u7A7F\u8457\u9577\u8896\u9632\u6C34\u9632\u8B77\u8863\u4FDD\u8B77\u8EAB\u9AD4\uFF0C\u4F69\u6234\u5BC6\u5408\u4E4B N95 \u53E3\u7F69\u963B\u7D55\u5FAE\u7D30\u6C23\u81A0\u8207\u98DB\u6CAB\u6838\uFF0C\u4E26\u5099\u59A5 75% \u9152\u7CBE\u5674\u9727\u65BC\u63A5\u89F8\u524D\u5F8C\u5373\u6642\u6D88\u6BD2\u624B\u90E8\u8207\u88DD\u5099\uFF0C\u843D\u5BE6\u6700\u9AD8\u611F\u63A7\u9632\u8B77\uFF01",
      tip: "\u{1F4A1} \u9762\u5C0D\u6CD5\u5B9A\u98DB\u6CAB/\u7A7A\u6C23\u50B3\u64AD\u6025\u75C7\uFF1A\u7A7F\u8457\u9632\u8B77\u8863\u3001\u4F69\u6234 N95 \u53E3\u7F69\u662F\u963B\u7D55\u611F\u67D3\u7684\u7B2C\u4E00\u9053\u9632\u7DDA\uFF1B\u6551\u8B77\u5168\u7A0B\u8207\u812B\u9664\u88DD\u5099\u6642\u52D9\u5FC5\u4EE5\u9152\u7CBE\u5674\u9727\u5FB9\u5E95\u6D88\u6BD2\u624B\u90E8\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-minor-abrasion-dirty",
      title: "\u8DCC\u5012\u64E6\u50B7\u50B7\u53E3\u9AD2\u6C61\u6E05\u6F54\u8655\u7F6E",
      category: "\u8F15\u5EA6\u5275\u50B7\u8207\u63DB\u85E5",
      urgency: "medium",
      patient: "10\u6B72\u7537\u7AE5\u30FB\u8DCC\u5012\u64E6\u50B7\u819D\u84CB\u624B\u8098\u30FB\u50B7\u53E3\u9AD2\u6C61",
      description: "\u8DCC\u5012\u53D7\u50B7\u5C0F\u64E6\u50B7\uFF0C\u50B7\u53E3\u8868\u9762\u593E\u96DC\u7802\u77F3\u8207\u6CE5\u571F\u9AD2\u6C61\uFF01\u9700\u6E05\u6F54\u5275\u9762\u3001\u79FB\u9664\u7570\u7269\u4E26\u5305\u7D2E\u9632\u611F\u67D3\uFF01",
      requiredItemIds: ["saline_bottle", "cotton_swabs", "gauze"],
      rationale: "\u6DFA\u5C64\u64E6\u50B7\u593E\u96DC\u9AD2\u6C61\u6CE5\u6C99\u6642\uFF0C\u61C9\u5148\u4EE5\u6C96\u6D17\u7528\u751F\u7406\u98DF\u9E7D\u6C34\u5927\u91CF\u6C96\u6D17\u9664\u53BB\u7C97\u5927\u6C61\u7269\uFF0C\u518D\u4EE5\u7121\u83CC\u68C9\u679D\u7531\u50B7\u53E3\u5167\u5074\u5411\u5916\u5074\u8F15\u67D4\u6E05\u6F54\u6EFE\u52D5\u5E36\u8D70\u9644\u8457\u7802\u77F3\uFF0C\u6700\u5F8C\u8986\u84CB\u7121\u83CC\u7D17\u5E03\u4FDD\u8B77\u5275\u9762\u9632\u6B62\u5916\u754C\u6C61\u67D3\u611F\u67D3\uFF01",
      tip: "\u{1F4A1} \u50B7\u53E3\u6E05\u5275\u63DB\u85E5\u539F\u5247\uFF1A\u7531\u5167\u5F80\u5916\u74B0\u72C0\u6D88\u6BD2\u6E05\u6F54\uFF0C\u5207\u52FF\u4F86\u56DE\u5857\u62B9\u907F\u514D\u5C07\u5916\u570D\u7D30\u83CC\u5E36\u56DE\u50B7\u53E3\u4E2D\u5FC3\uFF1B\u4EE5\u68C9\u679D\u6E05\u6F54\u7D30\u90E8\u7802\u77F3\u5F8C\uFF0C\u518D\u4EE5\u7121\u83CC\u7D17\u5E03\u8986\u84CB\u5305\u7D2E\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-dressing-fixation",
      title: "\u5275\u50B7\u6577\u6599\u5305\u7D2E\u56FA\u5B9A\u5668\u6750\u9078\u7528",
      category: "\u5275\u50B7\u5305\u7D2E\u8207\u6577\u6599\u56FA\u5B9A",
      urgency: "medium",
      patient: "30\u6B72\u5973\u6027\u30FB\u80A2\u9AD4\u5EE3\u6CDB\u64E6\u50B7\u6577\u6599\u56FA\u5B9A",
      description: "\u50B7\u53E3\u6E05\u5275\u4E26\u8986\u84CB\u7121\u83CC\u7D17\u5E03\u6577\u6599\u5F8C\uFF0C\u70BA\u4E86\u78BA\u5BE6\u56FA\u5B9A\u6577\u6599\u3001\u9632\u6B62\u6ED1\u812B\u79FB\u4F4D\u4E26\u4FDD\u8B77\u50B7\u53E3\uFF0C\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B\u5668\u6750\u9032\u884C\u56FA\u5B9A\uFF1F",
      requiredItemIds: ["micropore_tape", "elastic_bandage", "triangular_bandage"],
      rationale: "\u7121\u83CC\u6577\u6599\u8986\u84CB\u50B7\u53E3\u5F8C\uFF0C\u9700\u4F9D\u89E3\u5256\u90E8\u4F4D\u8207\u53D7\u529B\u72C0\u6CC1\u9078\u64C7\u5408\u9069\u5668\u6750\u78BA\u5BE6\u56FA\u5B9A\uFF1A\u7D19\u81A0\u5E36\u53EF\u8CBC\u5408\u908A\u7DE3\u9632\u6B62\u7FF9\u8D77\uFF0C\u5F48\u6027\u7E43\u5E36\u53EF\u74B0\u5F62\u62168\u5B57\u5305\u7D2E\u52A0\u58D3\u56FA\u5B9A\uFF0C\u4E09\u89D2\u5DFE\u5247\u53EF\u5927\u9762\u7A4D\u5305\u8986\u6216\u61F8\u540A\u6258\u540A\u60A3\u80A2\uFF01",
      tip: "\u{1F4A1} \u6577\u6599\u56FA\u5B9A\u4E09\u5927\u8017\u6750\uFF1A\u7D19\u81A0\u5E36\uFF08\u8CBC\u5408\u908A\u7DE3\u56FA\u5B9A\uFF09\u3001\u5F48\u6027\u7E43\u5E36\uFF08\u56DB\u80A2\u74B0\u72C0\u52A0\u58D3\u5305\u7D2E\uFF09\u3001\u4E09\u89D2\u5DFE\uFF08\u5927\u7BC4\u570D\u5305\u8986\u61F8\u540A\u56FA\u5B9A\uFF09\uFF0C\u4E09\u8005\u7686\u70BA\u6551\u8B77\u6577\u6599\u56FA\u5B9A\u95DC\u9375\u5668\u6750\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-npa-ankle-splint",
      title: "\u54BD\u5589\u53CD\u5C04\u5B58\u5728\u5408\u4F75\u8173\u8DDF\u8B8A\u5F62\u56FA\u5B9A",
      category: "\u547C\u5438\u9053\u7DAD\u6301\u8207\u4E0B\u80A2\u9AA8\u6298\u56FA\u5B9A",
      urgency: "high",
      patient: "55\u6B72\u7537\u6027\u30FB\u547C\u5438\u7570\u97F3\u6709\u5614\u5410\u53CD\u5C04\u30FB\u8173\u8DDF\u816B\u8139\u8B8A\u5F62",
      description: "\u50B7\u60A3\u547C\u5438\u6709\u9F3E\u97F3\u7570\u97F3\u4F46\u54BD\u5589\u5614\u5410\u53CD\u5C04\u4ECD\u5B58\u5728\uFF0C\u53F3\u5074\u8173\u8DDF\u8457\u5730\u5287\u75DB\u4E14\u5916\u89C0\u660E\u986F\u8B8A\u5F62\uFF01\u9700\u7DAD\u6301\u6C23\u9053\u66A2\u901A\u4E26\u5BE6\u65BD\u8DB3\u8DDF\u9AA8\u6298\u5851\u578B\u56FA\u5B9A\uFF01",
      requiredItemIds: ["npa", "splint_roll", "elastic_bandage"],
      rationale: "\u60A3\u8005\u547C\u5438\u9053\u6709\u7570\u97F3\u4F46\u54BD\u5589\u5614\u5410\u53CD\u5C04\u5B58\u5728\u6642\uFF0C\u7981\u7528\u53E3\u54BD\u7BA1\uFF08OPA\uFF09\u907F\u514D\u8A98\u767C\u5614\u5410\uFF0C\u61C9\u9078\u7528\u8EDF\u8CEA\u9F3B\u54BD\u7BA1\uFF08NPA\uFF09\u7DAD\u6301\u547C\u5438\u9053\u66A2\u901A\uFF1B\u8173\u8DDF\uFF08\u8DDF\u9AA8\uFF09\u5916\u50B7\u8B8A\u5F62\u5247\u4EE5\u5177\u53EF\u5851\u6027\u7684\u6372\u7B52\u5F0F\u8B77\u6728\u5851\u578B\u5305\u8986\uFF0C\u4E26\u4EE5\u5F48\u6027\u7E43\u5E36 8 \u5B57\u5305\u7D2E\u7A69\u56FA\u56FA\u5B9A\uFF01",
      tip: "\u{1F4A1} \u81E8\u5E8A\u95DC\u9375\uFF1A\u54BD\u5589\u53CD\u5C04\u5C1A\u5B58\u8005\u9996\u9078\u9F3B\u54BD\u7BA1 NPA\uFF08\u6F64\u6ED1\u5F8C\u659C\u9762\u671D\u9F3B\u4E2D\u8188\u7F6E\u5165\uFF09\uFF1B\u8DB3\u8E1D\u8207\u8173\u8DDF\u5916\u50B7\u4EE5\u6372\u7B52\u5F0F\u8B77\u6728\u5851\u578B\uFF0C\u518D\u642D\u914D\u5F48\u6027\u7E43\u5E36\u56FA\u5B9A\uFF0C\u56FA\u5B9A\u524D\u5F8C\u5207\u8A18\u8A55\u4F30\u672B\u68A2\u8108\u640F\u8207\u611F\u89BA\uFF08CSM\uFF09\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-abdominal-bleed-exposure",
      title: "\u8179\u90E8\u5927\u51FA\u8840\u5275\u50B7\u66B4\u9732\u8207\u5305\u7D2E\u8655\u7F6E",
      category: "\u8EC0\u5E79\u5275\u50B7\u8207\u5927\u51FA\u8840\u8655\u7F6E",
      urgency: "critical",
      patient: "38\u6B72\u7537\u6027\u30FB\u8179\u90E8\u906D\u523A\u8863\u670D\u6D78\u6EFF\u9BAE\u8840",
      description: "\u50B7\u60A3\u8179\u90E8\u8863\u7269\u6D78\u6EFF\u9BAE\u8840\u3001\u9762\u8272\u84BC\u767D\u5192\u51B7\u6C57\uFF01\u9700\u7ACB\u5373\u526A\u958B\u8863\u7269\u66B4\u9732\u50B7\u53E3\u8A55\u4F30\u3001\u4EE5\u7D17\u5E03\u52A0\u58D3\u6B62\u8840\u4E26\u7528\u4E09\u89D2\u5DFE\u5B8C\u6210\u8179\u90E8\u5305\u7D2E\uFF01",
      requiredItemIds: ["trauma_shears", "gauze", "triangular_bandage"],
      rationale: "\u8EC0\u5E79\u56B4\u91CD\u5916\u50B7\u51FA\u8840\u61C9\u79C9\u6301\u300C\u66B4\u9732\uFF08Exposure\uFF09\u300D\u539F\u5247\uFF0C\u5148\u4EE5\u6551\u8B77\u526A\u5200\u8FC5\u901F\u526A\u958B\u539A\u91CD\u6D78\u8840\u8863\u7269\u78BA\u8A8D\u50B7\u53E3\u4F4D\u7F6E\u8207\u578B\u614B\uFF1B\u96A8\u5373\u4F7F\u7528\u7121\u83CC\u7D17\u5E03\u8986\u84CB\u50B7\u53E3\u52A0\u58D3\u6B62\u8840\uFF0C\u6700\u5F8C\u4EE5\u4E09\u89D2\u5DFE\u5B8C\u6210\u8179\u90E8\u5168\u7BC4\u570D\u5305\u7D2E\u56FA\u5B9A\uFF01",
      tip: "\u{1F4A1} \u8179\u90E8\u5275\u50B7\u9435\u5247\uFF1A\u56B4\u7981\u9694\u8457\u8863\u7269\u76F2\u76EE\u6B62\u8840\uFF01\u52D9\u5FC5\u4F7F\u7528\u920D\u982D\u526A\u5200\u526A\u9664\u8863\u7269\u770B\u6E05\u50B7\u53E3\uFF0C\u4EE5\u7D17\u5E03\u52A0\u58D3\u6B62\u8840\u5F8C\uFF0C\u4EE5\u4E09\u89D2\u5DFE\u5927\u9762\u7A4D\u5305\u7D2E\u56FA\u5B9A\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-opioid-overdose",
      title: "\u7591\u4F3C\u9D09\u7247\u985E\u85E5\u7269\u904E\u91CF\u4E2D\u6BD2",
      category: "\u4E2D\u6BD2\u6025\u75C7\u8207\u547C\u5438\u6291\u5236",
      urgency: "critical",
      patient: "27\u6B72\u7537\u6027\u30FB\u547C\u4E4B\u4E0D\u61C9\u547C\u5438\u5FAE\u5F31\u30FB\u91DD\u5C16\u77B3\u5B54",
      description: "\u73FE\u5834\u767C\u73FE\u7A7A\u91DD\u5291\uFF0C\u60A3\u8005\u6DF1\u5EA6\u660F\u8FF7\u3001\u547C\u5438\u983B\u7387\u6BCF\u5206\u9418\u50C5 4 \u6B21\u767C\u7D3A\uFF01\u9700\u8A55\u4F30\u77B3\u5B54\u5149\u53CD\u61C9\u3001\u6B63\u58D3\u4EBA\u5DE5\u547C\u5438\u8207\u8840\u6C27\u76E3\u6E2C\uFF01",
      requiredItemIds: ["penlight", "bvm", "pulse_oximeter"],
      rationale: "\u9D09\u7247\u985E\u85E5\u7269\u4E2D\u6BD2\u4E4B\u7D93\u5178\u4E09\u806F\u5FB5\u70BA\u660F\u8FF7\u3001\u547C\u5438\u6291\u5236\u8207\u91DD\u5C16\u6A23\u77B3\u5B54\uFF08Pinpoint pupils\uFF09\u3002\u6551\u8B77\u54E1\u5FC5\u9808\u4EE5\u77B3\u5B54\u7B46\u6AA2\u67E5\u96D9\u5074\u77B3\u5B54\u5927\u5C0F\uFF1B\u56E0\u56B4\u91CD\u4F4E\u63DB\u6C23\u5371\u53CA\u751F\u547D\uFF0C\u9700\u7ACB\u5373\u4EE5\u7526\u9192\u7403\uFF08BVM\uFF09\u8F14\u52A9\u6B63\u58D3\u7D66\u6C27\u901A\u6C23\uFF0C\u4E26\u593E\u4E0A\u8840\u6C27\u6A5F\u9023\u7E8C\u76E3\u6E2C\uFF01",
      tip: "\u{1F4A1} \u81E8\u5E8A\u95DC\u9375\uFF1A\u96D9\u5074\u5C0D\u7A31\u5982\u91DD\u5C16\u822C\u7E2E\u5C0F\uFF08< 2mm\uFF09\u662F\u9D09\u7247\u985E\u4E2D\u6BD2\u5F37\u70C8\u6307\u6A19\uFF01\u7B2C\u4E00\u8981\u52D9\u662F\u7DAD\u6301\u547C\u5438\u9053\u4E26\u4EE5 BVM \u8F14\u52A9\u901A\u6C23\u9632\u7F3A\u6C27\u8166\u75C5\u8B8A\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-brainstem-stroke",
      title: "\u7A81\u767C\u660F\u8FF7\u7591\u4F3C\u8166\u5E79\u4E2D\u98A8\u51FA\u8840",
      category: "\u795E\u7D93\u6025\u75C7\u8207\u8166\u4E2D\u98A8",
      urgency: "critical",
      patient: "62\u6B72\u7537\u6027\u30FB\u5287\u70C8\u982D\u75DB\u5F8C\u660F\u8FF7\u30FB\u8840\u58D3\u6975\u9AD8",
      description: "\u5403\u665A\u9910\u6642\u7A81\u558A\u5F8C\u8166\u5287\u75DB\u96A8\u5373\u5012\u5730\u4E0D\u7701\u4EBA\u4E8B\uFF0C\u547C\u4E4B\u7121\u53CD\u61C9\u3001\u56DB\u80A2\u7671\u8EDF\uFF01\u9700\u8A55\u4F30\u77B3\u5B54\u5C0D\u5149\u53CD\u61C9\u3001\u76E3\u6E2C\u8840\u58D3\u8B8A\u5316\u4E26\u8F14\u52A9\u901A\u6C23\uFF01",
      requiredItemIds: ["penlight", "bp_monitor", "bvm"],
      rationale: "\u8166\u5E79\u51FA\u8840\u5E38\u6025\u9A5F\u9677\u5165\u6DF1\u660F\u8FF7\uFF0C\u5FC5\u9808\u4EE5\u77B3\u5B54\u7B46\u6AA2\u67E5\u96D9\u5074\u77B3\u5B54\u5149\u53CD\u5C04\u8207\u6709\u7121\u77B3\u5B54\u4E0D\u7B49\u5927\u6216\u91DD\u5C16\u6A23\u77B3\u5B54\uFF08\u8166\u5E79\u53D7\u58D3\u8FEB\uFF09\uFF1B\u4EE5\u8840\u58D3\u6A5F\u5BC6\u96C6\u76E3\u6E2C\u6709\u7121\u5EAB\u6B23\u6C0F\u53CD\u61C9\uFF08\u8840\u58D3\u98C6\u9AD8\u3001\u8108\u640F\u7DE9\u6162\uFF09\uFF0C\u4E26\u4EE5\u7526\u9192\u7403\uFF08BVM\uFF09\u7DAD\u6301\u547C\u5438\u8207\u6C27\u5408\uFF01",
      tip: "\u{1F4A1} \u795E\u7D93\u6025\u75C7\u9435\u5247\uFF1A\u77B3\u5B54\u7B46\u80FD\u5FEB\u901F\u9451\u5225\u5927\u8166\u534A\u7403\u6216\u8166\u5E79\u75C5\u8B8A\uFF1B\u6536\u7E2E\u58D3\u98C6\u9AD8\u5408\u4F75\u8108\u58D3\u5BEC\u5E38\u70BA\u9871\u5167\u58D3\u6975\u5EA6\u5347\u9AD8\u5FB5\u5146\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-severe-hypothermia",
      title: "\u5BD2\u51AC\u8DEF\u5012\u74B0\u5883\u6027\u91CD\u5EA6\u4F4E\u9AD4\u6EAB",
      category: "\u74B0\u5883\u6025\u75C7\u8207\u5931\u6EAB",
      urgency: "high",
      patient: "68\u6B72\u8857\u53CB\u30FB\u96E8\u591C\u8DEF\u5012\u51B0\u51B7\u30FB\u610F\u8B58\u6A21\u7CCA",
      description: "\u5BD2\u6D41\u96E8\u591C\u81E5\u5012\u5DF7\u5F04\u8863\u7269\u6FD5\u900F\uFF0C\u80A2\u9AD4\u51B0\u51B7\u50F5\u786C\u3001\u5168\u8EAB\u986B\u6296\u505C\u6B62\u5DF2\u9677\u5165\u55DC\u7761\uFF01\u9700\u5168\u9762\u9632\u98A8\u963B\u7D55\u6563\u71B1\u4E26\u8A55\u4F30\u672B\u68A2\u5FAA\u74B0\uFF01",
      requiredItemIds: ["space_blanket", "blanket", "pulse_oximeter"],
      rationale: "\u91CD\u5EA6\u5931\u6EAB\u6838\u5FC3\u9AD4\u6EAB\u4F4E\u65BC 32\xB0C \u6613\u5F15\u767C\u81F4\u547D\u5FC3\u5F8B\u4E0D\u6574\u3002\u61C9\u812B\u9664\u6FD5\u8863\u5F8C\uFF0C\u7ACB\u5373\u5148\u88F9\u4E0A\u5177\u9AD8\u53CD\u5C04\u7387\u7684\u4FDD\u6696\u7528\u92C1\u7B94\u9396\u4F4F\u4EBA\u9AD4\u8F3B\u5C04\u71B1\uFF0C\u5916\u5C64\u8986\u84CB\u539A\u68C9\u88AB\u963B\u7D55\u51B7\u7A7A\u6C23\u50B3\u5C0E\uFF0C\u4E26\u4EE5\u8840\u6C27\u6A5F\u76E3\u6E2C\u5468\u908A\u8108\u640F\u8207 SpO2\uFF01",
      tip: "\u{1F4A1} \u4F4E\u9AD4\u6EAB\u6551\u8B77\u539F\u5247\uFF1A\u5167\u5C64\u92C1\u7B94\u53CD\u5C04\u71B1\u8F3B\u5C04\uFF0B\u5916\u5C64\u68C9\u88AB\u963B\u7D55\u50B3\u5C0E\u5C0D\u6D41\uFF1B\u642C\u904B\u6642\u52D5\u4F5C\u52D9\u5FC5\u8F15\u67D4\uFF0C\u9632\u6B62\u8A98\u767C\u5FC3\u5BA4\u986B\u52D5\uFF08VF\uFF09\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-high-fall-trauma",
      title: "\u4E09\u6A13\u9AD8\u8655\u589C\u843D\u591A\u91CD\u91CD\u5927\u5275\u50B7",
      category: "\u9AD8\u80FD\u91CF\u91CD\u5927\u5275\u50B7",
      urgency: "critical",
      patient: "36\u6B72\u5DE5\u73ED\u5E2B\u5085\u30FB\u4E09\u6A13\u65BD\u5DE5\u589C\u843D\u6C34\u6CE5\u5730",
      description: "\u65BD\u5DE5\u81EA\u7D04 9 \u516C\u5C3A\u9AD8\u8655\u589C\u843D\uFF0C\u4E3B\u8A34\u5168\u8EAB\u5287\u75DB\u3001\u9838\u80CC\u5287\u75DB\u96D9\u817F\u767C\u9EBB\u3001\u53F3\u5C0F\u817F\u5916\u89C0\u7578\u5F62\uFF01\u9700\u5168\u810A\u690E\u9632\u8B77\u4E26\u56FA\u5B9A\u9AA8\u6298\uFF01",
      requiredItemIds: ["c_collar", "spine_board", "sam_splint"],
      rationale: "\u9AD8\u80FD\u91CF\u5782\u76F4\u589C\u843D\uFF08\u8D85\u904E 6 \u7C73\u6216 2 \u5C64\u6A13\u4EE5\u4E0A\uFF09\u5C6C\u65BC\u6700\u9AD8\u7B49\u7D1A\u91CD\u5927\u5275\u50B7\u6A5F\u5236\uFF01\u6551\u8B77\u54E1\u5FC5\u9808\u7ACB\u5373\u9650\u5236\u982D\u9838\u6D3B\u52D5\u65BD\u6253\u9838\u5708\u3001\u4F7F\u7528\u9577\u80CC\u677F\u9032\u884C\u5168\u8EAB\u810A\u690E\u56FA\u5B9A\uFF0C\u4E26\u4EE5\u9AA8\u6298\u56FA\u5B9A\u593E\u677F\u70BA\u7578\u5F62\u80A2\u9AD4\u5B8C\u6210\u5851\u578B\u56FA\u5B9A\uFF01",
      tip: "\u{1F4A1} \u5275\u50B7\u6551\u547D\u5B88\u5247\uFF1A\u9AD8\u8655\u589C\u843D\u4E00\u5F8B\u8996\u540C\u9838\u690E\u8207\u810A\u9AD3\u640D\u50B7\uFF01\u5FC5\u9808\u5148\u4E0A\u9838\u5708\u518D\u7FFB\u8EAB\u4E0A\u9577\u80CC\u677F\uFF1B\u80A2\u9AD4\u9AA8\u6298\u56FA\u5B9A\u61C9\u8DE8\u8D8A\u4E0A\u4E0B\u5169\u95DC\u7BC0\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-drowning-ohca",
      title: "\u6EBA\u6C34\u6551\u8D77\u5FC3\u80BA\u529F\u80FD\u505C\u6B62\u8655\u7F6E",
      category: "\u74B0\u5883\u6025\u75C7\u8207 OHCA",
      urgency: "critical",
      patient: "16\u6B72\u5C11\u5E74\u30FB\u6CF3\u6C60\u6C89\u5E95\u6551\u8D77\u7121\u547C\u5438\u8108\u640F",
      description: "\u6CF3\u6C60\u6C89\u5E95\u6578\u5206\u9418\u6551\u8D77\uFF0C\u53E3\u9F3B\u4E0D\u65B7\u6E67\u51FA\u5927\u91CF\u767D\u8272\u6CE1\u6CAB\u8207\u7A4D\u6C34\uFF0C\u547C\u53EB\u7121\u53CD\u61C9\u3001\u7121\u8108\u640F\uFF01\u9700\u6E05\u7A7A\u7A4D\u6C34\u6C23\u9053\u3001\u6B63\u58D3\u901A\u6C23\u4E26\u53BB\u986B\uFF01",
      requiredItemIds: ["suction_catheter", "bvm", "aed"],
      rationale: "\u6EBA\u6C34\u5FC3\u8DF3\u505C\u6B62\u4E4B\u6838\u5FC3\u75C5\u7406\u70BA\u56B4\u91CD\u4F4E\u8840\u6C27\uFF01\u6551\u8B77\u4EBA\u54E1\u61C9\u7ACB\u5373\u4EE5\u62BD\u5438\u7BA1\u6DF1\u5165\u62BD\u5438\u6E05\u7A7A\u53E3\u9F3B\u5927\u91CF\u6CE1\u6CAB\u8207\u6DB2\u9AD4\uFF0C\u7ACB\u5373\u4EE5\u7526\u9192\u7403\uFF08BVM\uFF09\u7D66\u4E88\u9AD8\u54C1\u8CEA\u6B63\u58D3\u4EBA\u5DE5\u547C\u5438\uFF08\u7D66\u6C27\u901A\u6C23\u70BA\u6EBA\u6C34\u6551\u547D\u4E4B\u9470\uFF09\uFF0C\u4E26\u8CBC\u4E0A AED \u96FB\u6975\u8CBC\u7247\u5206\u6790\u5FC3\u5F8B\uFF01",
      tip: "\u{1F4A1} \u6EBA\u6C34 OHCA \u95DC\u9375\uFF1A\u8207\u4E00\u822C\u5FC3\u56E0\u6027\u731D\u6B7B\u4E0D\u540C\uFF0C\u6EBA\u6C34\u6025\u6551\u300C\u6B63\u58D3\u4EBA\u5DE5\u547C\u5438\uFF08BVM\uFF09\u300D\u6975\u70BA\u95DC\u9375\uFF1B\u62BD\u5438\u6C23\u9053\u52D9\u5FC5\u8FC5\u901F\uFF0C\u5207\u52FF\u5EF6\u8AA4\u901A\u6C23\u8207\u58D3\u80F8\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-septic-shock-dyspnea",
      title: "\u4F11\u514B\u4F4E\u8840\u58D3\u5408\u4F75\u56B4\u91CD\u547C\u5438\u8870\u7AED",
      category: "\u91CD\u75C7\u4F11\u514B\u8207\u547C\u5438\u6025\u75C7",
      urgency: "critical",
      patient: "74\u6B72\u5973\u6027\u30FB\u9AD8\u71D2\u5BD2\u986B\u30FB\u8840\u58D3 70/40\u30FB\u5598\u4FC3",
      description: "\u5C3F\u9053\u611F\u67D3\u5F15\u767C\u56B4\u91CD\u6557\u8840\u75C7\uFF0C\u9762\u8272\u84BC\u767D\u5192\u51B7\u6C57\u3001\u8840\u58D3\u9A5F\u964D\u4F11\u514B\u3001\u547C\u5438\u6025\u4FC3\u9054 34 \u6B21/\u5206\u7AEF\u5750\u547C\u5438\uFF01\u9700\u7DCA\u6025\u8F38\u6DB2\u8207\u9AD8\u6FC3\u5EA6\u7D66\u6C27\uFF01",
      requiredItemIds: ["iv_bag", "nrm_mask", "bp_monitor"],
      rationale: "\u91CD\u75C7\u4F11\u514B\u5408\u4F75\u4F4E\u8840\u58D3\u8207\u7D44\u7E54\u7F3A\u6C27\u6642\uFF0C\u61C9\u7ACB\u5373\u5EFA\u7ACB\u9EDE\u6EF4\uFF08IV\uFF09\u8F38\u6DB2\u7BA1\u8DEF\u5927\u91CF\u704C\u6CE8\u6676\u9AD4\u6EB6\u6DB2\u63D0\u5347\u704C\u6D41\u58D3\uFF0C\u7D66\u4E88\u975E\u518D\u5438\u5165\u578B\u6C27\u6C23\u9762\u7F69\uFF08NRM 15L/min\uFF09\u63D0\u4F9B\u9AD8\u6FC3\u5EA6\u6C27\u7642\uFF0C\u4E26\u4EE5\u8840\u58D3\u6A5F\u6BCF 3~5 \u5206\u9418\u91CD\u8907\u91CF\u6E2C\u8A55\u4F30\u8F38\u6DB2\u7642\u6548\uFF01",
      tip: "\u{1F4A1} \u4F11\u514B\u8655\u7F6E\u4E09\u90E8\u66F2\uFF1ANRM \u9AD8\u6FC3\u5EA6\u6C27\u6C23\u6539\u5584\u7F3A\u6C27\u3001\u9EDE\u6EF4\u8F38\u6DB2\u6436\u6551\u6709\u6548\u5FAA\u74B0\u8840\u5BB9\u91CF\u3001\u8840\u58D3\u6A5F\u5BC6\u5207\u8FFD\u8E64\u5E73\u5747\u52D5\u8108\u58D3\uFF08MAP\uFF09\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-fire-smoke-inhalation",
      title: "\u706B\u707D\u6FC3\u7159\u5438\u5165\u55C6\u50B7\u8207\u4F4E\u8840\u6C27",
      category: "\u706B\u5834\u6025\u75C7\u8207\u5438\u5165\u6027\u707C\u50B7",
      urgency: "high",
      patient: "42\u6B72\u7537\u6027\u30FB\u516C\u5BD3\u706B\u8B66\u6FC3\u7159\u53D7\u56F0\u6551\u51FA",
      description: "\u81EA\u6EFF\u5E03\u9ED1\u7159\u4E4B\u706B\u5834\u6551\u51FA\uFF0C\u9F3B\u6BDB\u71D2\u7126\u3001\u8072\u97F3\u6C99\u555E\u4E14\u54B3\u51FA\u9ED1\u8272\u70AD\u9ED1\u75F0\u6DB2\uFF0C\u8840\u6C27\u98FD\u548C\u5EA6 SpO2 \u50C5 84%\uFF01\u9700\u7ACB\u5373\u9AD8\u6FC3\u5EA6\u6C27\u7642\uFF01",
      requiredItemIds: ["nrm_mask", "oxygen_tank", "pulse_oximeter"],
      rationale: "\u706B\u707D\u6FC3\u7159\u5438\u5165\u5177\u6709\u4E00\u6C27\u5316\u78B3\u4E2D\u6BD2\u8207\u5438\u5165\u6027\u547C\u5438\u9053\u71B1\u5316\u5B78\u707C\u50B7\u4E4B\u96D9\u91CD\u98A8\u96AA\u3002\u61C9\u7ACB\u5373\u4F7F\u7528\u4E09\u5408\u4E00\u651C\u5E36\u6C27\u6C23\u9023\u63A5\u975E\u518D\u5438\u5165\u578B\u6C27\u6C23\u9762\u7F69\uFF08NRM\uFF09\uFF0C\u4EE5 15 L/min \u6700\u5927\u6D41\u91CF\u63D0\u4F9B\u9AD8\u6FC3\u5EA6\u7D14\u6C27\u52A0\u901F\u4E00\u6C27\u5316\u78B3\u6392\u9664\uFF0C\u4E26\u4EE5\u8840\u6C27\u6A5F\u76E3\u6E2C\u5FC3\u7387\u8207\u672B\u68A2\u72C0\u6CC1\uFF01",
      tip: "\u{1F4A1} \u706B\u5834\u55C6\u50B7\u95DC\u9375\uFF1A\u5438\u5165\u6FC3\u7159\u8005\u4E00\u5F8B\u7D66\u4E88 100% \u6C27\u6C23\uFF08NRM 15L/min\uFF09\uFF01\u6CE8\u610F\uFF1A\u4E00\u6C27\u5316\u78B3\u4E2D\u6BD2\u6642\u50B3\u7D71\u8840\u6C27\u6A5F\u6578\u503C\u53EF\u80FD\u504F\u9AD8\uFF0C\u4ECD\u9808\u5805\u6301\u9AD8\u6FC3\u5EA6\u7D66\u6C27\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-post-seizure-trismus",
      title: "\u7672\u7647\u5927\u767C\u4F5C\u5F8C\u7259\u95DC\u7DCA\u9589\u9F3E\u97F3",
      category: "\u795E\u7D93\u6025\u75C7\u8207\u6C23\u9053\u7DAD\u6301",
      urgency: "high",
      patient: "33\u6B72\u7537\u6027\u30FB\u5168\u8EAB\u62BD\u6410\u525B\u505C\u30FB\u7259\u95DC\u7DCA\u54AC",
      description: "\u5012\u5730\u5168\u8EAB\u5F37\u76F4\u9663\u6523\u62BD\u6410 3 \u5206\u9418\u5F8C\u62BD\u6410\u505C\u6B62\u9677\u5165\u660F\u7761\uFF0C\u96D9\u5507\u7DCA\u9589\u7259\u95DC\u54AC\u7DCA\uFF0C\u547C\u5438\u767C\u51FA\u6C89\u91CD\u6253\u9F3E\u7570\u97F3\uFF01\u9700\u7DAD\u6301\u6C23\u9053\u4E26\u6392\u9664\u4F4E\u8840\u7CD6\uFF01",
      requiredItemIds: ["npa", "simple_mask", "glucometer"],
      rationale: "\u7672\u7647\u767C\u4F5C\u5F8C\u60A3\u8005\u5E38\u8655\u65BC\u660F\u7761\u671F\uFF08Post-ictal state\uFF09\uFF0C\u7259\u95DC\u7DCA\u9589\u6642\u56B4\u7981\u5F37\u884C\u64AC\u958B\u63D2\u5165\u53E3\u54BD\u7BA1\uFF0C\u61C9\u9996\u9078\u8EDF\u8CEA\u9F3B\u54BD\u7BA1\uFF08NPA\uFF09\u7DAD\u6301\u547C\u5438\u9053\u66A2\u901A\uFF0C\u8986\u84CB\u7C21\u55AE\u578B\u6C27\u6C23\u9762\u7F69\u7D66\u6C27\uFF0C\u4E26\u7ACB\u5373\u4EE5\u8840\u7CD6\u6A5F\u6AA2\u6E2C\u8840\u7CD6\u6392\u9664\u4F4E\u8840\u7CD6\u8A98\u767C\u62BD\u6410\uFF01",
      tip: "\u{1F4A1} \u62BD\u6410\u6025\u6551\u9435\u5247\uFF1A\u7259\u95DC\u54AC\u7DCA\u6642\u56B4\u7981\u5C07\u624B\u6307\u6216\u786C\u7269\u585E\u5165\u53E3\u4E2D\uFF01\u9996\u9078 NPA \u7D93\u9F3B\u5B54\u7DAD\u6301\u6C23\u9053\uFF1B\u91CF\u6E2C\u8840\u7CD6\u662F\u62BD\u6410\u6025\u75C7\u6A19\u6E96\u9451\u5225\u6B65\u9A5F\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-anaphylactic-shock",
      title: "\u6236\u5916\u8702\u87AB\u56B4\u91CD\u904E\u654F\u6027\u4F11\u514B",
      category: "\u904E\u654F\u6027\u6025\u75C7\u8207\u4F11\u514B",
      urgency: "critical",
      patient: "48\u6B72\u7537\u6027\u30FB\u5C71\u5F91\u906D\u9ED1\u8179\u864E\u982D\u8702\u87AB\u50B7\u6578\u8655",
      description: "\u906D\u8702\u87AB\u5F8C\u6578\u5206\u9418\u5167\u5168\u8EAB\u6CDB\u767C\u5927\u7247\u98A8\u75B9\u584A\u5947\u7662\u7121\u6BD4\uFF0C\u8072\u97F3\u8FC5\u901F\u6C99\u555E\u5589\u982D\u7DCA\u7E2E\u547C\u5438\u5598\u9CF4\uFF0C\u8840\u58D3\u66B4\u8DCC\u81F3 75/45 mmHg\uFF01\u9700\u7DCA\u6025\u6025\u6551\uFF01",
      requiredItemIds: ["nrm_mask", "iv_bag", "bp_monitor"],
      rationale: "\u8702\u6BD2\u5F15\u767C\u4E4B\u56B4\u91CD\u904E\u654F\u6027\u4F11\u514B\uFF08Anaphylaxis\uFF09\u6703\u9020\u6210\u81F4\u547D\u6027\u5589\u982D\u6C34\u816B\u8207\u5168\u8EAB\u8840\u7BA1\u901A\u900F\u6027\u5287\u589E\u8840\u58D3\u8870\u7AED\u3002\u9700\u7ACB\u5373\u7D66\u4E88\u975E\u518D\u5438\u5165\u578B\u6C27\u6C23\u9762\u7F69\uFF08NRM 15L/min\uFF09\u7DAD\u6301\u6C27\u5408\uFF0C\u8FC5\u901F\u5EFA\u7ACB\u9EDE\u6EF4\uFF08IV\uFF09\u8F38\u6DB2\u6436\u6551\u8840\u5BB9\u91CF\uFF0C\u4E26\u4EE5\u8840\u58D3\u6A5F\u6BCF\u5206\u9418\u9023\u7E8C\u91CF\u6E2C\uFF01",
      tip: "\u{1F4A1} \u904E\u654F\u6027\u4F11\u514B\u5371\u6A5F\uFF1A\u6C23\u9053\u6C34\u816B\u8207\u8840\u7BA1\u5D29\u6F70\u5728\u6578\u5206\u9418\u5167\u596A\u547D\uFF01\u9AD8\u6FC3\u5EA6\u9762\u7F69\u6C27\u7642\uFF0B\u9EDE\u6EF4\u5FEB\u901F\u8F38\u6DB2\uFF0B\u8840\u58D3\u76E3\u6E2C\u5206\u79D2\u5FC5\u722D\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-tension-pneumothorax",
      title: "\u80F8\u58C1\u7A7F\u523A\u50B7\u7591\u616E\u5F35\u529B\u6027\u6C23\u80F8",
      category: "\u80F8\u90E8\u91CD\u5927\u5275\u50B7",
      urgency: "critical",
      patient: "29\u6B72\u5DE5\u4EBA\u30FB\u91D1\u5C6C\u92FC\u7B4B\u523A\u5165\u53F3\u5074\u80F8\u58C1",
      description: "\u5DE5\u5730\u610F\u5916\u9435\u689D\u523A\u7A7F\u53F3\u80F8\uFF0C\u50B7\u53E3\u8655\u96A8\u547C\u5438\u767C\u51FA\u5438\u6C23\u5636\u5636\u5438\u542E\u8072\uFF08Sucking chest wound\uFF09\uFF0C\u547C\u5438\u6975\u5EA6\u5598\u4FC3\u767C\u7D3A\uFF01\u9700\u8A55\u4F30\u80BA\u97F3\u4E26\u8986\u84CB\u8655\u7F6E\uFF01",
      requiredItemIds: ["stethoscope", "gauze", "nrm_mask"],
      rationale: "\u958B\u653E\u6027\u80F8\u58C1\u7A7F\u900F\u50B7\u6975\u6613\u6F14\u8B8A\u6210\u81F4\u547D\u6027\u5F35\u529B\u6027\u6C23\u80F8\uFF01\u61C9\u7ACB\u5373\u4EE5\u7121\u83CC\u7D17\u5E03\u8986\u84CB\u50B7\u53E3\uFF08\u6216\u80F8\u5C01\u8655\u7F6E\uFF09\u963B\u7D55\u5916\u754C\u7A7A\u6C23\u9032\u4E00\u6B65\u62BD\u5165\u80F8\u8154\uFF0C\u4F7F\u7528\u807D\u8A3A\u5668\u807D\u8A3A\u5169\u5074\u80BA\u547C\u5438\u97F3\u8A55\u4F30\u80BA\u584C\u9677\u8207\u7E31\u8188\u504F\u79FB\u7A0B\u5EA6\uFF0C\u4E26\u65BD\u4E88 NRM \u9AD8\u6FC3\u5EA6\u9762\u7F69\u7D66\u6C27\uFF01",
      tip: "\u{1F4A1} \u80F8\u90E8\u5275\u50B7\u91CD\u9EDE\uFF1A\u807D\u8A3A\u5668\u8A55\u4F30\u96D9\u5074\u80BA\u97F3\u5C0D\u7A31\u6027\u662F\u9451\u5225\u6C23\u80F8\u8207\u8840\u80F8\u7684\u9EC3\u91D1\u6CD5\u5BF6\uFF1B\u8986\u84CB\u7D17\u5E03\u9632\u6B62\u7A7A\u6C23\u9032\u80F8\u8154\uFF0CNRM 15L/min \u6C27\u7642\uFF01",
      timeLimitSec: 30
    },
    {
      id: "sc-hemorrhagic-hypothermia",
      title: "\u91CD\u5EA6\u5931\u8840\u6027\u4F11\u514B\u5408\u4F75\u9AD4\u6EAB\u9A5F\u964D",
      category: "\u91CD\u5927\u5916\u50B7\u8207\u4F11\u514B\u9632\u8B77",
      urgency: "critical",
      patient: "51\u6B72\u806F\u7D50\u8ECA\u53F8\u6A5F\u30FB\u649E\u64CA\u80A2\u9AD4\u6495\u88C2\u5927\u91CF\u51FA\u8840",
      description: "\u8ECA\u798D\u91CD\u5275\u96D9\u4E0B\u80A2\u5EE3\u6CDB\u6495\u88C2\u6D3B\u52D5\u6027\u5674\u8840\uFF0C\u60A3\u8005\u9762\u8272\u6158\u767D\u5982\u7D19\u3001\u56DB\u80A2\u51B0\u51B7\u767C\u6296\u76F4\u558A\u597D\u51B7\uFF01\u9700\u6B62\u8840\u3001\u4FDD\u6696\u8207\u9AD4\u6DB2\u5FA9\u7526\uFF01",
      requiredItemIds: ["tourniquet", "space_blanket", "iv_bag"],
      rationale: "\u5275\u50B7\u81F4\u6B7B\u4E09\u806F\u5FB5\uFF08\u4F4E\u9AD4\u6EAB\u3001\u9178\u4E2D\u6BD2\u3001\u51DD\u8840\u529F\u80FD\u969C\u7919\uFF09\u4E92\u76F8\u52A0\u5287\uFF01\u9996\u8981\u52D5\u4F5C\u662F\u7ACB\u5373\u5728\u8FD1\u7AEF\u4E0A\u6B62\u8840\u5E36\u963B\u65B7\u52D5\u8108\u5927\u51FA\u8840\uFF0C\u63A5\u8457\u8FC5\u901F\u4EE5\u4FDD\u6696\u7528\u92C1\u7B94\u7DCA\u7DCA\u5305\u88F9\u963B\u65B7\u9AD4\u6EAB\u6D41\u5931\uFF0C\u4E26\u540C\u6642\u5EFA\u7ACB\u975C\u8108\u9EDE\u6EF4\u9032\u884C\u6676\u9AD4\u8F38\u6DB2\u5FA9\u7526\uFF01",
      tip: "\u{1F4A1} \u5275\u50B7\u9EC3\u91D1\u6E96\u5247\uFF1A\u6B62\u8840\u5E36\u963B\u65B7\u5927\u51FA\u8840\u6C38\u9060\u7B2C\u4E00\u512A\u5148\uFF01\u5931\u8840\u60A3\u8005\u9AD4\u6EAB\u6BCF\u6389 1 \u5EA6\u51DD\u8840\u9175\u7D20\u529F\u80FD\u9A5F\u964D\uFF0C\u4FDD\u6696\u92C1\u7B94\u8207\u9EDE\u6EF4\u5FA9\u7526\u7F3A\u4E00\u4E0D\u53EF\uFF01",
      timeLimitSec: 30
    }
  ];
  function getRandomScenario(excludedIds = []) {
    const pool = SCENARIOS.filter((s) => !excludedIds.includes(s.id));
    if (pool.length === 0) return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // src/game/soundEffects.ts
  var SoundEngine = class {
    constructor() {
      __publicField(this, "ctx", null);
      __publicField(this, "isMuted", false);
      // ================= 8. 輕快挑戰背景音樂 (Procedural Challenge BGM) =================
      __publicField(this, "isBgmPlaying", false);
      __publicField(this, "isBgmMuted", false);
      // 預設常開 (Default ON)
      __publicField(this, "bgmGainNode", null);
      __publicField(this, "bgmTimerId", null);
      __publicField(this, "bgmStepIndex", 0);
      __publicField(this, "nextNoteTime", 0);
      __publicField(this, "bgmTempo", 126);
      // 輕快跳躍 126 BPM
      __publicField(this, "stepDur", 60 / 126 / 4);
      // 16th 音符 ~0.119s
      // 64-step (4小節) 輕快和風木琴旋律 (C -> Am -> F -> G)
      __publicField(this, "bgmMelody", [
        // Bar 1: C Major (活潑跳躍)
        523.25,
        0,
        659.25,
        783.99,
        0,
        659.25,
        0,
        523.25,
        0,
        587.33,
        659.25,
        0,
        783.99,
        0,
        880,
        0,
        // Bar 2: Am (清脆靈動)
        880,
        0,
        783.99,
        659.25,
        0,
        523.25,
        0,
        659.25,
        0,
        523.25,
        0,
        440,
        0,
        523.25,
        587.33,
        0,
        // Bar 3: F Major (奔跑衝刺)
        659.25,
        0,
        523.25,
        0,
        587.33,
        0,
        523.25,
        440,
        0,
        523.25,
        0,
        659.25,
        0,
        783.99,
        0,
        880,
        // Bar 4: G Major (明亮銜接)
        783.99,
        0,
        659.25,
        0,
        587.33,
        0,
        523.25,
        0,
        587.33,
        0,
        659.25,
        0,
        783.99,
        0,
        987.77,
        0
      ]);
      // 64-step 彈跳低音 Bassline
      __publicField(this, "bgmBass", [
        // Bar 1: C
        130.81,
        0,
        196,
        0,
        130.81,
        0,
        196,
        0,
        130.81,
        0,
        196,
        0,
        130.81,
        0,
        196,
        0,
        // Bar 2: Am
        110,
        0,
        164.81,
        0,
        110,
        0,
        164.81,
        0,
        110,
        0,
        164.81,
        0,
        110,
        0,
        164.81,
        0,
        // Bar 3: F
        87.31,
        0,
        130.81,
        0,
        87.31,
        0,
        130.81,
        0,
        87.31,
        0,
        130.81,
        0,
        87.31,
        0,
        130.81,
        0,
        // Bar 4: G
        98,
        0,
        146.83,
        0,
        98,
        0,
        146.83,
        0,
        98,
        0,
        146.83,
        0,
        98,
        0,
        146.83,
        0
      ]);
    }
    initCtx() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }
    setMuted(muted) {
      this.isMuted = muted;
    }
    toggleMute() {
      this.isMuted = !this.isMuted;
      return this.isMuted;
    }
    // 1. 抓取啵聲 (Grab Pop)
    playGrab() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    }
    // 2. 投放進救護包 (Pouch Thud / Pop)
    playDropInBag() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    }
    // 3. 正確判定鈴聲 (Japanese Wooden Marimba / Pentatonic Chime)
    playCorrect() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + idx * 0.06;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      });
    }
    // 4. 錯誤判定 (超級雞馬滑稽彈簧波音 / Wacky Boing)
    playWrong() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.12);
      osc.frequency.linearRampToValueAtTime(200, now + 0.2);
      osc.frequency.linearRampToValueAtTime(90, now + 0.35);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.38);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    }
    // 5. 倒數計時急促滴答 (Clock Tick)
    playTick() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
    // 6. 回合過關歡呼號角 (Round Victory Fanfare)
    playRoundWin() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const melody = [
        { f: 523.25, d: 0.1 },
        // C5
        { f: 659.25, d: 0.1 },
        // E5
        { f: 783.99, d: 0.1 },
        // G5
        { f: 1046.5, d: 0.25 }
        // C6
      ];
      let delay = 0;
      melody.forEach((note) => {
        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(note.f, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(1e-3, now + note.d + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + note.d + 0.15);
        delay += note.d * 0.9;
      });
    }
    // 7. 119 救護派遣出勤警笛鐘聲 (Dispatch Chime)
    playDispatchAlarm() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const notes = [
        { f: 587.33, d: 0.14 },
        // D5
        { f: 783.99, d: 0.14 },
        // G5
        { f: 880, d: 0.28 }
        // A5
      ];
      let delay = 0;
      notes.forEach((note) => {
        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(note.f, now);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(1e-3, now + note.d + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + note.d + 0.2);
        delay += note.d;
      });
    }
    startBgm() {
      this.initCtx();
      if (!this.ctx) return;
      if (!this.bgmGainNode) {
        this.bgmGainNode = this.ctx.createGain();
        this.bgmGainNode.gain.setValueAtTime(this.isBgmMuted ? 0 : 0.12, this.ctx.currentTime);
        this.bgmGainNode.connect(this.ctx.destination);
      }
      if (this.isBgmPlaying) return;
      this.isBgmPlaying = true;
      this.nextNoteTime = this.ctx.currentTime + 0.05;
      this.bgmStepIndex = 0;
      this.bgmTimerId = setInterval(() => this.scheduleBgm(), 25);
    }
    stopBgm() {
      this.isBgmPlaying = false;
      if (this.bgmTimerId) {
        clearInterval(this.bgmTimerId);
        this.bgmTimerId = null;
      }
    }
    pauseBgm() {
      if (this.isBgmPlaying && this.bgmTimerId) {
        clearInterval(this.bgmTimerId);
        this.bgmTimerId = null;
        if (this.bgmGainNode && this.ctx) {
          this.bgmGainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
        }
      }
    }
    resumeBgm() {
      if (this.isBgmPlaying && !this.bgmTimerId && !this.isBgmMuted) {
        if (this.ctx && this.bgmGainNode) {
          this.bgmGainNode.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.1);
          this.nextNoteTime = this.ctx.currentTime + 0.05;
          this.bgmTimerId = setInterval(() => this.scheduleBgm(), 25);
        }
      }
    }
    // 暫停音效 (下降柔和提示音)
    playPause() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(310, now + 0.14);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }
    // 繼續音效 (上升活力提示音)
    playResume() {
      if (this.isMuted) return;
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.14);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }
    toggleBgm() {
      this.isBgmMuted = !this.isBgmMuted;
      if (this.ctx && this.bgmGainNode) {
        const now = this.ctx.currentTime;
        this.bgmGainNode.gain.cancelScheduledValues(now);
        this.bgmGainNode.gain.setValueAtTime(this.bgmGainNode.gain.value, now);
        this.bgmGainNode.gain.linearRampToValueAtTime(this.isBgmMuted ? 0 : 0.12, now + 0.1);
      }
      if (!this.isBgmPlaying && !this.isBgmMuted) {
        this.startBgm();
      }
      return !this.isBgmMuted;
    }
    isBgmActive() {
      return this.isBgmPlaying && !this.isBgmMuted;
    }
    scheduleBgm() {
      if (!this.ctx || !this.isBgmPlaying || !this.bgmGainNode) return;
      const scheduleAheadTime = 0.1;
      while (this.nextNoteTime < this.ctx.currentTime + scheduleAheadTime) {
        this.playBgmStep(this.bgmStepIndex, this.nextNoteTime);
        this.nextNoteTime += this.stepDur;
        this.bgmStepIndex = (this.bgmStepIndex + 1) % 64;
      }
    }
    playBgmStep(step, time) {
      if (!this.ctx || !this.bgmGainNode) return;
      const melFreq = this.bgmMelody[step];
      if (melFreq > 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(melFreq, time);
        gain.gain.setValueAtTime(0.35, time);
        gain.gain.exponentialRampToValueAtTime(1e-3, time + 0.16);
        osc.connect(gain);
        gain.connect(this.bgmGainNode);
        osc.start(time);
        osc.stop(time + 0.18);
      }
      const bassFreq = this.bgmBass[step];
      if (bassFreq > 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(bassFreq, time);
        gain.gain.setValueAtTime(0.45, time);
        gain.gain.exponentialRampToValueAtTime(1e-3, time + 0.22);
        osc.connect(gain);
        gain.connect(this.bgmGainNode);
        osc.start(time);
        osc.stop(time + 0.25);
      }
      if (step % 4 === 2) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(1400, time);
        gain.gain.setValueAtTime(0.08, time);
        gain.gain.exponentialRampToValueAtTime(1e-3, time + 0.035);
        osc.connect(gain);
        gain.connect(this.bgmGainNode);
        osc.start(time);
        osc.stop(time + 0.04);
      }
    }
  };
  var sounds = new SoundEngine();

  // src/tracking/handTracker.ts
  var HandTracker = class {
    constructor(videoElement, overlayCanvas) {
      __publicField(this, "videoEl");
      __publicField(this, "canvasEl");
      __publicField(this, "ctx");
      __publicField(this, "camera", null);
      __publicField(this, "hands", null);
      __publicField(this, "isRunning", false);
      __publicField(this, "maxHands", 2);
      // 支援同時 2 位玩家同屏互動
      __publicField(this, "isMultiplayerMode", false);
      // 單人模式下所有偵測到的手全歸屬 P1
      // 雙手平滑濾波紀錄
      __publicField(this, "smoothCoords", {
        0: { x: 0.5, y: 0.5 },
        1: { x: 0.5, y: 0.5 }
      });
      __publicField(this, "pinchStates", {
        0: false,
        1: false
      });
      __publicField(this, "currentMultiState", {
        handsCount: 0,
        hands: []
      });
      __publicField(this, "onStateChangeCallback", null);
      this.videoEl = videoElement;
      this.canvasEl = overlayCanvas;
      this.ctx = overlayCanvas.getContext("2d");
      this.handleResize();
      window.addEventListener("resize", () => this.handleResize());
    }
    handleResize() {
      this.canvasEl.width = window.innerWidth;
      this.canvasEl.height = window.innerHeight;
    }
    setOnStateChange(cb) {
      this.onStateChangeCallback = cb;
    }
    setMultiplayerMode(isMulti) {
      this.isMultiplayerMode = isMulti;
    }
    async start() {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          console.warn("getUserMedia not available in this context, using mouse/touch mode.");
          return false;
        }
        if (window.Hands && window.Camera) {
          await this.initMediaPipe();
          return true;
        } else {
          console.warn("MediaPipe library not loaded yet, waiting or fallback...");
          return false;
        }
      } catch (e) {
        console.error("Failed to start hand tracker:", e);
        this.isRunning = false;
        return false;
      }
    }
    async initMediaPipe() {
      const Hands = window.Hands;
      const Camera = window.Camera;
      this.hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
      });
      this.hands.setOptions({
        maxNumHands: this.maxHands,
        modelComplexity: 1,
        minDetectionConfidence: 0.65,
        minTrackingConfidence: 0.65
      });
      this.hands.onResults((results) => this.onResults(results));
      this.camera = new Camera(this.videoEl, {
        onFrame: async () => {
          if (this.isRunning && this.hands) {
            try {
              await this.hands.send({ image: this.videoEl });
            } catch (err) {
            }
          }
        },
        width: 1280,
        height: 720
      });
      this.isRunning = true;
      await this.camera.start();
    }
    stop() {
      this.isRunning = false;
      if (this.camera) {
        try {
          this.camera.stop();
        } catch (e) {
        }
      }
    }
    onResults(results) {
      if (!this.ctx) return;
      const w = this.canvasEl.width;
      const h = this.canvasEl.height;
      this.ctx.clearRect(0, 0, w, h);
      const activeHands = [];
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const detectedRaw = results.multiHandLandmarks.slice(0, 2).map((landmarks, originalIdx) => {
          const thumb = landmarks[4];
          const index = landmarks[8];
          const indexDIP = landmarks[7];
          const middle = landmarks[12];
          const wrist = landmarks[0];
          const middleKnuckle = landmarks[9];
          const mirroredThumbX = 1 - thumb.x;
          const mirroredIndexX = 1 - index.x;
          const rawX = (mirroredThumbX + mirroredIndexX) / 2;
          const rawY = (thumb.y + index.y) / 2;
          const palmDist = Math.hypot(wrist.x - middleKnuckle.x, wrist.y - middleKnuckle.y) || 0.15;
          const pinchDist = Math.hypot(thumb.x - index.x, thumb.y - index.y);
          const pinchThreshold = Math.max(0.075, Math.min(0.092, palmDist * 0.5));
          const releaseThreshold = pinchThreshold + 0.036;
          return {
            landmarks,
            rawX,
            rawY,
            minPinchDist: pinchDist,
            pinchThreshold,
            releaseThreshold,
            originalIdx
          };
        });
        if (this.isMultiplayerMode && detectedRaw.length > 1) {
          detectedRaw.sort((a, b) => a.rawX - b.rawX);
        }
        detectedRaw.forEach((hData, handIdx) => {
          const isP1 = !this.isMultiplayerMode || handIdx === 0;
          const handId = handIdx;
          const color = isP1 ? "#3182CE" : "#E07A5F";
          const accentColor = isP1 ? "#63B3ED" : "#F6AD55";
          let label = isP1 ? "P1 \u6551\u8B77\u54E1" : "P2 \u6551\u8B77\u54E1";
          if (!this.isMultiplayerMode && detectedRaw.length > 1) {
            label = handIdx === 0 ? "P1 \u6551\u8B77\u54E1" : "P1 (\u526F\u624B)";
          }
          const wasPinching = this.pinchStates[handId] || false;
          if (!wasPinching) {
            if (hData.minPinchDist < hData.pinchThreshold) {
              this.pinchStates[handId] = true;
            }
          } else {
            if (hData.minPinchDist > hData.releaseThreshold) {
              this.pinchStates[handId] = false;
            }
          }
          const isPinching = this.pinchStates[handId];
          if (!this.smoothCoords[handId]) {
            this.smoothCoords[handId] = { x: hData.rawX, y: hData.rawY };
          }
          const alpha = 0.55;
          this.smoothCoords[handId].x = this.smoothCoords[handId].x * (1 - alpha) + hData.rawX * alpha;
          this.smoothCoords[handId].y = this.smoothCoords[handId].y * (1 - alpha) + hData.rawY * alpha;
          const screenX = this.smoothCoords[handId].x * w;
          const screenY = this.smoothCoords[handId].y * h;
          activeHands.push({
            id: handId,
            label,
            color,
            accentColor,
            isPinching,
            pinchDistance: hData.minPinchDist,
            cursorScreenX: screenX,
            cursorScreenY: screenY,
            cursorNormX: this.smoothCoords[handId].x,
            cursorNormY: this.smoothCoords[handId].y,
            landmarks: hData.landmarks
          });
          this.drawSingleHandSkeleton(hData.landmarks, handId, isPinching, color, accentColor, label, w, h);
        });
      }
      this.currentMultiState = {
        handsCount: activeHands.length,
        hands: activeHands
      };
      if (this.onStateChangeCallback) {
        this.onStateChangeCallback(this.currentMultiState);
      }
    }
    // 繪製單手骨架（文青半透明細緻線條）
    drawSingleHandSkeleton(landmarks, handIdx, isPinching, mainColor, accentColor, label, w, h) {
      if (!this.ctx) return;
      const CONNECTIONS = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [0, 5],
        [5, 6],
        [6, 7],
        [7, 8],
        [5, 9],
        [9, 10],
        [10, 11],
        [11, 12],
        [9, 13],
        [13, 14],
        [14, 15],
        [15, 16],
        [13, 17],
        [17, 18],
        [18, 19],
        [19, 20],
        [0, 17]
      ];
      this.ctx.save();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = isPinching ? accentColor : mainColor;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.ctx.globalAlpha = 0.8;
      CONNECTIONS.forEach(([i, j]) => {
        const p1 = landmarks[i];
        const p2 = landmarks[j];
        const x1 = (1 - p1.x) * w;
        const y1 = p1.y * h;
        const x2 = (1 - p2.x) * w;
        const y2 = p2.y * h;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
      });
      landmarks.forEach((p, idx) => {
        const x = (1 - p.x) * w;
        const y = p.y * h;
        this.ctx.beginPath();
        if (idx === 4 || idx === 8) {
          this.ctx.arc(x, y, isPinching ? 9 : 7, 0, Math.PI * 2);
          this.ctx.fillStyle = isPinching ? accentColor : "#FAF5FF";
          this.ctx.fill();
          this.ctx.strokeStyle = mainColor;
          this.ctx.lineWidth = 2.5;
          this.ctx.stroke();
        } else {
          this.ctx.arc(x, y, 4, 0, Math.PI * 2);
          this.ctx.fillStyle = "#FFFFFF";
          this.ctx.fill();
          this.ctx.strokeStyle = mainColor;
          this.ctx.lineWidth = 1.5;
          this.ctx.stroke();
        }
      });
      const thumbX = (1 - landmarks[4].x) * w;
      const thumbY = landmarks[4].y * h;
      const indexX = (1 - landmarks[8].x) * w;
      const indexY = landmarks[8].y * h;
      const midX = (thumbX + indexX) / 2;
      const midY = (thumbY + indexY) / 2;
      this.ctx.beginPath();
      this.ctx.setLineDash([4, 4]);
      this.ctx.moveTo(thumbX, thumbY);
      this.ctx.lineTo(indexX, indexY);
      this.ctx.strokeStyle = isPinching ? accentColor : "#CBD5E0";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
      this.ctx.setLineDash([]);
      this.ctx.fillStyle = mainColor;
      this.ctx.beginPath();
      this.ctx.roundRect(midX - 32, midY - 32, 64, 20, 10);
      this.ctx.fill();
      this.ctx.strokeStyle = "#FFFFFF";
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.font = "bold 10px sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(isPinching ? `${label} \u6293\u53D6` : label, midX, midY - 22);
      this.ctx.restore();
    }
    getMultiState() {
      return this.currentMultiState;
    }
  };

  // src/game/physics.ts
  var ParticleSystem = class {
    constructor(canvas) {
      __publicField(this, "particles", []);
      __publicField(this, "canvas");
      __publicField(this, "ctx");
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.resize();
      window.addEventListener("resize", () => this.resize());
    }
    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    burst(x, y, isSuccess = true, count = 24) {
      const successColors = ["#F6E05E", "#68D391", "#4299E1", "#FC8181", "#FAF089", "#FAF7F2"];
      const errorColors = ["#E53E3E", "#CBD5E0", "#718096", "#4A5568"];
      const colors = isSuccess ? successColors : errorColors;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 8;
        const shapes = isSuccess ? ["star", "cross", "confetti"] : ["circle", "confetti"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isSuccess ? 2.5 : 0),
          size: 6 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.2,
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
          shape
        });
      }
    }
    updateAndDraw() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.vx *= 0.98;
        p.rotation += p.vRot;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;
        if (p.shape === "star") {
          this.drawStar(this.ctx, 0, 0, 4, p.size, p.size / 2);
        } else if (p.shape === "cross") {
          this.drawCross(this.ctx, 0, 0, p.size);
        } else if (p.shape === "confetti") {
          this.ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size / 1.5);
        } else {
          this.ctx.beginPath();
          this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
        }
        this.ctx.restore();
      }
    }
    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }
    drawCross(ctx, cx, cy, size) {
      const w = size / 3;
      ctx.fillRect(cx - w / 2, cy - size / 2, w, size);
      ctx.fillRect(cx - size / 2, cy - w / 2, size, w);
    }
  };

  // src/ui/encyclopediaModal.ts
  var EncyclopediaModal = class {
    constructor() {
      __publicField(this, "containerEl", null);
      __publicField(this, "currentCategory", "all");
      __publicField(this, "searchQuery", "");
      this.createModalHtml();
    }
    createModalHtml() {
      const totalCount = MEDICAL_ITEMS.length;
      const airwayCount = MEDICAL_ITEMS.filter((i) => i.category === "airway").length;
      const traumaCount = MEDICAL_ITEMS.filter((i) => i.category === "trauma").length;
      const vitalsCount = MEDICAL_ITEMS.filter((i) => i.category === "vitals").length;
      const medsCount = MEDICAL_ITEMS.filter((i) => i.category === "meds").length;
      const specialCount = MEDICAL_ITEMS.filter((i) => i.category === "special").length;
      const ppeCount = MEDICAL_ITEMS.filter((i) => i.category === "ppe").length;
      const modal = document.createElement("div");
      modal.id = "encyclopedia-modal";
      modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D221B]/65 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300";
      modal.innerHTML = `
      <div class="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFDF9] border-[3px] border-[#463529] rounded-[2rem] shadow-[0_10px_0_#463529,0_25px_50px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden font-sans">
        <!-- \u9802\u90E8 \u3044\u3089\u3059\u3068\u3084 \u7E6A\u672C\u6A19\u984C\u5217 -->
        <div class="flex items-center justify-between px-6 py-4 border-b-[2.5px] border-[#463529] bg-[#F6EFE2]">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-[#EB6A5B] border-2 border-[#463529] shadow-[0_2px_0_#463529] flex items-center justify-center text-white font-black text-base">${totalCount}</span>
            <div>
              <h2 class="text-xl font-black text-[#463529] tracking-wide flex items-center gap-2">
                <span>\u{1F3A8} \u3044\u3089\u3059\u3068\u3084\u98A8\u683C\u30FB\u6551\u8B77\u8017\u6750\u7E6A\u672C\u5716\u9451</span>
              </h2>
              <p class="text-xs font-bold text-[#7A6352]">Irasutoya Style EMS Equipment Illustrated Scrapbook (${totalCount} Items)</p>
            </div>
          </div>
          <button id="close-encyclopedia" class="w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#463529] text-[#463529] font-black text-lg hover:bg-[#EB6A5B] hover:text-white transition-colors flex items-center justify-center shadow-[0_2px_0_#463529] cursor-pointer">
            \u2715
          </button>
        </div>

        <!-- \u7BE9\u9078\u5668\u8207\u641C\u5C0B -->
        <div class="p-4 border-b-2 border-[#E5D9C5] bg-[#FFFDF9] flex flex-wrap items-center justify-between gap-3">
          <!-- \u5206\u985E\u7D19\u81A0\u5E36\u6A19\u7C64 -->
          <div class="flex flex-wrap gap-1.5" id="category-tabs">
            <button data-cat="all" class="px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer">\u5168\u90E8 (${totalCount})</button>
            <button data-cat="airway" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D8EDE3] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u547C\u5438\u9053\u8207\u6C27\u6C23 (${airwayCount})</button>
            <button data-cat="trauma" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u5275\u50B7\u56FA\u5B9A\u8207\u6B62\u8840 (${traumaCount})</button>
            <button data-cat="vitals" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u751F\u547D\u5FB5\u8C61 (${vitalsCount})</button>
            <button data-cat="meds" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FAD4CF] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u85E5\u7269\u8207\u8F38\u6DB2 (${medsCount})</button>
            <button data-cat="special" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u7279\u6B8A\u5305\u8207\u5DE5\u5177 (${specialCount})</button>
            <button data-cat="ppe" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">\u9632\u8B77\u8207\u5B89\u5168 (${ppeCount})</button>
          </div>

          <!-- \u641C\u5C0B\u6846 -->
          <div class="relative w-full sm:w-64">
            <input id="encyclopedia-search" type="text" placeholder="\u641C\u5C0B\u5668\u6750\u540D\u7A31\u3001\u9069\u61C9\u75C7..." class="w-full pl-9 pr-4 py-1.5 text-xs font-bold text-[#463529] bg-[#F6EFE2] border-2 border-[#463529] rounded-full focus:outline-none focus:ring-2 focus:ring-[#EB6A5B] shadow-inner" />
            <span class="absolute left-3 top-2 text-[#7A6352] text-xs">\u{1F50D}</span>
          </div>
        </div>

        <!-- \u7E6A\u672C\u5361\u7247\u7DB2\u683C\u5217\u8868 -->
        <div class="flex-1 overflow-y-auto p-6 bg-[#F6EFE2]">
          <div id="encyclopedia-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <!-- \u52D5\u614B\u6E32\u67D3\u5361\u7247 -->
          </div>
        </div>
      </div>
    `;
      document.body.appendChild(modal);
      this.containerEl = modal;
      this.bindEvents();
      this.renderCards();
    }
    bindEvents() {
      if (!this.containerEl) return;
      const closeBtn = this.containerEl.querySelector("#close-encyclopedia");
      closeBtn?.addEventListener("click", () => this.hide());
      this.containerEl.addEventListener("click", (e) => {
        if (e.target === this.containerEl) this.hide();
      });
      const tabs = this.containerEl.querySelectorAll("#category-tabs button");
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          tabs.forEach((t) => {
            t.className = "px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer";
          });
          const target = e.currentTarget;
          target.className = "px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer";
          this.currentCategory = target.getAttribute("data-cat") || "all";
          this.renderCards();
        });
      });
      const searchInput = this.containerEl.querySelector("#encyclopedia-search");
      searchInput?.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderCards();
      });
    }
    renderCards() {
      if (!this.containerEl) return;
      const grid = this.containerEl.querySelector("#encyclopedia-grid");
      if (!grid) return;
      let items = MEDICAL_ITEMS;
      if (this.currentCategory !== "all") {
        items = items.filter((i) => i.category === this.currentCategory);
      }
      if (this.searchQuery) {
        items = items.filter(
          (i) => i.name.toLowerCase().includes(this.searchQuery) || i.enName.toLowerCase().includes(this.searchQuery) || i.indication.toLowerCase().includes(this.searchQuery) || i.desc.toLowerCase().includes(this.searchQuery)
        );
      }
      grid.innerHTML = items.map((item, idx) => `
      <div class="group bg-[#FFFDF9] border-2 border-[#463529] rounded-2xl p-3 shadow-[0_4px_0_#D5C7B2] hover:shadow-[0_6px_0_#463529] hover:-translate-y-1 transition-all flex flex-col items-center text-center">
        <!-- SVG \u3044\u3089\u3059\u3068\u3084\u8CBC\u7D19\u63D2\u756B\u5BB9\u5668 -->
        <div class="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-[#F6EFE2] rounded-2xl border-2 border-[#E5D9C5] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform table-svg-wrapper">
          ${item.svg}
        </div>
        <span class="text-[10px] font-black text-[#463529] px-2.5 py-0.5 bg-[#FDF0C9] rounded-full border-2 border-[#463529] mb-1">
          #${idx + 1} ${item.categoryName}
        </span>
        <h3 class="text-sm font-black text-[#463529] tracking-tight leading-snug mt-0.5">${item.name}</h3>
        <p class="text-[10px] font-bold text-[#7A6352] mb-1.5">${item.enName}</p>
        <p class="text-[11px] font-medium text-[#5C4738] line-clamp-2 leading-relaxed bg-[#F6EFE2] p-1.5 rounded-xl border border-[#D5C7B2] w-full text-left">
          ${item.desc}
        </p>
      </div>
    `).join("");
    }
    show() {
      if (!this.containerEl) return;
      this.containerEl.classList.remove("hidden");
      setTimeout(() => {
        this.containerEl?.classList.remove("opacity-0");
      }, 10);
    }
    hide() {
      if (!this.containerEl) return;
      this.containerEl.classList.add("opacity-0");
      setTimeout(() => {
        this.containerEl?.classList.add("hidden");
      }, 300);
    }
  };

  // src/main.ts
  var GameApp = class {
    constructor() {
      // DOM 元件
      __publicField(this, "hudRoundEl", document.getElementById("hud-round"));
      __publicField(this, "hudTimerEl", document.getElementById("hud-timer"));
      __publicField(this, "hudP1BoxEl", document.getElementById("hud-p1-box"));
      __publicField(this, "hudP2BoxEl", document.getElementById("hud-p2-box"));
      __publicField(this, "hudScoreP1El", document.getElementById("hud-score-p1"));
      __publicField(this, "hudScoreP2El", document.getElementById("hud-score-p2"));
      __publicField(this, "hudComboEl", document.getElementById("hud-combo"));
      __publicField(this, "playerModeTagEl", document.getElementById("player-mode-tag"));
      __publicField(this, "scenarioTitleEl", document.getElementById("scenario-title"));
      __publicField(this, "scenarioDescEl", document.getElementById("scenario-desc"));
      __publicField(this, "scenarioCategoryEl", document.getElementById("scenario-category"));
      __publicField(this, "scenarioUrgencyEl", document.getElementById("scenario-urgency"));
      __publicField(this, "scenarioPatientEl", document.getElementById("scenario-patient"));
      __publicField(this, "targetSlotsEl", document.getElementById("target-slots"));
      __publicField(this, "shelfEl", document.getElementById("equipment-shelf"));
      __publicField(this, "emsBagTargetEl", document.getElementById("ems-bag-target"));
      __publicField(this, "bagGlowEl", document.getElementById("bag-glow"));
      __publicField(this, "roundModalEl", document.getElementById("round-modal"));
      // 模式專用容器元件
      __publicField(this, "singleArenaEl", document.getElementById("single-arena-container"));
      __publicField(this, "vsArenaEl", document.getElementById("vs-arena-container"));
      __publicField(this, "p1BagTargetEl", document.getElementById("p1-bag-target"));
      __publicField(this, "p2BagTargetEl", document.getElementById("p2-bag-target"));
      __publicField(this, "p1BagGlowEl", document.getElementById("p1-bag-glow"));
      __publicField(this, "p2BagGlowEl", document.getElementById("p2-bag-glow"));
      __publicField(this, "p1TargetSlotsEl", document.getElementById("p1-target-slots"));
      __publicField(this, "p2TargetSlotsEl", document.getElementById("p2-target-slots"));
      __publicField(this, "vsScenarioTitleEl", document.getElementById("vs-scenario-title"));
      __publicField(this, "vsScenarioDescEl", document.getElementById("vs-scenario-desc"));
      __publicField(this, "vsScenarioCategoryEl", document.getElementById("vs-scenario-category"));
      __publicField(this, "vsScenarioUrgencyEl", document.getElementById("vs-scenario-urgency"));
      __publicField(this, "vsScenarioPatientEl", document.getElementById("vs-scenario-patient"));
      // 游標元件 (P1, P2)
      __publicField(this, "cursors", [
        {
          container: document.getElementById("gesture-cursor-0"),
          ring: document.getElementById("cursor-ring-0")
        },
        {
          container: document.getElementById("gesture-cursor-1"),
          ring: document.getElementById("cursor-ring-1")
        }
      ]);
      // 幽靈拖曳元件 (P1 / Mouse 及 P2 獨立手勢拖曳)
      __publicField(this, "draggedGhosts", [
        {
          ghost: document.getElementById("dragged-ghost"),
          content: document.getElementById("ghost-content")
        },
        {
          ghost: document.getElementById("dragged-ghost-1") || document.getElementById("dragged-ghost"),
          content: document.getElementById("ghost-content-1") || document.getElementById("ghost-content")
        }
      ]);
      // 遊戲狀態
      __publicField(this, "currentRound", 1);
      __publicField(this, "maxRounds", 5);
      __publicField(this, "p1Score", 0);
      __publicField(this, "p2Score", 0);
      __publicField(this, "combo", 0);
      __publicField(this, "timer", 30);
      // 固定為 30 秒
      __publicField(this, "timerInterval", null);
      __publicField(this, "isRoundActive", false);
      __publicField(this, "isPaused", false);
      __publicField(this, "gameMode", "vs");
      // 預設支援雙人競速對決 (VS Mode)
      __publicField(this, "isMultiplayerMode", true);
      // 鏡頭手勢多手模式
      // 雙人競賽對決模式 (VS Mode) 回合專屬紀錄
      __publicField(this, "firstGrabberMap", /* @__PURE__ */ new Map());
      __publicField(this, "p1Collected", /* @__PURE__ */ new Set());
      __publicField(this, "p2Collected", /* @__PURE__ */ new Set());
      __publicField(this, "finisherBonusAwarded", false);
      __publicField(this, "currentScenario");
      __publicField(this, "requiredItemsLeft", /* @__PURE__ */ new Set());
      __publicField(this, "playedScenarioIds", /* @__PURE__ */ new Set());
      __publicField(this, "shelfItems", []);
      // 各玩家/手部抓取狀態 (Key: 0 為 P1, 1 為 P2, 'mouse' 為滑鼠/觸控)
      __publicField(this, "activeGrabs", /* @__PURE__ */ new Map());
      __publicField(this, "prevPinchStates", { 0: false, 1: false });
      // 模組實例
      __publicField(this, "handTracker");
      __publicField(this, "particleSystem");
      __publicField(this, "encyclopediaModal");
      __publicField(this, "isCameraActive", false);
      __publicField(this, "hasGameStarted", false);
      this.initSystems();
      this.bindGlobalEvents();
      this.initPreGame();
    }
    initSystems() {
      const particleCanvas = document.getElementById("particle-canvas");
      this.particleSystem = new ParticleSystem(particleCanvas);
      this.encyclopediaModal = new EncyclopediaModal();
      const videoEl = document.getElementById("webcam");
      const overlayCanvas = document.getElementById("camera-overlay");
      this.handTracker = new HandTracker(videoEl, overlayCanvas);
      this.handTracker.setMultiplayerMode(this.isMultiplayerMode);
      this.handTracker.setOnStateChange((multiState) => this.onMultiHandUpdate(multiState));
      this.tryInitCamera();
      this.mainRenderLoop();
    }
    async tryInitCamera() {
      try {
        const success = await this.handTracker.start();
        if (success) {
          this.isCameraActive = true;
          this.updateCameraUI(true);
        } else {
          this.updateCameraUI(false);
        }
      } catch (e) {
        console.warn("Camera fallback to touch/mouse mode.");
        this.updateCameraUI(false);
      }
    }
    updateCameraUI(active) {
      const camText = document.getElementById("cam-text");
      const camIcon = document.getElementById("cam-icon");
      if (active) {
        camText && (camText.textContent = "\u93E1\u982D\u5C31\u7DD2");
        camIcon && (camIcon.textContent = "\u{1F4F9}");
      } else {
        camText && (camText.textContent = "\u6ED1\u9F20/\u89F8\u63A7\u6A21\u5F0F");
        camIcon && (camIcon.textContent = "\u{1F5B1}\uFE0F");
      }
    }
    bindGlobalEvents() {
      document.getElementById("btn-intro-guide")?.addEventListener("click", () => {
        if (this.isRoundActive && !this.isPaused) {
          this.pauseGame();
        }
        this.showIntroModal(this.hasGameStarted);
      });
      document.getElementById("btn-pause-toggle")?.addEventListener("click", () => {
        this.togglePause();
      });
      document.getElementById("btn-start-game")?.addEventListener("click", () => {
        if (!this.hasGameStarted) {
          this.onStartGameClicked();
        } else {
          this.hideIntroModal();
        }
      });
      document.getElementById("btn-close-intro")?.addEventListener("click", () => {
        this.hideIntroModal();
      });
      document.getElementById("btn-intro-encyclopedia")?.addEventListener("click", () => {
        this.encyclopediaModal.show();
      });
      const bgmBtn = document.getElementById("btn-bgm-toggle");
      const bgmIcon = document.getElementById("bgm-icon");
      const bgmText = document.getElementById("bgm-text");
      bgmBtn?.addEventListener("click", () => {
        const isMuted = !sounds.toggleBgm();
        if (bgmIcon && bgmText && bgmBtn) {
          if (!isMuted) {
            bgmIcon.textContent = "\u{1F3B5}";
            bgmText.textContent = "\u97F3\u6A02\u958B";
            bgmBtn.className = "px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#EB6A5B] text-xs font-black text-white hover:bg-[#D85344] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]";
          } else {
            bgmIcon.textContent = "\u{1F507}";
            bgmText.textContent = "\u97F3\u6A02\u95DC";
            bgmBtn.className = "px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#E5D9C5] text-xs font-black text-[#7A6352] hover:bg-[#D5C7B2] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]";
          }
        }
      });
      document.getElementById("btn-encyclopedia")?.addEventListener("click", () => {
        if (this.isRoundActive && !this.isPaused) {
          this.pauseGame();
        }
        this.encyclopediaModal.show();
      });
      document.getElementById("btn-player-mode")?.addEventListener("click", () => {
        const nextMode = this.gameMode === "vs" ? "1p" : this.gameMode === "1p" ? "coop" : "vs";
        this.setGameMode(nextMode);
      });
      const modeBtns = document.querySelectorAll(".mode-select-btn");
      modeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.getAttribute("data-mode");
          if (mode) {
            this.setGameMode(mode);
          }
        });
      });
      document.getElementById("btn-camera-toggle")?.addEventListener("click", () => {
        if (this.isCameraActive) {
          this.handTracker.stop();
          this.isCameraActive = false;
          this.updateCameraUI(false);
        } else {
          this.tryInitCamera();
        }
      });
      const soundBtn = document.getElementById("btn-sound-toggle");
      soundBtn?.addEventListener("click", () => {
        const isMuted = sounds.toggleMute();
        if (soundBtn) {
          soundBtn.textContent = isMuted ? "\u{1F507}" : "\u{1F50A}";
          soundBtn.title = isMuted ? "\u5DF2\u975C\u97F3" : "\u97F3\u6548\u958B\u555F";
        }
      });
      const roundBtns = document.querySelectorAll(".round-select-btn");
      roundBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const target = e.currentTarget;
          const rounds = parseInt(target.getAttribute("data-rounds") || "5", 10);
          this.maxRounds = rounds;
          roundBtns.forEach((b) => {
            b.className = "round-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm";
          });
          target.className = "round-select-btn px-3.5 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-round-btn";
          this.updateHUD();
          sounds.playGrab();
        });
      });
      document.getElementById("modal-next-btn")?.addEventListener("click", () => {
        this.hideRoundModal();
        if (this.currentRound >= this.maxRounds) {
          this.showPodiumCeremony();
        } else {
          this.currentRound++;
          this.startRound();
        }
      });
      document.getElementById("podium-restart-btn")?.addEventListener("click", () => {
        this.hidePodiumModal();
        this.startNewGame();
      });
      document.getElementById("podium-encyclopedia-btn")?.addEventListener("click", () => {
        this.encyclopediaModal.show();
      });
      document.getElementById("btn-modal-resume")?.addEventListener("click", () => {
        this.resumeGame();
      });
      document.getElementById("btn-pause-restart-round")?.addEventListener("click", () => {
        this.resumeGame();
        this.startRound();
      });
      document.getElementById("btn-pause-open-encyclopedia")?.addEventListener("click", () => {
        this.encyclopediaModal.show();
      });
      window.addEventListener("keydown", (e) => {
        const activeTag = (document.activeElement?.tagName || "").toLowerCase();
        if (activeTag === "input" || activeTag === "textarea") return;
        if (e.code === "Space" || e.key === "p" || e.key === "P") {
          e.preventDefault();
          this.togglePause();
        } else if (e.key === "Escape" && this.isPaused) {
          e.preventDefault();
          this.resumeGame();
        }
      });
      window.addEventListener("pointermove", (e) => {
        if (this.handTracker.getMultiState().handsCount === 0) {
          const c0 = this.cursors[0];
          c0.container.style.opacity = "1";
          c0.container.style.left = `${e.clientX}px`;
          c0.container.style.top = `${e.clientY}px`;
          const activeOwner = this.activeGrabs.has("mouse") ? "mouse" : this.activeGrabs.has("P1") ? "P1" : this.activeGrabs.has("P2") ? "P2" : null;
          if (activeOwner) {
            this.updateGhostPosition(e.clientX, e.clientY, activeOwner);
            this.checkBagHover(e.clientX, e.clientY, activeOwner);
          }
        }
      });
      window.addEventListener("pointerup", (e) => {
        if (this.activeGrabs.has("mouse")) {
          this.evaluateDrop("mouse", e.clientX, e.clientY);
        } else if (this.activeGrabs.has("P1")) {
          this.evaluateDrop("P1", e.clientX, e.clientY);
        } else if (this.activeGrabs.has("P2")) {
          this.evaluateDrop("P2", e.clientX, e.clientY);
        }
      });
    }
    // 設定遊玩模式 (1P 單人 / 2P 合作 / 2P 競速對決)
    setGameMode(mode) {
      this.gameMode = mode;
      this.isMultiplayerMode = mode !== "1p";
      if (this.handTracker) {
        this.handTracker.setMultiplayerMode(this.isMultiplayerMode);
      }
      const modeText = document.getElementById("mode-text");
      const cursorLabel1 = document.getElementById("cursor-label-1");
      if (mode === "vs") {
        this.playerModeTagEl.textContent = "\u96D9\u4EBA\u7AF6\u901F\u5C0D\u6C7A (VS 15/10\u5206)";
        this.playerModeTagEl.className = "text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#EB6A5B] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]";
        if (modeText) modeText.textContent = "\u5207\u70BA\u55AE\u4EBA";
        this.hudP2BoxEl.classList.remove("hidden");
        if (cursorLabel1) {
          cursorLabel1.textContent = "P2";
          cursorLabel1.className = "absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md";
        }
        this.singleArenaEl.classList.add("hidden");
        this.vsArenaEl.classList.remove("hidden");
      } else if (mode === "coop") {
        this.playerModeTagEl.textContent = "\u96D9\u4EBA\u540C\u5C4F\u5408\u4F5C (Co-op)";
        this.playerModeTagEl.className = "text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#6BB2E2] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]";
        if (modeText) modeText.textContent = "\u5207\u70BA\u7AF6\u8CFD";
        this.hudP2BoxEl.classList.remove("hidden");
        if (cursorLabel1) {
          cursorLabel1.textContent = "P2";
          cursorLabel1.className = "absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md";
        }
        this.singleArenaEl.classList.remove("hidden");
        this.vsArenaEl.classList.add("hidden");
      } else {
        this.playerModeTagEl.textContent = "\u55AE\u4EBA\u6551\u8B77\u6A21\u5F0F (1P)";
        this.playerModeTagEl.className = "text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#7CB69D] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]";
        if (modeText) modeText.textContent = "\u5207\u70BA\u5408\u4F5C";
        this.hudP2BoxEl.classList.add("hidden");
        if (cursorLabel1) {
          cursorLabel1.textContent = "P1";
          cursorLabel1.className = "absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#3182CE] text-white shadow-md";
        }
        this.singleArenaEl.classList.remove("hidden");
        this.vsArenaEl.classList.add("hidden");
      }
      const modeBtns = document.querySelectorAll(".mode-select-btn");
      modeBtns.forEach((btn) => {
        const m = btn.getAttribute("data-mode");
        if (m === mode) {
          btn.className = "mode-select-btn px-4 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-mode-btn cursor-pointer";
        } else {
          btn.className = "mode-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm cursor-pointer";
        }
      });
      if (this.currentScenario) {
        this.renderScenarioCard();
        this.buildShelfItems();
        this.updateHUD();
      }
    }
    // 多手即時辨識更新 (單人模式雙手皆為 P1；雙人模式橫向排序 P1/P2)
    onMultiHandUpdate(multiState) {
      const hands = multiState.hands;
      const allCards = this.shelfEl.querySelectorAll(".table-item-card");
      allCards.forEach((c) => c.classList.remove("is-hovered"));
      hands.forEach((h, idx) => {
        if (!h.isPinching) {
          const requestingPlayer = !this.isMultiplayerMode || idx === 0 ? "P1" : "P2";
          const closest = this.findClosestShelfCard(h.cursorScreenX, h.cursorScreenY, 110, this.gameMode === "vs" ? requestingPlayer : void 0);
          if (closest) closest.classList.add("is-hovered");
        }
      });
      [0, 1].forEach((idx) => {
        const cursorObj = this.cursors[idx];
        const hand = hands[idx];
        if (hand) {
          cursorObj.container.style.opacity = "1";
          cursorObj.container.style.left = `${hand.cursorScreenX}px`;
          cursorObj.container.style.top = `${hand.cursorScreenY}px`;
          const isP1Hand = !this.isMultiplayerMode || idx === 0;
          const themeBorder = isP1Hand ? "border-[#3182CE]" : "border-[#E07A5F]";
          const themeBg = isP1Hand ? "bg-[#3182CE]/20" : "bg-[#E07A5F]/20";
          if (hand.isPinching) {
            cursorObj.ring.className = "w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400/40 flex items-center justify-center scale-90 transition-all shadow-lg";
          } else {
            cursorObj.ring.className = `w-12 h-12 rounded-full border-2 ${themeBorder} ${themeBg} flex items-center justify-center scale-100 transition-all shadow-md`;
          }
          const wasPinching = this.prevPinchStates[idx] || false;
          if (hand.isPinching && !wasPinching) {
            this.checkPinchGrab(idx, hand.cursorScreenX, hand.cursorScreenY);
          } else if (!hand.isPinching && wasPinching) {
            this.checkPinchDrop(idx, hand.cursorScreenX, hand.cursorScreenY);
          }
          if (this.activeGrabs.has(idx)) {
            this.updateGhostPosition(hand.cursorScreenX, hand.cursorScreenY, idx);
            this.checkBagHover(hand.cursorScreenX, hand.cursorScreenY, idx);
          }
          this.prevPinchStates[idx] = hand.isPinching;
        } else {
          cursorObj.container.style.opacity = "0";
          if (this.activeGrabs.has(idx)) {
            this.cancelGrab(idx);
          }
          this.prevPinchStates[idx] = false;
        }
      });
    }
    // 尋找游標附近最接近的卡片 (強化磁吸預覽與大範圍精準抓取核心，VS模式自動跳過已領取的耗材)
    findClosestShelfCard(x, y, maxRadius = 120, requestingPlayer) {
      const elUnderPoint = document.elementFromPoint(x, y);
      if (elUnderPoint) {
        const directCard = elUnderPoint.closest(".table-item-card");
        if (directCard && !directCard.classList.contains("is-dragged")) {
          if (!requestingPlayer || !directCard.getAttribute("data-taken-by")?.includes(requestingPlayer)) {
            return directCard;
          }
        }
      }
      const cards = Array.from(this.shelfEl.querySelectorAll(".table-item-card"));
      let minDistance = maxRadius;
      let closestCard = null;
      cards.forEach((card) => {
        if (card.classList.contains("is-dragged")) return;
        if (requestingPlayer && card.getAttribute("data-taken-by")?.includes(requestingPlayer)) return;
        const rect = card.getBoundingClientRect();
        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        const edgeDist = Math.hypot(dx, dy);
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const centerDist = Math.hypot(centerX - x, centerY - y);
        const dist = edgeDist === 0 ? 0 : Math.min(edgeDist, centerDist * 0.75);
        if (dist < minDistance) {
          minDistance = dist;
          closestCard = card;
        }
      });
      return closestCard;
    }
    // 抓取判定 (利用擴大磁吸半徑精準抓取最接近之器材卡片)
    checkPinchGrab(handId, x, y) {
      if (!this.isRoundActive || this.isPaused || this.activeGrabs.has(handId)) return;
      if (!this.isMultiplayerMode && this.activeGrabs.size > 0) return;
      const player = !this.isMultiplayerMode || handId === 0 || handId === "P1" ? "P1" : "P2";
      const cardEl = this.findClosestShelfCard(x, y, 125, this.gameMode === "vs" ? player : void 0);
      if (cardEl) {
        const itemId = cardEl.getAttribute("data-item-id");
        if (itemId) {
          const item = getItemById(itemId);
          if (item) {
            this.startGrab(handId, item, cardEl, x, y);
          }
        }
      }
    }
    // 開始抓取
    startGrab(ownerId, item, cardEl, x, y) {
      this.activeGrabs.set(ownerId, { item, cardEl });
      cardEl.classList.add("is-dragged");
      const ghostIdx = ownerId === 1 || ownerId === "P2" ? 1 : 0;
      const ghost = this.draggedGhosts[ghostIdx];
      if (ghost) {
        ghost.content.innerHTML = item.svg;
        ghost.ghost.classList.remove("hidden");
      }
      this.updateGhostPosition(x, y, ownerId);
      sounds.playGrab();
      this.particleSystem.burst(x, y, true, 8);
    }
    // 投放判定
    checkPinchDrop(handId, x, y) {
      if (this.activeGrabs.has(handId)) {
        this.evaluateDrop(handId, x, y);
      }
    }
    updateGhostPosition(x, y, ownerId = 0) {
      const ghostIdx = ownerId === 1 || ownerId === "P2" ? 1 : 0;
      const ghost = this.draggedGhosts[ghostIdx];
      if (ghost) {
        ghost.ghost.style.left = `${x}px`;
        ghost.ghost.style.top = `${y}px`;
      }
    }
    checkBagHover(x, y, ownerId) {
      if (this.gameMode === "vs") {
        const p1Rect = this.p1BagTargetEl.getBoundingClientRect();
        const p2Rect = this.p2BagTargetEl.getBoundingClientRect();
        const margin2 = 50;
        const isHoverP1 = x >= p1Rect.left - margin2 && x <= p1Rect.right + margin2 && y >= p1Rect.top - margin2 && y <= p1Rect.bottom + margin2;
        const isHoverP2 = x >= p2Rect.left - margin2 && x <= p2Rect.right + margin2 && y >= p2Rect.top - margin2 && y <= p2Rect.bottom + margin2;
        const p1Icon = document.getElementById("p1-bag-icon-container");
        const p2Icon = document.getElementById("p2-bag-icon-container");
        if (isHoverP1) {
          this.p1BagGlowEl.style.opacity = "1";
          this.p1BagTargetEl.style.borderColor = "rgba(99, 179, 237, 0.95)";
          this.p1BagTargetEl.style.boxShadow = "0 0 35px rgba(49, 130, 206, 0.55)";
          if (p1Icon) p1Icon.style.transform = "scale(1.18)";
        } else {
          this.p1BagGlowEl.style.opacity = "0";
          this.p1BagTargetEl.style.borderColor = "";
          this.p1BagTargetEl.style.boxShadow = "";
          if (p1Icon) p1Icon.style.transform = "scale(1)";
        }
        if (isHoverP2) {
          this.p2BagGlowEl.style.opacity = "1";
          this.p2BagTargetEl.style.borderColor = "rgba(246, 173, 85, 0.95)";
          this.p2BagTargetEl.style.boxShadow = "0 0 35px rgba(224, 122, 95, 0.55)";
          if (p2Icon) p2Icon.style.transform = "scale(1.18)";
        } else {
          this.p2BagGlowEl.style.opacity = "0";
          this.p2BagTargetEl.style.borderColor = "";
          this.p2BagTargetEl.style.boxShadow = "";
          if (p2Icon) p2Icon.style.transform = "scale(1)";
        }
        return;
      }
      const bagRect = this.emsBagTargetEl.getBoundingClientRect();
      const margin = 50;
      const isHovering = x >= bagRect.left - margin && x <= bagRect.right + margin && y >= bagRect.top - margin && y <= bagRect.bottom + margin;
      const bagIcon = document.getElementById("bag-icon-container");
      if (isHovering) {
        this.bagGlowEl.style.opacity = "1";
        this.emsBagTargetEl.style.borderColor = "rgba(251, 191, 36, 0.95)";
        this.emsBagTargetEl.style.boxShadow = "0 0 35px rgba(245, 158, 11, 0.45)";
        if (bagIcon) bagIcon.style.transform = "scale(1.22)";
      } else {
        this.bagGlowEl.style.opacity = "0";
        this.emsBagTargetEl.style.borderColor = "";
        this.emsBagTargetEl.style.boxShadow = "";
        if (bagIcon) bagIcon.style.transform = "scale(1)";
      }
    }
    cancelGrab(ownerId) {
      const grab = this.activeGrabs.get(ownerId);
      if (grab) {
        grab.cardEl.classList.remove("is-dragged");
        grab.cardEl.classList.add("animate-wobble");
        setTimeout(() => grab.cardEl.classList.remove("animate-wobble"), 400);
        this.activeGrabs.delete(ownerId);
      }
      const ghostIdx = ownerId === 1 || ownerId === "P2" ? 1 : 0;
      this.draggedGhosts[ghostIdx]?.ghost.classList.add("hidden");
      if (this.gameMode === "vs") {
        this.p1BagGlowEl.style.opacity = "0";
        this.p2BagGlowEl.style.opacity = "0";
        this.p1BagTargetEl.style.borderColor = "";
        this.p2BagTargetEl.style.borderColor = "";
        this.p1BagTargetEl.style.boxShadow = "";
        this.p2BagTargetEl.style.boxShadow = "";
        const p1Icon = document.getElementById("p1-bag-icon-container");
        const p2Icon = document.getElementById("p2-bag-icon-container");
        if (p1Icon) p1Icon.style.transform = "scale(1)";
        if (p2Icon) p2Icon.style.transform = "scale(1)";
      } else {
        this.bagGlowEl.style.opacity = "0";
        this.emsBagTargetEl.style.borderColor = "";
        this.emsBagTargetEl.style.boxShadow = "";
        const bagIcon = document.getElementById("bag-icon-container");
        if (bagIcon) bagIcon.style.transform = "scale(1)";
      }
    }
    // 結算投放進急救包
    evaluateDrop(ownerId, x, y) {
      const grab = this.activeGrabs.get(ownerId);
      if (!grab) return;
      if (this.gameMode === "vs") {
        const p1Rect = this.p1BagTargetEl.getBoundingClientRect();
        const p2Rect = this.p2BagTargetEl.getBoundingClientRect();
        const margin2 = 50;
        const isInsideP1 = x >= p1Rect.left - margin2 && x <= p1Rect.right + margin2 && y >= p1Rect.top - margin2 && y <= p1Rect.bottom + margin2;
        const isInsideP2 = x >= p2Rect.left - margin2 && x <= p2Rect.right + margin2 && y >= p2Rect.top - margin2 && y <= p2Rect.bottom + margin2;
        let player = ownerId === 1 || ownerId === "P2" ? "P2" : "P1";
        if (ownerId === "mouse") {
          if (isInsideP1) player = "P1";
          else if (isInsideP2) player = "P2";
          else {
            this.cancelGrab(ownerId);
            return;
          }
        }
        if (player === "P1" && isInsideP2) {
          this.showFloatingScore(x, y, "\u26A0\uFE0F \u9019\u662F P2 \u6551\u8B77\u5305\uFF01\u8ACB\u653E\u5DE6\u5074\u85CD\u8272\u5305", "#FC8181");
          sounds.playWrong();
          this.cancelGrab(ownerId);
          return;
        }
        if (player === "P2" && isInsideP1) {
          this.showFloatingScore(x, y, "\u26A0\uFE0F \u9019\u662F P1 \u6551\u8B77\u5305\uFF01\u8ACB\u653E\u53F3\u5074\u6A58\u8272\u5305", "#FC8181");
          sounds.playWrong();
          this.cancelGrab(ownerId);
          return;
        }
        const isInsideOwnBag = player === "P1" && isInsideP1 || player === "P2" && isInsideP2;
        if (isInsideOwnBag) {
          this.handleVsItemDropIntoBag(player, grab.item, grab.cardEl, x, y);
          this.activeGrabs.delete(ownerId);
          const ghostIdx = ownerId === 1 || ownerId === "P2" ? 1 : 0;
          this.draggedGhosts[ghostIdx]?.ghost.classList.add("hidden");
          this.p1BagGlowEl.style.opacity = "0";
          this.p2BagGlowEl.style.opacity = "0";
          this.p1BagTargetEl.style.borderColor = "";
          this.p2BagTargetEl.style.borderColor = "";
          this.p1BagTargetEl.style.boxShadow = "";
          this.p2BagTargetEl.style.boxShadow = "";
        } else {
          this.cancelGrab(ownerId);
        }
        return;
      }
      const bagRect = this.emsBagTargetEl.getBoundingClientRect();
      const margin = 50;
      const isInsideBag = x >= bagRect.left - margin && x <= bagRect.right + margin && y >= bagRect.top - margin && y <= bagRect.bottom + margin;
      const bagIcon = document.getElementById("bag-icon-container");
      if (isInsideBag) {
        this.handleItemDropIntoBag(ownerId, grab.item, grab.cardEl, x, y);
        this.activeGrabs.delete(ownerId);
        const ghostIdx = ownerId === 1 || ownerId === "P2" ? 1 : 0;
        this.draggedGhosts[ghostIdx]?.ghost.classList.add("hidden");
        this.bagGlowEl.style.opacity = "0";
        this.emsBagTargetEl.style.borderColor = "";
        this.emsBagTargetEl.style.boxShadow = "";
        if (bagIcon) bagIcon.style.transform = "scale(1)";
      } else {
        this.cancelGrab(ownerId);
      }
    }
    // 雙人競速對決模式 (VS Mode) 專屬投放與計分規則：
    // 1. 同一器材首位拿取放入得 15 分，次位拿取放入得 10 分
    // 2. 不能是同一位玩家重複拿取同一個器材
    // 3. 率先收齊所有器材者額外榮獲 +20 分完整收齊獎勵
    handleVsItemDropIntoBag(player, item, cardEl, x, y) {
      sounds.playDropInBag();
      const isCorrect = this.currentScenario.requiredItemIds.includes(item.id);
      if (isCorrect) {
        const alreadyCollected = player === "P1" ? this.p1Collected.has(item.id) : this.p2Collected.has(item.id);
        if (alreadyCollected) {
          sounds.playWrong();
          this.showFloatingScore(x, y, `\u26A0\uFE0F ${player} \u5DF2\u62FF\u904E\u6B64\u5668\u6750\uFF01\u4E0D\u53EF\u91CD\u8907\u9818\u53D6`, "#FC8181");
          cardEl.classList.remove("is-dragged");
          cardEl.classList.add("animate-wobble");
          setTimeout(() => cardEl.classList.remove("animate-wobble"), 400);
          return;
        }
        const isFirst = !this.firstGrabberMap.has(item.id);
        let itemScore = 0;
        if (isFirst) {
          this.firstGrabberMap.set(item.id, player);
          itemScore = 15;
          this.showFloatingScore(x, y, `+15 \u6436\u5148\uFF01(${player})`, "#F6E05E");
        } else {
          itemScore = 10;
          this.showFloatingScore(x, y, `+10 \u6B21\u4F4D (${player})`, "#68D391");
        }
        if (player === "P1") {
          this.p1Score += itemScore;
          this.p1Collected.add(item.id);
        } else {
          this.p2Score += itemScore;
          this.p2Collected.add(item.id);
        }
        sounds.playCorrect();
        this.particleSystem.burst(x, y, true, 36);
        const bagIcon = document.getElementById(player === "P1" ? "p1-bag-icon-container" : "p2-bag-icon-container");
        if (bagIcon) {
          bagIcon.classList.add("animate-swallow");
          setTimeout(() => bagIcon.classList.remove("animate-swallow"), 550);
        }
        this.markTargetSlotCollected(player, item.id, isFirst);
        const takenByStr = cardEl.getAttribute("data-taken-by") || "";
        const takenBySet = new Set(takenByStr.split(",").filter(Boolean));
        takenBySet.add(player);
        cardEl.setAttribute("data-taken-by", Array.from(takenBySet).join(","));
        let count = parseInt(cardEl.getAttribute("data-count") || "1", 10);
        count--;
        cardEl.setAttribute("data-count", count.toString());
        if (count <= 0) {
          this.replenishShelfCard(cardEl);
        } else {
          cardEl.classList.remove("is-stacked", "is-dragged");
          const badge = cardEl.querySelector(".card-stack-badge");
          if (badge) {
            badge.className = "card-stack-badge badge-single";
            badge.textContent = "x1 \u4EFD";
          }
        }
        const totalRequired = this.currentScenario.requiredItemIds.length;
        const myCount = player === "P1" ? this.p1Collected.size : this.p2Collected.size;
        if (myCount === totalRequired && !this.finisherBonusAwarded) {
          this.finisherBonusAwarded = true;
          const bonus = 20;
          if (player === "P1") this.p1Score += bonus;
          else this.p2Score += bonus;
          this.showFloatingScore(x, y - 40, `\u{1F3C6} ${player} \u7387\u5148\u5B8C\u5099 +20\u5206\uFF01`, "#ECC94B");
        }
        this.updateHUD();
        if (this.p1Collected.size === totalRequired && this.p2Collected.size === totalRequired) {
          setTimeout(() => {
            this.handleRoundVictory(20, this.p1Score >= this.p2Score ? "P1" : "P2");
          }, 800);
        }
      } else {
        this.timer = Math.max(1, this.timer - 2);
        sounds.playWrong();
        this.particleSystem.burst(x, y, false, 24);
        this.showFloatingScore(x, y, "\u274C \u975E\u672C\u984C\u6025\u6551\u8017\u6750\uFF01", "#FC8181");
        const bagTarget = player === "P1" ? this.p1BagTargetEl : this.p2BagTargetEl;
        bagTarget.classList.add("animate-reject");
        setTimeout(() => bagTarget.classList.remove("animate-reject"), 500);
        cardEl.classList.remove("is-dragged");
        cardEl.classList.add("animate-wobble");
        setTimeout(() => cardEl.classList.remove("animate-wobble"), 400);
        this.updateHUD();
      }
    }
    // 浮動得分提示文字 (如 +15 搶先！或 +10 次位)
    showFloatingScore(x, y, text, color = "#F6E05E") {
      const el = document.createElement("div");
      el.className = "fixed font-black text-sm sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] animate-float-score pointer-events-none z-50 whitespace-nowrap";
      el.style.left = `${Math.min(window.innerWidth - 60, Math.max(60, x))}px`;
      el.style.top = `${Math.min(window.innerHeight - 60, Math.max(60, y))}px`;
      el.style.color = color;
      el.textContent = text;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    }
    // 標記 VS 模式下玩家專屬插槽打勾或冠軍獎章
    markTargetSlotCollected(player, itemId, isFirst) {
      const prefix = player === "P1" ? "p1" : "p2";
      const slotEl = document.querySelector(`[data-${prefix}-slot-id="${itemId}"]`);
      if (slotEl) {
        slotEl.className = `w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${player === "P1" ? "bg-[#4F94C4]" : "bg-[#EB6A5B]"} border-2 border-[#463529] flex items-center justify-center text-sm sm:text-base font-black text-white shadow-[0_2px_0_#463529] transform scale-105 transition-all`;
        slotEl.innerHTML = isFirst ? "\u{1F947}" : "\u2713";
      }
    }
    // 急救包吞入與計分核心邏輯 (拿取一樣得 10 分，收齊完整加 20 分)
    handleItemDropIntoBag(ownerId, item, cardEl, x, y) {
      sounds.playDropInBag();
      const bagIcon = document.getElementById("bag-icon-container");
      if (bagIcon) {
        bagIcon.classList.add("animate-swallow");
        setTimeout(() => bagIcon.classList.remove("animate-swallow"), 550);
      }
      this.emsBagTargetEl.classList.add("scale-[1.02]");
      setTimeout(() => this.emsBagTargetEl.classList.remove("scale-[1.02]"), 300);
      const isCorrect = this.requiredItemsLeft.has(item.id);
      if (isCorrect) {
        this.requiredItemsLeft.delete(item.id);
        this.combo++;
        const itemScore = 10;
        let finishingBonus = 0;
        const isP2 = this.isMultiplayerMode && (ownerId === 1 || ownerId === "P2");
        if (isP2) {
          this.p2Score += itemScore;
        } else {
          this.p1Score += itemScore;
        }
        sounds.playCorrect();
        this.particleSystem.burst(x, y, true, 36);
        const slotEl = this.targetSlotsEl.querySelector(`[data-slot-item-id="${item.id}"]`);
        if (slotEl) {
          slotEl.className = "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7CB69D] border-2 border-[#463529] flex items-center justify-center text-xl font-black text-white shadow-[0_2px_0_#463529] transform scale-110 transition-all";
          slotEl.innerHTML = "\u2713";
        }
        this.replenishShelfCard(cardEl);
        if (this.requiredItemsLeft.size === 0) {
          finishingBonus = 20;
          if (isP2) {
            this.p2Score += finishingBonus;
          } else {
            this.p1Score += finishingBonus;
          }
          this.updateHUD();
          this.handleRoundVictory(finishingBonus, isP2 ? "P2" : "P1");
        } else {
          this.updateHUD();
        }
      } else {
        this.combo = 0;
        this.timer = Math.max(1, this.timer - 2);
        sounds.playWrong();
        this.particleSystem.burst(x, y, false, 24);
        const bagIcon2 = document.getElementById("bag-icon-container");
        if (bagIcon2) {
          bagIcon2.classList.add("animate-reject");
          setTimeout(() => bagIcon2.classList.remove("animate-reject"), 500);
        }
        this.emsBagTargetEl.classList.add("animate-reject");
        setTimeout(() => this.emsBagTargetEl.classList.remove("animate-reject"), 500);
        cardEl.classList.remove("is-dragged");
        cardEl.classList.add("animate-wobble");
        setTimeout(() => cardEl.classList.remove("animate-wobble"), 400);
        this.updateHUD();
      }
    }
    // 派遣前言引導與出勤準備
    initPreGame() {
      this.currentScenario = getRandomScenario();
      this.timer = 30;
      this.requiredItemsLeft = new Set(this.currentScenario.requiredItemIds);
      this.firstGrabberMap.clear();
      this.p1Collected.clear();
      this.p2Collected.clear();
      this.finisherBonusAwarded = false;
      this.setGameMode(this.gameMode);
      this.isRoundActive = false;
    }
    // 點擊 START 開始出勤
    onStartGameClicked() {
      this.hasGameStarted = true;
      this.isPaused = false;
      this.updatePauseButtonUI(false);
      this.hidePauseModal();
      sounds.playDispatchAlarm();
      sounds.startBgm();
      this.hideIntroModal();
      this.startNewGame();
    }
    showIntroModal(isGameRunning = false) {
      const modal = document.getElementById("dispatch-intro-modal");
      if (!modal) return;
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.remove("opacity-0", "pointer-events-none");
      }, 10);
      const startBtn = document.getElementById("btn-start-game");
      if (startBtn) {
        if (isGameRunning) {
          startBtn.innerHTML = `
          <span class="text-2xl sm:text-3xl animate-bounce">\u{1F691}</span>
          <span class="tracking-wide">\u2794 \u7E7C\u7E8C\u6551\u8B77\u51FA\u52E4\u4EFB\u52D9</span>
        `;
        } else {
          startBtn.innerHTML = `
          <span class="text-2xl sm:text-3xl animate-bounce">\u{1F691}</span>
          <span class="tracking-wide">START \u7ACB\u5373\u51FA\u52E4</span>
          <span class="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform">\u2794</span>
        `;
        }
      }
    }
    hideIntroModal() {
      const modal = document.getElementById("dispatch-intro-modal");
      if (!modal) return;
      modal.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 500);
    }
    startNewGame() {
      this.currentRound = 1;
      this.p1Score = 0;
      this.p2Score = 0;
      this.combo = 0;
      this.playedScenarioIds.clear();
      this.startRound();
    }
    startRound() {
      this.isRoundActive = true;
      this.isPaused = false;
      this.updatePauseButtonUI(false);
      this.hidePauseModal();
      if (this.playedScenarioIds.size >= SCENARIOS.length) {
        this.playedScenarioIds.clear();
      }
      this.currentScenario = getRandomScenario([...this.playedScenarioIds]);
      this.playedScenarioIds.add(this.currentScenario.id);
      this.timer = 30;
      this.requiredItemsLeft = new Set(this.currentScenario.requiredItemIds);
      this.firstGrabberMap.clear();
      this.p1Collected.clear();
      this.p2Collected.clear();
      this.finisherBonusAwarded = false;
      this.renderScenarioCard();
      this.buildShelfItems();
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => this.onTimerTick(), 1e3);
      this.updateHUD();
    }
    onTimerTick() {
      if (!this.isRoundActive || this.isPaused) return;
      this.timer--;
      if (this.timer <= 5 && this.timer > 0) {
        sounds.playTick();
        this.hudTimerEl.classList.add("animate-ping");
        setTimeout(() => this.hudTimerEl.classList.remove("animate-ping"), 300);
      }
      if (this.timer <= 0) {
        this.timer = 0;
        this.handleRoundTimeout();
      }
      this.updateHUD();
    }
    // 回合勝利過關結算 (拿取完整多加 20 分)
    handleRoundVictory(finishingBonus, finisher) {
      this.isRoundActive = false;
      clearInterval(this.timerInterval);
      sounds.playRoundWin();
      this.particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2, true, 64);
      const totalScore = this.p1Score + this.p2Score;
      document.getElementById("modal-banner").innerHTML = "\u{1F3C6}";
      document.getElementById("modal-banner").className = "w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#48BB78] text-white shadow-lg";
      document.getElementById("modal-title").textContent = "\u51FA\u52E4\u8655\u7F6E\u5B8C\u7F8E\u6536\u9F4A\uFF01";
      document.getElementById("modal-subtitle").textContent = `\u7B2C ${this.currentRound} \u56DE\u5408\u30FB\u7531 ${finisher} \u5B8C\u6210\u6700\u7D42\u6536\u9F4A`;
      const breakdownEl = document.getElementById("modal-scores-breakdown");
      if (this.gameMode === "vs") {
        const p1Firsts = Array.from(this.firstGrabberMap.values()).filter((p) => p === "P1").length;
        const p2Firsts = Array.from(this.firstGrabberMap.values()).filter((p) => p === "P2").length;
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\uFF08\u5DE6\u5074\u30FB\u85CD\uFF09\u5F97\u5206\uFF1A</span>
          <span class="text-sm font-black">${this.p1Score} \u5206 (\u9996\u4F4D\u6436\u5F97 ${p1Firsts} \u9805)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 \u6551\u8B77\u54E1\uFF08\u53F3\u5074\u30FB\u6A58\uFF09\u5F97\u5206\uFF1A</span>
          <span class="text-sm font-black">${this.p2Score} \u5206 (\u9996\u4F4D\u6436\u5F97 ${p2Firsts} \u9805)</span>
        </div>
      `;
      } else if (this.isMultiplayerMode) {
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\uFF08\u85CD\uFF09\u7D2F\u8A08\uFF1A</span>
          <span class="text-sm font-black">${this.p1Score} \u5206</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 \u6551\u8B77\u54E1\uFF08\u6A58\uFF09\u7D2F\u8A08\uFF1A</span>
          <span class="text-sm font-black">${this.p2Score} \u5206</span>
        </div>
      `;
      } else {
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\u8655\u7F6E\u5F97\u5206\uFF1A</span>
          <span class="text-sm font-black">${this.p1Score} \u5206</span>
        </div>
      `;
      }
      document.getElementById("modal-score-bonus").textContent = `+${finishingBonus} \u5206 (${finisher} \u7372\u5F97)`;
      document.getElementById("modal-score-total").textContent = `${totalScore} \u5206`;
      document.getElementById("modal-rationale").textContent = this.currentScenario.rationale;
      document.getElementById("modal-tip").textContent = this.currentScenario.tip;
      this.showRoundModal();
    }
    handleRoundTimeout() {
      this.isRoundActive = false;
      clearInterval(this.timerInterval);
      sounds.playWrong();
      this.particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2, false, 40);
      const totalScore = this.p1Score + this.p2Score;
      document.getElementById("modal-banner").innerHTML = "\u23F3";
      document.getElementById("modal-banner").className = "w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#E07A5F] text-white shadow-lg";
      document.getElementById("modal-title").textContent = "30\u79D2\u51FA\u52E4\u6642\u9593\u8017\u76E1\uFF01";
      document.getElementById("modal-subtitle").textContent = "\u7DCA\u6025\u72C0\u6CC1\u523B\u4E0D\u5BB9\u7DE9\uFF0C\u8ACB\u518D\u63A5\u518D\u53B2\uFF01";
      const breakdownEl = document.getElementById("modal-scores-breakdown");
      if (this.gameMode === "vs") {
        const p1Firsts = Array.from(this.firstGrabberMap.values()).filter((p) => p === "P1").length;
        const p2Firsts = Array.from(this.firstGrabberMap.values()).filter((p) => p === "P2").length;
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\uFF08\u5DE6\u5074\u30FB\u85CD\uFF09\uFF1A</span>
          <span class="text-sm font-black">${this.p1Score} \u5206 (\u9996\u4F4D\u6436\u5F97 ${p1Firsts} \u9805)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 \u6551\u8B77\u54E1\uFF08\u53F3\u5074\u30FB\u6A58\uFF09\uFF1A</span>
          <span class="text-sm font-black">${this.p2Score} \u5206 (\u9996\u4F4D\u6436\u5F97 ${p2Firsts} \u9805)</span>
        </div>
      `;
      } else if (this.isMultiplayerMode) {
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\uFF1A</span>
          <span>${this.p1Score} \u5206</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 \u6551\u8B77\u54E1\uFF1A</span>
          <span>${this.p2Score} \u5206</span>
        </div>
      `;
      } else {
        breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 \u6551\u8B77\u54E1\u5F97\u5206\uFF1A</span>
          <span>${this.p1Score} \u5206</span>
        </div>
      `;
      }
      document.getElementById("modal-score-bonus").textContent = "+0 \u5206 (\u672A\u5B8C\u6574\u6536\u9F4A)";
      document.getElementById("modal-score-total").textContent = `${totalScore} \u5206`;
      document.getElementById("modal-rationale").textContent = this.currentScenario.rationale;
      document.getElementById("modal-tip").textContent = this.currentScenario.tip;
      this.showRoundModal();
    }
    showRoundModal() {
      this.roundModalEl.classList.remove("hidden");
      setTimeout(() => this.roundModalEl.classList.remove("opacity-0"), 10);
    }
    hideRoundModal() {
      this.roundModalEl.classList.add("opacity-0");
      setTimeout(() => this.roundModalEl.classList.add("hidden"), 300);
    }
    // 顯示大會總結算頒獎盛典 (Championship Podium Ceremony)
    showPodiumCeremony() {
      this.isRoundActive = false;
      clearInterval(this.timerInterval);
      sounds.playRoundWin();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const x = window.innerWidth * (0.2 + 0.6 * Math.random());
          const y = window.innerHeight * (0.2 + 0.4 * Math.random());
          this.particleSystem.burst(x, y, true, 80);
        }, i * 350);
      }
      const podiumModal = document.getElementById("podium-modal");
      if (!podiumModal) return;
      const titleEl = document.getElementById("podium-title");
      const subtitleEl = document.getElementById("podium-subtitle");
      const stageEl = document.getElementById("podium-stage");
      const statsEl = document.getElementById("podium-stats");
      const totalScore = this.p1Score + this.p2Score;
      if (this.isMultiplayerMode) {
        const isP1Win = this.p1Score > this.p2Score;
        const isTie = this.p1Score === this.p2Score;
        if (isTie) {
          titleEl.textContent = "\u96D9\u4EBA\u540C\u5FC3\uFF01\u69AE\u7372\u6700\u4F73\u795E\u7D1A\u6551\u8B77\u642D\u6A94 MVP\uFF01";
          subtitleEl.textContent = `\u5171\u51FA\u52E4 ${this.maxRounds} \u8D9F\u7DCA\u6025\u4EFB\u52D9\uFF0C\u5169\u4F4D\u6551\u8B77\u54E1\u4EE5\u5E73\u624B\u795E\u914D\u5408\u5B88\u8B77\u5E02\u6C11\uFF01`;
        } else {
          const winner = isP1Win ? "P1 \u6551\u8B77\u54E1\uFF08\u85CD\u8272\uFF09" : "P2 \u6551\u8B77\u54E1\uFF08\u6A58\u8272\uFF09";
          titleEl.textContent = `\u{1F389} \u606D\u559C ${winner} \u69AE\u767B\u51A0\u8ECD MVP\uFF01`;
          subtitleEl.textContent = `\u5206\u79D2\u5FC5\u722D\uFF01\u5728 ${this.maxRounds} \u8D9F\u96A8\u6A5F\u51FA\u52E4\u4E2D\u812B\u7A4E\u800C\u51FA\uFF0C\u7CBE\u6E96\u6536\u9F4A\u6025\u6551\u5668\u6750\uFF01`;
        }
        const p1PodiumRank = isTie ? 1 : isP1Win ? 1 : 2;
        const p2PodiumRank = isTie ? 1 : isP1Win ? 2 : 1;
        stageEl.innerHTML = `
        <!-- P1 \u6551\u8B77\u54E1\u9812\u734E\u4F4D -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${p1PodiumRank === 1 ? "animate-bounce" : ""}">${p1PodiumRank === 1 ? "\u{1F947}" : "\u{1F948}"}</div>
          <div class="text-xs font-black text-[#3182CE] bg-blue-100 px-3 py-1 rounded-full border border-blue-300 mb-1">
            P1 \u6551\u8B77\u54E1
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p1Score} \u5206</div>
          <div class="w-full ${p1PodiumRank === 1 ? "h-32 bg-gradient-to-t from-blue-500 to-blue-400" : "h-24 bg-gradient-to-t from-blue-300 to-blue-200"} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${p1PodiumRank === 1 ? "CHAMPION" : "2ND"}</span>
            <span class="text-[10px] font-bold opacity-90">${p1PodiumRank === 1 ? "\u51A0\u8ECD MVP" : "\u5353\u8D8A\u6551\u8B77\u54E1"}</span>
          </div>
        </div>

        <!-- P2 \u6551\u8B77\u54E1\u9812\u734E\u4F4D -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${p2PodiumRank === 1 ? "animate-bounce" : ""}">${p2PodiumRank === 1 ? "\u{1F947}" : "\u{1F948}"}</div>
          <div class="text-xs font-black text-[#E07A5F] bg-orange-100 px-3 py-1 rounded-full border border-orange-300 mb-1">
            P2 \u6551\u8B77\u54E1
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p2Score} \u5206</div>
          <div class="w-full ${p2PodiumRank === 1 ? "h-32 bg-gradient-to-t from-orange-500 to-orange-400" : "h-24 bg-gradient-to-t from-orange-300 to-orange-200"} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${p2PodiumRank === 1 ? "CHAMPION" : "2ND"}</span>
            <span class="text-[10px] font-bold opacity-90">${p2PodiumRank === 1 ? "\u51A0\u8ECD MVP" : "\u5353\u8D8A\u6551\u8B77\u54E1"}</span>
          </div>
        </div>
      `;
      } else {
        let rankBadge = "\u{1F396}\uFE0F S\u7D1A \u9996\u5E2D\u9AD8\u7D1A\u6551\u8B77\u6280\u8853\u54E1 (EMT-P)";
        if (this.p1Score < 30) rankBadge = "\u{1F530} B\u7D1A \u521D\u7D1A\u6551\u8B77\u6280\u8853\u54E1 (EMT-1)";
        else if (this.p1Score < 60) rankBadge = "\u{1F948} A\u7D1A \u4E2D\u7D1A\u6551\u8B77\u6280\u8853\u54E1 (EMT-2)";
        titleEl.textContent = "\u{1F31F} \u51FA\u52E4\u4EFB\u52D9\u5713\u6EFF\u5B8C\u6210\uFF01";
        subtitleEl.textContent = `\u6210\u529F\u5B8C\u6210 ${this.maxRounds} \u8D9F\u7DCA\u6025\u51FA\u52E4\uFF0C\u69AE\u7372\u6700\u9AD8\u91AB\u7642\u69AE\u8B7D\u8A55\u50F9\uFF01`;
        stageEl.innerHTML = `
        <div class="w-full flex flex-col items-center py-2">
          <div class="text-4xl mb-2 animate-bounce">\u{1F3C6}</div>
          <div class="text-sm font-black text-[#B45309] bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 mb-2">
            ${rankBadge}
          </div>
          <div class="text-3xl font-black text-[#E07A5F] mb-3">${this.p1Score} <span class="text-sm text-[#718096]">\u7E3D\u5F97\u5206</span></div>
          <div class="w-48 h-20 bg-gradient-to-t from-[#E07A5F] to-[#F4A261] rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-lg font-black tracking-widest">MASTER EMT</span>
            <span class="text-[11px] opacity-90">\u6025\u6551\u8017\u6750\u7CBE\u901A\u5927\u5E2B</span>
          </div>
        </div>
      `;
      }
      statsEl.innerHTML = `
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">\u6311\u6230\u51FA\u52E4\u984C\u6578</div>
        <div class="text-base font-black text-[#2D3748] mt-0.5">${this.maxRounds} \u8D9F</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">\u5718\u968A\u7D2F\u8A08\u7E3D\u5206</div>
        <div class="text-base font-black text-[#C53030] mt-0.5">${totalScore} \u5206</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">\u8017\u6750\u7CBE\u6E96\u6536\u9F4A\u7387</div>
        <div class="text-base font-black text-[#38A169] mt-0.5">100%</div>
      </div>
    `;
      podiumModal.classList.remove("hidden");
      setTimeout(() => {
        podiumModal.classList.remove("opacity-0");
      }, 10);
    }
    hidePodiumModal() {
      const podiumModal = document.getElementById("podium-modal");
      if (!podiumModal) return;
      podiumModal.classList.add("opacity-0");
      setTimeout(() => {
        podiumModal.classList.add("hidden");
      }, 500);
    }
    renderScenarioCard() {
      this.scenarioTitleEl.textContent = this.currentScenario.title;
      this.scenarioDescEl.textContent = this.currentScenario.description;
      this.scenarioCategoryEl.textContent = this.currentScenario.category;
      this.scenarioPatientEl.textContent = this.currentScenario.patient;
      this.targetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map((id) => {
        const item = getItemById(id);
        return `
        <div data-slot-item-id="${id}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFDF9] border-2 border-[#463529] p-1.5 flex items-center justify-center shadow-[0_2px_0_#D5C7B2] transition-all" title="${item?.name}">
          ${item ? item.svg : "\uFF1F"}
        </div>
      `;
      }).join("");
      if (this.vsScenarioTitleEl) this.vsScenarioTitleEl.textContent = this.currentScenario.title;
      if (this.vsScenarioDescEl) this.vsScenarioDescEl.textContent = this.currentScenario.description;
      if (this.vsScenarioCategoryEl) this.vsScenarioCategoryEl.textContent = this.currentScenario.category;
      if (this.vsScenarioPatientEl) this.vsScenarioPatientEl.textContent = this.currentScenario.patient;
      if (this.p1TargetSlotsEl) {
        this.p1TargetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map((id) => {
          const item = getItemById(id);
          return `
          <div data-p1-slot-id="${id}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#4F94C4] transition-all" title="${item?.name}">
            ${item ? item.svg : "\uFF1F"}
          </div>
        `;
        }).join("");
      }
      if (this.p2TargetSlotsEl) {
        this.p2TargetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map((id) => {
          const item = getItemById(id);
          return `
          <div data-p2-slot-id="${id}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#EB6A5B] transition-all" title="${item?.name}">
            ${item ? item.svg : "\uFF1F"}
          </div>
        `;
        }).join("");
      }
    }
    // 建立單張桌上器材卡片 DOM (VS 模式支援雙份上下疊放與份數角標)
    createCardElement(item, initialCount = 1) {
      const card = document.createElement("div");
      card.setAttribute("data-item-id", item.id);
      card.setAttribute("data-count", initialCount.toString());
      card.setAttribute("data-taken-by", "");
      const isStacked = this.gameMode === "vs" && initialCount > 1;
      card.className = `table-item-card w-20 h-28 sm:w-24 sm:h-32 flex flex-col items-center justify-between p-1 transition-all duration-300 ${isStacked ? "is-stacked" : ""}`;
      const badgeHtml = this.gameMode === "vs" ? `<span class="card-stack-badge ${initialCount > 1 ? "badge-double" : "badge-single"}">${initialCount > 1 ? "x2 \u4EFD" : "x1 \u4EFD"}</span>` : "";
      card.innerHTML = `
      ${badgeHtml}
      <!-- \u53BB\u80CC SVG \u5716\u5F62 -->
      <div class="table-svg-wrapper w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-none">
        ${item.svg}
      </div>
      <!-- \u4E0B\u65B9\u5668\u6750\u540D\u7A31\u6A19\u7C64 (\u65E5\u5F0F\u6DFA\u5976\u8336\u8272\u6728\u7D0B\u85E5\u7C64\uFF0C\u5927\u5B57\u9AD4\u6E05\u6670\u53EF\u898B) -->
      <div class="item-name-tag text-xs sm:text-sm font-extrabold px-2.5 py-1 rounded-xl mt-1 text-center truncate max-w-full pointer-events-none">
        ${item.name}
      </div>
    `;
      card.addEventListener("pointerdown", (e) => {
        if (this.gameMode === "vs") {
          const player = e.clientX < window.innerWidth / 2 ? "P1" : "P2";
          const takenBy = card.getAttribute("data-taken-by") || "";
          if (takenBy.includes(player)) {
            this.showFloatingScore(e.clientX, e.clientY, `\u26A0\uFE0F ${player} \u5DF2\u62FF\u904E\u6B64\u5668\u6750\uFF01`, "#FC8181");
            sounds.playWrong();
            return;
          }
          this.startGrab(player, item, card, e.clientX, e.clientY);
        } else {
          this.startGrab("mouse", item, card, e.clientX, e.clientY);
        }
      });
      return card;
    }
    // 在畫面下方的透視桌上擺放器材 (10 格：必定包含本題所有標準答案，其餘格子由剩餘器材庫隨機出現)
    buildShelfItems() {
      const requiredItems = this.currentScenario.requiredItemIds.map((id) => getItemById(id)).filter((i) => i !== void 0);
      const otherPool = MEDICAL_ITEMS.filter((i) => !this.currentScenario.requiredItemIds.includes(i.id));
      const totalSlots = 10;
      const distractorsNeeded = Math.max(0, totalSlots - requiredItems.length);
      const shuffledDistractors = [...otherPool].sort(() => Math.random() - 0.5).slice(0, distractorsNeeded);
      this.shelfItems = [...requiredItems, ...shuffledDistractors].sort(() => Math.random() - 0.5);
      const initialCount = this.gameMode === "vs" ? 2 : 1;
      this.shelfEl.innerHTML = "";
      this.shelfItems.forEach((item) => {
        const card = this.createCardElement(item, initialCount);
        this.shelfEl.appendChild(card);
      });
    }
    // 當桌上器材被抓走並確定投入急救包時，立即在原位補充一個新選項上桌
    replenishShelfCard(oldCardEl) {
      const currentOnTableIds = new Set(
        Array.from(this.shelfEl.querySelectorAll(".table-item-card")).filter((c) => c !== oldCardEl).map((c) => c.getAttribute("data-item-id")).filter((id) => id !== null)
      );
      const missingAnswers = this.currentScenario.requiredItemIds.filter((id) => !currentOnTableIds.has(id)).map((id) => getItemById(id)).filter((i) => i !== void 0);
      let nextItem;
      if (missingAnswers.length > 0) {
        nextItem = missingAnswers[Math.floor(Math.random() * missingAnswers.length)];
      } else {
        const availablePool = MEDICAL_ITEMS.filter((i) => !currentOnTableIds.has(i.id));
        if (availablePool.length > 0) {
          nextItem = availablePool[Math.floor(Math.random() * availablePool.length)];
        } else {
          nextItem = MEDICAL_ITEMS[Math.floor(Math.random() * MEDICAL_ITEMS.length)];
        }
      }
      if (!nextItem) {
        oldCardEl.remove();
        return;
      }
      oldCardEl.style.transform = "scale(0)";
      oldCardEl.style.opacity = "0";
      setTimeout(() => {
        const initialCount = this.gameMode === "vs" ? 2 : 1;
        const newCard = this.createCardElement(nextItem, initialCount);
        newCard.style.transform = "scale(0)";
        newCard.style.opacity = "0";
        if (oldCardEl.parentNode) {
          oldCardEl.parentNode.replaceChild(newCard, oldCardEl);
        } else {
          this.shelfEl.appendChild(newCard);
        }
        requestAnimationFrame(() => {
          newCard.style.transform = "scale(1)";
          newCard.style.opacity = "1";
          newCard.classList.add("animate-wobble");
          setTimeout(() => newCard.classList.remove("animate-wobble"), 400);
        });
      }, 200);
    }
    // 更新各玩家計分欄與 HUD
    updateHUD() {
      this.hudRoundEl.textContent = `${this.currentRound}/${this.maxRounds}`;
      this.hudTimerEl.textContent = `${this.timer}s`;
      this.hudScoreP1El.textContent = `${this.p1Score} \u5206`;
      this.hudScoreP2El.textContent = `${this.p2Score} \u5206`;
      this.hudComboEl.textContent = `x${this.combo}`;
      const p1VsScore = document.getElementById("p1-vs-score-tag");
      const p2VsScore = document.getElementById("p2-vs-score-tag");
      if (p1VsScore) p1VsScore.textContent = `${this.p1Score} \u5206`;
      if (p2VsScore) p2VsScore.textContent = `${this.p2Score} \u5206`;
    }
    // ================= 暫停與繼續邏輯 =================
    togglePause() {
      if (!this.hasGameStarted || !this.isRoundActive) return;
      if (this.isPaused) {
        this.resumeGame();
      } else {
        this.pauseGame();
      }
    }
    pauseGame() {
      if (!this.hasGameStarted || !this.isRoundActive || this.isPaused) return;
      this.isPaused = true;
      this.updatePauseButtonUI(true);
      this.showPauseModal();
      sounds.playPause();
      sounds.pauseBgm();
    }
    resumeGame() {
      if (!this.isPaused) return;
      this.isPaused = false;
      this.updatePauseButtonUI(false);
      this.hidePauseModal();
      sounds.playResume();
      sounds.resumeBgm();
    }
    updatePauseButtonUI(isPaused) {
      const pauseIcon = document.getElementById("pause-icon");
      const pauseText = document.getElementById("pause-text");
      const btn = document.getElementById("btn-pause-toggle");
      if (isPaused) {
        pauseIcon && (pauseIcon.textContent = "\u25B6\uFE0F");
        pauseText && (pauseText.textContent = "\u7E7C\u7E8C");
        if (btn) {
          btn.className = "px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#7CB69D] text-xs font-black text-white hover:bg-[#5F9E84] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529] animate-pulse";
        }
      } else {
        pauseIcon && (pauseIcon.textContent = "\u23F8\uFE0F");
        pauseText && (pauseText.textContent = "\u66AB\u505C");
        if (btn) {
          btn.className = "px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#F6C46A] text-xs font-black text-[#463529] hover:bg-[#E6AC4C] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]";
        }
      }
    }
    showPauseModal() {
      const modal = document.getElementById("pause-modal");
      if (!modal) return;
      const subtitle = document.getElementById("pause-modal-subtitle");
      const cat = document.getElementById("pause-current-scenario-cat");
      const timeBadge = document.getElementById("pause-current-time-badge");
      const title = document.getElementById("pause-current-scenario-title");
      const patient = document.getElementById("pause-current-scenario-patient");
      if (subtitle) {
        subtitle.textContent = `\u76EE\u524D\u70BA\u7B2C ${this.currentRound}/${this.maxRounds} \u8D9F\u51FA\u52E4\u30FB\u5012\u6578\u6642\u9593\u5C1A\u9918 ${this.timer} \u79D2`;
      }
      if (cat && this.currentScenario) {
        cat.textContent = this.currentScenario.category;
      }
      if (timeBadge) {
        timeBadge.textContent = `\u5269\u9918 ${this.timer} \u79D2`;
      }
      if (title && this.currentScenario) {
        title.textContent = this.currentScenario.title;
      }
      if (patient && this.currentScenario) {
        patient.textContent = this.currentScenario.patient;
      }
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.remove("opacity-0");
      }, 10);
    }
    hidePauseModal() {
      const modal = document.getElementById("pause-modal");
      if (!modal) return;
      modal.classList.add("opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    }
    mainRenderLoop() {
      this.particleSystem.updateAndDraw();
      requestAnimationFrame(() => this.mainRenderLoop());
    }
  };
  function bootstrapApp() {
    if (window.__EMS_GAME_INITIALIZED__) return;
    window.__EMS_GAME_INITIALIZED__ = true;
    new GameApp();
  }
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", bootstrapApp);
  } else {
    bootstrapApp();
  }
})();
