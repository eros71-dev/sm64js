import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oCoinUnkF4, oBehParams, oAction, oDistanceToMario, oBehParams2ndByte, oTimer, oCoinUnkF8, oPosY, oFloorHeight, oAnimState, oInteractStatus, oPosX, oPosZ, oVelY, oCoinUnk110, oForwardVel, oMoveAngleYaw, oFloor, oMoveFlags, OBJ_MOVE_ON_GROUND, oSubAction, oBounciness, OBJ_MOVE_LANDED, OBJ_MOVE_ABOVE_DEATH_BARRIER, OBJ_MOVE_ABOVE_LAVA } from "../../include/object_constants"
import { spawn_object_relative, cur_obj_set_behavior, cur_obj_update_floor_height, obj_mark_for_deletion, cur_obj_set_model, spawn_object, cur_obj_scale, cur_obj_become_intangible, cur_obj_update_floor_and_walls, cur_obj_if_hit_wall_bounce_away, cur_obj_move_standard, cur_obj_rotate_yaw_toward, cur_obj_become_tangible, cur_obj_wait_then_blink } from "../ObjectHelpers"
import { MODEL_YELLOW_COIN, MODEL_YELLOW_COIN_NO_SHADOW, MODEL_SPARKLES } from "../../include/model_ids"
import { bhvCoinFormationSpawn, bhvYellowCoin, bhvGoldenCoinSparkles, bhvCoinSparkles } from "../BehaviorData"
import { obj_set_hitbox } from "../ObjBehaviors2"
import { INTERACT_COIN, INT_STATUS_INTERACTED, INT_STATUS_TOUCHED_BOB_OMB } from "../Interaction"
import { sins, coss, random_uint16 } from "../../utils"
import { atan2s } from "../../engine/math_util"

const sYellowCoinHitbox = {
    interactType: INTERACT_COIN,
    downOffset: 0,
    damageOrCoinValue: 1,
    health: 0,
    numLootCoins: 0,
    radius: 100,
    height: 64,
    hurtboxRadius: 0,
    hurtboxHeight: 0
}

const bhv_coin_sparkles_init = () => {

    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oInteractStatus] & INT_STATUS_INTERACTED && !(o.rawData[oInteractStatus] & INT_STATUS_TOUCHED_BOB_OMB)) {
        spawn_object(o, MODEL_SPARKLES, bhvGoldenCoinSparkles)
        obj_mark_for_deletion(o)
        return 1
    }

    o.rawData[oInteractStatus] = 0
    return 0

}

const bhv_yellow_coin_init = () => {
    const o = ObjectListProc.gCurrentObject

    cur_obj_set_behavior(bhvYellowCoin)
    obj_set_hitbox(o, sYellowCoinHitbox)
    //bhv_init_room()  TODO assign coin to specific room?
    cur_obj_update_floor_height()
    if (500.0 < Math.abs(o.rawData[oPosY] - o.rawData[oFloorHeight]))
        cur_obj_set_model(MODEL_YELLOW_COIN_NO_SHADOW)
    if (o.rawData[oFloorHeight] < -10000.0)
        obj_mark_for_deletion(o)

}

const bhv_yellow_coin_loop = () => {
    const o = ObjectListProc.gCurrentObject

    bhv_coin_sparkles_init()
    o.rawData[oAnimState]++
}

const bhv_temp_coin_loop = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oAnimState]++
    if (cur_obj_wait_then_blink(200, 20))
        obj_mark_for_deletion(o);
    bhv_coin_sparkles_init();
}

const bhv_coin_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oVelY] = Math.random() * 10.0 + 30 + o.rawData[oCoinUnk110]
    o.rawData[oForwardVel] = Math.random() * 10.0
    o.rawData[oMoveAngleYaw] = random_uint16()
    cur_obj_set_behavior(bhvYellowCoin)
    obj_set_hitbox(o, sYellowCoinHitbox)
    cur_obj_become_intangible()
}

