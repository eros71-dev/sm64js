// 0x07004D40 - 0x07004D58

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCycleType,
    gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode,
    gsDPSetCombineMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TX_CLAMP,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    water_09004800, water_09003800
} from "../../../../../textures/water"

const jrb_seg7_lights_07004D40 = gdSPDefLights1(
    0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x28, 0x28, 0x28
);

// 0x07004D58 - 0x07004D70
const jrb_seg7_lights_07004D58 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07004D70 - 0x07004DF0
const jrb_seg7_vertex_07004D70 = [
    [[  8048,  -2866,   1727], 0, [  2044,    150], [0x8f, 0xde, 0x2d, 0xff]],
    [[  8008,  -3020,   1579], 0, [  2044,    426], [0xfe, 0xd1, 0x75, 0xff]],
    [[  8008,  -3327,   1579], 0, [  2044,    790], [0xd0, 0x34, 0x69, 0xff]],
    [[  8048,  -3481,   1727], 0, [  2044,    882], [0xc0, 0x64, 0x2c, 0xff]],
    [[  8127,  -3481,   2024], 0, [  2044,    700], [0x9e, 0x4f, 0xf8, 0xff]],
    [[  8166,  -3327,   2173], 0, [  2044,    426], [0xac, 0x2a, 0xac, 0xff]],
    [[  8166,  -3020,   2173], 0, [  2044,     60], [0xa2, 0xcc, 0xbd, 0xff]],
    [[  8127,  -2866,   2024], 0, [  2044,      0], [0xd0, 0x8d, 0xee, 0xff]],
];

// 0x07004DF0 - 0x07004EF0
const jrb_seg7_vertex_07004DF0 = [
    [[  7241,  -2871,   2259], 0, [   172,      0], [0xf1, 0x93, 0xc3, 0xff]],
    [[  8166,  -3020,   2173], 0, [  2044,     60], [0xa2, 0xcc, 0xbd, 0xff]],
    [[  7249,  -3022,   2416], 0, [   128,     60], [0xe1, 0xe0, 0x8a, 0xff]],
    [[  8166,  -3327,   2173], 0, [  2044,    426], [0xac, 0x2a, 0xac, 0xff]],
    [[  7187,  -3325,   2432], 0, [    44,    426], [0xe3, 0x31, 0x8f, 0xff]],
    [[  8127,  -2866,   2024], 0, [  2044,      0], [0xd0, 0x8d, 0xee, 0xff]],
    [[  7117,  -3476,   2292], 0, [     0,    700], [0xf5, 0x75, 0xd2, 0xff]],
    [[  8127,  -3481,   2024], 0, [  2044,    700], [0x9e, 0x4f, 0xf8, 0xff]],
    [[  7162,  -2871,   1962], 0, [   172,    150], [0x0c, 0x8b, 0x2e, 0xff]],
    [[  8048,  -2866,   1727], 0, [  2044,    150], [0x8f, 0xde, 0x2d, 0xff]],
    [[  7092,  -3022,   1822], 0, [   128,    426], [0x1e, 0xcf, 0x71, 0xff]],
    [[  8008,  -3020,   1579], 0, [  2044,    426], [0xfe, 0xd1, 0x75, 0xff]],
    [[  7030,  -3325,   1838], 0, [    44,    790], [0x1f, 0x20, 0x76, 0xff]],
    [[  8008,  -3327,   1579], 0, [  2044,    790], [0xd0, 0x34, 0x69, 0xff]],
    [[  7038,  -3476,   1995], 0, [     0,    882], [0x10, 0x6d, 0x3d, 0xff]],
    [[  8048,  -3481,   1727], 0, [  2044,    882], [0xc0, 0x64, 0x2c, 0xff]],
];

