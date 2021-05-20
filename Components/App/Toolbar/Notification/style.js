import styled from 'styled-components';

const Container = styled.div`
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NotificationsNumber  = styled.div`
    width: 24px;
    height: 24px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    display: ${props => props.notifications > 0 ? 'inherit' : 'none'};
`;

export default Container;