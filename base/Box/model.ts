import type { StaticImageData } from 'next/image';

export type BoxProps = {
  title: string;
  subTitle?: string;
  content?: string | React.ReactNode;
  date?: string;
  imageUrl?: StaticImageData;
  alt?: string;
  tag?: {
    name: string;
    color: 'red' | 'yellow' | 'blue' | 'gray';
  }[];
  children?: React.ReactNode;
};
