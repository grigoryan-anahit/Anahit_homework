import React from 'react';
import Preloader from '../components/preloader';
import ErrorBoundary from '../error/errorBoundary';

const withSuspense = (Component) => {
    return function () {
        return <React.Suspense
            fallback={<Preloader />}
        >
            <ErrorBoundary>
                <Component />
            </ErrorBoundary>
        </React.Suspense>
    }
}

export default withSuspense;