// 0x07004EF0 - 0x07004FF0
const jrb_seg7_vertex_07004EF0 = [
    [[  5662,  -4095,   -653], 0, [  1436,  -2854], [0x8b, 0xd5, 0xed, 0xff]],
    [[  5662,  -2577,  -2771], 0, [  1388,   2344], [0x88, 0xdf, 0xee, 0xff]],
    [[  5662,  -3104,  -3087], 0, [   692,   2220], [0x88, 0x21, 0x12, 0xff]],
    [[  5457,  -3900,   -590], 0, [  1652,   1218], [0xcf, 0x8e, 0xe9, 0xff]],
    [[  5457,  -3890,    366], 0, [  1660,  -1168], [0xcf, 0x8b, 0x01, 0xff]],
    [[  5167,  -3890,    198], 0, [  1992,   -748], [0x00, 0x82, 0x01, 0xff]],
    [[  5662,  -4095,   -653], 0, [  1340,   1376], [0x8b, 0xd5, 0xed, 0xff]],
    [[  5662,  -4095,    533], 0, [  1340,  -1582], [0x8b, 0xcf, 0x00, 0xff]],
    [[  5457,  -3900,   -590], 0, [  1708,  -2720], [0xcf, 0x8e, 0xe9, 0xff]],
    [[  5457,  -2401,  -2665], 0, [  1688,   2386], [0xc9, 0x9d, 0xc7, 0xff]],
    [[  4842,  -3900,   -590], 0, [  2316,  -2720], [0x2a, 0x8d, 0xe1, 0xff]],
    [[  4842,  -2401,  -2665], 0, [  2336,   2386], [0x37, 0x9b, 0xcc, 0xff]],
    [[  5662,  -4709,   -850], 0, [   756,  -3274], [0x8b, 0x2b, 0x13, 0xff]],
    [[  5457,  -4904,   -913], 0, [  4412,   2026], [0xd6, 0x73, 0x20, 0xff]],
    [[  4842,  -4904,   -913], 0, [  3700,   2026], [0x31, 0x72, 0x18, 0xff]],
    [[  5152,  -4914,    427], 0, [  4060,  -1318], [0x00, 0x7e, 0x00, 0xff]],
];

// 0x07004FF0 - 0x070050F0
const jrb_seg7_vertex_07004FF0 = [
    [[  4842,  -3900,   -590], 0, [  2372,   1218], [0x2a, 0x8d, 0xe1, 0xff]],
    [[  5457,  -3900,   -590], 0, [  1652,   1218], [0xcf, 0x8e, 0xe9, 0xff]],
    [[  5167,  -3890,    198], 0, [  1992,   -748], [0x00, 0x82, 0x01, 0xff]],
    [[  4842,  -3890,    284], 0, [  2364,   -962], [0x31, 0x8b, 0x01, 0xff]],
    [[  4638,  -4095,    383], 0, [  2684,  -1210], [0x6d, 0xc0, 0x00, 0xff]],
    [[  4638,  -4095,   -653], 0, [  2684,   1376], [0x75, 0xd5, 0xed, 0xff]],
    [[  4638,  -4709,    518], 0, [  3388,  -1546], [0x75, 0x31, 0x00, 0xff]],
    [[  4638,  -4709,   -850], 0, [  3388,   1868], [0x75, 0x2b, 0x13, 0xff]],
    [[  4842,  -4904,   -913], 0, [  3700,   2026], [0x31, 0x72, 0x18, 0xff]],
    [[  4842,  -4914,    509], 0, [  3708,  -1524], [0x30, 0x75, 0x00, 0xff]],
    [[  5152,  -4914,    427], 0, [  4060,  -1318], [0x00, 0x7e, 0x00, 0xff]],
    [[  5457,  -4914,    603], 0, [   316,  -1758], [0xd0, 0x75, 0x00, 0xff]],
    [[  5457,  -4904,   -913], 0, [   324,   2026], [0xd6, 0x73, 0x20, 0xff]],
    [[  5152,  -4914,    427], 0, [   -28,  -1318], [0x00, 0x7e, 0x00, 0xff]],
    [[  5662,  -4709,    675], 0, [   636,  -1938], [0x93, 0x41, 0x00, 0xff]],
    [[  5662,  -4709,   -850], 0, [   636,   1868], [0x8b, 0x2b, 0x13, 0xff]],
];

