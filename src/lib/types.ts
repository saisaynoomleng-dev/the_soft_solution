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
