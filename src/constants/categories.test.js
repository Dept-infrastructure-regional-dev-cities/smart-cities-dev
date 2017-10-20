import { CATEGORIES } from './categories.js';
import INDICATORS from './indicators.js';

// since the categories tree only refers to indicators by string, it is brittle
// so we test here that each indicator id used is available in the INDICATORS object
CATEGORIES.forEach((category) => {
  // test the hero indicator ID
  it(`The hero indicator '${category.heroIndicatorId}' should be a valid indicator`, () => {
    expect(INDICATORS[category.heroIndicatorId]).toBeDefined();
  });

  // test the sub-category indicator IDs
  category.subCategories.forEach((subCategory) => {
    subCategory.summaryIndicatorIds.forEach((indicator) => {
      it(`The sub category summary indicator '${indicator}' should be a valid indicator`, () => {
        expect(INDICATORS[indicator]).toBeDefined();
      });
    });

    if (subCategory.charts) {
      subCategory.charts.forEach((chart) => {
        chart.indicatorIds.forEach((indicator) => {
          it(`The sub category chart indicator '${indicator}' should be a valid indicator`, () => {
            expect(INDICATORS[indicator]).toBeDefined();
          });
        });
      });
    }
  });
});
