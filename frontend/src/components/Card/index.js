import { Container, Header, InfosWrapper, InfosLol, InfosInstagram, EmblemsRanked, RankImg, RankImgMini, Routes, Champs, ChampsImg, ChampsImgMini, Bio } from './styles.js';
import React from 'react';
//Serviços
import { iconURL, emblemURL, routeURL, championURL } from '../../services/publicAssetsApi';

export default function Card({ userCard, noBackground }) {
    console.log(userCard);

    return (
        <Container Background={noBackground}>
            <Header>
                <InfosWrapper>
                    <InfosLol>
                        <img src={iconURL(userCard.profileIconId)} alt="icone de invocador" />
                        <strong>{userCard.username}</strong>
                        <p>{userCard.summonerLevel}</p>
                    </InfosLol>

                    <InfosInstagram>
                        <img src={userCard.avatarInstagram} alt="icone de invocador" />
                        <strong>{userCard.userInstagram}</strong>
                        <p>{userCard.age}</p>
                    </InfosInstagram>

                </InfosWrapper>
                <EmblemsRanked>
                    <RankImg src={emblemURL(userCard.league_obj.solo.tier)} alt={userCard.league_obj.solo.tier} />
                    <p>Solo</p>

                    <RankImgMini src={emblemURL(userCard.league_obj.flex.tier)} alt={userCard.league_obj.flex.tier} />
                    <p>Flex</p>
                </EmblemsRanked>
            </Header>

            <Routes>
                <img src={routeURL(userCard.route)} alt={`Rota do ${userCard.route}`} />
                <img src={routeURL(userCard.route2)} alt={`Rota do ${userCard.route2}`} />
            </Routes>

            <Champs>
                <ChampsImgMini src={championURL(userCard.champion2)} alt={userCard.champion2} />
                <ChampsImg src={championURL(userCard.champion)} alt={userCard.champion} />
                <ChampsImgMini src={championURL(userCard.champion3)} alt={userCard.champio3} />
            </Champs>
            <Bio>{userCard.bio}</Bio>

        </Container>
    );

}