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
    icon: 'icon-note',
    children: [
      {
        name: 'Order History',
        url: '/order-page/order-history',
        icon: 'icon-check',
      },
      {
        name: 'Lists',
        url: '/order-page/list',
        icon: 'icon-list'
      },
      {
        name: 'Shop',
        url: '/order-page/shop',
        icon: 'icon-basket-loaded'
      }
    ]
  },
  {
    name: 'Customer Setting',
    url: '/customer-setting',
    icon: 'icon-people',
    children: [
      {
        name: 'User Profile',
        url: '/customer-setting/user-profile',
        icon: 'icon-user',
      },
      {
        name: 'Auto Order Setting',
        url: '/customer-setting/auto-order',
        icon: 'icon-settings'
      },
      // {
      //   name: 'Track Order',
      //   url: '/customer-setting/user-profile',
      //   icon: 'icon-location-pin'
      // }
    ]
  },
  {
    name: 'Reports',
    url: '/order-page',
    icon: 'icon-graph'
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
