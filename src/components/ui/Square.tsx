interface SquareProps {
    val: string | null,
    index: number
}

export const Square = ( { val }: SquareProps ) => {

    return (

        <div 
        className="w-full h-auto flex justify-center items-center border rounded-md border-slate-600">
            <span className="font-bold text-2xl">
                {val}
            </span>
        </div>

    )

}