import "../../components/CollapseEffect/CollapseEffect.css";
import {useState, useRef, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function CollapseEffect ({ruleTitle, ruleText}) {
    //function callback onclick
    const [open, setOpen] = useState(false);

    const toggleState = () => {
        setOpen(!open);
    };

    return (
        <div className="rules_container">
            <div className="rule_title_container" onClick={toggleState}>
                <h2 className="rule_title">{ruleTitle}</h2>
                <FontAwesomeIcon icon={ faChevronDown } className="chevron"/>
            </div>
            <div className="rule_text_container">
                {open && 
                    <p className="rule_text">{ruleText}</p>
                }
            </div>
        </div>
    );
}

