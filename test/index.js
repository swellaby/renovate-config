'use strict';

const assert = require('chai').assert;
const renovateConfig = require('../package.json')['renovate-config'];

suite('default Config Suite:', () => {
    const defaultConfig = renovateConfig.default;

    test('Should extend correct base configurations', () => {
        const extendsConfig = defaultConfig.extends;
        assert.deepEqual(extendsConfig.length, 2);
        assert.isTrue(extendsConfig.includes('config:base'));
        assert.isTrue(extendsConfig.includes(':preserveSemverRanges'));
    });

    test('Should set correct assignees', () => {
        const assignees = defaultConfig.assignees;
        assert.deepEqual(assignees.length, 1);
        assert.isTrue(assignees.includes('calebcartwright'));
    });

    test('Should set correct labels', () => {
        const labels = defaultConfig.labels;
        assert.deepEqual(labels.length, 1);
        assert.isTrue(labels.includes('dependencies'));
    });
});