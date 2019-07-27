interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Order',
    url: '/order-page',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Order History',
        url: '/order-page/order-history',
        icon: 'icon-basket-loaded',
      },
      {
        name: 'Lists',
        url: '/order-page/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Shop',
        url: '/order-page/shop',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Customer Setting',
    url: '/order-page',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'User Profile',
        url: '/order-page/order-history',
        icon: 'icon-basket-loaded',
      },
      {
        name: 'Auto Order Setting',
        url: '/order-page/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Track Order',
        url: '/order-page/shop',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/order-page',
    icon: 'icon-puzzle'
  },
  {
    name: 'Download Order History',
    // url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
