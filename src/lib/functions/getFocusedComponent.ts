import { IComponentProperties } from "../@types/Component";

/**
 * Gets the component that was clicked on.
 * @param {{ x: number; y: number; }} point Point to retrieve.
 * @param {IComponentProperties[]} components All components.
 * @returns The focused component or undefined, if no component was found.
 */
export default function getFocusedComponent(point: { x: number; y: number }, components: IComponentProperties[]) {
    const { x, y } = point;

    const clickedOn = components.filter(
        ({ top, left, width, height }) => x > left && x < left + width && y > top && y < top + height
    );

    const largestZIndex = Math.max(...clickedOn.map(({ zIndex }) => zIndex));

    const highestZIndexes = clickedOn.filter(({ zIndex }) => zIndex === largestZIndex);

    return highestZIndexes[highestZIndexes.length - 1];
}
