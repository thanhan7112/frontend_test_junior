import { useEffect } from 'react';
import MainLayout from './main-layout';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/vi';

const Layout = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n.language]);

  return (
    <MainLayout />
  );
};

export default Layout;
