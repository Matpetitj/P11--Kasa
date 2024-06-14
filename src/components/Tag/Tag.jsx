import './tag.scss'

export default function Tag(props) {
  return (
    <div className="tag_container">
      <span className="tag_text">{props.tags}</span>
    </div>
  )
}
