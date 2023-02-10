import styles from "../../less/cube.less";
import rightCubeStyle from "./RightCube.less";

const RightCube = () => {
    return <div className={`${styles["cube"]} ${rightCubeStyle["right-cube"]}`}>2</div>
}

export default RightCube;