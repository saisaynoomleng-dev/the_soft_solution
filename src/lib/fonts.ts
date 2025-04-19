import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    { path: '../app/fonts/Poppins-Black.ttf', style: 'normal', weight: '900' },
    {
      path: '../app/fonts/Poppins-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    { path: '../app/fonts/Poppins-Bold.ttf', style: 'normal', weight: '700' },
    { path: '../app/fonts/Poppins-Medium.ttf', style: 'normal', weight: '600' },
    {
      path: '../app/fonts/Poppins-Regular.ttf',
      style: 'normal',
      weight: '500',
    },
    { path: '../app/fonts/Poppins-Light.ttf', style: 'normal', weight: '400' },
    { path: '../app/fonts/Poppins-Thin.ttf', style: 'normal', weight: '300' },
  ],
  variable: '--font-poppins',
});
