import styled from 'styled-components';

const Container = styled.div`
    padding: 50px 30px;
    display: flex;
    justify-content: center;

    .profilePic{
        .newPic{
            color: ${props => props.theme.colors.primary};
            margin-top: 10px;
            font-weight: 500;
            cursor: pointer;
        }
    }

    .profileSection {
        margin-left: 100px;

        .userType {
            color: white;
            background: ${props => props.theme.colors.primary};
            text-align: center;
            margin-bottom: 10px;
        }

        .infosSection {
            font-size: 1.2rem;
        }

        .infosSection > div {
            height: 35px;
            display: flex;
            align-items: center;
        }

        .edit{
            margin-top: 20px;
            color: ${props => props.theme.colors.primary};
            border: 2px solid ${props => props.theme.colors.primary};
            height: 35px;
            font-weight: 600;
            font-size: 1.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover{
                background: ${props => props.theme.colors.primary};
                color: white;
            }
        }
    }
`;

export default Container;