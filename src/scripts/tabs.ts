interface TabsConfig {
  /** CSS selector for tab buttons, e.g. '#hero-tabs .tab-btn' */
  tabsSelector: string;
  /** CSS selector for all panel elements, e.g. '.code-panel' */
  panelSelector: string;
  /** data-* attribute name on buttons, e.g. 'lang' for data-lang */
  dataAttr: string;
  /** ID prefix for panels, e.g. 'code-' → panel id="code-rust" */
  panelIdPrefix: string;
  /** CSS class to add to the active tab button */
  activeClass: string;
  /** CSS class to add to inactive tab buttons (default: 'text-[#909090]') */
  inactiveClass?: string;
  /** Optional element id to update with the active tab's key */
  statusId?: string;
}

export function initTabs({
  tabsSelector,
  panelSelector,
  dataAttr,
  panelIdPrefix,
  activeClass,
  inactiveClass = 'text-[#909090]',
  statusId,
}: TabsConfig): void {
  const tabs     = document.querySelectorAll<HTMLButtonElement>(tabsSelector);
  const panels   = document.querySelectorAll<HTMLElement>(panelSelector);
  const statusEl = statusId ? document.getElementById(statusId) : null;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset[dataAttr] as string;

      tabs.forEach(t => {
        t.classList.remove(activeClass);
        t.classList.add(inactiveClass);
      });
      tab.classList.add(activeClass);
      tab.classList.remove(inactiveClass);

      panels.forEach(p => p.classList.add('hidden'));
      document.getElementById(`${panelIdPrefix}${key}`)?.classList.remove('hidden');

      if (statusEl) statusEl.textContent = key;
    });
  });
}
