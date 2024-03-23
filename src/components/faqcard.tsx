export default function FaqCard(props:{question:string,answer:string}){
    return <div className="bg-white md:h-[60vh] rounded-xl opacity-15 mt-10 mx-5 md:w-[20vw]">
        {props.question}
        {props.answer}
    </div>

}