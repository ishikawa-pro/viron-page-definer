"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultSection;
(function (defaultSection) {
    defaultSection["dashboard"] = "dashboard";
    defaultSection["manage"] = "manage";
})(defaultSection = exports.defaultSection || (exports.defaultSection = {}));
function createPage(id, name, components, section, group) {
    var page = {
        id: id,
        name: name,
        group: group,
        components: components,
        section: section
    };
    return page;
}
exports.createPage = createPage;
