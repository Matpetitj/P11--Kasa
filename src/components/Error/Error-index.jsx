import { Link } from "react-router-dom";
import "../../Utils/style-page/index.css";
import "./Error.css";
// import PropTypes from 'prop-types';
// import colors from "../../Utils/style/colors";
// import styled from 'styled-components';

function ErrorComponent() {
	return (
		<div className="error_container">
    		<p className="error_code">404</p>
			<p className="error_advertisement">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_link_home">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

// const ErrorContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	margin: 22px 6%;
// 	color: ${colors.primaryColor};
// `
// const ErrorCode = styled.p`
// 	font-size: 96px;
// 	font-weight: 700;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin: 12rem 0 1rem 0;
// 	@media screen and (min-width: 769px) {
// 		font-size: 288px;
// 		margin: 0;
// 	}
// `
// const ErrorAdvertisment = styled.p`
// 	display: flex;
// 	align-items: flex-end;
// 	justify-content: center;
//     text-align: center;
//     font-size: 18px;
//     font-weight: 500;
//     margin: 0 11%;
// 	@media screen and (min-width: 769px) {
// 		font-size: 36px;
// 		margin: 0;
// 	}
// `
// const ErrorLinkHome = styled.a`
// 	display: flex;
// 	align-items: flex-end;
// 	justify-content: center;
// 	text-decoration: none;
// 	font-size: 14px;
// 	font-weight: 500;
// 	margin-top: 9rem;
// 	&:hover,
// 	&:focus {
// 		text-decoration-line: underline;
// 	}
// `

// function ErrorComponent ({ code, advertisment, link }) {
// 	return (
// 		<ErrorContainer>
// 			<ErrorCode>404</ErrorCode>
// 			<ErrorAdvertisment>Oups! La page que vous demandez n\'existe pas.</ErrorAdvertisment>
// 			<ErrorLinkHome to="/" isFullLink>Retourner sur la page d\'accueil</ErrorLinkHome>
// 		</ErrorContainer>
// 	)
// }

// ErrorComponent.propTypes = {
// 	code: PropTypes.string.isRequired,
// 	advertisment: PropTypes.string.isRequired,
// 	link: PropTypes.string.isRequired,
// }

export default ErrorComponent

