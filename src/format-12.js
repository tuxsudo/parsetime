export const format = ({hours, minutes, seconds}) => {

    const meridiem = hours > 11 ? "pm" : "am";

    // ensure 12 hour & non-zero
    const h = hours % 12 || 12;

    // ensure 2-chars hours
    const hh = `${h}`.length===2 ? h : `0${h}`;

    // ensure 2-chars on minutes
    const mm = `${minutes}`.length===2 ? minutes : `0${minutes}`;

    // ensure 2-chars on seconds
    const ss = `${seconds}`.length===2 ? seconds : `0${seconds}`;

    return `${hh}:${mm}:${ss} ${meridiem}`;
}

export default format;
