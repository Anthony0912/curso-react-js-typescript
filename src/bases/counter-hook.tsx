import { useCounter } from '../hook/use-counter';
export const CounterHook = () => {
    const MAXIMUM_COUNT = 10;
    const { counter, elementToAnimate, handleClick } = useCounter({
        maxCount: MAXIMUM_COUNT
    });


    return (
        <>
            <h1>Counter Hook:  </h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={handleClick}> +1</button>
        </>
    );
}