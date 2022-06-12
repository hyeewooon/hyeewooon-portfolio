import React from 'react';
import Image from 'next/image';

import * as SC from './Profile.styles';

const Profile: React.FC = () => {
  return <SC.ImageWrapper src="/images/profile.jpg" width={150} height={150} />;
};

export default Profile;
