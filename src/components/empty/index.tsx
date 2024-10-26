import { useTranslation } from 'react-i18next';
import SvgIcon from '~/lib/svg';

const Empty = () => {
  const { t } = useTranslation();
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-2 items-center'>
        <SvgIcon iconName='empty' className='size-36' size='size-36' />
        <h3 className='text-sm font-semibold text-gs-gray-500'>
          {t('empty')}
        </h3>
      </div>
    </div>
  );
};

export default Empty;
