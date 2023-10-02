'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  hasMargin?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  hasMargin,
}) => {
  return (
    <div
      className={`
      ${center ? 'text-center' : 'text-start'}
      ${hasMargin ? 'mt-10' : ''}
      `}
    >
      <div className='text-2xl font-bold'>{title}</div>
      <div className='mt-2 font-light text-neutral-500'>{subtitle}</div>
    </div>
  );
};

export default Heading;
