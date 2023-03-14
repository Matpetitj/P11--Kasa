import './Accomodation.css'
import accomodations from '../../assets/Datas/logements.json'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Profil from '../../components/Profil/Profil'
import Rate from '../../components/Rate/Rate'
import Tag from '../../components/Tag/Tag'
import Carrousel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/CollapseEffect/CollapseEffect'
import Error from '../Error/Error-index'

export default function AccomodationSheet() {
  const { id } = useParams()

  const [accomodation, setAccomodation] = useState({
    tags: [],
    host: {},
    pictures: [],
    equipments: [],
  })
  useEffect(() => {
    setAccomodation(
      accomodations.find((item) => {
        return item.id === id
      })
    )
  }, [id])

  if (!accomodation) {
    return <Error />
  }

  return (
    <div key={id} className="sheet_container">
      <Carrousel slides={accomodation.pictures} className="slider_container" />
      <section className="sheet_info_container">
        <div className="title_tag_container">
          <div className="title_container">
            <h1 className="title">{accomodation.title}</h1>
            <h3 className="location">{accomodation.location}</h3>
          </div>
          <div className="tags_container">
            {accomodation.tags.map((tag) => (
              <Tag key={tag} tags={tag} />
            ))}
          </div>
        </div>
        <div className="rate_profil_container">
          <div className="profil_container_index">
            <Profil
              profilName={accomodation.host.name}
              profilPic={accomodation.host.picture}
            />
          </div>
          <div className="rate_container_index">
            <Rate rate={accomodation.rating} />
          </div>
        </div>
      </section>
      <section className="sheet_collapse_container">
        <Collapse
          className="acc_collapse"
          ruleTitle="Description"
          ruleText={accomodation.description}
        />
        <Collapse
          className="acc_collapse_list"
          ruleTitle="Equipements"
          ruleText={accomodation.equipments.map((text) => (
            <p className="collapse_list" key={text}>
              {text}
            </p>
          ))}
        />
      </section>
    </div>
  )
}
