module.exports = function toReadable (number) {
    let translator = [
        ['zero',  'ten',       'hundred'],
        ['one',   'eleven',    'ten'    ],
        ['two',   'twelve',    'twenty' ],
        ['three', 'thirteen',  'thirty' ],
        ['four',  'fourteen',  'forty'  ],
        ['five',  'fifteen',   'fifty'  ],
        ['six',   'sixteen',   'sixty'  ],
        ['seven', 'seventeen', 'seventy'],
        ['eight', 'eighteen',  'eighty' ],
        ['nine',  'nineteen',  'ninety' ]
    ]

    let hundred = Math.floor(number / 100);
    let dozen = Math.floor((number - (hundred * 100)) / 10);
    let unit = number - ((hundred * 100) + (dozen * 10));

    return number >= 0 && number < 10 ? translator[number][0] :
           number >= 10 && number < 20 ? translator[number % 10][1] :
           number >= 20 && number < 100 ? `${translator[dozen][2]}${unit === 0 ? '' : ' ' + translator[unit][0]}` :
           number >= 100 && number < 1000 ?
        `${translator[hundred][0]} ${translator[0][2]}${dozen === 1 && unit === 0 ? ' ' + translator[dozen][2] : dozen === 0 || dozen === 1 ? '' : ' ' + translator[dozen][2]}${unit === 0 ? '' : dozen === 1 ? ' ' + translator[unit][1] : ' ' + translator[unit][0]}` : 'Out of diapazon';

}
