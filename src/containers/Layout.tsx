import {LayoutProps} from '../interfaces'

const Layout = ({children}: LayoutProps) => {
    return <div className='layout'>{children}</div>
};

export default Layout;