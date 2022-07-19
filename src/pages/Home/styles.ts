import styled from 'styled-components';

export const HomeContainer = styled.main`
   width: 100%;
   display: flex;
   flex-direction: column;
`;
export const BrandSection = styled.section`
  width: 100%;
  min-height: 40.625rem;
  display: flex;
  padding: 5.75rem 0 ;
  @media (max-width: 1350px) {
    background-image: url('/src/assets/brandImageLowOpacity.svg') ;
    background-repeat: no-repeat;
    background-position: center;
    
    & > img {
      display: none;
    }
  }
`;
export const BrandTexts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  & > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
  }
  & > p {
    margin-top: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`;
export const BadgesContainer = styled.div`
   margin-top: 4.125rem;
   display: grid;
   grid-template-columns: auto auto;
   gap: 1rem;
   @media (max-width: 650px) {
     grid-template-columns: auto;
  }
`;

const BADGE_COLOR = {
  yellow: "yellow",
  'yellow-dark': "yellow-dark",
  purple: "purple",
  gray: "base-text",
} as const;

interface IBadgeProps {
  badgeColor: keyof typeof BADGE_COLOR;
}

export const Badge = styled.div<IBadgeProps>`
   display: flex;
   gap: 1rem;
   align-items: center;
   & > span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    background: ${props => props.theme[BADGE_COLOR[props.badgeColor]]};
    color: ${props => props.theme['white']};
   }
`;
