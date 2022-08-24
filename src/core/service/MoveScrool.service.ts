import {useRef} from 'react';

//hook


const useMoveScrool = () => {
    let element = useRef<HTMLElement>(null);
    const onMoveToElement = () => {
        element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    let bool = false;
    return { element, onMoveToElement, bool};
}

export default useMoveScrool;