// 0x07006A98 - 0x07006AB0

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType,
    gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode,
    gsDPSetCombineMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    water_09003800, water_09001800, water_09002800
} from "../../../../../textures/water"

const jrb_seg7_lights_07006A98 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07006AB0 - 0x07006BA0
const jrb_seg7_vertex_07006AB0 = [
    [[ -3758,   -918,  -1419], 0, [  2012,      0], [0x65, 0x00, 0xb4, 0xff]],
    [[ -4270,  -2966,  -2955], 0, [     0,    990], [0x76, 0x2d, 0x03, 0xff]],
    [[ -4270,   -918,  -2955], 0, [  2012,    990], [0x73, 0x00, 0x35, 0xff]],
    [[ -4270,   -918,  -7563], 0, [  8484,   -798], [0x00, 0x81, 0x00, 0xff]],
    [[  6481,   -918,  -7563], 0, [  1332,   4566], [0x00, 0x81, 0x00, 0xff]],
    [[  6481,   -918,   -907], 0, [ -3096,   1244], [0x00, 0x81, 0x00, 0xff]],
    [[ -4270,   -918,   -907], 0, [  4056,  -4120], [0x00, 0x81, 0x00, 0xff]],
    [[  -174,   -918,  -1931], 0, [  2012,      0], [0x9d, 0x00, 0xb2, 0xff]],
    [[ -1710,  -2966,   -907], 0, [     0,    990], [0xe0, 0x4a, 0x9f, 0xff]],
    [[ -1710,   -918,   -907], 0, [  2012,    990], [0xfd, 0x00, 0x82, 0xff]],
    [[  -174,  -2966,  -1931], 0, [     0,      0], [0xa0, 0x4b, 0xe1, 0xff]],
    [[ -1710,   -918,   -907], 0, [  2012,      0], [0xfd, 0x00, 0x82, 0xff]],
    [[ -1710,  -2966,   -907], 0, [     0,      0], [0xe0, 0x4a, 0x9f, 0xff]],
    [[ -3758,  -2966,  -1419], 0, [     0,    990], [0x36, 0x4c, 0xab, 0xff]],
    [[ -3758,   -918,  -1419], 0, [  2012,    990], [0x65, 0x00, 0xb4, 0xff]],
];

// 0x07006BA0 - 0x07006CA0
const jrb_seg7_vertex_07006BA0 = [
    [[  3921,   -918,  -5003], 0, [  2012,      0], [0xea, 0x00, 0x84, 0xff]],
    [[  3921,  -2966,  -5003], 0, [     0,      0], [0xf2, 0x3a, 0x91, 0xff]],
    [[  1361,  -2966,  -3467], 0, [     0,   3032], [0xe5, 0x00, 0x85, 0xff]],
    [[ -3758,   -918,  -1419], 0, [  2012,      0], [0x65, 0x00, 0xb4, 0xff]],
    [[ -3758,  -2966,  -1419], 0, [     0,      0], [0x36, 0x4c, 0xab, 0xff]],
    [[ -4270,  -2966,  -2955], 0, [     0,    990], [0x76, 0x2d, 0x03, 0xff]],
    [[  6481,   -918,  -7051], 0, [  2012,    376], [0x86, 0x00, 0x20, 0xff]],
    [[  6481,  -2966,  -5515], 0, [     0,   1602], [0x86, 0x00, 0xe0, 0xff]],
    [[  6481,   -918,  -5515], 0, [  2012,   1602], [0x93, 0x00, 0xc0, 0xff]],
    [[  5969,  -2966,  -5003], 0, [     0,   2010], [0xda, 0x00, 0x88, 0xff]],
    [[  5969,   -918,  -5003], 0, [  2012,   2010], [0xe9, 0x00, 0x84, 0xff]],
    [[  6481,  -2966,  -7051], 0, [     0,    376], [0x93, 0x00, 0x40, 0xff]],
    [[  1361,   -918,  -3467], 0, [  2012,   3032], [0x12, 0x00, 0x83, 0xff]],
    [[ -4270,   -918,  -2955], 0, [  2012,      0], [0x73, 0x00, 0x35, 0xff]],
    [[ -4270,  -2966,  -2955], 0, [     0,      0], [0x76, 0x2d, 0x03, 0xff]],
    [[ -2222,  -2966,  -5003], 0, [     0,   2010], [0x40, 0x00, 0x6d, 0xff]],
];

