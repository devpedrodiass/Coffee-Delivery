import styled from 'styled-components';

export const LayoutContainer = styled.div`
    padding: 2rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: padding 0.2s;

    @media (max-width: 1350px) {
        padding: 2rem 7rem;
    }
    @media (max-width: 1024px) {
        padding: 2rem 5rem;
    }
    @media (max-width: 768px) {
        padding: 2rem 3rem;
    }
    @media (max-width: 560px) {
        padding: 2rem 1rem;
    }
`;
