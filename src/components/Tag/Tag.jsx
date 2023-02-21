export default function Tag(tagText) {
	return (
		<div className="tag_container">
			<span className="tag_text">{tagText.tag}</span>
		</div>
	);
}