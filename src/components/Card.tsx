import styled from 'styled-components';
import img from '../../public/img.png'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: 500px;
    height: 500px;

    input[type="email"],
    input[type="password"] {
        width: 400px; 
        height: 40px; 
        margin: 10px; 
        font-size: 16px;
    }

    button {
        width: 400px; 
        height: 40px; 
    }   
`;

interface ICard {
    id: number;
    mensagem: string; 
    onClick?: () => void;
}

function Card({ id, mensagem, onClick }: ICard) {
    return (
        <>   
        <Box>  
            <img src={img} alt="" width={200} height={200} />
            <p>Seu id é: {id}. {mensagem}</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit" onClick={onClick}>LOGAR</button>
        </Box>
        </>
    );
}

export default Card;
