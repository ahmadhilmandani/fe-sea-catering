import MealDeliveryCard from "../../components/subscription/MealDeliveryCard";

const FILTER_OPT = {
  all: 'semua',
  balanced: {
    name: 'diet seimbang',
    price: 35000,
    description: 'Diet dengan gizi seimbang sesuai panduan KEMENKES'
  },
  lowCalorie:
  {
    name: 'rendah kalori',
    price: 30000,
    description: 'Cocok untuk penurunan berat badan, rendah kalori.'
  },
  highProtein: {
    name: 'tinggi protein',
    price: 40000,
    description: 'Fokus pada makanan tinggi protein (biasanya untuk membentuk otot).'
  },
  royal: {
    name: 'royal',
    price: 60000,
    description: 'Menu premium, biasanya porsinya lebih besar dan bahan lebih eksklusif.'
  }
}


const meals = [
  // === Diet Seimbang ===
  {
    title: "Gado-gado",
    price: 30000,
    desciption: "Campuran sayuran rebus, telur, tempe, dan bumbu kacang",
    diet: FILTER_OPT.balanced,
    dietTypeTime: ["makan siang"],
    nutrition: {
      protein: { value: 14, unit: "g" },
      calorie: { value: 320, unit: "kkal" }
    },
    dietGoodFor: ["Menjaga pola makan sehat", "Vegan-friendly"]
  },
  {
    title: "Nasi Merah + Ayam Panggang + Sayur Rebus",
    price: 35000,
    desciption: "Karbohidrat kompleks, protein tanpa lemak, dan serat tinggi",
    diet: FILTER_OPT.balanced,
    dietTypeTime: ["makan siang", "makan malam"],
    nutrition: {
      protein: { value: 26, unit: "g" },
      calorie: { value: 420, unit: "kkal" }
    },
    dietGoodFor: ["Menjaga pola makan sehat"]
  },
  {
    title: "Oatmeal + Buah + Telur Rebus",
    price: 25000,
    desciption: "Menu lengkap untuk sarapan bernutrisi seimbang",
    diet: FILTER_OPT.balanced,
    dietTypeTime: ["sarapan"],
    nutrition: {
      protein: { value: 20, unit: "g" },
      calorie: { value: 390, unit: "kkal" }
    },
    dietGoodFor: ["Menjaga pola makan sehat"]
  },
  {
    title: "Ikan Bakar + Tumis Brokoli + Ubi Rebus",
    price: 40000,
    desciption: "Sumber protein, serat, dan karbo sehat",
    diet: FILTER_OPT.balanced,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 30, unit: "g" },
      calorie: { value: 450, unit: "kkal" }
    },
    dietGoodFor: ["Menjaga pola makan sehat"]
  },
  {
    title: "Smoothie Alpukat + Roti Gandum",
    price: 28000,
    desciption: "Lemak sehat dan karbo kompleks untuk energi pagi",
    diet: FILTER_OPT.balanced,
    dietTypeTime: ["sarapan"],
    nutrition: {
      protein: { value: 10, unit: "g" },
      calorie: { value: 330, unit: "kkal" }
    },
    dietGoodFor: ["Menjaga energi harian"]
  },

  // === Diet Tinggi Protein ===
  {
    title: "Dada Ayam + Nasi Putih + Telur Rebus",
    price: 45000,
    desciption: "Sumber protein tinggi untuk bantu pertumbuhan otot",
    diet: FILTER_OPT.highProtein,
    dietTypeTime: ["makan siang"],
    nutrition: {
      protein: { value: 40, unit: "g" },
      calorie: { value: 520, unit: "kkal" }
    },
    dietGoodFor: ["Meningkatkan massa otot"]
  },
  {
    title: "Steak Daging Sapi + Kentang Rebus",
    price: 60000,
    desciption: "Sumber kalori dan protein tinggi untuk otot",
    diet: FILTER_OPT.highProtein,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 45, unit: "g" },
      calorie: { value: 600, unit: "kkal" }
    },
    dietGoodFor: ["Meningkatkan massa otot"]
  },
  {
    title: "Protein Shake + Roti Gandum",
    price: 35000,
    desciption: "Shake whey protein dan karbo cepat serap",
    diet: FILTER_OPT.highProtein,
    dietTypeTime: ["snack"],
    nutrition: {
      protein: { value: 30, unit: "g" },
      calorie: { value: 380, unit: "kkal" }
    },
    dietGoodFor: ["Meningkatkan massa otot"]
  },
  {
    title: "Tempe Goreng + Nasi Merah + Sayur Bening",
    price: 30000,
    desciption: "Protein nabati untuk otot dan serat tinggi",
    diet: FILTER_OPT.highProtein,
    dietTypeTime: ["makan siang"],
    nutrition: {
      protein: { value: 25, unit: "g" },
      calorie: { value: 450, unit: "kkal" }
    },
    dietGoodFor: ["Meningkatkan massa otot", "Vegetarian"]
  },
  {
    title: "Salmon + Telur + Brokoli",
    price: 55000,
    desciption: "Kombinasi superfood untuk pembentukan otot",
    diet: FILTER_OPT.highProtein,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 42, unit: "g" },
      calorie: { value: 480, unit: "kkal" }
    },
    dietGoodFor: ["Meningkatkan massa otot"]
  },

  // === Diet Rendah Kalori ===
  {
    title: "Salad Ayam + Minyak Zaitun",
    price: 30000,
    desciption: "Salad rendah kalori dengan ayam tanpa kulit dan dressing zaitun",
    diet: FILTER_OPT.lowCalorie,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 18, unit: "g" },
      calorie: { value: 220, unit: "kkal" }
    },
    dietGoodFor: ["Menurunkan berat badan", "Gluten-free"]
  },
  {
    title: "Oatmeal + Potongan Apel",
    price: 22000,
    desciption: "Sarapan ringan kaya serat dan vitamin",
    diet: FILTER_OPT.lowCalorie,
    dietTypeTime: ["sarapan"],
    nutrition: {
      protein: { value: 6, unit: "g" },
      calorie: { value: 180, unit: "kkal" }
    },
    dietGoodFor: ["Menurunkan berat badan"]
  },
  {
    title: "Dada Ayam Rebus + Sayur Rebus",
    price: 32000,
    desciption: "Menu tanpa minyak, tinggi protein, rendah kalori",
    diet: FILTER_OPT.lowCalorie,
    dietTypeTime: ["makan siang"],
    nutrition: {
      protein: { value: 28, unit: "g" },
      calorie: { value: 260, unit: "kkal" }
    },
    dietGoodFor: ["Cutting", "Menurunkan berat badan"]
  },
  {
    title: "Sup Bening Tofu + Wortel",
    price: 25000,
    desciption: "Sup ringan dan bergizi untuk malam hari",
    diet: FILTER_OPT.lowCalorie,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 12, unit: "g" },
      calorie: { value: 180, unit: "kkal" }
    },
    dietGoodFor: ["Menurunkan berat badan", "Vegan-friendly"]
  },
  {
    title: "Smoothie Strawberry + Susu Almond",
    price: 28000,
    desciption: "Minuman rendah kalori tapi tetap lezat",
    diet: FILTER_OPT.lowCalorie,
    dietTypeTime: ["sarapan", "snack"],
    nutrition: {
      protein: { value: 8, unit: "g" },
      calorie: { value: 170, unit: "kkal" }
    },
    dietGoodFor: ["Menurunkan berat badan", "Lactose-free"]
  },


  // === Diet royal ===
  {
    title: "Wagyu Steak + Sayur Panggang",
    price: 120000,
    desciption: "Daging wagyu royal disajikan dengan sayur panggang dan saus red wine",
    diet: FILTER_OPT?.royal,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 50, unit: "g" },
      calorie: { value: 700, unit: "kkal" }
    },
    dietGoodFor: [
      "Menambah energi tinggi",
      "Asupan gizi maksimal",
      "royal fine dining"
    ]
  },
  {
    title: "Lobster Thermidor + Buttered Veggies",
    price: 135000,
    desciption: "Lobster dimasak dengan krim keju, disajikan dengan sayuran mentega",
    diet: FILTER_OPT?.royal,
    dietTypeTime: ["makan siang"],
    nutrition: {
      protein: { value: 42, unit: "g" },
      calorie: { value: 650, unit: "kkal" }
    },
    dietGoodFor: [
      "Kaya omega-3",
      "Menu eksklusif seafood",
      "Asupan protein berkualitas"
    ]
  },
  {
    title: "Salmon Fillet + Avocado Salad",
    price: 110000,
    desciption: "Salmon panggang segar disajikan dengan salad alpukat dan kacang-kacangan",
    diet: FILTER_OPT?.royal,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 35, unit: "g" },
      calorie: { value: 600, unit: "kkal" }
    },
    dietGoodFor: [
      "Kaya omega-3 & lemak sehat",
      "Kulit lebih sehat",
      "Pilihan sehat & mewah"
    ]
  },
  {
    title: "Duck Confit + Kentang Lembut",
    price: 125000,
    desciption: "Bebek dimasak perlahan hingga empuk, disajikan dengan kentang tumbuk royal",
    diet: FILTER_OPT?.royal,
    dietTypeTime: ["makan malam"],
    nutrition: {
      protein: { value: 40, unit: "g" },
      calorie: { value: 680, unit: "kkal" }
    },
    dietGoodFor: [
      "Meningkatkan stamina",
      "Pengalaman makan eksklusif",
      "Rasa mewah & klasik"
    ]
  }
];


export default function MealDeliverySection() {
  return (
    <>
      <MealDeliveryCard deliveryTime={'pagi'} isAdded={true} />
      <MealDeliveryCard deliveryTime={'siang'} />
      <MealDeliveryCard deliveryTime={'malam'} />
    </>
  )
}