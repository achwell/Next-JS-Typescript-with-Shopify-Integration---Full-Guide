import React, {FC} from "react";
import s from './LoadingDots.module.scss'

const LoadingDots: FC = () => {
    return (
        <span className={s.root}>
            <span/>
            <span/>
            <span/>
            </span>
    )
}

export default LoadingDots