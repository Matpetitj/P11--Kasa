// import Arrow from "../../assets/Images/flecheBas.svg";
import "../../components/CollapseEffect/CollapseEffect.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-solid fa-chevron-up } from '@fortawesome/free-solid-svg-icons';

// const arrow = <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-up" />;

export default function collapseEffect ({ruleTitle, ruleText}) {
    return (
        <div className="rules_container">
            <div className="rule_title_container">
                <h2 className="rule_title">{ruleTitle}</h2>
                {/* <span src={arrow} className="arrow"></span> */}
                <p className="arrow">arrow</p>
            </div>
                
            <div className="rule_text_container">
                <p className="rule_text">{ruleText}</p>
            </div>
        </div>
    );
}