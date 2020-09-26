import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.Background ? "none" : "rgba(10, 10, 10, 0.96)"};
    border: ${props => props.Background ? "none" : "1px solid darkslategrey;"};
    padding: 5px;
    border-radius: 10px;
    height: 410px;
    width: 400px;   
    color: var(--white);

    font-family: var(--fontUsers);

    display: flex;
    flex-direction: column;
    align-items: center;    

  
`;

export const Header = styled.div`
    height: 130px;
    width: 400px;
    padding:10px;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content:space-between;
    

`;
export const InfosLol = styled.div`
    height: 120px;
    width: 180px;

    position: absolute;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
`;

export const InfosInstagram = styled(InfosLol)`
    visibility: hidden;
`;

export const InfosWrapper = styled.div`
    height: 120px;
    width: 180px;

    font-size: 16px;

    img {
        width: 110px;
        height: 110px;

        align-self: center;
        border-radius: 5px;
    }
    
    &:hover {
        
        ${InfosLol}{
            visibility: hidden;           
        }
        ${InfosInstagram}{
            visibility: visible;       
        }
    }
`;

export const EmblemsRanked = styled.div`
    height: 100px;
    width: 140px;

    font-size: 14px;
    color: var(--grey);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
`;

export const RankImg = styled.img`
    height: 80px;
    width: 75px;
`;

export const RankImgMini = styled(RankImg)`
    height: 60px;
    width: 55px;
`;

export const Routes = styled.div`
    width: 133px;
    height:40px;

    align-self: flex-start;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap:10px;

    img {
        height: 30px;
        width: 30px;
    }
`;

export const Champs = styled.div`
    height:105px;
    width: 400px;
    
    margin-left: 0.5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

export const ChampsImg = styled.img`
    height: 85px;
    width: 85px;
    border-radius: 50%;
    border: 2px solid var(--gold);

`;

export const ChampsImgMini = styled(ChampsImg)`
    height: 65px;
    width: 65px;
    border: 2px solid var(--blue);

    align-self: flex-end;
`;

export const Bio = styled.h3`
    width: 300px;
    font-size: 17px;
    font-weight: normal;
    text-align: center;

    margin-top: 30px;
`;
