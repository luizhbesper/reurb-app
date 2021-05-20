import styled from 'styled-components';

const Container = styled.div`
    width: calc(100vw - 250px);
    padding: 0px 30px;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    box-shadow: 0 2px 0 rgba(0,0,0,0.05);

    .searchBar {
        background-color: ${props => props.theme.colors.light};
        border: none;
        height: 40px;
        width: 30vw;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        

        .icon {
            margin: 0px 10px;
        }

        input{
            background: none;
            border: none;
            height: 40px;
            width: calc(30vw - 44px);
            padding-left: 10px;

            &:focus{
                outline: 3px solid ${props => props.theme.colors.primary};
            }
            

        }


    }

`;

export default Container;