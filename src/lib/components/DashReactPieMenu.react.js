import React, {} from 'react';
import PropTypes from 'prop-types';
import PieMenu, { } from 'react-pie-menu'
//import { ThemeProvider, css } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


// function PieCenterCloseButton (props) {
//     const {centerRadius, iconsize, n_clicks, setProps, loading_state} = props;
//     return (
//         <PieCenter 
//             centerRadius={centerRadius || '30px'}
//             onclick={onclick}>
//             <FontAwesomeIcon icon={faWindowClose} size={iconsize}/>
//         </PieCenter>
//     );
// }

const parseChildrenToArray = (children) => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// const theme = {
//     pieMenu: {
//         container: css`
//         z-index: 1060;
//         `,
//         list: css`
//         z-index: 1060;
//         `,
//         item: css`
//         z-index: 1060;
//         `;
//     }
// }

export default function DashReactPieMenu (props) {
    const {className, id, children,  hidden, radius, centerRadius, centerX, centerY, loading_state, setProps,  ...otherProps} = props;

    const slices = parseChildrenToArray(children)
    // const centerButton = () => {return <PieCenter centerRadius={centerRadius || '30px'}> </PieCenter>}
    // const centerButton = <PieCenterCloseButton centerRadius={centerRadius || "30px"} iconsize={iconsize} onclick={() => setProps({hidden:true})}> </PieCenterCloseButton>

    return (
        <div 
            className={className}
            id={id}
            key={id}
            hidden={hidden}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined}>
            {/* <ThemeProvider theme={theme}> */}
            <PieMenu 
                radius={radius || "100px"}
                centerRadius={centerRadius || "30px"}
                centerX={centerX}
                centerY={centerY}
                // Center={centerButton}
                >
                {slices}
            </PieMenu>
            {/* </ThemeProvider> */}
        </div>
    );
}

DashReactPieMenu.defaultProps = {
    "className":"react-pie-menu",
    "radius":"100px",
    "centerRadius":"30px",
    "hidden":false
};

DashReactPieMenu.propTypes = {
    
    /**
     * Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
     */
    // attrs: PropTypes.object,
    
    /**
     * Defines the center radius. For example, 30px or 0 (no center). This prop is forwarded to the Center Component.
     */
    className: PropTypes.string,
    
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

    iconsize: PropTypes.string,
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
    setProps: PropTypes.func,

};
