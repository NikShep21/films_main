interface Props {
  isLoading?: boolean;
  isData?: boolean;
  children?: React.ReactNode;
  loadingFallback?: React.ReactNode;
  emptyFallback?: React.ReactNode;
}

const IsShowCard = ({
  isLoading,
  isData,
  children,
  loadingFallback = <p>Loading...</p>,
  emptyFallback = <p>No data available</p>,
}: Props) => {
  if (isLoading) return loadingFallback;
  if (!isData) return emptyFallback;
  return <>{children}</>;
};

export default IsShowCard;
