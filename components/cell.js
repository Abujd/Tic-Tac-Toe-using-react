import react from 'react'

export default function Cell(props){
    return(
        <>
            <div className={`${props.cssClass} text-[#fff] h-[100px] w-[100px] flex items-center justify-center text-[20px] font-bold`}>
                {props.state}
            </div>
        </>
    )
}