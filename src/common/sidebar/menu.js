const menuList = [
  {
    icon: 'GridViewIcon',
    label: 'DASHBOARD',
    to: '/',
  },
  {
    icon: 'GridViewIcon',
    label: 'PURCHASE',
    to: '',
    subs: [
      {
        label: 'Supplier',
        to: '/purchase/supplier',
      },
      {
        label: 'Purchase',
        to: '/purchase/goodsReceive',
      },
      {
        label: 'Due Payment',
        to: '/purchase/duePayment',
      },
      // {
      //   label: "Purchase Commision",
      //   to: "/purchase/purchaseCommision",
      // },
    ],
  },
  {
    icon: 'fas fa-shopping-bag',
    label: 'SALES',
    to: '',
    subs: [
      {
        label: 'Customer',
        to: '/sales/customer',
      },
      {
        label: 'Item',
        to: '/sales/item',
      },
      {
        label: 'Sales',
        to: '/sales/goodsSales',
      },
      {
        label: 'Due Receive',
        to: '/sales/dueReceive',
      },
      {
        label: 'Sales Discount',
        to: '/sales/salesDiscount',
      },
      {
        label: 'Price Configuration',
        to: '/sales/priceConfiguration',
      },
      {
        label: 'Employee Incentive',
        to: '/sales/employeeIncentive',
      },
    ],
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    label: 'ACCOUNTS',
    to: '',
    subs: [
      {
        label: 'Bank Account',
        to: '/accounts/bankAccount',
      },
      {
        label: 'Others Partner',
        to: '/accounts/otherPartner',
      },
      {
        label: 'Business Transaction',
        to: '/accounts/businessTransaction',
      },
    ],
  },
  {
    icon: 'fas fa-user-shield',
    label: 'HR And Admin',
    to: '',
    subs: [
      {
        label: 'User',
        to: '/hrAdmin/user',
      },
      {
        label: 'Branch',
        to: '/hrAdmin/branch',
      },
      {
        label: 'Department',
        to: '/hrAdmin/department',
      },
      {
        label: 'Designation',
        to: '/hrAdmin/designation',
      },
      {
        label: 'Salary Advance',
        to: '/hrAdmin/salaryAdvance',
      },
      {
        label: 'Employee Profile',
        to: '/hrAdmin/employee',
      },
      {
        label: 'Leave Management',
        to: '/hrAdmin/leaveManagement',
      },
      {
        label: 'Salary Sheet',
        to: '/hrAdmin/salarySheet',
      },
      {
        label: 'Employee Attendance',
        to: '/hrAdmin/employeeAttendance',
      },
      {
        label: 'Attendance Adjustment',
        to: '/hrAdmin/attendanceAdjustment',
      },
      {
        label: 'Attendance Report',
        to: '/hrAdmin/attendanceReport',
      },
    ],
  },
  {
    icon: 'fas fa-book',
    label: 'REPORTS',
    to: '',
    subs: [
      {
        label: 'Sales Summary',
        to: '/reports/sales',
      },
      {
        label: 'Purchase Summary',
        to: '/reports/purchase',
      },
      {
        label: 'Inventory',
        to: '/reports/inventory',
      },
      {
        label: 'Stock',
        to: '/reports/stock',
      },
      {
        label: 'Partner Ledger',
        to: '/reports/partnerLedger',
      },
      {
        label: 'Cash Book',
        to: '/reports/cashbook',
      },
      {
        label: 'Bank Book',
        to: '/reports/bankBook',
      },
      {
        label: 'Income Statement',
        to: '/reports/incomeStatement',
      },
    ],
  },
  {
    icon: 'fas fa-dolly-flatbed',
    label: 'INVENTORY MANAGEMENT',
    to: '',
    subs: [
      {
        label: 'Inventory Transfer',
        to: '/inventory/inventoryTransfer',
      },
    ],
  },
  // {
  //   icon: "fas fa-laptop-code",
  //   label: "ASSET MANAGEMENT",
  //   to: "",
  //   subs: [
  //     {
  //       label: "Asset Assign",
  //       to: "/asset/assetAssign",
  //     },
  //     {
  //       label: "Asset Report",
  //       to: "/asset/assetReport",
  //     },
  //   ],
  // },
  {
    icon: 'fas fa-tag',
    label: 'COMMISSION SETUP',
    to: '',
    subs: [
      {
        label: 'Commision Configuration',
        to: '/commision/comissionConfiguration',
      },
    ],
  },
  {
    icon: 'far fa-dot-circle',
    label: 'TARGET SETUP',
    to: '',
    subs: [
      {
        label: 'Target Entry',
        to: '/target/targetEntry',
      },
      // {
      //   label: "Sales Target with Commision",
      //   to: "/target/salesTargetCommision",
      // },
      // {
      //   label: "Purchase Target with Commision",
      //   to: "/target/purchaseTargetCommision",
      // },
      // {
      //   label: "Target vs Sales Report",
      //   to: "/target/targetvsSalesReport",
      // },
    ],
  },
  {
    icon: 'fas fa-cog',
    label: 'SETTINGS',
    to: '',
    subs: [
      // {
      //   label: "VAT",
      //   to: "/settings/vat",
      // },
      {
        label: 'Roll Manager',
        to: '/settings/rollManager',
      },
    ],
  },
];

export default menuList;

// nestedSubs: [
//   {
//     label: "CREATE STRATEGIC PLAN",
//     to: "/str-plan",
//   },
//   {
//     label: "CORE VALUES",
//     to: "/performance-management/str/core_values",
//   },
//   {
//     label: "CORE COMPETENCIES",
//     to: "/performance-management/str/core_competencies",
//   },
// ],

// {
//   icon: "test-icon",
//   label: "Procurement",
//   to: "/performance-management",
//   subs: [
//     {
//       label: "Purchase order",
//       nestedSubs: [
//         {
//           label: "Create",
//           to: "/performance-management/str/strategic_particulars",
//         },
//         {
//           label: "Edit",
//           to: "/performance-management/str/core_values",
//         },
//         {
//           label: "View",
//           to: "/performance-management/str/core_competencies",
//         },
//       ],
//     },
//   ],
// },