// 0x070050F0 - 0x070051F0
const jrb_seg7_vertex_070050F0 = [
    [[  5662,  -4095,    533], 0, [  1340,  -1582], [0x8b, 0xcf, 0x00, 0xff]],
    [[  5662,  -4709,   -850], 0, [   636,   1868], [0x8b, 0x2b, 0x13, 0xff]],
    [[  5662,  -4709,    675], 0, [   636,  -1938], [0x93, 0x41, 0x00, 0xff]],
    [[  5662,  -4095,   -653], 0, [  1340,   1376], [0x8b, 0xd5, 0xed, 0xff]],
    [[  5457,  -4904,   -913], 0, [  4492,  -3406], [0xd6, 0x73, 0x20, 0xff]],
    [[  4842,  -3279,  -3193], 0, [  3668,   2178], [0x37, 0x63, 0x38, 0xff]],
    [[  4842,  -4904,   -913], 0, [  3620,  -3406], [0x31, 0x72, 0x18, 0xff]],
    [[  5457,  -3279,  -3193], 0, [  4444,   2178], [0xc9, 0x65, 0x34, 0xff]],
    [[  5662,  -4709,   -850], 0, [   756,  -3274], [0x8b, 0x2b, 0x13, 0xff]],
    [[  5457,  -3279,  -3193], 0, [   356,   2178], [0xc9, 0x65, 0x34, 0xff]],
    [[  5457,  -4904,   -913], 0, [   404,  -3406], [0xd6, 0x73, 0x20, 0xff]],
    [[  4638,  -4709,   -850], 0, [  3268,  -3274], [0x75, 0x2b, 0x13, 0xff]],
    [[  4638,  -3104,  -3087], 0, [  3332,   2220], [0x78, 0x21, 0x12, 0xff]],
    [[  4638,  -2577,  -2771], 0, [  2636,   2344], [0x79, 0xdf, 0xee, 0xff]],
    [[  4638,  -4095,   -653], 0, [  2588,  -2854], [0x75, 0xd5, 0xed, 0xff]],
    [[  4842,  -2401,  -2665], 0, [  2336,   2386], [0x37, 0x9b, 0xcc, 0xff]],
];

// 0x070051F0 - 0x070052F0
const jrb_seg7_vertex_070051F0 = [
    [[  4638,  -4095,   -653], 0, [  2588,  -2854], [0x75, 0xd5, 0xed, 0xff]],
    [[  4842,  -2401,  -2665], 0, [  2336,   2386], [0x37, 0x9b, 0xcc, 0xff]],
    [[  4842,  -3900,   -590], 0, [  2316,  -2720], [0x2a, 0x8d, 0xe1, 0xff]],
    [[  5662,  -3104,  -3087], 0, [   692,   2220], [0x88, 0x21, 0x12, 0xff]],
    [[  5662,  -2766,  -3933], 0, [   496,   3974], [0x8e, 0x36, 0x0a, 0xff]],
    [[  5457,  -3279,  -3193], 0, [   356,   2178], [0xc9, 0x65, 0x34, 0xff]],
    [[  5662,  -4709,   -850], 0, [   756,  -3274], [0x8b, 0x2b, 0x13, 0xff]],
    [[  5662,  -2577,  -2771], 0, [  1128,  -1330], [0x88, 0xdf, 0xee, 0xff]],
    [[  5662,  -2167,  -3795], 0, [  1376,    438], [0x8e, 0xca, 0xf6, 0xff]],
    [[  5662,  -2766,  -3933], 0, [   676,    500], [0x8e, 0x36, 0x0a, 0xff]],
    [[  4842,  -3279,  -3193], 0, [  3768,   -836], [0x37, 0x63, 0x38, 0xff]],
    [[  4638,  -2766,  -3933], 0, [  3348,    500], [0x72, 0x35, 0x0a, 0xff]],
    [[  4638,  -3104,  -3087], 0, [  3512,   -960], [0x78, 0x21, 0x12, 0xff]],
    [[  4638,  -2167,  -3795], 0, [  2648,    438], [0x72, 0xcb, 0xf6, 0xff]],
    [[  4638,  -2577,  -2771], 0, [  2896,  -1330], [0x79, 0xdf, 0xee, 0xff]],
    [[  4842,  -2966,  -3979], 0, [  3680,    520], [0x27, 0x75, 0x1b, 0xff]],
];

