import { useDynamicSvgImport } from '~/hooks/useDynamicSvgImport';

interface IProps {
  iconName: string;
  className?: React.ComponentProps<'div'>['className'];
  svgStyle?: React.SVGProps<SVGSVGElement>;
  size?: string;
}

function SvgIcon(props: IProps) {
  const { iconName, className, svgStyle, size = 'size-5' } = props;
  const { isloading, SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <>
      {isloading && (
        <div
          className={`rounded-full bg-slate-400 animate-pulse ${size}`}
        ></div>
      )}
      {SvgIcon && <SvgIcon className={className} {...svgStyle} />}
    </>
  );
}

export default SvgIcon;
