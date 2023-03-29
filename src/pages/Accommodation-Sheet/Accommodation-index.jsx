import './Accommodation.css'
import { useLoaderData } from 'react-router-dom'
import Profil from '../../components/Profil/Profil'
import Rate from '../../components/Rate/Rate'
import Tag from '../../components/Tag/Tag'
import Carrousel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/CollapseEffect/CollapseEffect'

export default function AccommodationSheet(accommodationData) {
  const accommodation = useLoaderData()

  return (
    <div key={accommodationData.id} className="sheet_container">
      <Carrousel slides={accommodation.pictures} className="slider_container" />
      <section className="sheet_info_container">
        <div className="title_tag_container">
          <div className="title_container">
            <h1 className="title">{accommodation.title}</h1>
            <h3 className="location">{accommodation.location}</h3>
          </div>
          <div className="tags_container">
            {accommodation.tags.map((tag) => (
              <Tag key={tag} tags={tag} />
            ))}
          </div>
        </div>
        <div className="rate_profil_container">
          <div className="profil_container_index">
            <Profil
              profilName={accommodation.host.name}
              profilPic={accommodation.host.picture}
            />
          </div>
          <div className="rate_container_index">
            <Rate rate={accommodation.rating} />
          </div>
        </div>
      </section>
      <section className="sheet_collapse_container">
        <Collapse className="acc_collapse" ruleTitle="Description">
          {accommodation.description}
        </Collapse>
        <Collapse className="acc_collapse_list" ruleTitle="Equipements">
          {accommodation.equipments.map((text) => (
            <li className="collapse_list" key={text}>
              {text}
            </li>
          ))}
        </Collapse>
      </section>
    </div>
  )
}
