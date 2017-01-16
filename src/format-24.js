export const format = ({hours, minutes, seconds}) => {

    // ensure 2-chars on hours
    const hh = `${hours}`.length===2 ? hours : `0${hours}`;

    // ensure 2-chars on hours
    const mm = `${minutes}`.length===2 ? minutes : `0${minutes}`;

    // ensure 2-chars on seconds
    const ss = `${seconds}`.length===2 ? seconds : `0${seconds}`;

    // return format...
    return `${hh}:${mm}:${ss}`;
}

export default format;
