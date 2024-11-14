import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
import "./globals.css";

const nunito = Nunito({
   subsets: ['cyrillic'],
   variable: '--font-nunito',
   weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
   icons: {
      icon: '/logo.png'
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`select-none ${nunito.className}`}>
            {children}
         </body>
      </html>
   );
}
