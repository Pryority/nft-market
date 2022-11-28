import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { Faucet } from "~~/components/scaffold-eth";

export default function Header() {
  return (
    <footer className="flex flex-col md:py-8 pb-8 items-center w-full">
      <div className="flex flex-row items-center justify-around w-full">
        <div className="flex flex-col">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          Powered by{" "}
            <span className={""}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </div>

        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          showBalance={true}
          chainStatus={{
            smallScreen: "icon",
            largeScreen: "full",
          }}
        />
      </div>
      {/* <Faucet /> */}
    </footer>
  );
}
