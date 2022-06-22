
import s from "./flex.module.scss"

const Flex = () => {

    return (
        <div className={s.parent}>
            <div className={s.child}></div>
            <div className={s.child}></div>
            <div className={s.child}></div>
            <div className={s.child}></div>
        </div>
    )
}


export default Flex