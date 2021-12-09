import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 300px;
    height: auto;
    background: #f0f0f0;
    top: 70px;
    right: calc(30px + 40px + 20px);
    display: flex;
    flex-direction: column;

    text-align: center;

    span {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        font-size: 1.1rem;
        padding-bottom: 15px;
    }

    .seeAll {
        padding-top: 10px;
        font-size: .9rem;
        cursor: pointer;
    }


`;

export const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 70px;
    background: ${props => props.read ? 'none' : 'rgba(4,157,217,0.05)'};
    padding: 0px 20px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};

    &:hover{
        background-color: rgba(4,157,217,0.1);
        cursor: pointer;
    }

    .text {
        color: ${props => props.theme.colors.dark}; 
        font-weight: 400;
        font-size: .9rem;
        text-align: left;
    }

    .timeAgo {
        color: ${props => props.theme.colors.primary}; 
        font-weight: 600;
        font-size: .9rem;
        
    }
    
`;

export default Container;