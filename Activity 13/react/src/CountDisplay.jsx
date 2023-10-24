export default function CountDisplay({count}){
    return(
        <>
            
            <div className="card mx-auto p-3" style={{width: "70%"}}>
                <h3 className="text-center">{count}</h3>
            </div>
        </>
    )
}