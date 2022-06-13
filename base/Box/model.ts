export type BoxProps = {
  title: string;
  subTitle?: string;
  date?: string;
  imageUrl?: string;
  tag?: {
    name: string;
    color: 'red' | 'yellow' | 'blue' | 'gray';
  }[];
};
