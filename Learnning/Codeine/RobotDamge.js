function RobotDamge(obj, hp) {
    let Heart = 0;

    for (let i = 0; i < obj.length; i += true) {
        let OBJs = obj[i].toLowerCase();
        if (hp != 0) {
            if (OBJs === 'h') Heart = hp -= 60;
            else if (OBJs === 'b') Heart = hp -= 40;
            else if (OBJs === 'l') Heart = hp -= 20;
        } 
        if (hp === 0) return 'You Win : Boss Death!!'
    }
    return 'Total Hp Boss : ' + Heart;
}

// H = Head  (-60)
// B = Body  (-40)
// L = Leg   (-20)

let Hp_Boss = 600;

const Damge_Player1 = ['h', 'b', 'b', 'l', 'b'];
console.log(RobotDamge(Damge_Player1, Hp_Boss))

const Damge_Player2 = ['h', 'h', 'h', 'h', 'h',
                       'h', 'h', 'h', 'h', 'h'];
console.log(RobotDamge(Damge_Player2, Hp_Boss))

const Damge_Player3 = ['h', 'b' , 'b', 'l', 'b', 'h', 'l'];
console.log(RobotDamge(Damge_Player3, Hp_Boss))

const Damge_Player4 = ['h', 'b', 'b', 'l', 'b',
                       'h', 'b', 'b', 'l', 'b',
                       'h', 'b', 'b', 'l', 'b',
                       'h', 'b', 'b', 'l', 'b',
                       'h', 'b', 'b', 'l', 'b'];
console.log(RobotDamge(Damge_Player4, Hp_Boss))