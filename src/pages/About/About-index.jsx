import Banner from '../../components/Banner/Banner'
import bannerImg from '../../assets/Images/about-banner.png'
import CollapseEffect from '../../components/CollapseEffect/CollapseEffect'
import Rules from '../../assets/Datas/rulesAbout.json'
import './about.scss'

export default function About() {
  return (
    <div className="about_container">
      <Banner img={bannerImg} />
      {Rules.map((rule, id) => (
        <CollapseEffect key={id} ruleTitle={rule.ruleTitle}>
          <p>{rule.ruleText}</p>
        </CollapseEffect>
      ))}
    </div>
  )
}
