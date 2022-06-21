export type BoxProps = {
  title: string;
  subTitle?: string;
  content?: string;
  date?: string;
  imageUrl?: string;
  tag?: {
    name: string;
    color: 'red' | 'yellow' | 'blue' | 'gray';
  }[];
  children?: React.ReactNode;
};
