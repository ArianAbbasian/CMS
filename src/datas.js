let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dev",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Mohammad Bagher",
    title: "Web Developer",
    img: "images/amin.jpg",
  },
  {
    id: 2,
    username: "Sasan Moqi",
    title: "Seo Eng",
    img: "images/sasan.jpg",
  },
  {
    id: 3,
    username: "Zahra Aghayi",
    title: "Weblog",
    img: "images/zahra.jpg",
  },
  {
    id: 4,
    username: "Kazem Kazemi",
    title: "Hacker",
    img: "images/qadir.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Abbas BoAzar",
    date: "12 Jun 2025",
    amount: 123,
    status: "Approved",
    img: "images/qadir.jpg",
  },
  {
    id: 2,
    customer: "Amin Mansori",
    date: "23 Jul 2025",
    amount: 123,
    status: "Declined",
    img: "images/amin.jpg",
  },
  {
    id: 3,
    customer: "Arian Abbasian",
    date: "28 May 2025",
    amount: 123,
    status: "Pending",
    img: "images/mmd.jpg",
  },
  {
    id: 4,
    customer: "Sasan Moq",
    date: "1 Feb 2025",
    amount: 123,
    status: "Approved",
    img: "images/sasan.jpg",
  },
];

let userRows = [
  {
    id: 1,
    username: "Kazem Qaqi",
    avatar: "images/qadir.jpg",
    status: "active",
    transaction: "$129.52",
    email: "amin@gmail.com",
  },
  {
    id: 2,
    username: "Amin Mansori",
    avatar: "images/amin.jpg",
    status: "non-active",
    transaction: "$110",
    email: "amin@gmail.com",
  },
  {
    id: 3,
    username: "Sasan Moq",
    avatar: "images/sasan.jpg",
    status: "active",
    transaction: "$98",
    email: "amin@gmail.com",
  },
  {
    id: 4,
    username: "Zahra Aghayi",
    avatar: "images/zahra.jpg",
    status: "active",
    transaction: "$0",
    email: "amin@gmail.com",
  },
  {
    id: 5,
    username: "Hamze mohammadi",
    avatar: "images/hamze.jpg",
    status: "non-active ",
    transaction: "$55.98",
    email: "amin@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: "images/asus.jpeg",
    price: 890,
  },
  {
    id: 2,
    title: "Acer",
    avatar: "images/acer.jpg",
    price: 1120,
  },
  {
    id: 3,
    title: "HP",
    avatar: "images/hp.jpg",
    price: 470,
  },
  {
    id: 4,
    title: "Dell",
    avatar: "images/dell.jpg",
    price: 666,
  },
];

const productsData = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
  },
];

// داده‌های خلاصه آماری (کارت‌های بالای صفحه)
const summaryData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$24,265",
    change: "+12.4%",
    icon: "AttachMoney",
  },
  {
    id: 2,
    title: "Monthly Sales",
    value: "1,235",
    change: "+8.2%",
    icon: "ShoppingCart",
  },
  {
    id: 3,
    title: "Active Users",
    value: "2,450",
    change: "+5.3%",
    icon: "People",
  },
  {
    id: 4,
    title: "Avg. Order Value",
    value: "$89.50",
    change: "+3.7%",
    icon: "TrendingUp",
  },
];

// داده‌های نمودار فروش
const salesData = [
  { month: "Jan", sales: 11200, revenue: 24500 },
  { month: "Feb", sales: 9900, revenue: 22100 },
  { month: "Mar", sales: 12090, revenue: 19800 },
  { month: "Apr", sales: 17800, revenue: 26700 },
  { month: "May", sales: 15400, revenue: 28900 },
  { month: "Jun", sales: 18500, revenue: 31200 },
  { month: "Jul", sales: 22400, revenue: 35600 },
];

// داده‌های دسته‌بندی محصولات
const categoryData = [
  { name: "Electronics", value: 35 },
  { name: "Computers", value: 25 },
  { name: "Home", value: 20 },
  { name: "Fashion", value: 15 },
  { name: "Other", value: 5 },
];

// داده‌های جغرافیایی
const geographyData = [
  { name: "North America", sales: 4000, revenue: 24000 },
  { name: "Europe", sales: 3000, revenue: 13980 },
  { name: "Asia", sales: 2780, revenue: 19000 },
  { name: "South America", sales: 1890, revenue: 9800 },
  { name: "Africa", sales: 2390, revenue: 12000 },
  { name: "Oceania", sales: 1490, revenue: 8500 },
];

// محصولات پرفروش
const topProducts = [
  {
    id: 1,
    name: "MacBook Pro",
    sales: 1200,
    revenue: 144000,
    change: "+12.4%",
    avatar: "images/macbook.jpg",
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    sales: 980,
    revenue: 117600,
    change: "+8.2%",
    avatar: "images/iphone.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    sales: 850,
    revenue: 93500,
    change: "+5.3%",
    avatar: "images/samsung.jpg",
  },
  {
    id: 4,
    name: "Sony Headphones",
    sales: 750,
    revenue: 52500,
    change: "-2.1%",
    avatar: "images/sony.jpg",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    sales: 680,
    revenue: 95200,
    change: "+3.7%",
    avatar: "images/dell.jpg",
  },
];

