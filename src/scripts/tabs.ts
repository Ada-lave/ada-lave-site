interface TabsConfig {
  tabsSelector: string;
  panelSelector: string;
  dataAttr: string;
  panelIdPrefix: string;
  activeClass: string;
  inactiveClass?: string;
  statusId?: string;
}

export function initTabs({ tabsSelector, panelSelector, dataAttr, panelIdPrefix,
  activeClass, inactiveClass = 'text-[#909090]', statusId }: TabsConfig): void {
  const tabs = [...document.querySelectorAll<HTMLButtonElement>(tabsSelector)];
  const panels = document.querySelectorAll<HTMLElement>(panelSelector);
  const status = statusId ? document.getElementById(statusId) : null;
  if (!tabs.length) return;
  tabs[0].parentElement?.setAttribute('role', 'tablist');

  function activate(tab: HTMLButtonElement, focus = false) {
    const key = tab.dataset[dataAttr]!;
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle(activeClass, selected);
      item.classList.toggle(inactiveClass, !selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => {
      const hidden = panel.id !== `${panelIdPrefix}${key}`;
      panel.hidden = hidden;
      panel.classList.toggle('hidden', hidden);
    });
    if (status) status.textContent = key;
    if (focus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    const panelId = `${panelIdPrefix}${tab.dataset[dataAttr]}`;
    tab.id = `${panelId}-tab`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panelId);
    const panel = document.getElementById(panelId);
    panel?.setAttribute('role', 'tabpanel');
    panel?.setAttribute('aria-labelledby', tab.id);
    if (panel) panel.tabIndex = 0;
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next: number;
      switch (event.key) {
        case 'ArrowRight': next = (index + 1) % tabs.length; break;
        case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
        case 'Home': next = 0; break;
        case 'End': next = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      activate(tabs[next], true);
    });
  });
  activate(tabs.find(tab => tab.classList.contains(activeClass)) ?? tabs[0]);
}
