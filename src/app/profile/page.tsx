'use client'

import { useEffect, useState } from "react"
import isMobile from "is-mobile"
import { useRouter } from "next/navigation"
import axios from "axios";
import Button from "@/components/button";

export default function Profile(){
    const [photosrc, setPhotosrc] = useState<string | undefined>('')
    const [details, setDetails] = useState<any>({Domains: {management: [], tech: [], design: []}})
    
    const router = useRouter();

    function handleSignout() {
      document.cookie = "email=; path=/";
      document.cookie = "accessToken=; path=/";
      document.cookie = "photoURL=; path=/";
      router.push("/login");
    }
  

    async function getDetails(){
        const emailValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("email"))
        ?.split("=")[1];
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken"))
        ?.split("=")[1];
        const photoURL = document.cookie
        .split("; ")
        .find((row) => row.startsWith("photoURL"))
        ?.split("=")[1];
        setPhotosrc(photoURL)

        try{
            const response = await axios.get<Response[]>(`https://recruitments-portal-backend.vercel.app/profile/${emailValue}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          data: {
            email: emailValue
          }
        });
        console.log(response.data)
        setDetails(response.data)
        }
        catch(error:any){

        }

    }


    useEffect(() => {
        if(isMobile()){
            //redirect to home
            router.push('/')
        }
        else{
            getDetails()
        }
    },[])



    return <main className="w-screen h-screen flex items-center justify-center text-white">
      <section className="mt-16 backdrop-blur-sm w-1/2 h-4/5 border-2 border-main-pink  border-4 rounded-xl flex flex-col items-center px-10">
        <h1 className="text-3xl font-bold text-white font-striger my-5">Profile</h1>
        <div>
          <img src={photosrc} alt="profile" className="rounded-full size-36 my-5"  />
        </div>
        <div className="font-sarpanch text-main-pink text-2xl">
        <p>Email : <span className="text-white">{details.EmailID}</span></p>
        <p>Name : <span className="text-white">{details.Student_Name}</span></p>
        <p>Mobile Number: <span className="text-white">{details.Mobile_No}</span></p>
        <p>Selected Domains: </p>
        <ul className="list-inside text-white flex justify-between">
        {[details.Domains.management?.join(', '), details.Domains.tech?.join(', '), details.Domains.design?.join(', ')].filter(Boolean).join(', ')}
        </ul>


        </div>
        <div className="flex justify-center w-full mt-10">
          <Button text="Logout" onClick={handleSignout}/>
          </div>
      </section>
    </main>
}