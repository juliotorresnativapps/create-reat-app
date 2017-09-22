
/**
 * 
 */

/**
 * initialState
 */
const initialState = {
    parientStatusList: [
        { value: 'active', displayName: 'Active' },
        { value: 'inactive', displayName: 'Inactive' }
    ],
    benchmarkList: [
        { value: 'above', displayName: 'Above' },
        { value: 'belowEqual', displayName: 'Below and equal' }
    ],
    networkList: [
        { value: 'inactive', displayName: 'Network 1' },
        { value: 'inactive', displayName: 'Network 2' },
        { value: 'inactive', displayName: 'Network 3' },
        { value: 'inactive', displayName: 'Network 4' },
        { value: 'inactive', displayName: 'Network 5' }
    ],
    scoresList: [
        { value: 'milliman', displayName: 'Milliman' },
        { value: 'ComplianceScore', displayName: 'Compliance score' },
        { value: 'RAFScores', displayName: 'RAF scores' }
    ],
    periodOfTimeList: [
        { value: 'today', displayName: 'Today' },
        { value: 'last7Days', displayName: 'Last 7 Days' },
        { value: 'thisMonth', displayName: 'This Month' },
        { value: 'lastMonth', displayName: 'Last Month' },
        { value: 'thisQuarter', displayName: 'This Quarter' },
        { value: 'thisYear', displayName: 'This Year' },
    ],
    // year/month/week/days and the previous, current or future
    typesFilterPeriod: [
        {displayName: 'Year', value: 'year'},
        {displayName: 'Month', value: 'month'},
        {displayName: 'Week', value: 'week'},
        {displayName: 'Days', value: 'days'},
        {displayName: 'Previous', value: 'previous'},
        {displayName: 'Current', value: 'current'},
        {displayName: 'Future', value: 'future'},
    ]
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};