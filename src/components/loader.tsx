import {Vortex} from "react-loader-spinner";

type LoaderProps = {
    visibility: boolean;
};

export default function Loader({ visibility }: LoaderProps) {
    return (
        <div
            className={`${
                visibility ? "block" : "hidden"
            } fixed z-50 inset-0 overflow-hidden flex justify-center items-center`}
        >
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="z-50">
                <Vortex
                    visible={visibility}
                    height={100}
                    width={100}
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['#FF0DF5','#6117ab','#150B23','#FF0DF5','#6117ab','#150B23']}
                />
            </div>
        </div>
    );
}