const bhv_coin_loop = () => {
    const o = ObjectListProc.gCurrentObject

    cur_obj_update_floor_and_walls()
    cur_obj_if_hit_wall_bounce_away()
    cur_obj_move_standard(-62)

    const sp1C = o.rawData[oFloor]
    if (sp1C) {
        if (o.rawData[oMoveFlags] & OBJ_MOVE_ON_GROUND)
            o.rawData[oSubAction] = 1

        if (o.rawData[oSubAction] == 1) {
            o.rawData[oBounciness] = 0

            if (sp1C.normal.y < 0.9) {
                const sp1A = atan2s(sp1C.normal.z, sp1C.normal.x)
                cur_obj_rotate_yaw_toward(sp1A, 0x400)
            }
        }
    }

    //if (o.rawData[oTimer] == 0) play_sound()

    if (o.rawData[oVelY] < 0)
        cur_obj_become_tangible()

    if (o.rawData[oMoveFlags] & OBJ_MOVE_LANDED) {
        if (o.rawData[oMoveFlags] & (OBJ_MOVE_ABOVE_DEATH_BARRIER | OBJ_MOVE_ABOVE_LAVA))
            obj_mark_for_deletion(o)
    }

    /// more on playing sounds

    if (cur_obj_wait_then_blink(400, 20))
        obj_mark_for_deletion(o)

    bhv_coin_sparkles_init()
}

const bhv_coin_formation_spawn_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oTimer] == 0) {
        cur_obj_set_behavior(bhvYellowCoin)
        obj_set_hitbox(o, sYellowCoinHitbox)
        //bhv_init_room()  TODO assign coin to specific room?
        if (o.rawData[oCoinUnkF8]) {
            o.rawData[oPosY] += 300
            cur_obj_update_floor_height()
            if (o.rawData[oPosY] < o.rawData[oFloorHeight] || o.rawData[oFloorHeight] < -10000.0)
                obj_mark_for_deletion(o)
            else
                o.rawData[oPosY] = o.rawData[oFloorHeight]
        } else {
            cur_obj_update_floor_height()
            if (Math.abs(o.rawData[oPosY] - o.rawData[oFloorHeight]) > 250)
                cur_obj_set_model(MODEL_YELLOW_COIN_NO_SHADOW)
        }
    } else {
        if (bhv_coin_sparkles_init())
            o.parentObj.rawData[oCoinUnkF4] |= 1 << o.rawData[oBehParams2ndByte]
        o.rawData[oAnimState]++
    }

    if (o.parentObj.rawData[oAction] == 2)
        obj_mark_for_deletion(o)
}

const spawn_coin_in_formation = (sp50, sp54) => {
    const o = ObjectListProc.gCurrentObject
    const sp40 = [0, 0, 0]
    let sp3C = 1, sp38 = 1

    switch (sp54 & 7) {
        case 0:
            sp40[2] = 160 * (sp50 - 2)
            if (sp50 > 4) sp3C = 0
            break
        case 1:
            sp38 = 0
            sp40[1] = 160 * sp50 * 0.8 // 128 * sp50
            if (sp50 > 4)
                sp3C = 0
            break
        case 2:
            sp40[0] = sins(sp50 << 13) * 300.0
            sp40[2] = coss(sp50 << 13) * 300.0
            break
        case 3:
            sp38 = 0  /// flying
            sp40[0] = sins(sp50 << 13) * 200.0
            sp40[1] = coss(sp50 << 13) * 200.0 + 200.0
            break
        case 4:
            sp40[0] = D_8032F2A4[sp50][0]
            sp40[2] = D_8032F2A4[sp50][1]
            break
    }
    if (sp54 & 0x10) sp38 = 0

    if (sp3C) {
        const sp4C = spawn_object_relative(sp50, sp40[0], sp40[1], sp40[2], o, MODEL_YELLOW_COIN, bhvCoinFormationSpawn)

        sp4C.rawData[oCoinUnkF4] = sp38
    }
}

const bhv_coin_formation_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oCoinUnkF4] = (o.rawData[oBehParams] >> 8) & 0xFF
}

