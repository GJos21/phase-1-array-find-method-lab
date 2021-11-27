function superbowlWin(record) {
    let result = record.find(item => item.result === "W");
    return (result ? result.year : undefined)
}
