import localFont from 'next/font/local';

// Oldschool PC Fonts
export const ibmVGA = localFont({
  src: '../../public/fonts/oldschool/Web437_IBM_VGA_8x16.woff',
  variable: '--font-ibm-vga',
  display: 'swap',
});

export const ibmBIOS = localFont({
  src: '../../public/fonts/oldschool/Web437_IBM_BIOS.woff',
  variable: '--font-ibm-bios',
  display: 'swap',
}); 