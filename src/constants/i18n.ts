import viFlag from '@/assets/images/flags/vi.svg';
import enFlag from '@/assets/images/flags/en.svg';
import viTrans from '@/assets/i18n/vi.json';
import enTrans from '@/assets/i18n/en.json';
import viVN from 'antd/lib/locale/vi_VN';
import enUS from 'antd/lib/locale/en_US';
import { IRegion } from '@/types';

export const RESOURCES = {
  vi: { translation: viTrans },
  en: { translation: enTrans },
};

export const REGIONS: IRegion = {
  vi: {
    key: 'vi',
    name: 'vietnamese',
    flag: viFlag,
    antdLocale: viVN,
  },
  en: {
    key: 'en',
    name: 'english',
    flag: enFlag,
    antdLocale: enUS,
  },
};

export const STORAGE_LANG_KEY = 'I18N';

export const DEFAULT_LANG = 'vi';
