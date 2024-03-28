import axios from "axios";
import { useRouter } from "next/navigation";


export default function Quizcard(props: { domain: string, subDomain: string, completed: boolean}) {
    const router = useRouter();

    function startQuiz(subDomain:any) {

        const emailValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('email'))
            ?.split('=')[1];

        const accessToken = document.cookie
            .split('; ')
            .find(row => row.startsWith('accessToken'))
            ?.split('=')[1];

        axios.post(`https://recruitments-portal-backend.vercel.app/question/${subDomain.toLowerCase()}/${emailValue}`,{}, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                // handle the response here
                console.log(response.data);
                localStorage.setItem('questions', JSON.stringify(response.data));
                localStorage.setItem('domain',JSON.stringify(subDomain.toLowerCase()));
                router.push('/quiz/')
            })
            .catch(error => {
                // handle the error here
            });
    }

    return (
        <div className="p-5 md:h-[30vh] md:w-[25vw] border-[#6117AB] bg-[rgba(82,36,129,0.3)] border-4 mx-5 rounded-2xl flex flex-col my-5 md:my-0">
            <h1 className="font-sarpanch text-white text-xl">{props.domain}</h1>
            <br></br>
            <h2 className="font-sarpanch text-white text-xl">{props.subDomain}</h2>
                <button onClick={() => startQuiz(props.subDomain)} className="font-sarpanch bg-[#6117AB] text-white rounded-lg p-2 mt-5">
                    {!props.completed ? "Start Quiz" : "Completed"}
                </button>
        </div>
    );
}