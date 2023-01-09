import "../styles/EndScreen.css";
import { motion } from "framer-motion";

function EndStat({ label, value }) {
    return (
        <div className="end-screen__stat">
            <div className="end-screen__stat-label"> { label } </div>
            <div className="end-screen__stat-value"> { value } </div>
        </div>
    );
}

function EndScreen({ score, bestScore, onRetryClick, playTime }) {
    const minutes = `${ Math.floor(playTime / 60) }`.padStart(2, "0");
    const seconds = `${ Math.floor(playTime % 60) }`.padStart(2, "0");
    const timeString = `${ minutes }:${ seconds }`;

    return (
        <div className="end-screen">
            <h1> QUIZ COMPLETE! </h1>
            <motion.div
                className="end-screen__trophy"
                initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
                animate={{ rotate: 360 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
            >
                🏆
            </motion.div>
            <EndStat label="Score" value={ score } />
            <EndStat label="Best Score" value={ bestScore } />
            <EndStat label="Time to Complete" value={ timeString } />
            <button className="end-screen__button" onClick={ onRetryClick }>
                Retry?
            </button>
        </div>
    );
}

export default EndScreen;