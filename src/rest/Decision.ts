import { Content } from './content';
import { ContentData } from './ContentData';
import { AdzerkEvent } from './AdzerkEvent';

/**
 * A Decision represents the ad that was selected to be served for a given {@link Placement}.
 * <p>
 * A {@link DecisionResponse} will contain zero or more Decisions, one per Placement that was sent in on the requestPlacement.
 * If no ad was selected for a given Placement, the corresponding Decision entry will be undefined (null).
 */
export interface Decision {

    // id for the ad that was selected
    adId: number;

    // id for the creative in the selected ad
    creativeId: number;

    // id for the flight in the selected ad
    flightId: number;

    // id for the campaign in the selected ad
    campaignId: number;

    // url endpoint that, using a GET, triggers the recording of the click and redirects to the target
    clickUrl: string;

    // list of ad contents
    contents: Content[];

    // list if Events - the IDs and tracking URLs of custom events
    events: AdzerkEvent[];

    // url endpoint that, using a GET, triggers the recording of the impression
    impressionUrl: string;
}
