import { IComponentMetadata } from "./@types/Component";

/**
 * **Parses a string into an array of component metadata.**
 *
 * Expected format:
 *
 * ```txt
 * component-id
 * margin-top margin-right margin-bottom margin-left
 * padding-top padding-right padding-bottom padding-left
 * width height
 * top left
 * z-index
 * content-as-json
 *
 * component-id
 * ...
 * ```
 *
 * @param {string} format Formatted string to parse into component metadata.
 * @returns Parsed component metadata.
 * @throws Throws `SyntaxError` if JSON content is malformed.
 */
const parseFormat = (format: string): IComponentMetadata[] =>
    format /* Sometimes my genius... it's almost frightening. */
        .split("\n\n")
        .map((line) =>
            line
                .split("\n")
                .filter((line) => line)
                .map((line) => line.trim())
        )
        .map(([id, margin, padding, dimensions, coordinates, z, json]) => {
            const [topMargin, rightMargin, bottomMargin, leftMargin] = margin.split(/\s+/).map((m) => parseInt(m));
            const [topPadding, rightPadding, bottomPadding, leftPadding] = padding.split(/\s+/).map((p) => parseInt(p));
            const [width, height] = dimensions.split(/\s+/).map((d) => parseInt(d));
            const [top, left] = coordinates.split(/\s+/).map((c) => parseInt(c));
            const zIndex = parseInt(z);
            const content = JSON.parse(json);

            return {
                id,
                margin: {
                    top: topMargin,
                    right: rightMargin,
                    bottom: bottomMargin,
                    left: leftMargin,
                },
                padding: {
                    top: topPadding,
                    right: rightPadding,
                    bottom: bottomPadding,
                    left: leftPadding,
                },
                width,
                height,
                top,
                left,
                zIndex,
                content,
            };
        });

export default parseFormat;
