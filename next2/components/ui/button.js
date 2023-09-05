import Link from "next/link";
import theme from './button.module.css'

const Button =(props)=>{return<Link className={theme.btn} href={props.link}>{props.children}</Link>}
export default Button;