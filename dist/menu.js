"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EndpointColor;
(function (EndpointColor) {
    EndpointColor["purple"] = "purple";
    EndpointColor["blue"] = "blue";
    EndpointColor["green"] = "green";
    EndpointColor["yellow"] = "yellow";
    EndpointColor["red"] = "red";
    EndpointColor["gray"] = "gray";
    EndpointColor["black"] = "black";
    EndpointColor["white"] = "white";
})(EndpointColor = exports.EndpointColor || (exports.EndpointColor = {}));
function createMenu(name, pages, thumbnail, tags, theme, color, sections) {
    var menu = {
        name: name,
        pages: pages,
        thumbnail: thumbnail,
        theme: theme,
        color: color,
        tags: tags,
        sections: sections
    };
    return menu;
}
exports.createMenu = createMenu;
