import React from 'react';
import Image from 'next/image';

import { BoxProps } from './model';
import * as SC from './Box.styles';

const Box: React.FC<BoxProps> = (props) => {
  const { title = '', subTitle = '', imageUrl = '', tag = [], date = '', content } = props;
  return (
    <SC.BoxContainer>
      {imageUrl && <Image src={imageUrl} alt="logo" width={80} height={80} />}
      <SC.ContentWrapper>
        <SC.Head>
          {title && <SC.BoxTitle>{title}</SC.BoxTitle>}
          {date && <SC.Date>{date}</SC.Date>}
        </SC.Head>
        {subTitle && <SC.BoxSubTitle>{subTitle}</SC.BoxSubTitle>}
        {subTitle && <SC.BoxContent>{content}</SC.BoxContent>}
        <SC.TagList>
          {tag &&
            tag.map(({ name, color }) => {
              return <SC.TagItem>{name}</SC.TagItem>;
            })}
        </SC.TagList>
      </SC.ContentWrapper>
    </SC.BoxContainer>
  );
};

export default Box;
