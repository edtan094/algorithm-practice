function solution(picture) {
    const length = picture[0].length + 2
    const answer = []
    let counter = 0
    let frame = ""
    for (let i = 0; i < length; i++){
        frame += "*"
    }
    picture = picture.map(x => "*" + x + "*")
    for (let i = 0; i < picture.length + 1; i++){
        if(i === 0){
         answer.push(frame)
        } else {
            answer.push(picture[counter])
            counter++
        }
    }
    answer.push(frame)
    return answer
}
