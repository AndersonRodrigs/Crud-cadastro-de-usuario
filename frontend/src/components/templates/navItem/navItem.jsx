import { Link } from "react-router-dom"

export default function itemMenu(props) {
  return (
    <Link to={props.href}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>
  )
}
