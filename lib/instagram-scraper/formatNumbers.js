export function formatNumbers(n, p, ts, dp) {
    let t = [];

    if (typeof p == 'undefined') p = 2;
    if (typeof ts == 'undefined') ts = ',';
    if (typeof dp == 'undefined') dp = '.';

    n = Number(n).toFixed(p).split('.');

    for (let iLeng = n[0].length, i = iLeng? iLeng % 3 || 3 : 0, j = 0; i <= iLeng; i+=3){
        t.push(n[0].substring(j, i));
        j = i;
    }

    return t.join(ts) + (n[1]? dp + n[1] : '');
}
