type Props = {
  children?: React.ReactNode;
  ratio?: number;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  // onClick?: () => void;
  wrapCls?: string;
};

const AspectRatio = ({
  children,
  ratio = 1,
  className,
  onMouseEnter,
  onMouseLeave,
  // onClick,
  wrapCls,
}: Props) => {
  const paddingBottom = `${(1 / ratio) * 100}%`;

  return (
    <div
      className={` relative w-full before:block ${wrapCls}  before:pt-[${paddingBottom}]`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // onClick={onClick}
    >
      <div className={`absolute top-0 left-0 h-full w-full ${className}`}>{children}</div>
    </div>
  );
};

export default AspectRatio;
