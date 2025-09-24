export const colors = {
  primary: '#4A7C59',      // Green
  accent: '#FF6B35',        // Orange
  background: '#FFFFFF',    // White
  surface: '#F8F9FA',       // Light gray
  text: '#2C3E50',          // Dark gray
  textSecondary: '#6C757D', // Medium gray
  border: '#E9ECEF',        // Border gray
  success: '#28A745',       // Success green
  warning: '#FFC107',       // Warning yellow
  error: '#DC3545',         // Error red
  info: '#17A2B8',          // Info blue
  light: '#F8F9FA',         // Light background
  dark: '#343A40',          // Dark text
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const fontWeight = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const shadows = {
  sm: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const layout = {
  headerHeight: 60,
  tabBarHeight: 80,
  buttonHeight: 48,
  inputHeight: 48,
  cardPadding: spacing.md,
  screenPadding: spacing.md,
};

export const animation = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
