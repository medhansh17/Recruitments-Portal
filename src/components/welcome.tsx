
export default function Welcome(){
    return <section className="h-screen flex flex-col justify-center items-center border-red-700 border-2">
        <div className="flex flex-row justify-center items-center w-3/4">
            <img src="/graphics/left-lines.svg" alt="left-lines" className="w-1/3   h-1/10"/>
                <h1 className="text-6xl text-center text-white mx-5 font-striger">Welcome</h1>
            <img src="/graphics/right-lines.svg" alt="right-lines" className="w-1/3 h-1/10"/>
        </div>
        <div className="h-10"></div>
        <div className="w-3/4 font-sarpanch text-white">
        <p className="text-center text-xl">
        Experience our IEEE Computer Society (IEEE-CS) chapter VIT, where innovation <br/> meets exploration. Join us as we delve into the exciting world of  technology, where <br/> we empower seekers like you to unearth technological  treasures.
        </p>
        </div>

    </section>
}