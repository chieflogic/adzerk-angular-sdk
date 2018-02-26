import { ContentData } from './ContentData';

const TYPE_HTML = 'html';
const TYPE_CSS = 'css';
const TYPE_JS = 'js';
const TYPE_JS_EXTERNAL = 'js-external';
const TYPE_RAW = 'raw';

const TEMPLATE_IMAGE = 'image';
const TEMPLATE_IMAGE_NO_WIDTH = 'image-nowidth';
const TEMPLATE_FLASH = 'flash';
const TEMPLATE_FLASH_NO_WIDTH = 'flash-nowidth';

/**
 * Each {@link Decision} contains one or more Contents. Combined, the Contents represent the creative that should
 * be displayed.
 * <p>
 * For example, a creative may contain a CSS stylesheet and a block of HTML. This would be represented as
 * two Contents, one with the type css and one with the type html.
 * <p>
 * Custom metadata set at the creative level will be passed in the Contents as the key customData.
 * <p>
 * If a content uses a predefined template, the template property will be set to the name of the template to use.
 * For example, an image content will have the {@link Content#TYPE_HTML} and the {@link Content#TEMPLATE_IMAGE}.
 * <p>
 *
 * @see Decision
 */
export interface Content {
    // the type of the content
    type: string;

    // name of the template used to render the content (unless TYPE_RAW)
    template: string;

    // the body of the custom template for TYPE_RAW content
    customTemplate: string;

    // rendered body of the content
    body: string;

    // contains a map of the creative data (title, height, width, etc.) and the creative metadata
    contentData: ContentData;
}
