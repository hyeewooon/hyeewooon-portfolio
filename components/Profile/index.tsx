import React from 'react';

import * as SC from './Profile.styles';

const Profile: React.FC = () => {
  return (
    <SC.ProfileContainer>
      <SC.ProfileImageWrapper>
        <SC.ProfileImage src="/images/profile.jpg" layout="fill" alt="Profile Image" />
      </SC.ProfileImageWrapper>
      <SC.ProfileTextBox>
        <SC.ProfileTitle>안녕하세요 👋</SC.ProfileTitle>
        <SC.ProfileText>
          프론트엔드 개발자 <SC.ProfileStrongText>김혜원</SC.ProfileStrongText>입니다.
        </SC.ProfileText>
        <SC.ProfileText>
          좋은 코드를 작성하는 것에 관심이 많고, 새로운 것을 배우고 공유하기 위해 노력하고 있습니다.
        </SC.ProfileText>
      </SC.ProfileTextBox>
    </SC.ProfileContainer>
  );
};

export default Profile;