// 0x07006CA0 - 0x07006D90
const jrb_seg7_vertex_07006CA0 = [
    [[  1361,   -918,  -3467], 0, [  2012,      0], [0x12, 0x00, 0x83, 0xff]],
    [[  1361,  -2966,  -3467], 0, [     0,      0], [0xe5, 0x00, 0x85, 0xff]],
    [[   337,  -2966,  -3979], 0, [     0,    990], [0x09, 0x00, 0x82, 0xff]],
    [[   337,   -918,  -3979], 0, [  2012,    990], [0xcf, 0x00, 0x8b, 0xff]],
    [[   337,   -918,  -3979], 0, [  2012,      0], [0xcf, 0x00, 0x8b, 0xff]],
    [[   337,  -2966,  -3979], 0, [     0,      0], [0x09, 0x00, 0x82, 0xff]],
    [[  -174,  -2966,  -3467], 0, [     0,    990], [0x93, 0x00, 0xc0, 0xff]],
    [[  -174,   -918,  -3467], 0, [  2012,    990], [0x86, 0x00, 0xe0, 0xff]],
    [[  -174,   -918,  -3467], 0, [  2012,      0], [0x86, 0x00, 0xe0, 0xff]],
    [[  -174,  -2966,  -1931], 0, [     0,    990], [0xa0, 0x4b, 0xe1, 0xff]],
    [[  -174,   -918,  -1931], 0, [  2012,    990], [0x9d, 0x00, 0xb2, 0xff]],
    [[  -174,  -2966,  -3467], 0, [     0,      0], [0x93, 0x00, 0xc0, 0xff]],
    [[  -686,   -918,  -5515], 0, [  2012,      0], [0x7a, 0x00, 0x20, 0xff]],
    [[  -686,  -2966,  -7051], 0, [     0,    990], [0x7a, 0x00, 0x20, 0xff]],
    [[  -686,   -918,  -7051], 0, [  2012,    990], [0x6d, 0x00, 0x40, 0xff]],
];

// 0x07006D90 - 0x07006E70
const jrb_seg7_vertex_07006D90 = [
    [[ -4270,   -918,  -2955], 0, [  2012,      0], [0x73, 0x00, 0x35, 0xff]],
    [[ -2222,  -2966,  -5003], 0, [     0,   2010], [0x40, 0x00, 0x6d, 0xff]],
    [[ -2222,   -918,  -5003], 0, [  2012,   2010], [0x20, 0x00, 0x7a, 0xff]],
    [[ -2222,   -918,  -5003], 0, [  2012,      0], [0x20, 0x00, 0x7a, 0xff]],
    [[ -2222,  -2966,  -5003], 0, [     0,      0], [0x40, 0x00, 0x6d, 0xff]],
    [[ -1198,  -2966,  -5003], 0, [     0,    990], [0x20, 0x00, 0x7a, 0xff]],
    [[ -1198,   -918,  -5003], 0, [  2012,    990], [0x40, 0x00, 0x6d, 0xff]],
    [[ -1198,   -918,  -5003], 0, [  2012,      0], [0x40, 0x00, 0x6d, 0xff]],
    [[ -1198,  -2966,  -5003], 0, [     0,      0], [0x20, 0x00, 0x7a, 0xff]],
    [[  -686,  -2966,  -5515], 0, [     0,    990], [0x6d, 0x00, 0x40, 0xff]],
    [[  -686,   -918,  -5515], 0, [  2012,    990], [0x7a, 0x00, 0x20, 0xff]],
    [[  -686,   -918,  -5515], 0, [  2012,      0], [0x7a, 0x00, 0x20, 0xff]],
    [[  -686,  -2966,  -5515], 0, [     0,      0], [0x6d, 0x00, 0x40, 0xff]],
    [[  -686,  -2966,  -7051], 0, [     0,    990], [0x7a, 0x00, 0x20, 0xff]],
];

// 0x07006E70 - 0x07006F60
const jrb_seg7_vertex_07006E70 = [
    [[  2385,  -2966,  -7051], 0, [     0,    990], [0x20, 0x00, 0x7a, 0xff]],
    [[  2385,   -918,  -7051], 0, [  2012,    990], [0x40, 0x00, 0x6d, 0xff]],
    [[  1361,   -918,  -7051], 0, [  2012,      0], [0xe0, 0x00, 0x7a, 0xff]],
    [[  -686,   -918,  -7051], 0, [  2012,      0], [0x6d, 0x00, 0x40, 0xff]],
    [[  -686,  -2966,  -7051], 0, [     0,      0], [0x7a, 0x00, 0x20, 0xff]],
    [[  -174,  -2966,  -7563], 0, [     0,    990], [0x30, 0x00, 0x75, 0xff]],
    [[  -174,   -918,  -7563], 0, [  2012,    990], [0x30, 0x00, 0x75, 0xff]],
    [[  5969,   -918,  -7563], 0, [  2012,      0], [0xd0, 0x00, 0x75, 0xff]],
    [[  5969,  -2966,  -7563], 0, [     0,      0], [0xd0, 0x00, 0x75, 0xff]],
    [[  6481,  -2966,  -7051], 0, [     0,    376], [0x93, 0x00, 0x40, 0xff]],
    [[  6481,   -918,  -7051], 0, [  2012,    376], [0x86, 0x00, 0x20, 0xff]],
    [[  2897,  -2966,  -7563], 0, [     0,    990], [0x30, 0x00, 0x75, 0xff]],
    [[  2385,   -918,  -7051], 0, [  2012,      0], [0x40, 0x00, 0x6d, 0xff]],
    [[  2385,  -2966,  -7051], 0, [     0,      0], [0x20, 0x00, 0x7a, 0xff]],
    [[  2897,   -918,  -7563], 0, [  2012,    990], [0x30, 0x00, 0x75, 0xff]],
];

