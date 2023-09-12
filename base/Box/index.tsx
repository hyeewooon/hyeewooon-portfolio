import React from 'react';
import Image from 'next/image';

import { BoxProps } from './model';
import * as SC from './Box.styles';

const Box: React.FC<BoxProps> = (props) => {
  const { title = '', subTitle = '', imageUrl, alt = '', tag = null, date = '', content, children } = props;
  return (
    <SC.BoxContainer>
      {imageUrl && (
        <SC.ImageWrapper>
          <Image src={imageUrl} alt={alt} width={80} height={80} placeholder="blur" />
        </SC.ImageWrapper>
      )}
      <SC.ContentWrapper>
        <SC.Head>
          {title && <SC.BoxTitle>{title}</SC.BoxTitle>}
          {date && <SC.Date>{date}</SC.Date>}
        </SC.Head>
        {subTitle && <SC.BoxSubTitle>{subTitle}</SC.BoxSubTitle>}
        {content && <SC.BoxContent>{content}</SC.BoxContent>}
        {tag && (
          <SC.TagList>
            {tag.map(({ name, color }, index) => {
              return (
                <SC.TagItem tagColor={color} key={`${name}_${index}`}>
                  {name}
                </SC.TagItem>
              );
            })}
          </SC.TagList>
        )}
        {children && <>{children}</>}
      </SC.ContentWrapper>
    </SC.BoxContainer>
  );
};

export default Box;
