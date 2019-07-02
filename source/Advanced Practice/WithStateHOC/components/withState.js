//Core
import React, {Component} from 'react';

//Instruments
import {getDisplayName} from '../helpers';

export const withState = ({
    stateName,
    stateValue,
    stateUpdaterName,
    stateUpdater,
}) => (WrappedComponent) => {
    class WithState extends Component {
        state = {
            [stateName]: stateValue,
        };

        [stateUpdaterName] = () => {
            this.setState(stateUpdater);
        };

        render() {
            const updatersToForward = {
                [stateUpdaterName]: this[stateUpdaterName],
            };

            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                    {...updatersToForward}
                />
            );
        }
    }

    WithState.displayName = `WithState(${getDisplayName(WrappedComponent)})`;

    return WithState;
};
