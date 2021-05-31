// Ttm

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_DEATH_PLANE, SURFACE_INSTANT_WARP_1E, SURFACE_NO_CAM_COL_SLIPPERY
} from "../../../../include/surface_terrains"

// 0x0702F0F8 - 0x0703013C
export const ttm_seg7_area_4_collision = [
    COL_INIT(),
    COL_VERTEX_INIT(0xFF),
    COL_VERTEX(-6860, 6042, 5120),
    COL_VERTEX(-6963, 6144, 5120),
    COL_VERTEX(-6860, 6094, 5634),
    COL_VERTEX(-6963, 6196, 5634),
    COL_VERTEX(-6246, 6042, 5120),
    COL_VERTEX(-6246, 6094, 5634),
    COL_VERTEX(-6143, 6196, 5634),
    COL_VERTEX(-6143, 6144, 5120),
    COL_VERTEX(8192, -6143, -8191),
    COL_VERTEX(-8191, -6143, 8192),
    COL_VERTEX(8192, -6143, 8192),
    COL_VERTEX(-8191, -6143, -8191),
    COL_VERTEX(-7489, -1865, -3787),
    COL_VERTEX(-5441, -1865, -5835),
    COL_VERTEX(-7489, -1865, -5835),
    COL_VERTEX(-5441, -1865, -3787),
    COL_VERTEX(-3188, -1967, -6756),
    COL_VERTEX(-3188, -1558, -5220),
    COL_VERTEX(-3188, -1558, -4401),
    COL_VERTEX(-3188, -1967, -2353),
    COL_VERTEX(-3188, 592, -5732),
    COL_VERTEX(-3188, -841, -4401),
    COL_VERTEX(-3188, -739, -4504),
    COL_VERTEX(-3188, 592, -3377),
    COL_VERTEX(-3188, -841, -5220),
    COL_VERTEX(-3188, -739, -5118),
    COL_VERTEX(-3188, 1616, -4708),
    COL_VERTEX(6539, 1718, -2252),
    COL_VERTEX(6539, 1411, -1124),
    COL_VERTEX(6539, 1923, -1124),
    COL_VERTEX(6539, 1206, -2252),
    COL_VERTEX(6381, 1616, -2886),
    COL_VERTEX(6865, 1616, -3066),
    COL_VERTEX(7053, 1718, -2316),
    COL_VERTEX(6619, 1564, -3902),
    COL_VERTEX(6071, 1001, -3506),
    COL_VERTEX(6495, 1513, -3812),
    COL_VERTEX(5644, 1411, -3933),
    COL_VERTEX(6071, 1513, -3506),
    COL_VERTEX(5644, 899, -3933),
    COL_VERTEX(5950, 1411, -4357),
    COL_VERTEX(5204, 1308, -4728),
    COL_VERTEX(5024, 796, -4243),
    COL_VERTEX(4390, 1206, -4401),
    COL_VERTEX(5024, 1308, -4243),
    COL_VERTEX(4390, 694, -4401),
    COL_VERTEX(4454, 1206, -4916),
    COL_VERTEX(3262, 1104, -5220),
    COL_VERTEX(907, 592, -4401),
    COL_VERTEX(-3188, -1455, -4401),
    COL_VERTEX(-628, -1967, -4401),
    COL_VERTEX(-2217, -1279, -4401),
    COL_VERTEX(-2217, -1279, -5220),
    COL_VERTEX(-1218, -799, -4401),
    COL_VERTEX(-1218, -799, -5220),
    COL_VERTEX(-1730, -1106, -5220),
    COL_VERTEX(-1730, -1106, -4401),
    COL_VERTEX(-5441, -1865, -5220),
    COL_VERTEX(-5441, -841, -3787),
    COL_VERTEX(-5441, -1251, -4401),
    COL_VERTEX(-5441, -841, -5835),
    COL_VERTEX(-7489, -841, -3787),
    COL_VERTEX(-5441, -1148, -4504),
    COL_VERTEX(-5441, -1865, -4401),
    COL_VERTEX(-6143, 6247, 6144),
    COL_VERTEX(-6246, 6144, 6144),
    COL_VERTEX(3058, 5251, 3687),
    COL_VERTEX(3058, 3100, 3073),
    COL_VERTEX(5918, 2742, 3022),
    COL_VERTEX(3058, 2998, 2971),
    COL_VERTEX(6040, 1462, -4481),
    COL_VERTEX(7009, 1667, -3119),
    COL_VERTEX(5293, 1462, -4968),
    COL_VERTEX(5310, 1564, -5016),
    COL_VERTEX(5257, 1360, -4872),
    COL_VERTEX(4485, 1360, -5170),
    COL_VERTEX(6100, 1564, -4564),
    COL_VERTEX(6702, 1667, -3962),
    COL_VERTEX(7051, 1923, -1124),
    COL_VERTEX(7051, 2281, 1127),
    COL_VERTEX(7205, 2332, 1127),
    COL_VERTEX(7053, 2332, 1602),
    COL_VERTEX(7205, 1974, -1124),
    COL_VERTEX(7206, 1769, -2334),
    COL_VERTEX(7307, 2435, 1127),
    COL_VERTEX(7206, 2384, 1621),
    COL_VERTEX(7307, 2076, -1124),
    COL_VERTEX(7307, 1872, -2347),
    COL_VERTEX(4472, 1257, -5068),
    COL_VERTEX(6539, 1769, 1127),
    COL_VERTEX(5906, 2640, 2921),
    COL_VERTEX(6281, 2588, 2827),
    COL_VERTEX(5887, 2588, 2768),
    COL_VERTEX(6228, 2537, 2682),
    COL_VERTEX(-5157, 5325, 2359),
    COL_VERTEX(-5082, 5325, 2969),
    COL_VERTEX(-5422, 5428, 3054),
    COL_VERTEX(-5635, 5428, 2478),
    COL_VERTEX(3058, 2179, 615),
    COL_VERTEX(6317, 2691, 2923),
    COL_VERTEX(5925, 2896, 3073),
    COL_VERTEX(6048, 2537, 2198),
    COL_VERTEX(3058, 2486, 2868),
    COL_VERTEX(3058, 2998, 2868),
    COL_VERTEX(6564, 2486, 2517),
    COL_VERTEX(6259, 1974, 2093),
    COL_VERTEX(6378, 1923, 1973),
    COL_VERTEX(6802, 2435, 2279),
    COL_VERTEX(6483, 1872, 1763),
    COL_VERTEX(6968, 2384, 1942),
    COL_VERTEX(6539, 1820, 1539),
    COL_VERTEX(1829, 3365, 2290),
    COL_VERTEX(600, 3616, 2725),
    COL_VERTEX(1829, 3258, 2895),
    COL_VERTEX(3058, 2998, 2356),
    COL_VERTEX(-5757, 5530, 3222),
    COL_VERTEX(-6116, 5530, 2723),
    COL_VERTEX(-5993, 5632, 3458),
    COL_VERTEX(-6492, 5632, 3099),
    COL_VERTEX(-6737, 5735, 3580),
    COL_VERTEX(-6161, 5735, 3793),
    COL_VERTEX(-6246, 5837, 4133),
    COL_VERTEX(-6856, 5837, 4058),
    COL_VERTEX(3058, 3715, 2254),
    COL_VERTEX(-6575, 6349, 3039),
    COL_VERTEX(-6833, 5837, 3545),
    COL_VERTEX(-6575, 5735, 3039),
    COL_VERTEX(-6833, 6452, 3545),
    COL_VERTEX(-6957, 5940, 4046),
    COL_VERTEX(-6737, 6554, 3580),
    COL_VERTEX(-6856, 6656, 4058),
    COL_VERTEX(-6957, 6554, 4046),
    COL_VERTEX(-6963, 6759, 5120),
    COL_VERTEX(-6161, 6554, 3793),
    COL_VERTEX(-6492, 6452, 3099),
    COL_VERTEX(-6246, 6656, 4133),
    COL_VERTEX(-6860, 6861, 5120),
    COL_VERTEX(-6065, 6452, 3829),
    COL_VERTEX(-5993, 6452, 3458),
    COL_VERTEX(-6144, 6554, 4146),
    COL_VERTEX(-6246, 6861, 5120),
    COL_VERTEX(-5910, 5735, 3518),
    COL_VERTEX(-5910, 6349, 3518),
    COL_VERTEX(-6065, 5837, 3829),
    COL_VERTEX(-6143, 6759, 5120),
    COL_VERTEX(-6144, 5940, 4146),
    COL_VERTEX(-6176, 6247, 2640),
    COL_VERTEX(-6176, 5632, 2640),
    COL_VERTEX(-6116, 6349, 2723),
    COL_VERTEX(-5757, 6349, 3222),
    COL_VERTEX(-5697, 5632, 3305),
    COL_VERTEX(-5697, 6247, 3305),
    COL_VERTEX(-5670, 6144, 2382),
    COL_VERTEX(-5670, 5530, 2382),
    COL_VERTEX(-5635, 6247, 2478),
    COL_VERTEX(-5422, 6247, 3054),
    COL_VERTEX(-5386, 5530, 3150),
    COL_VERTEX(-5386, 6144, 3150),
    COL_VERTEX(-5169, 6042, 2258),
    COL_VERTEX(-5169, 5428, 2258),
    COL_VERTEX(-5157, 6144, 2359),
    COL_VERTEX(-5082, 6144, 2969),
    COL_VERTEX(-5069, 5428, 3071),
    COL_VERTEX(-5069, 6042, 3071),
    COL_VERTEX(-6143, 6861, 6144),
    COL_VERTEX(-6246, 6964, 6144),
    COL_VERTEX(-6860, 6964, 6144),
    COL_VERTEX(-6963, 6861, 6144),
    COL_VERTEX(-3071, 4944, 2971),
    COL_VERTEX(-3071, 4944, 2356),
    COL_VERTEX(-3071, 5046, 3073),
    COL_VERTEX(-3071, 5046, 2254),
    COL_VERTEX(-3071, 5660, 2254),
    COL_VERTEX(-3071, 5763, 2356),
    COL_VERTEX(-3071, 5763, 2971),
    COL_VERTEX(-3071, 5660, 3073),
    COL_VERTEX(-1842, 5084, 2171),
    COL_VERTEX(-1842, 4510, 2391),
    COL_VERTEX(-1842, 4451, 2523),
    COL_VERTEX(-613, 4506, 2152),
    COL_VERTEX(-1842, 5216, 2230),
    COL_VERTEX(-613, 4650, 2165),
    COL_VERTEX(-613, 5045, 2635),
    COL_VERTEX(-1842, 5436, 2804),
    COL_VERTEX(-1842, 5377, 2936),
    COL_VERTEX(-613, 5033, 2780),
    COL_VERTEX(-613, 4562, 3175),
    COL_VERTEX(-1842, 4803, 3156),
    COL_VERTEX(-1842, 4671, 3097),
    COL_VERTEX(-613, 4418, 3162),
    COL_VERTEX(-613, 4023, 2691),
    COL_VERTEX(-613, 4035, 2547),
    COL_VERTEX(600, 3923, 2193),
    COL_VERTEX(600, 4063, 2155),
    COL_VERTEX(600, 4595, 2462),
    COL_VERTEX(600, 4633, 2602),
    COL_VERTEX(600, 4326, 3134),
    COL_VERTEX(600, 4186, 3172),
    COL_VERTEX(600, 3654, 2865),
    COL_VERTEX(1829, 3483, 2207),
    COL_VERTEX(1829, 4088, 2313),
    COL_VERTEX(1829, 4172, 2432),
    COL_VERTEX(1829, 4065, 3037),
    COL_VERTEX(1829, 3946, 3120),
    COL_VERTEX(1829, 3341, 3013),
    COL_VERTEX(3058, 3100, 2254),
    COL_VERTEX(3058, 3817, 2356),
    COL_VERTEX(3058, 3817, 2971),
    COL_VERTEX(3058, 3715, 3073),
    COL_VERTEX(6654, 2537, 2641),
    COL_VERTEX(6714, 2640, 2724),
    COL_VERTEX(6927, 2486, 2369),
    COL_VERTEX(7010, 2588, 2429),
    COL_VERTEX(7112, 2435, 1996),
    COL_VERTEX(7208, 2537, 2031),
    COL_VERTEX(7307, 2486, 1633),
    COL_VERTEX(7105, 1769, -3155),
    COL_VERTEX(6381, 1104, -2886),
    COL_VERTEX(3262, 1104, -4401),
    COL_VERTEX(3262, 592, -4401),
    COL_VERTEX(907, 592, -5220),
    COL_VERTEX(907, 80, -5220),
    COL_VERTEX(907, 80, -4401),
    COL_VERTEX(-3188, -1967, -4401),
    COL_VERTEX(-706, -390, -5220),
    COL_VERTEX(-706, -390, -4401),
    COL_VERTEX(-628, -1967, -5220),
    COL_VERTEX(-7489, -841, -5835),
    COL_VERTEX(-5441, -1251, -5220),
    COL_VERTEX(-5441, -1148, -5118),
    COL_VERTEX(-3188, -1455, -5220),
    COL_VERTEX(-6860, 6144, 6144),
    COL_VERTEX(-6963, 6247, 6144),
    COL_VERTEX(3058, 2179, 3687),
    COL_VERTEX(6130, 1667, -4606),
    COL_VERTEX(6744, 1769, -3992),
    COL_VERTEX(5824, 2588, 2254),
    COL_VERTEX(4491, 1462, -5220),
    COL_VERTEX(7154, 1872, -3172),
    COL_VERTEX(7358, 2588, 1639),
    COL_VERTEX(7358, 2537, 1127),
    COL_VERTEX(7358, 1974, -2353),
    COL_VERTEX(7358, 2179, -1124),
    COL_VERTEX(6539, 2281, 1127),
    COL_VERTEX(6334, 2793, 2971),
    COL_VERTEX(6744, 2742, 2766),
    COL_VERTEX(5824, 2076, 2254),
    COL_VERTEX(6048, 2025, 2198),
    COL_VERTEX(6259, 2486, 2093),
    COL_VERTEX(6378, 2435, 1973),
    COL_VERTEX(6483, 2384, 1763),
    COL_VERTEX(6539, 2332, 1539),
    COL_VERTEX(3058, 5251, 615),
    COL_VERTEX(7051, 2691, 2459),
    COL_VERTEX(7256, 2640, 2049),
    COL_TRI_INIT(SURFACE_DEFAULT, 425),
    COL_TRI(16, 17, 18),
    COL_TRI(16, 18, 19),
    COL_TRI(17, 16, 20),
    COL_TRI(19, 18, 21),
    COL_TRI(20, 19, 22),
    COL_TRI(20, 23, 19),
    COL_TRI(19, 21, 22),
    COL_TRI(24, 17, 20),
    COL_TRI(20, 22, 25),
    COL_TRI(20, 25, 24),
    COL_TRI(20, 26, 23),
    COL_TRI(27, 28, 29),
    COL_TRI(30, 27, 31),
    COL_TRI(27, 32, 31),
    COL_TRI(27, 33, 32),
    COL_TRI(33, 29, 78),
    COL_TRI(33, 27, 29),
    COL_TRI(32, 33, 71),
    COL_TRI(34, 32, 71),
    COL_TRI(34, 36, 32),
    COL_TRI(30, 31, 217),
    COL_TRI(35, 217, 31),
    COL_TRI(35, 31, 38),
    COL_TRI(36, 38, 31),
    COL_TRI(37, 38, 40),
    COL_TRI(38, 36, 40),
    COL_TRI(39, 35, 38),
    COL_TRI(39, 38, 37),
    COL_TRI(36, 34, 70),
    COL_TRI(40, 36, 70),
    COL_TRI(41, 37, 40),
    COL_TRI(42, 37, 44),
    COL_TRI(42, 39, 37),
    COL_TRI(41, 44, 37),
    COL_TRI(43, 44, 46),
    COL_TRI(44, 41, 46),
    COL_TRI(45, 42, 44),
    COL_TRI(45, 44, 43),
    COL_TRI(27, 30, 28),
    COL_TRI(46, 41, 88),
    COL_TRI(46, 88, 47),
    COL_TRI(45, 43, 218),
    COL_TRI(47, 218, 43),
    COL_TRI(47, 43, 46),
    COL_TRI(45, 218, 219),
    COL_TRI(48, 218, 47),
    COL_TRI(50, 56, 51),
    COL_TRI(48, 47, 220),
    COL_TRI(48, 221, 222),
    COL_TRI(48, 220, 221),
    COL_TRI(48, 222, 219),
    COL_TRI(49, 223, 50),
    COL_TRI(50, 224, 225),
    COL_TRI(50, 226, 224),
    COL_TRI(51, 49, 50),
    COL_TRI(52, 51, 55),
    COL_TRI(51, 56, 55),
    COL_TRI(53, 225, 224),
    COL_TRI(50, 225, 53),
    COL_TRI(54, 53, 224),
    COL_TRI(50, 53, 56),
    COL_TRI(55, 56, 54),
    COL_TRI(56, 53, 54),
    COL_TRI(57, 51, 52),
    COL_TRI(57, 63, 51),
    COL_TRI(48, 219, 218),
    COL_TRI(58, 62, 59),
    COL_TRI(59, 15, 58),
    COL_TRI(58, 60, 62),
    COL_TRI(58, 61, 227),
    COL_TRI(58, 227, 60),
    COL_TRI(60, 227, 14),
    COL_TRI(14, 227, 61),
    COL_TRI(60, 13, 57),
    COL_TRI(60, 57, 228),
    COL_TRI(60, 228, 229),
    COL_TRI(60, 229, 62),
    COL_TRI(14, 61, 12),
    COL_TRI(61, 58, 15),
    COL_TRI(61, 15, 12),
    COL_TRI(60, 14, 13),
    COL_TRI(57, 24, 228),
    COL_TRI(24, 25, 229),
    COL_TRI(25, 22, 62),
    COL_TRI(25, 62, 229),
    COL_TRI(62, 22, 21),
    COL_TRI(62, 21, 59),
    COL_TRI(24, 229, 228),
    COL_TRI(63, 59, 21),
    COL_TRI(63, 21, 49),
    COL_TRI(59, 63, 15),
    COL_TRI(57, 230, 24),
    COL_TRI(66, 233, 67),
    COL_TRI(64, 5, 65),
    COL_TRI(64, 6, 5),
    COL_TRI(65, 5, 231),
    COL_TRI(5, 2, 231),
    COL_TRI(2, 3, 231),
    COL_TRI(3, 232, 231),
    COL_TRI(70, 34, 76),
    COL_TRI(67, 90, 92),
    COL_TRI(68, 90, 67),
    COL_TRI(68, 67, 208),
    COL_TRI(69, 67, 92),
    COL_TRI(69, 67, 233),
    COL_TRI(66, 67, 208),
    COL_TRI(34, 71, 77),
    COL_TRI(34, 77, 76),
    COL_TRI(76, 77, 234),
    COL_TRI(33, 83, 71),
    COL_TRI(71, 216, 77),
    COL_TRI(71, 83, 216),
    COL_TRI(72, 73, 237),
    COL_TRI(73, 76, 234),
    COL_TRI(73, 72, 76),
    COL_TRI(70, 76, 72),
    COL_TRI(74, 70, 72),
    COL_TRI(75, 72, 237),
    COL_TRI(74, 72, 75),
    COL_TRI(77, 235, 234),
    COL_TRI(33, 78, 83),
    COL_TRI(78, 82, 83),
    COL_TRI(78, 79, 80),
    COL_TRI(78, 80, 82),
    COL_TRI(79, 81, 80),
    COL_TRI(80, 85, 84),
    COL_TRI(81, 85, 80),
    COL_TRI(82, 80, 84),
    COL_TRI(82, 86, 87),
    COL_TRI(83, 82, 87),
    COL_TRI(82, 84, 86),
    COL_TRI(84, 239, 240),
    COL_TRI(84, 215, 239),
    COL_TRI(85, 215, 84),
    COL_TRI(86, 84, 240),
    COL_TRI(87, 86, 241),
    COL_TRI(86, 242, 241),
    COL_TRI(86, 240, 242),
    COL_TRI(41, 74, 88),
    COL_TRI(88, 74, 75),
    COL_TRI(47, 88, 75),
    COL_TRI(47, 75, 237),
    COL_TRI(89, 29, 28),
    COL_TRI(89, 243, 29),
    COL_TRI(90, 68, 99),
    COL_TRI(91, 90, 99),
    COL_TRI(92, 90, 91),
    COL_TRI(93, 92, 91),
    COL_TRI(92, 236, 103),
    COL_TRI(100, 68, 208),
    COL_TRI(94, 97, 96),
    COL_TRI(95, 94, 96),
    COL_TRI(96, 97, 115),
    COL_TRI(97, 116, 115),
    COL_TRI(69, 233, 98),
    COL_TRI(98, 114, 69),
    COL_TRI(68, 100, 244),
    COL_TRI(99, 68, 244),
    COL_TRI(69, 103, 113),
    COL_TRI(66, 208, 207),
    COL_TRI(93, 236, 92),
    COL_TRI(93, 101, 236),
    COL_TRI(101, 246, 236),
    COL_TRI(102, 236, 246),
    COL_TRI(102, 103, 236),
    COL_TRI(92, 103, 69),
    COL_TRI(103, 114, 113),
    COL_TRI(108, 249, 250),
    COL_TRI(101, 247, 246),
    COL_TRI(104, 248, 101),
    COL_TRI(104, 101, 93),
    COL_TRI(105, 101, 248),
    COL_TRI(105, 247, 101),
    COL_TRI(106, 105, 248),
    COL_TRI(107, 248, 104),
    COL_TRI(107, 249, 248),
    COL_TRI(106, 248, 249),
    COL_TRI(108, 106, 249),
    COL_TRI(109, 249, 107),
    COL_TRI(109, 250, 249),
    COL_TRI(110, 108, 250),
    COL_TRI(81, 251, 250),
    COL_TRI(81, 250, 109),
    COL_TRI(110, 250, 251),
    COL_TRI(89, 110, 251),
    COL_TRI(79, 251, 81),
    COL_TRI(79, 243, 251),
    COL_TRI(89, 251, 243),
    COL_TRI(78, 243, 79),
    COL_TRI(78, 29, 243),
    COL_TRI(111, 112, 113),
    COL_TRI(112, 198, 113),
    COL_TRI(98, 205, 114),
    COL_TRI(36, 31, 32),
    COL_TRI(115, 116, 117),
    COL_TRI(116, 118, 117),
    COL_TRI(117, 118, 120),
    COL_TRI(118, 119, 120),
    COL_TRI(119, 122, 121),
    COL_TRI(120, 119, 121),
    COL_TRI(124, 127, 125),
    COL_TRI(66, 207, 206),
    COL_TRI(121, 122, 4),
    COL_TRI(122, 0, 4),
    COL_TRI(123, 98, 252),
    COL_TRI(123, 205, 98),
    COL_TRI(124, 125, 126),
    COL_TRI(125, 119, 118),
    COL_TRI(1, 128, 131),
    COL_TRI(122, 128, 1),
    COL_TRI(125, 128, 119),
    COL_TRI(127, 128, 125),
    COL_TRI(127, 131, 128),
    COL_TRI(128, 122, 119),
    COL_TRI(0, 122, 1),
    COL_TRI(129, 127, 124),
    COL_TRI(130, 131, 127),
    COL_TRI(129, 130, 127),
    COL_TRI(1, 131, 132),
    COL_TRI(131, 130, 136),
    COL_TRI(132, 131, 136),
    COL_TRI(133, 129, 134),
    COL_TRI(134, 129, 124),
    COL_TRI(135, 130, 129),
    COL_TRI(133, 135, 129),
    COL_TRI(130, 135, 140),
    COL_TRI(136, 130, 140),
    COL_TRI(137, 133, 138),
    COL_TRI(138, 133, 134),
    COL_TRI(139, 135, 133),
    COL_TRI(137, 139, 133),
    COL_TRI(135, 139, 144),
    COL_TRI(140, 135, 144),
    COL_TRI(141, 137, 142),
    COL_TRI(141, 143, 137),
    COL_TRI(142, 137, 138),
    COL_TRI(143, 139, 137),
    COL_TRI(146, 124, 126),
    COL_TRI(144, 139, 145),
    COL_TRI(143, 145, 139),
    COL_TRI(120, 143, 141),
    COL_TRI(120, 121, 143),
    COL_TRI(121, 145, 143),
    COL_TRI(144, 145, 7),
    COL_TRI(145, 121, 4),
    COL_TRI(7, 145, 4),
    COL_TRI(117, 120, 141),
    COL_TRI(146, 126, 147),
    COL_TRI(126, 118, 116),
    COL_TRI(126, 125, 118),
    COL_TRI(134, 124, 146),
    COL_TRI(148, 134, 146),
    COL_TRI(138, 134, 148),
    COL_TRI(142, 138, 149),
    COL_TRI(149, 138, 148),
    COL_TRI(150, 142, 151),
    COL_TRI(150, 141, 142),
    COL_TRI(151, 142, 149),
    COL_TRI(117, 141, 150),
    COL_TRI(115, 117, 150),
    COL_TRI(147, 126, 116),
    COL_TRI(152, 147, 153),
    COL_TRI(152, 146, 147),
    COL_TRI(147, 116, 97),
    COL_TRI(153, 147, 97),
    COL_TRI(148, 146, 152),
    COL_TRI(149, 148, 154),
    COL_TRI(154, 148, 152),
    COL_TRI(151, 149, 155),
    COL_TRI(155, 149, 154),
    COL_TRI(156, 150, 151),
    COL_TRI(157, 151, 155),
    COL_TRI(156, 151, 157),
    COL_TRI(115, 150, 156),
    COL_TRI(96, 115, 156),
    COL_TRI(158, 153, 159),
    COL_TRI(158, 152, 153),
    COL_TRI(153, 97, 94),
    COL_TRI(159, 153, 94),
    COL_TRI(154, 152, 158),
    COL_TRI(164, 144, 7),
    COL_TRI(155, 154, 160),
    COL_TRI(160, 154, 158),
    COL_TRI(157, 155, 161),
    COL_TRI(161, 155, 160),
    COL_TRI(162, 156, 157),
    COL_TRI(163, 157, 161),
    COL_TRI(162, 157, 163),
    COL_TRI(96, 156, 162),
    COL_TRI(95, 96, 162),
    COL_TRI(164, 7, 64),
    COL_TRI(94, 95, 168),
    COL_TRI(165, 144, 164),
    COL_TRI(165, 140, 144),
    COL_TRI(166, 136, 140),
    COL_TRI(166, 140, 165),
    COL_TRI(167, 136, 166),
    COL_TRI(167, 132, 136),
    COL_TRI(132, 167, 232),
    COL_TRI(1, 132, 232),
    COL_TRI(168, 95, 170),
    COL_TRI(169, 94, 168),
    COL_TRI(173, 160, 158),
    COL_TRI(95, 162, 170),
    COL_TRI(170, 163, 175),
    COL_TRI(170, 162, 163),
    COL_TRI(159, 94, 169),
    COL_TRI(171, 159, 169),
    COL_TRI(172, 159, 171),
    COL_TRI(172, 158, 159),
    COL_TRI(173, 158, 172),
    COL_TRI(178, 169, 168),
    COL_TRI(161, 160, 173),
    COL_TRI(174, 161, 173),
    COL_TRI(175, 161, 174),
    COL_TRI(175, 163, 161),
    COL_TRI(171, 169, 177),
    COL_TRI(176, 171, 177),
    COL_TRI(176, 172, 171),
    COL_TRI(177, 169, 178),
    COL_TRI(177, 178, 191),
    COL_TRI(179, 177, 191),
    COL_TRI(179, 176, 177),
    COL_TRI(180, 176, 181),
    COL_TRI(181, 176, 179),
    COL_TRI(180, 172, 176),
    COL_TRI(173, 172, 180),
    COL_TRI(182, 183, 180),
    COL_TRI(182, 180, 181),
    COL_TRI(183, 173, 180),
    COL_TRI(183, 174, 173),
    COL_TRI(184, 183, 185),
    COL_TRI(185, 183, 182),
    COL_TRI(184, 174, 183),
    COL_TRI(191, 178, 190),
    COL_TRI(175, 174, 184),
    COL_TRI(186, 187, 184),
    COL_TRI(186, 184, 185),
    COL_TRI(187, 175, 184),
    COL_TRI(187, 170, 175),
    COL_TRI(188, 187, 189),
    COL_TRI(189, 187, 186),
    COL_TRI(188, 170, 187),
    COL_TRI(168, 170, 188),
    COL_TRI(178, 168, 188),
    COL_TRI(190, 178, 188),
    COL_TRI(190, 188, 189),
    COL_TRI(196, 185, 195),
    COL_TRI(192, 179, 191),
    COL_TRI(192, 191, 112),
    COL_TRI(191, 190, 112),
    COL_TRI(193, 179, 192),
    COL_TRI(181, 179, 193),
    COL_TRI(194, 182, 181),
    COL_TRI(194, 181, 193),
    COL_TRI(185, 182, 195),
    COL_TRI(195, 182, 194),
    COL_TRI(196, 186, 185),
    COL_TRI(189, 186, 197),
    COL_TRI(197, 186, 196),
    COL_TRI(198, 190, 189),
    COL_TRI(198, 189, 197),
    COL_TRI(112, 190, 198),
    COL_TRI(111, 192, 112),
    COL_TRI(193, 192, 199),
    COL_TRI(199, 192, 111),
    COL_TRI(200, 194, 193),
    COL_TRI(200, 193, 199),
    COL_TRI(113, 198, 204),
    COL_TRI(114, 111, 113),
    COL_TRI(195, 194, 201),
    COL_TRI(201, 194, 200),
    COL_TRI(202, 196, 195),
    COL_TRI(202, 195, 201),
    COL_TRI(197, 196, 203),
    COL_TRI(203, 196, 202),
    COL_TRI(204, 197, 203),
    COL_TRI(204, 198, 197),
    COL_TRI(199, 111, 205),
    COL_TRI(205, 111, 114),
    COL_TRI(123, 200, 199),
    COL_TRI(123, 199, 205),
    COL_TRI(201, 200, 206),
    COL_TRI(206, 200, 123),
    COL_TRI(207, 202, 201),
    COL_TRI(207, 201, 206),
    COL_TRI(203, 202, 208),
    COL_TRI(208, 202, 207),
    COL_TRI(67, 203, 208),
    COL_TRI(67, 204, 203),
    COL_TRI(69, 204, 67),
    COL_TRI(113, 204, 69),
    COL_TRI(206, 123, 252),
    COL_TRI(66, 206, 252),
    COL_TRI(93, 91, 209),
    COL_TRI(104, 93, 209),
    COL_TRI(91, 99, 210),
    COL_TRI(209, 91, 210),
    COL_TRI(210, 99, 245),
    COL_TRI(99, 244, 245),
    COL_TRI(104, 209, 211),
    COL_TRI(107, 104, 211),
    COL_TRI(209, 210, 212),
    COL_TRI(211, 209, 212),
    COL_TRI(210, 245, 253),
    COL_TRI(212, 210, 253),
    COL_TRI(107, 211, 213),
    COL_TRI(109, 107, 213),
    COL_TRI(211, 212, 214),
    COL_TRI(213, 211, 214),
    COL_TRI(212, 253, 254),
    COL_TRI(214, 212, 254),
    COL_TRI(109, 213, 85),
    COL_TRI(81, 109, 85),
    COL_TRI(216, 238, 235),
    COL_TRI(213, 214, 215),
    COL_TRI(85, 213, 215),
    COL_TRI(214, 254, 239),
    COL_TRI(215, 214, 239),
    COL_TRI(83, 87, 216),
    COL_TRI(216, 87, 238),
    COL_TRI(87, 241, 238),
    COL_TRI(77, 216, 235),
    COL_TRI(40, 70, 74),
    COL_TRI(41, 40, 74),
    COL_TRI_INIT(SURFACE_DEATH_PLANE, 2),
    COL_TRI(8, 9, 10),
    COL_TRI(8, 11, 9),
    COL_TRI_INIT(SURFACE_INSTANT_WARP_1E, 6),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 2),
    COL_TRI(4, 0, 2),
    COL_TRI(5, 4, 2),
    COL_TRI(6, 4, 5),
    COL_TRI(6, 7, 4),
    COL_TRI_INIT(SURFACE_NO_CAM_COL_SLIPPERY, 2),
    COL_TRI(12, 13, 14),
    COL_TRI(12, 15, 13),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
