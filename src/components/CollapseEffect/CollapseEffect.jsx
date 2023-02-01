import Arrow from "../../assets/Images/vectorBas.svg";
import "../../components/CollapseEffect/CollapseEffect.css"

export default function collapseEffect (ruleWord, ruleText) {
    return (
        <div className="rules_container">
            <div className="rule">
                <p className="rule_word">{ruleWord}</p>
                <span src={Arrow} className="arrow"></span>
                <div className="rule_text_container">
                    <p className="rule_text">{ruleText}</p>
                </div>
            </div>
        </div>
    );
}