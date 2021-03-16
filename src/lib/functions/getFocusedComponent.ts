import { IComponentMetadata } from "../@types/Component";

export default function getFocusedComponent({ x, y }: { x: number; y: number }, components: IComponentMetadata[]) {
    const clickedOn = components.filter(
        ({ top, left, width, height }) => x > left && x < left + width && y > top && y < top + height
    );

    const largestZIndex = Math.max(...clickedOn.map(({ zIndex }) => zIndex));

    const highestZIndexes = clickedOn.filter(({ zIndex }) => zIndex === largestZIndex);

    return highestZIndexes[highestZIndexes.length - 1];
}
