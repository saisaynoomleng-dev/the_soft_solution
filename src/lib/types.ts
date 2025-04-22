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

// NavLinks Props
export type NavLinksProps = {
  name: string;
  url: string;
  className?: string;
  onClick: () => void;
};

// ScrollInEffect Props
export type SlideInEffectProps = {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'top' | 'bottom';
  offset?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

// FadeInEffect Props
export type FadeInEffectProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
};

// Service Card
export type ServiceCardProps = {
  className?: string;
  title: string;
  text: string;
};
