import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#121212] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border-b border-gray-700 pb-8 sm:pb-12 space-y-6">
          <Image
            src="/assets/lineum-white.png"
            alt="DAO Logo"
            width={120} // set logo width
            height={40} // set logo height
            className="mx-auto"
            priority
          />
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            NO TOKENS. NO MIDDLEMEN. JUST SOVEREIGNTY.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            True sovereignty means your work, your rights, your value, secured
            on-chain.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12 space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500 order-2 sm:order-1">
            © 2077 LINEUM. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a
              href="https://github.com/LineumFND"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="GitHub"
            >
              <Image
                src="/assets/github.png"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://x.com/lineum_org"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="X (Twitter)"
            >
              <Image src="/assets/x.png" alt="X" width={24} height={24} />
            </a>
            <a
              href="https://discord.gg/KUEyaUUEAs"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Discord"
            >
              <Image
                src="/assets/discord.png"
                alt="Discord"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://t.me/lineum_org"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Telegram"
            >
              <Image
                src="/assets/telegram2.png"
                alt="Telegram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/@lineum_org"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Tiktok"
            >
              <Image
                src="/assets/telegram2.png" // 🔄 replace with tiktok.png when available
                alt="Tiktok"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lineum-foundation-710b13380?trk=contact-info"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Linkedin"
            >
              <Image
                src="/assets/telegram2.png" // 🔄 replace with linkedin.png
                alt="Linkedin"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.reddit.com/user/lineum_org/"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Reddit"
            >
              <Image
                src="/assets/telegram2.png" // 🔄 replace with reddit.png
                alt="Reddit"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
