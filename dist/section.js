"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSection(id, label) {
    return { id: id, label: label };
}
function createSections(sections) {
    var result = [];
    Object.keys(sections).forEach(function (k) {
        result.push(createSection(k, sections[k]));
    });
    return result;
}
exports.createSections = createSections;