// تراکنش‌های اخیر
const recentTransactionsAnalytics = [
  {
    id: 1,
    customer: "John Doe",
    date: "12 Jun 2025",
    amount: 123,
    status: "Completed",
    avatar: "images/user1.jpg",
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "11 Jun 2025",
    amount: 89,
    status: "Pending",
    avatar: "images/user2.jpg",
  },
  {
    id: 3,
    customer: "Robert Johnson",
    date: "10 Jun 2025",
    amount: 245,
    status: "Completed",
    avatar: "images/user3.jpg",
  },
  {
    id: 4,
    customer: "Emily Davis",
    date: "9 Jun 2025",
    amount: 67,
    status: "Failed",
    avatar: "images/user4.jpg",
  },
  {
    id: 5,
    customer: "Michael Wilson",
    date: "8 Jun 2025",
    amount: 189,
    status: "Completed",
    avatar: "images/user5.jpg",
  },
];

// اهداف ماهانه
const monthlyGoals = [
  { id: 1, name: "Monthly Sales", progress: 75, target: 1200 },
  { id: 2, name: "Revenue Target", progress: 65, target: 25000 },
  { id: 3, name: "New Customers", progress: 45, target: 300 },
];

// فعالیت‌های اخیر
const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "placed a new order",
    time: "5 minutes ago",
    icon: "ShoppingCart",
    color: "#3a7bd5",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "made a payment",
    time: "15 minutes ago",
    icon: "Payment",
    color: "#00d2ff",
  },
  {
    id: 3,
    user: "Robert Johnson",
    action: "registered as a new customer",
    time: "1 hour ago",
    icon: "PersonAdd",
    color: "#7d9df5",
  },
  {
    id: 4,
    user: "Emily Davis",
    action: "updated profile information",
    time: "2 hours ago",
    icon: "AccountCircle",
    color: "#ff9800",
  },
  {
    id: 5,
    user: "Admin",
    action: "added new product",
    time: "3 hours ago",
    icon: "Store",
    color: "#4caf50",
  },
];

// هشدار موجودی
export const lowStockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    stock: 8,
    min: 20,
    category: "Electronics",
    lastOrdered: "2023-05-15",
  },
  {
    id: 2,
    name: "Smart Watch",
    stock: 15,
    min: 25,
    category: "Wearables",
    lastOrdered: "2023-06-20",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    stock: 5,
    min: 15,
    category: "Audio",
    lastOrdered: "2023-07-10",
  },
];

// دسته‌بندی‌ها
const categories = ["All", "Electronics", "Computers", "Home", "Fashion"];

export const geographyChartData = [
  {
    name: "North America",
    sales: 4000,
    revenue: 24000,
    fill1: "#8884d8",
    fill2: "#82ca9d",
    marketShare: "38%",
  },
  {
    name: "Europe",
    sales: 3000,
    revenue: 13980,
    fill1: "#9d84d8",
    fill2: "#83ca9d",
    marketShare: "28%",
  },
  {
    name: "Asia",
    sales: 2780,
    revenue: 19000,
    fill1: "#8470d8",
    fill2: "#8fca9d",
    marketShare: "26%",
  },
  {
    name: "South America",
    sales: 1890,
    revenue: 9800,
    fill1: "#8456d8",
    fill2: "#9bca9d",
    marketShare: "18%",
  },
  {
    name: "Africa",
    sales: 2390,
    revenue: 12000,
    fill1: "#843cd8",
    fill2: "#a7ca9d",
    marketShare: "22%",
  },
  {
    name: "Oceania",
    sales: 1490,
    revenue: 8500,
    fill1: "#8422d8",
    fill2: "#b3ca9d",
    marketShare: "14%",
  },
];

export const geographyChartMeta = {
  title: "Regional Sales Performance",
  description: "Sales and revenue distribution by global regions",
  updatedAt: "2023-06-15",
};

export const trafficData = [
  { name: "Direct", value: 40, color: "#0088FE" },
  { name: "Search", value: 30, color: "#00C49F" },
  { name: "Social", value: 15, color: "#FFBB28" },
  { name: "Email", value: 10, color: "#FF8042" },
  { name: "Referral", value: 5, color: "#8884D8" },
];

export const trafficMeta = {
  title: "Traffic Sources",
  description: "Distribution of website traffic sources",
  updatedAt: "2023-06-15",
};

// صادر کردن همه داده‌ها
export {
  xAxisData,
  newMembers,
  transactions,
  userRows,
  products,
  productsData,
  summaryData,
  salesData,
  categoryData,
  geographyData,
  topProducts,
  recentTransactionsAnalytics,
  monthlyGoals,
  recentActivities,
  categories,
};

export const progressGoals = [
  {
    id: 1,
    name: "Monthly Sales",
    progress: 75,
    target: 1200,
    type: "sales",
    icon: "LocalMall",
    color: "#3a7bd5",
  },
  {
    id: 2,
    name: "Revenue Target",
    progress: 65,
    target: 25000,
    type: "revenue",
    icon: "AttachMoney",
    color: "#00b09b",
  },
  {
    id: 3,
    name: "New Customers",
    progress: 45,
    target: 300,
    type: "customers",
    icon: "People",
    color: "#ff5e62",
  },
];

// src/datas.js
export const activityFeedData = [
  {
    id: 1,
    user: "John Doe",
    action: "placed a new order",
    time: "5 minutes ago",
    icon: "ShoppingCart",
    color: "#3a7bd5",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "made a payment",
    time: "15 minutes ago",
    icon: "Payment",
    color: "#00d2ff",
  },
  {
    id: 3,
    user: "Robert Johnson",
    action: "registered as a new customer",
    time: "1 hour ago",
    icon: "PersonAdd",
    color: "#7d9df5",
  },
  {
    id: 4,
    user: "Emily Davis",
    action: "updated profile information",
    time: "2 hours ago",
    icon: "AccountCircle",
    color: "#ff9800",
  },
  {
    id: 5,
    user: "Admin",
    action: "added new product",
    time: "3 hours ago",
    icon: "Store",
    color: "#4caf50",
  },
];
