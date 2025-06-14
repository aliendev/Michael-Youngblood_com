import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="">{children}</p>
        ),
    },
};

const RichTextArea = ({
    content = {},
    container = true,
}) => {
    if (!content || !content.json) { return null; };

    const renderedContent = documentToReactComponents(content.json, RICHTEXT_OPTIONS);

    return container ? (
        <div>{renderedContent}</div>
    ) : (
        renderedContent
    );
};

export default RichTextArea;