// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../../../engine/GeoLayout"


// 0x0E000970
export const ttm_geo_000970 = () => {return [
    GEO_CULLING_RADIUS(3200),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700EAC8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ttm_seg7_dl_0700EC58),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
