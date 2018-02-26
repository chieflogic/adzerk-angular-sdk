import { Placement } from './Placement';
import { User } from './User';

/**
 * To create a Request for ads, use {@link Request.Builder} to build the ad request.
 * <p>
 * Every Request must contain one or more Placements. Each placement represents a "slot" in which an ad may be served.
 * By specifying multiple placements, you can request multiple ads in a single call.
 * <p>
 * @see com.adzerk.android.sdk.AdzerkSdk
 */
export interface AdRequest {

    // list of placements where an ad can be served (required)
    placements: Placement[];

    // target to the user key used to identify a unique user
    user?: User;

    // zero or more keywords to use when selecting the ad
    keywords?: string[];

    // URL to use as the referrer when selecting an ad
    referrer?: string;

    // URL to use as the current page URL when selecting an ad
    url?: string;

    // UNIX epoch timestamp to use when selecting an ad
    time?: number;

    // IP address to use when selecting the ad; if specified, overrides the IP the request is made from
    ip?: string;

    // zero or more numeric creative ids to disregard when selecting an ad
    blockedCreatives?: number[];

    // hash of flight ids to arrays of UNIX epoch timestamps representing times the user viewed an ad
    // in the specified flight (used for frequency capping)
    flightViewTimes?: any;
}
