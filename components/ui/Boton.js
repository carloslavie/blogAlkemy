import styled from '@emotion/styled';

const Boton = styled.button`
    font-weight:300;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .4rem 2rem;
    margin: 1rem ;
    text-align:center;
    background-color: #DA552F;
    color: white;
    
    &:hover{
        cursor:pointer;
    }
    @media only screen and (max-width:600px){
        padding:2%;
        margin:2%;       
    }
`;

export default Boton;