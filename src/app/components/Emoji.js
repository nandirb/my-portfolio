export const Emoji = props => {
  const className = `emoji tex-${props.size}`
 return  <span
  className={className}
  role="img"
  aria-label={props.label ? props.label : ""}
  aria-hidden={props.label ? "false" : "true"}
>
  {props.symbol}
</span>
}