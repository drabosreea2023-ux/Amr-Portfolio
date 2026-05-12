import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amr-abdallah.netlify.app'),
  title: 'Amr Abdallah | DevOps Engineer',
  description: 'Portfolio of Amr Abdallah Abosreea, a DevOps Engineer specializing in Cloud Infrastructure, Automation, and CI/CD pipelines.',
  keywords: ['DevOps Engineer', 'Cloud', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Amr Abdallah Abosreea', 'Egypt', 'Portfolio'],
  authors: [{ name: 'Amr Abdallah Abosreea' }],
  openGraph: {
    title: 'Amr Abdallah Abosreea | DevOps Engineer',
    description: 'Portfolio of Amr Abdallah Abosreea, a DevOps Engineer specializing in Cloud Infrastructure, Automation, and CI/CD pipelines.',
    url: 'https://yourdomain.com', // استبدله برابط الموقع بعد الرفع
    siteName: 'Amr Abdallah Portfolio',
    images: [
      {
        url: '/myImg.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ضفنا scroll-smooth هنا عشان يطبق على الموقع كله
    <html lang="en" className="scroll-smooth">
      <body className=" text-white font-sans selection:bg-indigo-300 selection:text-[#14005c] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}


