import { CSSPosition } from '../types/CSSPosition';
import { stylesFromPosition } from './stylesFromPosition';
import { validatePosition } from './validatePosition';

const calculateOffset = (el: HTMLElement, position: CSSPosition) => {
    const isLeftRight = ['left', 'right'].includes(position);

    if (isLeftRight) return el.clientHeight / 2;
    return el.clientWidth / 2;
};

export const attachStyles = (
    tooltipElement: HTMLDivElement,
    viewportPosition: DOMRect,
    preferredPosition: string | null
) => {
    const position = validatePosition(preferredPosition) ?? 'right';
    tooltipElement.setAttribute(
        'style',
        stylesFromPosition(viewportPosition, 0, position)
    );

    requestAnimationFrame(() => {
        tooltipElement.setAttribute(
            'style',
            stylesFromPosition(
                viewportPosition,
                calculateOffset(tooltipElement, position),
                position
            )
        );
    });
};
