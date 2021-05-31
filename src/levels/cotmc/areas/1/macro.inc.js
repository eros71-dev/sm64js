// Cotmc

import {
    MACRO_OBJECT, MACRO_OBJECT_WITH_BEH_PARAM, MACRO_OBJECT_END
} from "../../../../game/MacroSpecialObjects"
import { DIALOG_123 } from "../../../../text/us/dialogs"


// 0x0700BD38 - 0x0700BE0C
export const cotmc_seg7_macro_objs = [
    MACRO_OBJECT(/*preset*/ 'macro_snufit',               /*yaw*/   0, /*pos*/ -2920,   220,   -20),
    MACRO_OBJECT(/*preset*/ 'macro_snufit',               /*yaw*/   0, /*pos*/ -1380,   240,   740),
    MACRO_OBJECT(/*preset*/ 'macro_box_metal_cap',        /*yaw*/   0, /*pos*/  -360,   300,  -200),
    MACRO_OBJECT(/*preset*/ 'macro_snufit',               /*yaw*/   0, /*pos*/   360,   200, -1120),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/   400,   256, -4300),
    MACRO_OBJECT(/*preset*/ 'macro_box_metal_cap',        /*yaw*/   0, /*pos*/   300,   620, -5280),
    MACRO_OBJECT(/*preset*/ 'macro_snufit',               /*yaw*/   0, /*pos*/  -340,   260, -2620),
    MACRO_OBJECT(/*preset*/ 'macro_coin_ring_horizontal', /*yaw*/   0, /*pos*/     0,  -450, -7000),
    MACRO_OBJECT(/*preset*/ 'macro_1up',                  /*yaw*/   0, /*pos*/   900,   260, -3620),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/     0,  -170, -1660),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/   -20,  -211, -3940),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',      /*yaw*/ 270, /*pos*/   -71,    20,   720, /*behParam*/ DIALOG_123),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/   200,  -291, -5600),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/   980,   260, -3430),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/  -540,  -352, -5940),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/  -300,   450, -6240),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/  -200,  -400, -6680),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/   250,   450, -6400),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/   540,  -361, -6340),
    MACRO_OBJECT(/*preset*/ 'macro_red_coin',             /*yaw*/   0, /*pos*/   980,   260, -3810),
    MACRO_OBJECT(/*preset*/ 'macro_box_1up_running_away', /*yaw*/   0, /*pos*/   -20,   180,  2060),
    MACRO_OBJECT_END(),
];

// 2021-05-30 20:59:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
