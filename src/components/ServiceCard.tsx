import React from 'react';
import Title from './Title';
import { ServiceCardProps } from '@/lib/types';
import clsx from 'clsx';
import Paragraph from './Paragraph';

const ServiceCard = ({ className, title, text }: ServiceCardProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-around items-center shadow-sm p-10 rounded-sm shadow-brand-black cursor-pointer group text-center',
        className,
      )}
    >
      <Title
        as="h3"
        size="sm"
        className="uppercase"
      >
        {title}
      </Title>
      <div className="custom-divider" />
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default ServiceCard;