const bhv_coin_formation_loop = () => {
    const o = ObjectListProc.gCurrentObject

    switch (o.rawData[oAction]) {
        case 0:
            if (o.rawData[oDistanceToMario] < 2000) {
                for (let bitIndex = 0; bitIndex < 8; bitIndex++) {
                    if (!(o.rawData[oCoinUnkF4] & (1 << bitIndex)))
                        spawn_coin_in_formation(bitIndex, o.rawData[oBehParams2ndByte])
                }
                o.rawData[oAction]++
            }
            break

        case 1:
            if (o.rawData[oDistanceToMario] > 2100) o.rawData[oAction]++
            break

        case 2:
            o.rawData[oAction] = 0
            break
    }

    ObjectListProc.set_object_respawn_info_bits(o, o.rawData[oCoinUnkF4] & 0xFF)
}

/*void coin_inside_boo_act_1(void) {
    cur_obj_update_floor_and_walls();
    cur_obj_if_hit_wall_bounce_away();
    if (o->oMoveFlags & OBJ_MOVE_BOUNCE)
        cur_obj_play_sound_2(SOUND_GENERAL_COIN_DROP);
    if (o->oTimer > 90 || (o->oMoveFlags & OBJ_MOVE_LANDED)) {
        obj_set_hitbox(o, &sYellowCoinHitbox);
        cur_obj_become_tangible();
        cur_obj_set_behavior(bhvYellowCoin);
    }
    cur_obj_move_standard(-30);
    bhv_coin_sparkles_init();
    if (cur_obj_has_model(MODEL_BLUE_COIN))
        o->oDamageOrCoinValue = 5;
    if (cur_obj_wait_then_blink(400, 20))
        obj_mark_for_deletion(o);
}

void coin_inside_boo_act_0(void) {
    s16 sp26;
    f32 sp20;
    struct Object *parent = o->parentObj;
    cur_obj_become_intangible();
    if (o->oTimer == 0 && gCurrLevelNum == LEVEL_BBH) {
        cur_obj_set_model(MODEL_BLUE_COIN);
        cur_obj_scale(0.7);
    }
    obj_copy_pos(o, parent);
    if (parent->oBooDeathStatus == BOO_DEATH_STATUS_DYING) {
        o->oAction = 1;
        sp26 = gMarioObject->oMoveAngleYaw;
        sp20 = 3.0f;
        o->oVelX = sins(sp26) * sp20;
        o->oVelZ = coss(sp26) * sp20;
        o->oVelY = 35.0f;
    }
}

void (*sCoinInsideBooActions[])(void) = { coin_inside_boo_act_0, coin_inside_boo_act_1 };

void bhv_coin_inside_boo_loop(void) {
    cur_obj_call_action_function(sCoinInsideBooActions);
}*/

const bhv_coin_sparkles_loop = () => { cur_obj_scale(0.6) }

const bhv_golden_coin_sparkles_loop = () => {
    const o = ObjectListProc.gCurrentObject
    const sp24 = 30.0
    const sp2C = spawn_object(o, MODEL_SPARKLES, bhvCoinSparkles)
    sp2C.rawData[oPosX] += (Math.random() * sp24) - (sp24 / 2)
    sp2C.rawData[oPosZ] += (Math.random() * sp24) - (sp24 / 2)
}

gLinker.bhv_coin_loop = bhv_coin_loop
gLinker.bhv_coin_formation_init = bhv_coin_formation_init
gLinker.bhv_coin_formation_loop = bhv_coin_formation_loop
gLinker.bhv_coin_formation_spawn_loop = bhv_coin_formation_spawn_loop
gLinker.bhv_yellow_coin_init = bhv_yellow_coin_init
gLinker.bhv_yellow_coin_loop = bhv_yellow_coin_loop
gLinker.bhv_golden_coin_sparkles_loop = bhv_golden_coin_sparkles_loop
gLinker.bhv_coin_sparkles_loop = bhv_coin_sparkles_loop
gLinker.bhv_coin_init = bhv_coin_init
