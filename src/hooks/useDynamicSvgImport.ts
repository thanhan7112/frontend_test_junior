import React from 'react';
import { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
    const iconRef = useRef<React.FC<React.SVGProps<SVGElement>> | null>(null);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        const importSvgIcon = async (): Promise<void> => {
            try {
                setIsLoading(true);
                iconRef.current = (
                    await import(`@/assets/icons/${iconName}.svg`)
                ).ReactComponent;
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            } catch (_) {
                /* empty */
            } finally {
                setIsLoading(false);
            }
        };

        importSvgIcon();
    }, [iconName]);

    return { isloading, SvgIcon: iconRef.current };
}
