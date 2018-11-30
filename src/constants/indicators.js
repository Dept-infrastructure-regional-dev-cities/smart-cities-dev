/* eslint-disable max-len */

const FORMATS = {
  THOUSANDS: '0,0',
  ONE_DECIMAL: '0.0',
  ZERO_OR_ONE_DECIMAL: '0.[0]',
  ONE_OR_TWO_DECIMALS: '0.0[0]',
  ZERO_TO_TWO_DECIMALS: '0.[00]',
  THREE_DECIMALS: '0.[000]',
  PERCENT_ONE_OR_TWO_DECIMALS: '0.0[0]%',
  PERCENT_ZERO_OR_ONE_DECIMAL: '0.[0]%',
  PERCENT_ZERO_TO_TWO_DECIMALS: '0.[00]%',
  DOLLAR_THOUSANDS: '$0,0',
  DOLLAR_ABBREVIATION_ZERO_OR_ONE_DECIMAL: '$0,0.[0]a',
  DOLLAR_ABBREVIATION_ZERO_TO_TWO_DECIMALS: '$0,0.[00]a',
  ABBREVIATION_ZERO_TO_TWO_DECIMALS: '0.[00]a',
  ABBREVIATION_ZERO_OR_ONE_DECIMAL: '0.[0]a',
};

