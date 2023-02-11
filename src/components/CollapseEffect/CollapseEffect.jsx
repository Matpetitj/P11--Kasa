import "../../components/CollapseEffect/CollapseEffect.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function collapseEffect ({ruleTitle, ruleText}) {
    //function callback onclick


    return (
        <div className="rules_container">
            <div className="rule_title_container" onClick="">
                <h2 className="rule_title">{ruleTitle}</h2>
                <FontAwesomeIcon icon={ faChevronDown } className="chevron"/>
            </div>
            <div className="rule_text_container">
                <p className="rule_text">{ruleText}</p>
            </div>
        </div>
    );
}

