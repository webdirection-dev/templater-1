export const useCopyUpdate = (stand, qualities, isInside, updateDescription) => {
    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    const standOut = stand ? `${stand}` : ''
    const qualitiesOut = qualities ? ` ${qualities}` : ''

    const str = (
        `${inside}` +
        `**Инцидент в работе**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n${updateDescription}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
