import "./Accomodation.css";
import accomodations from "../../assets/Datas/logements.json";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Profil from "../../components/Profil/Profil";
// import Rate from "../../components/Rate/Rate";
// import Tag from "../../components/Tag/Tag"
// import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/CollapseEffect/CollapseEffect";

export default function AccomodationSheet () {
    const {id} = useParams();
    const navigate = useNavigate();

    const [accomodation, setAccomodation] = useState();
    useEffect(() => {
        setAccomodation(accomodations.find(item => {
            return item.id === id
        }))
    },[id])

    // const [takeAppart, setTakkenAppart] = useState();
    // useEffect (() => {
    //     const getData = async () => {

    //     }
    // })

    return (
        <div key={id} className="sheet_container">
            {/* <Carrousel /> */}
            <section className="sheet_info_container">
                <div className="title_tag_container">
                    <div className="title_container">
                        <h1 className="title">{accomodation.title}</h1>
                        <h3 className="location">{accomodation.location}</h3>
                    </div>
                    <div className="tag_container">
                        {/* <Tag /> */}
                        <p className="tag">Tags</p>
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
                <Collapse 
                    ruleTitle="Description"
                    ruleText="Description Text"
                    />
                <Collapse 
                    ruleTitle="Equipements"
                    ruleText="Equipement_text"
                    />
            </section>
        </div>
    )
}


