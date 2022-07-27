import styled from 'styled-components';



export const OrderConfirmedContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  & > footer {
    width: 100%;
    display: flex;
    gap: 6.375rem;
  }
`;

export const PrimaryTitle = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${props => props.theme['yellow-dark']};
`;

export const SecondarySubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
`;

export const OrderConfirmedGradientBorder = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  padding: 0.06rem;
  border-radius: 0.375rem 2.25rem;
  background: linear-gradient(to right, ${props => props.theme['gradient-yellow']}, ${props => props.theme['gradient-purple']});
`

export const DeliveryInformationCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  border-radius: 0.375rem 2.25rem;

  background: ${props => props.theme['white']};

`;

export const LocaleContainer = styled.div`
  
`;

export const DeliveryTimeContainer = styled.div`
  
`;

export const PaymentMethodContainer = styled.div`
  
`;

export const OrderImage = styled.img`
  width: 50%;
  height: 18.3125rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;
