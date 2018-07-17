import reducer from './../../src/reducers/reducer';

describe('reducer', () => {
  it('Should return state', () => {
    expect(reducer({}, { type: null })).toEqual({});
  })

});
