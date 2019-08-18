var Color;
(function (Color) {
    Color["red"] = "red";
    Color["blue"] = "blue";
})(Color || (Color = {}));
var ColorNum;
(function (ColorNum) {
    ColorNum[ColorNum["red"] = 0] = "red";
    ColorNum[ColorNum["blue"] = 1] = "blue";
})(ColorNum || (ColorNum = {}));
var color = Color.red;
var colorNum = ColorNum.red;
var num = 1;
var str = "1";
str = color;
colorNum = num;
num = colorNum;
