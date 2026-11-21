import { createTheme } from '@mui/material/styles';

// MUI 深色主题：palette 与 index.css 的 CSS 变量、tailwind.config.js 保持一致
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00E5FF', contrastText: '#0A0E1A' },
    secondary: { main: '#7C4DFF', contrastText: '#FFFFFF' },
    error: { main: '#FF2E97', contrastText: '#FFFFFF' },
    background: { default: '#0A0E1A', paper: '#121A2E' },
    text: { primary: '#E6EDF7', secondary: '#8B9AB3' },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#0A0E1A', color: '#E6EDF7' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22, paddingBlock: 10 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { background: 'rgba(0,229,255,0.08)', color: '#E6EDF7', border: '1px solid rgba(0,229,255,0.22)' },
      },
    },
  },
});

export default theme;
