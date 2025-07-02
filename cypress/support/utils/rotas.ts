export const rotas = {
  webtables: '/webtables',
  alerts: '/alerts',
  modais: '/modal-dialogs',
  frames: '/frames',
  tooltips: '/tool-tips',
  radiobutton: '/radio-button',
  checkbox: '/checkbox',
  dynamic: '/dynamic-properties',
  progress: '/progress-bar',
  buttons: '/buttons',
  form: '/automation-practice-form',
} as const;

export type Pagina = keyof typeof rotas;
