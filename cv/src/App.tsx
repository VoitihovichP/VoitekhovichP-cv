import React, { FC } from 'react';
import MainPage from './pages/MainPage/MainPage';
import GlobalStyles from './index.styled';
import * as S from './App.styled';

const App: FC = () => {
  return (
    <S.Container>
      <MainPage />
      <GlobalStyles />
    </S.Container>
  );
};

export default App;
