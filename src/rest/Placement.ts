
/**
 * To make an ad {@link Request}, you will specify one of more Placements. Each Placement has a unique name to
 * identify a place where an can be served in your app. To request multiple ads in a single {@link Request} you
 * specify multiple Placements.
 * <p>
 * <pre>
 * {@code
 * // Build a Request with multiple Placements:
 * Request request = new Request.Builder()
 *     .addPlacement(new Placement(name1, networkId, siteId, adTypes))
 *     .addPlacement(new Placement(name2, networkId, siteId, adTypes))
 *     .build();
 * }
 * </pre>
 *
 *
 */
export interface Placement {
    // unique name for the placement (required)
    divName: string;

    // network id to use when selecting an ad (required)
    networkId: number;

    // site id to use when selecting an ad (required)
    siteId: number;

    // one or more integer ad types to use when selecting an ad (required)
    adTypes: number[];

    // zero or more zone ids to use when selecting an ad
    zoneIds?: number[];

    // campaign id; if specified, only consider ads in that campaign
    campaignId?: number;

    // flight id; if specified, only consider ads in that flight
    flightId?: number;

    // ad (flight-creative map) id; if specified, only serve that ad if possible
    adId?: number;

    // URL that should be used as the click-through target for the ad
    clickUrl?: string;

    // hash of key/value pairs used for custom targeting
    properties?: any;

    // array of numeric event types. Requests tracking URLs for custom events
    eventIds?: number[];
}
