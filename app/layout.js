import './globals.css';

export const metadata = {
  title: 'Komal Ribadiya - Full Stack Developer',
  description: 'Portfolio of Komal Ribadiya, a passionate full stack developer specializing in modern web technologies.',
  keywords: 'full stack developer, web development, React, Next.js, Node.js, portfolio',
  authors: [{ name: 'Komal Ribadiya' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}