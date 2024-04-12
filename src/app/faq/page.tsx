"use client";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { useEffect } from "react";
import {isMobile} from 'is-mobile'

export default function Faq(){
    useEffect(()=>{
        if(isMobile()){
            document.body.style.overflow = "auto";
        }
    },[])

    const FAQs:Array<{
        question:string,
        answer:string
    }> = [{
        question:'Can I reattempt a quiz if I accidentally closed my tab or experienced an internet interruption?',
        answer:"If you accidentally closed your tab or experienced an internet interruption, you can simply try attempting again. However, your previous progress will be reset."
    },
        {
            question:'When will I receive further updates about the chapter and its domains?',
            answer:"Updates and information regarding the chapter and its domains will be regularly communicated via WhatsApp and Discord. We recommend checking frequently for the latest news and announcements."
        },
        {
            question:'How many domains can I choose?',
            answer:"There are 3 domains: Technical, Management, and Design. There are several subdomains under each domain. You can choose a maximum of 2 subdomains from each domain."
        },
        {
            question:'What is the best domain to choose?',
            answer:"There is no single \"best\" domain, as the optimal choice depends on your individual strengths, interests, and career goals. We encourage you to explore the different domain options available and select the one(s) that align best with your personal and professional development."
        },
        {
            question:'Do I need previous experience for any domains?',
            answer:"Previous experience is not strictly required for either the tech or management domains. The chapter helps you develop the necessary skills and knowledge, regardless of your prior background.",
        },
        {
            question:'Can I still join a domain as a second-year or third-year student?',
            answer:'Yes, you are still eligible to join the club and select your desired domains. The club welcomes students from all academic years and is committed to supporting your personal and professional growth throughout your academic journey.'
        },
        {
            question:'Can I join domains without attempting the quizzes?',
            answer:'No, you must attempt the quizzes to join the domains. The quizzes are designed to assess your knowledge and skills in the respective domains and ensure that you are adequately prepared to contribute effectively.'
        }
    ]
    return <section className="flex flex-col w-screen items-center justify-center min-h-screen pt-16">
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
            alt="right-lines"
            width={500}
            height={100}
          />

          </div>
        </div>
        <Carousel questions={FAQs}/>
    </section>
}