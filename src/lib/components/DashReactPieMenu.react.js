import React, {} from 'react';
import PropTypes from 'prop-types';
import PieMenu, {Slice} from 'react-pie-menu';

// import { isNil } from 'ramda';

const parseChildrenToArray = (children) => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// const resolveChildProps = (child) => {
//     // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
//     if (
//         // disabled is a defaultProp (so it's always set)
//         // meaning that if it's not set on child.props, the actual
//         // props we want are lying a bit deeper - which means they
//         // are coming from Dash
//         isNil(child.props.disabled) &&
//         child.props._dashprivate_layout &&
//         child.props._dashprivate_layout.props
//     ) {
//         // props are coming from Dash
//         return child.props._dashprivate_layout.props;
//     } else {
//         // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
//         return child.props;
//     }
// };

export default function DashReactPieMenu (props) {
    const {id, children, hidden, radius, centerRadius, centerX, centerY, loading_state, ...otherProps} = props;

    const slices = parseChildrenToArray(children)
        // .map((child) => {
        //     const childProps = resolveChildProps(child)
        //     return (
        //         <Slice
        //             id = {childProps.id}
        //             key = {childProps.id}
        //             //_highlight={childProps.highlight}
        //             n_clicks={childProps.n_clicks}
        //             // onSelect={childProps.onSelect}
        //             onSelect={() => props.setProps({ "n_clicks" : childProps.n_clicks + 1 })}
        //         >
        //             <FontAwesomeIcon icon={icons[childProps.icon]} size={childProps.iconsize}/>
        //             {/* {child} */}
        //         </Slice>
        //     )
        // })

    return (
        <div 
            id={id}
            hidden={hidden}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined}>
            <PieMenu 
                radius={radius}
                centerRadius={centerRadius}
                centerX={centerX}
                centerY={centerY}
                // onChange={
                    /*
                     * Send the new value to the parent component.
                     * setProps is a prop that is automatically supplied
                     * by dash's front-end ("dash-renderer").
                     * In a Dash app, this will update the component's
                     * props and send the data back to the Python Dash
                     * app server if a callback uses the modified prop as
                     * Input or State.
                     */
                    // e => props.setProps({ value: e.target.value })
                // }
            >
                {slices}
            </PieMenu>
        </div>
    );
}


DashReactPieMenu.defaultProps = {
    "radius":"125px",
    "centerRadius":"30px",
    hidden:false
};

DashReactPieMenu.propTypes = {
    
    /**
     * Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
     */
    // attrs: PropTypes.object,
    

    /**
     * Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
     */
    centerRadius: PropTypes.string,
    
    /**
     * Defines the x position of the pie menu in CSS Unit. For example, 0px will be left-most position of its parent container.
     */
    centerX: PropTypes.string.isRequired,
    
    /**
     * Defines the y position of the pie menu in CSS Unit. For example, 0px will be the top-most position of its parent container.
     */
    centerY: PropTypes.string.isRequired,
    
    /**
     * DashSlice components
     */
    children: PropTypes.array,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    hidden: PropTypes.bool,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * Assigned by Dash
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Defines pie menu's radius in CSS Unit. For example, 150px. `
     */
    radius: PropTypes.string,
    
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
