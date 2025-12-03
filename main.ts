function textWithIconsExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Apple", img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `),
    miniMenu.createMenuItem("Burger", img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `),
    miniMenu.createMenuItem("Lemon", img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `),
    miniMenu.createMenuItem("Chicken", img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `),
    miniMenu.createMenuItem("Ham", img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `),
    miniMenu.createMenuItem("Pizza", img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Donut", img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Cake", img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `),
    miniMenu.createMenuItem("Ice Cream", img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Strawberry", img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `),
    miniMenu.createMenuItem("Cherry", img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `),
    miniMenu.createMenuItem("Taco", img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `)
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu.top = 10
    myMenu.right = 150
}
function singleRowExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Sunday"),
    miniMenu.createMenuItem("Monday"),
    miniMenu.createMenuItem("Tuesday"),
    miniMenu.createMenuItem("Wednesday"),
    miniMenu.createMenuItem("Thursday"),
    miniMenu.createMenuItem("Friday"),
    miniMenu.createMenuItem("Saturday")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 20)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, miniMenu.createBorderBox(
    4,
    0,
    4,
    0
    ))
    myMenu.left = 10
    myMenu.left = 10
}
function monsterMakerExample () {
    headMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("pumpkin", img`
        ..............................
        ..............................
        ..............................
        ..............................
        .......4444444444444444.......
        ......444444444444444444......
        .....44444444444444444444.....
        .....444444444444444444444....
        ...44444444444444444444444....
        ...444444444444444444444444...
        ...444444444444444444444444...
        ...4444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..44444444444444444444444444..
        ..4444444444444444444444444...
        ..4444444444444444444444444...
        ..4444444444444444444444444...
        ...444444444444444444444444...
        ...444444444444444444444444...
        ....44444444444444444444444...
        ....44444444444444444444444...
        ....4444444444444444444444....
        .....44444444444444444444.....
        .....44444444444444444444.....
        `),
    miniMenu.createMenuItem("ghost", img`
        ......c................cb.....
        .cc..cb................cccbcc.
        .bc.......ccccccccc......bccc.
        ..b.....ccbbbbbbbbbcc.....bb..
        ..bc...cbbbbbbbbbbbbbc........
        .cc...cbbaabbbbbbbbbbbc.......
        .b...cbbabbbbbbbbbbbbbbc.....c
        cb...cbabbbfbbbbbfbbbbbc....bc
        ....cbbabbbbfbbbfbbbbbbbc...bc
        ....cbbbbbbbbbbbbbbbbbbbc....b
        ....cbbbbbbfbbbbbfbbbbbbc..c..
        ....cbbbbbbfbbbbbfbbbbbbc..cb.
        ....cbbbbbbbbbbbbbbbbbbbc..bc.
        ....cbbbbbbbbbbbbbbbbbbbc..bc.
        cb..cbbbbbbbbbbbbbbbbbbbc.....
        cb..cbbbbbbbbbbbbbbbbbbbc.....
        cb..cbbbbbbbfffffbbbbbbbc.....
        bc...cbbbbbfbbbbbfbbbbbc......
        bc...cbbbbbbbbbbbbbbbbbc......
        ......cbbbbbbbbbbbbbbbc.......
        .......cbbbbbbbbbbbbbc........
        ........ccbbbbbbbbbcc.....bcc.
        ..........ccccccccc.......ccb.
        ...b.....................bcb..
        ...cb.........................
        ...ccbb.............bcc.......
        ....bcc...ccbb......ccb.......
        ..........bbcc................
        ..............................
        ..............................
        `),
    miniMenu.createMenuItem("jack", img`
        ............77................
        ..........44477444444.........
        ........444444744444444.......
        ......4444444474444444444.....
        .....444444444444444444444....
        ....44444444444444444444444...
        ...444444fff44444fff44444444..
        ...44444ff5f44444f5ff4444444..
        ..444444f55f44444f55f44444444.
        ..44444ff55f44444f55ff4444444.
        .444444f55ff44444f555f44444444
        .444444f55ff44444ff55f44444444
        .444444f55f4444444f55f44444444
        .444444ff5f4444444f5ff44444444
        .4444444fff4444444fff444444444
        .44444444444444444444444444444
        .44444444444444444444444444444
        .44444444444444444444444444444
        .44444444444444444444444444444
        .44444444444444444444444444444
        .44444ff44444444444444ff444444
        ..44444fff4444444444fff444444.
        ..44444f5fff444444fff5f444444.
        ...44444f55ffffffff55f444444..
        ...444444f55f555f555f4444444..
        ....444444f555f5555f4444444...
        .....444444ffffffff4444444....
        ......4444444444444444444.....
        ........444444444444444.......
        ..........44444444444.........
        `),
    miniMenu.createMenuItem("flower", img`
        ..............................
        ...........66666..............
        ............66966.............
        .............6996.............
        ...........6699966666.........
        ............669699996.........
        .............669699966........
        ..........6666699669966.......
        ...........699999969996.6.6.6.
        ............69666696966666666.
        ............66999666681699966.
        ...........666669999688699966.
        ..........666776999666999666..
        .........6677776966699966.....
        ....66666667776669999966.666..
        ....66677777766.6666699669966.
        ...667777777666.....669999996.
        ...66777776666.......66666666.
        ...66777776666...........666..
        ...667777666..................
        ....67777766..................
        ....667777666.................
        .....667777666................
        .....667777766................
        ......6677776666..............
        ......667777766666............
        ......666677777766............
        ........66677777666...........
        ..........666777766...........
        ..........666777766...........
        `),
    miniMenu.createMenuItem("skeleton", img`
        ..............................
        ......fffffffffffffff.........
        ....fff1111111111111fff.......
        ...ff11111111111111111fff.....
        ..f111111111111111111111f.....
        .f1111111111111111111111ff....
        ff11111111111111111111111f....
        f111111111111111111111111f....
        ff1111111111111111111111ff....
        .f11111111ff1111ff111111f.....
        .f111111ffff1111ffff1111f.....
        .f11111fffff1111fffff111f.....
        .f11111ffff111111ffff111f.....
        .f1111111111111111111111f.....
        .f1111111191111111911111ff....
        .f11111111111111111111111f....
        .f111111119111fff19111111f....
        .f11111111111ff1ff1111111f....
        .f11111111111111111111111ff...
        .f111111111111111111111111f...
        .f1fff11111111111111111111ff..
        .f1111f111111111111ff111111f..
        .f1111f11111111111f11ff1111ff.
        .f111ff111111111111111f11111f.
        .f111111111111111111fff11111f.
        .ff111111111111111111111111ff.
        ..ffff111111111111111111ffff..
        .....fffff1111111111111ff.....
        .........fffffffffffffff......
        ..............................
        `),
    miniMenu.createMenuItem("monster", img`
        .........................dd...
        ...ddddd................ddddd.
        ...dbbbbdd.eeeeeeeee..dddbbbdd
        ..dbbbbbbdeeeeeeeeeeeddbbbbbd.
        .ddbbbbbbeeeeeeeeeeeeebbbbbbd.
        ddbbbbbbbeeeeeeeeeeeeeebbbbbd.
        dbbbddbbbeeeeeeeeeeeeeeebbbbd.
        dbbdd.dddbeeeeeeeeeeeeeeeddbd.
        dbbd....ddeeeeeeeeeeeeeee.dbd.
        dbbd.....eeeeeeeeeeeeeeeeedbdd
        dbbd..dddeeeeeeeeeeeeeeeeedbbd
        dbbd..dbddeeeeeeeeeeeeeee.dbbd
        .dbdd.dbbdeefffeeefffeeddddbbd
        .dbbd.ddbdeef1feeef1feedbdbbbd
        .dbbd.dbbdeef9feeef9feedbddbdd
        .dbbdddbbdeefffeeefffeedbbdbd.
        .ddbbbbbddeeeeeeeeeeeeedbbbbd.
        ..dbbbbbd.eeeeeeeeeeeeedbbbdd.
        ..dddbbdd.eeeeeeeeeeeeeedbbd..
        ....dddd.eeeeeeefeeeeeeedddd..
        .......eeeeeeeeeeeeeeeeee.....
        ......eeeeeeeeeeeeeeeeeeee....
        ......eeeeeeeeeeeeeeeeeeee....
        .......eeeeeefffffffeeeee.....
        .......eeeeefeeeeeeefeeee.....
        ........eeeeeeeeeeeeeeee......
        .........eeeeeeeeeeeeee.......
        ..........eeeeeeeeeeee........
        ..........eeeeeeeeeeee........
        ............eeeeeeee..........
        `),
    miniMenu.createMenuItem("tree", img`
        ..7.........777.......77......
        ..f7f..7...f7f...7...f77...7..
        ..777..7...777..7....7f.7..7..
        ..777...7..777..7...777.7.77..
        ..77....7..77...7..777.7..7...
        ..77....7..77...7.777..7.77.7.
        ..777...7..777..7.777.7.7..77.
        ..777...77.777.77.77.7.7..77..
        ..7777...7..77.7.77..777.777..
        ...777....ccccccc7..77777777..
        ....77777ccbbbbbbcc7777777....
        ......777cbbbbbbbbcc777.......
        .7777...cbbbbbbbbbbcc777777f77
        77..777.cbbbbbbbbbbbc777777777
        7....777cbbbfbbbfbbbc7.....f..
        ...77777cbbbfbbbfbbbc77.......
        ..77777.cbbbbbbbbbbbc.777.....
        .77.77.cbbbbbbbbbbbbc.7777....
        .7..77.cbbbbbbbbbbbbc..7777f..
        .7..77.cbbbffbbbffbbc7..777777
        .7..77.cbbbbfffffbbbc77....f77
        .7..77.7cbbbbbbbbbbbc.77......
        .7..77.7.cbbbbbbbbbcc..77.....
        ....77.7..cbbbbbbbc..7..77777.
        ...77777..ccbbbbbbc..77.....77
        ...77.7..cccbbbbbbccc.777.....
        ..777.7.ccbbbbbbbbbbc....777..
        ..f7f...cbbbbbbbbbbbc......777
        ........cbbbbbbbbbbbcc........
        ........cbbbbbbbbbbbbc........
        `)
    )
    headMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 30)
    headMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Padding, 0)
    headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
    headMenu.left = 50
    headMenu.top = 5
    headMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
    torsoMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("ribs", img`
        ......................111111......................
        ......................bb1111b.....................
        ..............11111111bbbb111.....................
        ...........1111111111111111111111111111111........
        .........111111bbbbbbb11111111111111111111111.....
        ........111111bbb......11111111bbbbb1111111111....
        ......1111111..........bb1111bbbbbbbbbb11111111...
        .....1111111...........bb111bb.........11111111...
        ...111111111...........1bb1111...........111111...
        ..1111111111...........1111111...........111111...
        ..1111111111...........1111111..........1111111...
        .bbb111111111...........b11111b........111111bb...
        ..bbbb1111111111........bb111bb.......111111bbb...
        ...bbbbbb111111111111...bb11bbb......111111bbbb...
        .....bbbbbbbbbb111111...1111111.....11111bbbbb....
        ........bbbbbbbbbbbb....b111111.....11bbbbb.......
        ...........bbbb.........b1111111....bbbb..........
        ........................bb111111..................
        ....................1111111111bb..................
        ............11111111111111111bb111111111111.......
        ......11111111111111bbbb1111111111111111111111111.
        .....111111111111bbbb...11111111bbb111111111111111
        ....11111111111.........11111111bbbbbbbbb111111111
        ....b11111111...........b11111bb...........1111111
        ....b1111111............b11111bb............1111bb
        ....bb1111111...........bb111bb1...........1111bbb
        ....bbb11111111.........11111111.........11111bbbb
        .....bb1111111111.......11111111........111111bbbb
        ......bbbb11111111......11111111......111111bbbb..
        ......bbbbbbbbbbbbbb...b111111b1.....1bbbbbbb.....
        .......................bbb111bb.....bbbbbbb.......
        .......................bbb11bbb......bbb..........
        .......................11111111...................
        ....................1111111111111111111111111.....
        ................111111111111111111111111111111....
        .........1111111111111111111111111bbbbbbb111111...
        .......1111111111bbbbb.11111111bbbbbbbbbbb11111...
        ......1111111111bb.....b1111111.........bb111111..
        .....1111111bbbb.......bb111111...........111111..
        .....1111111bbb........bbb111bb...........11111bb.
        ....bb11111111.........11111111..........11111bbb.
        ....bbb11111111........11111111.........11111bbbb.
        ....bbbb111111111......11111111........111111bbbb.
        .....bbbb11111111111...11111111.......111111bbbbb.
        .......bbbbbbbbbb111...11111111....11111111bbbbb..
        ...........bbbbbbbbb...bb11111b..11111111bbbbb....
        .......................bbb111bb..1111111bbbbb.....
        .......................11111111..bbbbbbb..........
        .......................11111111...................
        .......................1111111....................
        `),
    miniMenu.createMenuItem("jacks", img`
        .....7777...444444444444444444444444444...........
        .....7..774e44444444444444444444444444444.........
        ....77.44444444444444444444444444444e44444........
        ....7..4444444ffff44444444444fff4444e44444....777.
        ....7.4444e4444fff44444444444fff4444e444444..7777.
        ....7.4444e44444ff44444444444fff4444e4444447.77...
        ...77.4444e44444ff44444444444ff44444e444444777....
        ...7..4444e4444444444444444444444444e444444477....
        ..77..4444e4444444444444444444444444e444e44477....
        7777..444444444444444444444444444444e444e44477....
        7777..4444e4444444444ffffff444444444e444e444.77...
        7777...444e4444444444fffff4444444444e444e444.77...
        777....444e44444444444444444444444444444e444.77...
        .77....444e4444444444444444444e444444444e444.77...
        77.....444e4444444444444444444e444444444e44...7...
        .......444e444444ee44444444444e44444e444444...7...
        ........44e444444ee4444444444ee44444e44444....77..
        ........4eee444444e4444444444ee4444ee444e4....77..
        .........eee444444ee44444444eee444ee444ee......7..
        .........eeeee4444ee4444444eeee44eee444ee...7777..
        ..........eeeee444eee444444eeee4eeee444e....7777..
        ...........eeeee44eeee4444eeeee4eee444ee....7777..
        ............eeeeeeeeeee4eeeeeeeeeee4eee.....7777..
        ................eeeeeeeeeeeeeeeeeeeeee......777...
        ..........777777..4444eeeeeeee44eeeee.............
        ........77.......44444444ee4444444447.............
        ......77......4444444444444444444444744...........
        ......7......4444444444444444444444447444.........
        .....77....4444444444444444444444444474444........
        .....7....444444444444444444444fff444774444.......
        ..7777....4444444fffff44444444ff1fff4474444.77....
        ..77777..4444444ff111ff444444ff1111f447777777777..
        ..77777.44444444f11111ff44444f11111f44444777777...
        ..7777.444444444f111111f44444f11111f444444774.....
        ..7777.444444444f11111ff44444ff1111f4444444444....
        .......444444444ff111ff4444444ffffff4444444444....
        .......4444444444fffff444444444444444444444444....
        .......444444444444444444444444444444444444444....
        .....e4444444444444444444444444444444444444e44....
        .....e444444444444444444fffffff44444444444ee44....
        .....e4ee44444444444444ff11111f44444444444ee44....
        .....e44e44444444444444f111111f44444444444e444....
        .....e44e44444444444444f111111f4444444444ee444....
        .....e44ee4444444e44444f111111f4444444444e444e....
        .....e44ee444444ee44444f111111f444444444ee444e....
        .....ee44e444444ee44444fff1111f444444444e4444e....
        ......e44ee44444ee4444444ffffff44444444ee444ee....
        ......eee4ee4444ee44444444444444444444eee44ee.....
        ........eeeee444ee444444444444444444eeee44eee.....
        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
        `),
    miniMenu.createMenuItem("purp", img`
        ..............aaaaaaaaa1111111aaaaaaa1aaaa........
        ...........a1aaaaaaaaaaaaaaaaaaaaaaaa1aaaa1a......
        .........aaa11aaaaaaaaaaaaaaaaaaaaaa1aaaa11aaa....
        .........aaaa1aaaaaaaaaaaaaaaaaaaaa1aaaaa1aaaa....
        .........aaaa1aaaaaaaaaaaaaaaaaaaa11aaaa1aaaa.....
        ........11aaa11aaaaaaaaaaaaaaaaaaa1aaaa1aaaaa.....
        ......aaa1aaaa1aaaaaaaaaaaaaaaaaaa1aaaa1aaaa......
        ......aaaa1aaa11aaaaaaaaaaaaaaaaaa1aaa1aaaaa......
        .......aaaa1aaa1aaaaaaaaaaaaaaaaaa1aaa1aaaa.......
        ........aaa11aa1aaaaaaaaaaaaaaaaaaaaa1aaaad.......
        ..........aa1aaaaaaaaaaaaaaaaaaaaaaaa1aaadd.......
        ..........da11aaaaaaaaaaaaaaaaaaaaaa11aadddd......
        .........ddda11aaaaaaaaaaaaaaaaaaaaa1aaadddd......
        .........dddda1aaaaaaaaaaaaaaaaaaaaa1a.ddddd......
        .........ddddd11aaaaaaaaaaaaaaaaaaaaaa.dddddd.....
        ........dddddddaaaaaaaaaaaaaaaaaaaaaa..dddddd.....
        ........ddddddd..aaaaaaaaaaaaaaaaaaa...ddddddd....
        ........dddddd...aaaaaaaaaaaaaaaaaa.....dddddd....
        ........ddddd....aaaaaaaaaaaaaaaaaa.....dddddd....
        .......dddddd....aaaaaaaaaaaaaaaaaa.....ddddddd...
        .......dddddd....aaaaaaaaaaaaaaaaaa.....ddddddd...
        .......dddddd....aaaaaaaaaaaaaaaaaa.....ddddddd...
        .......dddddd....aaaaaaaaaaaaaaaaaa.....dddddddd..
        .......ddddd.....aaaaaaaaaaaaaaaaaaa....dddddddd..
        .....ddddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddd.
        .ddddddddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddd.
        .ddddcdddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddd.
        bdcccddddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddd.
        bb.ddddddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddbb
        b.dddddddddd.....aaaaaaaaaaaaaaaaaaa....ddddddddbb
        ..dddddddddd.....aaaaaaaaaaaaaaaaaaa....bbdddddd.b
        ..ddddddddd......aaaaaaaaaaaaaaaaaaaa...bbdddddd..
        .dddddddddd......aaaaaaaaaaaaaaaaaaaa...b.dddddb..
        .ddd.dddddd.....aaaaaaaaaaaaaaaaaaaaa...b.dddb.bb.
        .ddd.dddddd.....aaaaaaaaaaaaaaaaaaaaa...b.dddbbbb.
        .dd.dddd.dd.....aaaaaaaaaaaaaaaaaaaaa..bb.dd.bb.b.
        .bb.dddd.dd.....aaaaaaaaaaaaaaaaaaaaa..bb..b..b.b.
        .bb.ddd..dd.....aaaaaaaaaaaaaaaaaaaaaa.b...b..b.b.
        .bb.ddd..bb.....aaaaaaaaaaaaaaaaaaaaaa.b...b.bb.b.
        .bb.ddd..bb.....aaaaaaaaaaaaaaaaaaaaaa.....b.bb.b.
        .bb.bb....b.....aaaaaaaaaaaaaaaaaaaaaaa....b.bb...
        .bb..bb...b....aaaaaaaaaaaaaaaaaaaaaaaa....b.bb...
        .bb..bb...b....aaaaaaaaaaaaaaaaaaaaaaaa...bb.bb...
        ..b...b...bb...aaaaaaaaaaaaaaaaaaaaaaaaa..b..bb...
        ......bb...b...aaaaaaaaaaaaaaaaaaaaaaaaa.bb..bb...
        .......b.......aaaaaaaaaaaaaaaaaaaaaaaaa..........
        .......b.......aaaaaaaaaaaaaaaaaaaaaaaaa..........
        ...............aaaaaaaaaaaaaaaaaaaaaaaaa..........
        ...............aaaaaaaaaaaaaaaaaaaaaaaa...........
        ...............aaaaaaaaaaaaaaaaaaaaaaa............
        `),
    miniMenu.createMenuItem("yeti", img`
        ................eeeeeeeeeeeeeeeeeee...............
        ...............eeeeeeeeeeeeeeeeeeee...............
        ...............eeeeeeeeeeeeeeeeeeeee..............
        ..............eeeeeeeeeeeeeeeeeeeeee..............
        ..............eeeeeeeeeeeeeeeeeeeeeee.............
        ..............eeeeeeeeeeeeeeeeeeeeeeee............
        .............eeeeeeeeeeeeeeeeeeeeeeeeee...........
        .............eeeeeeeeeeeeeeeeeeeeeeeeeeee.........
        ............eeeeeeeeeeeeeeeeeeeeeeeeeeeee.........
        ...........eeeeeeeeeeeeeeeedddeeeeeeeeeeeeee......
        ........eeeeeeeeeeeeeeeeddddddddeeeeeeeeeeeee.....
        .......eeeeeeeeeeeeeeeeeddddddddeeeeeeeeeeeee.....
        ......eeeeeeeeeeeeeeeddddddddddddeeeeeeeeeeee.....
        .....eeeeeeeeeeeeeeeddddddddddddddeeeeeeeeeeee....
        ....eeeeeeeeeeeeeeeddddddddfddddddeeeeeeeeeeee....
        ....eeeeeeeeeeeeeeeddddddddfddddddeeeeeeeeeeee....
        ...eeeeeeeeeeeeeeeeddddddddfddddddeeeeeeeeeeeee...
        ...eeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeee...
        ...eeeeeeeeeeeeeeedddfddddddddddddeeeeeeeeeeeee...
        ...eeeeeeeeeeeeeeedddfdddddddfddddeeeeeeeeeeeee...
        ..eeeeeeeeeeeeeeeedddfdddddddfddddeeeeeeeeeeeee...
        ..eeeeeeeeeeeeeeeedddddddddddfddddeeeeeeeeeeeee...
        ..eeeeeeeeeeeeeeeeddddddddddddddddeeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeeedddddfdddddddddeeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeeedddddfdddddddddeeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeeedddddfddddddfddeeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeeddfdddddddddffdddeeeeeeeeeeeee..
        ..eeeeeeeeeeeeeeeedffdddddddddfddddeeeeeeeeeeeee..
        .eeeeeeeeeeeeeeeeedddddddddddddddddeeeeeeeeeeeee..
        .eeeeeeeeeeeeeeeeddddddddddddddddddeeeeeeeeeeeee..
        .eeeeeeeee.eeeeeeddddfddddddddddddddeeeeeeeeeeee..
        .eeeeeeeee.eeeeeeddddfdddddddfddddddeeeee.eeeeee..
        .eeeeeeee..eeeeeedddddddddddddddddddeeeee.eeeeee..
        .eeeeeeee.eeeeeeedddddddddddddddddddeeeee.eeeeee..
        eeeeeeee..eeeeeeedddddddddfdddddfdddeeeee.eeeeee..
        eeeeeeee..eeeeeeeddfdfddddfdddddfdddeeeee.eeeeee..
        eeeeeeee..eeeeeedddfdfddddfdddddfdddeeeee.eeeeee..
        eeeeeee...eeeeeedddfddddddddddddddddeeeee..eeeee..
        eeeeeee...eeeeeedddddddddddddddddddeeeeee..eeeee..
        feeeee....eeeeeedddddddfdddddddddddeeeeee..eeeee..
        .eeee.....eeeeeeeddddddfdddddddddddeeeeee...eeee..
        .feee.....eeeeeeeddddddfdddddddddddeeeeee...eeee..
        .f.f......eeeeeeeddddddddddddddddddeeeeee...eeee..
        .f.ff.....eeeeeeeeddddddddddddddddeeeeeee...eeee..
        .f..ff....eeeeeeeeeeedddddddddddddeeeeeee...ffee..
        .....f....eeeeeeeeeeeeeeeeeedddeeeeeeeeee...feee..
        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..ff.ef..
        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....ff...
        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....f....
        `),
    miniMenu.createMenuItem("sun", img`
        ................5555555555555555555...............
        ...............55555555555555555555...............
        ...............555555555555555555555..............
        ..............5555555555555555555555..............
        ..............55555555555555555555555.............
        ..............555555555555555555555555............
        .............55555555555555555555555555...........
        .............5555555555555555555555555555.........
        ............55555555555455555555555555555.........
        ...........555555555555455555555555555555555......
        ........5555555555555554555555555555555555555.....
        .......55555555555555554555555555555555555555.....
        ......555555555555555554555555555555555555555.....
        .....55555555555555555555555555555445555555555....
        ....555555555555555555555555555554455555555555....
        ....555555555555555555555555555444555555555555....
        ...55555555555555555555555555555555555555555555...
        ...55555555555555555555555555555555555555555555...
        ...55555555555555555555445555555555555555555555...
        ...55555555544445555544454444455555555555555555...
        ..555555555555545555445555555444555555555555555...
        ..555555555555555554455555555554455555555555555...
        ..5555555555555555545555555555555455555555555555..
        ..5555555555555555455555555555555445555555555555..
        ..5555555555555555455545555554555545555555555555..
        ..5555555555555555455555555555555545554445555555..
        ..5555555555555555455555555555555554555555555555..
        ..5555555555555555455554555544555554555555555555..
        ..5555555555555555455554455545555554555555555555..
        .55555555555555555545555444455555545555555555555..
        .55555555555555555545555555555555545555555555555..
        .555555555.5555445554555555555555545555555555555..
        .555555555.554455555545555555555544555555.555555..
        .55555555..555555555544455555555545555555.555555..
        .55555555.5555555555555544455555455555555.555555..
        55555555..5555555555555555544444555555555.555555..
        55555555..5555555555555555555555555555555.555555..
        55555555..5555555555555555555555555555555.555555..
        5555555...5555555555555545555555555455555..55555..
        5555555...5555555555555545555555555544455..55555..
        .55555....5555555555555545555555555555555..55555..
        .5555.....5555555555555545555555555555555...5555..
        ..555.....5555555555555545555555555555555...5555..
        ..........5555555555555545555555555555555...5555..
        ..........5555555555555545555555555555555...5555..
        ..........5555555555555555555555555555555....555..
        ..........5555555555555555555555555555555....555..
        ..........5555555555555555555555555555555.....5...
        ..........5555555555555555555555555555555.........
        ..........5555555555555555555555555555555.........
        `),
    miniMenu.createMenuItem("wave", img`
        ................6666666666666666666...............
        ...............66666666666666666666...............
        ...............666666666666666666666..............
        ..............6666666666666666666666..............
        ..............66666666666666666666666.............
        ..............666666666666666666666666............
        .............66666666666666666666666666...........
        .............6666666666666666666666666666.........
        ............66666666666666666666666666666.........
        ...........666666666688886666666666666666666......
        ........6666666666688888888866666666666666666.....
        .......66666666666888888888866666666666666666.....
        ......666666666666888888888886666666666666666.....
        .....66666666666688888888888866666666666666666....
        ....666666666666888888866888686666666666666666....
        ....666666666666888888866666886666666666666666....
        ...66666666666668888886666666866666666666666666...
        ...66666666666668888886666668866666666666666666...
        ...66666666666668888866666668666666666666666666...
        ...66666666666668888866666686666666666666666666...
        ..666666666666668888866666666666666666666666666...
        ..666666666666668888866666666666666666666666666...
        ..6666666666666688888666666666666666666666666666..
        ..6666666666666688888666666666f66666666666666666..
        ..6666666666666688888866666666f66666666666666666..
        ..6666666666666888888866666666f666f6666666666666..
        ..6666666666666888888888886666cccccc666666666666..
        ..66666666666688888888888888886cccc6666666666666..
        ..6666666666888888888888888888888888666666666666..
        .66666666666888888888888888888888888866666666666..
        .66666666666688888888888888888888888886666666666..
        .666666666.6668888888888888888888888886666666666..
        .666666666.666666688888888888888888886666.666666..
        .66666666..666666666666666688888886666666.666666..
        .66666666.6666666666666666666666666666666.666666..
        66666666..6666666666666666666666666666666.666666..
        66666666..6666666666666666666666666666666.666666..
        66666666..6666666666666666666666666666666.666666..
        6666666...6666666666666666666666666666666..66666..
        6666666...6666666666666666666666666666666..66666..
        .66666....6666666666666666666666666666666..66666..
        .6666.....6666666666666666666666666666666...6666..
        ..666.....6666666666666666666666666666666...6666..
        ..........6666666666666666666666666666666...6666..
        ..........6666666666666666666666666666666...6666..
        ..........6666666666666666666666666666666....666..
        ..........6666666666666666666666666666666....666..
        ..........6666666666666666666666666666666.....6...
        ..........6666666666666666666666666666666.........
        ..........6666666666666666666666666666666.........
        `),
    miniMenu.createMenuItem("tree", img`
        ................7777777777777777777...............
        ...............77777777777777777777...............
        ...............777777777777777777777..............
        ..............7777777777777777777777..............
        ..............77777777777777777777777.............
        ..............777777777777777777777777............
        .............77777777777777777777777777...........
        .............7777777777766666677777777777.........
        ............77777777776666666666677777777.........
        ...........777777777766666666666667777777777......
        ........7777777777777666666666666677777777777.....
        .......77777777777777666666666666667777777777.....
        ......777777777777776666666666666666777777777.....
        .....77777777777776666668666666666666777777777....
        ....777777777777766666688666668666666777777777....
        ....777777777777766666666666688666666777777777....
        ...77777777777777666666666666666666667777777777...
        ...77777777777777666666666666666666667777777777...
        ...77777777777777666666666686666666667777777777...
        ...77777777777777766666666688666666667777777777...
        ..777777777777777666666666666666666677777777777...
        ..777777777777776666666666666666666677777777777...
        ..7777777777777766666666666666666667777777777777..
        ..7777777777777766666666688886666667777777777777..
        ..7777777777777766666666666666666667777777777777..
        ..7777777777777776666666666666666667777777777777..
        ..77777777777777766666677e6666666667777777777777..
        ..77777777777777777667777ee666666667777777777777..
        ..77777777777777777777777eee66666677777777777777..
        .777777777777777777777777eee77777777777777777777..
        .777777777777777777777777eee77777777777777777777..
        .777777777.77777777777777eee77777777777777777777..
        .777777777.77777777777777eee7777777777777.777777..
        .77777777..77777777777777eee7777777777777.777777..
        .77777777.777777777777777eee7777777777777.777777..
        77777777..777777777777777eeee777777777777.777777..
        77777777..777777777777777eeee777777777777.777777..
        77777777..777777777777777eeee777777777777.777777..
        7777777...777777777777777eeee777777777777..77777..
        7777777...777777777777777eeee777777777777..77777..
        .77777....777777777777777eeee777777777777..77777..
        .7777.....77777777777777eeeee777777777777...7777..
        ..777.....77777777777777eeeee777777777777...7777..
        ..........77777777777777eeeee777777777777...7777..
        ..........77777777777777eeeee777777777777...7777..
        ..........7777777777777777eee777777777777....777..
        ..........7777777777777777777777777777777....777..
        ..........7777777777777777777777777777777.....7...
        ..........7777777777777777777777777777777.........
        ..........7777777777777777777777777777777.........
        `),
    miniMenu.createMenuItem("heart", img`
        ................2222222222222222222...............
        ...............22222222222222222222...............
        ...............222222222222222222222..............
        ..............2222222222222222222222..............
        ..............22222222222222222222222.............
        ..............222222222222222222222222............
        .............22222222222222222222222222...........
        .............2222222222222222222222222222.........
        ............22222222222222222222222222222.........
        ...........222222222222222222222222222222222......
        ........2222222222222222222222222222222222222.....
        .......22222222222222222222222222222222222222.....
        ......222222222222222222222222222222222222222.....
        .....22222222222222222222222222222222222222222....
        ....222222222222222222222222222222222222222222....
        ....222222222222222222222222222222222222222222....
        ...22222222222222222222222252222222222222222222...
        ...22222222222222222222222552222222222222222222...
        ...22222222222222222222222552222222222222222222...
        ...22222222222255222225555552225552222222222222...
        ..222222222222255222255555552555555222222222222...
        ..222222222222255522255555552555555222222222222...
        ..2222222222222555525555555555555552222222222222..
        ..2222222222222555555555555555555552222222222222..
        ..2222222222222555555555555555555552222222222222..
        ..2222222222222555555555555555555552222222222222..
        ..2222222222222255555555555555555552222222222222..
        ..2222222222222255555555555555555522222222222222..
        ..2222222222222225555555555555555522222222222222..
        .22222222222222225555555555555555222222222222222..
        .22222222222222225555555555555555222222222222222..
        .222222222.2222225555555555555552222222222222222..
        .222222222.222222255555555555555222222222.222222..
        .22222222..222222255555555555552222222222.222222..
        .22222222.2222222255555555555522222222222.222222..
        22222222..2222222225555555555222222222222.222222..
        22222222..2222222222555555552222222222222.222222..
        22222222..2222222222225555222222222222222.222222..
        2222222...2222222222222222222222222222222..22222..
        2222222...2222222222222222222222222222222..22222..
        .22222....2222222222222222222222222222222..22222..
        .2222.....2222222222222222222222222222222...2222..
        ..222.....2222222222222222222222222222222...2222..
        ..........2222222222222222222222222222222...2222..
        ..........2222222222222222222222222222222...2222..
        ..........2222222222222222222222222222222....222..
        ..........2222222222222222222222222222222....222..
        ..........2222222222222222222222222222222.....2...
        ..........2222222222222222222222222222222.........
        ..........2222222222222222222222222222222.........
        `),
    miniMenu.createMenuItem("tentacles", img`
        ...............aaaaaaaaaaaaaaa33aaaa..............
        ..b.............aaaaaaaaaaaaaa33aaaa..............
        ..ba.............aaaaaaaaaaaaa33aaaa....aaaaaa....
        ..3aa............aaaaaaaaaaaaa33aaa....aaaaaaaaa..
        ..baaa...........aaaaa3333aaaaa33aaa.aaaaaaaaaaaa.
        ..bbaaa...aa.....aaaaa33333aaaaa3333aaaaaaaaaaaaaa
        ..3bbaaaaaaaaaa.aaaaa33aa33aaaaaaaaaaaaaaaaaaaaaaa
        ...bbbbaaaaaaaaaaaaaa33aa33aaaaaaaaaaaaaabbb3bbbba
        .....3bbbbaaaaaaaaaaaa3333aaaaaaaaaaaaabbbb....b3a
        ........bbbbbaaaaaaaaaaaaaaaaaaaaaaaaaabb3......b.
        ..........3bbbbaaaaaaaaaaaaaaaaaaaaaaabbb.........
        ..............3baaaaaaaaaaaaaaaaaaaaaabb..........
        ...............bbaaaaaaaaaaaa3333aaaaabb..........
        ................aaaaaaaaaaa3333333aaab3b.......a..
        ................33333aaaaa333aaa33aabbb.......aab.
        ................aaa33aaaaa3aaaaa33aabb........aab.
        ........aaaaaa...aaa3aaaaa3aaaaa33aaa........aaa3.
        ......aaaaaaaaaa..aa3aaaaa3aaaaa33aaaa.....aaaaab.
        ....aaaaaaaaaaaaa.a33aaaaa33aaaa33aaaa....aaaaaab.
        ....aaaaaaaaaaaaa3333aaaaa333aaa33aaaaaaaaaaaaabb.
        ...aaaaaaaaaaaaaa333aaaaaaaa333333aaaaaaaaaaaaab..
        ...aaaabbbbbaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaa3b..
        ..aaaa3bb3bbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb...
        ..aaabb....bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb....
        ..aaab.....b3aaaaaaaaaaaaaaaaaaaaaaabbb3bbb3b.....
        ..aaa3.....bbaaaaaaa333aaaaaaaaaaaab3....bb.......
        ...aab......bbaaaaa33333aaaaaaaaaaa...............
        ...aab.......3baaa333aa33aaaaaaaaaa...............
        ...............aaa3aaaa33aaaaaaaaaaaa.............
        ...............aaa3aaaaa3aaaaaaaaaaaaaaaa.........
        ..............aaaa3aaaa33aaaaaaaaaaaaaaaaaaa......
        .........aaaaaaaaa333aa33aaaaaaaaaaaaaaaaaaaa.....
        ........aaaaaaaaaaaa3333aaaaaaaaaaaaaaaaaaaaa.....
        .......aaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaaaaa....
        .......aaaaaaaaaaaaaaaaaaaaaaaa3a33aaaaaaaaaaa....
        .......aaaaabbbbbaaaaaaaaaaaaaa333aaaaabbaaaaaaaaa
        .......aaaabbb3bbbaaaaaaaaaaaaaaaaaaaabbb3baaaaaaa
        .......aaaabbb.bb3baaaaaaaaaaaaaaaaaab3...bbbaaaaa
        .......aaab3......baaaaaaaaaaaaaaaaaaa......baaaab
        .......aaab........aaaaaaaaaaaaaaaaaaa......3aaabb
        ......aaabb........aaaaaaaaaaaa33333aaa.....bbbb3.
        .....aaaabb........aaaaaaaaaaa33aaa33aa...........
        .....aaaab3.......a3aaaaaaaaaa3aaaaa3aaa..........
        ......aaabb......aa33aaaaaaaaa3aaaaa3aaaa.........
        ......abbbb......aa33aaaaaaaaa3aaaaa3aaaa.........
        .......b3b.......aaa3aaaaaaaaa33aaa33aaaa.........
        .......bb.......aaa33aaaaaaaaaaa3333aaaaa.........
        ................3aa3aaaaaa3aaaaaaaaaaaaaa.........
        ................3333aaaaa333aaaaaaaaaaaaa.........
        ................aaaaaaaaaa3aaaaaaaaaaaaaa.........
        `)
    )
    torsoMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    torsoMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 50)
    torsoMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    torsoMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Padding, 0)
    torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
    torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
    torsoMenu.left = 40
    torsoMenu.top = headMenu.bottom
    LegsMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("pink", img`
        333333333333333333333333333333
        333333333333333333333333333333
        33333333333333333333333333333.
        33333333333333333333333333333.
        33333333333333333333333333333.
        33333333333333333333333333333.
        3333333333333333333333333333..
        33333333333333..33333333333...
        .3333333333333..33333333333...
        ..333333333333..3333333333....
        ..33333333333....333333333....
        ..33333333333....333333333....
        ..3333333333.....333333333....
        ...333333333......33333333....
        ...333333333......33333333....
        ...33333333.......33333333....
        ...33333333.......33333333....
        ...33333333........3333333....
        ...3333333.........3333333....
        ...3333333..........333333....
        ...3333333..........333333....
        ...3333333..........333333....
        ...333333...........333333....
        ...333333............33333....
        ...333333............33333....
        ..3333333............333333...
        ..33333333...........333333...
        ..33333333...........333333...
        ..33333333...........3333333..
        ..33333333...........3333333..
        `),
    miniMenu.createMenuItem("tentacles", img`
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        .aabbbbbbbbbbbbbbbbbbbbbbcbbb.
        .bbabbbbbbbbbbbbbbbbbbbbbcbbb.
        ..babbbbbbbbbbbbbbbbbabbbcbbb.
        ..babbbbbbbbbbbbbbbbababbcaab.
        ..babbbbbbbbbbbbbbbbbabbbcabb.
        ..abbbbbbbbbbbbbbbbbbbbbbccbb.
        ...bbbbbbbbbbbccbbbbbbbbbacb..
        ....bbbabbbbbbcbcbbcbbbbbacb..
        ....bbababbbbbcbcbbcbbbbbbc...
        .....bbabbbbaccbccbcbbbbbb....
        .....bbbbbbabcbbccbcbbbbbb....
        ......bbbbbbacbbccbccbbbbb....
        ......bbbbbbbcbbccbbcbbbb.....
        ......cbbbbbbcbbcccbcbbbb.....
        ..ccccccbbbbbcbbccaccbbbbb....
        ...ccccc3bbbbcbccacccbbbbb....
        .....ccc33bbbcbccacccbbbba....
        ........33bbbc.ccaaccabbab...c
        .bbb....bbbbb..cccaaaabbab...c
        bbb.....bbbbb...ccccccbbab33cc
        bb33...3bbbbb...ccccccbbba3ccc
        bb33..333bbb.....cccc3bbbbccc.
        bbbbb333bbbb......ccc3bbbbcc..
        .abbbbbbbbb..........bbbbb....
        .babbbaabb..........3bbaa.....
        ...bbabbab........33bbab......
        ................bbbbbba.......
        .................bbbbb........
        ..............................
        `),
    miniMenu.createMenuItem("tree", img`
        ............cccccc............
        ............eecece............
        ............eecece............
        ............eecece............
        ............eecece............
        ............eeceec............
        ............eeecec............
        ............eeecee............
        ............eeeece............
        ............ceeece............
        ............eceece............
        ............eceecc............
        ............eceeec............
        ............eeceec............
        ............eeccec............
        ............eeecee............
        ............eeecee............
        ............ceecee............
        ....66......ececee............
        .....6......ececee.......6....
        ......6886..eceece.....66..6..
        .......686..eceece.....6..6...
        ....67.6786.eceece...76.66....
        .....77.788.eceece..77.6......
        .....67.878.eceece887686......
        .....66787888ceece8878876.....
        ......6676688eeec88778786.....
        ......6677668eece88767766.....
        .....77687668ecce8668786......
        ......7.876668ee86667766......
        `),
    miniMenu.createMenuItem("bird", img`
        ....e44444...........e444444..
        ...4e44444...........e44444...
        ...e455554..........4e44444...
        ...e44444...........e444444...
        ...e44444..........ee45544....
        ...e44444.........4e44455.....
        ..445554..........e544444.....
        ..e4444..........ee5554.......
        .ee4444.........ee44455.......
        444554.......44.e44444........
        44444.........445544..........
        .4444.........44455...........
        .4445.........ee444...........
        .5554..........e4444..........
        ..4444.........ee444..........
        ..4444..........e555..........
        ..44444.........e444..........
        ...4555.........e4444.........
        ...5544..........e444.........
        ....4444..........5555........
        ....4444..........4444........
        .....4555..........4444.......
        .....5544..........4555.......
        ......4444..........444.......
        ......4444..........444....4..
        .......445.4.44......45...444.
        .......55e44.444......44.4444.
        ........ee4444e444....4444.e44
        .........4ee4.ee.44...e4e4.ee4
        ........44..4..e..4...e4.44.e4
        `),
    miniMenu.createMenuItem("bones", img`
        .....11d...11.......11...1....
        ....111d1..11.......11...1....
        ....111.d..11.......11...11...
        ....11d.d..11.......11...d1...
        ....11..d..11.......11..dd1...
        ....11..d..11.......11..dd1...
        ....11d.d..11.......11..dd1...
        ....111.d..11.......11..dd1...
        .....11.d..11.......11..dd1...
        .....11dd..11.......11..d11...
        .....111d..11.......11..d11...
        .....111d..11.......11..d11...
        ......111..11.......11..d11...
        ......111..11.......11.dd11...
        .......11.111.......11.d111...
        ........1.11........11.111....
        ........1..1........11.111....
        ........1..11.......11.11.....
        .........1..1.......d1.11.....
        .........1..1........1.1......
        ..........1.1.......11.1......
        ..........1.1.......1d.1......
        ..........1.11......1.d111....
        .......1111.11......1.ddd1....
        .......11dd1d...........d1....
        .......dddd..........11..d11..
        1d...........1.......d11..d1..
        ...11111111.1d........dd11...1
        11.11111dd.11................1
        dd......................1.11..
        `)
    )
    LegsMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 30)
    LegsMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Padding, 0)
    LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
    LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
    LegsMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    LegsMenu.left = 50
    LegsMenu.top = torsoMenu.bottom
    torsoMenu.setButtonEventsEnabled(false)
    LegsMenu.setButtonEventsEnabled(false)
    headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
    headMenu.onButtonPressed(controller.down, function (selection, selectedIndex) {
        headMenu.setButtonEventsEnabled(false)
        torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
        torsoMenu.setButtonEventsEnabled(true)
    })
    headMenu.onButtonPressed(controller.up, function (selection, selectedIndex) {
        headMenu.setButtonEventsEnabled(false)
        LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
        LegsMenu.setButtonEventsEnabled(true)
    })
    torsoMenu.onButtonPressed(controller.up, function (selection, selectedIndex) {
        torsoMenu.setButtonEventsEnabled(false)
        headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
        headMenu.setButtonEventsEnabled(true)
    })
    torsoMenu.onButtonPressed(controller.down, function (selection, selectedIndex) {
        torsoMenu.setButtonEventsEnabled(false)
        LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
        LegsMenu.setButtonEventsEnabled(true)
    })
    LegsMenu.onButtonPressed(controller.down, function (selection, selectedIndex) {
        LegsMenu.setButtonEventsEnabled(false)
        timer.after(1, function () {
            headMenu.setButtonEventsEnabled(true)
        })
        headMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
    })
    LegsMenu.onButtonPressed(controller.up, function (selection, selectedIndex) {
        LegsMenu.setButtonEventsEnabled(false)
        torsoMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 11)
        LegsMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 12)
        torsoMenu.setButtonEventsEnabled(true)
    })
}
function gridExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Fight"),
    miniMenu.createMenuItem("Switch"),
    miniMenu.createMenuItem("Item"),
    miniMenu.createMenuItem("Run")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 2)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    myMenu.bottom = 110
    myMenu.right = 150
}
function styledMenuExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Pokedex"),
    miniMenu.createMenuItem("Pokemon"),
    miniMenu.createMenuItem("Item"),
    miniMenu.createMenuItem("Richard"),
    miniMenu.createMenuItem("Save"),
    miniMenu.createMenuItem("Option"),
    miniMenu.createMenuItem("Exit")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    4,
    0,
    0,
    0
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Margin, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 4)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 4)
    myMenu.top = 10
    myMenu.right = 150
}
function framedMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Sunday"),
    miniMenu.createMenuItem("Monday"),
    miniMenu.createMenuItem("Tuesday"),
    miniMenu.createMenuItem("Wednesday"),
    miniMenu.createMenuItem("Thursday"),
    miniMenu.createMenuItem("Friday"),
    miniMenu.createMenuItem("Saturday")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 60)
    myMenu.y = 60
    myMenu.x = 80
    myMenu.setFrame(img`
        88888..8888888888888888....88888.
        87768888777877787778777888867778.
        87777686767876767678767688777778.
        87767767667676676676766786776768.
        8677676767767767677677678676778..
        .877768777686767776867678667768..
        .886668888888888888888888886688..
        .888888866666666666666668877768..
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        .867778866666666666666668888888..
        .886688888888888888888888866688..
        .867766876768677767686777867778..
        .8776768767767767677677676767768.
        86767768766767667667676676776778.
        87777788676787676767876768677778.
        87776888877787778777877788886778.
        88888..88888888888888888....8888.
        .................................
        `)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 1)
}
function iconOnlyExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Apple", img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `),
    miniMenu.createMenuItem("Burger", img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `),
    miniMenu.createMenuItem("Lemon", img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `),
    miniMenu.createMenuItem("Chicken", img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `),
    miniMenu.createMenuItem("Ham", img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `),
    miniMenu.createMenuItem("Pizza", img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Donut", img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Cake", img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `),
    miniMenu.createMenuItem("Ice Cream", img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Strawberry", img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `),
    miniMenu.createMenuItem("Cherry", img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `),
    miniMenu.createMenuItem("Taco", img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `)
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 5)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 9)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 15)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 11)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 102)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 73)
    myMenu.bottom = 100
    myMenu.left = 30
    myMenu.setTitle("Apple")
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        myMenu.setTitle(selection)
    })
}
function nestedExample () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Fight"),
    miniMenu.createMenuItem("Item"),
    miniMenu.createMenuItem("Switch"),
    miniMenu.createMenuItem("Run")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 48)
    myMenu.top = 60
    myMenu.left = 10
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
        myMenu.setButtonEventsEnabled(false)
        if (selection == "Item") {
            nestedMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Potion"),
            miniMenu.createMenuItem("Some long item name"),
            miniMenu.createMenuItem("Pokeflute"),
            miniMenu.createMenuItem("Burn Heal"),
            miniMenu.createMenuItem("Sitrus Berry"),
            miniMenu.createMenuItem("Pokedoll"),
            miniMenu.createMenuItem("Pokeball"),
            miniMenu.createMenuItem("Great Ball")
            )
        } else if (selection == "Fight") {
            nestedMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Thunderbolt"),
            miniMenu.createMenuItem("Body Slam"),
            miniMenu.createMenuItem("Poisonpowder"),
            miniMenu.createMenuItem("Splash")
            )
        } else if (selection == "Switch") {
            nestedMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Charmander"),
            miniMenu.createMenuItem("Piplup"),
            miniMenu.createMenuItem("Primeape"),
            miniMenu.createMenuItem("Caterpie"),
            miniMenu.createMenuItem("Espeon"),
            miniMenu.createMenuItem("Smeargle")
            )
        } else {
            nestedMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Do it"),
            miniMenu.createMenuItem("Don't do it")
            )
        }
        nestedMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, myMenu.height)
        nestedMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 80)
        nestedMenu.left = myMenu.right + 4
        nestedMenu.top = myMenu.top
        nestedMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 3)
            nestedMenu.close()
            myMenu.setButtonEventsEnabled(true)
        })
        nestedMenu.onButtonPressed(controller.left, function (selection, selectedIndex) {
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 3)
            nestedMenu.close()
            myMenu.setButtonEventsEnabled(true)
        })
    })
}
function plainMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Pokedex"),
    miniMenu.createMenuItem("Pokemon"),
    miniMenu.createMenuItem("Item"),
    miniMenu.createMenuItem("Richard"),
    miniMenu.createMenuItem("Save"),
    miniMenu.createMenuItem("Option"),
    miniMenu.createMenuItem("Exit")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu.top = 10
    myMenu.right = 150
}
let nestedMenu: miniMenu.MenuSprite = null
let LegsMenu: miniMenu.MenuSprite = null
let torsoMenu: miniMenu.MenuSprite = null
let headMenu: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
scene.setBackgroundColor(12)
let metaMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Plain Menu"),
miniMenu.createMenuItem("Styled Menu"),
miniMenu.createMenuItem("Text with Icons"),
miniMenu.createMenuItem("Single Row"),
miniMenu.createMenuItem("Grid Menu"),
miniMenu.createMenuItem("Icon Only"),
miniMenu.createMenuItem("Nested Menus"),
miniMenu.createMenuItem("Monster Maker"),
miniMenu.createMenuItem("Framed Menu")
)
metaMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    metaMenu.close()
    if (selectedIndex == 0) {
        plainMenu()
    } else if (selectedIndex == 1) {
        styledMenuExample()
    } else if (selectedIndex == 2) {
        textWithIconsExample()
    } else if (selectedIndex == 3) {
        singleRowExample()
    } else if (selectedIndex == 4) {
        gridExample()
    } else if (selectedIndex == 5) {
        iconOnlyExample()
    } else if (selectedIndex == 6) {
        nestedExample()
    } else if (selectedIndex == 7) {
        monsterMakerExample()
    } else {
        framedMenu()
    }
})
