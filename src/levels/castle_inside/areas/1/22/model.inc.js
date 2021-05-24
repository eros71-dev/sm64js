// 0x07038240 - 0x070382B0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { texture_castle_light } from "../../../texture.inc"

const dl_castle_aquarium_light_vertex_group_1 = [
    [[  3385,    358,  -1631], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3060,    307,  -1305], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3385,    768,  -1631], 0, [     0,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    307,  -1279], 0, [   990,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    768,  -1740], 0, [     0,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    307,  -1279], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    768,  -1740], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    307,  -1689], 0, [   990,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    358,  -1740], 0, [   990,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    358,  -1740], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    307,  -1689], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3784,    307,   -581], 0, [   990,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4109,    768,   -907], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3385,    358,   1171], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3349,    307,   1135], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4073,    307,    411], 0, [   990,    422], [0xbb, 0xc7, 0xff, 0x80]],
];

const dl_castle_aquarium_light_vertex_group_2 = [
    [[  3385,    358,  -1631], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3349,    307,  -1595], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3060,    307,  -1305], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4109,    768,   -907], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3784,    307,   -581], 0, [   990,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4073,    307,   -871], 0, [   990,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4109,    358,   -907], 0, [   990,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3385,    358,   1171], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4073,    307,    411], 0, [   990,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4109,    358,    447], 0, [   990,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3784,    307,    121], 0, [   990,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  4109,    768,    447], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    307,   1229], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    358,   1280], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    768,   1280], 0, [     0,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3060,    307,    846], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
];

const dl_castle_aquarium_light_vertex_group_3 = [
    [[  4109,    768,    447], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3060,    307,    846], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3385,    768,   1171], 0, [     0,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3385,    358,   1171], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3349,    307,   1135], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    307,   1229], 0, [   990,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    358,   1280], 0, [   990,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    358,   1280], 0, [     0,    536], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    307,    819], 0, [   990,      0], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    307,   1229], 0, [     0,    422], [0xbb, 0xc7, 0xff, 0x80]],
    [[  3174,    768,   1280], 0, [   990,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    768,   1280], 0, [     0,    990], [0xbb, 0xc7, 0xff, 0x80]],
    [[  2355,    307,    819], 0, [     0,      0], [0xbb, 0xc7, 0xff, 0x80]],
];

const dl_castle_aquarium_light_model = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, texture_castle_light),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(dl_castle_aquarium_light_vertex_group_1, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  6,  3, 0x0),
    gsSP2Triangles( 7,  8,  6, 0x0,  5,  4,  9, 0x0),
    gsSP2Triangles( 5,  9, 10, 0x0, 10,  9,  8, 0x0),
    gsSP2Triangles(10,  8,  7, 0x0,  2,  1, 11, 0x0),
    gsSP2Triangles( 2, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(dl_castle_aquarium_light_vertex_group_2, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  6,  1,  0, 0x0),
    gsSP2Triangles( 6,  5,  1, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0,  9,  8, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 11, 10, 15, 0x0),
    gsSPVertex(dl_castle_aquarium_light_vertex_group_3, 13, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 1,  4,  3, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 8,  6,  5, 0x0,  5,  7,  9, 0x0),
    gsSP2Triangles( 8, 10,  6, 0x0,  9, 11, 12, 0x0),
    gsSP2Triangles(12, 10,  8, 0x0, 12, 11, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

export const dl_castle_aquarium_light = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(dl_castle_aquarium_light_model),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 1621726940 - 2021-05-22 16:42:23 -0700
