// Bbh

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07026B4C - 0x07026B94
export const bbh_seg7_collision_haunted_bookshelf = [
    COL_INIT(),
    COL_VERTEX_INIT(0x6),
    COL_VERTEX(-255, 819, -204),
    COL_VERTEX(-255, 0, 205),
    COL_VERTEX(-255, 819, 205),
    COL_VERTEX(-255, 0, -204),
    COL_VERTEX(256, 0, -204),
    COL_VERTEX(256, 819, -204),
    COL_TRI_INIT(SURFACE_DEFAULT, 4),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI(0, 4, 3),
    COL_TRI(0, 5, 4),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