// 0x070052F0 - 0x070053F0
const jrb_seg7_vertex_070052F0 = [
    [[  4638,  -2167,  -3795], 0, [  2648,    438], [0x72, 0xcb, 0xf6, 0xff]],
    [[  4842,  -1968,  -3749], 0, [  2344,    416], [0x26, 0x89, 0xed, 0xff]],
    [[  4842,  -2401,  -2665], 0, [  2528,  -1454], [0x37, 0x9b, 0xcc, 0xff]],
    [[  4638,  -2577,  -2771], 0, [  2896,  -1330], [0x79, 0xdf, 0xee, 0xff]],
    [[  5457,  -1968,  -3749], 0, [  1680,    416], [0xda, 0x8b, 0xe4, 0xff]],
    [[  5457,  -2401,  -2665], 0, [  1496,  -1454], [0xc9, 0x9d, 0xc7, 0xff]],
    [[  5662,  -2167,  -3795], 0, [  1376,    438], [0x8e, 0xca, 0xf6, 0xff]],
    [[  5662,  -2577,  -2771], 0, [  1128,  -1330], [0x88, 0xdf, 0xee, 0xff]],
    [[  5662,  -2766,  -3933], 0, [   676,    500], [0x8e, 0x36, 0x0a, 0xff]],
    [[  5662,  -3104,  -3087], 0, [   512,   -960], [0x88, 0x21, 0x12, 0xff]],
    [[  5457,  -2966,  -3979], 0, [   344,    520], [0xda, 0x77, 0x11, 0xff]],
    [[  5457,  -3279,  -3193], 0, [   256,   -836], [0xc9, 0x65, 0x34, 0xff]],
    [[  5457,  -3279,  -3193], 0, [  4344,   -836], [0xc9, 0x65, 0x34, 0xff]],
    [[  5457,  -2966,  -3979], 0, [  4432,    520], [0xda, 0x77, 0x11, 0xff]],
    [[  4842,  -2966,  -3979], 0, [  3680,    520], [0x27, 0x75, 0x1b, 0xff]],
    [[  4842,  -3279,  -3193], 0, [  3768,   -836], [0x37, 0x63, 0x38, 0xff]],
];

// 0x070053F0 - 0x070054E0
const jrb_seg7_vertex_070053F0 = [
    [[  4842,  -2966,  -5003], 0, [  3764,   2176], [0x30, 0x75, 0x00, 0xff]],
    [[  4842,  -2966,  -3979], 0, [  3680,    520], [0x27, 0x75, 0x1b, 0xff]],
    [[  5457,  -2966,  -3979], 0, [  4432,    520], [0xda, 0x77, 0x11, 0xff]],
    [[  5457,  -2966,  -5003], 0, [  4348,   2176], [0xc1, 0x6d, 0x00, 0xff]],
    [[  4638,  -2761,  -5003], 0, [  3496,   2230], [0x75, 0x30, 0x00, 0xff]],
    [[  4638,  -2766,  -3933], 0, [  3348,    500], [0x72, 0x35, 0x0a, 0xff]],
    [[  5457,  -2966,  -5003], 0, [   260,   2176], [0xc1, 0x6d, 0x00, 0xff]],
    [[  5662,  -2766,  -3933], 0, [   676,    500], [0x8e, 0x36, 0x0a, 0xff]],
    [[  5662,  -2761,  -5003], 0, [   528,   2230], [0x86, 0x20, 0x00, 0xff]],
    [[  4638,  -2146,  -5003], 0, [  2828,   2396], [0x7a, 0xe0, 0x00, 0xff]],
    [[  4638,  -2167,  -3795], 0, [  2648,    438], [0x72, 0xcb, 0xf6, 0xff]],
    [[  4842,  -1942,  -5003], 0, [  2464,   2452], [0x3f, 0x93, 0xfe, 0xff]],
    [[  4842,  -1968,  -3749], 0, [  2344,    416], [0x26, 0x89, 0xed, 0xff]],
    [[  5457,  -1942,  -5003], 0, [  1560,   2452], [0xd0, 0x8b, 0xfe, 0xff]],
    [[  5457,  -1968,  -3749], 0, [  1680,    416], [0xda, 0x8b, 0xe4, 0xff]],
];

