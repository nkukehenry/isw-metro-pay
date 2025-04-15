// Categories
export const categories = [
  { 
    name: "Airtime", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=airtime&backgroundColor=1E90FF",
    description: "Top up your mobile phone credit"
  },
  { 
    name: "Parking", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=parking&backgroundColor=2ECC71",
    description: "Pay for parking in various locations"
  },
  { 
    name: "Sim Cards", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=simcard&backgroundColor=9B59B6",
    description: "Purchase and manage  Physical & eSIMs"
  },
  { 
    name: "Accommodation", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=hotel&backgroundColor=E67E22",
    description: "Book and pay for stays"
  },
  { 
    name: "Forex", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=forex&backgroundColor=3498DB",
    description: "Buy and sell foreign currency"
  },
  { 
    name: "Data", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=data&backgroundColor=1ABC9C",
    description: "Purchase internet data bundles"
  },
  { 
    name: "Taxes", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=taxes&backgroundColor=E74C3C",
    description: "Pay your government taxes and fees"
  },
  { 
    name: "Utilities", 
    icon: "https://api.dicebear.com/7.x/icons/svg?seed=utilities&backgroundColor=F1C40F",
    description: "Pay for electricity, water, and internet"
  },
]

// Services for each category
export const services = {
  Airtime: [
    { name: "Airtel", icon: "https://api.dicebear.com/7.x/icons/svg?seed=airtel&backgroundColor=1E90FF" },
    { name: "MTN", icon: "https://api.dicebear.com/7.x/icons/svg?seed=mtn&backgroundColor=FFD700" },
    { name: "Telkom", icon: "https://api.dicebear.com/7.x/icons/svg?seed=telkom&backgroundColor=FF4500" },
    { name: "Safaricom", icon: "https://api.dicebear.com/7.x/icons/svg?seed=safaricom&backgroundColor=008000" },
  ],
  Parking: [
    { name: "City Parking", icon: "https://api.dicebear.com/7.x/icons/svg?seed=cityparking&backgroundColor=2ECC71" },
    { name: "Mall Parking", icon: "https://api.dicebear.com/7.x/icons/svg?seed=mallparking&backgroundColor=27AE60" },
    { name: "Airport Parking", icon: "https://api.dicebear.com/7.x/icons/svg?seed=airportparking&backgroundColor=16A085" },
  ],
  "Sim Cards": [
    { name: "MTN", icon: "https://api.dicebear.com/7.x/icons/svg?seed=mtn&backgroundColor=FFD700" },
    { name: "Airtel", icon: "https://api.dicebear.com/7.x/icons/svg?seed=airtel&backgroundColor=1E90FF" },
    { name: "Lyca Mobile", icon: "https://api.dicebear.com/7.x/icons/svg?seed=lyca&backgroundColor=FF4500" },
  ],
  Accommodation: [
    { name: "Hotels", icon: "https://api.dicebear.com/7.x/icons/svg?seed=hotels&backgroundColor=E67E22" },
    { name: "Apartments", icon: "https://api.dicebear.com/7.x/icons/svg?seed=apartments&backgroundColor=D35400" },
    { name: "Hostels", icon: "https://api.dicebear.com/7.x/icons/svg?seed=hostels&backgroundColor=BA4A00" },
  ],
  Forex: [
    { name: "USD", icon: "https://api.dicebear.com/7.x/icons/svg?seed=usd&backgroundColor=3498DB" },
    { name: "EUR", icon: "https://api.dicebear.com/7.x/icons/svg?seed=eur&backgroundColor=2980B9" },
    { name: "GBP", icon: "https://api.dicebear.com/7.x/icons/svg?seed=gbp&backgroundColor=2475A8" },
  ],
  Data: [
    { name: "Daily Bundle", icon: "https://api.dicebear.com/7.x/icons/svg?seed=dailybundle&backgroundColor=1ABC9C" },
    { name: "Weekly Bundle", icon: "https://api.dicebear.com/7.x/icons/svg?seed=weeklybundle&backgroundColor=16A085" },
    { name: "Monthly Bundle", icon: "https://api.dicebear.com/7.x/icons/svg?seed=monthlybundle&backgroundColor=138D75" },
  ],
  Taxes: [
    { name: "Import Duty", icon: "https://api.dicebear.com/7.x/icons/svg?seed=incometax&backgroundColor=E74C3C" },
    { name: "Driving Licence", icon: "https://api.dicebear.com/7.x/icons/svg?seed=propertytax&backgroundColor=C0392B" },
    { name: "KCCA Licence", icon: "https://api.dicebear.com/7.x/icons/svg?seed=business tax&backgroundColor=A93226" },
  ],
  Utilities: [
    { name: "Electricity", icon: "https://api.dicebear.com/7.x/icons/svg?seed=electricity&backgroundColor=F1C40F" },
    { name: "Water", icon: "https://api.dicebear.com/7.x/icons/svg?seed=water&backgroundColor=F39C12" },
    { name: "Internet", icon: "https://api.dicebear.com/7.x/icons/svg?seed=internet&backgroundColor=D35400" },
  ],
}

