export const NODE_ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
};

export const NAV_ACTIONS = {
  RUN: 'run',
  SAVE: 'save',
  NEW: 'new',
  GISTS: 'gists',
  LOGIN: 'login',
  COLOBRATE: 'colobrate',
  TRENDING: 'trending',
  SETTINGS: 'settings'
};

export const NAV_TOP_ACTIONS = [{
  title: 'Run',
  tooltip: 'Run',
  icon: 'icon-play',
  event: NAV_ACTIONS.RUN
}, {
  title: 'Save',
  tooltip: 'Save',
  icon: 'icon-upload-cloud',
  event: NAV_ACTIONS.SAVE
}, {
  title: 'New',
  tooltip: 'New',
  icon: 'icon-plus',
  event: NAV_ACTIONS.NEW
}];

export const NAV_BOTTOM_ACTIONS = [{
  title: 'Gists',
  tooltip: 'Gists',
  icon: 'icon-download-cloud',
  event: NAV_ACTIONS.GISTS
}, {
  title: 'Login',
  tooltip: 'Login',
  icon: 'icon-user',
  event: NAV_ACTIONS.LOGIN
}, {
  title: 'Colobrate',
  tooltip: 'Colobrate',
  icon: 'icon-user-plus',
  event: NAV_ACTIONS.COLOBRATE
}, {
  title: 'Trending',
  tooltip: 'Trending',
  icon: 'icon-zap',
  event: NAV_ACTIONS.TRENDING
}, {
  title: 'Settings',
  tooltip: 'Settings',
  icon: 'icon-cog',
  event: NAV_ACTIONS.SETTINGS
}];