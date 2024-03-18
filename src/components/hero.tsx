export default function Hero(){
    return (
        <section className="flex flex-col items-center justify-center h-screen border-red-700 border-2  text-white pt-10">
            <div className="flex flex-col items-center justify-center font-striger my-10">
                <h1 className="text-8xl text-center ">TRIUMPH</h1>
                <div className="flex flex-row items-center justify-center">
                    <img src="/graphics/left-lines.svg" alt="left-lines" className="w-1/4    h-auto"/>
                    <h2 className="text-4xl text-center text-white mx-5 font-sarpanch font-bold">IN THE</h2>
                    <img src="/graphics/right-lines.svg" alt="right-lines" className="w-1/4 h-auto"/>
                </div>
                <h1 className="text-8xl text-center">UNKNOWN</h1>
            </div>
            <div className="flex flex-col items-center justify-center font-sarpanch text-2xl my-10">
                    Introducing the best chapter
            </div>
            <div className="flex flex-row items-center justify-center font-sarpanch">
            Where innovation meets technology: we forge tech <br></br>
that transcends from ordinary: into realms of the unknown
                </div>

        </section>

    )
}