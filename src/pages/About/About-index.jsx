import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/Images/about-banner.png";
// import CollapseEffect from "../../components/CollapseEffect/CollapseEffect";
// import Rules from "../../assets/Datas/rulesAbout.json";

export default function About() {
	return (
			<div className = "home_container">
				<Banner img={bannerImg}/>
				{/* {Rules.map((rule, id) => (
					<CollapseEffect
						key={id}
						ruleWord={rule.ruleWord}
						ruleText={rule.ruleText}
						aboutStyle="about-style"
					/>
				))} */}
			</div>
	);
}