// 0x07006F60 - 0x07007050
const jrb_seg7_vertex_07006F60 = [
    [[   849,   -918,  -7563], 0, [  2012,    990], [0xd0, 0x00, 0x75, 0xff]],
    [[  -174,  -2966,  -7563], 0, [     0,      0], [0x30, 0x00, 0x75, 0xff]],
    [[   849,  -2966,  -7563], 0, [     0,    990], [0xd0, 0x00, 0x75, 0xff]],
    [[  2385,  -2966,  -7051], 0, [     0,    990], [0x20, 0x00, 0x7a, 0xff]],
    [[  1361,   -918,  -7051], 0, [  2012,      0], [0xe0, 0x00, 0x7a, 0xff]],
    [[  1361,  -2966,  -7051], 0, [     0,      0], [0xc0, 0x00, 0x6d, 0xff]],
    [[  1361,  -2966,  -7051], 0, [     0,    990], [0xc0, 0x00, 0x6d, 0xff]],
    [[  1361,   -918,  -7051], 0, [  2012,    990], [0xe0, 0x00, 0x7a, 0xff]],
    [[   849,   -918,  -7563], 0, [  2012,      0], [0xd0, 0x00, 0x75, 0xff]],
    [[   849,  -2966,  -7563], 0, [     0,      0], [0xd0, 0x00, 0x75, 0xff]],
    [[  5969,   -918,  -7563], 0, [  2012,   3032], [0xd0, 0x00, 0x75, 0xff]],
    [[  2897,   -918,  -7563], 0, [  2012,      0], [0x30, 0x00, 0x75, 0xff]],
    [[  2897,  -2966,  -7563], 0, [     0,      0], [0x30, 0x00, 0x75, 0xff]],
    [[  5969,  -2966,  -7563], 0, [     0,   3032], [0xd0, 0x00, 0x75, 0xff]],
    [[  -174,   -918,  -7563], 0, [  2012,      0], [0x30, 0x00, 0x75, 0xff]],
];

