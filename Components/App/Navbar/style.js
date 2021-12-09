import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    width: 250px;
    display: flex;
    
    flex-direction: column;
    align-items: center;

    

    .logo {
        height: 70px;
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
    }

    .down {
        margin-top: auto;
    }

    .navfooter {
        width: 250px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease-out;

        span {
            padding-left: 10px;
        }
        
        &:hover{
            background-color: rgba(255,255,255,0.2);
            cursor: pointer;
        }
    }

`;

export const Navigation  = styled.div`
    div {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex;

        div {
            width: 250px;
            height: 60px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            transition: 0.3s ease-out;

            &:hover{
                background-color: rgba(255,255,255,0.2);
                cursor: pointer;
            }

            span {
                padding-left: 10px;
            }

        }
    }
`;

export default Container;