export default function FaqCard(props:{indx:String,question:string,answer:string}){
    return <div className="backdrop-blur-3xl flex flex-col bg-white h-[30vh]  md:h-[60vh] rounded-xl opacity-15 mt-10 mx-5  md:w-[20vw] border-main-blue border-8">
        <h1 className="text-center">{props.indx}</h1><br></br>
        {props.question}
        {props.answer}
    </div>

}