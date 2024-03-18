import Link from "next/link"

type NavlinkProps = {
    target: string,
    text: string,
    active?: boolean
};

export default function Navlink({target, text, active}:NavlinkProps){
    return <Link href={target}>
        <li className={`${active? "text-main-blue":"text-white"} text-2xl mx-5`}>{text}</li>
    </Link>
}