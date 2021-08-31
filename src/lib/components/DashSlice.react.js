import React, {} from 'react';
import PropTypes from 'prop-types';
import {Slice} from 'react-pie-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMinusCircle, 
    faPalette, 
    faBookmark, 
    faArrowsAlt, 
    faTag, 
    faLink, 
    faExternalLinkAlt, 
    faPaperclip, 
    faAnchor,
    faDownload,
    faBezierCurve,
    faFilter
} from '@fortawesome/free-solid-svg-icons'

const icons = {
    "faMinusCircle":faMinusCircle, 
    "faPalette":faPalette, 
    "faBookmark":faBookmark, 
    "faArrowsAlt":faArrowsAlt, 
    "faTag":faTag, 
    "faLink":faLink, 
    "faExternalLinkAlt":faExternalLinkAlt, 
    "faPaperclip":faPaperclip, 
    "faAnchor":faAnchor,
    "faDownload":faDownload,
    "faBezierCurve":faBezierCurve,
    "faFilter":faFilter
}

export default function DashSlice (props) {
    const {icon, iconsize, n_clicks, loading_state} = props;
    return (
        // <div 
        //     id={props.id}
        //     key={props.id}
        //     className={props.className}
        //     style={props.style}
        //     // data-contentHeight={props.contentHeight}
        //     disabled={props.disabled}
        //     // children={props.children}
        //     data-dash-is-loading={
        //         (props.loading_state && props.loading_state.is_loading) || undefined
        //     }>
        <Slice
            // highlight={highlight}
            // icon={icon}
            // iconsize={iconsize}
            n_clicks={n_clicks}
            // data-dash-is-loading={
            //     (loading_state && loading_state.is_loading) || undefined
            // }
            onSelect={() => props.setProps({ "n_clicks" : n_clicks+1 })}
            >
            <FontAwesomeIcon icon={icons[icon]} size={iconsize}/>
        </Slice>
        // </div>
    );
}

DashSlice.defaultProps = {
    // highlight:true,
    // className:"dash-slice",
    iconsize:"2x",
    n_clicks:0,
    // style:{}
};

DashSlice.propTypes = {
    
    /**
     * CSS class
    */
    // className: PropTypes.string,

    /**
     * Height of the content in CSS Size. This prop is used to center the content between top and bottom of the slice. For example, 2em.
     */
    // contentHeight: PropTypes.string,

    /**
     * Children. Must be an icon
     */
    // children: PropTypes.string,
    
    /**
     * whether to highlight 
     */
    // highlight: PropTypes.bool,
    
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    icon: PropTypes.string.isRequired,
    
    /**
     * The ID used to identify this component in Dash callbacks.
     */
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
     * Height of the content in CSS Size. This prop is used to center the content between top and bottom of the slice. For example, 2em.
     */
    n_clicks: PropTypes.number,
    
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * inline styling (see Dash docs)
     */
    // style: PropTypes.object

    
};
