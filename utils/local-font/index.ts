import NextFont from '@next/font/local';

export const localFont = NextFont({
  src: [
    { path: '../../assets/fonts/pretendard-bold.woff2', weight: 'bold' },
    {
      path: '../../assets/fonts/pretendard-regular.woff2',
      weight: 'normal',
    },
  ],
  variable: '--font-pretendard',
  preload: true,
});
