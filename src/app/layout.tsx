import './globals.css';

export const metadata = {
  title: 'Duit Raya Calculator',
  description: 'Calculate your Duit Raya money gifts for Hari Raya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}