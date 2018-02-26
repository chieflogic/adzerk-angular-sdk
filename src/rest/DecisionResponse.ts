import { User } from './User';
import { Decision } from './Decision';

/**
 * The DecisionResponse to an ad {@link Request}.
 * <p>
 * A DecisionResponse will contain zero or more {@link Decision}s, one per {@link Placement} that was sent in on the requestPlacement.
 * If no ad was selected for a given Placement, the corresponding Decision entry will be undefined (null).
 */
export interface DecisionResponse {
    // identifies the unique user that places the requestPlacement
    user: User;

    // each Decision represents the ad that was selected to be served for a given Placement
    decisions: Map<string, Decision>;
}
