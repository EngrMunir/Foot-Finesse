import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import { Roboto } from 'next/font/google';
import AuthProvider from './services/AuthProvider';
import Navbar from '@/components/Navbar';

const roboto = Roboto({
  subsets: ['latin'], // Ensure the correct character subsets are used
  weight: ['400', '500', '700'], // Choose the font weights you need
});
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// const a = 5;

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className={roboto.className}>
        <AuthProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
