import './globals.css';
import { poppins } from '@/lib/fonts';
import { SanityLive } from '@/sanity/lib/live';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | The Soft Solution',
    default: 'The Soft Solution',
  },
  description:
    'The Soft Solution is the software company emphasizing on developing both web apps and mobile apps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
