import { ComponentType, forwardRef, JSX } from "react";

interface Props<T, P extends object = {}> {
  isLoading?: boolean;
  data: T | undefined;
  aspect?: string;
  CardComponent: ComponentType<{ data: T } & P>;
  SkeletonComponent: ComponentType<{ aspect?: string }>;
  PlaceholderComponent?: ComponentType<{aspect?: string}>;
  className?: string;
  cardProps?: P; 
  
}

function CardWrapperInner<T, P extends object = {}>(
  {
    isLoading,
    data,
    aspect,
    CardComponent,
    SkeletonComponent,
    PlaceholderComponent,
    className = '',
    cardProps
  }: Props<T, P>,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div className={className} ref={ref}>
      {isLoading && <SkeletonComponent aspect={aspect}/>}
      {!isLoading && data && <CardComponent {...(cardProps as P)} data={data} aspect={aspect}/>}
      {!isLoading && !data && PlaceholderComponent && <PlaceholderComponent aspect={aspect}/>}
    </div>
  );
}

export const CardWrapper = forwardRef(CardWrapperInner) as <T, P extends object = {}>(
  props: Props<T, P> & { ref?: React.Ref<HTMLDivElement> }
) => JSX.Element;
