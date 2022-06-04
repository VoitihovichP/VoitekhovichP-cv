import React, { FC } from 'react';
import StartInfo from '../../containers/StartInfo/StartInfo';
import * as S from './styled';

const MainPage: FC = () => {
  return (
    <S.MainPageContainer>
      <StartInfo />
    </S.MainPageContainer>
  );
};

export default MainPage;
