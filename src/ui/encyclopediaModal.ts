import { MEDICAL_ITEMS } from '../data/items';

export class EncyclopediaModal {
  private containerEl: HTMLElement | null = null;
  private currentCategory: string = 'all';
  private searchQuery: string = '';

  constructor() {
    this.createModalHtml();
  }

  private createModalHtml() {
    const totalCount = MEDICAL_ITEMS.length;
    const airwayCount = MEDICAL_ITEMS.filter(i => i.category === 'airway').length;
    const traumaCount = MEDICAL_ITEMS.filter(i => i.category === 'trauma').length;
    const vitalsCount = MEDICAL_ITEMS.filter(i => i.category === 'vitals').length;
    const medsCount = MEDICAL_ITEMS.filter(i => i.category === 'meds').length;
    const specialCount = MEDICAL_ITEMS.filter(i => i.category === 'special').length;
    const ppeCount = MEDICAL_ITEMS.filter(i => i.category === 'ppe').length;

    const modal = document.createElement('div');
    modal.id = 'encyclopedia-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D221B]/65 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300';
    
    modal.innerHTML = `
      <div class="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFDF9] border-[3px] border-[#463529] rounded-[2rem] shadow-[0_10px_0_#463529,0_25px_50px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden font-sans">
        <!-- 頂部 いらすとや 繪本標題列 -->
        <div class="flex items-center justify-between px-6 py-4 border-b-[2.5px] border-[#463529] bg-[#F6EFE2]">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-[#EB6A5B] border-2 border-[#463529] shadow-[0_2px_0_#463529] flex items-center justify-center text-white font-black text-base">${totalCount}</span>
            <div>
              <h2 class="text-xl font-black text-[#463529] tracking-wide flex items-center gap-2">
                <span>🎨 いらすとや風格・救護耗材繪本圖鑑</span>
              </h2>
              <p class="text-xs font-bold text-[#7A6352]">Irasutoya Style EMS Equipment Illustrated Scrapbook (${totalCount} Items)</p>
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
            <button data-cat="all" class="px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer">全部 (${totalCount})</button>
            <button data-cat="airway" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D8EDE3] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">呼吸道與氧氣 (${airwayCount})</button>
            <button data-cat="trauma" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">創傷固定與止血 (${traumaCount})</button>
            <button data-cat="vitals" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">生命徵象 (${vitalsCount})</button>
            <button data-cat="meds" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FAD4CF] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">藥物與輸液 (${medsCount})</button>
            <button data-cat="special" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">特殊包與工具 (${specialCount})</button>
            <button data-cat="ppe" class="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#D6ECF9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer">防護與安全 (${ppeCount})</button>
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
    `;

    document.body.appendChild(modal);
    this.containerEl = modal;

    this.bindEvents();
    this.renderCards();
  }

  private bindEvents() {
    if (!this.containerEl) return;

    // 關閉按鈕
    const closeBtn = this.containerEl.querySelector('#close-encyclopedia');
    closeBtn?.addEventListener('click', () => this.hide());

    // 點擊背景關閉
    this.containerEl.addEventListener('click', (e) => {
      if (e.target === this.containerEl) this.hide();
    });

    // 分類按鈕
    const tabs = this.containerEl.querySelectorAll('#category-tabs button');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => {
          t.className = 'px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#FFFDF9] text-[#463529] hover:bg-[#FDF0C9] transition-all shadow-[0_1.5px_0_#463529] cursor-pointer';
        });
        const target = e.currentTarget as HTMLButtonElement;
        target.className = 'px-3.5 py-1.5 rounded-full text-xs font-black border-2 border-[#463529] bg-[#EB6A5B] text-white transition-all shadow-[0_2px_0_#463529] cursor-pointer';
        this.currentCategory = target.getAttribute('data-cat') || 'all';
        this.renderCards();
      });
    });

    // 搜尋即時輸入
    const searchInput = this.containerEl.querySelector('#encyclopedia-search') as HTMLInputElement;
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = (e.target as HTMLInputElement).value.trim().toLowerCase();
      this.renderCards();
    });
  }

  private renderCards() {
    if (!this.containerEl) return;
    const grid = this.containerEl.querySelector('#encyclopedia-grid');
    if (!grid) return;

    let items = MEDICAL_ITEMS;

    if (this.currentCategory !== 'all') {
      items = items.filter(i => i.category === this.currentCategory);
    }

    if (this.searchQuery) {
      items = items.filter(i => 
        i.name.toLowerCase().includes(this.searchQuery) ||
        i.enName.toLowerCase().includes(this.searchQuery) ||
        i.indication.toLowerCase().includes(this.searchQuery) ||
        i.desc.toLowerCase().includes(this.searchQuery)
      );
    }

    grid.innerHTML = items.map((item, idx) => `
      <div class="group bg-[#FFFDF9] border-2 border-[#463529] rounded-2xl p-3 shadow-[0_4px_0_#D5C7B2] hover:shadow-[0_6px_0_#463529] hover:-translate-y-1 transition-all flex flex-col items-center text-center">
        <!-- SVG いらすとや貼紙插畫容器 -->
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
    `).join('');
  }

  public show() {
    if (!this.containerEl) return;
    this.containerEl.classList.remove('hidden');
    setTimeout(() => {
      this.containerEl?.classList.remove('opacity-0');
    }, 10);
  }

  public hide() {
    if (!this.containerEl) return;
    this.containerEl.classList.add('opacity-0');
    setTimeout(() => {
      this.containerEl?.classList.add('hidden');
    }, 300);
  }
}
