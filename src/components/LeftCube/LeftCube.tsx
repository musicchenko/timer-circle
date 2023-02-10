import styles from "../../less/cube.less";
import leftCubeStyle from "./LeftCube.less";

const LeftCube = () => {
    return <div id="left-cube" className={`${styles["cube"]} ${leftCubeStyle["cube-left"]}`}>1</div>
}

export default LeftCube;