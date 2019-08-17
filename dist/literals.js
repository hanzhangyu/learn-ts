function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
var Direction = strEnum(['North', 'South', 'East', 'West']);
var sample;
sample = Direction.North;
sample = 'North';
var Direction1 = ['North', 'South', 'East', 'West'];
var sample1;
sample1 = 'South';
