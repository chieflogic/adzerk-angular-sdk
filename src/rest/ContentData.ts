// data key for the json metadata
const KEY_CUSTOM_DATA = 'customData';

// data key for image url
const KEY_IMAGE_URL = 'imageUrl';

// data key for title
const KEY_TITLE = 'title';

/**
 * Contains the data and metadata parsed from a Content element. Not intended for API consumers.
 * @see Content
 */
export interface ContentData {
    // map of creative data (title, height, width, etc) used to build the content body
    creativeData: Map<string, object>;

    // map of creative metadata; the deserialized JSON metadata from the creative
    creativeMetadata: Map<string, object>;

    // raw creative metadata JSON object; useful for clients needing custom deserialization
    creativeMetadataJson: any;
}
