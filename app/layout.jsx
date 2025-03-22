import localFont from 'next/font/local'
import "./globals.css";


const myFont = localFont({ src: '../public/fonts/Frozito.ttf' })


export const metadata = {
  title: "The Cool Room",
  description: "The $cool token is too cool for Telegram. To join the private group chat on X, send a message to @boredelonmusk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer src="../vendor/Snow.js"></script>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
