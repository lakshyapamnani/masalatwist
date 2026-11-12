import { Category, MenuItem } from './types';

export const COLORS = {
  primary: '#F57C00',
  secondary: '#262626',
  success: '#22c55e',
  danger: '#ef4444',
};

export const INITIAL_CATEGORIES: Category[] = [
  // Chinese
  { id: 'cat_chinese_starters', name: 'Chinese Starters', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chinese_soup', name: 'Chinese Soup', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chinese_rice', name: 'Chinese Rice', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chinese_noodles', name: 'Chinese Noodles', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chinese_bhel', name: 'Chinese Bhel', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_spring_roll', name: 'Spring Roll', type: 'FOOD', taxType: 'GST' },

  // Masala Twist
  { id: 'cat_chicken_tub', name: 'Chicken Tub', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_paneer_tub', name: 'Paneer Tub', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_loaded_fries_veg', name: 'Loaded Fries (Veg)', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chicken_loaded_fries', name: 'Chicken Loaded Fries', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_veg_momos', name: 'Veg Momos', type: 'FOOD', taxType: 'GST' },
  { id: 'cat_chicken_momos', name: 'Chicken Momos', type: 'FOOD', taxType: 'GST' },

  // Beverages
  { id: 'cat_cold_coffee', name: 'Cold Coffee', type: 'DRINK', taxType: 'GST' },
  { id: 'cat_mojito_coolers', name: 'Mojito & Coolers', type: 'DRINK', taxType: 'GST' },
  { id: 'cat_shakes', name: 'Shakes', type: 'DRINK', taxType: 'GST' },
  { id: 'cat_beverage_addons', name: 'Beverage Add-Ons', type: 'DRINK', taxType: 'GST' },
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Chinese -> Starters (cat_chinese_starters)
  { id: 'cs1', name: 'Chicken Lollipop', price: 239, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },
  { id: 'cs2', name: 'Masala Lollipop', price: 299, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 149 },
  { id: 'cs3', name: 'Chicken Chilly', price: 266, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 139 },
  { id: 'cs4', name: 'Chicken Crispy', price: 269, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 139 },
  { id: 'cs5', name: 'Chicken 65', price: 299, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 169 },
  { id: 'cs6', name: 'Chicken Sathey', price: 299, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 169 },
  { id: 'cs7', name: 'Chicken Hot Garlic', price: 279, categoryId: 'cat_chinese_starters', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 149 },

  // Chinese -> Soup (cat_chinese_soup)
  { id: 'csoup1', name: 'Chicken Soup', price: 149, categoryId: 'cat_chinese_soup', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 79 },
  { id: 'csoup2', name: 'Chicken Garlic Soup', price: 159, categoryId: 'cat_chinese_soup', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 89 },
  { id: 'csoup3', name: 'Chicken Manchow Soup', price: 159, categoryId: 'cat_chinese_soup', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 89 },
  { id: 'csoup4', name: 'Chicken Clear Soup', price: 169, categoryId: 'cat_chinese_soup', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 99 },
  { id: 'csoup5', name: 'Egg Omelette (Single Egg)', price: 20, categoryId: 'cat_chinese_soup', isVeg: false, vegType: 'NON_VEG', quantityStr: 'Single' },

  // Chinese -> Rice (cat_chinese_rice)
  { id: 'crice1', name: 'Egg Rice', price: 159, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 99 },
  { id: 'crice2', name: 'Chicken Fried Rice', price: 229, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 109 },
  { id: 'crice3', name: 'Chicken Schezwan Rice', price: 249, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },
  { id: 'crice4', name: 'Chicken Triple Rice', price: 289, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 189 },
  { id: 'crice5', name: 'Sherpa Rice With Gravy', price: 299, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 199 },
  { id: 'crice6', name: 'Chicken Combination Rice', price: 229, categoryId: 'cat_chinese_rice', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },

  // Chinese -> Noodles (cat_chinese_noodles)
  { id: 'cnood1', name: 'Egg Noodles', price: 179, categoryId: 'cat_chinese_noodles', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 99 },
  { id: 'cnood2', name: 'Chicken Noodles', price: 199, categoryId: 'cat_chinese_noodles', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 109 },
  { id: 'cnood3', name: 'Chicken Schezwan Noodles', price: 209, categoryId: 'cat_chinese_noodles', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },
  { id: 'cnood4', name: 'Chicken Triple Noodles', price: 289, categoryId: 'cat_chinese_noodles', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 189 },

  // Chinese -> Chinese Bhel (cat_chinese_bhel)
  { id: 'cbhel1', name: 'Chicken Chinese Bhel', price: 219, categoryId: 'cat_chinese_bhel', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },
  { id: 'cbhel2', name: 'Chicken Schezwan Bhel', price: 229, categoryId: 'cat_chinese_bhel', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 129 },

  // Chinese -> Spring Roll (cat_spring_roll)
  { id: 'croll1', name: 'Chicken Roll', price: 199, categoryId: 'cat_spring_roll', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 109 },
  { id: 'croll2', name: 'Chicken Schezwan Roll', price: 209, categoryId: 'cat_spring_roll', isVeg: false, vegType: 'NON_VEG', hasPortions: true, halfPrice: 119 },

  // Masala Twist -> Chicken Tub (cat_chicken_tub)
  { id: 'ctub1', name: 'Peri Peri Chicken Tub', price: 159, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 159, Large: 219 } },
  { id: 'ctub2', name: 'Loaded Chicken Tub', price: 179, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 179, Large: 239 } },
  { id: 'ctub3', name: 'Mexican Chicken Tub', price: 189, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 189, Large: 249 } },
  { id: 'ctub4', name: 'Cheesy Jalepano Chicken Tub', price: 199, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 199, Large: 259 } },
  { id: 'ctub5', name: 'Chipotle Chicken Tub', price: 199, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 199, Large: 259 } },
  { id: 'ctub6', name: 'Salsa Chicken Tub', price: 199, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 199, Large: 259 } },
  { id: 'ctub7', name: 'Makhani Chicken Tub', price: 199, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 199, Large: 259 } },
  { id: 'ctub8', name: 'Cheesy Chicken Tub', price: 209, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 209, Large: 269 } },
  { id: 'ctub9', name: 'Cheddar Cheese Chicken Tub', price: 219, categoryId: 'cat_chicken_tub', isVeg: false, vegType: 'NON_VEG', mlPrices: { Regular: 219, Large: 279 } },

  // Masala Twist -> Paneer Tub (cat_paneer_tub)
  { id: 'ptub1', name: 'Peri Peri Paneer Tub', price: 179, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 179, Large: 239 } },
  { id: 'ptub2', name: 'Loaded Paneer Tub', price: 199, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 199, Large: 259 } },
  { id: 'ptub3', name: 'Mexican Paneer Tub', price: 209, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 209, Large: 279 } },
  { id: 'ptub4', name: 'Cheesy Jalepano Paneer Tub', price: 219, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 219, Large: 279 } },
  { id: 'ptub5', name: 'Chipotle Paneer Tub', price: 219, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 219, Large: 279 } },
  { id: 'ptub6', name: 'Salsa Paneer Tub', price: 216, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 216, Large: 279 } },
  { id: 'ptub7', name: 'Makhani Paneer Tub', price: 219, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 219, Large: 279 } },
  { id: 'ptub8', name: 'Cheesy Paneer Tub', price: 229, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 229, Large: 289 } },
  { id: 'ptub9', name: 'Cheddar Cheese Paneer Tub', price: 239, categoryId: 'cat_paneer_tub', isVeg: true, vegType: 'VEG', mlPrices: { Regular: 239, Large: 299 } },

  // Masala Twist -> Loaded Fries (Veg) (cat_loaded_fries_veg)
  { id: 'lfv1', name: 'Salted Fries', price: 69, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 69, Large: 89 } },
  { id: 'lfv2', name: 'Peri Peri', price: 79, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 79, Large: 99 } },
  { id: 'lfv3', name: 'Loaded Fries', price: 129, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 129, Large: 179 } },
  { id: 'lfv4', name: 'Mexican Loaded Fries', price: 139, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 139, Large: 189 } },
  { id: 'lfv5', name: 'Chipotle Loaded Fries', price: 139, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 139, Large: 199 } },
  { id: 'lfv6', name: 'Cheesy Jalepano Fries', price: 149, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 149, Large: 209 } },
  { id: 'lfv7', name: 'Garlic Chilli Fries', price: 149, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 149, Large: 209 } },
  { id: 'lfv8', name: 'Salsa Loaded Fries', price: 149, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 149, Large: 209 } },
  { id: 'lfv9', name: 'Cheesy Loaded Fries', price: 169, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 169, Large: 249 } },
  { id: 'lfv10', name: 'Cheddar Cheese Loaded Fries', price: 169, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 169, Large: 249 } },
  { id: 'lfv11', name: 'Makhani Loaded Fries', price: 169, categoryId: 'cat_loaded_fries_veg', isVeg: true, vegType: 'VEG', mlPrices: { Medium: 169, Large: 249 } },

  // Masala Twist -> Chicken Loaded Fries (cat_chicken_loaded_fries)
  { id: 'clf1', name: 'Chicken Loaded Fries', price: 199, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 199, Large: 249 } },
  { id: 'clf2', name: 'Mexican Loaded Fries', price: 209, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 209, Large: 259 } },
  { id: 'clf3', name: 'Chipotle Loaded Fries', price: 209, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 209, Large: 259 } },
  { id: 'clf4', name: 'Cheesy Jalepano Fries', price: 219, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 219, Large: 269 } },
  { id: 'clf5', name: 'Garlic Chilli Fries', price: 229, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 229, Large: 279 } },
  { id: 'clf6', name: 'Salsa Loaded Fries', price: 229, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 229, Large: 279 } },
  { id: 'clf7', name: 'Cheesy Loaded Fries', price: 249, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 249, Large: 299 } },
  { id: 'clf8', name: 'Cheddar Cheese Loaded Fries', price: 249, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 249, Large: 299 } },
  { id: 'clf9', name: 'Makhani Loaded Fries', price: 249, categoryId: 'cat_chicken_loaded_fries', isVeg: false, vegType: 'NON_VEG', mlPrices: { Medium: 249, Large: 299 } },

  // Masala Twist -> Veg Momos (cat_veg_momos)
  { id: 'vm1', name: 'Steam', price: 69, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 69, 'Veg Full': 119, 'Paneer Half': 89, 'Paneer Full': 139, 'Cheese Half': 89, 'Cheese Full': 139, 'Cheese Corn Half': 99, 'Cheese Corn Full': 159 } },
  { id: 'vm2', name: 'Fried', price: 79, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 79, 'Veg Full': 129, 'Paneer Half': 99, 'Paneer Full': 149, 'Cheese Half': 99, 'Cheese Full': 149, 'Cheese Corn Half': 109, 'Cheese Corn Full': 169 } },
  { id: 'vm3', name: 'Kurkure', price: 109, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 109, 'Veg Full': 169, 'Paneer Half': 119, 'Paneer Full': 189, 'Cheese Half': 129, 'Cheese Full': 199, 'Cheese Corn Half': 139, 'Cheese Corn Full': 199 } },
  { id: 'vm4', name: 'Tandoori', price: 119, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 119, 'Veg Full': 199, 'Paneer Half': 129, 'Paneer Full': 209, 'Cheese Half': 139, 'Cheese Full': 219, 'Cheese Corn Half': 149, 'Cheese Corn Full': 229 } },
  { id: 'vm5', name: 'Makhani', price: 119, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 119, 'Veg Full': 199, 'Paneer Half': 129, 'Paneer Full': 209, 'Cheese Half': 139, 'Cheese Full': 219, 'Cheese Corn Half': 149, 'Cheese Corn Full': 229 } },
  { id: 'vm6', name: 'Afghani', price: 129, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 129, 'Veg Full': 219, 'Paneer Half': 139, 'Paneer Full': 229, 'Cheese Half': 149, 'Cheese Full': 239, 'Cheese Corn Half': 159, 'Cheese Corn Full': 249 } },
  { id: 'vm7', name: 'Chinese Chilly', price: 119, categoryId: 'cat_veg_momos', isVeg: true, vegType: 'VEG', mlPrices: { 'Veg Half': 119, 'Veg Full': 199, 'Paneer Half': 129, 'Paneer Full': 199, 'Cheese Half': 139, 'Cheese Full': 219, 'Cheese Corn Half': 149, 'Cheese Corn Full': 229 } },

  // Masala Twist -> Chicken Momos (cat_chicken_momos)
  { id: 'cm1', name: 'Steam', price: 89, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 89, 'Chicken Full': 139, 'Chicken Cheese Half': 99, 'Chicken Cheese Full': 159 } },
  { id: 'cm2', name: 'Fried', price: 99, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 99, 'Chicken Full': 149, 'Chicken Cheese Half': 109, 'Chicken Cheese Full': 169 } },
  { id: 'cm3', name: 'Kurkure', price: 129, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 129, 'Chicken Full': 199, 'Chicken Cheese Half': 139, 'Chicken Cheese Full': 209 } },
  { id: 'cm4', name: 'Tandoori', price: 129, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 129, 'Chicken Full': 199, 'Chicken Cheese Half': 139, 'Chicken Cheese Full': 219 } },
  { id: 'cm5', name: 'Makhani', price: 129, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 129, 'Chicken Full': 199, 'Chicken Cheese Half': 139, 'Chicken Cheese Full': 219 } },
  { id: 'cm6', name: 'Afghani', price: 129, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 129, 'Chicken Full': 219, 'Chicken Cheese Half': 149, 'Chicken Cheese Full': 229 } },
  { id: 'cm7', name: 'Chinese Chilly', price: 129, categoryId: 'cat_chicken_momos', isVeg: false, vegType: 'NON_VEG', mlPrices: { 'Chicken Half': 129, 'Chicken Full': 199, 'Chicken Cheese Half': 139, 'Chicken Cheese Full': 219 } },

  // Beverages -> Cold Coffee (cat_cold_coffee)
  { id: 'cc1', name: 'Cold Coffee', price: 69, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 69, '350ml': 89 } },
  { id: 'cc2', name: 'Caramel Cold Coffee', price: 79, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 79, '350ml': 99 } },
  { id: 'cc3', name: 'Hazelnut Cold Coffee', price: 79, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 79, '350ml': 99 } },
  { id: 'cc4', name: 'Butterscotch Cold Coffee', price: 79, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 79, '350ml': 99 } },
  { id: 'cc5', name: 'Chocolate Cold Coffee', price: 119, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 119, '350ml': 159 } },
  { id: 'cc6', name: 'Nutella Cold Coffee', price: 139, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 139, '350ml': 179 } },
  { id: 'cc7', name: 'Biscoff Cold Coffee', price: 139, categoryId: 'cat_cold_coffee', isVeg: true, vegType: 'VEG', mlPrices: { '250ml': 139, '350ml': 179 } },

  // Beverages -> Mojito & Coolers (cat_mojito_coolers)
  { id: 'mc1', name: 'Virgin Mojito', price: 49, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc2', name: 'Blue Ocean', price: 59, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc3', name: 'Watermelon Mojito', price: 59, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc4', name: 'Mango Crusher', price: 59, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc5', name: 'Strawberry Crusher', price: 59, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc6', name: 'Lemon Ice Tea', price: 59, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'mc7', name: 'Cranberry', price: 79, categoryId: 'cat_mojito_coolers', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },

  // Beverages -> Shakes (cat_shakes)
  { id: 'sh1', name: 'Chocolate Shake', price: 60, categoryId: 'cat_shakes', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'sh2', name: 'Strawberry Shake', price: 80, categoryId: 'cat_shakes', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'sh3', name: 'Mango Shake', price: 80, categoryId: 'cat_shakes', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },
  { id: 'sh4', name: 'Oreo Shake', price: 80, categoryId: 'cat_shakes', isVeg: true, vegType: 'VEG', quantityStr: 'Regular' },

  // Beverages -> Add-Ons (cat_beverage_addons)
  { id: 'ba1', name: 'Ice Cream Scoop', price: 20, categoryId: 'cat_beverage_addons', isVeg: true, vegType: 'VEG', quantityStr: '1 Scoop' },
];

export const TAX_RATE = 0.05;
export const DRINK_TAX_RATE = 0.05;

export const INITIAL_RESTAURANT_INFO = {
  name: "Masala Twist",
  phone: "9321370001",
  address: "Shop No. 6,7,8, Patel Zion, Near Reliance Digital, Palegaon",
  gstNo: 'NOT SET',
  vatNo: 'NOT SET',
  fssaiNo: 'NOT SET',
  printServerUrl: 'http://localhost:3001',
  billPrinterIp: '',
  kotPrinterIp: '192.168.1.5',
  kotPrintWindowMins: 5,
};
