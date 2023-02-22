import "./Accomodation.css";
import accomodations from "../../assets/Datas/logements.json";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Profil from "../../components/Profil/Profil";
// import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag"
// import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/CollapseEffect/CollapseEffect";

export default function AccomodationSheet (tagText) {
    const {id} = useParams();

    const [accomodation, setAccomodation] = useState({});
    useEffect(() => {
        setAccomodation(accomodations.find(item => {
            return item.id === id
        }))
    },[id])

    return (
        <div key={id} className="sheet_container">
            {/* <Carrousel /> */}
            <section className="sheet_info_container">
                <div className="title_tag_container">
                    <div className="title_container">
                        <h1 className="title" >{accomodation.title}</h1>
                        <h3 className="location">{accomodation.location}</h3>
                    </div>
                    <div className="tag_container">
                        <Tag key={tagText}/>
                        {/* <p className="tag">Tags</p> */}
                    </div>
                </div>
                <div className="rate_profil_container">
                    <div className="profil_container">
                        {/* <Profil 
                            profilName={accomodation.host.name}
                            profilPic={accomodation.host.picture}
                        /> */}
                        <p className="Profil">Profil</p>
                    </div>
                    <div className="rate_container">
                        {/* <Rate 
                            appartRate={accomodation.rating}
                        /> */}
                        <p className="rate">Rate</p>
                    </div>
                </div>
            </section>
            <section className="sheet_collapse_container">
                <Collapse className="acc_collapse"
                    ruleTitle="Description"
                    ruleText={accomodation.description}
                    />
                <Collapse className="acc_collapse"
                    ruleTitle="Equipements"
                    ruleText={accomodation.equipments}
                    />
            </section>
        </div>
    )
}


