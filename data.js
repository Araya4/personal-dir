const arrSrc = ["aboout:blank",'PLymm91FIIzMuWqLhqG3IkEIwYvkrVsYSV',
    'Iy8HmOAQQVs','oqTs2sZ-fN0','ymO5tIxUqAg',
    'k1cLYX7vQUeAq2Bohym','1005053180','k21bXdHi0IcyA0Bohys',
    'BveD70tcbvw',
    'k7KBqEOhI5euvcBohyw','k1smwNPBOlXmmxBoi66','k7eD97Vs5XIdJRBohU4',
    'k5ig3amq3N9uKUBnSPG','k7lMVXISoDpxCTBnSPM','k1TYjff43offNMBnSPI',
    'k7eqy67Di1MkGYBnSPK','k3eFbpdOZ0gIzcBnTcU','k7D9LtNtZzpmz0BnTcW',
    'k5sLKLKuSg4sm2Bohyk','k1HvwGmLnMMzWOBohyo','k3vsOdvhndcHyYBohyy',
    'q0vP9USXMS8',
    'k6vTADP42oEgNYBohyu',
    "k67GBsH6KHMt0sBlZam" , 'k4vik4QaAhibmHBlZio' , 'k38EjQ3yvi40m6BlZim' , 'k2nISFY0nl4OY6BlZik','kZyrYnOwlYFoiNBlZig',
    'k6SMmcKlfLs5H6BlZii','k1zMQmiZCHqCMBBlZEi','k7q3j3t4Vvbs0WBlZEg','ko9txT3mPXqW44BlZEa','k5roxIbt2Tn5YRBlZEc',
    'k5jZQHHPOavmazBn4yG','kFznqQYbMplvFYBn4yy','kUkWgOFiaBqrm6Bn4tq','k5QsQYegtqJmBtBn4yC','k5B21GO2rEIMyGBn4yA',
    'k43avMNSRrAf7RBn4ys','k1psNf0L5VCUjSBn4yw','k5x7TlqgPAft7OBn4yu','k7JRMfE37Zw6HQBn4yq','k70FbxeovO1XJUBn4yE',
    'x6qdt2d', 'x6qrxm2','x6qwtxj','x6qwvg5','x6r1ufz', 'x6rbp8m','x6rbrgh','x6rbvhn',
    'x6rbwzt', 'x6rjewh','x6rjhk7','x6sxcp5','x6sxcp4', 'x6w1ktw','x6w1lrh','x6w1u48','x6w1ukp',
    'PLxfhbpox4ajSZB57RpGhW4F4LhJtDIMKN','PLoHUbsYCnjq_N3_tWGHV44wahLYnlABPs','PLymm91FIIzMtfO1NYl2UNgdrmwyZ-GfcV',
    'PLbtT4qgTjcmmjeXs4rPQAydjaPC6Vrjho','PLymm91FIIzMvyuz7A2mxL-ZJapu4-RZfb','PLOBbhydezQbek3PJDx0tTiexzeMWly2JO',
    'PLGH-CIYjsKx54QLiHQIH4F2ZobAVKVVpF','PLrHp1Mm55sYo_W5tW5vVhA8ZcldvFR3gL','PLhA5A89xxhfxNrsG7zzs9qAXKVqo68ASO',
    'PLXopbKxiivxpHJeQZlqhMscN8hGEE4WbJ'];
const youtubeSet = new Set([2,3,4,8,21]);
const dailymotionSet = new Set(Array.from({ length: 59 - 42 + 1 }, (_, i) => 42 + i));
const youtubePlaylistSet = new Set([1,...Array.from({ length: 69 - 60 + 1 }, (_, i) => 60+ i)]);
const vimeo = new Set([6]);

var videoUrl = arrSrc.map((ele,idx)=>{
    if(vimeo.has(Number(idx))){
        return  `https://player.vimeo.com/video/${ele}?badge=0&autopause=0&player_id=0&app_id=58479`;
    }else if(dailymotionSet.has(Number(idx))){
        return `https://geo.dailymotion.com/player.html?video=${ele}&autoplay=1`
    }else if(youtubePlaylistSet.has(Number(idx))){
        return `https://www.youtube.com/embed/videoseries?list=${ele}`
    }
    else{
        return youtubeSet.has(Number(idx)) ? `https://www.youtube.com/embed/${ele}` : `https://www.dailymotion.com/embed/video/${ele}`;

    }
            
})
