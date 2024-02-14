import styled from 'styled-components';
import img from '../../public/img.png';
import { useState } from 'react';

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



function Card({ id, mensagem }: ICard) {

    const [value, setValue] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function contador() {
        setValue(value + 1);
        alert("Bem vindo(a)");
    }

    return (
        <>   
        <Box>  
            <img src={img} alt="" width={200} height={200} />
            <p>Seu id é: {id}. {mensagem} {value}</p>
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type="submit" onClick={() => contador()}>LOGAR</button>
        </Box>
        </>
    );
}

export default Card;
