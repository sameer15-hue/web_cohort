interface buttonprops{
    size:"sm"|"lg"|"md",
    startsymbol?:any,
    text:string,
    variant:"primary"|"secondary",
    onClick():any
}
const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
}
function  Button(props:buttonprops){
    return <button className={variantStyles[props.variant]+" " +sizeStyles[props.size]}>{props.text}</button>
}
<Button variant="primary" size="lg"  text="share" onClick={()=>{}} />
export default Button;