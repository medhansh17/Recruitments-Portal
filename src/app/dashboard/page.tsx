import Quizcard from "@/components/quizcard"

const completed = ['']

export default function Dashboard(){
    return (
        <main className="pt-24 md:pt-20">
            <section className="md:h-[42vh] w-screen px-5  md:px-20">
                <div className=" h-full w-full flex flex-col justify-center">
                    <h1 className="ml-5 text-white text-center md:text-left font-striger text-3xl">Pending Quizzes</h1>
                    <div className="flex flex-col md:flex-row my-2">
                        <Quizcard domain="Tech" subDomain={"AI/ML"} completed={false} startQuiz={()=>{}}/>
                        <Quizcard domain="Tech" subDomain={"Web"} completed={false} startQuiz={()=>{}}/>
                        <Quizcard domain="Management" subDomain={"Events"} completed={false} startQuiz={()=>{}}/>
                    </div>


                </div>

            </section>
            <section className="md:h-[42vh] w-screen  md:px-20">
                <div className=" h-full w-full flex flex-col justify-center">
                    <h1 className="ml-5 text-white text-center md:text-left font-striger text-3xl">Completed Quizzes</h1>
                    <div className="flex flex-col md:flex-row my-2">
                        <Quizcard domain="Management" subDomain={"Outreach"} completed={true}/>
                        <Quizcard domain="Design" subDomain={"Graphic"} completed={true}/>

                    </div>


                </div>
            </section>        
        </main>
    )
}