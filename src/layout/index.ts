import _Layout from './layout';
import _Header from './header';
import _Footer from './footer';
import _Aside from './aside';
import _Content from './content';
import { withInstall, WithInstallType } from '../utils/withInstall';
import { TdHeaderProps, TdFooterProps, TdAsideProps } from './type';

import './style';

export * from './type';
export type HeaderProps = TdHeaderProps;
export type FooterProps = TdFooterProps;
export type AsideProps = TdAsideProps;

export const Aside: WithInstallType<typeof _Aside> = withInstall(_Aside);
export const Layout: WithInstallType<typeof _Layout> = withInstall(_Layout);
export const Header: WithInstallType<typeof _Header> = withInstall(_Header);
export const Footer: WithInstallType<typeof _Footer> = withInstall(_Footer);
export const Content: WithInstallType<typeof _Content> = withInstall(_Content);
export default Layout;
