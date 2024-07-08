
import {
  HiOutlineCurrencyDollar,
  HiOutlineInboxIn,
  HiOutlineNewspaper,
  HiOutlineCursorClick,
} from "react-icons/hi";
import { SiBitcoin, SiTether, SiBitcoincash } from "react-icons/si"

export const stats = [
  { id: 1, name: 'Total Cash Balance', stat: '$ 4,871,897', icon: HiOutlineCurrencyDollar, change: '1.01%', changeType: 'increase' },
  { id: 2, name: 'Total Sent', stat: '$ 890,201', icon: HiOutlineInboxIn, change: '3.27%', changeType: 'decrease' },
  { id: 3, name: 'Total Received', stat: '$ 1,091,552', icon: HiOutlineNewspaper, change: '2.18%', changeType: 'increase' },
  { id: 2, name: 'Payments Processed', stat: '58', icon: HiOutlineCursorClick, change: '5.40%', changeType: 'increase' },
]

export const accounts = [
  {
    ctype: HiOutlineCurrencyDollar,
    company: 'Brex',
    currency: 'USD',
    amount: '$1,987,101',
  },
  {
    ctype: SiBitcoin,
    company: 'Kraken',
    currency: 'BTC',
    amount: '$1,617,626',
  },
  {
    ctype: SiTether,
    company: 'Ledger Wallet',
    currency: 'USD-T',
    amount: '$876,000',
  },
  {
    ctype: SiTether,
    company: 'Payroll Account',
    currency: 'USD-T',
    amount: '$155,987',
  },
  {
    ctype: SiTether,
    company: 'Invoice - Receivables',
    currency: 'USD-T',
    amount: '$235,183',
  },
  // More transactions...
]

export const transactions = [
  {
    company: 'Acme Corporation',
    flow: 'Invoice - GPU Sales',
    hours: 1,
    amount: '$2056.00',
    ctype: SiTether,
    increase: true,
  },
  {
    company: 'Inder Preet Singh',
    flow: 'Payroll - Internal',
    hours: 2,
    amount: '$3000.00',
    ctype: SiBitcoincash,
    increase: false,
  },
  {
    company: 'Gaurav Budhrani',
    flow: 'Payroll - Internal',
    hours: 2,
    amount: '$3000.00',
    ctype: SiBitcoincash,
    increase: false,
  },
  {
    company: 'Jane Doe',
    flow: 'Payroll - Contractors',
    hours: 3,
    amount: '$2000.00',
    ctype: HiOutlineCurrencyDollar,
    increase: false,
  },
  {
    company: 'Free World Inc.',
    flow: 'Invoice - Subscription',
    hours: 1,
    amount: '$10000.00',
    ctype: SiTether,
    increase: true,
  },
]