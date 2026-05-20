import { Roboto } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Sweet Home Cookie Co.',
  description: 'Gourmet, beautifully crafted custom cookies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="font-sans antialiased text-cookie-dark bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer layout goes here */}
      </body>
    </html>
  );
}