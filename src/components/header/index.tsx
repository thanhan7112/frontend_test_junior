import usePermission from '~/hooks/usePermission';
import Menu from '~/lib/mui/menu';
import SvgIcon from '~/lib/svg';
import { Breadcrumbs } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [buttonSelected, setButtonSelected] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { currentPermission, parentPermission } = usePermission();

  return (
    <div className='flex items-center justify-between px-6 relative z-50 py-4 shadow-bottom-light bg-white'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <h1 className='text-xl font-bold text-gs-gray-500'>
            {t(currentPermission?.pageTitle ?? '')}
          </h1>
          <div
            className='p-2 border border-gs-gray-300 rounded cursor-pointer'
            onClick={() => navigate(-1)}
          >
            <SvgIcon
              iconName='back-page'
              className='size-5 fill-gs-gray-500'
              size='size-5'
            />
          </div>
        </div>
        <Breadcrumbs separator='›' aria-label='breadcrumb'>
          {parentPermission
            .filter((e) => !e.isTitleOnly)
            .map((p) =>
              p.url ? (
                <Link
                  className='text-sm text-gs-blue-500'
                  key={p.id}
                  to={`${p.url}?p=${p.id}`}
                >
                  {t(p.pageTitle)}
                </Link>
              ) : (
                <span className='text-sm' key={p.id}>
                  {t(p.pageTitle)}
                </span>
              ),
            )}
        </Breadcrumbs>
      </div>
      <div className='flex items-center gap-4'>
        <button
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setButtonSelected('language');
          }}
          className='size-9 p-2 flex items-center justify-center bg-gs-blue-50 rounded-full'
        >
          <SvgIcon iconName='translate' key={'translate'} className='size-6' />
        </button>
        <button
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setButtonSelected('message');
          }}
          className='size-9 p-2 flex items-center justify-center bg-gs-blue-50 rounded-full'
        >
          <SvgIcon iconName='bell' key={'bell'} className='size-6' />
        </button>
        <Menu
          ariaLabelledby={buttonSelected}
          menuId={buttonSelected}
          list={
            buttonSelected === 'language'
              ? [
                  { label: 'Vietnamese', value: 'vi' },
                  { label: 'English', value: 'en' },
                ]
              : []
          }
          onSelect={(item) => {
            if (buttonSelected === 'language') {
              localStorage.setItem('locale', item.value);
              i18n.changeLanguage(item.value);
              setAnchorEl(null);
              setButtonSelected('');
            }
          }}
          anchorEl={anchorEl}
          open={anchorEl != null}
          onClose={() => {
            setAnchorEl(null);
            setButtonSelected('');
          }}
          xs={{
            top: '56px',
            left: '0',
          }}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
        />
      </div>
    </div>
  );
};

export default Header;