// 0x07007050 - 0x07007110
const jrb_seg7_vertex_07007050 = [
    [[  4638,  -2761,  -5003], 0, [   172,   1294], [0x00, 0x00, 0x81, 0xff]],
    [[  4842,  -2966,  -5003], 0, [     0,   1090], [0x00, 0x00, 0x81, 0xff]],
    [[  3921,  -2966,  -5003], 0, [     0,   2010], [0xf2, 0x3a, 0x91, 0xff]],
    [[  4638,  -2146,  -5003], 0, [   784,   1294], [0x00, 0x00, 0x81, 0xff]],
    [[  3921,   -918,  -5003], 0, [  2012,   2010], [0xea, 0x00, 0x84, 0xff]],
    [[  4842,  -1942,  -5003], 0, [   988,   1090], [0x00, 0x00, 0x81, 0xff]],
    [[  5457,  -1942,  -5003], 0, [   988,    480], [0x00, 0x00, 0x81, 0xff]],
    [[  5969,   -918,  -5003], 0, [  2012,      0], [0xe9, 0x00, 0x84, 0xff]],
    [[  5662,  -2146,  -5003], 0, [   784,    274], [0x00, 0x00, 0x81, 0xff]],
    [[  5969,  -2966,  -5003], 0, [     0,      0], [0xda, 0x00, 0x88, 0xff]],
    [[  5662,  -2761,  -5003], 0, [   172,    274], [0x00, 0x00, 0x81, 0xff]],
    [[  5457,  -2966,  -5003], 0, [     0,    480], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07007110 - 0x070071D0
const jrb_seg7_vertex_07007110 = [
    [[ -2971,  -2812,  -1222], 0, [  4940,      0], [0x95, 0x38, 0xdc, 0xff]],
    [[ -2734,  -2812,  -1931], 0, [     0,      0], [0xce, 0x6c, 0xd5, 0xff]],
    [[ -2734,  -2966,  -1931], 0, [     0,    990], [0xa1, 0x00, 0xad, 0xff]],
    [[ -2971,  -2966,  -1222], 0, [  4940,    990], [0x88, 0x00, 0xd8, 0xff]],
    [[ -1710,  -2966,  -2443], 0, [  2012,    990], [0x31, 0x00, 0x8b, 0xff]],
    [[ -1710,  -2812,  -2443], 0, [  2012,      0], [0xf8, 0x2f, 0x8b, 0xff]],
    [[  -789,  -2812,  -1522], 0, [ -6656,      0], [0x3f, 0x59, 0xc1, 0xff]],
    [[  -789,  -2966,  -1522], 0, [ -6656,    990], [0x59, 0x00, 0xa7, 0xff]],
    [[ -2734,  -2966,  -1931], 0, [  7584,    990], [0xa1, 0x00, 0xad, 0xff]],
    [[ -1710,  -2812,  -2443], 0, [     0,      0], [0xf8, 0x2f, 0x8b, 0xff]],
    [[ -1710,  -2966,  -2443], 0, [     0,    990], [0x31, 0x00, 0x8b, 0xff]],
    [[ -2734,  -2812,  -1931], 0, [  7584,      0], [0xce, 0x6c, 0xd5, 0xff]],
];

// 0x070071D0 - 0x070072A0
const jrb_seg7_vertex_070071D0 = [
    [[  -686,  -2966,  -7563], 0, [ 12232,   -544], [0x00, 0x7f, 0x00, 0xff]],
    [[ -1710,  -2966,   -907], 0, [   992,  -4376], [0xe0, 0x4a, 0x9f, 0xff]],
    [[  -174,  -2966,  -1931], 0, [     0,  -3098], [0xa0, 0x4b, 0xe1, 0xff]],
    [[ -2734,  -2812,  -1931], 0, [  5080,  -4376], [0xce, 0x6c, 0xd5, 0xff]],
    [[ -1710,  -2812,   -907], 0, [   992,  -4376], [0x00, 0x7f, 0x00, 0xff]],
    [[  -789,  -2812,  -1522], 0, [   376,  -3610], [0x3f, 0x59, 0xc1, 0xff]],
    [[ -1710,  -2812,  -2443], 0, [  4056,  -3610], [0xf8, 0x2f, 0x8b, 0xff]],
    [[ -2971,  -2812,  -1222], 0, [  4136,  -4848], [0x95, 0x38, 0xdc, 0xff]],
    [[  3921,  -2966,  -5003], 0, [ -2072,    478], [0xf2, 0x3a, 0x91, 0xff]],
    [[  6481,  -2966,  -5003], 0, [ -7184,   1754], [0x00, 0x7f, 0x00, 0xff]],
    [[  6481,  -2966,  -7563], 0, [ -2072,   3032], [0x00, 0x7f, 0x00, 0xff]],
    [[ -4270,  -2966,  -2955], 0, [ 10188,  -4632], [0x76, 0x2d, 0x03, 0xff]],
    [[ -3758,  -2966,  -1419], 0, [  6100,  -5142], [0x36, 0x4c, 0xab, 0xff]],
];

// 0x070072A0 - 0x070074A8
const jrb_seg7_dl_070072A0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09003800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPLight(jrb_seg7_lights_07006A98.l, 1),
    gsSPLight(jrb_seg7_lights_07006A98.a, 2),
    gsSPVertex(jrb_seg7_vertex_07006AB0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(jrb_seg7_vertex_07006BA0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 8,  7,  9, 0x0,  6, 11,  7, 0x0),
    gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(jrb_seg7_vertex_07006CA0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPVertex(jrb_seg7_vertex_07006D90, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(jrb_seg7_vertex_07006E70, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(jrb_seg7_vertex_07006F60, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(jrb_seg7_vertex_07007050, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 3,  2,  4, 0x0,  5,  3,  4, 0x0),
    gsSP2Triangles( 6,  5,  4, 0x0,  6,  4,  7, 0x0),
    gsSP2Triangles( 8,  6,  7, 0x0,  9,  8,  7, 0x0),
    gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070074A8 - 0x07007500
const jrb_seg7_dl_070074A8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_07007110, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007500 - 0x07007570
const jrb_seg7_dl_07007500 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, water_09002800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_070071D0, 13, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  3,  7,  4, 0x0),
    gsSP2Triangles( 0,  8,  9, 0x0,  0,  9, 10, 0x0),
    gsSP2Triangles( 0,  2,  8, 0x0,  0, 11, 12, 0x0),
    gsSP1Triangle( 0, 12,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07007570 - 0x07007628
export const jrb_seg7_dl_07007570 = [
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
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_070072A0),
    gsSPDisplayList(jrb_seg7_dl_070074A8),
    gsSPDisplayList(jrb_seg7_dl_07007500),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
