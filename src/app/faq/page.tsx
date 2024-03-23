"use client";
import FaqCard from "@/components/faqcard";
import Image from "next/image";
export default function Faq(){

    return <section className="flex flex-col w-full items-center justify-center h-screen md:pt-16">
        <div className="flex flex-row items-center justify-center ">
          <div className="w-1/4 h-auto">
          <Image
            src="/graphics/left-lines.svg"
            alt="left-lines"
            width={500}
            height={100}
          />

          </div>
          <h2 className="text-4xl md:text-7xl text-center text-white mx-5 font-striger">
            FAQ
          </h2>
          <div className="w-1/4 h-auto">
          <Image
            src="/graphics/right-lines.svg"
            alt="left-lines"
            width={500}
            height={100}
          />

          </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <FaqCard question="What is IEEECS?" answer="A chapter A chapterA chapterA chapterA chapterA chapter "/>
            <FaqCard question="What is IEEECS?" answer="A chapter A chapterA chapterA chapterA chapterA chapter "/>
            <FaqCard question="What is IEEECS?" answer="A chapter A chapterA chapterA chapterA chapterA chapter "/>
            <FaqCard question="What is IEEECS?" answer="A chapter A chapterA chapterA chapterA chapterA chapter "/>

        </div>

    </section>
}