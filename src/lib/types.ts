// Bounded Props
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

// Title Props
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
};

// Paragraph Props
export type ParagraphProps = {
  as?: 'p';
  children: React.ReactNode;
  className?: string;
};

// call to action props
export type CallToActionProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'arrow';
};

// footer offers props
export type OffersProps = {
  title: string;
  href: string;
};

// Segment Path props
export type SegmentPathProps = {
  title: string;
  className?: string;
};

// Portfolio Filter Props
export type PortfolioFilterProps = {
  name: string;
  href: string;
};

//
