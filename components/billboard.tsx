import {  Billboard as BillboardType } from "@/types";

interface BillboardProps{
    data:BillboardType;
    textColor:string
}

const Billboard:React.FC<BillboardProps>=({
    data,textColor
})=>{
    return(
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden text-center" >
            <div
            className="rounded-xl bg-cover aspect-square md:aspect-[2.4/1] overflow-hidden"
            style={{backgroundImage:`url(${data?.imageUrl})`}}
            >
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className={`font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl ${textColor=="white" && "text-white"}`}>
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Billboard;