const ID_VIEW_CONVERSION = 1;
const ID_CLICK_CONVERSION = 2;
const ID_SERVER_CONVERSION = 3;
const ID_UPVOTE = 10;
const ID_DOWNVOTE = 11;
const ID_DOWNVOTE_UNINTERESTING = 12;
const ID_DOWNVOTE_MISLEADING = 13;
const ID_DOWNVOTE_OFFENSIVE = 14;
const ID_DOWNVOTE_REPETITIVE = 15;
const ID_LIKE = 20;
const ID_SHARE = 21;
const ID_COMMENT = 22;
const ID_VISIBLE = 30;
const ID_HOVER = 31;
const ID_EXPAND = 32;
const ID_SHARE_FACEBOOK = 50;
const ID_SHARE_TWITTER = 51;
const ID_SHARE_PINTEREST = 52;
const ID_SHARE_REDDIT = 53;
const ID_SHARE_EMAIL = 54;
const ID_START = 70;
const ID_FIRST_QUARTILE = 71;
const ID_MIDPOINT = 72;
const ID_THIRD_QUARTILE = 73;
const ID_COMPLETE = 74;
const ID_MUTE = 75;
const ID_UNMUTE = 76;
const ID_PAUSE = 77;
const ID_REWIND = 78;
const ID_RESUME = 79;
const ID_FULLSCREEN = 80;
const ID_EXIT_FULLSCREEN = 81;
const ID_EXPAND_VIDEO = 82;
const ID_COLLAPSE = 83;
const ID_ACCEPT_INVITATION_LINEAR = 84;
const ID_CLOSE_LINEAR = 85;
const ID_SKIP = 86;
const ID_PROGRESS = 87;
const ID_COMMENT_REPLY = 101;
const ID_COMMENT_UPVOTE = 102;
const ID_COMMENT_DOWNVOTE = 103;
const ID_CUSTOM_01 = 104;
const ID_CUSTOM_02 = 105;
const ID_CUSTOM_03 = 106;
const ID_CUSTOM_04 = 107;
const ID_CUSTOM_05 = 108;
const ID_CUSTOM_06 = 109;
const ID_CUSTOM_07 = 110;

/**
 * Event information included in DecisionResponse to an ad requestPlacement. Once you call an Event URL, Adzerk will track that
 * event for the creative/campaign/advertiser etc. in Adzerk reporting.
 * <p/>
 * Events in Adzerk are data about a way a user interacts with an ad. Standard events included with all Adzerk
 * accounts are clicks, impressions, and conversions. Custom events are defined by the user of the account.
 */
export interface AdzerkEvent {
    /**
     *
     * @param id Event identifier
     * @param url Url to call to track an event
     */
    id: number;
    url: string;
}
