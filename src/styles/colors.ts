/**
 * Barmy Army Logo Color Palette
 * CSS Custom Properties and TypeScript color definitions
 */

// CSS Custom Properties
export const cssColors = {
  canary: '#f3f754',
  celery: '#b0bb4c',
  racingGreen: '#121e18',
  grayNickel: '#c4c5c3',
  laPalma: '#3c8a0d',
  xanadu: '#7a7b7a',
  asparagus: '#7ca667',
  darkFern: '#12400a',
  dell: '#286411',
} as const;

// RGB Values
export const rgbColors = {
  canary: 'rgba(243,247,84,1)',
  celery: 'rgba(176,187,76,1)',
  racingGreen: 'rgba(18,30,24,1)',
  grayNickel: 'rgba(196,197,195,1)',
  laPalma: 'rgba(60,138,13,1)',
  xanadu: 'rgba(122,123,122,1)',
  asparagus: 'rgba(124,166,103,1)',
  darkFern: 'rgba(18,64,10,1)',
  dell: 'rgba(40,100,17,1)',
} as const;

// TypeScript color type
export type BarmyArmyColor = keyof typeof cssColors;

// Color categories for better organization
export const colorCategories = {
  primary: {
    dell: cssColors.dell,
    darkFern: cssColors.darkFern,
    asparagus: cssColors.asparagus,
  },
  secondary: {
    canary: cssColors.canary,
    celery: cssColors.celery,
    laPalma: cssColors.laPalma,
  },
  neutral: {
    racingGreen: cssColors.racingGreen,
    grayNickel: cssColors.grayNickel,
    xanadu: cssColors.xanadu,
  },
} as const;
