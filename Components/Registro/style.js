import styled from 'styled-components';

const Container = styled.div`
    background-color: red;
`;

export const InputRegister = styled.div`
    margin-top: 20px;

    .label {
        color: ${props => props.theme.colors.primary};
    }

    .input {
        margin-top: 5px;
        width: 400px;
    }
`;

export const NextButton = styled.div`
    width: 400px;
    height: 50px;
    color: white;
    margin-top: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;


export default Container;