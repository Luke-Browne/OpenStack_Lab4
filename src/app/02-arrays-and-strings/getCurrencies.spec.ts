import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
        it('it should include USD', () => {
            expect(getCurrencies()).toContain('USD');
        });
        it('it should include GDP', () => {
            expect(getCurrencies()).toContain('GDP');
        });
        it('it should include EUR', () => {
            expect(getCurrencies()).toContain('EUR');
        });
});