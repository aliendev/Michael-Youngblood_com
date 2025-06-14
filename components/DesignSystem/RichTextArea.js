import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            <p className="">{children}</p>
        },
    },
};

const RichTextArea = ({
    content = {},
    container = true,
}) => {
    console.log(content);
    const renderedContent = documentToReactComponents(content.json, RICHTEXT_OPTIONS);

    if (!content || !content.json) { return null; };

    return container ? (
        <div>{renderedContent}</div>
    ) : (
        renderedContent
    );
};

export default RichTextArea;