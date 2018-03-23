/**
 * bar unit-test-file
 */
import {
    trigger
}from 'test/util'

describe('test vueScrollBar component', () => {
    let ins = null;
    let vs = null;
    let data = deepMerge(globalData, {});
    beforeAll(() => {
        ins = new Vue({
            template,
            data
        }).$mount();
        vs = ins.$refs['vsIns'];
        document.body.appendChild(ins.$el);
    })
    afterAll(() => {
        ins.$destroy();
        document.body.removeChild(ins.$el);
    })
    it('test mousemove and movedown', (done) => {
        setTimeout(() => {
            trigger(vs.$refs['verticalBar'].$el, 'mousedown');
            trigger(vs.$refs['verticalBar'].$el, 'mousemove');
            ins.$nextTick(() => {
                expect(vs.mousedown).toBe(true);
                trigger(document, 'mouseup');
                ins.$nextTick(() => {
                    expect(vs.mousedown).toBe(false);
                    done();
                })
            })
        }, 0);
    });
});