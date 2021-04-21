import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navegacion from './Navegacion';


const ContendedorHeader = styled.div`
    max-width: 1200px;
    width:95%;
    margin:0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size:4rem;
    line-height:0;
    font-weight:700;
    font-family:'Roboto Slab', serif;
    margin-right:2rem;
    :hover{
        cursor:pointer;
    }
`;

const Header = () => {

    
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3); //para usar los custom css declarados en layout
                padding: 1rem 0;
            `}
        >
            <ContendedorHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>Blog</Logo>
                    </Link>
                    
                    <Navegacion />
                </div>

                <div 
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                
                </div>
            </ContendedorHeader>
        </header>
      );
}
 
export default Header;