// 0x070054E0 - 0x07005560
const jrb_seg7_vertex_070054E0 = [
    [[  5662,  -2146,  -5003], 0, [  1196,   2396], [0x8b, 0xd0, 0x00, 0xff]],
    [[  5662,  -2167,  -3795], 0, [  1376,    438], [0x8e, 0xca, 0xf6, 0xff]],
    [[  5457,  -1942,  -5003], 0, [  1560,   2452], [0xd0, 0x8b, 0xfe, 0xff]],
    [[  5457,  -1968,  -3749], 0, [  1680,    416], [0xda, 0x8b, 0xe4, 0xff]],
    [[  5662,  -2761,  -5003], 0, [   528,   2230], [0x86, 0x20, 0x00, 0xff]],
    [[  5662,  -2766,  -3933], 0, [   676,    500], [0x8e, 0x36, 0x0a, 0xff]],
    [[  5457,  -2966,  -5003], 0, [   260,   2176], [0xc1, 0x6d, 0x00, 0xff]],
    [[  5457,  -2966,  -3979], 0, [   344,    520], [0xda, 0x77, 0x11, 0xff]],
];

// 0x07005560 - 0x07005660
const jrb_seg7_dl_07005560 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09004800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(jrb_seg7_lights_07004D40.l, 1),
    gsSPLight(jrb_seg7_lights_07004D40.a, 2),
    gsSPVertex(jrb_seg7_vertex_07004D70, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    gsSP2Triangles( 0,  2,  3, 0x0,  0,  5,  6, 0x0),
    gsSP2Triangles( 0,  6,  7, 0x0,  0,  4,  5, 0x0),
    gsSPLight(jrb_seg7_lights_07004D58.l, 1),
    gsSPLight(jrb_seg7_lights_07004D58.a, 2),
    gsSPVertex(jrb_seg7_vertex_07004DF0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
    gsSP2Triangles( 2,  1,  3, 0x0,  0,  5,  1, 0x0),
    gsSP2Triangles( 4,  3,  6, 0x0,  3,  7,  6, 0x0),
    gsSP2Triangles( 8,  5,  0, 0x0,  8,  9,  5, 0x0),
    gsSP2Triangles(10, 11,  8, 0x0, 11,  9,  8, 0x0),
    gsSP2Triangles(12, 11, 10, 0x0, 12, 13, 11, 0x0),
    gsSP2Triangles(14, 13, 12, 0x0, 14, 15, 13, 0x0),
    gsSP2Triangles( 6, 15, 14, 0x0,  6,  7, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07005660 - 0x070058C8
const jrb_seg7_dl_07005660 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09003800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_07004EF0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  7, 0x0,  4,  3,  7, 0x0),
    gsSP2Triangles( 8,  9,  0, 0x0, 10,  9,  8, 0x0),
    gsSP2Triangles( 9,  1,  0, 0x0, 10, 11,  9, 0x0),
    gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(jrb_seg7_vertex_07004FF0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  0,  3, 0x0,  4,  5,  0, 0x0),
    gsSP2Triangles( 6,  5,  4, 0x0,  6,  7,  5, 0x0),
    gsSP2Triangles( 8,  7,  6, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 9,  8,  6, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(14, 15, 12, 0x0, 14, 12, 11, 0x0),
    gsSPVertex(jrb_seg7_vertex_070050F0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles( 5, 12, 11, 0x0,  6,  5, 11, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0, 14, 13, 15, 0x0),
    gsSPVertex(jrb_seg7_vertex_070051F0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  3,  5, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 12, 13, 14, 0x0),
    gsSP2Triangles(12, 11, 13, 0x0, 10, 15, 11, 0x0),
    gsSPVertex(jrb_seg7_vertex_070052F0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 7,  8,  9, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(jrb_seg7_vertex_070053F0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  0, 0x0,  5,  1,  0, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9,  5,  4, 0x0),
    gsSP2Triangles( 9, 10,  5, 0x0, 11, 10,  9, 0x0),
    gsSP2Triangles(11, 12, 10, 0x0, 13, 12, 11, 0x0),
    gsSP1Triangle(13, 14, 12, 0x0),
    gsSPVertex(jrb_seg7_vertex_070054E0, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  1,  0, 0x0,  4,  5,  1, 0x0),
    gsSP1Triangle( 6,  7,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070058C8 - 0x07005990
export const jrb_seg7_dl_070058C8 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(5, 80, 75, 255),
    gsSPFogPosition(900, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_CLAMP, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_07005560),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_07005660),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
