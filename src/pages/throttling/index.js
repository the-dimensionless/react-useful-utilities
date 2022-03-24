import React from 'react';
import AutoCompleteLodash from './AutoCompleteLodash';
import AutoCompleteRxJs from './AutoCompleteRxJs';

const ThrottlingDemo = () => {
    return (
        <div>
            <AutoCompleteLodash />
            <AutoCompleteRxJs />
        </div>
    )
};

export default <ThrottlingDemo />;