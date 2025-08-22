import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Método Palavra Mágica - Aprender a Ler",
  description: "Método 100% garantido para ensinar crianças a ler com foco em leitura, sílabas e coordenação motora",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/wj97c36bpn.js" async type="module"></script>
        <script src="https://fast.wistia.com/embed/cb0eoep9ej.js" async type="module"></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            wistia-player[media-id='wj97c36bpn']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wj97c36bpn/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top:177.78%; 
            }
            wistia-player[media-id='cb0eoep9ej']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/cb0eoep9ej/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top:177.78%; 
            }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1819807609417851');
            fbq('track', 'PageView');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function() {
              const botoesCheckout = Array.from(document.querySelectorAll("button, a"))
                .filter(el => {
                  const txt = el.innerText.toLowerCase();
                  return txt.includes("comprar agora") || txt.includes("eu quero esse");
                });

              botoesCheckout.forEach(btn => {
                btn.addEventListener("click", function() {
                  fbq('track', 'InitiateCheckout');
                });
              });
            });
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1819807609417851&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
