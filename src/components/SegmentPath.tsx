import { SegmentPathProps } from '@/lib/types';
import Title from './Title';

const SegmentPath = ({ title }: SegmentPathProps) => {
  return (
    <div className="bg-brand-gray/10 segment-bg-sm md:segment-bg-md min-w-screen h-[10rem] flex flex-col justify-center px-5">
      <Title
        as="h2"
        size="md"
        className="text-left"
      >
        {title}
      </Title>
    </div>
  );
};

export default SegmentPath;
