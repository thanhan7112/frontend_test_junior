import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport';
import { TypeSvgIcon } from '@/modal';

function SvgIcon(props: TypeSvgIcon) {
    const { iconName, className, svgStyle } = props;
    const { SvgIcon } = useDynamicSvgImport(iconName);
    return (
        <>
            {SvgIcon && <SvgIcon className={className} {...svgStyle} />}
        </>
    );
}

export default SvgIcon;
