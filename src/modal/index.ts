export type TypeSvgIcon = {
    iconName: string;
    className?: React.ComponentProps<'div'>['className'];
    svgStyle?: React.SVGProps<SVGSVGElement>;
}

export type TypeTier = {
    bg: string[]
    spinIcon?: TypeSvgIcon
    twinkleIcons: TypeSvgIcon[]
    starIcons: TypeSvgIcon[]
    leafIcons: TypeSvgIcon[]
    tierNum: number
}