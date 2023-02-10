import { useState, useCallback, useEffect } from "react";
import styles from "./App.less";
import { TIMER_SECONDS } from "./constants/timer";
import LeftCube from "./components/LeftCube";
import RightCube from "./components/RightCube";
import Circle from "./components/Circle";

const App = () => {
    const [isTimerStarted, setTimerStarted] = useState<boolean>(false);
    const [timeUntilEnd, setTimeUntilEnd] = useState<number>(0);
    const [isCircleExists, setCircleExists] = useState<boolean>(false);
    const [animatedCircleStyle, setAnimatedCircleStyle] = useState<object>({});

    const startCircle = useCallback(() => {
        setCircleExists(true);
        const startPosition = document.getElementById("#left-cube")?.getBoundingClientRect();
        setAnimatedCircleStyle({
            startPosition
        })
    }, []);

    const startTimer = useCallback(() => {
        if (!isTimerStarted) {
            setTimerStarted(true);
            setTimeUntilEnd(TIMER_SECONDS);
            startCircle();
        }
    }, [timeUntilEnd]);

    useEffect(() => {
        if (isTimerStarted) {
            const intervalId: any = setInterval(() => {
                const nextTime: number = timeUntilEnd - 1;
                if (nextTime > 0) {
                    setTimeUntilEnd(nextTime);
                }
                else {
                    setTimerStarted(false);
                    clearInterval(intervalId);
                }
            }, 1000)
            return () => clearInterval(intervalId);
        }
    }, [isTimerStarted, timeUntilEnd])

    return <div className={styles["app"]}>
        <div className={styles["app__cubes"]}>
            <LeftCube />
            <RightCube />
            {isCircleExists && <Circle />}
        </div>
        <button onClick={startTimer} className={`${styles["app__btn"]}${isTimerStarted ? " " + styles["app__btn_gray"] : ""}`}>
            {isTimerStarted ? timeUntilEnd : "Start"}
        </button>
    </div>
}

export default App;
