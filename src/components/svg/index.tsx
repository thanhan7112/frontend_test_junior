import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport';

interface IProps {
  iconName: string;
  className?: React.ComponentProps<'div'>['className'];
  svgStyle?: React.SVGProps<SVGSVGElement>;
  size?: string;
}

function SvgIcon(props: IProps) {
  const { iconName, className, svgStyle } = props;
  const { SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <>
      {SvgIcon && <SvgIcon className={className} {...svgStyle} />}
    </>
  );
}

export default SvgIcon;
