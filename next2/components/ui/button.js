import Link from "next/link";
import theme from './button.module.css'

const Button =(props)=>{
    if(props.link){
    return<Link className={theme.btn} href={props.link}>{props.children}</Link>}
return(
    <button onClick={props.onClick}>{props.children}</button>)
}
export default Button;