export default {
  population: {
    name: 'Population',
    format: FORMATS.ABBREVIATION_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Population, Persons, People',
  },
  growthRate: {
    name: 'Annual population growth rate',
    legendText: 'Annual growth',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Population growth rate, Persons, % per year',
  },
  indigenousPopulation: {
    name: 'Proportion of population that is Indigenous',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Indigenous status, % of population',
  },
  population10yr: {
    name: 'Average annual population growth over 10 years',
    legendText: 'Average growth over 10 years',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Population, persons, Growth rate %, 10 year average',
  },
  householdSize: {
    name: 'Average persons per dwelling',
    format: FORMATS.ONE_OR_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Average Household Size, People per household',
  },
  medianHousePrice: {
    name: 'Median house price',
    legendText: 'House',
    format: FORMATS.DOLLAR_ABBREVIATION_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2017',
    source: 'Median property price, House, AUD',
  },
  medianUnitPrice: {
    name: 'Median unit price',
    legendText: 'Unit',
    format: FORMATS.DOLLAR_ABBREVIATION_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2017',
    source: 'Median property price, Unit, AUD',
  },
  householdIncome: {
    name: 'Median annual household income',
    longDescription: 'This shows the median annual household income.\n\nSource: ABS - Census 2016',
    format: FORMATS.DOLLAR_ABBREVIATION_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Median Household Income, AUD per year',
  },
  lifeExpectancy: {
    name: 'Life expectancy at birth',
    format: FORMATS.ONE_DECIMAL,
    cardSuffix: 'years',
    contextual: true,
    lastUpdated: '2016',
    source: 'Life expectancy, Persons, years',
  },
  shareInBottomIncomeQuintile: {
    name: 'Share of households in lowest income quintile',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Share of households in the bottom 20 per cent of national income distribution, % of population',
  },
  socioEconomicIndex: {
    name: 'Index of Relative Socio-economic Disadvantage',
    format: FORMATS.THOUSANDS,
    contextual: true,
    lastUpdated: '2011',
    source: 'Socio-Economic Indexes for Areas, Index of Relative Socio-economic Disadvantage, Index',
  },
  goodsProducingSector: {
    name: 'Share of employment in goods producing sector',
    legendText: 'Goods',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2017',
    source: 'Goods Producing Sector, % of jobs in city',
  },
  marketServices: {
    name: 'Share of employment in market services sector',
    legendText: 'Market services',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2017',
    source: 'Market Services, % of jobs in city',
  },
  nonMarketServices: {
    name: 'Share of employment in non-market services sector',
    legendText: 'Non-market services',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2017',
    source: 'Non-market Services, % of jobs in city',
  },
  participationRateGeneral: {
    name: 'Participation rate',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'Participation rate, all persons, % of population aged over 15 years',
  },
  participationRateMale: {
    name: 'Male participation rate',
    legendText: 'Male',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'Participation rate, Male, % of population aged over 15 years',
  },
  participationRateFemale: {
    name: 'Female participation rate',
    legendText: 'Female',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'Participation rate, Female, % of population aged over 15 years',
  },
  educationalAttainmentYr12: {
    name: 'Completed year 12',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Education attainment - Completed Year 12, % of population',
  },
  educationalAttainmentCertificate: {
    name: 'Completed Certificate 3,4 or Diploma',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Education attainment - Completed Certificate III or IV, % of population',
  },
  educationalAttainmentTertiary: {
    name: 'Completed bachelor degree or higher',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Education attainment - Completed Bachelor Degree or Higher, % of population',
  },
  dispersion: {
    name: 'Local governments per 100k people',
    format: FORMATS.ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Government Dispersion, Number of Local Government Areas per 100 000 persons',
  },
  dwellingHouse: {
    name: 'Dwelling type ratio: house',
    legendText: 'House',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dwelling type ratio, Separate house, Percentage of Dwellings',
  },
  dwellingSemi: {
    name: 'Dwelling type ratio: semi-detached',
    legendText: 'Semi-detached',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dwelling type ratio, Semi-detached, Percentage of Dwellings',
  },
  dwellingApartment: {
    name: 'Dwelling type ratio: flat or apartment',
    legendText: 'Flat / apartment',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dwelling type ratio, Flat or Apartment, Percentage of Dwellings',
  },
  dwellingOther: {
    name: 'Dwelling type ratio: other',
    legendText: 'Other',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dwelling type ratio, Other, Percentage of Dwellings',
  },
  dwellingPriceToIncomeRatio: {
    name: 'Dwelling price to household income ratio',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Dwelling price to income ratio, Ratio',
  },
  jobsCar: {
    name: 'Jobs accessible by car within 30 minutes',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    hideForCities: ['western-sydney'],
    lastUpdated: '2016',
    source: 'Proportion of jobs accessible within 30 minutes, By Car, % of all jobs in city',
  },
  activeJourneys: {
    name: 'Proportion of journeys to work by active transport',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Active transport use, % of journeys to work',
  },
  publicJourneys: {
    name: 'Proportion of journeys to work by public transport',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Public transport use, % of journeys to work',
  },
  unemploymentRateGeneral: {
    name: 'Unemployment rate',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2017',
    source: 'Unemployment rate, Persons, % of population by sex',
  },
  unemploymentRateIndigenous: {
    name: 'Indigenous unemployment rate',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Unemployment rate, Unemployed, % of indigenous population',
  },
  unemploymentRateYouth: {
    name: 'Youth unemployment rate',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2017',
    source: 'Proportion of population searching for work, Unemployed total, Persons, Percentage of Youth Population',
  },
  employmentGrowth: {
    name: 'Annual employment growth',
    format: FORMATS.PERCENT_ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2017',
    source: 'Growth in Employment, Job growth, past 12 months, percentage change',
  },
  publicHousingUnits: {
    name: 'Public and community housing units',
    format: FORMATS.THOUSANDS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Public housing, Dwelling units per 100 000 persons',
  },
  homelessnessRate: {
    name: 'Homeless per 100k people',
    format: FORMATS.THOUSANDS,
    contextual: false,
    lastUpdated: '2011',
    source: 'Homelessness, number of homeless per 100 000',
  },
  housingConstructionCosts: {
    name: 'Average housing construction costs',
    format: FORMATS.DOLLAR_THOUSANDS,
    contextual: false,
    lastUpdated: '2017',
    source: 'Residential construction costs, AUD per square metre',
  },
  rentStress: {
    name: 'Proportion of households under rent stress',
    format: FORMATS.PERCENT_ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Rent Stress, Proportion of households under rent stress, Dwellings',
  },
  mortgageStress: {
    name: 'Proportion of households under mortgage stress',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Mortgage stress, Proportion of households under mortgage stress, Dwellings',
  },
  residentialBuildingApprovalsGrowth: {
    name: 'Population change per residential building approval',
    format: FORMATS.ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2017',
    source: 'Annual Building Approvals, Approvals per annual population change, Ratio',
  },
  peakDelay: {
    name: 'Peak travel delay',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'Percentage increase in car travel time, Overall, % of travel time',
  },
  accessToPublicTransport: {
    name: 'Dwellings with access to public transport',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'The proportion of dwellings within 400 metres of a frequently serviced public transport stop – one with a scheduled service every 30 minutes from 7am to 7pm on a normal weekday',
  },
  grossParklandArea: {
    name: 'Percentage of area that is greenspace',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Land area that is parkland, % of gross land area',
  },
  greenhouseGasEmissions1: {
    name: 'Greenhouse gas emissions (scope 1) tonnes per person',
    legendText: 'Scope 1',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2015',
    source: 'Scope 1 emissions',
  },
  greenhouseGasEmissions2: {
    name: 'Greenhouse gas emissions (scope 2) tonnes per person',
    legendText: 'Scope 2',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2015',
    source: 'Scope 2 emissions',
  },
  accessToGreenSpace: {
    name: 'Dwellings with access to greenspace',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Access to green space, % of dwellings',
  },
  airPollutionPm10: {
    name: 'Air pollution particles smaller than PM10',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Air quality, Annual mean, >PM10, ug/m3',
  },
  airPollutionPm2point5: {
    name: 'Air pollution particles smaller than PM2.5',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'Air quality, Annual mean, <PM2.5, ug/m3',
  },
  energyEfficiencyOfBuildings: {
    name: 'Office building energy and water efficiency rating',
    format: FORMATS.ZERO_TO_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '',
    source: 'The average National Australian Built Environment Rating System (NABERS) score for rated office buildings in the city, weighted by rated floor space',
  },
  volunteeringRate: {
    name: 'Proportion of people that volunteer',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Number of volunteers, All persons, % of Persons 15 or over',
  },
  perceivedSafety: {
    name: 'Adults that feel safe after dark in their local area',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2014',
    source: 'Feelings of safety walking alone in local area after dark , % of population',
  },
  adultObesity: {
    name: 'Proportion of adults who are obese',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2015',
    source: 'Percentage of the adult population who are obese, Estimated population, aged 18 years and over, who were obese, % of population',
  },
  crisisSupport: {
    name: 'Percentage of population able to get crisis support',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2014',
    source: 'Able to get support in times of crisis , % of population',
  },
  suicideRate: {
    name: 'Suicides per 100k people',
    format: FORMATS.ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Suicides, per 100 000',
  },
  householdsWithBroadband: {
    name: 'Households with broadband',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Percentage of households with a broadband connection, Internet accessed from dwelling, % of dwellings',
  },
  patentApplications: {
    name: 'Patent applications per 100k people',
    format: FORMATS.ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Patents applications, Patent applications per 100 000',
  },
  trademarkApplications: {
    name: 'Trademark applications per 100k people',
    format: FORMATS.ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2016',
    source: 'Trademark applications, applications per 100 000 people',
  },
  newBusinessEntrants: {
    name: 'New business entry rate',
    legendText: 'Entrants',
    format: FORMATS.PERCENT_ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'New business entrants and exits, New Businesses as a share of the stock',
  },
  newBusinessExits: {
    name: 'Share of ceased businesses',
    legendText: 'Exits',
    format: FORMATS.PERCENT_ONE_OR_TWO_DECIMALS,
    contextual: false,
    lastUpdated: '2016',
    source: 'New business entrants and exits, Business exits as a share of the stock',
  },
  knowledgeWorkersRatio: {
    name: 'Workers in knowledge intensive services',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '2017',
    source: 'Workers in knowledge intensive services industries, Persons, % of total employment',
  },
  linkedInConnectivityLocal: {
    name: 'LinkedIn contacts that are local',
    legendText: 'Local',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '',
    source: 'LinkedIn connectivity, Average number of connections from local area, % of connections average',
  },
  linkedInConnectivityRestOfNation: {
    name: 'LinkedIn connectivity: rest of Australia',
    legendText: 'National',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '',
    source: 'LinkedIn connectivity, Average number of connections from the rest of Australia, % of connections average',
  },
  linkedInConnectivityInternational: {
    name: 'LinkedIn connectivity: international',
    legendText: 'International',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: false,
    lastUpdated: '',
    source: 'LinkedIn connectivity, Average number of international connections, % of connections average',
  },
  populationDensity: {
    name: 'Population density',
    format: FORMATS.THOUSANDS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Population-weighted density, Persons per square kilometre',
  },
  dependencyRatioNotWorkingAge: {
    name: 'Dependency ratio',
    format: FORMATS.ONE_OR_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dependency ratio, Number of persons of non-working age per person of working age',
  },
  dependencyRatio14OrYounger: {
    name: 'Dependency ratio: 14 or younger',
    legendText: '0-14',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dependency ratio, All persons 0-14, % of population',
  },
  dependencyRatio15To64: {
    name: 'Dependency ratio: 15-64',
    legendText: '15-64',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dependency ratio, All persons 15-64, % of population',
  },
  dependencyRatio65OrOlder: {
    name: 'Dependency ratio: 65 or older',
    legendText: '65 or older',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Dependency ratio, All persons 65+, % of population',
  },
  dependencyRatioMedianAge: {
    name: 'Median age',
    format: FORMATS.ZERO_OR_ONE_DECIMAL,
    cardSuffix: 'years',
    contextual: true,
    lastUpdated: '2016',
    source: 'Dependency ratio, median age, All persons, years',
  },
  disabilityRate: {
    name: 'Proportion of population with disability',
    format: FORMATS.PERCENT_ZERO_TO_TWO_DECIMALS,
    contextual: true,
    lastUpdated: '2015',
    source: 'Disability, all persons, % of population',
  },
  tenureRatioOwnedOutright: {
    name: 'Proportion of dwellings owned outright',
    legendText: 'Owned outright',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Tenure ratio, Owned outright, %',
  },
  tenureRatioMortgage: {
    name: 'Proportion of dwellings owned with a mortgage',
    legendText: 'Mortgage',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Tenure ratio, Owned with a mortgage, %',
  },
  tenureRatioRented: {
    name: 'Proportion of dwellings rented',
    legendText: 'Rented',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Tenure ratio, Rented, %',
  },
  tenureRatioOther: {
    name: 'Proportion of dwellings other',
    legendText: 'Other',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Tenure ratio, Other, %',
  },
  languagesOtherThanEnglish: {
    name: 'Languages other than English spoken at home',
    format: FORMATS.PERCENT_ZERO_OR_ONE_DECIMAL,
    contextual: true,
    lastUpdated: '2016',
    source: 'Language other than English spoken at home, All persons, % of population',
  },
};
