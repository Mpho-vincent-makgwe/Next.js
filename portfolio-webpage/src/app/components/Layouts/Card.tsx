const CenterCard =(props:any)=>{
    return(
        <div>
            <div className="flex justify-center items-center h-full"><div className="hover:bg-gray-200 p-4 rounded-lg">{props.children}</div>
                
            </div>
        </div>
        
    )
}
export default CenterCard;