export default function Quizcard(props: {domain: string,subDomain:string, completed: boolean, startQuiz?:any}){
    return <div className="p-5 md:h-[30vh] md:w-[25vw] border-[#6117AB] bg-[rgba(82,36,129,0.3)] border-4 mx-5 rounded-2xl flex flex-col my-5 md:my-0">
        <h1 className="font-sarpanch text-white text-xl">{props.domain}</h1>
        <br></br>
        <h2 className="font-sarpanch text-white text-xl">{props.subDomain}</h2>
        <button className="font-sarpanch bg-[#6117AB] text-white rounded-lg p-2 mt-5">{props.startQuiz?"Start Quiz":"Completed"}</button>
    </div>
}