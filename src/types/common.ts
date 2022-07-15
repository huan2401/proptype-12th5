import { Locale } from 'antd/lib/locale-provider';

export interface IRegionItem {
  key: string;
  name: string;
  flag: string;
  antdLocale: Locale;
}

export interface IRegion {
  [key: string]: IRegionItem;
}

export interface IRouteBase {
  path: string;
  title: string;
  titleVI?: string;
  titleEN?: string;
  icon?: React.FunctionComponent<{ className?: string }>;
  component?: React.ReactType;
  query?: string;
  requireAuth?: string;
  route?: string;
  login?: boolean;
  onClick?: any;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}