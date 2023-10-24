export default function Footer ({copyright}){
    return(
        <div className="container-fluid" style={{backgroundColor:"#242948"}}>
            <h2 className="text-light text-center p-3">{copyright}</h2>
        </div>
    )
}