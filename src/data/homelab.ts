/** Services supplied by the owner; this is an inventory, not a live status feed. */
export const homelab = [
  { name: 'sure' },
  { name: 'my-netflix-stack' },
  { name: 'backrest' },
  { name: 'beszel' },
  { name: 'rustfs-backup' },
  { name: 'affine' },
  { name: 'immich' },
  { name: 'vaultwarden', description: { ru: 'Пароли', en: 'Passwords' } },
  { name: 'oxicloud', description: { ru: 'Файловое хранилище', en: 'File storage' } },
  { name: 'garage', description: { ru: 'S3-хранилище', en: 'S3 storage' } },
] as const;
