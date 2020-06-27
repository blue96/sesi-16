function grouping(scores){
    let group = {
        pass: [],
        fail: []
    }
    for (let i = 0 ; i < scores.length; i ++){
        if (scores[i] < 75){
            group.fail.push(scores[i])
        }
        else {
            group.pass.push(scores[i])
        }
    }
    return group
}

export {
    grouping,
}