// Payment options for each service
export const paymentOptions = {
  Airtel: [
    {
      name: "Physical SIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=physicalsim&backgroundColor=1E90FF",
      price: "UGX 5,000",
      description: "Standard physical SIM card",
    },
    {
      name: "eSIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=esim&backgroundColor=1E90FF",
      price: "UGX 10,000",
      description: "Digital eSIM for compatible devices",
    },
  ],
  MTN: [
    {
      name: "Physical SIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=physicalsim&backgroundColor=FFD700",
      price: "UGX 5,000",
      description: "Standard physical SIM card",
    },
    {
      name: "eSIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=esim&backgroundColor=FFD700",
      price: "UGX 10,000",
      description: "Digital eSIM for compatible devices",
    },
  ],
  Telkom: [
    {
      name: "Daily Airtime",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dailyairtime&backgroundColor=FF4500",
      price: "UGX 1,000",
      description: "24 hours of airtime",
    },
    {
      name: "Voice Bundles",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=voicebundles&backgroundColor=FF4500",
      price: "UGX 3,000",
      description: "60 minutes for 7 days",
    },
    {
      name: "Data Plans",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dataplans&backgroundColor=FF4500",
      price: "UGX 8,000",
      description: "1.5GB data for 30 days",
    },
  ],
  Safaricom: [
    {
      name: "Daily Airtime",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dailyairtime&backgroundColor=008000",
      price: "UGX 2,500",
      description: "24 hours of airtime",
    },
    {
      name: "Voice Bundles",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=voicebundles&backgroundColor=008000",
      price: "UGX 6,000",
      description: "120 minutes for 7 days",
    },
    {
      name: "Data Plans",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dataplans&backgroundColor=008000",
      price: "UGX 12,000",
      description: "2.5GB data for 30 days",
    },
  ],
  "City Parking": [
    {
      name: "Hourly",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=hourlyparking&backgroundColor=2ECC71",
      price: "UGX 2,000",
      description: "Per hour rate",
    },
    {
      name: "Daily",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dailyparking&backgroundColor=2ECC71",
      price: "UGX 10,000",
      description: "Full day parking",
    },
    {
      name: "Monthly",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=monthlyparking&backgroundColor=2ECC71",
      price: "UGX 200,000",
      description: "30 days of parking",
    },
  ],
  "Mall Parking": [
    {
      name: "Hourly",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=hourlyparking&backgroundColor=27AE60",
      price: "UGX 3,000",
      description: "Per hour rate",
    },
    {
      name: "Daily",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=dailyparking&backgroundColor=27AE60",
      price: "UGX 15,000",
      description: "Full day parking",
    },
  ],
  "Airport Parking": [
    {
      name: "Short Stay",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=shortstay&backgroundColor=16A085",
      price: "UGX 20,000",
      description: "Up to 6 hours",
    },
    {
      name: "Long Stay",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=longstay&backgroundColor=16A085",
      price: "UGX 50,000",
      description: "Up to 24 hours",
    },
  ],
  "Lyca Mobile": [
    {
      name: "Physical SIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=physicalsim&backgroundColor=FF4500",
      price: "UGX 5,000",
      description: "Standard physical SIM card",
    },
    {
      name: "eSIM",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=esim&backgroundColor=FF4500",
      price: "UGX 10,000",
      description: "Digital eSIM for compatible devices",
    },
  ],
  Hotels: [
    {
      name: "Standard Room",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=standardroom&backgroundColor=E67E22",
      price: "UGX 120,000",
      description: "Basic amenities",
    },
    {
      name: "Deluxe Room",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=deluxeroom&backgroundColor=E67E22",
      price: "UGX 180,000",
      description: "Premium amenities",
    },
    {
      name: "Suite",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=suite&backgroundColor=E67E22",
      price: "UGX 250,000",
      description: "Luxury suite",
    },
  ],
  Apartments: [
    {
      name: "Studio",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=studio&backgroundColor=D35400",
      price: "UGX 100,000",
      description: "Single room apartment",
    },
    {
      name: "1 Bedroom",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=1bedroom&backgroundColor=D35400",
      price: "UGX 150,000",
      description: "One bedroom apartment",
    },
    {
      name: "2 Bedroom",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=2bedroom&backgroundColor=D35400",
      price: "UGX 200,000",
      description: "Two bedroom apartment",
    },
  ],
  Hostels: [
    {
      name: "Shared Room",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=sharedroom&backgroundColor=BA4A00",
      price: "UGX 50,000",
      description: "Shared accommodation",
    },
    {
      name: "Private Room",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=privateroom&backgroundColor=BA4A00",
      price: "UGX 80,000",
      description: "Private room",
    },
  ],
  USD: [
    { name: "Buy USD", icon: "https://api.dicebear.com/7.x/icons/svg?seed=buyusd&backgroundColor=3498DB" },
    { name: "Sell USD", icon: "https://api.dicebear.com/7.x/icons/svg?seed=sellusd&backgroundColor=3498DB" },
  ],
  EUR: [
    { name: "Buy EUR", icon: "https://api.dicebear.com/7.x/icons/svg?seed=buyeur&backgroundColor=2980B9" },
    { name: "Sell EUR", icon: "https://api.dicebear.com/7.x/icons/svg?seed=selleur&backgroundColor=2980B9" },
  ],
  GBP: [
    { name: "Buy GBP", icon: "https://api.dicebear.com/7.x/icons/svg?seed=buygbp&backgroundColor=2475A8" },
    { name: "Sell GBP", icon: "https://api.dicebear.com/7.x/icons/svg?seed=sellgbp&backgroundColor=2475A8" },
  ],
  "Daily Bundle": [
    {
      name: "Social Media",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=socialmedia&backgroundColor=1ABC9C",
      price: "UGX 2,000",
      description: "24 hours access",
    },
    {
      name: "Browsing",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=browsing&backgroundColor=1ABC9C",
      price: "UGX 3,000",
      description: "500MB for 24 hours",
    },
    {
      name: "Streaming",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=streaming&backgroundColor=1ABC9C",
      price: "UGX 5,000",
      description: "1GB for 24 hours",
    },
  ],
  "Weekly Bundle": [
    {
      name: "Social Media",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=socialmedia&backgroundColor=16A085",
      price: "UGX 10,000",
      description: "7 days access",
    },
    {
      name: "Browsing",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=browsing&backgroundColor=16A085",
      price: "UGX 15,000",
      description: "3GB for 7 days",
    },
    {
      name: "Streaming",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=streaming&backgroundColor=16A085",
      price: "UGX 20,000",
      description: "5GB for 7 days",
    },
  ],
  "Monthly Bundle": [
    {
      name: "Social Media",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=socialmedia&backgroundColor=138D75",
      price: "UGX 30,000",
      description: "30 days access",
    },
    {
      name: "Browsing",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=browsing&backgroundColor=138D75",
      price: "UGX 40,000",
      description: "10GB for 30 days",
    },
    {
      name: "Streaming",
      icon: "https://api.dicebear.com/7.x/icons/svg?seed=streaming&backgroundColor=138D75",
      price: "UGX 60,000",
      description: "20GB for 30 days",
    },
  ],
  "Income Tax": [
    { name: "PAYE", icon: "https://api.dicebear.com/7.x/icons/svg?seed=paye&backgroundColor=E74C3C" },
    { name: "Self-Assessment", icon: "https://api.dicebear.com/7.x/icons/svg?seed=selfassessment&backgroundColor=E74C3C" },
  ],
  "Property Tax": [
    { name: "Residential", icon: "https://api.dicebear.com/7.x/icons/svg?seed=residential&backgroundColor=C0392B" },
    { name: "Commercial", icon: "https://api.dicebear.com/7.x/icons/svg?seed=commercial&backgroundColor=C0392B" },
  ],
  "Business Tax": [
    { name: "VAT", icon: "https://api.dicebear.com/7.x/icons/svg?seed=vat&backgroundColor=A93226" },
    { name: "Corporate Tax", icon: "https://api.dicebear.com/7.x/icons/svg?seed=corporatetax&backgroundColor=A93226" },
  ],
  Electricity: [
    { name: "Prepaid", icon: "https://api.dicebear.com/7.x/icons/svg?seed=prepaid&backgroundColor=F1C40F" },
    { name: "Postpaid", icon: "https://api.dicebear.com/7.x/icons/svg?seed=postpaid&backgroundColor=F1C40F" },
  ],
  Water: [
    { name: "Monthly Bill", icon: "https://api.dicebear.com/7.x/icons/svg?seed=monthlybill&backgroundColor=F39C12" },
    { name: "Arrears", icon: "https://api.dicebear.com/7.x/icons/svg?seed=arrears&backgroundColor=F39C12" },
  ],
  Internet: [
    { name: "Home Internet", icon: "https://api.dicebear.com/7.x/icons/svg?seed=homeinternet&backgroundColor=D35400" },
    { name: "Business Internet", icon: "https://api.dicebear.com/7.x/icons/svg?seed=businessinternet&backgroundColor=D35400" },
  ],
}
