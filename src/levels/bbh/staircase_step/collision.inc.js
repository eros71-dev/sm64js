// Bbh

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_NOISE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07026A1C - 0x07026A98
export const bbh_seg7_collision_staircase_step = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(154, 614, -101),
    COL_VERTEX(-153, 614, 102),
    COL_VERTEX(154, 614, 102),
    COL_VERTEX(-153, 614, -101),
    COL_VERTEX(154, 0, -101),
    COL_VERTEX(-153, 0, -101),
    COL_VERTEX(154, 0, 102),
    COL_VERTEX(-153, 0, 102),
    COL_TRI_INIT(SURFACE_DEFAULT, 8),
    COL_TRI(2, 7, 6),
    COL_TRI(4, 5, 0),
    COL_TRI(5, 3, 0),
    COL_TRI(4, 2, 6),
    COL_TRI(4, 0, 2),
    COL_TRI(5, 7, 1),
    COL_TRI(5, 1, 3),
    COL_TRI(2, 1, 7),
    COL_TRI_INIT(SURFACE_NOISE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 3, 1),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
