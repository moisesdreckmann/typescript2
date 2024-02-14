import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../api';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
  height: 400px;
  background-color: green;
  font-size: 25px;
  gap: 30px;
  padding-inline: 20px;
  font-weight: bolder;
`;

const Box2 = styled.div`
  background-color: white;
  margin-top: 30px;
  width: 500px;
  height: 50px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ParagraphBox = styled.div`
  cursor: pointer;
`;

interface UserData {
  email: string;
  name: string;
  balance: string;
}

function Site() {
  const [userData, setUserData] = useState<UserData>({
    email: '',
    name: '',
    balance: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api;
        setUserData(data as UserData); // Convertendo data para UserData
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchData();
  }, []); 

  console.log(userData);

  return (
    <>
      <Box2>
        <ParagraphBox>Informações de Conta</ParagraphBox>
      </Box2>
      <Box>
        <p>Email: {userData.email}</p>
        <p>Nome: {userData.name}</p>
        <p>Saldo: {userData.balance}</p>
      </Box>
    </>
  );
}

export default Site;
