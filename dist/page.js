"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultSection;
(function (defaultSection) {
    defaultSection["dashboard"] = "dashboard";
    defaultSection["manage"] = "manage";
})(defaultSection = exports.defaultSection || (exports.defaultSection = {}));
function createPage(id, name, components, section, group) {
    return {
        id: id,
        name: name,
        group: group,
        components: components,
        section: section
    };
}
exports.createPage = createPage;
