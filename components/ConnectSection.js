// ConnectSection.js
import Link from "next/link";
import React from "react";

export default function ConnectSection() {
  return (
    <div id="connect">
      <section className="p-6 bg-slate-800 text-foreground">
        <h2 className="text-2xl text-white font-bold mb-4 text-center md:text-left">Connect</h2>
        <p className="text-muted-foreground text-white text-center mb-6">
          Let&apos;s build networks! Connect with me on social platforms for collaborations, discussions, and updates.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="https://www.instagram.com/manassjaiin" passHref>
            <div className="flex items-center p-4 bg-slate-600 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <img alt="Instagram" src="instagram.png" className="w-6 h-6 mr-3" />
              <span className="text-xl md:text-base text-white overflow-hidden text-ellipsis">manassjaiin</span>
            </div>
          </Link>

          <Link href="https://github.com/manasjaincode" passHref>
            <div className="flex items-center p-4 bg-slate-600 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <img alt="Github-icon" src="github.png" className="w-6 h-6 mr-3" />
              <span className="text-sm md:text-base text-white overflow-hidden text-ellipsis">manasjaincode</span>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/manas110/" passHref>
            <div className="flex items-center p-4 bg-slate-600 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <img alt="linkedin-icon" src="LinkedIn.png" className="w-6 h-6 mr-3" />
              <span className="text-xl md:text-base text-white overflow-hidden text-ellipsis">Manas</span>
            </div>
          </Link>

          <Link href="mailto:manasjaincode@gmail.com" passHref>
            <div className="flex items-center p-4 bg-slate-600 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <img alt="email-icon" src="mail.png" className="w-6 h-6 mr-3" />
              <span className="text-xs md:text-sm text-white overflow-hidden text-ellipsis">manasjaincode@gmail.com</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
