'use client';

import Image from "next/image";
import { useState } from "react";

export default function ScrollIndicator() {

    const [orientation, setOrientation] = useState(true);

    return (
      <div className="fixed bottom-5 w-full flex justify-center items-center">
        <Image 
          src={orientation ? "/graphics/scrollindicator.svg" : "/graphics/scrollindicator-rot.svg"}
          alt="scroll-indicator" 
          width={50} 
          height={50} 
          onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })}
          onMouseOver={() => setOrientation(false)}
          onMouseOut={() => setOrientation(true)}
        />
      </div>
    );
}