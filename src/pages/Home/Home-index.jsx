import accommodations from '../../assets/Datas/logements.json'
import bannerImg from '../../assets/Images/background-banner.png'
import './home.scss'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="home_container">
        <Banner img={bannerImg} text="Chez vous, partout et ailleurs" />
        <div className="cards_accommodation_container">
          {accommodations.map((accommodation, id) => (
            <div className="card_accommodation" key={id}>
              <Link
                className="card_accommodation_link"
                to={`/accommodation/${accommodation.id}`}
              >
                <Card
                  cover={accommodation.cover}
                  title={accommodation.title}
                  alt={accommodation.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
