var spine = require('../SpineUtil');
spine.BoneData = function (name, parent)
{
    this.name = name;
    this.parent = parent;
};
spine.BoneData.prototype = {
    length: 0,
    x: 0, y: 0,
    rotation: 0,
    scaleX: 1, scaleY: 1,
    shearX: 0, shearY: 0,
    inheritScale: true,
    inheritRotation: true
};
module.exports = spine.BoneData;

